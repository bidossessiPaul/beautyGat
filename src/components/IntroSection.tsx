"use client";

import { useEffect, useRef } from "react";

export function IntroSection() {
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

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
      { threshold: 0.2 }
    );
    if (leftRef.current) observer.observe(leftRef.current);
    if (rightRef.current) observer.observe(rightRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-[80px] bg-[#fafafa]">
      <div className="max-w-[1300px] mx-auto px-6 md:px-10">

        {/* Eyebrow + titre centré */}
        <div className="text-center mb-14">
          <p className="text-[12px] font-bold uppercase tracking-[3px] text-[#96000F] mb-4">
            Notre philosophie
          </p>
          <h2 className="font-sans text-[30px] md:text-[44px] font-bold leading-[1.2] text-black max-w-[700px] mx-auto">
            Institut de beauté & de soins esthétiques au cœur de Cotonou
          </h2>
        </div>

        {/* Deux colonnes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-start">

          {/* Gauche — Ce qu'est BeautyGate */}
          <div
            ref={leftRef}
            className="opacity-0 translate-y-8 transition-all duration-700 ease-out"
          >
            <div className="w-10 h-[3px] bg-[#96000F] mb-6" />
            <h3 className="font-sans text-[20px] font-bold text-black mb-4 leading-snug">
              Un espace dédié à votre beauté, au cœur de Cotonou
            </h3>
            <p className="text-[15px] leading-[30px] text-[#555] mb-4">
              Academy Beauty Gate est un institut de beauté basé à Cadjehoun, Cotonou, fondé avec une conviction forte : chaque personne mérite un accompagnement sur-mesure, des soins de qualité et des résultats visibles dès la première séance.
            </p>
            <p className="text-[15px] leading-[30px] text-[#555]">
              Notre équipe de professionnelles certifiées vous reçoit dans un cadre chaleureux et élégant, pour des soins adaptés à votre peau, votre morphologie et vos objectifs — qu'il s'agisse d'épilation, de soins du visage ou de bien-être corporel.
            </p>
          </div>

          {/* Droite — Vision & promesse */}
          <div
            ref={rightRef}
            className="opacity-0 translate-y-8 transition-all duration-700 ease-out delay-200"
          >
            <div className="w-10 h-[3px] bg-[#96000F] mb-6" />
            <h3 className="font-sans text-[20px] font-bold text-black mb-4 leading-snug">
              Notre promesse : une expérience beauté irréprochable à Cotonou
            </h3>
            <p className="text-[15px] leading-[30px] text-[#555] mb-4">
              Chez Academy Beauty Gate, nous combinons technologies avancées et attention personnalisée pour vous offrir une expérience beauté unique à Cotonou. Chaque soin est conçu pour répondre aux besoins spécifiques de votre peau et vous garantir des résultats visibles et durables.
            </p>
            <p className="text-[15px] leading-[30px] text-[#555]">
              Parce que prendre soin de soi est un acte de confiance, nous mettons tout en œuvre pour que chaque visite soit une expérience de bien-être, de sérénité et de transformation.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
