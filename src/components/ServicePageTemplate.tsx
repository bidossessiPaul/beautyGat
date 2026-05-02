"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { MapPin, Phone, ChevronDown, CheckCircle2, Star, Navigation } from "lucide-react";
import { ServiceData, getRelatedServices } from "@/data/services";

const CATEGORY_FALLBACK: Partial<Record<ServiceData["category"], string>> = {
  visage:          "/images/soins/hydrafacial/hero.jpg",
  corps:           "/images/soins/bodysculpt/hero.png",
  epilation:       "/images/epilation-laser/Appart-beaute-epilation-intro-1-scaled.jpg",
  "epilation-cire":"/images/epilation-laser/Appart-beaute-epilation-intro-1-scaled.jpg",
  injections:      "/images/soins/injection-hyaluronique/hero.jpg",
  diagnostic:      "/images/soins/diagnostic-peau/hero.jpg",
  "mains-pieds":   "/images/appart-beaute-3873920.jpg",
  massages:        "/images/Appart-beaute-accueil-philosophie-1-scaled.jpg",
  maquillage:      "/images/appart-beaute-3873926.jpg",
  coiffure:        "/images/appart-beaute-3873931.jpg",
  barber:          "/images/dsc01155.jpg",
  "duo-enfants":   "/images/dsc01280.jpg",
  privatisation:   "/images/dsc01308-scaled.jpg",
};

interface Props {
  service: ServiceData;
}

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

export function ServicePageTemplate({ service }: Props) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [imgRevealed, setImgRevealed] = useState(false);

  const introRef = useInView(0.2);
  const benefitsRef = useInView(0.1);
  const pricingRef = useInView(0.1);
  const faqRef = useInView(0.1);
  const geoRef1 = useInView(0.1);
  const geoRef2 = useInView(0.1);
  const relatedRef = useInView(0.08);
  const relatedServices = getRelatedServices(service, 4);

  const fallback = CATEGORY_FALLBACK[service.category];
  const heroImg = service.hero.image ?? fallback;
  const introImg = service.intro.image ?? fallback;

  return (
    <main>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative h-[500px] md:h-[580px] overflow-hidden">
        {/* Ken Burns on the image — fallback gradient when no image */}
        <div className="absolute inset-0">
          {heroImg ? (
            <Image
              src={heroImg}
              alt={service.hero.imageAlt}
              fill
              className={`object-cover ${service.hero.imagePosition ?? "object-center"} animate-ken-burns`}
              priority
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-[#1a0005] via-[#2d000f] to-[#0d0d0d]" />
          )}
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />

        {/* Hero text — fade in on load */}
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-6xl mx-auto px-6 w-full">
            <p
              className="text-[#f0b8b8] text-sm font-medium uppercase tracking-[0.2em] mb-3"
              style={{ animation: "fade-up 0.6s 0.1s cubic-bezier(0.22,1,0.36,1) both" }}
            >
              {service.hero.eyebrow}
            </p>
            <h1
              className="text-white text-3xl md:text-5xl font-bold leading-tight max-w-2xl mb-4"
              style={{ animation: "fade-up 0.7s 0.25s cubic-bezier(0.22,1,0.36,1) both" }}
            >
              {service.hero.headline}
            </h1>
            <p
              className="text-white/80 text-base md:text-lg max-w-xl mb-8"
              style={{ animation: "fade-up 0.7s 0.4s cubic-bezier(0.22,1,0.36,1) both" }}
            >
              {service.hero.subheadline}
            </p>
            <div
              className="flex flex-wrap gap-3"
              style={{ animation: "fade-up 0.7s 0.55s cubic-bezier(0.22,1,0.36,1) both" }}
            >
              <Link
                href="#contact"
                className="group relative overflow-hidden inline-block bg-[#6D071A] text-white px-7 py-3 text-sm font-semibold uppercase tracking-wider"
              >
                <span className="absolute inset-0 bg-white translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out" />
                <span className="relative z-10 group-hover:text-[#6D071A] transition-colors duration-500">Prendre rendez-vous</span>
              </Link>
              <Link
                href="#tarifs"
                className="inline-block border border-white/60 text-white px-7 py-3 text-sm font-semibold uppercase tracking-wider hover:bg-white/10 transition-colors"
              >
                Voir les tarifs
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── BADGES ───────────────────────────────────────────────────────── */}
      <section className="bg-[#6D071A]">
        <div className="max-w-6xl mx-auto px-6 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-10">
            {service.badges.map((badge, i) => (
              <div
                key={i}
                className="flex items-center gap-2 text-white opacity-0-init"
                style={{ animation: `fade-up 0.5s ${0.1 + i * 0.12}s cubic-bezier(0.22,1,0.36,1) both` }}
              >
                <span className="text-white/60 text-xs">{badge.icon}</span>
                <span className="text-sm font-medium">{badge.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INTRO ────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-white" ref={introRef.ref}>
        <div className="max-w-6xl mx-auto px-6">
          <div className={`grid ${introImg ? "md:grid-cols-2" : "grid-cols-1 max-w-3xl mx-auto"} gap-12 items-center`}>

            {/* Image with red-overlay reveal + hover zoom — own image or category fallback */}
            {introImg && (
              <div
                className="relative aspect-square overflow-hidden group"
                onAnimationEnd={() => setImgRevealed(true)}
              >
                <Image
                  src={introImg}
                  alt={service.intro.imageAlt}
                  fill
                  className={`object-cover transition-transform duration-[1400ms] ease-in-out group-hover:scale-[1.04] ${
                    introRef.inView ? "scale-100" : "scale-110"
                  }`}
                  style={{
                    opacity: introRef.inView ? 1 : 0,
                    transition: "opacity 0.7s 0.05s ease, transform 1400ms 0.05s ease-in-out",
                  }}
                />
                {/* Red wipe overlay */}
                <div
                  className={`absolute inset-0 bg-[#6D071A] origin-left transition-transform duration-700 ${
                    introRef.inView ? "scale-x-0" : "scale-x-100"
                  }`}
                  style={{ transitionTimingFunction: "cubic-bezier(0.77, 0, 0.18, 1)" }}
                />
              </div>
            )}

            {/* Text content */}
            <div
              className={`transition-all duration-700 delay-300 ${
                introRef.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <p className="text-[#6D071A] text-xs font-semibold uppercase tracking-[0.2em] mb-3">
                À propos
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-6">
                {service.intro.headline}
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                {service.intro.description}
              </p>
              <ul className="space-y-3 mb-8">
                {service.intro.listItems.map((item, i) => (
                  <li
                    key={i}
                    className={`flex items-start gap-3 transition-all duration-500 ${
                      introRef.inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
                    }`}
                    style={{ transitionDelay: `${0.4 + i * 0.08}s` }}
                  >
                    <CheckCircle2 className="text-[#6D071A] mt-0.5 shrink-0" size={18} />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <div
                className={`flex flex-wrap gap-3 transition-all duration-500 ${
                  introRef.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: `${0.4 + service.intro.listItems.length * 0.08 + 0.1}s` }}
              >
                <Link
                  href="#contact"
                  className="group relative overflow-hidden inline-block bg-[#6D071A] text-white px-6 py-3 text-sm font-semibold uppercase tracking-wider"
                >
                  <span className="absolute inset-0 bg-white translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out" />
                  <span className="relative z-10 group-hover:text-[#6D071A] transition-colors duration-500">Prendre rendez-vous</span>
                </Link>
                <Link
                  href="#tarifs"
                  className="inline-block border border-gray-300 text-gray-700 px-6 py-3 text-sm font-semibold uppercase tracking-wider hover:border-[#6D071A] hover:text-[#6D071A] transition-colors"
                >
                  Voir les tarifs
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── BENEFITS ─────────────────────────────────────────────────────── */}
      <section className="py-20 bg-[#fafafa]" ref={benefitsRef.ref}>
        <div className="max-w-6xl mx-auto px-6">
          <div
            className={`text-center mb-12 transition-all duration-700 ${
              benefitsRef.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-[#6D071A] text-xs font-semibold uppercase tracking-[0.2em] mb-3">
              Pourquoi choisir ce soin
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Les avantages
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.benefits.map((benefit, i) => (
              <div
                key={i}
                className={`bg-white p-6 border border-gray-100 hover:border-[#6D071A]/30 transition-all duration-500 group ${
                  benefitsRef.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="w-8 h-0.5 bg-[#6D071A] mb-4 transition-all duration-300 group-hover:w-16" />
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-[#6D071A] transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ──────────────────────────────────────────────────────── */}
      <section id="tarifs" className="py-20 bg-white" ref={pricingRef.ref}>
        <div className="max-w-4xl mx-auto px-6">
          <div
            className={`text-center mb-12 transition-all duration-700 ${
              pricingRef.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-[#6D071A] text-xs font-semibold uppercase tracking-[0.2em] mb-3">
              Tarification transparente
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {service.pricing.headline}
            </h2>
            <p className="text-gray-500 text-sm">{service.pricing.note}</p>
          </div>

          <div
            className={`border border-gray-200 divide-y divide-gray-100 overflow-hidden transition-all duration-700 delay-150 ${
              pricingRef.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {service.pricing.items.map((item, i) => (
              <div
                key={i}
                className={`flex items-center justify-between px-6 py-4 ${
                  i === 0 ? "bg-[#6D071A] text-white" : "bg-white hover:bg-gray-50"
                } transition-colors`}
              >
                <div>
                  <span className={`font-medium ${i === 0 ? "text-white" : "text-gray-800"}`}>
                    {item.label}
                  </span>
                  {item.note && (
                    <span
                      className={`ml-3 text-xs px-2 py-0.5 rounded-full ${
                        i === 0 ? "bg-white/20 text-white" : "bg-green-50 text-green-700"
                      }`}
                    >
                      {item.note}
                    </span>
                  )}
                </div>
                <span className={`font-bold text-lg ${i === 0 ? "text-white" : "text-[#6D071A]"}`}>
                  {item.price}
                </span>
              </div>
            ))}
          </div>

          <div
            className={`mt-8 bg-[#6D071A]/5 border border-[#6D071A]/20 p-6 text-center transition-all duration-700 delay-300 ${
              pricingRef.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-gray-700 text-sm mb-4">
              Première consultation gratuite — tarifs adaptés à votre projet.
            </p>
            <Link
              href="#contact"
              className="group relative overflow-hidden inline-block bg-[#6D071A] text-white px-8 py-3 text-sm font-semibold uppercase tracking-wider"
            >
              <span className="absolute inset-0 bg-white translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out" />
              <span className="relative z-10 group-hover:text-[#6D071A] transition-colors duration-500">Demander un devis personnalisé</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-[#fafafa]" ref={faqRef.ref}>
        <div className="max-w-5xl mx-auto px-6">
          <div
            className={`text-center mb-12 transition-all duration-700 ${
              faqRef.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-[#6D071A] text-xs font-semibold uppercase tracking-[0.2em] mb-3">
              Questions fréquentes
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Tout ce que vous devez savoir
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {service.faq.map((item, i) => (
              <div
                key={i}
                className={`bg-white border border-gray-100 overflow-hidden transition-all duration-500 ${
                  faqRef.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                <button
                  className="w-full text-left px-6 py-4 flex items-start justify-between gap-4 hover:bg-gray-50 transition-colors"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="font-semibold text-gray-900 text-sm">{item.question}</span>
                  <ChevronDown
                    size={18}
                    className={`text-[#6D071A] shrink-0 mt-0.5 transition-transform duration-200 ${
                      openFaq === i ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-4 text-gray-600 text-sm leading-relaxed border-t border-gray-100">
                    <p className="pt-3">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GEO SEO 1 — Expertise locale ────────────────────────────────── */}
      <section className="py-20 bg-white" ref={geoRef1.ref}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-start">

            {/* Texte SEO */}
            <div
              className={`transition-all duration-700 ${
                geoRef1.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <p className="text-[#6D071A] text-xs font-semibold uppercase tracking-[0.2em] mb-3">
                Notre expertise à Cotonou
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-6">
                Pourquoi choisir Academy Beauty Gate pour {service.hero.eyebrow.toLowerCase()} à Cotonou ?
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed text-sm">
                <p>
                  Academy Beauty Gate est l&apos;institut de référence pour {service.hero.eyebrow.toLowerCase()} à Cotonou, Bénin.
                  Installé au cœur de Cadjehoun, notre centre combine les dernières technologies esthétiques
                  avec une expertise adaptée aux spécificités des peaux africaines et métissées.
                </p>
                <p>
                  Notre équipe de praticiens certifiés maîtrise les protocoles les plus exigeants pour vous garantir
                  des résultats visibles, durables et sécurisés. Chaque traitement commence par un diagnostic personnalisé
                  afin d&apos;identifier précisément vos besoins et de concevoir le protocole le mieux adapté à votre peau.
                </p>
                <p>
                  À Academy Beauty Gate Cotonou, nous utilisons exclusivement des équipements de dernière génération
                  homologués pour {service.hero.eyebrow.toLowerCase()}, dans le strict respect des normes d&apos;hygiène et de sécurité.
                  Votre confort et votre satisfaction sont au cœur de chacune de nos séances.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-3 gap-4">
                {[
                  { value: "175+", label: "Avis 5 étoiles" },
                  { value: "8 ans", label: "D'expertise" },
                  { value: "100%", label: "Satisfaction" },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className={`text-center border-l-2 border-[#6D071A]/20 pl-4 transition-all duration-500 ${
                      geoRef1.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    }`}
                    style={{ transitionDelay: `${0.3 + i * 0.1}s` }}
                  >
                    <p className="text-2xl font-bold text-[#6D071A]">{stat.value}</p>
                    <p className="text-xs text-gray-500 mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Carte "Institut" */}
            <div
              className={`transition-all duration-700 delay-200 ${
                geoRef1.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <div className="bg-[#6D071A] text-white p-8">
                <p className="text-white/60 text-xs uppercase tracking-[0.2em] mb-6">
                  Academy Beauty Gate — Cotonou
                </p>

                <div className="space-y-5 mb-8">
                  {[
                    { icon: <MapPin size={16} />, label: "Adresse", value: "Cadjehoun, Cotonou, Bénin" },
                    { icon: <Phone size={16} />, label: "Téléphone", value: "+229 97 00 00 00" },
                    { icon: <Star size={16} />, label: "Avis Google", value: "4,9 / 5 — 175+ avis" },
                    { icon: <Navigation size={16} />, label: "Accès", value: "Proche carrefour Cadjehoun" },
                  ].map((info, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="text-white/50 mt-0.5 shrink-0">{info.icon}</div>
                      <div>
                        <p className="text-white/50 text-xs uppercase tracking-wider mb-0.5">{info.label}</p>
                        <p className="text-sm font-medium">{info.value}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <Link
                  href="#contact"
                  className="group relative overflow-hidden block text-center bg-white text-[#6D071A] py-3 text-sm font-bold uppercase tracking-wider"
                >
                  <span className="absolute inset-0 bg-black translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out" />
                  <span className="relative z-10 group-hover:text-white transition-colors duration-500">Prendre rendez-vous</span>
                </Link>
              </div>

              {/* Horaires */}
              <div className="border border-gray-100 p-6 mt-0 divide-y divide-gray-50">
                {[
                  { day: "Lundi – Vendredi", hours: "08h00 – 20h00" },
                  { day: "Samedi", hours: "09h00 – 18h00" },
                  { day: "Dimanche", hours: "Sur rendez-vous" },
                ].map((h, i) => (
                  <div key={i} className="flex justify-between items-center py-2.5 text-sm">
                    <span className="text-gray-600">{h.day}</span>
                    <span className="font-semibold text-gray-900">{h.hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── GEO SEO 2 — Zones desservies ─────────────────────────────────── */}
      <section className="py-20 bg-[#fafafa]" ref={geoRef2.ref}>
        <div className="max-w-6xl mx-auto px-6">
          <div
            className={`text-center mb-12 transition-all duration-700 ${
              geoRef2.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-[#6D071A] text-xs font-semibold uppercase tracking-[0.2em] mb-3">
              Accessibilité
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nous accueillons nos clients de tout Cotonou et du Bénin
            </h2>
            <p className="text-gray-500 text-sm max-w-xl mx-auto">
              Academy Beauty Gate se trouve à Cadjehoun, au cœur de Cotonou — facilement accessible depuis tous les quartiers de la ville et les villes voisines.
            </p>
          </div>

          {/* Quartiers Cotonou */}
          <div
            className={`mb-10 transition-all duration-700 delay-100 ${
              geoRef2.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4 text-center">
              Quartiers de Cotonou
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {[
                "Cadjehoun", "Akpakpa", "Fidjrossè", "Ganhi", "Gbegamey",
                "Jéricho", "Agla", "Sainte-Rita", "Haie-Vive", "Mènontin",
                "Zogbo", "Kouhounou", "Vèdoko", "Dantokpa", "Placodji",
              ].map((q, i) => (
                <span
                  key={i}
                  className={`px-3 py-1.5 bg-white border border-gray-200 text-gray-600 text-xs font-medium hover:border-[#6D071A]/40 hover:text-[#6D071A] transition-all duration-300 cursor-default ${
                    geoRef2.inView ? "opacity-100 scale-100" : "opacity-0 scale-95"
                  }`}
                  style={{ transitionDelay: `${0.15 + i * 0.03}s` }}
                >
                  {q}
                </span>
              ))}
            </div>
          </div>

          {/* Villes du Bénin */}
          <div
            className={`transition-all duration-700 delay-300 ${
              geoRef2.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4 text-center">
              Villes du Bénin
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {[
                "Godomey", "Abomey-Calavi", "Porto-Novo", "Ouidah", "Bohicon",
                "Parakou", "Natitingou", "Lokossa", "Kandi",
              ].map((v, i) => (
                <span
                  key={i}
                  className={`px-3 py-1.5 bg-white border border-gray-200 text-gray-600 text-xs font-medium hover:border-[#6D071A]/40 hover:text-[#6D071A] transition-all duration-300 cursor-default ${
                    geoRef2.inView ? "opacity-100 scale-100" : "opacity-0 scale-95"
                  }`}
                  style={{ transitionDelay: `${0.4 + i * 0.04}s` }}
                >
                  {v}
                </span>
              ))}
            </div>
          </div>

          {/* Bandeau de confiance */}
          <div
            className={`mt-14 grid grid-cols-2 md:grid-cols-4 gap-px bg-gray-200 border border-gray-200 overflow-hidden transition-all duration-700 delay-500 ${
              geoRef2.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {[
              { value: "Cotonou", label: "Ville d'implantation" },
              { value: "Cadjehoun", label: "Quartier" },
              { value: "Bénin", label: "Pays" },
              { value: "Afrique de l'Ouest", label: "Région" },
            ].map((item, i) => (
              <div key={i} className="bg-white px-6 py-5 text-center">
                <p className="font-bold text-gray-900 text-base mb-1">{item.value}</p>
                <p className="text-gray-400 text-xs uppercase tracking-wider">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ASSOCIÉS ────────────────────────────────────────────── */}
      <section className="py-20 bg-white" ref={relatedRef.ref}>
        <div className="max-w-6xl mx-auto px-6">
          <div className={`mb-10 transition-all duration-700 ${relatedRef.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
            <p className="text-[#6D071A] text-xs font-semibold uppercase tracking-[0.2em] mb-3">
              Nos autres prestations
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Ces services pourraient aussi vous intéresser
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {relatedServices.map((related, i) => (
              <Link
                key={related.slug}
                href={`/soins/${related.slug}`}
                className={`group border border-[#eee] hover:border-[#6D071A]/30 bg-white hover:shadow-md transition-all duration-300 flex flex-col ${
                  relatedRef.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: `${i * 80}ms`, transitionProperty: "opacity, transform" }}
              >
                {/* Image ou fond dégradé */}
                <div className="relative h-[160px] overflow-hidden bg-gradient-to-br from-[#1a0005] via-[#2d000f] to-[#0d0d0d] shrink-0">
                  {(related.hero.image || CATEGORY_FALLBACK[related.category]) && (
                    <Image
                      src={related.hero.image ?? CATEGORY_FALLBACK[related.category]!}
                      alt={related.hero.imageAlt}
                      fill
                      className="object-cover opacity-70 transition-transform duration-[1400ms] ease-in-out group-hover:scale-[1.06]"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <span className="absolute bottom-3 left-3 text-[10px] font-bold uppercase tracking-[2px] text-white/70 bg-[#6D071A]/80 px-2 py-1">
                    {related.hero.eyebrow}
                  </span>
                </div>

                {/* Texte */}
                <div className="p-4 flex flex-col flex-1">
                  <h3 className="text-[14px] font-bold text-black leading-[1.3] mb-2 group-hover:text-[#6D071A] transition-colors">
                    {related.title.split(" — ")[0]}
                  </h3>
                  <p className="text-[12px] text-[#777] leading-[18px] flex-1 line-clamp-2">
                    {related.hero.subheadline}
                  </p>
                  <div className="mt-3 flex items-center gap-1 text-[11px] font-bold text-[#6D071A] uppercase tracking-wide">
                    En savoir plus
                    <span className="transition-transform group-hover:translate-x-1 inline-block">→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ────────────────────────────────────────────────────── */}
      <section className="py-20 bg-[#6D071A] overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2
            className="text-3xl md:text-4xl font-bold text-white mb-4"
            style={{ animation: "fade-up 0.7s 0.1s cubic-bezier(0.22,1,0.36,1) both" }}
          >
            {service.cta.headline}
          </h2>
          <p
            className="text-white/80 text-lg mb-8"
            style={{ animation: "fade-up 0.7s 0.25s cubic-bezier(0.22,1,0.36,1) both" }}
          >
            {service.cta.description}
          </p>
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            style={{ animation: "fade-up 0.7s 0.4s cubic-bezier(0.22,1,0.36,1) both" }}
          >
            <Link
              href="#contact"
              className="group relative overflow-hidden inline-block bg-white text-[#6D071A] px-8 py-3 text-sm font-bold uppercase tracking-wider"
            >
              <span className="absolute inset-0 bg-black translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out" />
              <span className="relative z-10 group-hover:text-white transition-colors duration-500">Prendre rendez-vous</span>
            </Link>
            <a
              href="tel:+22997000000"
              className="inline-flex items-center gap-2 border border-white/60 text-white px-8 py-3 text-sm font-semibold uppercase tracking-wider hover:bg-white/10 transition-colors"
            >
              <Phone size={16} />
              Nous appeler
            </a>
          </div>
          <div className="flex items-center justify-center gap-2 mt-8 text-white/60 text-sm">
            <MapPin size={14} />
            <span>Cadjehoun, Cotonou, Bénin — Academy Beauty Gate</span>
          </div>
        </div>
      </section>
    </main>
  );
}
