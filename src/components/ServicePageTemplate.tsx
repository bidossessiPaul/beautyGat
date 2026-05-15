"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef } from "react";
import { MapPin, Phone, ChevronDown, CheckCircle2, Star, Navigation, Sparkles } from "lucide-react";
import { ServiceData, getRelatedServices } from "@/data/services";

const HERO_FALLBACK: Partial<Record<ServiceData["category"], string>> = {
  visage:           "/images/soins/hydrafacial/hero.jpg",
  corps:            "/images/soins/bodysculpt/hero.png",
  "epilation-cire": "/images/dsc00744-1-scaled.jpg",
  injections:       "/images/soins/injection-hyaluronique/hero.jpg",
  diagnostic:       "/images/soins/diagnostic-peau/hero.jpg",
  "mains-pieds":    "/images/appart-beaute-3873920.jpg",
  massages:         "/images/Appart-beaute-accueil-philosophie-1-scaled.jpg",
  "duo-enfants":    "/images/dsc01280.jpg",
  privatisation:    "/images/dsc01308-scaled.jpg",
};

const INTRO_FALLBACK: Partial<Record<ServiceData["category"], string>> = {
  visage:           "/images/soins/microneedling/hero.jpg",
  corps:            "/images/soins/bodysculpt/intro.jpg",
  "epilation-cire": "/images/soins/epilation-laser-homme/intro.jpg",
  injections:       "/images/soins/injection-botulique/intro.jpg",
  diagnostic:       "/images/soins/diagnostic-peau/intro.jpg",
  "mains-pieds":    "/images/appart-beaute-3873926.jpg",
  massages:         "/images/appart-beaute-3873920.jpg",
  "duo-enfants":    "/images/dsc01308-scaled.jpg",
  privatisation:    "/images/dsc01280.jpg",
};

const STEPS_FALLBACK: Record<string, { title: string; description: string }[]> = {
  visage: [
    { title: "Consultation & diagnostic", description: "Analyse de votre type de peau, de vos problématiques et définition du protocole personnalisé." },
    { title: "Nettoyage & préparation", description: "Démaquillage, nettoyage en profondeur et préparation de la peau pour optimiser la pénétration des actifs." },
    { title: "Application du soin", description: "Réalisation du protocole complet avec les technologies et produits adaptés à votre type de peau." },
    { title: "Hydratation & conseils", description: "Soin de finition, protection solaire et recommandations personnalisées pour prolonger les résultats chez vous." },
  ],
  corps: [
    { title: "Consultation personnalisée", description: "Évaluation de vos besoins, de votre silhouette et définition des zones à traiter." },
    { title: "Préparation de la zone", description: "Nettoyage, gommage et préparation cutanée de la zone ciblée pour optimiser les résultats." },
    { title: "Application du traitement", description: "Réalisation du soin avec les équipements et techniques les mieux adaptés à votre morphologie." },
    { title: "Soins post-traitement", description: "Application de soins hydratants, massage de finition et recommandations pour entretenir les résultats." },
  ],
  epilation: [
    { title: "Consultation & bilan", description: "Analyse de votre phototype, des zones à traiter et choix du protocole d'épilation le plus adapté." },
    { title: "Préparation de la zone", description: "Nettoyage soigneux et préparation cutanée pour garantir efficacité et confort pendant la séance." },
    { title: "Épilation", description: "Application de la technique choisie selon les zones à traiter." },
    { title: "Apaisement & conseils", description: "Application de produits apaisants et conseils post-épilation pour prévenir les poils incarnés." },
  ],
  massages: [
    { title: "Accueil & consultation", description: "Identification de vos zones de tension, de vos préférences et définition du protocole de massage." },
    { title: "Préparation", description: "Installation confortable sur la table de massage, préparation des huiles essentielles et chauffage de la pièce." },
    { title: "Massage", description: "Réalisation du soin selon la technique choisie." },
    { title: "Relaxation & recommandations", description: "Temps de récupération, hydratation et conseils pour prolonger les effets du massage au quotidien." },
  ],
};

const FOR_WHO_FALLBACK: Record<string, string[]> = {
  visage: ["Peaux sèches et déshydratées", "Peaux grasses et à tendance acnéique", "Peaux mates avec irrégularités de teint", "Peaux sensibles et réactives", "Femmes et hommes dès 18 ans"],
  corps: ["Femmes souhaitant affiner leur silhouette", "Peaux relâchées après une perte de poids", "Personnes souffrant de tensions musculaires", "Hommes et femmes à partir de 20 ans"],
  epilation: ["Tous phototypes de peau", "Femmes et hommes", "Peaux sensibles et zones intimes", "Personnes recherchant une épilation efficace"],
  massages: ["Personnes stressées ou souffrant de tensions", "Douleurs musculaires chroniques ou passagères", "Besoin de déconnexion et de détente profonde", "Hommes et femmes à tout âge"],
};

interface Props {
  service: ServiceData;
}

function useInView(_threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  // Toujours visible — on garde ref pour compatibilité des sections
  return { ref, inView: true };
}

export function ServicePageTemplate({ service }: Props) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const introRef    = useInView(0.2);
  const pourQuiRef  = useInView(0.1);
  const stepsRef    = useInView(0.1);
  const boostersRef = useInView(0.1);
  const benefitsRef = useInView(0.1);
  const pricingRef  = useInView(0.1);
  const faqRef      = useInView(0.1);
  const geoRef1     = useInView(0.1);
  const geoRef2     = useInView(0.1);
  const relatedRef  = useInView(0.08);

  const relatedServices = getRelatedServices(service, 4);

  const heroImg     = service.hero.image  ?? HERO_FALLBACK[service.category];
  const introImg    = service.intro.image ?? INTRO_FALLBACK[service.category];
  const pourQuiImg  = service.forWho?.image ?? INTRO_FALLBACK[service.category] ?? heroImg;
  const stepsImg    = service.stepsImage   ?? heroImg;
  const benefitsImg = service.benefitsImage ?? INTRO_FALLBACK[service.category] ?? heroImg;

  // nom court du service pour les titres de section
  const sName = service.name ?? service.hero.eyebrow;

  const steps = service.steps ?? STEPS_FALLBACK[service.category] ?? [];

  return (
    <main>

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative h-[500px] md:h-[580px] overflow-hidden">
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
                href={`/rendez-vous?service=${service.slug}`}
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
                className="flex items-center gap-2 text-white"
                style={{ animation: `fade-up 0.5s ${0.1 + i * 0.12}s cubic-bezier(0.22,1,0.36,1) both` }}
              >
                <span className="text-white/60 text-xs">{badge.icon}</span>
                <span className="text-sm font-medium">{badge.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── QU'EST-CE QUE [soin] ? ───────────────────────────────────────── */}
      <section className="py-20 bg-white" ref={introRef.ref}>
        <div className="max-w-6xl mx-auto px-6">
          <div className={`grid ${introImg ? "md:grid-cols-2" : "grid-cols-1 max-w-3xl mx-auto"} gap-12 items-center`}>

            {introImg && (
              <div className="relative aspect-square overflow-hidden group">
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
                <div
                  className={`absolute inset-0 bg-[#6D071A] origin-left transition-transform duration-700 ${
                    introRef.inView ? "scale-x-0" : "scale-x-100"
                  }`}
                  style={{ transitionTimingFunction: "cubic-bezier(0.77, 0, 0.18, 1)" }}
                />
              </div>
            )}

            <div
              className={`transition-all duration-700 delay-300 ${
                introRef.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <p className="text-[#6D071A] text-xs font-semibold uppercase tracking-[0.2em] mb-3">
                Le soin
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-6">
                Qu&apos;est-ce que {sName} ?
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
                  href={`/rendez-vous?service=${service.slug}`}
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

      {/* ── [soin], POUR QUI ? — image droite, texte gauche ─────────────── */}
      <section className="py-20 bg-[#fafafa]" ref={pourQuiRef.ref}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* Texte */}
            <div
              className={`transition-all duration-700 ${
                pourQuiRef.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <p className="text-[#6D071A] text-xs font-semibold uppercase tracking-[0.2em] mb-3">
                Indications
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-6">
                {sName}, pour qui ?
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                Ce soin s&apos;adresse à toutes celles et ceux qui souhaitent prendre soin d&apos;eux avec des protocoles professionnels.
                À Academy Beauty Gate, chaque traitement est personnalisé selon votre profil et vos objectifs.
              </p>
              <ul className="space-y-3 mb-8">
                {(service.forWho?.targets ?? FOR_WHO_FALLBACK[service.category] ?? []).map((target, i) => (
                  <li
                    key={i}
                    className={`flex items-center gap-3 transition-all duration-500 ${
                      pourQuiRef.inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
                    }`}
                    style={{ transitionDelay: `${i * 0.08}s` }}
                  >
                    <span className="w-6 h-6 rounded-full bg-[#6D071A]/10 flex items-center justify-center shrink-0">
                      <CheckCircle2 size={14} className="text-[#6D071A]" />
                    </span>
                    <span className="text-gray-700 text-sm">{target}</span>
                  </li>
                ))}
              </ul>
              <Link
                href={`/rendez-vous?service=${service.slug}`}
                className="group relative overflow-hidden inline-block bg-[#6D071A] text-white px-6 py-3 text-sm font-semibold uppercase tracking-wider"
              >
                <span className="absolute inset-0 bg-white translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out" />
                <span className="relative z-10 group-hover:text-[#6D071A] transition-colors duration-500">Prendre rendez-vous</span>
              </Link>
            </div>

            {/* Image */}
            {pourQuiImg && (
              <div
                className={`relative aspect-[4/5] overflow-hidden group transition-all duration-700 delay-200 ${
                  pourQuiRef.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <Image
                  src={pourQuiImg}
                  alt={service.forWho?.imageAlt ?? `${sName} — pour qui ?`}
                  fill
                  className="object-cover group-hover:scale-[1.04] transition-transform duration-[1400ms] ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── DIAGNOSTIC CTA BANNER ─────────────────────────────────────────── */}
      <section className="relative bg-[#1C1C1C] py-24 overflow-hidden">
        {/* Fond décoratif */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-[#6D071A]/10 blur-[120px] -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-[#6D071A]/8 blur-[100px] translate-x-1/3 translate-y-1/3" />
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 40px, white 40px, white 41px), repeating-linear-gradient(90deg, transparent, transparent 40px, white 40px, white 41px)" }} />
        </div>

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-[#6D071A]/60" />
            <p className="text-[10px] uppercase tracking-[0.4em] text-white/40 font-semibold">
              Academy Beauty Gate
            </p>
            <div className="h-px w-12 bg-[#6D071A]/60" />
          </div>

          <div className="w-14 h-14 rounded-full bg-[#6D071A]/20 border border-[#6D071A]/50 flex items-center justify-center mx-auto mb-8">
            <Sparkles className="text-[#f0b8b8]" size={22} />
          </div>

          <h3 className="text-white font-bold text-3xl md:text-4xl leading-tight mb-4">
            Faites réaliser votre diagnostic<br className="hidden md:block" /> personnalisé par l&apos;un de nos praticiens
          </h3>
          <p className="text-white/50 text-base max-w-lg mx-auto mb-10 leading-relaxed">
            Chaque peau est unique — votre protocole doit l&apos;être aussi. Consultation offerte, sans engagement.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href={`/rendez-vous?service=${service.slug}`}
              className="group relative overflow-hidden inline-block bg-[#6D071A] text-white px-10 py-4 text-[11px] font-bold uppercase tracking-[0.25em]"
            >
              <span className="absolute inset-0 bg-white translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out" />
              <span className="relative z-10 group-hover:text-[#6D071A] transition-colors duration-500">
                Prendre rendez-vous
              </span>
            </Link>
            <a
              href="tel:+2290168411111"
              className="inline-flex items-center gap-2 border border-white/20 text-white/70 px-10 py-4 text-[11px] font-semibold uppercase tracking-[0.2em] hover:border-white/50 hover:text-white transition-all duration-300"
            >
              <Phone size={14} />
              +229 01 68 41 11 11
            </a>
          </div>
        </div>
      </section>

      {/* ── LES [N] ÉTAPES DU SOIN [soin] — image gauche, étapes droite ── */}
      <section className="py-20 bg-white" ref={stepsRef.ref}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* Image */}
            {stepsImg && (
              <div
                className={`relative aspect-[4/5] overflow-hidden group transition-all duration-700 ${
                  stepsRef.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <Image
                  src={stepsImg}
                  alt={service.stepsImageAlt ?? `Étapes du soin ${sName}`}
                  fill
                  className="object-cover group-hover:scale-[1.04] transition-transform duration-[1400ms] ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            )}

            {/* Étapes */}
            <div
              className={`transition-all duration-700 delay-200 ${
                stepsRef.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <p className="text-[#6D071A] text-xs font-semibold uppercase tracking-[0.2em] mb-3">
                Protocole
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Les {steps.length} étapes du soin {sName}
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-8">
                Chaque séance suit un protocole rigoureux, adapté à votre type de peau et à vos objectifs.
              </p>
              <div className="space-y-6">
                {steps.map((step, i) => (
                  <div
                    key={i}
                    className={`flex gap-5 items-start transition-all duration-500 ${
                      stepsRef.inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
                    }`}
                    style={{ transitionDelay: `${0.3 + i * 0.1}s` }}
                  >
                    <div className="w-10 h-10 rounded-full border-2 border-[#6D071A] flex items-center justify-center shrink-0 bg-white">
                      <span className="text-[#6D071A] font-bold text-sm">{String(i + 1).padStart(2, "0")}</span>
                    </div>
                    <div className="pt-1">
                      <h3 className="font-bold text-gray-900 mb-1">{step.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── LES BOOSTERS [soin] — boosters gauche, image droite ─────────── */}
      {service.boosters && service.boosters.length > 0 && (
        <section className="py-20 bg-[#fafafa]" ref={boostersRef.ref}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">

              {/* Boosters */}
              <div
                className={`transition-all duration-700 ${
                  boostersRef.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <p className="text-[#6D071A] text-xs font-semibold uppercase tracking-[0.2em] mb-3">
                  Options & compléments
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Les boosters {sName}
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed mb-8">
                  Personnalisez votre séance avec nos boosters pour des résultats encore plus ciblés.
                </p>
                <div className="space-y-4">
                  {service.boosters.map((booster, i) => (
                    <div
                      key={i}
                      className={`bg-white border border-gray-100 p-5 hover:border-[#6D071A]/30 hover:shadow-sm transition-all duration-300 group flex gap-4 items-start ${
                        boostersRef.inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
                      }`}
                      style={{ transitionDelay: `${i * 0.1}s` }}
                    >
                      <Sparkles className="text-[#6D071A] shrink-0 mt-0.5" size={18} />
                      <div>
                        <h3 className="font-bold text-gray-900 group-hover:text-[#6D071A] transition-colors mb-1">
                          {booster.title}
                        </h3>
                        <p className="text-gray-500 text-sm leading-relaxed">{booster.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Image */}
              {benefitsImg && (
                <div
                  className={`relative aspect-[4/5] overflow-hidden group transition-all duration-700 delay-200 ${
                    boostersRef.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                >
                  <Image
                    src={benefitsImg}
                    alt={`Boosters ${sName}`}
                    fill
                    className="object-cover group-hover:scale-[1.04] transition-transform duration-[1400ms] ease-in-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* ── QUELS SONT LES RÉSULTATS D'UN SOIN [soin] ? — image droite ─── */}
      <section className="py-20 bg-white" ref={benefitsRef.ref}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* Résultats */}
            <div
              className={`transition-all duration-700 ${
                benefitsRef.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <p className="text-[#6D071A] text-xs font-semibold uppercase tracking-[0.2em] mb-3">
                Résultats
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                Quels sont les résultats d&apos;un soin {sName} ?
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.benefits.map((benefit, i) => (
                  <div
                    key={i}
                    className={`bg-[#fafafa] p-5 border border-gray-100 hover:border-[#6D071A]/30 transition-all duration-500 group ${
                      benefitsRef.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                    }`}
                    style={{ transitionDelay: `${i * 0.1}s` }}
                  >
                    <div className="w-6 h-0.5 bg-[#6D071A] mb-3 transition-all duration-300 group-hover:w-12" />
                    <h3 className="font-bold text-gray-900 mb-1.5 text-sm group-hover:text-[#6D071A] transition-colors">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Image */}
            {benefitsImg && (
              <div
                className={`relative aspect-[4/5] overflow-hidden group transition-all duration-700 delay-200 ${
                  benefitsRef.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <Image
                  src={benefitsImg}
                  alt={service.benefitsImageAlt ?? `Résultats ${sName}`}
                  fill
                  className="object-cover group-hover:scale-[1.04] transition-transform duration-[1400ms] ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── PRICING ──────────────────────────────────────────────────────── */}
      <section id="tarifs" className="py-20 bg-[#fafafa]" ref={pricingRef.ref}>
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
              Première consultation offerte — tarifs adaptés à votre projet.
            </p>
            <Link
              href={`/rendez-vous?service=${service.slug}`}
              className="group relative overflow-hidden inline-block bg-[#6D071A] text-white px-8 py-3 text-sm font-semibold uppercase tracking-wider"
            >
              <span className="absolute inset-0 bg-white translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out" />
              <span className="relative z-10 group-hover:text-[#6D071A] transition-colors duration-500">Demander un devis personnalisé</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-white" ref={faqRef.ref}>
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
              Tout ce que vous devez savoir sur {sName}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {service.faq.map((item, i) => (
              <div
                key={i}
                className={`bg-[#fafafa] border border-gray-100 overflow-hidden transition-all duration-500 ${
                  faqRef.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                <button
                  className="w-full text-left px-6 py-4 flex items-start justify-between gap-4 hover:bg-gray-100 transition-colors"
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
      <section className="py-20 bg-[#fafafa]" ref={geoRef1.ref}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div
              className={`transition-all duration-700 ${
                geoRef1.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <p className="text-[#6D071A] text-xs font-semibold uppercase tracking-[0.2em] mb-3">
                Notre expertise à Cotonou
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-6">
                Pourquoi choisir Academy Beauty Gate pour {sName} à Cotonou ?
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed text-sm">
                <p>
                  Academy Beauty Gate est l&apos;institut de référence pour {sName.toLowerCase()} à Cotonou, Bénin.
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
                  dans le strict respect des normes d&apos;hygiène et de sécurité.
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
                    { icon: <Phone size={16} />, label: "Téléphone", value: "+229 01 68 41 11 11" },
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
                  href={`/rendez-vous?service=${service.slug}`}
                  className="group relative overflow-hidden block text-center bg-white text-[#6D071A] py-3 text-sm font-bold uppercase tracking-wider"
                >
                  <span className="absolute inset-0 bg-black translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out" />
                  <span className="relative z-10 group-hover:text-white transition-colors duration-500">Prendre rendez-vous</span>
                </Link>
              </div>
              <div className="border border-gray-100 p-6 divide-y divide-gray-50">
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
      <section className="py-20 bg-white" ref={geoRef2.ref}>
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

          <div className={`mb-10 transition-all duration-700 delay-100 ${geoRef2.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4 text-center">Quartiers de Cotonou</p>
            <div className="flex flex-wrap justify-center gap-2">
              {["Cadjehoun", "Akpakpa", "Fidjrossè", "Ganhi", "Gbegamey", "Jéricho", "Agla", "Sainte-Rita", "Haie-Vive", "Mènontin", "Zogbo", "Kouhounou", "Vèdoko", "Dantokpa", "Placodji"].map((q, i) => (
                <span key={i} className={`px-3 py-1.5 bg-[#fafafa] border border-gray-200 text-gray-600 text-xs font-medium hover:border-[#6D071A]/40 hover:text-[#6D071A] transition-all duration-300 cursor-default ${geoRef2.inView ? "opacity-100 scale-100" : "opacity-0 scale-95"}`} style={{ transitionDelay: `${0.15 + i * 0.03}s` }}>{q}</span>
              ))}
            </div>
          </div>

          <div className={`transition-all duration-700 delay-300 ${geoRef2.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4 text-center">Villes du Bénin</p>
            <div className="flex flex-wrap justify-center gap-2">
              {["Godomey", "Abomey-Calavi", "Porto-Novo", "Ouidah", "Bohicon", "Parakou", "Natitingou", "Lokossa", "Kandi"].map((v, i) => (
                <span key={i} className={`px-3 py-1.5 bg-[#fafafa] border border-gray-200 text-gray-600 text-xs font-medium hover:border-[#6D071A]/40 hover:text-[#6D071A] transition-all duration-300 cursor-default ${geoRef2.inView ? "opacity-100 scale-100" : "opacity-0 scale-95"}`} style={{ transitionDelay: `${0.4 + i * 0.04}s` }}>{v}</span>
              ))}
            </div>
          </div>

          <div className={`mt-14 grid grid-cols-2 md:grid-cols-4 gap-px bg-gray-200 border border-gray-200 overflow-hidden transition-all duration-700 delay-500 ${geoRef2.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            {[{ value: "Cotonou", label: "Ville" }, { value: "Cadjehoun", label: "Quartier" }, { value: "Bénin", label: "Pays" }, { value: "Afrique de l'Ouest", label: "Région" }].map((item, i) => (
              <div key={i} className="bg-white px-6 py-5 text-center">
                <p className="font-bold text-gray-900 text-base mb-1">{item.value}</p>
                <p className="text-gray-400 text-xs uppercase tracking-wider">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ASSOCIÉS ────────────────────────────────────────────── */}
      <section className="py-20 bg-[#fafafa]" ref={relatedRef.ref}>
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
                <div className="relative h-[160px] overflow-hidden bg-gradient-to-br from-[#1a0005] via-[#2d000f] to-[#0d0d0d] shrink-0">
                  {(related.hero.image || HERO_FALLBACK[related.category]) && (
                    <Image
                      src={related.hero.image ?? HERO_FALLBACK[related.category]!}
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
                <div className="p-4 flex flex-col flex-1">
                  <h3 className="text-[14px] font-bold text-black leading-[1.3] mb-2 group-hover:text-[#6D071A] transition-colors">
                    {related.name ?? related.title.split(" — ")[0]}
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
              href={`/rendez-vous?service=${service.slug}`}
              className="group relative overflow-hidden inline-block bg-white text-[#6D071A] px-8 py-3 text-sm font-bold uppercase tracking-wider"
            >
              <span className="absolute inset-0 bg-black translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out" />
              <span className="relative z-10 group-hover:text-white transition-colors duration-500">Prendre rendez-vous</span>
            </Link>
            <a
              href="tel:+2290168411111"
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
