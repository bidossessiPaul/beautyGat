import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Commande confirmée — Academy Beauty Gate",
  robots: { index: false },
};

export default async function ConfirmationPage({
  searchParams,
}: {
  searchParams: Promise<{ transaction_id?: string; id?: string }>;
}) {
  const params = await searchParams;
  const transactionId = params.transaction_id ?? params.id ?? "";

  return (
    <main className="pt-[90px] min-h-screen bg-[#fafafa] flex items-center justify-center px-6">
      <div className="max-w-[540px] w-full bg-white border border-[#f0f0f0] p-10 md:p-14 text-center">
        {/* Icône succès */}
        <div className="w-16 h-16 bg-green-50 border-2 border-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>

        <h1 className="text-[26px] md:text-[32px] font-bold text-black mb-3">
          Paiement confirmé !
        </h1>
        <p className="text-[15px] text-[#666] leading-relaxed mb-6">
          Merci pour votre commande. Vous recevrez une confirmation par email et nous vous contacterons sur WhatsApp pour organiser la livraison.
        </p>

        {transactionId && (
          <p className="text-[12px] text-[#999] mb-8">
            Référence : <span className="font-mono text-black">{transactionId}</span>
          </p>
        )}

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/boutique"
            className="bg-[#6D071A] text-white text-[11px] font-bold uppercase tracking-widest px-8 py-3.5 hover:bg-black transition-colors"
          >
            Retour à la boutique
          </Link>
          <Link
            href="https://wa.me/22997885887"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-[#6D071A] text-[#6D071A] text-[11px] font-bold uppercase tracking-widest px-8 py-3.5 hover:bg-[#6D071A] hover:text-white transition-colors"
          >
            Nous contacter
          </Link>
        </div>
      </div>
    </main>
  );
}
