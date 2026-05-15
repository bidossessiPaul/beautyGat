import Image from "next/image";
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { EVENT, SERVICES, DATES } from "../config";

interface Props {
  searchParams: Promise<{ id?: string }>;
}

export default async function ConfirmationPage({ searchParams }: Props) {
  const { id } = await searchParams;

  let lead = null;
  if (id) {
    try {
      lead = await prisma.eventLead.findUnique({ where: { id } });
      if (lead && !lead.paid) {
        await prisma.eventLead.update({ where: { id }, data: { paid: true, stepReached: 5 } });
        lead = { ...lead, paid: true };
      }
    } catch {
      // DB error — still show success page
    }
  }

  const svc = lead?.service ? SERVICES[lead.service as keyof typeof SERVICES] : null;
  const dateLabel = DATES.find(d => d.value === lead?.date)?.label;

  return (
    <div className="min-h-screen bg-[#1C1C1C] flex flex-col">

      {/* Mini nav */}
      <nav className="bg-black/40 border-b border-white/10 px-6 py-4 flex justify-center">
        <Image src="/beautygate-logo.jpeg" alt="Academy Beauty Gate" width={40} height={40} className="rounded-full" />
      </nav>

      {/* Content */}
      <div className="flex-1 flex items-center justify-center px-6 py-16">
        <div className="max-w-md w-full">

          {/* Success icon */}
          <div className="w-20 h-20 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
          </div>

          <div className="text-center mb-8">
            <h1 className="text-white text-[26px] md:text-[32px] font-black mb-2">
              Réservation confirmée ! 🎉
            </h1>
            <p className="text-white/60 text-[14px]">
              Tu recevras un message WhatsApp avec tous les détails de ton rendez-vous.
            </p>
          </div>

          {/* Récapitulatif */}
          {lead && svc && (
            <div className="bg-white/5 border border-white/10 p-6 mb-6 space-y-3">
              <h3 className="text-white font-bold text-[14px] mb-4 uppercase tracking-wider">Récapitulatif</h3>
              <div className="flex justify-between text-[13px]">
                <span className="text-white/50">Soin</span>
                <span className="text-white font-semibold text-right max-w-[60%]">{svc.label}</span>
              </div>
              {dateLabel && (
                <div className="flex justify-between text-[13px]">
                  <span className="text-white/50">Date</span>
                  <span className="text-white font-semibold">{dateLabel}</span>
                </div>
              )}
              <div className="flex justify-between text-[13px]">
                <span className="text-white/50">Nom</span>
                <span className="text-white font-semibold">{lead.name}</span>
              </div>
              <div className="flex justify-between text-[13px]">
                <span className="text-white/50">WhatsApp</span>
                <span className="text-white font-semibold">{lead.phone}</span>
              </div>
              <div className="border-t border-white/10 pt-3 flex justify-between">
                <span className="text-white font-bold">Montant payé</span>
                <span className="text-emerald-400 font-black text-[18px]">{svc.priceLabel}</span>
              </div>
            </div>
          )}

          {/* WhatsApp CTA */}
          <a
            href={`https://wa.me/${EVENT.whatsapp}?text=${encodeURIComponent("Bonjour, je viens de réserver pour l'événement de Parakou. Mon nom est " + (lead?.name ?? "") + ".")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-[#25D366] text-white text-center py-4 text-[13px] font-bold uppercase tracking-[0.1em] hover:bg-[#1da851] transition-colors mb-3"
          >
            📲 Confirmer sur WhatsApp
          </a>

          <Link
            href="/reservation-parakou"
            className="block w-full border border-white/20 text-white/60 text-center py-3 text-[12px] hover:border-white/50 hover:text-white transition-colors"
          >
            ← Retour à la page
          </Link>

          <p className="text-center text-white/20 text-[11px] mt-6">
            {EVENT.city} · 06–10 juillet 2026 · Academy Beauty Gate
          </p>
        </div>
      </div>

    </div>
  );
}
