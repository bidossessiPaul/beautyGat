import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Menu des prestations",
  description:
    "Toutes les prestations d'Academy Beauty Gate Cotonou — soins du visage, épilation, massages, maquillage, onglerie, duo & enfants. Tarifs en FCFA.",
  path: "/menu",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
