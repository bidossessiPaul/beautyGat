import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingContact } from "@/components/FloatingContact";
import { JsonLd } from "@/components/JsonLd";
import { prisma } from "@/lib/prisma";
import { buildMetadata, breadcrumbSchema, itemListSchema } from "@/lib/seo";
import { CATEGORY_LABELS, CATEGORY_FALLBACK_IMAGES } from "../../config";
import { SUBCAT_IMAGE_SETS } from "@/data/subcategoryImages";

export const revalidate = 60;

interface Props {
  params: Promise<{ category: string; subcategory: string }>;
}

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
  "gommage":           "Gommage & Corps",
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
  "cure-soin":         "Cure Soin",
  "dermaplaning":      "Dermaplaning",
  "soin-anti-age":     "Soin Anti-Âge",
  "soin-peaux-imperfections": "Soin Peaux & Imperfections",
  "soin-desincrustation":     "Soin Désincrustration",
  "nettoyage-express":        "Nettoyage Express",
};
const subcatLabel = (key: string) =>
  SUBCAT_LABELS[key] ?? key.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase());

const SUBCAT_DESCRIPTIONS: Record<string, string> = {
  "soin-classique":    "Nos soins classiques du visage pour prendre soin de votre peau au quotidien — nettoyage, hydratation, anti-âge et éclat.",
  "soin-avance":       "Des protocoles avancés pour des résultats visibles en profondeur — peelings chimiques, techniques de régénération cellulaire et plus.",
  "peeling":           "Nos peelings professionnels exfolient en profondeur pour révéler une peau neuve, lumineuse et unifiée.",
  "microneedling":     "Le microneedling stimule la production de collagène pour régénérer la peau, réduire les cicatrices et améliorer la texture cutanée.",
  "microdermabrasion": "Une exfoliation mécanique profonde et douce pour des peaux plus lisses, des pores affinés et un teint lumineux.",
  "oxygenation":       "L'oxygénation profonde revitalise la peau, apporte éclat et hydratation et améliore la circulation cutanée.",
  "hydra-facial":      "Le Hydrafacial nettoie, exfolie et hydrate en profondeur en une seule séance pour une peau immédiatement transformée.",
  "traitements":       "Traitements ciblés pour éliminer les acrocordons et verrues par cryothérapie ou électrocoagulation.",
  "epilation":         "Épilation à la cire pour une peau lisse et nette — toutes zones du corps et du visage.",
  "massage":           "Des massages thérapeutiques et relaxants pour libérer les tensions, améliorer la circulation et procurer un bien-être profond.",
  "gommage":           "Gommage corps et enveloppements hydratants pour une peau douce, nourrie et régénérée.",
  "manucure":          "Manucure professionnelle, semi-permanent, gel, capsules et nail art — des ongles parfaits qui durent.",
  "pedicure":          "Pédicure complète pour des pieds soignés, hydratés et impeccables en toutes circonstances.",
  "manucure-pedicure": "Forfaits complets manucure et pédicure pour prendre soin de vos mains et pieds en une seule séance.",
  "visio":             "Consultez nos expertes à distance par vidéo — diagnostic de peau et conseils sur-mesure depuis chez vous.",
  "presentiel":             "Rencontrez nos expertes en cabinet pour un diagnostic approfondi de votre peau et un plan de traitement personnalisé.",
  "formation-modulaire":    "Formez-vous aux techniques esthétiques module par module, à votre rythme. Chaque module validé donne lieu à une attestation professionnelle.",
  "formation-perfectionnement": "Une formation intensive pour les esthéticiennes déjà en exercice souhaitant maîtriser les techniques avancées et se mettre à jour sur les dernières innovations.",
  "formation-complete":     "La voie royale pour devenir esthéticienne professionnelle : soins visage, épilation, ongles, massages, corps et plus. Diplôme Academy Beauty Gate délivré en fin de parcours.",
};

export async function generateMetadata({ params }: Props) {
  const { category, subcategory } = await params;
  const cat = await prisma.serviceCategory.findUnique({ where: { key: category } });
  const catLabel = cat?.label ?? CATEGORY_LABELS[category] ?? category;
  const subLabel = subcatLabel(subcategory);
  return buildMetadata({
    title: `${subLabel} à Cotonou — ${catLabel}`,
    description: `${subLabel} à Cotonou Cadjehoun — découvrez nos soins et tarifs. Academy Beauty Gate, Bénin.`,
    path: `/nos-soins/${category}/${subcategory}`,
  });
}

export default async function SubcategoryPage({ params }: Props) {
  const { category, subcategory } = await params;

  if (!CATEGORY_LABELS[category]) notFound();

  const dbCategory = await prisma.serviceCategory.findUnique({ where: { key: category } });
  const catLabel = dbCategory?.label ?? CATEGORY_LABELS[category] ?? category;
  const subLabel = subcatLabel(subcategory);
  const fallbackImg = dbCategory?.image ?? CATEGORY_FALLBACK_IMAGES[category] ?? null;

  // Jeu d'images dédié à la sous-catégorie (mêmes visuels que les pages détail).
  const imgSet = SUBCAT_IMAGE_SETS[subcategory] ?? null;
  const heroImg = imgSet?.hero ?? fallbackImg;
  // Visuels portrait alternés sur les cartes de services (les cartes sont en 3:4).
  const cardImages = imgSet ? [imgSet.intro, imgSet.forWho, imgSet.steps, ...(imgSet.extras ?? [])] : null;

  // Services de cette sous-catégorie
  const services = await prisma.service.findMany({
    where: { category, catGroup: subcategory, active: true },
    orderBy: [{ sortOrder: "asc" }, { createdAt: "desc" }],
    select: { slug: true, title: true, hero: true, pricing: true, metaDescription: true },
  });

  if (services.length === 0) notFound();

  const schemas = [
    breadcrumbSchema([
      { name: "Accueil", href: "/" },
      { name: "Nos Prestations", href: "/nos-soins" },
      { name: catLabel, href: `/nos-soins/${category}` },
      { name: subLabel, href: `/nos-soins/${category}/${subcategory}` },
    ]),
    itemListSchema(
      services.map((s) => {
        const hero = s.hero as { image?: string; headline?: string } | null;
        const pricing = s.pricing as { items?: { label: string; price: string }[] } | null;
        return {
          name: hero?.headline || s.title,
          url: `/soins/${s.slug}`,
          description: pricing?.items?.[0]?.price ? `À partir de ${pricing.items[0].price}` : undefined,
          image: hero?.image || fallbackImg || undefined,
        };
      })
    ),
  ];

  const description = SUBCAT_DESCRIPTIONS[subcategory] ?? `Découvrez nos soins ${subLabel.toLowerCase()} à Cotonou — Academy Beauty Gate, Cadjehoun, Bénin.`;

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
              backgroundImage: `url('${heroImg ?? "/images/Appart-beaute-accueil-philosophie-1-scaled.jpg"}')`,
              backgroundSize: "cover",
              backgroundPosition: "center 30%",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
          <div className="relative z-10 max-w-[1300px] mx-auto px-6 md:px-10 py-20 md:py-28">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 mb-5 text-[11px] text-white/50 flex-wrap">
              <Link href="/nos-soins" className="hover:text-white transition-colors">Nos Prestations</Link>
              <span>/</span>
              <Link href={`/nos-soins/${category}`} className="hover:text-white transition-colors">{catLabel}</Link>
              <span>/</span>
              <span className="text-white/80">{subLabel}</span>
            </div>
            <h1 className="text-white text-[36px] md:text-[52px] font-bold leading-[1.1] mb-4 max-w-[600px]">
              {subLabel}
            </h1>
            <p className="text-white/60 text-[14px]">
              {services.length} soin{services.length > 1 ? "s" : ""} disponible{services.length > 1 ? "s" : ""}
            </p>
          </div>
        </section>

        {/* ── INTRO SEO ────────────────────────────────────────────────── */}
        <section className="bg-white border-b border-[#f0f0f0]">
          <div className="max-w-[1300px] mx-auto px-6 md:px-10 py-12">
            <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-[#6D071A] mb-3">
              {catLabel} · {subLabel}
            </p>
            <p className="text-[15px] md:text-[16px] text-[#555] leading-[1.9] max-w-[700px]">
              {description}
            </p>
          </div>
        </section>

        {/* ── GRILLE SERVICES ──────────────────────────────────────────── */}
        <section className="max-w-[1300px] mx-auto px-6 md:px-10 py-14">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
            {services.map((s, si) => {
              const hero = s.hero as { image?: string; headline?: string; imageAlt?: string } | null;
              const pricing = s.pricing as { items?: { label: string; price: string }[] } | null;
              // Visuel de la sous-catégorie (alterné) prioritaire sur l'image générique du service
              const universal = cardImages ? cardImages[si % cardImages.length] : null;
              const img = universal || hero?.image || fallbackImg;
              const firstPrice = pricing?.items?.[0]?.price ?? null;
              const title = hero?.headline || s.title;

              return (
                <Link
                  key={s.slug}
                  href={`/soins/${s.slug}`}
                  className="group relative overflow-hidden bg-[#1a1a1a] flex flex-col"
                  style={{ aspectRatio: "3/4" }}
                >
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

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                  <div className="absolute inset-0 bg-[#6D071A]/0 group-hover:bg-[#6D071A]/20 transition-colors duration-500" />

                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    {firstPrice && (
                      <span className="inline-block text-[10px] font-bold uppercase tracking-[0.15em] text-[#f0b8b8] mb-2">
                        {firstPrice}
                      </span>
                    )}
                    <p className="text-white font-semibold text-[13px] leading-[1.4] line-clamp-2 mb-3">
                      {title}
                    </p>
                    <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.15em] text-white/0 group-hover:text-white transition-all duration-300 translate-y-1 group-hover:translate-y-0">
                      <span>Découvrir</span>
                      <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

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
