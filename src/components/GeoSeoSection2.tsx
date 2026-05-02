"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useEffect } from "react";


const IMAGES = [
  {
    src: "/beautygate/services/J4pZHLIOEvHOmvfIlVfp7wPLYg3UMnUae5PW48Cr.jpg",
    alt: "Soins corps Academy Beauty Gate Cotonou",
  },
  {
    src: "/beautygate/categories/H5x4IEaQz7SeAGGOIKVSZ6nqzIaQ8XonlcyrJwII.jpg",
    alt: "Institut beauté Cotonou Bénin",
  },
  {
    src: "/IMG_3908.JPG",
    alt: "Academy Beauty Gate Cadjehoun Cotonou",
  },
];

export function GeoSeoSection2() {
  const textRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-8");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    if (textRef.current) observer.observe(textRef.current);
    if (gridRef.current) observer.observe(gridRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-[80px] bg-[#fafafa]">
      <div className="max-w-[1300px] mx-auto px-6 md:px-10">

        {/* En-tête centré */}
        <div className="text-center mb-14 max-w-[700px] mx-auto">
          <p className="text-[12px] font-bold uppercase tracking-[3px] text-[#6D071A] mb-4">
            Pourquoi nous choisir
          </p>
          <h2 className="font-heading text-[32px] md:text-[40px] font-bold text-black leading-tight mb-5">
            Le meilleur institut beauté<br />de Cotonou & du Bénin
          </h2>
          <p className="text-[15px] text-[#555] leading-[26px]">
            Academy Beauty Gate réunit sous un même toit les technologies esthétiques les plus avancées d'Afrique de l'Ouest, avec une équipe formée aux standards internationaux pour vous offrir des soins d'excellence à Cotonou.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Grille d'images — 1 grande gauche + 2 empilées droite */}
          <div
            ref={gridRef}
            className="grid grid-cols-2 gap-3 opacity-0 translate-y-8 transition-all duration-[900ms] ease-out"
          >
            {/* Grande image gauche — pleine hauteur */}
            <div className="relative overflow-hidden rounded-xl row-span-2" style={{ height: "460px" }}>
              <Image
                src={IMAGES[0].src}
                alt={IMAGES[0].alt}
                fill
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            {/* 2 images empilées droite */}
            {IMAGES.slice(1).map((img) => (
              <div
                key={img.src}
                className="relative overflow-hidden rounded-xl"
                style={{ height: "220px" }}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>

          {/* Texte + stats */}
          <div
            ref={textRef}
            className="opacity-0 translate-y-8 transition-all duration-[900ms] ease-out"
          >
            {/* Points forts */}
            <div className="space-y-7 mb-10">
              {[
                {
                  titre: "Technologie médicale de pointe",
                  desc: "Laser dernière génération, Hydrafacial, ultra-sons, LED thérapeutique — les mêmes équipements que les cliniques européennes, disponibles à Cotonou.",
                },
                {
                  titre: "Praticiens certifiés & expérimentés",
                  desc: "Toute l'équipe d'Academy Beauty Gate est formée aux derniers protocoles esthétiques. Votre peau est entre des mains expertes à chaque visite.",
                },
                {
                  titre: "Résultats visibles & durables",
                  desc: "Nos clients voient des résultats dès la première séance. L'épilation laser à Cotonou avec nos appareils garantit une réduction permanente et indolore.",
                },
                {
                  titre: "Cadre luxueux & hygiène irréprochable",
                  desc: "Un espace soins climatisé, des produits de marque, du linge stérilisé — l'expérience Beauty Gate à Cadjehoun est un moment de détente absolu.",
                },
              ].map((point) => (
                <div key={point.titre} className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#6D071A]/10 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="w-2 h-2 rounded-full bg-[#6D071A]" />
                  </div>
                  <div>
                    <h3 className="text-[15px] font-bold text-black mb-1">{point.titre}</h3>
                    <p className="text-[14px] text-[#555] leading-[22px]">{point.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="#contact"
              className="group relative overflow-hidden inline-block bg-[#6D071A] text-white px-8 py-4 text-[13px] font-semibold uppercase tracking-widest rounded-[3px]"
            >
              <span className="absolute inset-0 bg-black translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out" />
              <span className="relative z-10">Prendre rendez-vous</span>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
