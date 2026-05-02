"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const SERVICES = [
  {
    title: "Épilation Laser",
    tag: "By Clarity II",
    image: "/images/dsc00744-1-scaled.jpg",
    href: "/epilation-laser-paris",
    featured: true,
  },
  {
    title: "Hydrafacial®",
    tag: "Soin visage",
    image: "/images/img_4538.jpg",
    href: "/hydrafacial-paris",
  },
  {
    title: "Peeling",
    tag: "Novelskin & Mediderma",
    image: "/images/dsc01308-scaled.jpg",
    href: "/peeling-visage-paris",
  },
  {
    title: "Microneedling",
    tag: "Anti-âge",
    image: "/images/microneedling-appart-beaute.png",
    href: "/microneedling-paris",
  },
  {
    title: "Cryolipolyse",
    tag: "By CRISTAL Pro®",
    image: "/images/adobestock-316410994-jidarv-1-scaled.jpeg",
    href: "/cryolipolyse-paris",
  },
  {
    title: "Détatouage Laser",
    tag: "By Hollywood Peel™",
    image: "/images/design-sans-titre-2.png",
    href: "/detatouage-laser-paris",
  },
];

export function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal-card").forEach((el, i) => {
              setTimeout(() => {
                el.classList.add("opacity-100", "translate-y-0");
                el.classList.remove("opacity-0", "translate-y-6");
              }, i * 100);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const [featured, ...rest] = SERVICES;

  return (
    <section ref={sectionRef} className="py-[60px] bg-white">
      <div className="max-w-[1300px] mx-auto px-6 md:px-10">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <p className="text-[13px] font-bold uppercase tracking-[2px] mb-3 text-[#96000F]">
              Nos prestations
            </p>
            <h2 className="font-sans text-[32px] md:text-[42px] font-bold leading-tight text-black">
              Des soins d'exception<br className="hidden md:block" /> pour vous
            </h2>
          </div>
          <Link
            href="#contact"
            className="group relative overflow-hidden inline-block bg-[#96000F] border-2 border-[#96000F] text-[13px] font-medium uppercase rounded-[3px] px-6 py-[14px] shrink-0 self-start md:self-auto"
          >
            <span className="absolute inset-0 bg-white translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out" />
            <span className="relative z-10 text-white group-hover:text-[#96000F] transition-colors duration-500">
              Prendre rendez-vous
            </span>
          </Link>
        </div>

        {/* Layout magazine */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">

          {/* Carte vedette — grande */}
          <div className="reveal-card opacity-0 translate-y-6 transition-all duration-600 ease-out md:col-span-5 group relative overflow-hidden rounded-xl h-[420px] md:h-[580px] cursor-pointer">
            <Image
              src={featured.image}
              alt={featured.title}
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6">
              <span className="inline-block bg-[#96000F] text-white text-[11px] uppercase tracking-widest px-3 py-1 rounded-full mb-3">
                {featured.tag}
              </span>
              <h3 className="text-white text-[22px] font-bold">{featured.title}</h3>
              <p className="text-white/70 text-sm mt-1 group-hover:text-white transition-colors">
                Voir la prestation →
              </p>
            </div>
          </div>

          {/* Colonne droite — 5 cartes en grille */}
          <div className="md:col-span-7 grid grid-cols-2 gap-4">
            {rest.map((service, i) => (
              <div
                key={service.title}
                className={`reveal-card opacity-0 translate-y-6 transition-all duration-600 ease-out group relative overflow-hidden rounded-xl cursor-pointer ${
                  i === 4 ? "col-span-2 h-[180px]" : "h-[260px]"
                }`}
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 50vw, 30vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 p-4">
                  <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full mb-1.5">
                    {service.tag}
                  </span>
                  <h3 className="text-white text-[15px] font-bold leading-tight">
                    {service.title}
                  </h3>
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-[#96000F]/0 group-hover:bg-[#96000F]/30 transition-all duration-400" />
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
