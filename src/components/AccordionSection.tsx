"use client";

import { useState } from "react";
import Image from "next/image";

const ACCORDION_ITEMS = [
  {
    title: "Prise en charge rapide et efficace",
    content:
      "Dans notre centre de médecine esthétique à Cotonou, nos patients sont rapidement pris en charge, peu importe s'ils souhaitent prendre rendez-vous, réaliser un diagnostic de peau ou effectuer une séance de soins.",
  },
  {
    title: "Méthodes non invasives",
    content:
      "Nos protocoles sont réalisées avec savoir-faire, professionnalisme pour obtenir le meilleur résultat tout étant sécurisé pour votre peau.",
  },
  {
    title: "Rapidité des résultats",
    content:
      "Un autre avantage important de la médecine esthétique est la rapidité de ses résultats. En effet, pour la plupart des soins, les résultats peuvent être immédiatement remarqués après la séance. Pour d'autres, il faut attendre seulement quelques heures ou quelques jours.",
  },
  {
    title: "Suivi des patients",
    content:
      "Tous les patients qui réalisent des soins de médecine esthétique à Cotonou dans notre centre de médecine esthétique bénéficient d'un suivi post-traitement afin que leur protocole se déroule dans les meilleures conditions.",
  },
  {
    title: "Dispositifs sécuritaires",
    content:
      "Les traitements sont réalisées dans le respect des dispositifs sécuritaires nécessaires à la réalisation de chaque type de soin. Il s'agit entre autres du port d'équipement nécessaire à la réalisation des soins, des appareils désinfectés et du calibrage des outils et machines.",
  },
];

export function AccordionSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="flex flex-col md:flex-row">
      {/* Texte + Accordéon */}
      <div className="flex-1 py-16 px-6 md:px-16 lg:px-20">
        <h2 className="font-sans text-[24px] md:text-[30px] font-normal leading-[1.3] text-black mb-4">
          Quels sont les avantages des soins esthétiques à Cotonou chez Academy Beauty Gate
        </h2>
        <p className="text-[15px] leading-[28px] text-[#555] mb-8">
          Choisir BeautyGate, pour vos soins de médecine esthétique à Cotonou
          vous permettra de bénéficier de plusieurs avantages.
        </p>

        <div className="space-y-0">
          {ACCORDION_ITEMS.map((item, index) => (
            <div key={item.title} className="border-b border-[#eee]">
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? -1 : index)
                }
                className="w-full flex items-center justify-between py-4 text-left cursor-pointer"
              >
                <h4 className="text-[15px] font-semibold text-black">
                  {item.title}
                </h4>
                <span
                  className={`text-[20px] text-gray-400 transition-transform duration-200 ${
                    openIndex === index ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index
                    ? "max-h-[300px] opacity-100 pb-4"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-[14px] leading-[24px] text-[#555]">
                  {item.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image */}
      <div className="flex-1 relative min-h-[400px] md:min-h-0">
        <Image
          src="/images/dsc01439-1-scaled.jpg"
          alt=""
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />
      </div>
    </section>
  );
}
