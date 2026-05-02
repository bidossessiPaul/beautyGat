"use client";

import Link from "next/link";
import { MapPinIcon } from "@/components/icons";

export function ContactFooter() {
  return (
    <section id="contact" className="py-20 px-6 bg-white">
      <div className="max-w-[1300px] mx-auto px-6 md:px-10">

        {/* En-tête */}
        <div className="mb-12">
          <p className="text-[12px] font-bold uppercase tracking-[3px] text-[#96000F] mb-3">
            Contact
          </p>
          <h2 className="font-heading text-[30px] md:text-[40px] font-bold text-black">
            Prenez rendez-vous
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Formulaire */}
          <div>
            <h3 className="font-heading text-[20px] font-semibold text-black mb-6">
              Se faire rappeler
            </h3>
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
                <option>Épilation laser</option>
                <option>Peeling</option>
                <option>Hydrafacial</option>
                <option>Injections</option>
                <option>Amincissement</option>
                <option>Détatouage</option>
                <option>Autre</option>
              </select>
              <p className="text-[11px] leading-[16px] text-gray-400 pt-2">
                En soumettant ce formulaire, j&apos;accepte que les informations saisies soient exploitées dans le cadre de la demande de rappel et de la relation commerciale qui peut en découler.
              </p>
              <button
                type="submit"
                className="group relative overflow-hidden bg-[#96000F] text-white text-[13px] font-semibold uppercase tracking-widest rounded-[3px] px-8 py-4 w-full mt-2"
              >
                <span className="absolute inset-0 bg-black translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out" />
                <span className="relative z-10">Envoyer ma demande de rappel</span>
              </button>
            </form>
          </div>

          {/* Carte + infos */}
          <div>
            <h3 className="font-heading text-[20px] font-semibold text-black mb-6">
              Où nous trouver
            </h3>
            <div className="flex items-start gap-3 mb-6">
              <MapPinIcon className="w-4 h-4 mt-1 shrink-0 text-[#96000F]" />
              <div>
                <p className="text-[14px] font-semibold text-black">Academy Beauty Gate</p>
                <p className="text-[14px] text-[#555]">Cadjehoun, Cotonou, Bénin</p>
              </div>
            </div>
            <div className="w-full rounded-xl overflow-hidden mb-4" style={{ height: "320px" }}>
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
              className="inline-block text-[12px] text-[#96000F] font-semibold hover:underline"
            >
              Ouvrir dans Google Maps →
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
