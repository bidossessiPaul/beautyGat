"use client";

import { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingContact } from "@/components/FloatingContact";
import { menuCategories } from "@/data/labeauty-menu";
import { services } from "@/data/services";

function normalize(s: string) {
  return s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[^a-z0-9 ]/g, " ").replace(/\s+/g, " ").trim();
}

/* Pré-calcul : nom normalisé → slug */
const SLUG_MAP = new Map<string, string>();
for (const svc of services) {
  if (svc.name) SLUG_MAP.set(normalize(svc.name), svc.slug);
  const shortTitle = svc.title.split("—")[0].split("|")[0].split("à Cotonou")[0].trim();
  SLUG_MAP.set(normalize(shortTitle), svc.slug);
}

function findSlug(menuName: string): string | null {
  const key = normalize(menuName);
  if (SLUG_MAP.has(key)) return SLUG_MAP.get(key)!;
  for (const [k, slug] of SLUG_MAP) {
    if (k.includes(key) || key.includes(k)) return slug;
  }
  return null;
}

export default function TarifsPage() {
  const [activeSlug, setActiveSlug] = useState(menuCategories[0].slug);
  const active = menuCategories.find((c) => c.slug === activeSlug) ?? menuCategories[0];

  return (
    <>
      <Header />
      <main className="pt-[90px]">

        {/* ── HERO ── */}
        <section className="bg-[#0d0d0d] py-14 md:py-18">
          <div className="max-w-[1300px] mx-auto px-6 md:px-10">
            <p className="text-[#f0b8b8] text-[11px] font-bold uppercase tracking-[0.25em] mb-3">
              Academy Beauty Gate — Cotonou
            </p>
            <h1 className="text-white text-[34px] md:text-[50px] font-bold leading-[1.1] mb-3">
              Nos tarifs
            </h1>
            <p className="text-white/55 text-[14px] md:text-[15px] max-w-[500px] leading-relaxed">
              Tarifs transparents pour chaque prestation. Diagnostic offert avant tout protocole.
            </p>
          </div>
        </section>

        {/* ── LAYOUT ── */}
        <div className="max-w-[1300px] mx-auto px-6 md:px-10 py-10 flex gap-10 items-start">

          {/* ── SIDEBAR desktop ── */}
          <aside className="hidden lg:block w-[210px] shrink-0 sticky top-[110px] self-start">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#999] mb-3 px-2">
              Catégories
            </p>
            <nav className="flex flex-col gap-0.5">
              {menuCategories.map((cat) => (
                <button
                  key={cat.slug}
                  onClick={() => setActiveSlug(cat.slug)}
                  className={`group flex items-center gap-2.5 px-3 py-2.5 text-left text-[13px] rounded transition-all ${
                    activeSlug === cat.slug
                      ? "bg-[#6D071A] text-white font-semibold"
                      : "text-[#555] hover:text-black hover:bg-[#f5f5f5]"
                  }`}
                >
                  <span className="text-[15px] shrink-0">{cat.emoji}</span>
                  <span className="leading-snug">{cat.label}</span>
                </button>
              ))}
            </nav>

            <div className="mt-6 p-4 bg-[#6D071A]/6 border border-[#6D071A]/20">
              <p className="text-[12px] font-semibold text-[#6D071A] mb-1">Prendre RDV</p>
              <p className="text-[11px] text-[#888] mb-3 leading-relaxed">
                Diagnostic offert avant tout protocole.
              </p>
              <Link
                href="/rendez-vous"
                className="block text-center bg-[#6D071A] text-white text-[11px] font-bold uppercase tracking-widest px-4 py-2.5 hover:bg-black transition-colors"
              >
                Réserver
              </Link>
            </div>
          </aside>

          {/* ── MOBILE TABS ── */}
          <div className="lg:hidden -mx-6 md:-mx-10 px-6 md:px-10 mb-6 w-[calc(100%+3rem)] md:w-[calc(100%+5rem)]">
            <div className="flex gap-1.5 overflow-x-auto scrollbar-hide pb-1">
              {menuCategories.map((cat) => (
                <button
                  key={cat.slug}
                  onClick={() => setActiveSlug(cat.slug)}
                  className={`shrink-0 flex items-center gap-1.5 px-3 py-2 text-[12px] font-semibold transition-all ${
                    activeSlug === cat.slug
                      ? "bg-[#6D071A] text-white"
                      : "bg-[#f0f0f0] text-[#555] hover:bg-[#e5e5e5]"
                  }`}
                >
                  <span>{cat.emoji}</span>
                  <span>{cat.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* ── CONTENT : une seule catégorie ── */}
          <div className="flex-1 min-w-0">

            {/* Header catégorie */}
            <div className="flex items-center gap-3 mb-6 pb-4 border-b-2 border-[#6D071A]">
              <span className="text-[24px]">{active.emoji}</span>
              <div>
                <h2 className="text-[22px] md:text-[26px] font-bold text-black leading-tight">
                  {active.label}
                </h2>
                <p className="text-[12px] text-[#999] mt-0.5">
                  {active.services.length} prestation{active.services.length > 1 ? "s" : ""}
                </p>
              </div>
            </div>

            {/* Tableau des prix */}
            <div className="border border-[#e8e8e8] overflow-hidden">
              {/* Entête */}
              <div className="grid grid-cols-[1fr_auto_auto] bg-[#f8f8f8] border-b border-[#e8e8e8] px-5 py-3">
                <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#999]">Prestation</span>
                <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#999] text-right pr-8 hidden sm:block">Durée</span>
                <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#999] text-right">Tarif</span>
              </div>

              {/* Lignes */}
              {active.services.map((svc, i) => {
                const isSurDevis = svc.price === "Sur devis" || svc.price === "Variable";
                const slug = findSlug(svc.name);
                const href = slug
                  ? `/soins/${slug}`
                  : `/rendez-vous?name=${encodeURIComponent(svc.name)}&price=${encodeURIComponent(svc.price)}`;
                return (
                  <Link
                    key={i}
                    href={href}
                    className={`grid grid-cols-[1fr_auto_auto] items-center px-5 py-3.5 border-b border-[#f0f0f0] last:border-0 hover:bg-[#fff5f5] group transition-colors ${
                      i % 2 === 0 ? "bg-white" : "bg-[#fdfdfd]"
                    }`}
                  >
                    <span className="text-[14px] text-[#1a1a1a] font-medium pr-6 leading-snug group-hover:text-[#6D071A] transition-colors">
                      {svc.name}
                    </span>
                    <span className="text-[12px] text-[#bbb] text-right pr-8 hidden sm:block whitespace-nowrap">
                      {svc.duration}
                    </span>
                    <span className={`text-[14px] font-bold text-right whitespace-nowrap ${
                      isSurDevis ? "text-[#aaa] font-normal italic text-[13px]" : "text-[#1a1a1a] group-hover:text-[#6D071A]"
                    } transition-colors`}>
                      {svc.price}
                    </span>
                  </Link>
                );
              })}
            </div>

            {/* Note + CTA */}
            <div className="mt-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <p className="text-[11px] text-[#bbb] leading-relaxed">
                Tarifs indicatifs — contactez-nous pour tout forfait ou groupe.
              </p>
              <Link
                href="/rendez-vous"
                className="shrink-0 bg-[#6D071A] text-white text-[11px] font-bold uppercase tracking-widest px-5 py-2.5 hover:bg-black transition-colors"
              >
                Réserver ce soin
              </Link>
            </div>

            {/* Navigation catégories bas de page */}
            <div className="mt-12 pt-8 border-t border-[#eee]">
              <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#999] mb-4">
                Autres catégories
              </p>
              <div className="flex flex-wrap gap-2">
                {menuCategories.filter((c) => c.slug !== activeSlug).map((cat) => (
                  <button
                    key={cat.slug}
                    onClick={() => { setActiveSlug(cat.slug); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                    className="flex items-center gap-1.5 px-3 py-2 border border-[#e8e8e8] text-[12px] text-[#555] hover:border-[#6D071A] hover:text-[#6D071A] transition-colors bg-white"
                  >
                    <span>{cat.emoji}</span>
                    <span>{cat.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* ── NOTE TARIFAIRE ── */}
        <div className="border-t border-[#eee] bg-[#f8f8f8] py-7">
          <div className="max-w-[1300px] mx-auto px-6 md:px-10">
            <p className="text-[12px] text-[#aaa] leading-[22px] max-w-[700px]">
              Les tarifs indiqués sont donnés à titre indicatif et peuvent évoluer. Certains soins nécessitent
              une consultation préalable gratuite. Pour tout forfait ou tarif groupe, contactez-nous directement.
            </p>
          </div>
        </div>

        {/* ── CTA FINAL ── */}
        <section className="bg-[#6D071A] py-16">
          <div className="max-w-[700px] mx-auto px-6 text-center">
            <h2 className="text-white text-[26px] md:text-[34px] font-bold leading-[1.2] mb-4">
              Réservez votre séance
            </h2>
            <p className="text-white/70 text-[14px] leading-[24px] mb-7">
              Diagnostic de peau offert avant tout soin. Notre équipe vous accompagne
              pour choisir le protocole le mieux adapté.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/rendez-vous"
                className="group relative overflow-hidden inline-block bg-white text-[#6D071A] text-[12px] font-bold uppercase tracking-widest px-8 py-4"
              >
                <span className="absolute inset-0 bg-black translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out" />
                <span className="relative z-10 group-hover:text-white transition-colors duration-500">
                  Prendre rendez-vous
                </span>
              </Link>
              <Link
                href="/contact"
                className="group relative overflow-hidden inline-block border-2 border-white text-white text-[12px] font-bold uppercase tracking-widest px-8 py-4"
              >
                <span className="absolute inset-0 bg-white translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out" />
                <span className="relative z-10 group-hover:text-[#6D071A] transition-colors duration-500">
                  Nous contacter
                </span>
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
      <FloatingContact />
    </>
  );
}
