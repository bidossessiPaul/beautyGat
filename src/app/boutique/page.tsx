"use client";

import { useState } from "react";
import { ProductCard } from "@/components/shop/ProductCard";
import { products, CATEGORIES } from "@/data/products";
import type { Product } from "@/data/products";

export default function BoutiquePage() {
  const [activeCategory, setActiveCategory] = useState<Product["category"] | "all">("all");

  const filtered =
    activeCategory === "all"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <main className="pt-[90px] min-h-screen bg-[#fafafa]">
      {/* Hero section */}
      <section className="bg-white border-b border-[#f0f0f0] py-14">
        <div className="max-w-[1300px] mx-auto px-6 md:px-10 text-center">
          <p className="text-[11px] font-bold uppercase tracking-[3px] text-[#6D071A] mb-3">
            Boutique
          </p>
          <h1 className="text-[32px] md:text-[48px] font-bold text-black mb-4">
            Nos Produits Beauté
          </h1>
          <p className="text-[15px] text-[#666] max-w-[520px] mx-auto leading-relaxed">
            Prolongez l&apos;expérience L.A Beauty chez vous avec notre sélection de soins professionnels.
          </p>
        </div>
      </section>

      {/* Filtres */}
      <section className="max-w-[1300px] mx-auto px-6 md:px-10 py-8">
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={`text-[11px] font-semibold uppercase tracking-wider px-4 py-2 border transition-colors ${
                activeCategory === cat.value
                  ? "bg-[#6D071A] text-white border-[#6D071A]"
                  : "bg-white text-black border-[#ddd] hover:border-[#6D071A] hover:text-[#6D071A]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* Grille produits */}
      <section className="max-w-[1300px] mx-auto px-6 md:px-10 pb-20">
        {filtered.length === 0 ? (
          <p className="text-center text-[#999] py-20">Aucun produit dans cette catégorie.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
