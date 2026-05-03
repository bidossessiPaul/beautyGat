import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Boutique Beauté — Academy Beauty Gate Cotonou",
  description:
    "Découvrez notre sélection de soins visage et corps, coffrets cadeaux et accessoires beauté. Livraison à Cotonou.",
};

export default function BoutiqueLayout({ children }: { children: React.ReactNode }) {
  return children;
}
