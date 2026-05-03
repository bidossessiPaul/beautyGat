import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { DeleteProductButton } from "./DeleteProductButton";

export const dynamic = "force-dynamic";

function formatPrice(n: number) {
  return n.toLocaleString("fr-FR") + " FCFA";
}

export default async function AdminProduits() {
  const products = await prisma.product.findMany({ orderBy: { createdAt: "desc" } });

  return (
    <div className="min-h-screen bg-[#fafafa]">
      <header className="bg-white border-b border-[#f0f0f0] px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-[18px] font-bold text-black">Beauty Gate</span>
          <span className="text-[11px] uppercase tracking-wider bg-[#6D071A] text-white px-2 py-0.5 font-semibold">Admin</span>
        </div>
        <nav className="flex items-center gap-6 text-[13px] font-medium">
          <Link href="/admin/dashboard" className="text-[#555] hover:text-black transition-colors">Dashboard</Link>
          <Link href="/admin/produits" className="text-[#6D071A] font-semibold">Produits</Link>
          <Link href="/admin/commandes" className="text-[#555] hover:text-black transition-colors">Commandes</Link>
          <Link href="/" target="_blank" className="text-[#555] hover:text-black transition-colors">← Site</Link>
        </nav>
      </header>

      <main className="max-w-[1100px] mx-auto px-6 py-10">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-[24px] font-bold text-black">Produits ({products.length})</h1>
          <Link href="/admin/produits/nouveau" className="bg-[#6D071A] text-white text-[11px] font-bold uppercase tracking-widest px-6 py-3 hover:bg-black transition-colors">
            + Nouveau produit
          </Link>
        </div>

        <div className="bg-white border border-[#f0f0f0]">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#f0f0f0] bg-[#fafafa]">
                  <th className="text-left px-6 py-3 text-[11px] font-bold uppercase tracking-wider text-[#999]">Produit</th>
                  <th className="text-left px-6 py-3 text-[11px] font-bold uppercase tracking-wider text-[#999]">Catégorie</th>
                  <th className="text-left px-6 py-3 text-[11px] font-bold uppercase tracking-wider text-[#999]">Prix</th>
                  <th className="text-left px-6 py-3 text-[11px] font-bold uppercase tracking-wider text-[#999]">Stock</th>
                  <th className="text-left px-6 py-3 text-[11px] font-bold uppercase tracking-wider text-[#999]">Statut</th>
                  <th className="px-6 py-3"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#f0f0f0]">
                {products.map((product) => (
                  <tr key={product.id} className="hover:bg-[#fafafa] transition-colors">
                    <td className="px-6 py-4">
                      <p className="text-[14px] font-semibold text-black">{product.name}</p>
                      <p className="text-[12px] text-[#999]">{product.slug}</p>
                    </td>
                    <td className="px-6 py-4 text-[13px] text-[#555]">{product.categoryLabel}</td>
                    <td className="px-6 py-4">
                      <p className="text-[14px] font-bold text-black">{formatPrice(product.price)}</p>
                      {product.comparePrice && (
                        <p className="text-[12px] text-[#999] line-through">{formatPrice(product.comparePrice)}</p>
                      )}
                    </td>
                    <td className="px-6 py-4">
                      <span className={`text-[13px] font-semibold ${product.stock > 0 ? "text-green-600" : "text-red-500"}`}>
                        {product.stock}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`text-[11px] font-bold uppercase px-2.5 py-1 rounded-full ${product.active ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-500"}`}>
                        {product.active ? "Actif" : "Inactif"}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3 justify-end">
                        <Link href={`/admin/produits/${product.id}/modifier`} className="text-[12px] text-[#6D071A] font-semibold hover:underline">
                          Modifier
                        </Link>
                        <DeleteProductButton id={product.id} name={product.name} />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
