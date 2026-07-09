import type { Metadata } from "next";
import { buildMetadata, breadcrumbSchema } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";

export const metadata: Metadata = buildMetadata({
  title: "Contact & réservation",
  description:
    "Prenez rendez-vous à Academy Beauty Gate, Cadjehoun, Cotonou. Contactez-nous par WhatsApp, téléphone ou formulaire. Ouvert lundi–vendredi 8h–20h, samedi 9h–18h.",
  path: "/contact",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd schema={breadcrumbSchema([
        { name: "Accueil", href: "/" },
        { name: "Contact & réservation", href: "/contact" },
      ])} />
      {children}
    </>
  );
}
