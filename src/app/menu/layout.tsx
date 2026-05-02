import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Menu des prestations",
  description:
    "Toutes les prestations d'Academy Beauty Gate Cotonou : 151 services répartis en 9 catégories. Soins visage, épilation, massages, coiffure, maquillage, onglerie. Tarifs en FCFA.",
  path: "/menu",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
