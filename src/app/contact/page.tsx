"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingContact } from "@/components/FloatingContact";

function useInView(threshold = 0.1) {
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

const SERVICES_OPTIONS = [
  "Épilation laser",
  "Épilation par électrolyse",
  "Hydrafacial",
  "Peeling visage",
  "Baby Face LaseMD",
  "Microneedling",
  "Photomodulation LED",
  "Carbon Laser Peel",
  "Instant Glow",
  "Bleaching",
  "Peeling intime",
  "Cryolipolyse",
  "BodySculpt",
  "Détatouage laser",
  "Acide hyaluronique",
  "Toxine botulique",
  "Diagnostic de peau",
  "Autre",
];

const INFO_CARDS = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5">
        <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    label: "Adresse",
    content: "Cadjehoun, Cotonou, Bénin",
    link: "https://maps.google.com/?q=995X+6Q+Cotonou",
    linkLabel: "Voir sur Google Maps →",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16.92z"/>
      </svg>
    ),
    label: "Téléphone",
    content: "+229 97 88 58 87",
    link: "tel:+22997885887",
    linkLabel: "Appeler →",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.126.553 4.122 1.523 5.854L.057 23.215a.75.75 0 0 0 .921.921l5.424-1.461A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
      </svg>
    ),
    label: "WhatsApp",
    content: "+229 97 88 58 87",
    link: "https://wa.me/22997885887",
    linkLabel: "Envoyer un message →",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    label: "Horaires",
    content: "Lun – Sam : 9h – 19h\nDimanche : sur RDV",
    link: null,
    linkLabel: null,
  },
];

export default function ContactPage() {
  const heroRef  = useInView(0.1);
  const formRef  = useInView(0.1);
  const infoRef  = useInView(0.1);

  return (
    <>
      <Header />
      <main>

        {/* ── HERO ── */}
        <section className="relative bg-black pt-[90px] overflow-hidden">
          <div
            className="absolute inset-0 opacity-25"
            style={{
              backgroundImage: "url('/beautygate/about-photo.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/90" />
          <div
            ref={heroRef.ref}
            className={`relative z-10 max-w-[1300px] mx-auto px-6 md:px-10 py-20 md:py-28 text-center transition-all duration-700 ease-out ${
              heroRef.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-[#f0b8b8] text-xs font-bold uppercase tracking-[0.25em] mb-4">
              Academy Beauty Gate — Cadjehoun, Cotonou
            </p>
            <h1 className="text-white text-[38px] md:text-[58px] font-bold leading-[1.1] mb-5">
              Contactez-nous
            </h1>
            <p className="text-white/70 text-[15px] md:text-[17px] leading-[28px] max-w-[560px] mx-auto">
              Prenez rendez-vous, posez vos questions ou demandez un devis. Notre équipe vous répond rapidement.
            </p>
          </div>
        </section>

        {/* ── CARTES INFO ── */}
        <section className="bg-[#f8f8f8] border-b border-[#eee]">
          <div
            ref={infoRef.ref}
            className="max-w-[1300px] mx-auto px-6 md:px-10 py-10 grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {INFO_CARDS.map((card, i) => (
              <div
                key={card.label}
                className={`bg-white border border-[#eee] rounded-[3px] p-5 transition-all duration-700 ease-out ${
                  infoRef.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="text-[#6D071A] mb-3">{card.icon}</div>
                <p className="text-[11px] font-bold uppercase tracking-[2px] text-[#999] mb-1">{card.label}</p>
                <p className="text-[13px] text-black leading-[20px] whitespace-pre-line mb-2">{card.content}</p>
                {card.link && (
                  <Link
                    href={card.link}
                    target={card.link.startsWith("http") ? "_blank" : undefined}
                    rel={card.link.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="text-[11px] font-bold text-[#6D071A] hover:underline"
                  >
                    {card.linkLabel}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ── FORMULAIRE + CARTE ── */}
        <section className="py-20">
          <div className="max-w-[1300px] mx-auto px-6 md:px-10">

            <div
              ref={formRef.ref}
              className="grid grid-cols-1 lg:grid-cols-2 gap-16"
            >
              {/* Formulaire */}
              <div className={`transition-all duration-700 ease-out ${
                formRef.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}>
                <p className="text-[11px] font-bold uppercase tracking-[3px] text-[#6D071A] mb-3">Formulaire</p>
                <h2 className="text-[26px] md:text-[32px] font-bold text-black mb-8">
                  Prendre rendez-vous
                </h2>
                <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Prénom *"
                      required
                      className="w-full border-b border-[#ccc] py-3 text-[14px] bg-transparent outline-none focus:border-black transition-colors"
                    />
                    <input
                      type="text"
                      placeholder="Nom *"
                      required
                      className="w-full border-b border-[#ccc] py-3 text-[14px] bg-transparent outline-none focus:border-black transition-colors"
                    />
                  </div>
                  <input
                    type="email"
                    placeholder="E-mail *"
                    required
                    className="w-full border-b border-[#ccc] py-3 text-[14px] bg-transparent outline-none focus:border-black transition-colors"
                  />
                  <input
                    type="tel"
                    placeholder="Téléphone *"
                    required
                    className="w-full border-b border-[#ccc] py-3 text-[14px] bg-transparent outline-none focus:border-black transition-colors"
                  />
                  <select
                    className="w-full border-b border-[#ccc] py-3 text-[14px] bg-transparent outline-none focus:border-black transition-colors text-gray-500"
                    defaultValue=""
                  >
                    <option value="" disabled>Soin souhaité</option>
                    {SERVICES_OPTIONS.map((s) => (
                      <option key={s}>{s}</option>
                    ))}
                  </select>
                  <textarea
                    placeholder="Votre message (facultatif)"
                    rows={4}
                    className="w-full border-b border-[#ccc] py-3 text-[14px] bg-transparent outline-none focus:border-black transition-colors resize-none"
                  />
                  <p className="text-[11px] leading-[16px] text-gray-400 pt-2">
                    En soumettant ce formulaire, j&apos;accepte que les informations saisies soient exploitées dans le cadre de la demande de rappel et de la relation commerciale qui peut en découler.
                  </p>
                  <button
                    type="submit"
                    className="group relative overflow-hidden bg-[#6D071A] text-white text-[12px] font-bold uppercase tracking-widest rounded-[3px] px-8 py-4 w-full mt-2"
                  >
                    <span className="absolute inset-0 bg-black translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out" />
                    <span className="relative z-10">Envoyer ma demande</span>
                  </button>
                </form>

                {/* WhatsApp direct */}
                <div className="mt-8 pt-8 border-t border-[#eee]">
                  <p className="text-[13px] text-[#888] mb-4">Préférez-vous nous écrire directement ?</p>
                  <Link
                    href="https://wa.me/22997885887"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative overflow-hidden inline-flex items-center gap-3 bg-[#25D366] text-white text-[12px] font-bold uppercase tracking-widest rounded-[3px] px-6 py-3.5"
                  >
                    <span className="absolute inset-0 bg-black translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out" />
                    <svg viewBox="0 0 24 24" fill="currentColor" className="relative z-10 w-4 h-4 shrink-0">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.126.553 4.122 1.523 5.854L.057 23.215a.75.75 0 0 0 .921.921l5.424-1.461A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
                    </svg>
                    <span className="relative z-10">WhatsApp : +229 97 88 58 87</span>
                  </Link>
                </div>
              </div>

              {/* Carte + infos */}
              <div className={`transition-all duration-700 ease-out delay-200 ${
                formRef.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}>
                <p className="text-[11px] font-bold uppercase tracking-[3px] text-[#6D071A] mb-3">Localisation</p>
                <h2 className="text-[26px] md:text-[32px] font-bold text-black mb-8">
                  Où nous trouver
                </h2>

                {/* Carte Google */}
                <div className="w-full rounded-[3px] overflow-hidden border border-[#eee] mb-6" style={{ height: "340px" }}>
                  <iframe
                    src="https://maps.google.com/maps?q=995X%2B6Q+Cotonou&output=embed&z=16"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>

                <Link
                  href="https://maps.google.com/?q=995X+6Q+Cotonou"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-[12px] text-[#6D071A] font-bold hover:underline mb-8"
                >
                  Ouvrir dans Google Maps →
                </Link>

                {/* Infos pratiques */}
                <div className="bg-[#f8f8f8] border border-[#eee] rounded-[3px] p-6 space-y-4">
                  <h3 className="text-[14px] font-bold uppercase tracking-[1.5px] text-black">Infos pratiques</h3>
                  <div className="space-y-3 text-[13px] text-[#555]">
                    <p><strong className="text-black">Horaires :</strong> Lun – Sam 9h–19h / Dimanche sur RDV</p>
                    <p><strong className="text-black">Adresse :</strong> Cadjehoun, Cotonou, Bénin</p>
                    <p><strong className="text-black">Tél :</strong>{" "}
                      <Link href="tel:+22997885887" className="text-[#6D071A] hover:underline">+229 97 88 58 87</Link>
                    </p>
                    <p><strong className="text-black">Email :</strong>{" "}
                      <Link href="mailto:beautygate055@gmail.com" className="text-[#6D071A] hover:underline">beautygate055@gmail.com</Link>
                    </p>
                    <p><strong className="text-black">Instagram :</strong>{" "}
                      <Link
                        href="https://www.instagram.com/beaut.ygateofficiel/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#6D071A] hover:underline"
                      >
                        @beaut.ygateofficiel
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
      <FloatingContact />
    </>
  );
}
