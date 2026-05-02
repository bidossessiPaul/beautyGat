import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/seo";
import { Header } from "@/components/Header";

export const metadata: Metadata = buildMetadata({
  title: "Institut de beauté & médecine esthétique",
  description:
    "Academy Beauty Gate, l'institut de référence à Cotonou pour l'épilation laser, les soins du visage, les massages, la coiffure et la médecine esthétique. Plus de 175 avis 5 étoiles.",
  path: "",
});
import { HeroSlider } from "@/components/HeroSlider";
import { AboutSection } from "@/components/AboutSection";
import { StatsSection } from "@/components/StatsSection";
import { ServicesByCategory } from "@/components/ServicesByCategory";
import { IntroSection } from "@/components/IntroSection";
import { SeoTextBlock } from "@/components/SeoTextBlock";
import { ReviewsSection } from "@/components/ReviewsSection";
import { CTASection } from "@/components/CTASection";
import { GeoSeoSection2 } from "@/components/GeoSeoSection2";
import { InstagramReels } from "@/components/InstagramReels";
import { FaqSection } from "@/components/FaqSection";
import { ContactFooter } from "@/components/ContactFooter";
import { Footer } from "@/components/Footer";
import { FloatingContact } from "@/components/FloatingContact";


export default function Home() {
  return (
    <>
      <JsonLd schema={breadcrumbSchema([{ name: "Accueil", href: "/" }])} />
      <Header />
      <main>
        <HeroSlider />
        <AboutSection />
        <StatsSection />
        <ServicesByCategory />
        <SeoTextBlock />
        <CTASection />
        <IntroSection />
        <GeoSeoSection2 />
        <InstagramReels />
        <ReviewsSection />
        <FaqSection />
      </main>
      <ContactFooter />
      <Footer />
      <FloatingContact />
    </>
  );
}
