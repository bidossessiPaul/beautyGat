import type { Metadata } from "next";

export const SITE = {
  name: "Academy Beauty Gate",
  url: "https://academybeautygate.com",
  tagline: "Espace de bien-être, de beauté et de formation & esthétique avancée — Cotonou, Bénin",
  description:
    "Academy Beauty Gate, l'espace de référence à Cotonou pour les soins du visage, l'électrolyse, les massages et l'esthétique avancée. Plus de 175 avis 5 étoiles.",
  locale: "fr_BJ",
  address: {
    street: "Cadjehoun",
    city: "Cotonou",
    region: "Littoral",
    countryCode: "BJ",
  },
  phone: "+2290168411111",
  email: "contact@academybeautygate.com",
  openingHours: ["Mo-Fr 08:00-20:00", "Sa 09:00-18:00"],
  geo: { lat: 6.3641, lng: 2.4219 },
  ogImage: "/seo/microneedling-appart-beaute-1200x628-cropped.png",
  logo: "/beautygate-logo.jpeg",
} as const;

export function buildMetadata(override: Partial<Metadata> & {
  title: string;
  description: string;
  path?: string;
  image?: string;
}): Metadata {
  const { title, description, path = "", image, ...rest } = override;
  const url = `${SITE.url}${path}`;
  const ogImage = image ?? SITE.ogImage;

  return {
    title: `${title} | Academy Beauty Gate Cotonou`,
    description,
    metadataBase: new URL(SITE.url),
    alternates: { canonical: url },
    openGraph: {
      title: `${title} | Academy Beauty Gate Cotonou`,
      description,
      url,
      siteName: SITE.name,
      locale: SITE.locale,
      type: "website",
      images: [{ url: ogImage, width: 1200, height: 628, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Academy Beauty Gate Cotonou`,
      description,
      images: [ogImage],
    },
    robots: { index: true, follow: true },
    ...rest,
  };
}

// Fallback image par catégorie — miroir de ServicePageTemplate CATEGORY_FALLBACK
export const CATEGORY_FALLBACK_FOR_META: Record<string, string> = {
  visage:           "/images/soins/hydrafacial/hero.jpg",
  corps:            "/images/soins/bodysculpt/hero.png",
  epilation:        "/images/epilation-laser/Appart-beaute-epilation-intro-1-scaled.jpg",
  "epilation-cire": "/images/epilation-laser/Appart-beaute-epilation-intro-1-scaled.jpg",
  injections:       "/images/soins/injection-hyaluronique/hero.jpg",
  diagnostic:       "/images/soins/diagnostic-peau/hero.jpg",
  "mains-pieds":    "/images/appart-beaute-3873920.jpg",
  massages:         "/images/Appart-beaute-accueil-philosophie-1-scaled.jpg",
  "duo-enfants":    "/images/dsc01280.jpg",
  privatisation:    "/images/dsc01308-scaled.jpg",
};

// ── JSON-LD builders ──────────────────────────────────────────────────────────

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "BeautySalon"],
    "@id": `${SITE.url}/#business`,
    name: SITE.name,
    description: SITE.description,
    url: SITE.url,
    telephone: SITE.phone,
    email: SITE.email,
    logo: `${SITE.url}${SITE.logo}`,
    image: `${SITE.url}${SITE.ogImage}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.region,
      addressCountry: SITE.address.countryCode,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE.geo.lat,
      longitude: SITE.geo.lng,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "20:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday"],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "175",
      bestRating: "5",
    },
    priceRange: "$$",
    currenciesAccepted: "XOF",
    areaServed: { "@type": "City", name: "Cotonou" },
    hasMap: `https://www.google.com/maps/search/Academy+Beauty+Gate+Cotonou`,
    sameAs: ["https://wa.me/2290168411111"],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE.url}/#website`,
    name: SITE.name,
    url: SITE.url,
    description: SITE.description,
    inLanguage: "fr",
    publisher: { "@id": `${SITE.url}/#business` },
  };
}

export function serviceSchema(opts: {
  slug: string;
  name: string;
  description: string;
  category: string;
  image?: string;
  priceRange?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE.url}/soins/${opts.slug}/#service`,
    name: opts.name,
    description: opts.description,
    serviceType: opts.category,
    url: `${SITE.url}/soins/${opts.slug}`,
    image: opts.image ? `${SITE.url}${opts.image}` : undefined,
    provider: { "@id": `${SITE.url}/#business` },
    areaServed: { "@type": "City", name: "Cotonou" },
    offers: opts.priceRange
      ? {
          "@type": "Offer",
          description: opts.priceRange,
          priceCurrency: "XOF",
          availability: "https://schema.org/InStock",
        }
      : undefined,
  };
}

export function faqSchema(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}

export function breadcrumbSchema(crumbs: { name: string; href: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: crumb.name,
      item: `${SITE.url}${crumb.href}`,
    })),
  };
}

export function itemListSchema(items: { name: string; url: string; description?: string; image?: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      url: `${SITE.url}${item.url}`,
      ...(item.description && { description: item.description }),
      ...(item.image && { image: `${SITE.url}${item.image}` }),
    })),
  };
}

export function speakableSchema(cssSelectors: string[], url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${SITE.url}${url}`,
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: cssSelectors,
    },
    url: `${SITE.url}${url}`,
  };
}
