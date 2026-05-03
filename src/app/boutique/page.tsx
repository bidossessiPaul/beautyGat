import { prisma } from "@/lib/prisma";
import { ProductsGrid } from "@/components/shop/ProductsGrid";
import { Header } from "@/components/Header";
import { ContactFooter } from "@/components/ContactFooter";
import { Footer } from "@/components/Footer";

export const dynamic = "force-dynamic";

export default async function BoutiquePage() {
  let products: import("@prisma/client").Product[] = [];
  try {
    products = await prisma.product.findMany({
      where: { active: true },
      orderBy: { createdAt: "desc" },
    });
  } catch (err) {
    console.error("[boutique] DB error:", err);
  }

  return (
    <>
      <Header />
      <main className="pt-[90px] min-h-screen bg-[#fafafa]">
        {/* Hero section */}
        <section className="bg-white border-b border-[#f0f0f0] py-14">
          <div className="max-w-[1300px] mx-auto px-6 md:px-10 text-center">
            <p className="text-[11px] font-bold uppercase tracking-[3px] text-[#6D071A] mb-3">
              Boutique
            </p>
            <h1 className="text-[32px] md:text-[48px] font-bold text-black mb-4">
              Nos Produits Beauté
            </h1>
            <p className="text-[15px] text-[#666] max-w-[520px] mx-auto leading-relaxed">
              Prolongez l&apos;expérience L.A Beauty chez vous avec notre sélection de soins professionnels.
            </p>
          </div>
        </section>

        {/* Grille produits avec filtres */}
        <section className="max-w-[1300px] mx-auto px-6 md:px-10 py-10 pb-20">
          <ProductsGrid products={products} />
        </section>
      </main>
      <ContactFooter />
      <Footer />
    </>
  );
}
