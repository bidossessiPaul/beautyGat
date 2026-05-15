"use client";

import Link from "next/link";
import Image from "next/image";

const SERVICES = [
  "Soins du visage",
  "Hydrafacial",
  "Peeling",
  "Photomodulation LED",
  "Anti-âge",
  "Massages & bien-être",
  "Onglerie & nail art",
  "Amincissement",
  "Électrolyse",
];

const LIENS = [
  { label: "Accueil", href: "/" },
  { label: "Nos soins", href: "/#services" },
  { label: "Nos tarifs", href: "/tarifs" },
  { label: "À propos", href: "/a-propos" },
  { label: "Avis clients", href: "/#avis" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/contact" },
  { label: "Mentions légales", href: "/mentions-legales" },
];

export function Footer() {
  return (
    <footer className="bg-black text-white">

      {/* Corps principal */}
      <div className="max-w-[1300px] mx-auto px-6 md:px-10 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* Col 1 — Marque */}
        <div className="lg:col-span-1">
          <Image
            src="/beautygate-logo-sans-bg.png"
            alt="Academy Beauty Gate"
            width={160}
            height={80}
            className="mb-6 brightness-0 invert"
          />
          <p className="text-[13px] text-white/60 leading-[22px] mb-6">
            Espace de bien-être, de beauté et de formation de référence à Cotonou. Soins esthétiques avancés et bien-être au cœur de Cadjehoun, Bénin.
          </p>
          <div className="flex gap-3">
            <Link
              href="https://www.instagram.com/beaut.ygateofficiel/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#6D071A] hover:border-[#6D071A] transition-all"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
              </svg>
            </Link>
            <Link
              href="https://wa.me/2290168411111"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#25D366] hover:border-[#25D366] transition-all"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.126.553 4.122 1.523 5.854L.057 23.215a.75.75 0 0 0 .921.921l5.424-1.461A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.907 0-3.693-.504-5.23-1.385l-.374-.214-3.878 1.044 1.057-3.77-.232-.389A9.96 9.96 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
              </svg>
            </Link>
            <Link
              href="mailto:beautygate055@gmail.com"
              className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#6D071A] hover:border-[#6D071A] transition-all"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-4 h-4">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
            </Link>
          </div>
        </div>

        {/* Col 2 — Nos soins */}
        <div>
          <h4 className="text-[12px] font-bold uppercase tracking-[2px] text-white mb-5">Nos soins</h4>
          <ul className="space-y-2.5">
            {SERVICES.map((s) => (
              <li key={s}>
                <Link href="#services" className="text-[13px] text-white/60 hover:text-white transition-colors">
                  {s}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3 — Liens */}
        <div>
          <h4 className="text-[12px] font-bold uppercase tracking-[2px] text-white mb-5">Navigation</h4>
          <ul className="space-y-2.5">
            {LIENS.map((l) => (
              <li key={l.label}>
                <Link href={l.href} className="text-[13px] text-white/60 hover:text-white transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 4 — Contact */}
        <div>
          <h4 className="text-[12px] font-bold uppercase tracking-[2px] text-white mb-5">Contact</h4>
          <ul className="space-y-4">
            <li className="flex gap-3">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-4 h-4 shrink-0 mt-0.5 text-[#6D071A]">
                <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              <span className="text-[13px] text-white/60 leading-[20px]">Cadjehoun, Cotonou<br />Bénin</span>
            </li>
            <li className="flex gap-3">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-4 h-4 shrink-0 mt-0.5 text-[#6D071A]">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16.92z"/>
              </svg>
              <Link href="tel:+2290168411111" className="text-[13px] text-white/60 hover:text-white transition-colors">
                +229 01 68 41 11 11
              </Link>
            </li>
            <li className="flex gap-3">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-4 h-4 shrink-0 mt-0.5 text-[#6D071A]">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              <Link href="mailto:beautygate055@gmail.com" className="text-[13px] text-white/60 hover:text-white transition-colors break-all">
                beautygate055@gmail.com
              </Link>
            </li>
            <li className="flex gap-3">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-4 h-4 shrink-0 mt-0.5 text-[#6D071A]">
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12 6 12 12 16 14"/>
              </svg>
              <span className="text-[13px] text-white/60 leading-[20px]">Lun – Sam : 9h – 19h<br />Dimanche : sur RDV</span>
            </li>
          </ul>

          <Link
            href="#contact"
            className="group relative overflow-hidden inline-block mt-8 bg-[#6D071A] text-white text-[12px] font-semibold uppercase tracking-widest px-6 py-3.5 rounded-[3px]"
          >
            <span className="absolute inset-0 bg-white translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out" />
            <span className="relative z-10 group-hover:text-[#6D071A] transition-colors duration-500">
              Prendre rendez-vous
            </span>
          </Link>
        </div>

      </div>

      {/* Barre de bas */}
      <div className="border-t border-white/10">
        <div className="max-w-[1300px] mx-auto px-6 md:px-10 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-[12px] text-white/40">
            © {new Date().getFullYear()} Academy Beauty Gate — Tous droits réservés
          </p>
          <p className="text-[12px] text-white/40">
            Cadjehoun, Cotonou, Bénin
          </p>
        </div>
      </div>

    </footer>
  );
}
