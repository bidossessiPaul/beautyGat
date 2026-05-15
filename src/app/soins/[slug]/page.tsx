import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingContact } from "@/components/FloatingContact";
import { ServicePageTemplate } from "@/components/ServicePageTemplate";
import { JsonLd } from "@/components/JsonLd";
import { services, getServiceBySlug, type ServiceData } from "@/data/services";
import { buildMetadata, serviceSchema, faqSchema, breadcrumbSchema, speakableSchema, CATEGORY_FALLBACK_FOR_META } from "@/lib/seo";
import { prisma } from "@/lib/prisma";

interface Props {
  params: Promise<{ slug: string }>;
}

/* Convert a DB Service record to the ServiceData shape the template expects */
function dbServiceToServiceData(s: {
  slug: string;
  title: string;
  metaDescription: string;
  category: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  hero: any; badges: any; intro: any; benefits: any; pricing: any; faq: any; cta: any;
}): ServiceData {
  return {
    slug: s.slug,
    title: s.title,
    metaDescription: s.metaDescription,
    category: s.category as ServiceData["category"],
    hero: {
      image: s.hero?.image || undefined,
      imageAlt: s.hero?.imageAlt ?? "",
      eyebrow: s.hero?.eyebrow ?? "",
      headline: s.hero?.headline ?? s.title,
      subheadline: s.hero?.subheadline ?? "",
      imagePosition: s.hero?.imagePosition ?? "center",
    },
    badges: Array.isArray(s.badges) ? s.badges : [],
    intro: {
      image: s.intro?.image || undefined,
      imageAlt: s.intro?.imageAlt ?? "",
      headline: s.intro?.headline ?? "",
      description: s.intro?.description ?? "",
      listItems: Array.isArray(s.intro?.listItems) ? s.intro.listItems : [],
    },
    benefits: Array.isArray(s.benefits) ? s.benefits : [],
    pricing: {
      headline: s.pricing?.headline ?? "",
      note: s.pricing?.note ?? "",
      items: Array.isArray(s.pricing?.items) ? s.pricing.items : [],
    },
    faq: Array.isArray(s.faq) ? s.faq : [],
    cta: {
      headline: s.cta?.headline ?? "",
      description: s.cta?.description ?? "",
    },
  };
}

async function getService(slug: string): Promise<ServiceData | null> {
  // Try DB first
  try {
    const dbService = await prisma.service.findUnique({
      where: { slug, active: true },
    });
    if (dbService) return dbServiceToServiceData(dbService);
  } catch {
    // DB unavailable — fall through to static
  }

  // Fall back to static data
  return getServiceBySlug(slug) ?? null;
}

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const service = await getService(slug);
  if (!service) return {};
  return buildMetadata({
    title: service.title,
    description: service.metaDescription,
    path: `/soins/${service.slug}`,
    image: service.hero.image ?? CATEGORY_FALLBACK_FOR_META[service.category],
  });
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const service = await getService(slug);
  if (!service) notFound();

  const schemas = [
    serviceSchema({
      slug: service.slug,
      name: service.hero.headline,
      description: service.metaDescription,
      category: service.hero.eyebrow,
      image: service.hero.image ?? CATEGORY_FALLBACK_FOR_META[service.category],
      priceRange: service.pricing.items[0]?.price,
    }),
    ...(service.faq.length > 0 ? [faqSchema(service.faq)] : []),
    breadcrumbSchema([
      { name: "Accueil", href: "/" },
      { name: "Nos soins", href: "/nos-soins" },
      { name: service.hero.headline, href: `/soins/${service.slug}` },
    ]),
    speakableSchema(["h1", ".service-intro-description", ".service-benefits"], `/soins/${service.slug}`),
  ];

  return (
    <>
      <JsonLd schema={schemas} />
      <Header />
      <ServicePageTemplate service={service} />
      <Footer />
      <FloatingContact />
    </>
  );
}
