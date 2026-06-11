import type { MetadataRoute } from "next";
import { services } from "@/data/services";
import { SITE } from "@/lib/seo";
import { MAIN_CATEGORIES } from "./nos-soins/config";
import { prisma } from "@/lib/prisma";

export const revalidate = 3600; // régénéré au plus toutes les heures

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: SITE.url, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${SITE.url}/nos-soins`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE.url}/menu`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE.url}/tarifs`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE.url}/a-propos`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE.url}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE.url}/epilation-electrolyse-cotonou`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
  ];

  // Pages catégories principales /nos-soins/[category]
  const categoryPages: MetadataRoute.Sitemap = MAIN_CATEGORIES.map((cat) => ({
    url: `${SITE.url}/nos-soins/${cat}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.85,
  }));

  // Services + sous-catégories depuis la base de données
  let dbServicePages: MetadataRoute.Sitemap = [];
  let subcategoryPages: MetadataRoute.Sitemap = [];
  const dbSlugs = new Set<string>();
  try {
    const dbServices = await prisma.service.findMany({
      where: { active: true },
      select: { slug: true, category: true, catGroup: true, updatedAt: true },
    });

    dbServicePages = dbServices.map((s) => {
      dbSlugs.add(s.slug);
      return {
        url: `${SITE.url}/soins/${s.slug}`,
        lastModified: s.updatedAt,
        changeFrequency: "monthly" as const,
        priority: 0.75,
      };
    });

    // Pages sous-catégories /nos-soins/[category]/[subcategory]
    const groups = new Map<string, Date>();
    for (const s of dbServices) {
      if (!s.catGroup || !MAIN_CATEGORIES.includes(s.category)) continue;
      const key = `${s.category}/${s.catGroup}`;
      const prev = groups.get(key);
      if (!prev || s.updatedAt > prev) groups.set(key, s.updatedAt);
    }
    subcategoryPages = [...groups.entries()].map(([path, lastModified]) => ({
      url: `${SITE.url}/nos-soins/${path}`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    }));
  } catch {
    // DB indisponible — on retombe sur les services statiques uniquement
  }

  // Services statiques non déjà couverts par la DB
  const staticServicePages: MetadataRoute.Sitemap = services
    .filter((s) => !dbSlugs.has(s.slug))
    .map((s) => ({
      url: `${SITE.url}/soins/${s.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.75,
    }));

  return [...staticPages, ...categoryPages, ...subcategoryPages, ...dbServicePages, ...staticServicePages];
}
