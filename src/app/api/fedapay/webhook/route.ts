import { NextRequest, NextResponse } from "next/server";
import { createHmac, timingSafeEqual } from "crypto";
import { prisma } from "@/lib/prisma";
import { confirmDepositIfPaid } from "@/lib/appointment-confirm";

/**
 * Webhook FedaPay — notifie les changements de statut des transactions.
 * URL à déclarer dans le dashboard FedaPay : /api/fedapay/webhook
 *
 * Couvre deux usages :
 *  - les commandes de la boutique (modèle Order)
 *  - les acomptes de rendez-vous (modèle Appointment)
 *
 * Sert aussi de filet lorsque le client ferme son navigateur avant d'être
 * redirigé vers la page de confirmation.
 */

/** Tolérance sur l'horodatage de la signature, contre le rejeu. */
const MAX_SIGNATURE_AGE_SECONDS = 300;

/**
 * Valide l'en-tête `x-fedapay-signature`, au format `t=<timestamp>,s=<hmac>`.
 * Le HMAC-SHA256 porte sur `<timestamp>.<corps brut>`.
 */
function verifySignature(rawBody: string, header: string | null, secret: string): boolean {
  if (!header) return false;

  const parts = Object.fromEntries(
    header.split(",").map((p) => {
      const [k, ...rest] = p.trim().split("=");
      return [k, rest.join("=")];
    }),
  );

  const timestamp = parts.t;
  const received = parts.s;
  if (!timestamp || !received) return false;

  const age = Math.abs(Math.floor(Date.now() / 1000) - Number(timestamp));
  if (!Number.isFinite(age) || age > MAX_SIGNATURE_AGE_SECONDS) return false;

  const expected = createHmac("sha256", secret).update(`${timestamp}.${rawBody}`).digest("hex");

  const a = Buffer.from(received);
  const b = Buffer.from(expected);
  return a.length === b.length && timingSafeEqual(a, b);
}

export async function POST(req: NextRequest) {
  try {
    const secret = process.env.FEDAPAY_WEBHOOK_SECRET;
    if (!secret) {
      // Fail-closed : sans secret configuré, on refuse plutôt que d'accepter
      // des requêtes non authentifiées capables de modifier des paiements.
      console.error("[fedapay webhook] FEDAPAY_WEBHOOK_SECRET non configuré — requête refusée");
      return NextResponse.json({ error: "Webhook non configuré" }, { status: 503 });
    }

    // Le corps brut est indispensable : re-sérialiser le JSON casserait le HMAC.
    const rawBody = await req.text();

    if (!verifySignature(rawBody, req.headers.get("x-fedapay-signature"), secret)) {
      console.warn("[fedapay webhook] signature invalide — requête rejetée");
      return NextResponse.json({ error: "Signature invalide" }, { status: 401 });
    }

    const body = JSON.parse(rawBody);
    const event: string | undefined = body?.name;
    const transactionData = body?.data?.object;

    if (!transactionData?.id) {
      return NextResponse.json({ received: true });
    }

    const transactionId = String(transactionData.id);

    let status = "pending";
    if (event === "transaction.approved") status = "paid";
    else if (event === "transaction.canceled" || event === "transaction.declined") status = "failed";

    // Boutique
    await prisma.order.updateMany({
      where: { transactionId },
      data: { status },
    });

    // Acompte de rendez-vous : confirmDepositIfPaid revérifie le statut
    // auprès de FedaPay et gère l'envoi unique des emails.
    if (event === "transaction.approved") {
      const rdv = await prisma.appointment.findFirst({
        where: { paymentId: transactionId },
        select: { id: true },
      });
      if (rdv) await confirmDepositIfPaid(rdv.id);
    }

    return NextResponse.json({ received: true });
  } catch (err) {
    console.error("[fedapay webhook] error:", err);
    return NextResponse.json({ error: "Webhook error" }, { status: 500 });
  }
}
