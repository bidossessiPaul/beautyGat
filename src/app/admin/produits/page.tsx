import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { AdminShell } from "@/components/admin/AdminShell";
import { DeleteProductButton } from "./DeleteProductButton";

export const dynamic = "force-dynamic";

function formatPrice(n: number) {
  return n.toLocaleString("fr-FR") + " FCFA";
}

export default async function AdminProduits() {
  let products: import("@prisma/client").Product[] = [];
  let dbError = false;
  try {
    products = await prisma.product.findMany({ orderBy: { createdAt: "desc" } });
  } catch (err) {
    console.error("[admin/produits] DB error:", err);
    dbError = true;
  }

  return (
    <AdminShell>
      <div className="px-8 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-[22px] font-bold text-[#1a1a1a]">Produits</h1>
            <p className="text-[13px] text-[#999] mt-0.5">
              {products.length} produit{products.length !== 1 ? "s" : ""} en boutique
            </p>
          </div>
          <Link
            href="/admin/produits/nouveau"
            className="flex items-center gap-2 bg-[#6D071A] text-white text-[13px] font-semibold px-4 py-2.5 hover:bg-black transition-colors"
          >
            <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
              <path fillRule="evenodd" d="M10 3a1 1 0 0 1 1 1v5h5a1 1 0 1 1 0 2h-5v5a1 1 0 1 1-2 0v-5H4a1 1 0 1 1 0-2h5V4a1 1 0 0 1 1-1z" clipRule="evenodd" />
            </svg>
            Nouveau produit
          </Link>
        </div>

        {dbError && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-5 py-4 mb-6 text-[13px]">
            <strong>Erreur de connexion.</strong> Vérifiez{" "}
            <code className="bg-red-100 px-1 font-mono">DATABASE_URL</code>.
          </div>
        )}

        <div className="bg-white border border-[#e8e8e8]">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[#f0f0f0]">
                {["Produit", "Catégorie", "Prix", "Stock", "Statut", ""].map((h) => (
                  <th key={h} className="text-left px-5 py-3 text-[11px] font-bold uppercase tracking-wider text-[#999]">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-[#f9f9f9]">
              {products.map((product) => (
                <tr key={product.id} className="hover:bg-[#fafafa] transition-colors">
                  <td className="px-5 py-3.5">
                    <p className="text-[13px] font-semibold text-[#1a1a1a]">{product.name}</p>
                    <p className="text-[11px] font-mono text-[#999]">{product.slug}</p>
                  </td>
                  <td className="px-5 py-3.5 text-[13px] text-[#666]">{product.categoryLabel}</td>
                  <td className="px-5 py-3.5">
                    <p className="text-[13px] font-bold text-[#1a1a1a]">{formatPrice(product.price)}</p>
                    {product.comparePrice && (
                      <p className="text-[11px] text-[#999] line-through">{formatPrice(product.comparePrice)}</p>
                    )}
                  </td>
                  <td className="px-5 py-3.5">
                    <span className={`text-[13px] font-semibold ${product.stock > 0 ? "text-emerald-600" : "text-red-500"}`}>
                      {product.stock}
                    </span>
                  </td>
                  <td className="px-5 py-3.5">
                    <span
                      className={`text-[11px] font-semibold uppercase px-2.5 py-1 rounded-full ${
                        product.active
                          ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                          : "bg-gray-100 text-gray-500 border border-gray-200"
                      }`}
                    >
                      {product.active ? "Actif" : "Inactif"}
                    </span>
                  </td>
                  <td className="px-5 py-3.5">
                    <div className="flex items-center gap-2 justify-end">
                      <Link
                        href={`/admin/produits/${product.id}/modifier`}
                        className="text-[12px] font-medium text-[#555] hover:text-[#6D071A] transition-colors px-3 py-1.5 border border-[#e8e8e8] hover:border-[#6D071A]"
                      >
                        Modifier
                      </Link>
                      <DeleteProductButton id={product.id} name={product.name} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {products.length === 0 && !dbError && (
            <div className="px-6 py-14 text-center text-[#999] text-[14px]">
              Aucun produit. <Link href="/admin/produits/nouveau" className="text-[#6D071A] hover:underline">Créer le premier</Link>
            </div>
          )}
        </div>
      </div>
    </AdminShell>
  );
}
