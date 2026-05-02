import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "À propos",
  description:
    "Découvrez l'histoire et les valeurs d'Academy Beauty Gate à Cotonou. Fondé par Sofia Aude HONVO, notre institut réunit une équipe de praticiens certifiés passionnés par la beauté africaine.",
  path: "/a-propos",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
