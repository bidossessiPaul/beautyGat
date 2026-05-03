import { notFound } from "next/navigation";
import Image from "next/image";
import type { Metadata } from "next";
import { getProductBySlug, products } from "@/data/products";
import { AddToCart } from "@/components/shop/AddToCart";
import { Header } from "@/components/Header";
import { ContactFooter } from "@/components/ContactFooter";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/shop/ProductCard";

function formatPrice(n: number) {
  return n.toLocaleString("fr-FR") + " FCFA";
}

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};
  return {
    title: `${product.name} — Academy Beauty Gate`,
    description: product.shortDescription,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const hasDiscount = product.comparePrice && product.comparePrice > product.price;
  const discountPct = hasDiscount
    ? Math.round((1 - product.price / product.comparePrice!) * 100)
    : 0;

  return (
    <>
    <Header />
    <main className="pt-[90px] min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-[#fafafa] border-b border-[#f0f0f0] py-3">
        <div className="max-w-[1300px] mx-auto px-6 md:px-10 text-[12px] text-[#999] flex gap-2">
          <a href="/boutique" className="hover:text-black transition-colors">Boutique</a>
          <span>/</span>
          <span className="text-black">{product.name}</span>
        </div>
      </div>

      {/* Détail produit */}
      <section className="max-w-[1300px] mx-auto px-6 md:px-10 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">

          {/* Image */}
          <div className="relative aspect-square overflow-hidden bg-[#f8f6f3]">
            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              priority
            />
            {product.badge && (
              <span className="absolute top-4 left-4 bg-[#6D071A] text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5">
                {product.badge}
              </span>
            )}
          </div>

          {/* Infos */}
          <div className="flex flex-col justify-center">
            <p className="text-[11px] uppercase tracking-[3px] text-[#6D071A] font-bold mb-3">
              {product.categoryLabel}
            </p>
            <h1 className="text-[30px] md:text-[38px] font-bold text-black leading-tight mb-4">
              {product.name}
            </h1>
            <p className="text-[15px] text-[#666] leading-relaxed mb-6">
              {product.shortDescription}
            </p>

            {/* Prix */}
            <div className="flex items-baseline gap-3 mb-8">
              <span className="text-[28px] font-bold text-black">{formatPrice(product.price)}</span>
              {hasDiscount && (
                <>
                  <span className="text-[18px] text-[#999] line-through">{formatPrice(product.comparePrice!)}</span>
                  <span className="text-[12px] font-bold text-white bg-[#6D071A] px-2 py-0.5">-{discountPct}%</span>
                </>
              )}
            </div>

            {/* Stock */}
            <p className={`text-[12px] font-semibold mb-6 ${product.stock > 0 ? "text-green-600" : "text-red-500"}`}>
              {product.stock > 0 ? `✓ En stock (${product.stock} disponibles)` : "✗ Rupture de stock"}
            </p>

            <AddToCart product={product} className="self-start px-10 py-4 text-[12px]" />

            {/* Description */}
            <div className="mt-10 pt-8 border-t border-[#f0f0f0] space-y-6">
              <div>
                <h2 className="text-[13px] font-bold uppercase tracking-wider text-black mb-3">Description</h2>
                <p className="text-[14px] text-[#555] leading-relaxed">{product.description}</p>
              </div>
              {product.howToUse && (
                <div>
                  <h2 className="text-[13px] font-bold uppercase tracking-wider text-black mb-3">Mode d&apos;emploi</h2>
                  <p className="text-[14px] text-[#555] leading-relaxed">{product.howToUse}</p>
                </div>
              )}
              {product.ingredients && (
                <div>
                  <h2 className="text-[13px] font-bold uppercase tracking-wider text-black mb-3">Ingrédients</h2>
                  <p className="text-[12px] text-[#999] leading-relaxed">{product.ingredients}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Produits similaires */}
      {related.length > 0 && (
        <section className="bg-[#fafafa] py-14">
          <div className="max-w-[1300px] mx-auto px-6 md:px-10">
            <h2 className="text-[22px] font-bold text-black mb-8">Vous pourriez aussi aimer</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
    <ContactFooter />
    <Footer />
    </>
  );
}
