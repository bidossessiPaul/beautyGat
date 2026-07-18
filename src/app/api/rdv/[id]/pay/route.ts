import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { createTransaction, FedaPayValidationError } from "@/lib/fedapay";
import { getDepositAmount } from "@/lib/booking";
import { notifyWithoutDeposit } from "@/lib/appointment-confirm";

/**
 * Ouvre le paiement de l'acompte "Garantir ma place" pour un rendez-vous.
 *
 * Le montant provient exclusivement du serveur (getDepositAmount) : il n'est
 * jamais lu depuis la requête, sans quoi n'importe qui pourrait réserver à
 * 1 FCFA.
 */
export async function POST(_req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;

    const rdv = await prisma.appointment.findUnique({ where: { id } });
    if (!rdv) {
      return NextResponse.json({ error: "Rendez-vous introuvable" }, { status: 404 });
    }
    if (rdv.depositPaid) {
      return NextResponse.json({ error: "Acompte déjà réglé" }, { status: 409 });
    }

    const amount = getDepositAmount();
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

    const { id: transactionId, paymentUrl } = await createTransaction({
      description: `Acompte réservation — ${rdv.serviceTitle} (${rdv.date} ${rdv.time})`,
      amount,
      callbackUrl: `${siteUrl}/rendez-vous/confirmation?id=${id}`,
      firstName: rdv.firstName,
      lastName: rdv.lastName,
      phone: rdv.phone,
      email: rdv.email,
    });

    // depositAmount est enregistré dès maintenant pour garder une trace du
    // montant demandé, mais depositPaid reste false jusqu'à vérification.
    await prisma.appointment.update({
      where: { id },
      data: { paymentId: transactionId, depositAmount: amount },
    });

    return NextResponse.json({ paymentUrl });
  } catch (err) {
    // Données refusées par FedaPay : le client peut corriger lui-même, on ne
    // déclenche donc pas le repli "sans acompte" et on lui dit quoi rectifier.
    if (err instanceof FedaPayValidationError) {
      return NextResponse.json({ error: err.message }, { status: 400 });
    }

    console.error("[api/rdv pay] error:", err);

    // FedaPay est injoignable : le rendez-vous est déjà enregistré, on prévient
    // le salon en mode "sans acompte" pour ne pas perdre la demande.
    try {
      const { id } = await params;
      await notifyWithoutDeposit(id);
    } catch (notifyErr) {
      console.error("[api/rdv pay] repli notification échoué:", notifyErr);
    }

    return NextResponse.json(
      { error: "Le paiement est momentanément indisponible. Votre demande a bien été enregistrée, nous vous contacterons pour confirmer." },
      { status: 502 },
    );
  }
}
