"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingContact } from "@/components/FloatingContact";

function useInView(threshold = 0.15) {
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

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const spanRef = useRef<HTMLSpanElement>(null);
  const started = useRef(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const steps = 60;
        const inc = target / steps;
        let cur = 0;
        const t = setInterval(() => {
          cur += inc;
          if (cur >= target) { setCount(target); clearInterval(t); }
          else setCount(Math.floor(cur));
        }, 1800 / steps);
      }
    }, { threshold: 0.3 });
    if (spanRef.current) obs.observe(spanRef.current);
    return () => obs.disconnect();
  }, [target]);
  return <span ref={spanRef}>{count}{suffix}</span>;
}

const VALUES = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: "Excellence",
    desc: "Chaque soin est réalisé avec des équipements de dernière génération et des protocoles éprouvés pour garantir des résultats optimaux.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    title: "Personnalisation",
    desc: "Aucun protocole standard. Chaque client bénéficie d'un diagnostic et d'un soin sur-mesure, adapté à son type de peau et à ses objectifs.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
      </svg>
    ),
    title: "Bienveillance",
    desc: "Un espace de confiance où vous vous sentez accueillie, écoutée et choyée. Votre confort et votre bien-être sont notre priorité absolue.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
        <circle cx="12" cy="12" r="10"/>
        <path d="M12 8v4l3 3"/>
      </svg>
    ),
    title: "Expertise locale",
    desc: "Spécialisés dans les peaux africaines et métissées, nos praticiens maîtrisent les protocoles adaptés aux spécificités de la peau sous le soleil de Cotonou.",
  },
];

const CERTIFICATIONS = [
  "Formation certifiée en esthétique avancée",
  "Protocoles adaptés aux phototypes foncés",
  "Équipements médicaux de dernière génération",
  "Produits cosmétiques haut de gamme et certifiés",
  "Normes d'hygiène et de stérilisation rigoureuses",
  "Formation continue et veille scientifique",
];

export default function AProposPage() {
  const heroRef       = useInView(0.1);
  const storyRef      = useInView(0.15);
  const valuesRef     = useInView(0.1);
  const certifRef     = useInView(0.1);

  return (
    <>
      <Header />
      <main>

        {/* ── HERO ── */}
        <section className="relative bg-black pt-[90px] overflow-hidden">
          <div
            className="absolute inset-0 opacity-35"
            style={{
              backgroundImage: "url('/beautygate/about-photo.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center 20%",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
          <div
            ref={heroRef.ref}
            className={`relative z-10 max-w-[1300px] mx-auto px-6 md:px-10 py-24 md:py-32 transition-all duration-700 ease-out ${
              heroRef.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-[#f0b8b8] text-xs font-bold uppercase tracking-[0.25em] mb-4">
              Notre histoire
            </p>
            <h1 className="text-white text-[38px] md:text-[58px] font-bold leading-[1.1] mb-5 max-w-[600px]">
              À propos d&apos;Academy Beauty Gate
            </h1>
            <p className="text-white/70 text-[15px] md:text-[17px] leading-[28px] max-w-[560px]">
              Un institut de beauté de référence à Cotonou, fondé par passion pour la beauté et le bien-être des femmes africaines.
            </p>
          </div>
        </section>

        {/* ── NOTRE HISTOIRE ── */}
        <section className="py-20 overflow-hidden">
          <div
            ref={storyRef.ref}
            className="max-w-[1300px] mx-auto px-6 md:px-10 flex flex-col md:flex-row items-stretch gap-0"
          >
            {/* Image */}
            <div className={`group flex-1 relative min-h-[480px] md:min-h-[620px] overflow-hidden transition-all duration-700 ease-out ${
              storyRef.inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}>
              <Image
                src="/beautygate/about-photo.jpg"
                alt="Sofia Aude HONVO — Fondatrice Academy Beauty Gate"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-top transition-transform duration-[1400ms] ease-in-out group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-[#6D071A]/80 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <p className="text-white text-xl font-bold tracking-wide">Sofia Aude HONVO</p>
                <p className="text-white/80 text-sm uppercase tracking-[0.2em] mt-2">Fondatrice — Academy Beauty Gate</p>
              </div>
            </div>

            {/* Texte */}
            <div className={`flex-1 flex flex-col justify-center px-6 md:px-12 lg:px-16 py-10 md:py-0 transition-all duration-700 ease-out delay-200 ${
              storyRef.inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}>
              <p className="text-[11px] font-bold uppercase tracking-[3px] text-[#6D071A] mb-4">Qui sommes-nous</p>
              <h2 className="text-[26px] md:text-[34px] font-bold leading-[1.25] text-black mb-6">
                L&apos;excellence au service de votre beauté, à Cotonou
              </h2>
              <p className="text-[15px] leading-[28px] text-[#444] mb-4">
                Academy Beauty Gate est né d&apos;une passion profonde pour la beauté et le bien-être. Fondé par <strong>Sofia Aude HONVO</strong>, notre espace a été pensé pour offrir à chaque client une expérience sur-mesure, alliant expertise technique et chaleur humaine.
              </p>
              <p className="text-[15px] leading-[28px] text-[#444] mb-4">
                Implantés au cœur de Cadjehoun, à Cotonou, nous avons fait le choix d&apos;intégrer les technologies esthétiques les plus avancées, tout en restant profondément ancrés dans la réalité des peaux africaines et métissées. Chaque protocole est pensé pour les spécificités de notre clientèle locale.
              </p>
              <p className="text-[15px] leading-[28px] text-[#444] mb-4">
                Notre équipe de praticiens certifiés vous accompagne avec des techniques modernes et des produits de haute qualité. Hydrafacial, épilation laser, injections esthétiques, peeling, cryolipolyse — nous maîtrisons l&apos;ensemble des disciplines de l&apos;esthétique avancée.
              </p>
              <p className="text-[15px] leading-[28px] text-[#444] mb-8">
                Dans un cadre chaleureux et professionnel, nous créons un espace de confiance où vous pouvez vous ressourcer et prendre soin de vous en toute sérénité.
              </p>
              <Link
                href="/contact"
                className="group relative overflow-hidden inline-block bg-[#6D071A] border-2 border-[#6D071A] text-[12px] font-bold uppercase tracking-widest rounded-[3px] px-7 py-4 self-start"
              >
                <span className="absolute inset-0 bg-white translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out" />
                <span className="relative z-10 text-white group-hover:text-[#6D071A] transition-colors duration-500">
                  Prendre rendez-vous
                </span>
              </Link>
            </div>
          </div>
        </section>

        {/* ── STATS ── */}
        <section className="bg-[#6D071A] py-16">
          <div className="max-w-[1300px] mx-auto px-6 md:px-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0">
              {[
                { value: 500, suffix: "+", label: "Clients satisfaits" },
                { value: 10,  suffix: " ans", label: "D'expertise" },
                { value: 20,  suffix: "+", label: "Soins disponibles" },
                { value: 98,  suffix: "%", label: "Taux de satisfaction" },
              ].map((stat, i, arr) => (
                <div
                  key={stat.label}
                  className={`text-center py-4 ${i < arr.length - 1 ? "md:border-r md:border-white/20" : ""}`}
                >
                  <p className="text-white text-4xl md:text-5xl font-bold mb-2">
                    <Counter target={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="text-white/70 text-sm uppercase tracking-[0.15em] font-medium">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── NOS VALEURS ── */}
        <section className="py-20 bg-[#f8f8f8]">
          <div
            ref={valuesRef.ref}
            className="max-w-[1300px] mx-auto px-6 md:px-10"
          >
            <div className={`text-center mb-12 transition-all duration-700 ease-out ${
              valuesRef.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}>
              <p className="text-[11px] font-bold uppercase tracking-[3px] text-[#6D071A] mb-3">Nos engagements</p>
              <h2 className="text-[28px] md:text-[38px] font-bold text-black">Ce qui nous définit</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {VALUES.map((val, i) => (
                <div
                  key={val.title}
                  className={`bg-white p-7 border border-[#eee] rounded-[3px] transition-all duration-700 ease-out ${
                    valuesRef.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div className="text-[#6D071A] mb-4">{val.icon}</div>
                  <h3 className="text-[16px] font-bold text-black mb-3">{val.title}</h3>
                  <p className="text-[13px] leading-[22px] text-[#666]">{val.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CERTIFICATIONS ── */}
        <section className="py-20">
          <div
            ref={certifRef.ref}
            className="max-w-[1300px] mx-auto px-6 md:px-10 flex flex-col md:flex-row gap-16 items-center"
          >
            <div className={`flex-1 transition-all duration-700 ease-out ${
              certifRef.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}>
              <p className="text-[11px] font-bold uppercase tracking-[3px] text-[#6D071A] mb-3">Qualité & sécurité</p>
              <h2 className="text-[26px] md:text-[34px] font-bold text-black mb-5">
                Notre engagement qualité
              </h2>
              <p className="text-[15px] leading-[28px] text-[#555] mb-8">
                Chez Academy Beauty Gate, la sécurité et la qualité ne sont pas négociables. Nous investissons continuellement dans la formation de nos équipes et le renouvellement de nos équipements pour vous offrir les meilleurs soins disponibles à Cotonou.
              </p>
              <Link
                href="/tarifs"
                className="group relative overflow-hidden inline-block bg-black text-[12px] font-bold uppercase tracking-widest rounded-[3px] px-7 py-4 self-start"
              >
                <span className="absolute inset-0 bg-[#6D071A] translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out" />
                <span className="relative z-10 text-white transition-colors duration-500">
                  Voir nos tarifs
                </span>
              </Link>
            </div>
            <div className={`flex-1 transition-all duration-700 ease-out delay-200 ${
              certifRef.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}>
              <ul className="space-y-3">
                {CERTIFICATIONS.map((cert) => (
                  <li key={cert} className="flex items-start gap-3">
                    <span className="mt-1 shrink-0 w-4 h-4 rounded-full bg-[#6D071A] flex items-center justify-center">
                      <svg viewBox="0 0 12 12" fill="none" className="w-2.5 h-2.5">
                        <path d="M2 6l3 3 5-5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    <span className="text-[14px] leading-[24px] text-[#444]">{cert}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ── CTA FINAL ── */}
        <section className="bg-black py-20">
          <div className="max-w-[700px] mx-auto px-6 text-center">
            <p className="text-white/50 text-xs font-bold uppercase tracking-[0.25em] mb-4">
              Nous sommes à votre écoute
            </p>
            <h2 className="text-white text-[30px] md:text-[40px] font-bold leading-[1.2] mb-5">
              Prenez rendez-vous à Cadjehoun, Cotonou
            </h2>
            <p className="text-white/70 text-[15px] leading-[26px] mb-8">
              Notre équipe vous accueille du lundi au samedi de 9h à 19h. Diagnostic de peau offert avant tout premier soin.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/rendez-vous"
                className="group relative overflow-hidden inline-block bg-[#6D071A] text-[12px] font-bold uppercase tracking-widest px-8 py-4 rounded-[3px]"
              >
                <span className="absolute inset-0 bg-white translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out" />
                <span className="relative z-10 text-white group-hover:text-[#6D071A] transition-colors duration-500">
                  WhatsApp
                </span>
              </Link>
              <Link
                href="/contact"
                className="group relative overflow-hidden inline-block border-2 border-white/40 text-white text-[12px] font-bold uppercase tracking-widest px-8 py-4 rounded-[3px]"
              >
                <span className="absolute inset-0 bg-white translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out" />
                <span className="relative z-10 group-hover:text-black transition-colors duration-500">
                  Formulaire contact
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
