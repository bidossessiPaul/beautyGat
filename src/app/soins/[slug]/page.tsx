import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingContact } from "@/components/FloatingContact";
import { ServicePageTemplate } from "@/components/ServicePageTemplate";
import { JsonLd } from "@/components/JsonLd";
import { services, getServiceBySlug } from "@/data/services";
import { buildMetadata, serviceSchema, faqSchema, breadcrumbSchema, CATEGORY_FALLBACK_FOR_META } from "@/lib/seo";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
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
  const service = getServiceBySlug(slug);
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
    faqSchema(service.faq),
    breadcrumbSchema([
      { name: "Accueil", href: "/" },
      { name: "Nos soins", href: "/menu" },
      { name: service.hero.headline, href: `/soins/${service.slug}` },
    ]),
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
