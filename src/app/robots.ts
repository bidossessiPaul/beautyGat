import type { MetadataRoute } from "next";
import { SITE } from "@/lib/seo";

// Crawlers IA autorisés explicitement (GEO — visibilité dans ChatGPT, Claude,
// Perplexity, Gemini et les AI Overviews de Google)
const AI_CRAWLERS = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-Web",
  "anthropic-ai",
  "PerplexityBot",
  "Google-Extended",
  "Applebot-Extended",
  "cohere-ai",
  "CCBot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/", "/admin"],
      },
      ...AI_CRAWLERS.map((bot) => ({
        userAgent: bot,
        allow: "/",
        disallow: ["/api/", "/admin"],
      })),
    ],
    sitemap: `${SITE.url}/sitemap.xml`,
    host: SITE.url,
  };
}
