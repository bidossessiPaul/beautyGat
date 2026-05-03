"use client";

import { useState } from "react";
import { ProductCard } from "./ProductCard";
import type { Product } from "@prisma/client";

const CATEGORIES = [
  { value: "all", label: "Tous les produits" },
  { value: "soins-visage", label: "Soins Visage" },
  { value: "soins-corps", label: "Soins Corps" },
  { value: "coffrets", label: "Coffrets Cadeaux" },
  { value: "accessoires", label: "Accessoires" },
];

export function ProductsGrid({ products }: { products: Product[] }) {
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered = activeCategory === "all"
    ? products
    : products.filter((p) => p.category === activeCategory);

  return (
    <>
      {/* Filtres */}
      <div className="flex flex-wrap gap-2 mb-8">
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

      {filtered.length === 0 ? (
        <p className="text-center text-[#999] py-20">Aucun produit dans cette catégorie.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </>
  );
}
