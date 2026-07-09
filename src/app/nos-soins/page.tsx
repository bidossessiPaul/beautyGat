import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingContact } from "@/components/FloatingContact";
import { JsonLd } from "@/components/JsonLd";
import { prisma } from "@/lib/prisma";
import { buildMetadata, breadcrumbSchema } from "@/lib/seo";
import { CATEGORY_LABELS, CATEGORY_FALLBACK_IMAGES, CATEGORY_DESCRIPTIONS, MAIN_CATEGORIES } from "./config";

export const metadata = buildMetadata({
  title: "Nos Prestations à Cotonou",
  description:
    "Découvrez toutes nos prestations beauté à Cotonou : soins visage, corps, mains & pieds et formations. Academy Beauty Gate, Cadjehoun.",
  path: "/nos-soins",
});

export const revalidate = 60;

export default async function NosSoins() {
  const serviceGroups = await prisma.service.groupBy({
    by: ["category"],
    where: { active: true },
    _count: { id: true },
  });
  const countMap = new Map(serviceGroups.map((g) => [g.category, g._count.id]));

  const dbCategories = await prisma.serviceCategory.findMany({
    orderBy: [{ sortOrder: "asc" }, { key: "asc" }],
  });

  // Toutes les catégories DB (avec ou sans services)
  const dbCatMap = new Map(dbCategories.map((c) => [c.key, c]));

  // Les 5 catégories principales — toujours affichées même si vides
  const mainCats = MAIN_CATEGORIES.map((key) => {
    const db = dbCatMap.get(key);
    return {
      key,
      label: db?.label ?? CATEGORY_LABELS[key] ?? key,
      count: countMap.get(key) ?? 0,
      image: db?.image ?? CATEGORY_FALLBACK_IMAGES[key] ?? null,
      description: CATEGORY_DESCRIPTIONS[key] ?? "",
    };
  });

  // Autres catégories avec des services (hors MAIN_CATEGORIES)
  const otherCats = dbCategories
    .filter((cat) => !MAIN_CATEGORIES.includes(cat.key) && countMap.has(cat.key))
    .map((cat) => ({
      key: cat.key,
      label: cat.label,
      count: countMap.get(cat.key) ?? 0,
      image: cat.image ?? CATEGORY_FALLBACK_IMAGES[cat.key] ?? null,
      description: CATEGORY_DESCRIPTIONS[cat.key] ?? "",
    }));

  return (
    <>
      <JsonLd schema={breadcrumbSchema([
        { name: "Accueil", href: "/" },
        { name: "Nos Prestations", href: "/nos-soins" },
      ])} />
      <Header />

      <main className="min-h-screen bg-[#faf8f6]">

        {/* ── HERO ─────────────────────────────────────────────────────── */}
        <section className="relative bg-black pt-[90px] overflow-hidden">
          <div
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage: "url('/images/Appart-beaute-accueil-philosophie-1-scaled.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center 30%",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
          <div className="relative z-10 max-w-[1300px] mx-auto px-6 md:px-10 py-24 md:py-32">
            <p className="text-[#f0b8b8] text-xs font-bold uppercase tracking-[0.25em] mb-4">
              Academy Beauty Gate · Cotonou, Bénin
            </p>
            <h1 className="text-white text-[38px] md:text-[58px] font-bold leading-[1.1] mb-5 max-w-[620px]">
              Nos Prestations
            </h1>
            <p className="text-white/70 text-[15px] md:text-[17px] leading-[28px] max-w-[520px]">
              Soins visage, corps, mains & pieds et formations professionnelles — tout ce dont vous avez besoin pour prendre soin de vous.
            </p>
          </div>
        </section>

        {/* ── 4 CATÉGORIES PRINCIPALES ─────────────────────────────────── */}
        <section className="max-w-[1300px] mx-auto px-6 md:px-10 py-16">
          <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#6D071A] mb-2">
            Nos univers beauté
          </p>
          <h2 className="text-[28px] md:text-[34px] font-bold text-[#1a1a1a] mb-10 leading-tight">
            Choisissez votre catégorie
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {mainCats.map((cat, i) => (
              <Link
                key={cat.key}
                href={`/nos-soins/${cat.key}`}
                className="group relative overflow-hidden bg-white border border-[#e8e8e8] hover:border-[#6D071A]/40 hover:shadow-[0_8px_40px_rgba(109,7,26,0.12)] transition-all duration-300 flex"
              >
                {/* Image */}
                <div className="relative w-[140px] md:w-[200px] shrink-0 bg-[#ede9e9] overflow-hidden">
                  {cat.image ? (
                    <Image
                      src={cat.image}
                      alt={cat.label}
                      fill
                      sizes="200px"
                      className="object-cover group-hover:scale-[1.06] transition-transform duration-500 ease-out"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-[#f5e8ea] to-[#e0c8cc]" />
                  )}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                  {/* Numéro */}
                  <span className="absolute top-3 left-3 w-7 h-7 bg-[#6D071A] text-white text-[11px] font-bold flex items-center justify-center">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Contenu */}
                <div className="flex-1 px-5 py-5 flex flex-col justify-between">
                  <div>
                    <p className="text-[18px] md:text-[20px] font-bold text-[#1a1a1a] group-hover:text-[#6D071A] transition-colors mb-2 leading-tight">
                      {cat.label}
                    </p>
                    {cat.description && (
                      <p className="text-[13px] text-[#666] leading-[1.6] line-clamp-2">
                        {cat.description}
                      </p>
                    )}
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#999]">
                      {cat.count} prestation{cat.count > 1 ? "s" : ""}
                    </span>
                    <span className="text-[#6D071A] group-hover:translate-x-1 transition-transform duration-200 font-bold text-lg">
                      →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>


        {/* ── CTA ──────────────────────────────────────────────────────── */}
        <section className="bg-[#6D071A] py-14">
          <div className="max-w-[1300px] mx-auto px-6 md:px-10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-white/50 mb-2">
                Vous hésitez ?
              </p>
              <p className="text-white font-bold text-xl leading-tight">
                Prenez rendez-vous — consultation offerte
              </p>
            </div>
            <Link
              href="/rendez-vous"
              className="group relative overflow-hidden shrink-0 bg-white text-[#6D071A] px-8 py-3.5 text-[11px] font-bold uppercase tracking-[0.2em] inline-block"
            >
              <span className="absolute inset-0 bg-[#1C1C1C] translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out" />
              <span className="relative z-10 group-hover:text-white transition-colors duration-500">
                Prendre rendez-vous
              </span>
            </Link>
          </div>
        </section>

      </main>

      <Footer />
      <FloatingContact />
    </>
  );
}
