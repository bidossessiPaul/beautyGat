import type { Metadata } from "next";
import { buildMetadata, breadcrumbSchema } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";

export const metadata: Metadata = buildMetadata({
  title: "Nos tarifs",
  description:
    "Consultez tous les tarifs des prestations d'Academy Beauty Gate à Cotonou — soins du visage, épilation, massages, maquillage, onglerie. Tarifs en FCFA, consultation gratuite.",
  path: "/tarifs",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd schema={breadcrumbSchema([
        { name: "Accueil", href: "/" },
        { name: "Nos tarifs", href: "/tarifs" },
      ])} />
      {children}
    </>
  );
}
