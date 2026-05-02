"use client";

import Link from "next/link";

const REELS = [
  "DXXPjS5tWwc",
  "DW_HqUHCOZs",
  "DQKUAw9CATC",
  "DPULawDiB8k",
  "DMzwrXwNyuP",
];

export function InstagramReels() {
  return (
    <section className="py-[80px] bg-[#96000F] overflow-hidden">
      <div className="max-w-[1300px] mx-auto px-6 md:px-10">

        {/* En-tête */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <p className="text-[12px] font-bold uppercase tracking-[3px] text-white/60 mb-3">
              @beaut.ygateofficiel
            </p>
            <h2 className="font-heading text-[30px] md:text-[38px] font-bold text-white leading-tight">
              La beauté en action —<br className="hidden md:block" />
              suivez nos coulisses
            </h2>
          </div>
          <Link
            href="https://www.instagram.com/beaut.ygateofficiel/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden inline-flex items-center gap-2 bg-white text-[#96000F] px-7 py-4 text-[13px] font-semibold uppercase tracking-widest rounded-[3px] shrink-0"
          >
            <span className="absolute inset-0 bg-black translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out" />
            <svg viewBox="0 0 24 24" fill="currentColor" className="relative z-10 w-4 h-4 group-hover:text-white transition-colors duration-500">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
            </svg>
            <span className="relative z-10 group-hover:text-white transition-colors duration-500">Voir le profil</span>
          </Link>
        </div>

        {/* Reels — 5 colonnes desktop, scroll horizontal mobile */}
        <div className="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory">
          {REELS.map((id) => (
            <div
              key={id}
              className="shrink-0 snap-start rounded-xl overflow-hidden shadow-md bg-black"
              style={{ width: "326px", height: "480px" }}
            >
              <iframe
                src={`https://www.instagram.com/reel/${id}/embed/`}
                width="326"
                height="480"
                className="border-0 block"
                allowFullScreen
                loading="lazy"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
