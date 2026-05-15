"use client";

import { useState } from "react";
import Link from "next/link";

const PHONE = "+2290168411111";
const WHATSAPP_URL = "https://wa.me/2290168411111";
const EMAIL = "beautygate055@gmail.com";
const INSTAGRAM_URL = "https://www.instagram.com/beaut.ygateofficiel/";

const CONTACTS = [
  {
    label: "WhatsApp",
    href: WHATSAPP_URL,
    bg: "bg-[#25D366]",
    icon: (
      <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.553 4.122 1.523 5.854L.057 23.215a.75.75 0 0 0 .921.921l5.424-1.461A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.907 0-3.693-.504-5.23-1.385l-.374-.214-3.878 1.044 1.057-3.77-.232-.389A9.96 9.96 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
      </svg>
    ),
  },
  {
    label: "Appel direct",
    href: `tel:${PHONE}`,
    bg: "bg-[#6D071A]",
    icon: (
      <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5">
        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
      </svg>
    ),
  },
  {
    label: "Email",
    href: `mailto:${EMAIL}`,
    bg: "bg-[#333]",
    icon: (
      <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5">
        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: INSTAGRAM_URL,
    bg: "bg-gradient-to-br from-[#f09433] via-[#e6683c] via-[#dc2743] via-[#cc2366] to-[#bc1888]",
    icon: (
      <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
      </svg>
    ),
  },
];

export function FloatingContact() {
  const [open, setOpen] = useState(false);
  const [bubbleDismissed, setBubbleDismissed] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-[999] flex flex-col items-end gap-3">

      {/* Options */}
      {open && (
        <div className="bg-white rounded-2xl shadow-2xl w-[280px] overflow-hidden">
          {/* Header */}
          <div className="bg-black px-5 py-4">
            <p className="text-white font-bold text-[15px]">Bonjour,</p>
            <p className="text-white font-bold text-[15px]">Comment pouvons-nous vous aider ?</p>
          </div>

          {/* Boutons contact */}
          <div className="p-4 grid grid-cols-2 gap-3">
            {CONTACTS.map((c) => (
              <Link
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex flex-col items-center gap-2 border border-[#eee] rounded-xl py-4 hover:shadow-md transition-shadow"
              >
                <div className={`w-11 h-11 rounded-full ${c.bg} flex items-center justify-center`}>
                  {c.icon}
                </div>
                <span className="text-[12px] font-semibold text-black">{c.label}</span>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Bulle d'accroche */}
      {!open && !bubbleDismissed && (
        <div className="relative flex items-center gap-3 bg-white rounded-2xl shadow-xl px-4 py-3 max-w-[240px]">
          {/* Flèche pointant vers le bouton */}
          <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white rotate-45 shadow-sm" />
          {/* Avatar */}
          <div className="w-9 h-9 rounded-full bg-[#6D071A] flex items-center justify-center shrink-0 overflow-hidden">
            <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5">
              <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/>
            </svg>
          </div>
          {/* Texte */}
          <p className="text-[13px] text-black leading-[18px] font-medium pr-4">
            Bonjour, vous avez une question ? Envoyez-nous un message ici.
          </p>
          {/* Croix */}
          <button
            onClick={(e) => { e.stopPropagation(); setBubbleDismissed(true); }}
            className="absolute top-2 right-2 text-gray-400 hover:text-gray-700 transition-colors"
            aria-label="Fermer"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
            </svg>
          </button>
        </div>
      )}

      {/* Bouton principal */}
      <button
        onClick={() => { setOpen(!open); setBubbleDismissed(true); }}
        className="w-14 h-14 bg-[#6D071A] rounded-full shadow-lg flex items-center justify-center hover:bg-[#7a000c] transition-colors"
        aria-label="Contact"
      >
        {open ? (
          <svg viewBox="0 0 24 24" fill="white" className="w-6 h-6">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" fill="white" className="w-6 h-6">
            <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
          </svg>
        )}
      </button>
    </div>
  );
}
