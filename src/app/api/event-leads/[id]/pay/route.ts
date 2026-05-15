import { NextRequest, NextResponse } from "next/server";
import FedaPay from "fedapay";
import { prisma } from "@/lib/prisma";

export async function POST(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    const lead = await prisma.eventLead.findUnique({ where: { id } });
    if (!lead) return NextResponse.json({ error: "Réservation introuvable" }, { status: 404 });

    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (FedaPay as any).setApiKey(process.env.FEDAPAY_SECRET_KEY!);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (FedaPay as any).setEnvironment(process.env.FEDAPAY_ENV ?? "sandbox");

    const [firstName, ...rest] = lead.name.split(" ");
    const lastName = rest.join(" ") || firstName;

    const serviceLabel =
      lead.service === "diagnostic" ? "Diagnostic de peau professionnel" : "Suppression des accrochons";

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const transaction = await (FedaPay as any).Transaction.create({
      description: `Réservation ${serviceLabel} — Parakou ${lead.date ?? ""}`,
      amount: lead.price,
      currency: { iso: "XOF" },
      callback_url: `${siteUrl}/reservation-parakou/confirmation?id=${id}`,
      customer: {
        firstname: firstName,
        lastname: lastName,
        phone_number: { number: lead.phone, country: "BJ" },
        ...(lead.email ? { email: lead.email } : {}),
      },
    });

    const token = await transaction.generateToken();

    await prisma.eventLead.update({
      where: { id },
      data: { paymentId: String(transaction.id), stepReached: 4 },
    });

    return NextResponse.json({ paymentUrl: token.url });
  } catch (err) {
    console.error("[event-leads pay]", err);
    return NextResponse.json({ error: "Erreur lors de la création du paiement" }, { status: 500 });
  }
}
