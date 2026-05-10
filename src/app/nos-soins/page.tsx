import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingContact } from "@/components/FloatingContact";
import { services, ServiceData } from "@/data/services";

export const metadata = {
  title: "Nos Soins à Cotonou — Academy Beauty Gate",
  description: "Découvrez tous nos soins beauté à Cotonou : visage, corps, épilation, massages, injections et bien plus. Réservez votre séance à Academy Beauty Gate.",
};

const CATEGORIES: {
  key: ServiceData["category"];
  label: string;
  description: string;
  color: string;
}[] = [
  { key: "visage",        label: "Soins du Visage",        description: "Hydrafacial, peeling, photomodulation, microneedling…",    color: "#6D071A" },
  { key: "corps",         label: "Soins du Corps",         description: "Cryolipolysé, bodysculpt, détouage laser, peeling intime…", color: "#1a1a1a" },
  { key: "epilation",     label: "Épilation Laser",        description: "Épilation laser sur tous phototypes",                       color: "#6D071A" },
  { key: "epilation-cire",label: "Épilation à la Cire",   description: "Épilation douce et précise à la cire tiède ou froide",      color: "#1a1a1a" },
  { key: "massages",      label: "Massages Corporels",     description: "Massages relaxants, drainants et énergisants",              color: "#6D071A" },
  { key: "mains-pieds",   label: "Mains & Pieds",          description: "Manucure, pédicure, pose d'ongles et nail art",             color: "#1a1a1a" },
  { key: "barber",        label: "Barbershop",             description: "Coupes, taille de barbe et rasage traditionnel",            color: "#6D071A" },
  { key: "duo-enfants",   label: "Duo & Enfants",          description: "Prestations en duo et soins adaptés aux enfants",           color: "#1a1a1a" },
  { key: "injections",    label: "Prestations Médicales",  description: "Injections acide hyaluronique et botox",                    color: "#6D071A" },
  { key: "diagnostic",    label: "Diagnostic Peau",        description: "Bilan cutané complet et plan de traitement personnalisé",   color: "#1a1a1a" },
  { key: "privatisation", label: "Privatisation",          description: "EVJF, anniversaires, team building beauté",                 color: "#6D071A" },
];

export default function NosSoins() {
  const grouped = CATEGORIES.map((cat) => ({
    ...cat,
    items: services.filter((s) => s.category === cat.key),
  })).filter((g) => g.items.length > 0);

  return (
    <>
      <Header />

      {/* Hero */}
      <section className="bg-[#1a1a1a] pt-28 pb-14 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#6D071A] text-[11px] font-bold uppercase tracking-[3px] mb-3">
            Academy Beauty Gate · Cotonou
          </p>
          <h1 className="text-white text-[32px] md:text-[42px] font-bold leading-tight mb-4">
            Tous nos soins
          </h1>
          <p className="text-white/55 text-[15px] md:text-[16px] max-w-xl mx-auto">
            Découvrez l'intégralité de nos prestations beauté, classées par catégorie.
            Chaque soin est réalisé par nos expertes à Cadjehoun, Cotonou.
          </p>
        </div>
      </section>

      {/* Anchor nav catégories */}
      <nav className="sticky top-0 z-30 bg-white border-b border-[#f0f0f0] overflow-x-auto">
        <div className="max-w-6xl mx-auto flex gap-0 min-w-max">
          {grouped.map((g) => (
            <a
              key={g.key}
              href={`#${g.key}`}
              className="px-4 py-3.5 text-[12px] font-semibold text-[#555] hover:text-[#6D071A] hover:bg-[#fdf5f6] transition-colors whitespace-nowrap border-b-2 border-transparent hover:border-[#6D071A]"
            >
              {g.label}
            </a>
          ))}
        </div>
      </nav>

      {/* Contenu par catégorie */}
      <main className="bg-[#f7f7f7] py-12">
        <div className="max-w-6xl mx-auto px-4 space-y-16">
          {grouped.map((g) => (
            <section key={g.key} id={g.key} className="scroll-mt-14">
              {/* En-tête catégorie */}
              <div className="flex items-end justify-between mb-6 gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span
                      className="w-3 h-3 rounded-full shrink-0"
                      style={{ background: g.color }}
                    />
                    <h2 className="text-[18px] md:text-[22px] font-bold text-[#1a1a1a]">
                      {g.label}
                    </h2>
                  </div>
                  <p className="text-[13px] text-[#888] ml-5">{g.description}</p>
                </div>
                <span className="shrink-0 text-[12px] text-[#aaa] font-medium">
                  {g.items.length} soin{g.items.length > 1 ? "s" : ""}
                </span>
              </div>

              {/* Grille des soins */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {g.items.map((service) => (
                  <ServiceCard key={service.slug} service={service} />
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>

      {/* CTA bas de page */}
      <section className="bg-[#6D071A] py-14 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-white text-[24px] md:text-[28px] font-bold mb-3">
            Vous ne savez pas par où commencer ?
          </h2>
          <p className="text-white/65 text-[14px] mb-6">
            Réservez un diagnostic peau gratuit et nos expertes vous orienteront vers le soin idéal pour vous.
          </p>
          <a
            href="https://wa.me/22961990694"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-[#6D071A] text-[13px] font-bold uppercase tracking-widest px-8 py-3.5 hover:bg-[#1a1a1a] hover:text-white transition-colors"
          >
            Prendre rendez-vous
          </a>
        </div>
      </section>

      <Footer />
      <FloatingContact />
    </>
  );
}

function ServiceCard({ service }: { service: ServiceData }) {
  const img = service.hero.image;
  const title = service.hero.headline || service.title;
  const sub = service.hero.eyebrow;

  return (
    <Link
      href={`/soins/${service.slug}`}
      className="group bg-white border border-[#ebebeb] hover:border-[#6D071A] hover:shadow-md transition-all duration-200 flex flex-col overflow-hidden"
    >
      {/* Image */}
      <div className="relative h-40 bg-[#f0f0f0] overflow-hidden">
        {img ? (
          <Image
            src={img}
            alt={service.hero.imageAlt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-[#f5e8ea] to-[#e8d0d3]" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        {sub && (
          <span className="absolute bottom-2 left-3 text-[10px] font-semibold uppercase tracking-wider text-white/80 bg-black/40 px-2 py-0.5 rounded-sm">
            {sub}
          </span>
        )}
      </div>

      {/* Texte */}
      <div className="flex-1 p-4 flex flex-col gap-1.5">
        <h3 className="text-[13px] font-bold text-[#1a1a1a] leading-snug line-clamp-2 group-hover:text-[#6D071A] transition-colors">
          {title}
        </h3>
        {service.pricing.items[0] && (
          <p className="text-[12px] text-[#6D071A] font-semibold mt-auto pt-1">
            À partir de {service.pricing.items[0].price}
          </p>
        )}
      </div>

      {/* Footer card */}
      <div className="px-4 pb-3">
        <span className="text-[11px] font-semibold text-[#6D071A] group-hover:underline">
          Découvrir →
        </span>
      </div>
    </Link>
  );
}
