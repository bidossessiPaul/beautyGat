import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingContact } from "@/components/FloatingContact";
import { EpilationLaserPage } from "@/components/pages/EpilationLaserPage";

export const metadata = {
  title: "Épilation Laser à Cotonou — Academy Beauty Gate",
  description: "Épilation laser définitive à Cotonou au Bénin. Academy Beauty Gate propose des séances d'épilation laser adaptées à tous types de peau, pour hommes et femmes à Cadjehoun.",
};

export default function Page() {
  return (
    <>
      <Header />
      <EpilationLaserPage />
      <Footer />
      <FloatingContact />
    </>
  );
}
