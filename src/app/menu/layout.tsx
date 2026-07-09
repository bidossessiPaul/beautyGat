import type { Metadata } from "next";
import { buildMetadata, breadcrumbSchema } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";

export const metadata: Metadata = buildMetadata({
  title: "Menu des prestations",
  description:
    "Toutes les prestations d'Academy Beauty Gate Cotonou — soins du visage, épilation, massages, maquillage, onglerie, duo & enfants. Tarifs en FCFA.",
  path: "/menu",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd schema={breadcrumbSchema([
        { name: "Accueil", href: "/" },
        { name: "Menu des prestations", href: "/menu" },
      ])} />
      {children}
    </>
  );
}
