import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Nos tarifs",
  description:
    "Consultez tous les tarifs des prestations d'Academy Beauty Gate à Cotonou — soins du visage, épilation, massages, coiffure, maquillage. Tarifs en FCFA, consultation gratuite.",
  path: "/tarifs",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
