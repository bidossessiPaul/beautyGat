"use client";

import { useState } from "react";
import { useCart } from "@/store/cart";
import type { Product } from "@prisma/client";

interface Props {
  product: Product;
  className?: string;
}

export function AddToCart({ product, className = "" }: Props) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  function handleAdd() {
    addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  }

  return (
    <button
      onClick={handleAdd}
      disabled={product.stock === 0}
      className={`group relative overflow-hidden bg-[#6D071A] text-white text-[11px] font-bold uppercase tracking-widest px-7 py-3.5 transition-all disabled:opacity-40 disabled:cursor-not-allowed ${className}`}
    >
      <span className="absolute inset-0 bg-black translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out" />
      <span className="relative z-10">
        {product.stock === 0 ? "Rupture de stock" : added ? "✓ Ajouté au panier" : "Ajouter au panier"}
      </span>
    </button>
  );
}
