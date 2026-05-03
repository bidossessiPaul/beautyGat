"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import type { Product } from "@prisma/client";

const CATEGORIES = [
  { value: "soins-visage", label: "Soins Visage" },
  { value: "soins-corps", label: "Soins Corps" },
  { value: "coffrets", label: "Coffrets Cadeaux" },
  { value: "accessoires", label: "Accessoires" },
];

interface Props {
  product?: Product;
}

export function ProductForm({ product }: Props) {
  const router = useRouter();
  const isEdit = !!product;

  const [form, setForm] = useState({
    slug: product?.slug ?? "",
    name: product?.name ?? "",
    shortDescription: product?.shortDescription ?? "",
    description: product?.description ?? "",
    price: product?.price?.toString() ?? "",
    comparePrice: product?.comparePrice?.toString() ?? "",
    image: product?.image ?? "",
    category: product?.category ?? "soins-visage",
    categoryLabel: product?.categoryLabel ?? "Soins Visage",
    stock: product?.stock?.toString() ?? "0",
    badge: product?.badge ?? "",
    ingredients: product?.ingredients ?? "",
    howToUse: product?.howToUse ?? "",
    active: product?.active ?? true,
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function handleCategoryChange(value: string) {
    const cat = CATEGORIES.find((c) => c.value === value);
    setForm({ ...form, category: value, categoryLabel: cat?.label ?? value });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const url = isEdit ? `/api/admin/produits/${product.id}` : "/api/admin/produits";
    const method = isEdit ? "PUT" : "POST";

    const res = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      router.push("/admin/produits");
      router.refresh();
    } else {
      const data = await res.json();
      setError(data.error ?? "Une erreur est survenue");
      setLoading(false);
    }
  }

  const inputClass = "w-full border border-[#ddd] px-4 py-2.5 text-[14px] focus:outline-none focus:border-[#6D071A] transition-colors";
  const labelClass = "block text-[11px] font-semibold uppercase tracking-wider text-[#666] mb-1.5";

  return (
    <form onSubmit={handleSubmit} className="space-y-5 max-w-[700px]">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>Nom du produit *</label>
          <input required className={inputClass} value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })} />
        </div>
        <div>
          <label className={labelClass}>Slug (URL) *</label>
          <input required className={inputClass} value={form.slug}
            onChange={(e) => setForm({ ...form, slug: e.target.value.toLowerCase().replace(/\s+/g, "-") })} />
        </div>
      </div>

      <div>
        <label className={labelClass}>Courte description *</label>
        <input required className={inputClass} value={form.shortDescription}
          onChange={(e) => setForm({ ...form, shortDescription: e.target.value })} />
      </div>

      <div>
        <label className={labelClass}>Description complète *</label>
        <textarea required rows={4} className={inputClass + " resize-none"} value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })} />
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div>
          <label className={labelClass}>Prix (FCFA) *</label>
          <input required type="number" className={inputClass} value={form.price}
            onChange={(e) => setForm({ ...form, price: e.target.value })} />
        </div>
        <div>
          <label className={labelClass}>Prix barré (optionnel)</label>
          <input type="number" className={inputClass} value={form.comparePrice}
            onChange={(e) => setForm({ ...form, comparePrice: e.target.value })} />
        </div>
        <div>
          <label className={labelClass}>Stock</label>
          <input type="number" className={inputClass} value={form.stock}
            onChange={(e) => setForm({ ...form, stock: e.target.value })} />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>Catégorie *</label>
          <select className={inputClass} value={form.category}
            onChange={(e) => handleCategoryChange(e.target.value)}>
            {CATEGORIES.map((c) => (
              <option key={c.value} value={c.value}>{c.label}</option>
            ))}
          </select>
        </div>
        <div>
          <label className={labelClass}>Badge (optionnel)</label>
          <input className={inputClass} value={form.badge} placeholder="Ex: Nouveau, Best-seller"
            onChange={(e) => setForm({ ...form, badge: e.target.value })} />
        </div>
      </div>

      <div>
        <label className={labelClass}>URL de l&apos;image *</label>
        <input required className={inputClass} value={form.image} placeholder="/images/..."
          onChange={(e) => setForm({ ...form, image: e.target.value })} />
      </div>

      <div>
        <label className={labelClass}>Mode d&apos;emploi</label>
        <textarea rows={2} className={inputClass + " resize-none"} value={form.howToUse}
          onChange={(e) => setForm({ ...form, howToUse: e.target.value })} />
      </div>

      <div>
        <label className={labelClass}>Ingrédients</label>
        <textarea rows={2} className={inputClass + " resize-none"} value={form.ingredients}
          onChange={(e) => setForm({ ...form, ingredients: e.target.value })} />
      </div>

      <div className="flex items-center gap-3">
        <input type="checkbox" id="active" checked={form.active}
          onChange={(e) => setForm({ ...form, active: e.target.checked })}
          className="w-4 h-4 accent-[#6D071A]" />
        <label htmlFor="active" className="text-[13px] text-[#555]">Produit actif (visible dans la boutique)</label>
      </div>

      {error && <p className="text-red-500 text-[13px]">{error}</p>}

      <div className="flex items-center gap-4 pt-2">
        <button type="submit" disabled={loading}
          className="bg-[#6D071A] text-white text-[11px] font-bold uppercase tracking-widest px-8 py-3.5 hover:bg-black transition-colors disabled:opacity-50">
          {loading ? "Enregistrement…" : isEdit ? "Enregistrer les modifications" : "Créer le produit"}
        </button>
        <button type="button" onClick={() => router.back()}
          className="text-[13px] text-[#999] hover:text-black transition-colors">
          Annuler
        </button>
      </div>
    </form>
  );
}
