"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingContact } from "@/components/FloatingContact";
import { services } from "@/data/services";

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

const CATEGORIES = [
  { key: "all",         label: "Tous les soins" },
  { key: "visage",      label: "Soins visage" },
  { key: "corps",       label: "Soins corps" },
  { key: "epilation",   label: "Épilation" },
  { key: "injections",  label: "Injections" },
  { key: "diagnostic",  label: "Diagnostic" },
] as const;

type CatKey = typeof CATEGORIES[number]["key"];

const CATEGORY_LABELS: Record<string, string> = {
  visage:     "Soins du visage",
  corps:      "Soins du corps",
  epilation:  "Épilation",
  injections: "Injections & médecine esthétique",
  diagnostic: "Diagnostic de peau",
};

export default function TarifsPage() {
  const [active, setActive] = useState<CatKey>("all");

  const heroRef  = useInView(0.1);
  const tabsRef  = useInView(0.1);

  const grouped = services.reduce<Record<string, typeof services>>((acc, s) => {
    if (!acc[s.category]) acc[s.category] = [];
    acc[s.category].push(s);
    return acc;
  }, {});

  const categoryOrder = ["visage", "corps", "epilation", "injections", "diagnostic"];

  const visibleCategories = active === "all"
    ? categoryOrder
    : categoryOrder.filter((c) => c === active);

  return (
    <>
      <Header />
      <main>

        {/* ── HERO ── */}
        <section className="relative bg-black pt-[90px] overflow-hidden">
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: "url('/beautygate/about-photo.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center top",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
          <div
            ref={heroRef.ref}
            className={`relative z-10 max-w-[1300px] mx-auto px-6 md:px-10 py-20 md:py-28 text-center transition-all duration-700 ease-out ${
              heroRef.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-[#f0b8b8] text-xs font-bold uppercase tracking-[0.25em] mb-4">
              Academy Beauty Gate — Cotonou
            </p>
            <h1 className="text-white text-[38px] md:text-[58px] font-bold leading-[1.1] mb-5">
              Nos tarifs
            </h1>
            <p className="text-white/70 text-[15px] md:text-[17px] leading-[28px] max-w-[600px] mx-auto mb-8">
              Tous nos soins esthétiques avancés à Cotonou, avec des tarifs transparents et accessibles. Diagnostic offert avant chaque protocole.
            </p>
            <Link
              href="#tarifs"
              className="group relative overflow-hidden inline-block bg-[#6D071A] text-white text-[12px] font-bold uppercase tracking-widest px-8 py-4 rounded-[3px]"
            >
              <span className="absolute inset-0 bg-white translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out" />
              <span className="relative z-10 group-hover:text-[#6D071A] transition-colors duration-500">
                Voir les tarifs
              </span>
            </Link>
          </div>
        </section>

        {/* ── TABS FILTRES ── */}
        <section id="tarifs" className="sticky top-[90px] z-[100] bg-white border-b border-[#eee] shadow-sm">
          <div
            ref={tabsRef.ref}
            className="max-w-[1300px] mx-auto px-6 md:px-10 flex items-center gap-1 overflow-x-auto scrollbar-hide py-3"
          >
            {CATEGORIES.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActive(cat.key)}
                className={`shrink-0 px-4 py-2 text-[12px] font-bold uppercase tracking-wide rounded-[3px] transition-all duration-200 ${
                  active === cat.key
                    ? "bg-[#6D071A] text-white"
                    : "bg-[#f8f8f8] text-[#555] hover:bg-[#eee]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </section>

        {/* ── GRILLES PAR CATÉGORIE ── */}
        <div className="max-w-[1300px] mx-auto px-6 md:px-10 py-16 space-y-20">
          {visibleCategories.map((cat) => {
            const items = grouped[cat] ?? [];
            if (!items.length) return null;
            return (
              <CategorySection
                key={cat}
                category={cat}
                label={CATEGORY_LABELS[cat]}
                services={items}
              />
            );
          })}
        </div>

        {/* ── NOTE TARIFAIRE ── */}
        <section className="bg-[#f8f8f8] border-t border-[#eee] py-12">
          <div className="max-w-[900px] mx-auto px-6 text-center">
            <p className="text-[13px] text-[#888] leading-[22px]">
              Les tarifs indiqués sont donnés à titre indicatif et peuvent évoluer. Certains soins nécessitent une consultation préalable gratuite pour évaluer l'indication et définir le protocole adapté. Contactez-nous pour tout renseignement.
            </p>
          </div>
        </section>

        {/* ── CTA FINAL ── */}
        <section className="bg-[#6D071A] py-20">
          <div className="max-w-[700px] mx-auto px-6 text-center">
            <p className="text-white/70 text-xs font-bold uppercase tracking-[0.25em] mb-4">
              Prendre rendez-vous
            </p>
            <h2 className="text-white text-[30px] md:text-[40px] font-bold leading-[1.2] mb-5">
              Réservez votre séance à Cotonou
            </h2>
            <p className="text-white/80 text-[15px] leading-[26px] mb-8">
              Diagnostic de peau offert avant tout soin. Notre équipe vous accompagne pour choisir le protocole le mieux adapté à vos besoins.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="https://wa.me/22997885887"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden inline-block bg-white text-[#6D071A] text-[12px] font-bold uppercase tracking-widest px-8 py-4 rounded-[3px]"
              >
                <span className="absolute inset-0 bg-black translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out" />
                <span className="relative z-10 group-hover:text-white transition-colors duration-500">
                  WhatsApp
                </span>
              </Link>
              <Link
                href="/contact"
                className="group relative overflow-hidden inline-block border-2 border-white text-white text-[12px] font-bold uppercase tracking-widest px-8 py-4 rounded-[3px]"
              >
                <span className="absolute inset-0 bg-white translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out" />
                <span className="relative z-10 group-hover:text-[#6D071A] transition-colors duration-500">
                  Formulaire de contact
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

function CategorySection({
  label,
  services: items,
}: {
  category: string;
  label: string;
  services: typeof services;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold: 0.05 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref}>
      {/* En-tête catégorie */}
      <div className={`mb-8 transition-all duration-700 ease-out ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
        <div className="flex items-center gap-4">
          <div className="w-8 h-[2px] bg-[#6D071A]" />
          <h2 className="text-[22px] md:text-[28px] font-bold text-black">{label}</h2>
        </div>
      </div>

      {/* Grille de cartes */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((svc, i) => (
          <div
            key={svc.slug}
            className={`border border-[#eee] rounded-[3px] bg-white transition-all duration-700 ease-out ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: `${i * 60}ms` }}
          >
            {/* Header carte */}
            <div className="p-5 border-b border-[#eee]">
              <p className="text-[11px] font-bold uppercase tracking-[2px] text-[#6D071A] mb-1.5">
                {svc.category === "visage" ? "Soin visage"
                  : svc.category === "corps" ? "Soin corps"
                  : svc.category === "epilation" ? "Épilation"
                  : svc.category === "injections" ? "Injection"
                  : "Diagnostic"}
              </p>
              <h3 className="text-[15px] font-bold text-black leading-[1.3]">
                {svc.title.split(" — ")[0]}
              </h3>
            </div>

            {/* Lignes de tarifs */}
            <div className="p-5 space-y-2.5">
              {svc.pricing.items.map((item) => (
                <div key={item.label} className="flex items-baseline justify-between gap-3">
                  <span className="text-[13px] text-[#555] leading-[18px] flex-1">{item.label}</span>
                  <span className="text-[13px] font-bold text-black shrink-0 whitespace-nowrap">{item.price}</span>
                </div>
              ))}
            </div>

            {/* CTA carte */}
            <div className="px-5 pb-5">
              <Link
                href={`/soins/${svc.slug}`}
                className="group relative overflow-hidden inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-[#6D071A] hover:gap-3 transition-all"
              >
                En savoir plus
                <span className="text-[10px] transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
