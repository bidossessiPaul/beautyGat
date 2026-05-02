"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

const ITEMS = [
  {
    title: "Prise en charge rapide et efficace",
    content:
      "Dans notre centre de médecine esthétique à Cotonou, nos patients sont rapidement pris en charge, peu importe s'ils souhaitent prendre rendez-vous, réaliser un diagnostic de peau ou effectuer une séance de soins.",
  },
  {
    title: "Méthodes non invasives",
    content:
      "Nos protocoles privilégient des techniques non invasives, pour des résultats visibles sans chirurgie, sans douleur et sans éviction sociale.",
  },
  {
    title: "Rapidité des résultats",
    content:
      "Grâce aux technologies médicales de pointe utilisées dans notre centre, les résultats sont visibles dès les premières séances.",
  },
  {
    title: "Suivi des patients",
    content:
      "Chaque patient bénéficie d'un suivi personnalisé tout au long de son protocole, avec des consultations régulières pour ajuster les traitements.",
  },
  {
    title: "Dispositifs sécuritaires",
    content:
      "Tous nos équipements sont certifiés et nos praticiens sont formés aux dernières normes de sécurité en médecine esthétique.",
  },
];

export function SeoTextBlock() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100", "translate-x-0");
          entry.target.classList.remove("opacity-0", "translate-x-10");
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );
    if (imageRef.current) observer.observe(imageRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-white">
      <div className="max-w-[1300px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-stretch">

          {/* Colonne gauche — titre + accordéon */}
          <div className="py-16 md:py-20 md:pr-16">
            <h2 className="font-sans text-[26px] md:text-[34px] font-bold leading-[1.25] text-black mb-5">
              Quels sont les avantages de la médecine esthétique à Cotonou chez BeautyGate ?
            </h2>
            <p className="text-[15px] leading-[28px] text-[#555] mb-8">
              Choisir BeautyGate pour vos soins de médecine esthétique à Cotonou
              vous permettra de bénéficier de plusieurs avantages.
            </p>

            {/* Accordéon */}
            <div className="divide-y divide-[#e5e5e5]">
              {ITEMS.map((item, i) => (
                <div key={i}>
                  <button
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    className="w-full flex items-center justify-between py-4 text-left"
                  >
                    <span className="text-[15px] font-semibold text-black pr-4">
                      {item.title}
                    </span>
                    <span className="text-[20px] text-[#999] shrink-0 leading-none">
                      {openIndex === i ? "×" : "+"}
                    </span>
                  </button>
                  {openIndex === i && (
                    <p className="pb-4 text-[14px] leading-[26px] text-[#555]">
                      {item.content}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Colonne droite — image avec animation scroll */}
          <div
            ref={imageRef}
            className="relative min-h-[400px] md:min-h-0 overflow-hidden opacity-0 translate-x-10 transition-all duration-[900ms] ease-out"
          >
            <Image
              src="/beautygate/gallery/2IuZRem4SKvK3UiMXPsNDe0qTSoVdzndfBpHSPUx.jpg"
              alt="Médecine esthétique BeautyGate Paris"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
