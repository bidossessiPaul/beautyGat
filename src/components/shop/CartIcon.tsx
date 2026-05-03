"use client";

import Link from "next/link";
import { useCart } from "@/store/cart";

export function CartIcon() {
  const totalItems = useCart((s) => s.totalItems)();

  return (
    <Link
      href="/boutique/panier"
      className="relative flex items-center justify-center w-9 h-9 text-black hover:text-[#6D071A] transition-colors"
      aria-label="Panier"
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
        <line x1="3" y1="6" x2="21" y2="6" />
        <path d="M16 10a4 4 0 0 1-8 0" />
      </svg>
      {totalItems > 0 && (
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#6D071A] text-white text-[9px] font-bold rounded-full flex items-center justify-center">
          {totalItems > 9 ? "9+" : totalItems}
        </span>
      )}
    </Link>
  );
}
