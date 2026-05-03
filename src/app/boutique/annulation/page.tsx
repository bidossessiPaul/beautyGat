import Link from "next/link";
import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Paiement annulé — Academy Beauty Gate",
  robots: { index: false },
};

export default function AnnulationPage() {
  return (
    <>
    <Header />
    <main className="pt-[90px] min-h-screen bg-[#fafafa] flex items-center justify-center px-6">
      <div className="max-w-[540px] w-full bg-white border border-[#f0f0f0] p-10 md:p-14 text-center">
        {/* Icône annulation */}
        <div className="w-16 h-16 bg-orange-50 border-2 border-orange-400 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </div>

        <h1 className="text-[26px] md:text-[32px] font-bold text-black mb-3">
          Paiement annulé
        </h1>
        <p className="text-[15px] text-[#666] leading-relaxed mb-8">
          Votre paiement n&apos;a pas été finalisé. Votre panier est toujours disponible, vous pouvez réessayer quand vous le souhaitez.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/boutique/panier"
            className="bg-[#6D071A] text-white text-[11px] font-bold uppercase tracking-widest px-8 py-3.5 hover:bg-black transition-colors"
          >
            Retour au panier
          </Link>
          <Link
            href="/boutique"
            className="border-2 border-[#ddd] text-black text-[11px] font-bold uppercase tracking-widest px-8 py-3.5 hover:border-black transition-colors"
          >
            Continuer mes achats
          </Link>
        </div>
      </div>
    </main>
    <Footer />
    </>
  );
}
