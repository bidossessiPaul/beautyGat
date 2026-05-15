"use client";

import { useState } from "react";

const FAQS = [
  {
    q: "Qu'est-ce qu'un soin Hydrafacial ?",
    a: "L'Hydrafacial est un protocole en 3 étapes — nettoyage, exfoliation et hydratation profonde — réalisé avec une technologie à ultrasons et vortex. Le teint est immédiatement lumineux, sans rougeur ni éviction sociale.",
  },
  {
    q: "Puis-je venir sans rendez-vous ?",
    a: "Nous recommandons vivement de prendre rendez-vous pour garantir la disponibilité de nos praticiens. Vous pouvez réserver via WhatsApp au +229 01 68 41 11 11 ou en remplissant le formulaire de contact sur cette page.",
  },
  {
    q: "Quels types de soins proposez-vous ?",
    a: "Academy Beauty Gate propose les soins du visage (Hydrafacial, peeling, LED), les massages relaxants et drainants, l'onglerie, les traitements anti-âge, l'électrolyse et les soins corps & silhouette.",
  },
  {
    q: "Où se trouve Academy Beauty Gate à Cotonou ?",
    a: "Notre institut est situé à Cadjehoun, Cotonou, Bénin (code Plus : 995X+6Q). Nous sommes facilement accessibles et disposons d'un parking à proximité. N'hésitez pas à nous contacter pour un itinéraire.",
  },
  {
    q: "Les soins conviennent-ils à tous les types de peau ?",
    a: "Oui. Nos praticiens sont formés pour adapter chaque protocole à votre phototype et à vos besoins spécifiques. Un bilan peau est systématiquement réalisé avant toute première séance.",
  },
  {
    q: "Proposez-vous des forfaits ou abonnements ?",
    a: "Oui, nous proposons des packs séances à tarifs avantageux pour l'électrolyse et les soins visage. Contactez-nous pour recevoir notre grille tarifaire personnalisée et nos offres du moment.",
  },
];

function FaqItem({ item }: { item: typeof FAQS[0] }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-[#eeeeee] last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 py-5 text-left"
      >
        <span className="text-[15px] font-semibold text-black leading-snug">{item.q}</span>
        <span
          className={`shrink-0 w-7 h-7 rounded-full border border-[#ddd] flex items-center justify-center transition-all duration-300 ${open ? "bg-[#6D071A] border-[#6D071A]" : "bg-white"}`}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke={open ? "#fff" : "#6D071A"}
            strokeWidth="2.5"
            strokeLinecap="round"
            className={`w-3.5 h-3.5 transition-transform duration-300 ${open ? "rotate-45" : ""}`}
          >
            <path d="M12 5v14M5 12h14" />
          </svg>
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${open ? "max-h-[200px] pb-5" : "max-h-0"}`}
      >
        <p className="text-[14px] text-[#555] leading-[24px]">{item.a}</p>
      </div>
    </div>
  );
}

export function FaqSection() {
  const col1 = FAQS.slice(0, 4);
  const col2 = FAQS.slice(4);

  return (
    <section className="py-[80px] bg-[#fafafa]">
      <div className="max-w-[1300px] mx-auto px-6 md:px-10">
        <div className="text-center mb-12">
          <p className="text-[12px] font-bold uppercase tracking-[3px] text-[#6D071A] mb-4">
            Questions fréquentes
          </p>
          <h2 className="font-heading text-[30px] md:text-[40px] font-bold text-black">
            Tout ce que vous voulez savoir
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16">
          <div>
            {col1.map((item) => <FaqItem key={item.q} item={item} />)}
          </div>
          <div>
            {col2.map((item) => <FaqItem key={item.q} item={item} />)}
          </div>
        </div>
      </div>
    </section>
  );
}
