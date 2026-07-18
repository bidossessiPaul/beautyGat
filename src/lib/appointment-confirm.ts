import { prisma } from "@/lib/prisma";
import { isTransactionApproved } from "@/lib/fedapay";
import { notifyNewAppointment } from "@/lib/email";

export type ConfirmResult =
  | { state: "paid"; appointment: Awaited<ReturnType<typeof prisma.appointment.findUnique>> }
  | { state: "unpaid" }
  | { state: "not_found" };

/**
 * Confirme l'acompte d'un rendez-vous après vérification auprès de FedaPay,
 * puis envoie les emails — une seule fois.
 *
 * Appelée à la fois par la page de retour du client et par le webhook FedaPay.
 * Les deux peuvent se déclencher pour un même paiement : l'idempotence repose
 * sur un updateMany conditionné à `notifiedAt: null`, atomique côté MySQL.
 * Seul l'appelant qui obtient count === 1 envoie les emails.
 */
export async function confirmDepositIfPaid(id: string): Promise<ConfirmResult> {
  const rdv = await prisma.appointment.findUnique({ where: { id } });
  if (!rdv) return { state: "not_found" };

  // Déjà confirmé lors d'un passage précédent.
  if (rdv.depositPaid) return { state: "paid", appointment: rdv };

  if (!rdv.paymentId) return { state: "unpaid" };

  const approved = await isTransactionApproved(rdv.paymentId);
  if (!approved) return { state: "unpaid" };

  const claimed = await prisma.appointment.updateMany({
    where: { id, notifiedAt: null },
    data: {
      depositPaid: true,
      status: "confirmed",
      notifiedAt: new Date(),
    },
  });

  if (claimed.count === 1) {
    await notifyNewAppointment({
      id: rdv.id,
      serviceTitle: rdv.serviceTitle,
      servicePrice: rdv.servicePrice,
      date: rdv.date,
      time: rdv.time,
      firstName: rdv.firstName,
      lastName: rdv.lastName,
      phone: rdv.phone,
      email: rdv.email,
      message: rdv.message,
      depositPaid: true,
      depositAmount: rdv.depositAmount,
    });
  } else {
    // Un autre appel (webhook ou retour navigateur) a déjà pris la main :
    // on s'assure seulement que l'acompte est bien marqué comme réglé.
    await prisma.appointment.update({
      where: { id },
      data: { depositPaid: true, status: "confirmed" },
    });
  }

  const updated = await prisma.appointment.findUnique({ where: { id } });
  return { state: "paid", appointment: updated };
}

/**
 * Notifie un rendez-vous en mode "sans acompte", si ce n'est pas déjà fait.
 *
 * Sert de filet lorsque l'ouverture du paiement échoue : le rendez-vous existe
 * déjà en base, il ne doit pas rester invisible pour le salon.
 */
export async function notifyWithoutDeposit(id: string): Promise<void> {
  const claimed = await prisma.appointment.updateMany({
    where: { id, notifiedAt: null },
    data: { notifiedAt: new Date() },
  });
  if (claimed.count !== 1) return;

  const rdv = await prisma.appointment.findUnique({ where: { id } });
  if (!rdv) return;

  await notifyNewAppointment({
    id: rdv.id,
    serviceTitle: rdv.serviceTitle,
    servicePrice: rdv.servicePrice,
    date: rdv.date,
    time: rdv.time,
    firstName: rdv.firstName,
    lastName: rdv.lastName,
    phone: rdv.phone,
    email: rdv.email,
    message: rdv.message,
    depositPaid: false,
    depositAmount: null,
  });
}
