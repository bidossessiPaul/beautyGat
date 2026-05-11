import Link from "next/link";
import { AdminShell } from "@/components/admin/AdminShell";
import { ProductForm } from "../ProductForm";

export default function NouveauProduit() {
  return (
    <AdminShell>
      <div className="px-4 py-5 sm:px-6 sm:py-6 md:px-8 md:py-8">
        <div className="flex items-center gap-3 mb-8">
          <Link href="/admin/produits" className="text-[13px] text-[#999] hover:text-black">← Produits</Link>
          <span className="text-[#ddd]">/</span>
          <h1 className="text-[20px] md:text-[22px] font-bold text-[#1a1a1a]">Nouveau produit</h1>
        </div>
        <div className="bg-white border border-[#e8e8e8] p-6 md:p-8">
          <ProductForm />
        </div>
      </div>
    </AdminShell>
  );
}
