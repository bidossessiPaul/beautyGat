import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingContact } from "@/components/FloatingContact";
import { ElectrolysePage } from "@/components/pages/ElectrolysePage";

export const metadata = {
  title: "Épilation par Électrolyse à Cotonou — Academy Beauty Gate",
  description: "L'épilation par électrolyse à Cotonou : la seule technique 100% définitive, poil par poil, adaptée à tous types de peau. Première consultation offerte à Academy Beauty Gate, Cadjehoun.",
};

export default function Page() {
  return (
    <>
      <Header />
      <ElectrolysePage />
      <Footer />
      <FloatingContact />
    </>
  );
}
