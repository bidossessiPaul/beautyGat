"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const CATEGORIES = [
  {
    title: "Soins du visage",
    description:
      "Des technologies médicales avancées pour révéler l'éclat naturel de votre peau. Hydrafacial, peeling, carbon laser peel — chaque soin est adapté à votre diagnostic peau personnalisé.",
    image: "/images/img_4538.jpg",
    href: "/menu",
    services: ["Hydrafacial®", "Peeling", "Carbon Laser Peel", "Diagnostic peau"],
    tag: "Éclat & pureté",
    cta: "Voir les soins visage",
  },
  {
    title: "Corps & silhouette",
    description:
      "Redessinez votre silhouette sans chirurgie grâce à nos traitements corps non-invasifs. Cryolipolyse, BodySculpt, massages modelants — des résultats visibles et durables.",
    image: "/images/adobestock-316410994-jidarv-1-scaled.jpeg",
    href: "/menu",
    services: ["Cryolipolyse", "BodySculpt", "Massages modelants", "Détatouage"],
    tag: "Minceur & remodelage",
    cta: "Explorer les soins corps",
  },
  {
    title: "Mains, pieds & nail art",
    description:
      "Manucure, pédicure, gel, capsules, nail art — un espace entièrement dédié à la beauté de vos mains et de vos pieds. Chaque prestation est réalisée avec précision pour un résultat impeccable et durable.",
    image: "/images/appart-beaute-3873926.jpg",
    href: "/soins/manucure-semi-permanent-cotonou",
    services: ["Manucure semi-permanent", "Gel sur ongles naturels", "Capsules & résine", "Nail art"],
    tag: "Mains & pieds",
    cta: "Découvrir les soins mains & pieds",
  },
];

function useInView(threshold = 0.12) {
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

function CategoryRow({ cat, reverse }: { cat: typeof CATEGORIES[0]; reverse: boolean }) {
  const { ref, inView } = useInView(0.1);

  return (
    <div
      ref={ref}
      className={`flex flex-col ${reverse ? "md:flex-row-reverse" : "md:flex-row"} min-h-[420px] md:h-[480px]`}
    >
      {/* Image */}
      <div
        className={`relative w-full md:w-1/2 h-[280px] md:h-full overflow-hidden transition-all duration-700 ease-out ${
          inView ? "opacity-100 scale-100" : "opacity-0 scale-[1.03]"
        }`}
      >
        <Image
          src={cat.image}
          alt={cat.title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-700 hover:scale-[1.04]"
        />
        {/* badge */}
        <div className="absolute top-5 left-5">
          <span className="text-[10px] uppercase tracking-[2px] bg-black/40 backdrop-blur-sm text-white px-3 py-1.5 border border-white/20">
            {cat.tag}
          </span>
        </div>
        {/* subtle gradient for edge blending */}
        <div className={`absolute inset-0 bg-gradient-to-${reverse ? "l" : "r"} from-transparent via-transparent to-black/10`} />
      </div>

      {/* Texte */}
      <div
        className={`relative w-full md:w-1/2 bg-white flex flex-col justify-center px-8 md:px-14 py-10 md:py-0 transition-all duration-700 delay-150 ease-out ${
          inView ? "opacity-100 translate-x-0" : `opacity-0 ${reverse ? "translate-x-6" : "-translate-x-6"}`
        }`}
      >
        {/* ligne décorative */}
        <div className={`w-10 h-[3px] bg-[#6D071A] mb-6 transition-all duration-500 delay-300 ${inView ? "w-10" : "w-0"}`} />

        <h3 className="text-[24px] md:text-[30px] font-bold text-black leading-tight mb-4">
          {cat.title}
        </h3>

        <p className="text-[14px] md:text-[15px] leading-[26px] text-[#555] mb-6">
          {cat.description}
        </p>

        {/* liste services */}
        <ul className="space-y-2 mb-8">
          {cat.services.map((s) => (
            <li key={s} className="flex items-center gap-2.5 text-[13px] text-[#444]">
              <span className="w-1 h-1 rounded-full bg-[#6D071A] shrink-0" />
              {s}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link
          href={cat.href}
          className="group relative overflow-hidden inline-flex items-center gap-3 self-start bg-[#6D071A] text-white text-[11px] font-bold uppercase tracking-widest px-7 py-3.5"
        >
          <span className="absolute inset-0 bg-black translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out" />
          <span className="relative z-10">{cat.cta}</span>
          <span className="relative z-10 transition-transform group-hover:translate-x-1 duration-300">→</span>
        </Link>
      </div>
    </div>
  );
}

export function ServicesByCategory() {
  const headerRef = useInView(0.2);

  return (
    <section className="py-[70px] bg-[#fafafa]">
      <div className="max-w-[1300px] mx-auto px-6 md:px-10">

        {/* Header */}
        <div
          ref={headerRef.ref}
          className={`text-center mb-14 transition-all duration-700 ease-out ${
            headerRef.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <p className="text-[11px] font-bold uppercase tracking-[3px] text-[#6D071A] mb-3">
            Nos soins
          </p>
          <h2 className="font-sans text-[30px] md:text-[42px] font-bold text-black mb-4">
            Des soins d'exception pour vous
          </h2>
          <p className="text-[15px] leading-[28px] text-[#555] max-w-[580px] mx-auto">
            Chaque prestation est réalisée avec expertise et des technologies de pointe, pour des résultats visibles et durables.
          </p>
        </div>

      </div>

      {/* Blocs alternés — full width */}
      <div className="max-w-[1300px] mx-auto px-6 md:px-10 space-y-3">
        {CATEGORIES.map((cat, i) => (
          <CategoryRow key={cat.title} cat={cat} reverse={i % 2 !== 0} />
        ))}
      </div>

    </section>
  );
}
