import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Prendre rendez-vous",
  description:
    "Réservez votre soin en ligne à Academy Beauty Gate Cotonou — sélectionnez votre prestation, choisissez une date et un créneau. Diagnostic de peau offert avant tout protocole.",
  path: "/rendez-vous",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
