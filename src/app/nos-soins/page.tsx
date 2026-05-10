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
  href: string;
}[] = [
  { key: "visage",         label: "LES SOINS DU VISAGE",      href: "#visage" },
  { key: "corps",          label: "LES SOINS DU CORPS",       href: "#corps" },
  { key: "epilation",      label: "ÉPILATION LASER",          href: "#epilation" },
  { key: "epilation-cire", label: "ÉPILATION À LA CIRE",      href: "#epilation-cire" },
  { key: "massages",       label: "LES MASSAGES CORPORELS",   href: "#massages" },
  { key: "mains-pieds",    label: "MAINS & PIEDS",            href: "#mains-pieds" },
  { key: "barber",         label: "BARBERSHOP",               href: "#barber" },
  { key: "duo-enfants",    label: "DUO & ENFANTS",            href: "#duo-enfants" },
  { key: "injections",     label: "PRESTATIONS MÉDICALES",    href: "#injections" },
  { key: "diagnostic",     label: "LES CONSULTATIONS",        href: "#diagnostic" },
  { key: "privatisation",  label: "PRIVATISATION",            href: "#privatisation" },
];

const MAX_AVATARS = 3;

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
          <p className="text-white/55 text-[15px] max-w-xl mx-auto">
            Découvrez l'intégralité de nos prestations beauté, classées par catégorie.
            Chaque soin est réalisé par nos expertes à Cadjehoun, Cotonou.
          </p>
        </div>
      </section>

      {/* Grille des catégories */}
      <main className="bg-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="text-[12px] font-semibold text-[#888] uppercase tracking-widest mb-6">
            Catégories
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-16">
            {grouped.map((g) => {
              const avatars = g.items
                .filter((s) => s.hero.image)
                .slice(0, MAX_AVATARS);
              const extra = g.items.length - MAX_AVATARS;

              return (
                <Link
                  key={g.key}
                  href={`#${g.key}`}
                  className="group bg-white border border-[#e8e8e8] rounded-xl p-5 hover:border-[#6D071A] hover:shadow-md transition-all duration-200 flex flex-col gap-4"
                >
                  {/* Titre */}
                  <h2 className="text-[14px] font-bold text-[#1a1a1a] uppercase tracking-wide leading-tight group-hover:text-[#6D071A] transition-colors">
                    {g.label}
                  </h2>

                  {/* Compteur */}
                  <p className="text-[13px] text-[#888] -mt-2">
                    Services&nbsp;: {g.items.length}
                  </p>

                  {/* Avatars circulaires */}
                  <div className="flex items-center mt-auto">
                    {avatars.map((s, i) => (
                      <div
                        key={s.slug}
                        className="relative w-9 h-9 rounded-full overflow-hidden border-2 border-white ring-1 ring-[#e8e8e8]"
                        style={{ marginLeft: i === 0 ? 0 : "-10px", zIndex: avatars.length - i }}
                      >
                        <Image
                          src={s.hero.image!}
                          alt={s.hero.imageAlt}
                          fill
                          sizes="36px"
                          className="object-cover"
                        />
                      </div>
                    ))}
                    {extra > 0 && (
                      <div
                        className="relative w-9 h-9 rounded-full bg-[#f0f0f0] border-2 border-white ring-1 ring-[#e8e8e8] flex items-center justify-center text-[11px] font-bold text-[#555]"
                        style={{ marginLeft: "-10px" }}
                      >
                        +{extra}
                      </div>
                    )}
                  </div>
                </Link>
              );
            })}
          </div>

          {/* ── Détail par catégorie ── */}
          <div className="space-y-16">
            {grouped.map((g) => (
              <section key={g.key} id={g.key} className="scroll-mt-6">
                <div className="flex items-center justify-between mb-5 gap-4 border-b border-[#f0f0f0] pb-3">
                  <h2 className="text-[16px] font-bold text-[#1a1a1a] uppercase tracking-wider">
                    {g.label}
                  </h2>
                  <span className="text-[12px] text-[#aaa] shrink-0">
                    {g.items.length} service{g.items.length > 1 ? "s" : ""}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {g.items.map((service) => (
                    <ServiceCard key={service.slug} service={service} />
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </main>

      {/* CTA */}
      <section className="bg-[#6D071A] py-14 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-white text-[24px] md:text-[28px] font-bold mb-3">
            Vous ne savez pas par où commencer ?
          </h2>
          <p className="text-white/65 text-[14px] mb-6">
            Réservez un diagnostic peau gratuit et nos expertes vous orienteront vers le soin idéal.
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

  return (
    <Link
      href={`/soins/${service.slug}`}
      className="group bg-white border border-[#ebebeb] rounded-lg hover:border-[#6D071A] hover:shadow-md transition-all duration-200 flex flex-col overflow-hidden"
    >
      <div className="relative h-36 bg-[#f0f0f0] overflow-hidden">
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
        <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
      </div>

      <div className="p-3.5 flex flex-col gap-1 flex-1">
        <h3 className="text-[12px] font-bold text-[#1a1a1a] leading-snug line-clamp-2 group-hover:text-[#6D071A] transition-colors">
          {title}
        </h3>
        {service.pricing.items[0] && (
          <p className="text-[11px] text-[#6D071A] font-semibold mt-auto pt-1">
            À partir de {service.pricing.items[0].price}
          </p>
        )}
      </div>
    </Link>
  );
}
