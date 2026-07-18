import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Check, Clock, X } from "lucide-react";
import { confirmDepositIfPaid } from "@/lib/appointment-confirm";

export const dynamic = "force-dynamic";

interface Props {
  searchParams: Promise<{ id?: string }>;
}

function formatDate(date: string): string {
  try {
    return new Date(`${date}T12:00:00`).toLocaleDateString("fr-FR", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  } catch {
    return date;
  }
}

/**
 * Page de retour après paiement de l'acompte.
 *
 * Le statut affiché découle d'une vérification serveur auprès de FedaPay :
 * visiter cette URL ne suffit jamais à faire passer un rendez-vous en "payé".
 */
export default async function ConfirmationRdvPage({ searchParams }: Props) {
  const { id } = await searchParams;

  const result = id ? await confirmDepositIfPaid(id) : ({ state: "not_found" } as const);

  const paid = result.state === "paid";
  const rdv = result.state === "paid" ? result.appointment : null;

  const Icon = paid ? Check : result.state === "unpaid" ? Clock : X;
  const iconBg = paid ? "bg-emerald-500" : result.state === "unpaid" ? "bg-amber-500" : "bg-[#c0392b]";

  const title = paid
    ? "Votre place est garantie"
    : result.state === "unpaid"
      ? "Paiement non finalisé"
      : "Réservation introuvable";

  const intro = paid
    ? "Nous avons bien reçu votre acompte. Votre créneau est bloqué et un email de confirmation vient de vous être envoyé."
    : result.state === "unpaid"
      ? "Votre paiement n'a pas été confirmé par FedaPay. Aucun montant n'a été prélevé et votre créneau n'est pas encore garanti. Vous pouvez réessayer ou nous contacter directement."
      : "Nous n'avons pas retrouvé cette réservation. Si vous avez été débité, contactez-nous et nous régulariserons immédiatement.";

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#faf8f6] pt-[90px]">
        <div className="max-w-[560px] mx-auto px-4 py-16">

          <div className="text-center">
            <div className={`w-16 h-16 ${iconBg} rounded-full flex items-center justify-center mx-auto mb-6`}>
              <Icon className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-[26px] md:text-[32px] font-bold text-[#1a1a1a] mb-3">{title}</h1>
            <p className="text-[#666] text-[15px] leading-relaxed mb-8">{intro}</p>
          </div>

          {rdv && (
            <div className="bg-white border border-[#e8e8e8] p-6 text-left mb-8 space-y-3">
              <div className="flex justify-between text-[13px]">
                <span className="text-[#999]">Soin</span>
                <span className="font-semibold text-[#1a1a1a] text-right max-w-[60%]">{rdv.serviceTitle}</span>
              </div>
              <div className="flex justify-between text-[13px]">
                <span className="text-[#999]">Date</span>
                <span className="font-semibold text-[#1a1a1a] capitalize">{formatDate(rdv.date)}</span>
              </div>
              <div className="flex justify-between text-[13px]">
                <span className="text-[#999]">Heure</span>
                <span className="font-semibold text-[#1a1a1a]">{rdv.time}</span>
              </div>
              <div className="flex justify-between text-[13px]">
                <span className="text-[#999]">Client</span>
                <span className="font-semibold text-[#1a1a1a]">{rdv.firstName} {rdv.lastName}</span>
              </div>
              {rdv.depositAmount && (
                <div className="flex justify-between text-[13px] pt-3 border-t border-[#ebebeb]">
                  <span className="text-[#999]">Acompte réglé</span>
                  <span className="font-bold text-[#6D071A]">
                    {rdv.depositAmount.toLocaleString("fr-FR")} FCFA
                  </span>
                </div>
              )}
              <p className="text-[11px] text-[#bbb] pt-2 leading-relaxed">
                Cet acompte sera déduit du prix de votre soin. En cas d&apos;imprévu,
                prévenez-nous au moins 24h à l&apos;avance.
              </p>
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            {!paid && (
              <a
                href="https://wa.me/2290168411111"
                className="text-center bg-[#6D071A] text-white text-[12px] font-bold uppercase tracking-widest px-8 py-3.5 hover:bg-black transition-colors"
              >
                Nous contacter
              </a>
            )}
            <Link
              href="/nos-soins"
              className={`text-center text-[12px] font-bold uppercase tracking-widest px-8 py-3.5 transition-colors ${
                paid
                  ? "bg-[#6D071A] text-white hover:bg-black"
                  : "border border-[#d5d5d5] text-[#555] hover:border-[#1a1a1a]"
              }`}
            >
              Explorer nos soins
            </Link>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
