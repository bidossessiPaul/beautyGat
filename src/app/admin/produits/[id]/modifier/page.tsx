import Link from "next/link";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { ProductForm } from "../../ProductForm";

export default async function ModifierProduit({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = await prisma.product.findUnique({ where: { id } });
  if (!product) notFound();

  return (
    <div className="min-h-screen bg-[#fafafa]">
      <header className="bg-white border-b border-[#f0f0f0] px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-[18px] font-bold text-black">Beauty Gate</span>
          <span className="text-[11px] uppercase tracking-wider bg-[#6D071A] text-white px-2 py-0.5 font-semibold">Admin</span>
        </div>
        <nav className="flex items-center gap-6 text-[13px] font-medium">
          <Link href="/admin/dashboard" className="text-[#555] hover:text-black">Dashboard</Link>
          <Link href="/admin/produits" className="text-[#6D071A] font-semibold">Produits</Link>
          <Link href="/admin/commandes" className="text-[#555] hover:text-black">Commandes</Link>
        </nav>
      </header>

      <main className="max-w-[1100px] mx-auto px-6 py-10">
        <div className="flex items-center gap-3 mb-8">
          <Link href="/admin/produits" className="text-[13px] text-[#999] hover:text-black">← Produits</Link>
          <span className="text-[#ddd]">/</span>
          <h1 className="text-[22px] font-bold text-black">Modifier : {product.name}</h1>
        </div>
        <div className="bg-white border border-[#f0f0f0] p-8">
          <ProductForm product={product} />
        </div>
      </main>
    </div>
  );
}
