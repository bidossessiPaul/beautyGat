import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingContact } from "@/components/FloatingContact";
import { JsonLd } from "@/components/JsonLd";
import { prisma } from "@/lib/prisma";
import { buildMetadata, breadcrumbSchema, CATEGORY_FALLBACK_FOR_META } from "@/lib/seo";
import { CATEGORY_LABELS, CATEGORY_FALLBACK_IMAGES, CATEGORY_DESCRIPTIONS } from "../config";
import { CATEGORY_CONTENT } from "../categoryContent";

export const revalidate = 60;

interface Props {
  params: Promise<{ category: string }>;
}

// Labels lisibles pour chaque sous-catégorie / groupe
const SUBCAT_LABELS: Record<string, string> = {
  "soin-classique":    "Soin Classique",
  "soin-avance":       "Soin Avancé",
  "peeling":           "Peeling",
  "microneedling":     "Microneedling",
  "microdermabrasion": "Microdermabrasion",
  "oxygenation":       "Oxygénation",
  "hydra-facial":      "Hydra Facial",
  "traitements":       "Traitements",
  "epilation":         "Épilation",
  "massage":           "Massages",
  "gommage":           "Gommage",
  "soins-intimes":     "Soins Intimes",
  "manucure":          "Manucure",
  "pedicure":          "Pédicure",
  "manucure-pedicure": "Manucure & Pédicure",
  "visio":             "Consultation Visio",
  "presentiel":        "Consultation Présentiel",
  "consultation":      "Consultation",
  "formation-modulaire":        "Formation Modulaire",
  "formation-perfectionnement": "Formation Perfectionnement",
  "formation-complete":         "Formation Complète",
  "formation":         "Formation",
  "duo-enfants":       "Duo & Enfants",
  "cure-soin":         "Cure Soin",
  "dermaplaning":      "Dermaplaning",
  "soin-anti-age":     "Soin Anti-Âge",
  "soin-peaux-imperfections": "Soin Peaux & Imperfections",
  "soin-desincrustation":     "Soin Désincrustration",
  "nettoyage-express":        "Nettoyage Express",
};
const subcatLabel = (key: string) => SUBCAT_LABELS[key] ?? key.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase());

const SUBCAT_DESCRIPTIONS: Record<string, string> = {
  "soin-classique":    "Cure soins, dermaplaning, anti-âge, peaux et imperfections",
  "soin-avance":       "Peeling, microneedling, microdermabrasion, oxygénation, hydra facial",
  "peeling":           "TCA, Gluta, Boceau, Algue, Salicylé, Red, Charbon peeling",
  "microneedling":     "BB Glow, Nano Needling, PRP, Mésothérapie, Skin Regeneration",
  "microdermabrasion": "Exfoliation mécanique visage, dos, jambes et aisselles",
  "oxygenation":       "Oxy Jet Peel, OxyGeneo, Photomodulation LED",
  "hydra-facial":      "Hydrafacial et Hydra Boost — hydratation profonde",
  "traitements":       "Élimination des acrocordons et verrues",
  "epilation":         "Épilation à la cire toutes zones — jambes, maillot, aisselles, visage",
  "massage":           "Massage relaxant, tonique, pierres chaudes, madérothérapie",
  "gommage":           "Gommage corps, enveloppement hydratant et rituels",
  "manucure":          "Manucure classique, semi-permanent, gel, capsules et nail art",
  "pedicure":          "Pédicure classique, semi-permanent et soin SPA pieds",
  "manucure-pedicure": "Forfaits manucure et pédicure complets",
  "visio":             "Diagnostic et conseils personnalisés par vidéo depuis chez vous",
  "presentiel":        "Diagnostic de peau en cabinet — analyse approfondie et protocole sur-mesure",
  "consultation":      "Consultations visio et présentiel, diagnostic de peau",
  "cure-soin":         "Cures et abonnements soins visage sur plusieurs séances",
  "dermaplaning":      "Exfoliation mécanique et retrait du duvet facial",
  "soin-anti-age":     "Soins régénérants et anti-âge pour un teint rajeuni",
  "soin-peaux-imperfections": "Soins ciblés pour les imperfections et le teint irrégulier",
  "soin-desincrustation":     "Nettoyage purifiant profond et désincrustration des pores",
  "nettoyage-express":              "Nettoyage express pour un teint net en peu de temps",
  "formation-modulaire":            "Formez-vous module par module selon vos besoins — attestation à chaque module validé",
  "formation-perfectionnement":     "Perfectionnez vos techniques en conditions professionnelles — idéal pour les esthéticiennes en exercice",
  "formation-complete":             "Devenez esthéticienne professionnelle de A à Z — diplôme Academy Beauty Gate délivré en fin de formation",
};

export async function generateMetadata({ params }: Props) {
  const { category } = await params;
  const cat = await prisma.serviceCategory.findUnique({ where: { key: category } });
  const label = cat?.label ?? CATEGORY_LABELS[category] ?? category;
  const image = cat?.image || CATEGORY_FALLBACK_FOR_META[category];
  return buildMetadata({
    title: `${label} à Cotonou — Academy Beauty Gate`,
    description: `${label} à Cotonou Cadjehoun — découvrez nos prestations et sous-catégories. Academy Beauty Gate, Bénin.`,
    path: `/nos-soins/${category}`,
    ...(image ? { image } : {}),
  });
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;

  const defaultLabel = CATEGORY_LABELS[category];
  if (!defaultLabel) notFound();

  const dbCategory = await prisma.serviceCategory.upsert({
    where: { key: category },
    create: { key: category, label: defaultLabel, image: CATEGORY_FALLBACK_IMAGES[category] ?? null, sortOrder: 0 },
    update: {},
  });

  const label = dbCategory.label;
  const fallbackImg = dbCategory.image || CATEGORY_FALLBACK_IMAGES[category] || null;
  const content = CATEGORY_CONTENT[category] ?? null;

  // Récupérer les groupes distincts (catGroup) avec compteur de services
  const groupRows = await prisma.service.groupBy({
    by: ["catGroup"],
    where: { category, active: true, catGroup: { not: null } },
    _count: { id: true },
    orderBy: { catGroup: "asc" },
  });

  // Compter aussi les services sans catGroup
  const noGroupCount = await prisma.service.count({
    where: { category, active: true, catGroup: null },
  });

  const subcategories = groupRows
    .filter(r => r.catGroup)
    .map(r => ({
      key: r.catGroup as string,
      label: subcatLabel(r.catGroup as string),
      description: SUBCAT_DESCRIPTIONS[r.catGroup as string] ?? "",
      count: r._count.id,
    }));

  const schemas = [
    breadcrumbSchema([
      { name: "Accueil", href: "/" },
      { name: "Nos Prestations", href: "/nos-soins" },
      { name: label, href: `/nos-soins/${category}` },
    ]),
  ];

  const totalServices = subcategories.reduce((s, c) => s + c.count, 0) + noGroupCount;

  return (
    <>
      <JsonLd schema={schemas} />
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
            <div className="flex items-center gap-2 mb-5 text-[11px] text-white/50">
              <Link href="/nos-soins" className="hover:text-white transition-colors">Nos Prestations</Link>
              <span>/</span>
              <span className="text-white/80">{label}</span>
            </div>
            <h1 className="text-white text-[36px] md:text-[52px] font-bold leading-[1.1] mb-4 max-w-[600px]">
              {label}
            </h1>
            <p className="text-white/60 text-[14px]">
              {totalServices} prestation{totalServices > 1 ? "s" : ""} · {subcategories.length} catégorie{subcategories.length > 1 ? "s" : ""}
            </p>
          </div>
        </section>

        {/* ── INTRO SEO ────────────────────────────────────────────────── */}
        {content && (
          <section className="bg-white border-b border-[#f0f0f0]">
            <div className="max-w-[1300px] mx-auto px-6 md:px-10 py-14">
              <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-[#6D071A] mb-4">
                    À propos
                  </p>
                  <h2 className="text-[22px] md:text-[28px] font-bold text-[#1C1C1C] leading-[1.25] mb-5">
                    {label} — <span className="text-[#6D071A]">ce qu&apos;il faut savoir</span>
                  </h2>
                  <p className="text-[14px] md:text-[15px] text-[#555] leading-[1.8]">
                    {content.intro.description}
                  </p>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  {content.intro.highlights.map((h) => (
                    <div key={h.label} className="bg-[#faf8f6] border border-[#ebebeb] p-5 text-center">
                      <p className="text-[22px] md:text-[26px] font-bold text-[#6D071A] leading-none mb-2">{h.value}</p>
                      <p className="text-[11px] text-[#888] uppercase tracking-[0.15em] leading-tight">{h.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ── GRILLE SOUS-CATÉGORIES ───────────────────────────────────── */}
        <section className="max-w-[1300px] mx-auto px-6 md:px-10 py-14">
          <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#6D071A] mb-3">
            Choisissez une catégorie
          </p>
          <h2 className="text-[26px] md:text-[32px] font-bold text-[#1a1a1a] mb-10 leading-tight">
            Nos {label.toLowerCase()}
          </h2>

          {subcategories.length === 0 ? (
            <p className="text-[#999] text-sm py-10">Aucune prestation disponible pour le moment.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
              {subcategories.map((sub, i) => (
                <Link
                  key={sub.key}
                  href={`/nos-soins/${category}/${sub.key}`}
                  className="group bg-white border border-[#e8e8e8] hover:border-[#6D071A]/40 hover:shadow-[0_6px_32px_rgba(109,7,26,0.10)] transition-all duration-300 overflow-hidden"
                >
                  {/* Image zone */}
                  <div className="relative h-[180px] bg-gradient-to-br from-[#f5e8ea] to-[#e0c8cc] overflow-hidden">
                    {fallbackImg && (
                      <Image
                        src={fallbackImg}
                        alt={sub.label}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover group-hover:scale-[1.05] transition-transform duration-500 opacity-70"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                    {/* Numéro */}
                    <span className="absolute top-3 left-3 w-7 h-7 bg-[#6D071A] text-white text-[11px] font-bold flex items-center justify-center">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {/* Badge count */}
                    <span className="absolute top-3 right-3 bg-black/50 text-white text-[10px] font-bold px-2 py-0.5">
                      {sub.count} soin{sub.count > 1 ? "s" : ""}
                    </span>
                  </div>

                  {/* Contenu */}
                  <div className="px-5 py-4">
                    <p className="text-[16px] font-bold text-[#1a1a1a] group-hover:text-[#6D071A] transition-colors mb-1.5 leading-tight">
                      {sub.label}
                    </p>
                    {sub.description && (
                      <p className="text-[12.5px] text-[#777] leading-[1.6] line-clamp-2 mb-3">
                        {sub.description}
                      </p>
                    )}
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#bbb]">
                        Voir les soins
                      </span>
                      <span className="text-[#6D071A] group-hover:translate-x-1 transition-transform duration-200 font-bold">
                        →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </section>

        {/* ── BIENFAITS ────────────────────────────────────────────────── */}
        {content && content.benefits.length > 0 && (
          <section className="bg-white py-16 border-t border-[#f0f0f0]">
            <div className="max-w-[1300px] mx-auto px-6 md:px-10">
              <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-[#6D071A] mb-3">
                Pourquoi nous choisir
              </p>
              <h2 className="text-[22px] md:text-[28px] font-bold text-[#1C1C1C] mb-10 leading-tight">
                Les bienfaits de nos <span className="text-[#6D071A]">{label.toLowerCase()}</span>
              </h2>
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
              <p className="text-[10px] uppercase tracking-[0.3em] text-white/50 mb-2">Vous hésitez ?</p>
              <p className="text-white font-bold text-xl leading-tight">Prenez rendez-vous — consultation offerte</p>
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
