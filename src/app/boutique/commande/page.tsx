"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "@/store/cart";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

function formatPrice(n: number) {
  return n.toLocaleString("fr-FR") + " FCFA";
}

export default function CommandePage() {
  const router = useRouter();
  const { items, totalPrice, clearCart } = useCart();

  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  if (items.length === 0) {
    router.push("/boutique/panier");
    return null;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          customer: form,
          items: items.map((i) => ({
            productId: i.product.id,
            name: i.product.name,
            price: i.product.price,
            quantity: i.quantity,
          })),
          totalAmount: totalPrice(),
        }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error ?? "Erreur lors de la création de la commande");

      clearCart();
      window.location.href = data.paymentUrl;
    } catch (err) {
      setError(err instanceof Error ? err.message : "Une erreur est survenue");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
    <Header />
    <main className="pt-[90px] min-h-screen bg-[#fafafa]">
      <div className="max-w-[900px] mx-auto px-6 md:px-10 py-14">
        <h1 className="text-[28px] md:text-[36px] font-bold text-black mb-10">Finaliser la commande</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Formulaire */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <h2 className="text-[14px] font-bold uppercase tracking-wider text-black mb-4">
              Vos coordonnées
            </h2>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#666] mb-1.5">
                  Prénom *
                </label>
                <input
                  required
                  type="text"
                  value={form.firstname}
                  onChange={(e) => setForm({ ...form, firstname: e.target.value })}
                  className="w-full border border-[#ddd] px-4 py-3 text-[14px] focus:outline-none focus:border-[#6D071A] transition-colors"
                  placeholder="Votre prénom"
                />
              </div>
              <div>
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#666] mb-1.5">
                  Nom *
                </label>
                <input
                  required
                  type="text"
                  value={form.lastname}
                  onChange={(e) => setForm({ ...form, lastname: e.target.value })}
                  className="w-full border border-[#ddd] px-4 py-3 text-[14px] focus:outline-none focus:border-[#6D071A] transition-colors"
                  placeholder="Votre nom"
                />
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#666] mb-1.5">
                Email *
              </label>
              <input
                required
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full border border-[#ddd] px-4 py-3 text-[14px] focus:outline-none focus:border-[#6D071A] transition-colors"
                placeholder="votre@email.com"
              />
            </div>

            <div>
              <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#666] mb-1.5">
                Téléphone (WhatsApp) *
              </label>
              <input
                required
                type="tel"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full border border-[#ddd] px-4 py-3 text-[14px] focus:outline-none focus:border-[#6D071A] transition-colors"
                placeholder="+229 97 00 00 00"
              />
              <p className="text-[11px] text-[#999] mt-1">Format international recommandé</p>
            </div>

            {error && (
              <p className="text-red-500 text-[13px] bg-red-50 border border-red-200 px-4 py-3">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#6D071A] text-white text-[11px] font-bold uppercase tracking-widest py-4 hover:bg-black transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Redirection vers FedaPay…" : "Payer en ligne →"}
            </button>

            <p className="text-[11px] text-[#999] text-center">
              Paiement sécurisé par FedaPay — Mobile Money, carte bancaire
            </p>
          </form>

          {/* Récapitulatif commande */}
          <div className="bg-white border border-[#f0f0f0] p-6 h-fit">
            <h2 className="text-[14px] font-bold uppercase tracking-wider text-black mb-5 pb-4 border-b border-[#f0f0f0]">
              Votre commande
            </h2>
            <div className="space-y-3 mb-6">
              {items.map(({ product, quantity }) => (
                <div key={product.id} className="flex justify-between text-[13px]">
                  <span className="text-[#555] truncate pr-2">{product.name} × {quantity}</span>
                  <span className="font-semibold text-black shrink-0">
                    {formatPrice(product.price * quantity)}
                  </span>
                </div>
              ))}
            </div>
            <div className="pt-4 border-t border-[#f0f0f0] flex justify-between">
              <span className="text-[15px] font-bold text-black">Total</span>
              <span className="text-[20px] font-bold text-[#6D071A]">{formatPrice(totalPrice())}</span>
            </div>
          </div>
        </div>
      </div>
    </main>
    <Footer />
    </>
  );
}
