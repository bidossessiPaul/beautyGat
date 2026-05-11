import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingContact } from "@/components/FloatingContact";
import { prisma } from "@/lib/prisma";
import { CATEGORY_LABELS, CATEGORY_FALLBACK_IMAGES } from "../config";
import { CATEGORY_CONTENT } from "../categoryContent";

export const revalidate = 60;

interface Props {
  params: Promise<{ category: string }>;
}

export async function generateMetadata({ params }: Props) {
  const { category } = await params;
  const cat = await prisma.serviceCategory.findUnique({ where: { key: category } });
  const label = cat?.label ?? CATEGORY_LABELS[category] ?? category;
  return {
    title: `${label} à Cotonou — Academy Beauty Gate`,
    description: `Découvrez tous nos ${label.toLowerCase()} à Cotonou. Academy Beauty Gate, Cadjehoun.`,
  };
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;

  // Auto-crée la catégorie si elle n'existe pas encore en DB
  const defaultLabel = CATEGORY_LABELS[category];
  if (!defaultLabel) notFound();

  const dbCategory = await prisma.serviceCategory.upsert({
    where: { key: category },
    create: {
      key: category,
      label: defaultLabel,
      image: CATEGORY_FALLBACK_IMAGES[category] ?? null,
      sortOrder: 0,
    },
    update: {},
  });

  const label = dbCategory.label;

  const services = await prisma.service.findMany({
    where: { category, active: true },
    orderBy: [{ sortOrder: "asc" }, { createdAt: "desc" }],
    select: {
      slug: true,
      title: true,
      hero: true,
      pricing: true,
    },
  });

  const fallbackImg = dbCategory.image || CATEGORY_FALLBACK_IMAGES[category] || null;
  const content = CATEGORY_CONTENT[category] ?? null;

  return (
    <>
      <Header />

      <main className="min-h-screen bg-[#faf8f6]">

        {/* ── HERO ─────────────────────────────────────────────────────── */}
        <section className="relative bg-black pt-[90px] overflow-hidden">
          <div
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage: `url('${fallbackImg ?? "/images/Appart-beaute-accueil-philosophie-1-scaled.jpg"}')`,
              backgroundSize: "cover",
              backgroundPosition: "center 30%",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
          <div className="relative z-10 max-w-[1300px] mx-auto px-6 md:px-10 py-20 md:py-28">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 mb-5 text-[11px] text-white/50">
              <Link href="/nos-soins" className="hover:text-white transition-colors">Nos soins</Link>
              <span>/</span>
              <span className="text-white/80">{label}</span>
            </div>
            <h1 className="text-white text-[36px] md:text-[52px] font-bold leading-[1.1] mb-4 max-w-[600px]">
              {label}
            </h1>
            <p className="text-white/60 text-[14px]">
              {services.length} soin{services.length > 1 ? "s" : ""} disponible{services.length > 1 ? "s" : ""}
            </p>
          </div>
        </section>

        {/* ── INTRO ────────────────────────────────────────────────────── */}
        {content && (
          <section className="bg-white border-b border-[#f0f0f0]">
            <div className="max-w-[1300px] mx-auto px-6 md:px-10 py-14 md:py-18">
              <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">

                {/* Texte */}
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-[#6D071A] mb-4">
                    À propos de cette catégorie
                  </p>
                  <h2 className="text-[22px] md:text-[28px] font-bold text-[#1C1C1C] leading-[1.25] mb-5">
                    {label} — <span className="text-[#6D071A]">ce qu&apos;il faut savoir</span>
                  </h2>
                  <p className="text-[14px] md:text-[15px] text-[#555] leading-[1.8]">
                    {content.intro.description}
                  </p>
                </div>

                {/* Highlights */}
                <div className="grid grid-cols-3 gap-4">
                  {content.intro.highlights.map((h) => (
                    <div key={h.label} className="bg-[#faf8f6] border border-[#ebebeb] p-5 text-center">
                      <p className="text-[22px] md:text-[26px] font-bold text-[#6D071A] leading-none mb-2">
                        {h.value}
                      </p>
                      <p className="text-[11px] text-[#888] uppercase tracking-[0.15em] leading-tight">
                        {h.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ── GRILLE SERVICES ──────────────────────────────────────────── */}
        <section className="max-w-[1300px] mx-auto px-6 md:px-10 py-14">
          {services.length === 0 ? (
            <p className="text-[#999] text-sm text-center py-20">Aucun soin disponible dans cette catégorie.</p>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
              {services.map((s) => {
                const hero = s.hero as { image?: string; headline?: string; imageAlt?: string } | null;
                const pricing = s.pricing as { items?: { label: string; price: string }[] } | null;
                const img = hero?.image || fallbackImg;
                const firstPrice = pricing?.items?.[0]?.price ?? null;
                const title = hero?.headline || s.title;

                return (
                  <Link
                    key={s.slug}
                    href={`/soins/${s.slug}`}
                    className="group relative overflow-hidden bg-[#1a1a1a] flex flex-col"
                    style={{ aspectRatio: "3/4" }}
                  >
                    {/* Image plein format */}
                    {img ? (
                      <Image
                        src={img}
                        alt={hero?.imageAlt ?? s.title}
                        fill
                        sizes="(max-width: 768px) 50vw, 25vw"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.08]"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-gradient-to-br from-[#3a1520] to-[#1a0a0d]" />
                    )}

                    {/* Gradient overlay permanent */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-[#6D071A]/0 group-hover:bg-[#6D071A]/25 transition-colors duration-500" />

                    {/* Contenu en bas */}
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      {firstPrice && (
                        <span className="inline-block text-[10px] font-bold uppercase tracking-[0.15em] text-[#f0b8b8] mb-2">
                          À partir de {firstPrice}
                        </span>
                      )}
                      <p className="text-white font-semibold text-[13px] leading-[1.4] line-clamp-2 mb-3">
                        {title}
                      </p>
                      {/* CTA apparaît au hover */}
                      <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.15em] text-white/0 group-hover:text-white transition-all duration-300 translate-y-1 group-hover:translate-y-0">
                        <span>Découvrir</span>
                        <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </section>

        {/* ── BIENFAITS ────────────────────────────────────────────────── */}
        {content && (
          <section className="bg-white py-16 md:py-20 border-t border-[#f0f0f0]">
            <div className="max-w-[1300px] mx-auto px-6 md:px-10">

              {/* Header */}
              <div className="mb-10 md:mb-12">
                <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-[#6D071A] mb-3">
                  Pourquoi choisir Academy Beauty Gate
                </p>
                <h2 className="text-[#1C1C1C] text-[22px] md:text-[30px] font-bold leading-[1.2]">
                  Les bienfaits de nos <span className="text-[#6D071A]">{label.toLowerCase()}</span>
                </h2>
              </div>

              {/* Cards bienfaits */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {content.benefits.map((b, i) => (
                  <div key={i} className="bg-[#faf8f6] border border-[#ebebeb] p-6 hover:border-[#6D071A]/30 hover:shadow-sm transition-all">
                    <span className="text-[#6D071A] text-[20px] mb-4 block">{b.icon}</span>
                    <h3 className="text-[#1C1C1C] font-bold text-[14px] mb-2 leading-tight">{b.title}</h3>
                    <p className="text-[#777] text-[12.5px] leading-[1.7]">{b.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

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
