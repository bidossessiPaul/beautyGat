"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/store/cart";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

function formatPrice(n: number) {
  return n.toLocaleString("fr-FR") + " FCFA";
}

export default function PanierPage() {
  const { items, removeItem, updateQuantity, totalPrice } = useCart();

  if (items.length === 0) {
    return (
      <>
      <Header />
      <main className="pt-[90px] min-h-screen bg-[#fafafa] flex flex-col items-center justify-center gap-6 px-6">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#ccc" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
          <line x1="3" y1="6" x2="21" y2="6" />
          <path d="M16 10a4 4 0 0 1-8 0" />
        </svg>
        <p className="text-[18px] text-[#666] font-medium">Votre panier est vide</p>
        <Link
          href="/boutique"
          className="bg-[#6D071A] text-white text-[11px] font-bold uppercase tracking-widest px-8 py-3.5 hover:bg-black transition-colors"
        >
          Découvrir la boutique
        </Link>
      </main>
      <Footer />
      </>
    );
  }

  return (
    <>
    <Header />
    <main className="pt-[90px] min-h-screen bg-[#fafafa]">
      <div className="max-w-[1100px] mx-auto px-6 md:px-10 py-14">
        <h1 className="text-[28px] md:text-[36px] font-bold text-black mb-10">Mon panier</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Liste articles */}
          <div className="lg:col-span-2 space-y-4">
            {items.map(({ product, quantity }) => (
              <div key={product.id} className="bg-white p-5 flex gap-5 border border-[#f0f0f0]">
                <div className="relative w-20 h-20 shrink-0 overflow-hidden bg-[#f8f6f3]">
                  <Image src={product.image} alt={product.name} fill className="object-cover" sizes="80px" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[10px] uppercase tracking-[2px] text-[#6D071A] font-semibold mb-1">
                    {product.categoryLabel}
                  </p>
                  <h3 className="text-[15px] font-bold text-black leading-tight mb-2">{product.name}</h3>
                  <p className="text-[14px] font-semibold text-black">{formatPrice(product.price)}</p>
                </div>
                <div className="flex flex-col items-end gap-3 shrink-0">
                  {/* Quantité */}
                  <div className="flex items-center border border-[#ddd]">
                    <button
                      onClick={() => updateQuantity(product.id, quantity - 1)}
                      className="w-8 h-8 flex items-center justify-center text-[18px] hover:bg-[#f5f5f5] transition-colors"
                    >
                      −
                    </button>
                    <span className="w-8 h-8 flex items-center justify-center text-[14px] font-medium">
                      {quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(product.id, quantity + 1)}
                      className="w-8 h-8 flex items-center justify-center text-[18px] hover:bg-[#f5f5f5] transition-colors"
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => removeItem(product.id)}
                    className="text-[11px] text-[#999] hover:text-red-500 transition-colors uppercase tracking-wider"
                  >
                    Retirer
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Récapitulatif */}
          <div className="lg:col-span-1">
            <div className="bg-white border border-[#f0f0f0] p-6 sticky top-[110px]">
              <h2 className="text-[16px] font-bold text-black mb-6 pb-4 border-b border-[#f0f0f0]">
                Récapitulatif
              </h2>
              <div className="space-y-3 mb-6">
                {items.map(({ product, quantity }) => (
                  <div key={product.id} className="flex justify-between text-[13px] text-[#666]">
                    <span className="truncate pr-2">{product.name} × {quantity}</span>
                    <span className="shrink-0 font-medium text-black">
                      {formatPrice(product.price * quantity)}
                    </span>
                  </div>
                ))}
              </div>
              <div className="pt-4 border-t border-[#f0f0f0] flex justify-between mb-6">
                <span className="text-[15px] font-bold text-black">Total</span>
                <span className="text-[18px] font-bold text-black">{formatPrice(totalPrice())}</span>
              </div>
              <Link
                href="/boutique/commande"
                className="block w-full text-center bg-[#6D071A] text-white text-[11px] font-bold uppercase tracking-widest px-6 py-4 hover:bg-black transition-colors"
              >
                Passer la commande →
              </Link>
              <Link
                href="/boutique"
                className="block text-center mt-3 text-[12px] text-[#999] hover:text-black transition-colors"
              >
                Continuer mes achats
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
    <Footer />
    </>
  );
}
