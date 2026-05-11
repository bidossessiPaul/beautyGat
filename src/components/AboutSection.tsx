"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = [headerRef.current, imageRef.current, textRef.current].filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-10");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    els.forEach((el) => observer.observe(el!));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-[60px] overflow-hidden">
      {/* Header centré */}
      <div
        ref={headerRef}
        className="max-w-[1300px] mx-auto px-6 md:px-10 text-center mb-14 opacity-0 translate-y-10 transition-all duration-700 ease-out"
      >
        <p className="text-[13px] font-bold uppercase tracking-[2px] mb-4 font-sans">
          Qui sommes-nous
        </p>
        <h2 className="font-sans text-[32px] md:text-[48px] font-bold leading-[1.19] text-black mb-6">
          L'excellence au service de votre beauté
        </h2>
        <p className="text-[15px] leading-[28px] text-[#555] max-w-[700px] mx-auto">
          BeautyGate est un espace dédié au soin et au bien-être, où chaque prestation est pensée pour sublimer votre beauté naturelle.
        </p>
      </div>

      {/* Image + Texte */}
      <div className="max-w-[1300px] mx-auto px-6 md:px-10 flex flex-col md:flex-row items-stretch">

        {/* Image avec hover zoom + overlay nom */}
        <div
          ref={imageRef}
          className="group flex-1 relative min-h-[500px] md:min-h-[680px] overflow-hidden opacity-0 translate-y-10 transition-all duration-700 ease-out delay-150"
        >
          <Image
            src="/beautygate/about-photo.jpg"
            alt="Sofia Aude HONVO — Fondatrice BeautyGate"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-top transition-transform duration-700 ease-in-out group-hover:scale-105"
          />
          {/* Overlay au survol */}
          <div className="absolute inset-0 bg-[#6D071A]/80 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <p className="text-white text-xl font-bold tracking-wide">Sofia Aude HONVO</p>
            <p className="text-white/80 text-sm uppercase tracking-[0.2em] mt-2">Fondatrice — BeautyGate</p>
          </div>
        </div>

        {/* Texte */}
        <div
          ref={textRef}
          className="flex-1 flex flex-col justify-center px-6 md:px-[60px] lg:px-[100px] py-8 md:py-0 opacity-0 translate-y-10 transition-all duration-700 ease-out delay-300"
        >
          <h3 className="font-sans text-[24px] md:text-[30px] font-bold leading-[1.3] text-black mb-4">
            Un accompagnement personnalisé et professionnel
          </h3>
          <p className="text-[15px] leading-[28px] text-[#333] mb-4">
            BeautyGate est né d'une passion profonde pour la beauté et le bien-être. Fondé par Sofia Aude HONVO, notre espace a été pensé pour offrir à chaque client une expérience sur mesure, alliant expertise technique et chaleur humaine.
          </p>
          <p className="text-[15px] leading-[28px] text-[#333] mb-4">
            Notre équipe de professionnels certifiés vous accompagne avec des techniques modernes et des produits de haute qualité. Que ce soit pour des soins du visage, des traitements corps ou des soins spécifiques, nous mettons notre savoir-faire à votre service.
          </p>
          <p className="text-[15px] leading-[28px] text-[#333] mb-4">
            Chaque soin est soigneusement adapté à vos besoins et à la spécificité de votre peau, pour des résultats visibles et durables. Parce que votre beauté mérite le meilleur, nous ne faisons aucun compromis sur la qualité.
          </p>
          <p className="text-[15px] leading-[28px] text-[#333] mb-8">
            Dans un cadre chaleureux et professionnel, nous créons un espace de confiance où vous pouvez vous ressourcer et prendre soin de vous en toute sérénité.
          </p>
          <Link
            href="/rendez-vous"
            className="group relative overflow-hidden inline-block bg-[#6D071A] border-2 border-[#6D071A] text-[13px] font-medium uppercase rounded-[3px] px-6 py-[19px] self-start"
          >
            <span className="absolute inset-0 bg-white translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out" />
            <span className="relative z-10 text-white group-hover:text-[#6D071A] transition-colors duration-500">
              Prendre rendez-vous
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
