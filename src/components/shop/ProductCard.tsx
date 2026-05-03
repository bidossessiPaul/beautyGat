"use client";

import Image from "next/image";
import Link from "next/link";
import { AddToCart } from "./AddToCart";
import type { Product } from "@/data/products";

function formatPrice(n: number) {
  return n.toLocaleString("fr-FR") + " FCFA";
}

export function ProductCard({ product }: { product: Product }) {
  const hasDiscount = product.comparePrice && product.comparePrice > product.price;
  const discountPct = hasDiscount
    ? Math.round((1 - product.price / product.comparePrice!) * 100)
    : 0;

  return (
    <div className="group bg-white border border-[#f0f0f0] hover:shadow-md transition-shadow duration-300 flex flex-col">
      {/* Image */}
      <Link href={`/boutique/${product.slug}`} className="relative block overflow-hidden aspect-[4/3]">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {product.badge && (
          <span className="absolute top-3 left-3 bg-[#6D071A] text-white text-[10px] font-bold uppercase tracking-widest px-2.5 py-1">
            {product.badge}
          </span>
        )}
        {hasDiscount && (
          <span className="absolute top-3 right-3 bg-black text-white text-[10px] font-bold px-2 py-1">
            -{discountPct}%
          </span>
        )}
      </Link>

      {/* Infos */}
      <div className="p-5 flex flex-col flex-1 gap-3">
        <p className="text-[10px] uppercase tracking-[2px] text-[#6D071A] font-semibold">
          {product.categoryLabel}
        </p>
        <Link href={`/boutique/${product.slug}`}>
          <h3 className="text-[16px] font-bold text-black leading-tight hover:text-[#6D071A] transition-colors">
            {product.name}
          </h3>
        </Link>
        <p className="text-[13px] text-[#666] leading-relaxed flex-1">
          {product.shortDescription}
        </p>

        <div className="flex items-center justify-between mt-auto pt-3 border-t border-[#f0f0f0]">
          <div>
            <span className="text-[18px] font-bold text-black">{formatPrice(product.price)}</span>
            {hasDiscount && (
              <span className="ml-2 text-[13px] text-[#999] line-through">{formatPrice(product.comparePrice!)}</span>
            )}
          </div>
        </div>

        <AddToCart product={product} className="w-full text-center" />
      </div>
    </div>
  );
}
