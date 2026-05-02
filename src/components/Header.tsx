"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { PhoneIcon, InstagramIcon, ChevronDownIcon } from "@/components/icons";

const NAV_ITEMS = [
  {
    label: "Nos soins",
    href: "#",
    hasDropdown: true,
    columns: [
      {
        title: "✨ Soins Visage & Corps",
        links: [
          { label: "Nettoyage purifiant", href: "/soins/nettoyage-purifiant-visage-cotonou" },
          { label: "Hydrafacial", href: "/soins/hydrafacial-cotonou" },
          { label: "BB Glow", href: "/soins/bb-glow-visage-cotonou" },
          { label: "Microneedling visage", href: "/soins/microneedling-cotonou" },
          { label: "Peeling anti-taches", href: "/soins/peeling-visage-cotonou" },
          { label: "Anti-âge régénérant", href: "/soins/soin-anti-age-regenerant-visage-cotonou" },
          { label: "Dermaplaning", href: "/soins/dermaplaning-visage-cotonou" },
        ],
      },
      {
        title: "🌿 Épilation & Massages",
        links: [
          { label: "Épilation laser", href: "/epilation-laser-cotonou" },
          { label: "Épilation demi-jambes", href: "/soins/epilation-demi-jambes-femme-cotonou" },
          { label: "Maillot brésilien", href: "/soins/epilation-maillot-bresilien-cotonou" },
          { label: "Vajacial", href: "/soins/vajacial-cotonou" },
          { label: "Massage relaxant corps entier", href: "/soins/massage-relaxant-corps-entier-cotonou" },
          { label: "Massage aux pierres chaudes", href: "/soins/massage-pierres-chaudes-cotonou" },
          { label: "Massage signature L.A Beauty", href: "/soins/massage-signature-cotonou" },
        ],
      },
      {
        title: "💄 Maquillage, Mains & Bien-être",
        links: [
          { label: "Make-up SOIR", href: "/soins/makeup-soir-cotonou" },
          { label: "Make-up JOUR", href: "/soins/makeup-jour-cotonou" },
          { label: "Microblading sourcils", href: "/soins/microblading-sourcils-cotonou" },
          { label: "Manucure semi-permanent", href: "/soins/manucure-semi-permanent-cotonou" },
          { label: "Gel sur ongles naturels", href: "/soins/gel-ongles-naturels-cotonou" },
          { label: "Espace Duo & Enfants", href: "/soins/rituel-duo-cotonou" },
          { label: "Privatisation EVJF", href: "/soins/privatisation-evjf-cotonou" },
        ],
      },
    ],
  },
  { label: "Nos tarifs", href: "/tarifs" },
  { label: "À propos", href: "/a-propos" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-[990] bg-white shadow-sm"
    >
      {/* Barre unique : logo + nav + actions */}
      <div className="h-[90px] flex items-center justify-between px-6 md:px-10 max-w-[1300px] mx-auto w-full gap-8">

        {/* Logo — gauche */}
        <Link href="/" className="flex items-center shrink-0">
          <Image
            src="/beautygate-logo-sans-bg.png"
            alt="BeautyGate Academy"
            width={160}
            height={60}
            className="h-[100px] w-auto object-contain object-left"
            priority
          />
        </Link>

        {/* Navigation desktop — centre */}
        <nav className="hidden md:flex items-center gap-8 flex-1 justify-center">
          {NAV_ITEMS.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => item.hasDropdown && setDropdownOpen(true)}
              onMouseLeave={() => item.hasDropdown && setDropdownOpen(false)}
            >
              {item.hasDropdown ? (
                <>
                  <button className="flex items-center gap-1 text-[13px] font-semibold uppercase tracking-wide text-black hover:text-[#6D071A] transition-colors cursor-pointer whitespace-nowrap">
                    {item.label}
                    <ChevronDownIcon className="w-3 h-3" />
                  </button>
                  <div
                    className={`absolute top-full left-1/2 -translate-x-1/2 pt-4 transition-all duration-200 ${
                      dropdownOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
                    }`}
                  >
                    <div className="bg-white shadow-lg rounded-md p-8 flex gap-12 min-w-[600px]">
                      {item.columns?.map((col) => (
                        <div key={col.title}>
                          <p className="text-[12px] font-bold uppercase text-gray-400 mb-3 tracking-wide">
                            {col.title}
                          </p>
                          <ul className="space-y-2">
                            {col.links.map((link) => (
                              <li key={link.label}>
                                <Link
                                  href={link.href}
                                  className="text-[13px] text-gray-700 hover:text-black transition-colors whitespace-nowrap"
                                >
                                  {link.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <Link
                  href={item.href}
                  className="text-[13px] font-semibold uppercase tracking-wide text-black hover:text-[#6D071A] transition-colors whitespace-nowrap"
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </nav>

        {/* Actions — droite */}
        <div className="flex items-center gap-3 shrink-0">
          <Link
            href="tel:+22997885887"
            className="hidden md:flex items-center gap-2 bg-white text-black border-2 border-[#eee] rounded-[3px] px-3.5 py-2.5 text-[13px] font-medium uppercase hover:bg-gray-50 transition-colors whitespace-nowrap"
          >
            <PhoneIcon className="w-3.5 h-3.5" />
            +229 97 88 58 87
          </Link>

          <Link
            href="https://wa.me/22997885887"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden bg-[#6D071A] border-2 border-[#6D071A] rounded-[3px] px-3.5 py-2.5 text-[13px] font-medium uppercase whitespace-nowrap inline-block"
          >
            <span className="absolute inset-0 bg-white translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out" />
            <span className="relative z-10 text-white group-hover:text-[#6D071A] transition-colors duration-500">
              Réserver
            </span>
          </Link>
          {/* Burger mobile */}
          <button
            className="md:hidden flex flex-col gap-1.5 text-black"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            <span className={`w-6 h-0.5 bg-current transition-transform ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`w-6 h-0.5 bg-current transition-opacity ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`w-6 h-0.5 bg-current transition-transform ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      {mobileOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 right-0 shadow-lg max-h-[80vh] overflow-y-auto">
          <nav className="p-6">
            <ul className="space-y-4">
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  {item.hasDropdown ? (
                    <div>
                      <p className="text-[14px] font-semibold uppercase text-black mb-2">
                        {item.label}
                      </p>
                      {item.columns?.map((col) => (
                        <div key={col.title} className="ml-4 mb-3">
                          <p className="text-[11px] font-bold uppercase text-gray-400 mb-1">
                            {col.title}
                          </p>
                          <ul className="space-y-1">
                            {col.links.map((link) => (
                              <li key={link.label}>
                                <Link
                                  href={link.href}
                                  className="text-[13px] text-gray-700"
                                  onClick={() => setMobileOpen(false)}
                                >
                                  {link.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-[14px] font-semibold uppercase text-black"
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
