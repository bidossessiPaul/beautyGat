import type { Metadata } from "next";
import { buildMetadata, breadcrumbSchema, personSchema } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";

export const metadata: Metadata = buildMetadata({
  title: "À propos",
  description:
    "Découvrez l'histoire et les valeurs d'Academy Beauty Gate à Cotonou. Fondé par Sofia Aude HONVO, notre espace réunit une équipe de praticiens certifiés passionnés par la beauté africaine.",
  path: "/a-propos",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd schema={[
        breadcrumbSchema([
          { name: "Accueil", href: "/" },
          { name: "À propos", href: "/a-propos" },
        ]),
        personSchema({
          name: "Sofia Aude HONVO",
          jobTitle: "Fondatrice",
          description:
            "Fondatrice d'Academy Beauty Gate, institut de beauté de référence à Cotonou spécialisé dans l'esthétique avancée pour les peaux africaines et métissées.",
          image: "/beautygate/about-photo.jpg",
          url: "/a-propos",
        }),
      ]} />
      {children}
    </>
  );
}
