import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingContact } from "@/components/FloatingContact";
import { services, ServiceData } from "@/data/services";

export const metadata = {
  title: "Nos Soins à Cotonou — Academy Beauty Gate",
  description: "Découvrez tous nos soins beauté à Cotonou : visage, corps, épilation, massages, injections et bien plus.",
};

const CATEGORIES: { key: ServiceData["category"]; label: string }[] = [
  { key: "visage",         label: "LES SOINS DU VISAGE" },
  { key: "corps",          label: "LES SOINS DU CORPS" },
  { key: "epilation",      label: "ÉPILATION LASER" },
  { key: "epilation-cire", label: "ÉPILATION À LA CIRE" },
  { key: "massages",       label: "LES MASSAGES CORPORELS" },
  { key: "mains-pieds",    label: "MAINS & PIEDS" },
  { key: "barber",         label: "BARBERSHOP" },
  { key: "duo-enfants",    label: "DUO & ENFANTS" },
  { key: "injections",     label: "PRESTATIONS MÉDICALES" },
  { key: "diagnostic",     label: "LES CONSULTATIONS" },
  { key: "privatisation",  label: "PRIVATISATION" },
];

export default function NosSoins() {
  const grouped = CATEGORIES.map((cat) => ({
    ...cat,
    items: services.filter((s) => s.category === cat.key),
  })).filter((g) => g.items.length > 0);

  return (
    <>
      <Header />

      <main className="min-h-screen bg-white pt-28 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-[22px] font-bold text-[#1a1a1a] mb-1">Nos soins</h1>
          <p className="text-[13px] text-[#999] mb-8">Toutes nos prestations classées par catégorie</p>

          {/* Grille catégories */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-14">
            {grouped.map((g) => {
              const avatars = g.items.filter((s) => s.hero.image).slice(0, 3);
              const extra = g.items.length - 3;
              return (
                <Link
                  key={g.key}
                  href={`#${g.key}`}
                  className="group border border-[#e8e8e8] rounded-xl p-5 hover:border-[#6D071A] hover:shadow-md transition-all duration-200 flex flex-col gap-3"
                >
                  <h2 className="text-[13px] font-bold text-[#1a1a1a] uppercase tracking-wide leading-snug group-hover:text-[#6D071A] transition-colors line-clamp-2">
                    {g.label}
                  </h2>
                  <p className="text-[12px] text-[#888]">Services : {g.items.length}</p>
                  <div className="flex items-center mt-1">
                    {avatars.map((s, i) => (
                      <div
                        key={s.slug}
                        className="relative w-8 h-8 rounded-full overflow-hidden border-2 border-white ring-1 ring-[#e0e0e0]"
                        style={{ marginLeft: i === 0 ? 0 : "-8px", zIndex: 10 - i }}
                      >
                        <Image src={s.hero.image!} alt={s.hero.imageAlt} fill sizes="32px" className="object-cover" />
                      </div>
                    ))}
                    {extra > 0 && (
                      <div
                        className="w-8 h-8 rounded-full bg-[#f2f2f2] border-2 border-white ring-1 ring-[#e0e0e0] flex items-center justify-center text-[10px] font-bold text-[#555]"
                        style={{ marginLeft: "-8px" }}
                      >
                        +{extra}
                      </div>
                    )}
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Détail par catégorie */}
          <div className="space-y-12">
            {grouped.map((g) => (
              <section key={g.key} id={g.key} className="scroll-mt-6">
                <div className="flex items-center justify-between border-b border-[#f0f0f0] pb-3 mb-5">
                  <h2 className="text-[15px] font-bold text-[#1a1a1a] uppercase tracking-wider">{g.label}</h2>
                  <span className="text-[12px] text-[#bbb]">{g.items.length} service{g.items.length > 1 ? "s" : ""}</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {g.items.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/soins/${s.slug}`}
                      className="group border border-[#ebebeb] rounded-lg overflow-hidden hover:border-[#6D071A] hover:shadow-sm transition-all duration-200 flex flex-col"
                    >
                      <div className="relative h-36 bg-[#f0f0f0] overflow-hidden">
                        {s.hero.image ? (
                          <Image src={s.hero.image} alt={s.hero.imageAlt} fill sizes="300px" className="object-cover group-hover:scale-105 transition-transform duration-300" />
                        ) : (
                          <div className="w-full h-full bg-gradient-to-br from-[#f5e8ea] to-[#e8d0d3]" />
                        )}
                      </div>
                      <div className="p-3">
                        <p className="text-[12px] font-semibold text-[#1a1a1a] leading-snug line-clamp-2 group-hover:text-[#6D071A] transition-colors">
                          {s.hero.headline || s.title}
                        </p>
                        {s.pricing.items[0] && (
                          <p className="text-[11px] text-[#6D071A] font-medium mt-1">{s.pricing.items[0].price}</p>
                        )}
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </main>

      <Footer />
      <FloatingContact />
    </>
  );
}
