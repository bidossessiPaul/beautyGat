import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingContact } from "@/components/FloatingContact";
import { prisma } from "@/lib/prisma";
import { CATEGORY_LABELS, CATEGORY_FALLBACK_IMAGES } from "./config";

export const metadata = {
  title: "Nos Soins à Cotonou — Academy Beauty Gate",
  description:
    "Découvrez tous nos soins beauté à Cotonou : visage, corps, épilation, massages, injections et bien plus. Academy Beauty Gate, Cadjehoun.",
};

export const revalidate = 60;

export default async function NosSoins() {
  // Compte de services par catégorie
  const serviceGroups = await prisma.service.groupBy({
    by: ["category"],
    where: { active: true },
    _count: { id: true },
  });
  const countMap = new Map(serviceGroups.map((g) => [g.category, g._count.id]));

  // Auto-crée les catégories manquantes dans ServiceCategory
  for (const key of countMap.keys()) {
    if (CATEGORY_LABELS[key]) {
      await prisma.serviceCategory.upsert({
        where: { key },
        create: {
          key,
          label: CATEGORY_LABELS[key],
          image: CATEGORY_FALLBACK_IMAGES[key] ?? null,
          sortOrder: 0,
        },
        update: {},
      });
    }
  }

  // Catégories depuis la DB (labels et images gérés via admin)
  const dbCategories = await prisma.serviceCategory.findMany({
    orderBy: [{ sortOrder: "asc" }, { key: "asc" }],
  });

  const categories = dbCategories
    .filter((cat) => countMap.has(cat.key))
    .map((cat) => ({
      key: cat.key,
      label: cat.label,
      count: countMap.get(cat.key) ?? 0,
      image: cat.image ?? CATEGORY_FALLBACK_IMAGES[cat.key] ?? null,
    }));

  return (
    <>
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
            <h1 className="text-white text-[38px] md:text-[58px] font-bold leading-[1.1] mb-5 max-w-[600px]">
              Nos Soins
            </h1>
            <p className="text-white/70 text-[15px] md:text-[17px] leading-[28px] max-w-[520px]">
              Soins visage, corps, épilation, massages et bien plus — tout ce dont vous avez besoin pour prendre soin de vous.
            </p>
          </div>
        </section>

        {/* ── CATÉGORIES ───────────────────────────────────────────────── */}
        <section className="max-w-[1300px] mx-auto px-6 md:px-10 py-16">
          <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#6D071A] mb-8">
            Choisissez une catégorie
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((cat) => (
              <Link
                key={cat.key}
                href={`/nos-soins/${cat.key}`}
                className="group relative overflow-hidden bg-white border border-[#e8e8e8] hover:border-[#6D071A]/50 hover:shadow-[0_4px_24px_rgba(109,7,26,0.12)] transition-all duration-300"
              >
                {/* Image */}
                <div className="relative h-[160px] bg-[#ede9e9] overflow-hidden">
                  {cat.image ? (
                    <Image
                      src={cat.image}
                      alt={cat.label}
                      fill
                      sizes="(max-width: 768px) 50vw, 25vw"
                      className="object-cover group-hover:scale-[1.06] transition-transform duration-500 ease-out"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-[#f5e8ea] to-[#e0c8cc]" />
                  )}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                  {/* Badge count */}
                  <span className="absolute top-2.5 right-2.5 bg-[#6D071A] text-white text-[10px] font-bold px-2 py-0.5">
                    {cat.count} soin{cat.count > 1 ? "s" : ""}
                  </span>
                </div>

                {/* Label */}
                <div className="px-4 py-3 flex items-center justify-between">
                  <p className="text-[12.5px] font-semibold text-[#1a1a1a] group-hover:text-[#6D071A] transition-colors leading-tight">
                    {cat.label}
                  </p>
                  <span className="text-[#ccc] group-hover:text-[#6D071A] group-hover:translate-x-0.5 transition-all duration-200 text-sm">
                    →
                  </span>
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
