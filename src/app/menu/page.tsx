"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingContact } from "@/components/FloatingContact";
import { menuCategories, MenuCategory } from "@/data/labeauty-menu";

function useInView(threshold = 0.08) {
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

export default function MenuPage() {
  const [activeSlug, setActiveSlug] = useState<string>("all");
  const heroRef = useInView(0.1);

  const visible = activeSlug === "all"
    ? menuCategories
    : menuCategories.filter((c) => c.slug === activeSlug);

  const total = menuCategories.reduce((n, c) => n + c.services.length, 0);

  return (
    <>
      <Header />
      <main>

        {/* ── HERO ── */}
        <section className="relative bg-black pt-[90px] overflow-hidden">
          <div
            className="absolute inset-0 opacity-25"
            style={{
              backgroundImage: "url('/beautygate/about-photo.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/90" />
          <div
            ref={heroRef.ref}
            className={`relative z-10 max-w-[1300px] mx-auto px-6 md:px-10 py-20 md:py-28 text-center transition-all duration-700 ease-out ${
              heroRef.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-[#f0b8b8] text-xs font-bold uppercase tracking-[0.25em] mb-4">
              Academy Beauty Gate — Cotonou
            </p>
            <h1 className="text-white text-[38px] md:text-[56px] font-bold leading-[1.1] mb-4">
              Menu des prestations
            </h1>
            <p className="text-white/70 text-[15px] leading-[26px] max-w-[560px] mx-auto mb-2">
              {total} prestations disponibles · 9 catégories · tarifs en FCFA
            </p>
          </div>
        </section>

        {/* ── TABS CATÉGORIES ── */}
        <nav className="sticky top-[90px] z-[100] bg-white border-b border-[#eee] shadow-sm">
          <div className="max-w-[1300px] mx-auto px-4 md:px-10 flex items-center gap-1.5 overflow-x-auto scrollbar-hide py-3">
            <button
              onClick={() => setActiveSlug("all")}
              className={`shrink-0 px-3.5 py-2 text-[11px] font-bold uppercase tracking-wide rounded-[3px] transition-all duration-200 ${
                activeSlug === "all" ? "bg-[#96000F] text-white" : "bg-[#f5f5f5] text-[#555] hover:bg-[#eee]"
              }`}
            >
              Tout voir
            </button>
            {menuCategories.map((cat) => (
              <button
                key={cat.slug}
                onClick={() => setActiveSlug(cat.slug)}
                className={`shrink-0 px-3.5 py-2 text-[11px] font-bold uppercase tracking-wide rounded-[3px] transition-all duration-200 whitespace-nowrap ${
                  activeSlug === cat.slug ? "bg-[#96000F] text-white" : "bg-[#f5f5f5] text-[#555] hover:bg-[#eee]"
                }`}
              >
                {cat.emoji} {cat.label.split(" ").slice(0, 2).join(" ")}
              </button>
            ))}
          </div>
        </nav>

        {/* ── CONTENU CATÉGORIES ── */}
        <div className="max-w-[1300px] mx-auto px-6 md:px-10 py-14 space-y-16">
          {visible.map((cat) => (
            <CategoryBlock key={cat.slug} cat={cat} />
          ))}
        </div>

        {/* ── NOTE BAS ── */}
        <section className="bg-[#f8f8f8] border-t border-[#eee] py-10">
          <div className="max-w-[900px] mx-auto px-6 text-center">
            <p className="text-[12px] text-[#999] leading-[22px]">
              Tarifs indicatifs — susceptibles d&apos;évoluer. Les forfaits et privatisations font l&apos;objet d&apos;un devis personnalisé. Consultation préalable gratuite disponible.
            </p>
          </div>
        </section>

        {/* ── CTA FINAL ── */}
        <section className="bg-[#96000F] py-20">
          <div className="max-w-[680px] mx-auto px-6 text-center">
            <p className="text-white/60 text-xs font-bold uppercase tracking-[0.2em] mb-4">Réserver</p>
            <h2 className="text-white text-[28px] md:text-[38px] font-bold leading-[1.2] mb-5">
              Prenez rendez-vous dès maintenant
            </h2>
            <p className="text-white/75 text-[14px] leading-[24px] mb-8">
              Notre équipe vous accueille du lundi au samedi de 9h à 19h. Répondez-nous sur WhatsApp ou via notre formulaire.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="https://wa.me/22997885887"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden inline-block bg-white text-[#96000F] text-[11px] font-bold uppercase tracking-widest px-8 py-4 rounded-[3px]"
              >
                <span className="absolute inset-0 bg-black translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out" />
                <span className="relative z-10 group-hover:text-white transition-colors duration-500">
                  WhatsApp
                </span>
              </Link>
              <Link
                href="/contact"
                className="group relative overflow-hidden inline-block border-2 border-white/40 text-white text-[11px] font-bold uppercase tracking-widest px-8 py-4 rounded-[3px]"
              >
                <span className="absolute inset-0 bg-white translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out" />
                <span className="relative z-10 group-hover:text-[#96000F] transition-colors duration-500">
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

function CategoryBlock({ cat }: { cat: MenuCategory }) {
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
    <div id={cat.slug} ref={ref}>
      {/* Header catégorie */}
      <div className={`flex items-center gap-4 mb-6 transition-all duration-700 ease-out ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}>
        <span className="text-[28px] leading-none">{cat.emoji}</span>
        <div>
          <h2 className="text-[20px] md:text-[26px] font-bold text-black leading-tight">{cat.label}</h2>
          <p className="text-[12px] text-[#999] mt-0.5">{cat.services.length} prestations</p>
        </div>
      </div>

      {/* Tableau des services */}
      <div className={`border border-[#eee] rounded-[3px] overflow-hidden transition-all duration-700 ease-out ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`} style={{ transitionDelay: "100ms" }}>
        {cat.services.map((svc, i) => (
          <div
            key={svc.name}
            className={`flex items-center justify-between gap-4 px-5 py-3.5 ${
              i % 2 === 0 ? "bg-white" : "bg-[#fafafa]"
            } ${i < cat.services.length - 1 ? "border-b border-[#f0f0f0]" : ""}`}
          >
            <div className="flex-1 min-w-0">
              <span className="text-[13px] md:text-[14px] text-black font-medium">{svc.name}</span>
            </div>
            <div className="flex items-center gap-5 shrink-0">
              <span className="text-[12px] text-[#aaa] whitespace-nowrap hidden sm:block">{svc.duration}</span>
              <span className="text-[13px] font-bold text-black whitespace-nowrap min-w-[110px] text-right">{svc.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
