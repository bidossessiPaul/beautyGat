"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { PhoneIcon, ChevronDownIcon } from "@/components/icons";
import { CartIcon } from "@/components/shop/CartIcon";

const MEGA_MENU = [
  {
    title: "✨ Visage & Peelings",
    links: [
      { label: "Hydrafacial®", href: "/soins/hydrafacial-cotonou" },
      { label: "BB Glow", href: "/soins/bb-glow-visage-cotonou" },
      { label: "Microneedling visage", href: "/soins/microneedling-cotonou" },
      { label: "Peeling anti-taches", href: "/soins/peeling-visage-cotonou" },
      { label: "Anti-âge régénérant", href: "/soins/soin-anti-age-regenerant-visage-cotonou" },
      { label: "Dermaplaning", href: "/soins/dermaplaning-visage-cotonou" },
      { label: "Carbon Laser Peel", href: "/soins/carbon-laser-peel-cotonou" },
      { label: "Photomodulation LED", href: "/soins/photomodulation-led-cotonou" },
    ],
  },
  {
    title: "🌿 Corps & Massages",
    links: [
      { label: "Massage relaxant corps entier", href: "/soins/massage-relaxant-corps-entier-cotonou" },
      { label: "Massage aux pierres chaudes", href: "/soins/massage-pierres-chaudes-cotonou" },
      { label: "Massage signature L.A Beauty", href: "/soins/massage-signature-cotonou" },
      { label: "Massage dos & nuque", href: "/soins/massage-dos-nuque-cotonou" },
      { label: "Cryolipolyse", href: "/soins/cryolipolyse-cotonou" },
      { label: "Gommage corps", href: "/soins/gommage-corps-cotonou" },
      { label: "Gommage & enveloppement", href: "/soins/gommage-enveloppement-cotonou" },
    ],
  },
  {
    title: "💅 Mains, Pieds & Nail Art",
    links: [
      { label: "Manucure semi-permanent", href: "/soins/manucure-semi-permanent-cotonou" },
      { label: "Gel sur ongles naturels", href: "/soins/gel-ongles-naturels-cotonou" },
      { label: "Capsules & résine", href: "/soins/capsules-gel-resine-cotonou" },
      { label: "Nail art", href: "/soins/nail-art-mains-cotonou" },
      { label: "Soin complet mains SPA", href: "/soins/soin-mains-spa-cotonou" },
      { label: "Soin complet pieds SPA", href: "/soins/soin-pieds-spa-cotonou" },
      { label: "Pédicure simple", href: "/soins/pedicure-simple-cotonou" },
    ],
  },
  {
    title: "🌸 Épilation & Bien-être",
    links: [
      { label: "Électrolyse", href: "/epilation-electrolyse-cotonou" },
      { label: "Épilation demi-jambes", href: "/soins/epilation-demi-jambes-femme-cotonou" },
      { label: "Maillot brésilien", href: "/soins/epilation-maillot-bresilien-cotonou" },
      { label: "Vajacial", href: "/soins/vajacial-cotonou" },
      { label: "Rituel duo & enfants", href: "/soins/rituel-duo-cotonou" },
      { label: "Privatisation EVJF", href: "/soins/privatisation-evjf-cotonou" },
      { label: "Barber shop", href: "/soins/barbe-cotonou" },
    ],
  },
];

const NAV_LINKS = [
  { label: "Nos tarifs", href: "/tarifs" },
  { label: "Boutique", href: "/boutique" },
  { label: "À propos", href: "/a-propos" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const pathname = usePathname();
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openCategory, setOpenCategory] = useState<string | null>(
    () => MEGA_MENU.find((col) => col.links.some((l) => l.href === pathname))?.title ?? null
  );

  const isSoinsActive = pathname.startsWith("/soins/") || pathname === "/menu";

  function closeMobile() {
    setMobileOpen(false);
    setOpenCategory(null);
  }

  return (
    <header
      className="fixed top-0 left-0 right-0 z-[990] bg-white shadow-sm"
      onMouseLeave={() => setMegaOpen(false)}
    >
      {/* Barre principale */}
      <div className="h-[90px] flex items-center justify-between px-6 md:px-10 max-w-[1300px] mx-auto w-full gap-6">

        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0">
          <Image
            src="/beautygate-logo-sans-bg.png"
            alt="Academy Beauty Gate"
            width={160}
            height={60}
            className="h-[100px] w-auto object-contain object-left"
            priority
          />
        </Link>

        {/* Nav desktop */}
        <nav className="hidden md:flex items-center gap-7 flex-1 justify-center">
          {/* Trigger mega menu */}
          <button
            className={`flex items-center gap-1 text-[13px] font-semibold uppercase tracking-wide transition-colors cursor-pointer whitespace-nowrap ${megaOpen || isSoinsActive ? "text-[#6D071A]" : "text-black hover:text-[#6D071A]"}`}
            onMouseEnter={() => setMegaOpen(true)}
          >
            Nos soins
            <ChevronDownIcon className={`w-3 h-3 transition-transform duration-200 ${megaOpen ? "rotate-180" : ""}`} />
          </button>

          {NAV_LINKS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`text-[13px] font-semibold uppercase tracking-wide transition-colors whitespace-nowrap ${pathname === item.href ? "text-[#6D071A]" : "text-black hover:text-[#6D071A]"}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Actions droite */}
        <div className="flex items-center gap-3 shrink-0">
          <Link
            href="tel:+22997885887"
            className="hidden lg:flex items-center gap-2 bg-white text-black border-2 border-[#eee] px-3.5 py-2.5 text-[13px] font-medium uppercase hover:border-[#6D071A] hover:text-[#6D071A] transition-colors whitespace-nowrap"
          >
            <PhoneIcon className="w-3.5 h-3.5" />
            +229 97 88 58 87
          </Link>

          <Link
            href="https://wa.me/22997885887"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden bg-[#6D071A] border-2 border-[#6D071A] px-3.5 py-2.5 text-[13px] font-semibold uppercase whitespace-nowrap inline-block"
          >
            <span className="absolute inset-0 bg-black translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out" />
            <span className="relative z-10 text-white transition-colors duration-500">
              Réserver
            </span>
          </Link>

          <CartIcon />

          {/* Burger mobile */}
          <button
            className="md:hidden flex flex-col gap-[5px] p-1 text-black"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            <span className={`w-6 h-0.5 bg-current transition-all duration-300 origin-center ${mobileOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
            <span className={`w-6 h-0.5 bg-current transition-all duration-300 ${mobileOpen ? "opacity-0 scale-x-0" : ""}`} />
            <span className={`w-6 h-0.5 bg-current transition-all duration-300 origin-center ${mobileOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
          </button>
        </div>
      </div>

      {/* ─── Mega menu desktop ──────────────────────────────────────────────────── */}
      <div
        className={`hidden md:block absolute top-full left-0 right-0 bg-white border-t border-[#f0f0f0] shadow-xl transition-all duration-200 ${
          megaOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2 pointer-events-none"
        }`}
        onMouseEnter={() => setMegaOpen(true)}
      >
        <div className="max-w-[1300px] mx-auto px-6 md:px-10 py-8">
          <div className="grid grid-cols-4 gap-8">
            {MEGA_MENU.map((col) => (
              <div key={col.title}>
                {/* Titre colonne */}
                <p className="text-[11px] font-bold uppercase tracking-[2px] text-[#6D071A] mb-4 pb-2 border-b border-[#f0f0f0]">
                  {col.title}
                </p>
                <ul className="space-y-2.5">
                  {col.links.map((link) => {
                    const isActive = pathname === link.href;
                    return (
                      <li key={link.label}>
                        <Link
                          href={link.href}
                          onClick={() => setMegaOpen(false)}
                          className={`group flex items-center gap-2 text-[13px] transition-colors ${isActive ? "text-[#6D071A] font-semibold" : "text-[#444] hover:text-[#6D071A]"}`}
                        >
                          <span className={`h-px bg-[#6D071A] transition-all duration-200 shrink-0 ${isActive ? "w-2" : "w-0 group-hover:w-2"}`} />
                          {link.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>

          {/* Barre du bas */}
          <div className="mt-8 pt-6 border-t border-[#f0f0f0] flex items-center justify-between">
            <p className="text-[12px] text-[#999]">
              Plus de <strong className="text-black">150 prestations</strong> disponibles dans notre centre
            </p>
            <Link
              href="/menu"
              onClick={() => setMegaOpen(false)}
              className="group relative overflow-hidden inline-flex items-center gap-2 bg-[#6D071A] text-white text-[11px] font-bold uppercase tracking-widest px-6 py-3"
            >
              <span className="absolute inset-0 bg-black translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out" />
              <span className="relative z-10">Voir tous les soins</span>
              <span className="relative z-10 transition-transform group-hover:translate-x-1 duration-300">→</span>
            </Link>
          </div>
        </div>
      </div>

      {/* ─── Menu mobile ─────────────────────────────────────────────────────────── */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-white shadow-lg overflow-y-auto transition-all duration-300 ${
          mobileOpen ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="p-5 space-y-1">

          {/* Nos soins — accordéon par catégorie */}
          <div className="border-b border-[#f5f5f5] pb-3 mb-1">
            <p className="text-[12px] font-bold uppercase tracking-[2px] text-[#6D071A] mb-3 px-1">
              Nos soins
            </p>
            {MEGA_MENU.map((col) => (
              <div key={col.title} className="mb-1">
                <button
                  className="w-full flex items-center justify-between px-3 py-2.5 text-[13px] font-semibold text-black hover:bg-[#fafafa] rounded transition-colors"
                  onClick={() => setOpenCategory(openCategory === col.title ? null : col.title)}
                >
                  <span>{col.title}</span>
                  <ChevronDownIcon className={`w-3.5 h-3.5 text-[#999] transition-transform duration-200 ${openCategory === col.title ? "rotate-180" : ""}`} />
                </button>

                {openCategory === col.title && (
                  <ul className="ml-4 mt-1 mb-2 space-y-1 border-l-2 border-[#f0f0f0] pl-3">
                    {col.links.map((link) => (
                      <li key={link.label}>
                        <Link
                          href={link.href}
                          onClick={closeMobile}
                          className={`block py-1.5 text-[13px] transition-colors ${pathname === link.href ? "text-[#6D071A] font-semibold" : "text-[#555] hover:text-[#6D071A]"}`}
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                    <li>
                      <Link
                        href="/menu"
                        onClick={closeMobile}
                        className="block py-1.5 text-[12px] font-semibold text-[#6D071A]"
                      >
                        Voir tous →
                      </Link>
                    </li>
                  </ul>
                )}
              </div>
            ))}
          </div>

          {/* Autres liens */}
          {NAV_LINKS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={closeMobile}
              className={`flex items-center px-3 py-3 text-[14px] font-semibold rounded transition-colors hover:bg-[#fafafa] ${pathname === item.href ? "text-[#6D071A]" : "text-black hover:text-[#6D071A]"}`}
            >
              {item.label}
            </Link>
          ))}

          {/* CTA mobile */}
          <div className="pt-4 flex gap-3">
            <Link
              href="tel:+22997885887"
              onClick={closeMobile}
              className="flex-1 flex items-center justify-center gap-2 border-2 border-[#eee] py-3 text-[13px] font-medium text-black"
            >
              <PhoneIcon className="w-4 h-4" />
              Appeler
            </Link>
            <Link
              href="https://wa.me/22997885887"
              target="_blank"
              onClick={closeMobile}
              className="flex-1 flex items-center justify-center bg-[#6D071A] text-white py-3 text-[13px] font-semibold"
            >
              Réserver
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
