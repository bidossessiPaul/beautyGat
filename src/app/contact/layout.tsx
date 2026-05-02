import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Contact & réservation",
  description:
    "Prenez rendez-vous à Academy Beauty Gate, Cadjehoun, Cotonou. Contactez-nous par WhatsApp, téléphone ou formulaire. Ouvert lundi–vendredi 8h–20h, samedi 9h–18h.",
  path: "/contact",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
