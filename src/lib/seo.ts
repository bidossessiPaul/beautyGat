import type { Metadata } from "next";

export const SITE = {
  name: "Academy Beauty Gate",
  url: "https://www.academybeautygatee.com",
  tagline: "Espace de bien-être, de beauté et de formation & esthétique avancée — Cotonou, Bénin",
  description:
    "Academy Beauty Gate, institut de beauté de référence à Cotonou : soins visage, épilation, massages, manucure et formation esthétique. +175 avis 5 étoiles.",
  locale: "fr_BJ",
  address: {
    street: "Cadjehoun",
    city: "Cotonou",
    region: "Littoral",
    countryCode: "BJ",
  },
  phone: "+2290168411111",
  email: "contact@academybeautygatee.com",
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
    // Le template "%s | Academy Beauty Gate Cotonou" du layout ajoute déjà le suffixe
    title,
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
    hasMap: "https://share.google/P6kXGkOHF6M5iTHk8",
    sameAs: [
      "https://www.facebook.com/beautygateofficiel/",
      "https://www.instagram.com/beautygateofficiel/",
      "https://www.tiktok.com/@beautygateofficiel",
      "https://share.google/P6kXGkOHF6M5iTHk8",
      "https://www.goafricaonline.com/bj/1182720-academy-beauty-gate",
      "https://www.anensaa.com/fr/academy-beauty-gate",
      "https://wa.me/2290168411111",
    ],
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
  ratingValue?: string;
  reviewCount?: string;
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
    aggregateRating: opts.ratingValue
      ? {
          "@type": "AggregateRating",
          ratingValue: opts.ratingValue,
          reviewCount: opts.reviewCount ?? "1",
          bestRating: "5",
        }
      : undefined,
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

export function articleSchema(opts: {
  slug: string;
  headline: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${SITE.url}/blog/${opts.slug}/#article`,
    headline: opts.headline,
    description: opts.description,
    image: `${SITE.url}${opts.image}`,
    url: `${SITE.url}/blog/${opts.slug}`,
    datePublished: opts.datePublished,
    dateModified: opts.dateModified,
    inLanguage: "fr",
    author: { "@id": `${SITE.url}/#business` },
    publisher: { "@id": `${SITE.url}/#business` },
    mainEntityOfPage: `${SITE.url}/blog/${opts.slug}`,
  };
}

export function howToSchema(opts: {
  name: string;
  description: string;
  url: string;
  image?: string;
  steps: { title: string; description: string }[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: `Les étapes du soin ${opts.name}`,
    description: opts.description,
    url: opts.url,
    ...(opts.image && { image: `${SITE.url}${opts.image}` }),
    step: opts.steps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.title,
      text: s.description,
    })),
  };
}

export function personSchema(opts: {
  name: string;
  jobTitle: string;
  description: string;
  image?: string;
  url?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: opts.name,
    jobTitle: opts.jobTitle,
    description: opts.description,
    ...(opts.image && { image: `${SITE.url}${opts.image}` }),
    ...(opts.url && { url: `${SITE.url}${opts.url}` }),
    worksFor: { "@id": `${SITE.url}/#business` },
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
