import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { validateAppointmentInput } from "@/lib/booking";
import { isAdminRequest } from "@/lib/admin-auth";
import { notifyNewAppointment } from "@/lib/email";

/**
 * Création d'une demande de rendez-vous.
 *
 * Deux parcours possibles :
 *  - sans acompte  → le rendez-vous est enregistré et les emails partent aussitôt
 *  - avec acompte  → aucun email ici ; ils sont envoyés une fois le paiement
 *                    vérifié auprès de FedaPay (voir /api/rdv/[id]/pay et la
 *                    page de confirmation). On n'annonce pas une place garantie
 *                    tant que l'argent n'est pas encaissé.
 */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => null);

    const parsed = validateAppointmentInput(body);
    if (!parsed.ok) {
      return NextResponse.json({ error: parsed.error }, { status: 400 });
    }

    const withDeposit = (body as Record<string, unknown>)?.withDeposit === true;

    const appointment = await prisma.appointment.create({
      data: {
        ...parsed.data,
        // Sans acompte, la demande reste à confirmer manuellement par le salon.
        status: "pending",
        notifiedAt: withDeposit ? null : new Date(),
      },
    });

    let clientEmailSent = false;

    if (!withDeposit) {
      // Volontairement attendu : sur Vercel, le travail lancé après la réponse
      // est interrompu dès que la fonction rend la main.
      const sent = await notifyNewAppointment({
        id: appointment.id,
        serviceTitle: appointment.serviceTitle,
        servicePrice: appointment.servicePrice,
        date: appointment.date,
        time: appointment.time,
        firstName: appointment.firstName,
        lastName: appointment.lastName,
        phone: appointment.phone,
        email: appointment.email,
        message: appointment.message,
        depositPaid: false,
        depositAmount: null,
      });
      clientEmailSent = sent.clientSent;
    }

    // clientEmailSent évite d'annoncer au client un email qui n'est jamais parti.
    return NextResponse.json({ id: appointment.id, clientEmailSent }, { status: 201 });
  } catch (err) {
    console.error("[api/rdv] error:", err);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}

/** Liste des rendez-vous — réservée à l'administration. */
export async function GET() {
  if (!(await isAdminRequest())) {
    return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
  }

  try {
    const appointments = await prisma.appointment.findMany({
      orderBy: [{ date: "desc" }, { time: "asc" }],
    });
    return NextResponse.json(appointments);
  } catch {
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
