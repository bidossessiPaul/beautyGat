import type { Metadata } from "next";
import { Montserrat, Outfit } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { JsonLd } from "@/components/JsonLd";
import { PageTransition } from "@/components/PageTransition";
import { localBusinessSchema, websiteSchema, SITE } from "@/lib/seo";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "500", "700"],
  display: "swap",
});

const tomatoGrotesk = localFont({
  src: [
    {
      path: "../../public/fonts/TomatoGrotesk-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/TomatoGrotesk-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-tomato-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Academy Beauty Gate Cotonou — Espace de bien-être, de beauté et de formation & esthétique avancée",
    template: "%s | Academy Beauty Gate Cotonou",
  },
  description: SITE.description,
  keywords: [
    "institut beauté Cotonou", "salon beauté Bénin", "épilation laser Cotonou",
    "soins visage Cotonou", "esthétique avancée Bénin", "massages Cotonou",
    "coiffure Cotonou", "maquillage Cotonou", "Academy Beauty Gate",
  ],
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  icons: {
    icon: [
      { url: "/seo/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/seo/icon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/seo/icon-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: { url: "/seo/apple-icon-180x180.png", sizes: "180x180", type: "image/png" },
    shortcut: "/seo/favicon-32x32.png",
  },
  openGraph: {
    title: "Academy Beauty Gate Cotonou — Espace de bien-être, de beauté et de formation & esthétique avancée",
    description: SITE.description,
    url: SITE.url,
    siteName: SITE.name,
    locale: SITE.locale,
    type: "website",
    images: [{ url: SITE.ogImage, width: 1200, height: 628, alt: "Academy Beauty Gate Cotonou" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Academy Beauty Gate Cotonou",
    description: SITE.description,
    images: [SITE.ogImage],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${montserrat.variable} ${outfit.variable} ${tomatoGrotesk.variable} antialiased`}
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <JsonLd schema={[localBusinessSchema(), websiteSchema()]} />
        <PageTransition />
        {children}
      </body>
    </html>
  );
}
