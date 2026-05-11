"use client";

import Image from "next/image";
import { useRef, useEffect } from "react";
import Link from "next/link";

export function GeoSeoSection1() {
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-x-0");
            entry.target.classList.remove("opacity-0", "-translate-x-10", "translate-x-10");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    if (textRef.current) observer.observe(textRef.current);
    if (imageRef.current) observer.observe(imageRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-[80px] bg-white">
      <div className="max-w-[1300px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Image */}
          <div
            ref={imageRef}
            className="relative aspect-[4/3] rounded-xl overflow-hidden opacity-0 -translate-x-10 transition-all duration-[900ms] ease-out"
          >
            <Image
              src="/beautygate/gallery/LcDicyh6kKAgltJo5xF1UTp44idBu5GgBPTvf3Eh.jpg"
              alt="Soin du visage à l'Academy Beauty Gate Cotonou"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            {/* Badge flottant */}
            <div className="absolute bottom-6 left-6 bg-white rounded-xl px-5 py-4 shadow-lg">
              <p className="text-[11px] font-bold uppercase tracking-[2px] text-[#6D071A] mb-0.5">Certifié</p>
              <p className="text-[14px] font-bold text-black leading-tight">Équipements médicaux<br />de dernière génération</p>
            </div>
          </div>

          {/* Texte SEO */}
          <div
            ref={textRef}
            className="opacity-0 translate-x-10 transition-all duration-[900ms] ease-out"
          >
            <p className="text-[12px] font-bold uppercase tracking-[3px] text-[#6D071A] mb-4">
              Espace de bien-être, de beauté et de formation à Cotonou
            </p>
            <h2 className="font-heading text-[32px] md:text-[40px] font-bold text-black leading-tight mb-6">
              L'excellence esthétique<br />au cœur de Cadjehoun
            </h2>
            <p className="text-[15px] text-[#444] leading-[26px] mb-5">
              Implanté à <strong>Cadjehoun, Cotonou</strong>, Academy Beauty Gate est l'espace de bien-être, de beauté et de formation de référence au Bénin. Depuis son ouverture, il accompagne hommes et femmes dans leur quête d'une beauté saine, durable et naturelle.
            </p>
            <p className="text-[15px] text-[#444] leading-[26px] mb-5">
              Notre équipe de praticiens qualifiés maîtrise les protocoles les plus avancés : <strong>épilation laser à Cotonou</strong>, soins Hydrafacial, peelings chimiques, thérapie LED et traitements anti-âge. Chaque soin est personnalisé selon votre morphologie et vos besoins spécifiques.
            </p>
            <p className="text-[15px] text-[#444] leading-[26px] mb-8">
              Academy Beauty Gate est plus qu'un salon de beauté à Cotonou — c'est un espace de bien-être global où la technologie médicale rencontre le savoir-faire artisanal pour des résultats visibles et durables.
            </p>

            <ul className="space-y-3 mb-8">
              {[
                "Épilation laser définitive — résultats garantis",
                "Soins Hydrafacial & LED thérapeutique",
                "Massages relaxants & drainants",
                "Onglerie & nail art professionnel",
                "Suivi personnalisé post-traitement",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-[14px] text-[#333]">
                  <span className="mt-1 w-2 h-2 rounded-full bg-[#6D071A] shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <Link
              href="/rendez-vous"
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
