"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AdminShell } from "@/components/admin/AdminShell";
import { Upload, Check, ImageIcon } from "lucide-react";

interface Category {
  id: string;
  key: string;
  label: string;
  image: string | null;
  sortOrder: number;
}

function CategoryCard({ cat, onSaved }: { cat: Category; onSaved: (updated: Category) => void }) {
  const [label, setLabel] = useState(cat.label);
  const [image, setImage] = useState(cat.image ?? "");
  const [sortOrder, setSortOrder] = useState(String(cat.sortOrder));
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [uploading, setUploading] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  const isDirty =
    label !== cat.label ||
    image !== (cat.image ?? "") ||
    sortOrder !== String(cat.sortOrder);

  async function handleUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    try {
      const fd = new FormData();
      fd.append("file", file);
      const res = await fetch("/api/admin/upload", { method: "POST", body: fd });
      const data = await res.json();
      if (data.url) setImage(data.url);
    } finally {
      setUploading(false);
      if (fileRef.current) fileRef.current.value = "";
    }
  }

  async function save() {
    if (!label.trim()) return;
    setSaving(true);
    try {
      const res = await fetch(`/api/admin/categories/${cat.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ label, image, sortOrder: Number(sortOrder) }),
      });
      if (res.ok) {
        const updated = await res.json();
        onSaved(updated);
        setSaved(true);
        setTimeout(() => setSaved(false), 2500);
      }
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="bg-white border border-[#e8e8e8] overflow-hidden flex flex-col hover:border-[#d0d0d0] hover:shadow-sm transition-all">

      {/* Image zone */}
      <div
        className="relative h-[160px] bg-[#f0ebe8] cursor-pointer group overflow-hidden shrink-0"
        onClick={() => fileRef.current?.click()}
      >
        {image ? (
          <Image
            src={image}
            alt={label}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover group-hover:scale-[1.04] transition-transform duration-500"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-[#f5e8ea] to-[#e0c8cc] flex items-center justify-center">
            <ImageIcon className="w-8 h-8 text-[#c0a0a5]" />
          </div>
        )}

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center gap-1.5">
            {uploading ? (
              <span className="text-white text-[12px] font-medium">Envoi…</span>
            ) : (
              <>
                <Upload className="w-5 h-5 text-white" />
                <span className="text-white text-[11px] font-semibold uppercase tracking-wider">
                  Changer l&apos;image
                </span>
              </>
            )}
          </div>
        </div>

        {/* Uploading spinner */}
        {uploading && (
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
            <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          </div>
        )}

        {/* Key badge */}
        <div className="absolute top-2.5 left-2.5">
          <span className="text-[9px] font-bold uppercase tracking-[0.15em] bg-black/60 text-white px-2 py-1 backdrop-blur-sm">
            {cat.key}
          </span>
        </div>

        <input
          ref={fileRef}
          type="file"
          accept="image/jpeg,image/png,image/webp"
          className="hidden"
          onChange={handleUpload}
        />
      </div>

      {/* Fields */}
      <div className="p-4 flex flex-col gap-3 flex-1">

        {/* Nom */}
        <div>
          <label className="block text-[10px] font-bold uppercase tracking-[0.15em] text-[#999] mb-1.5">
            Nom affiché
          </label>
          <input
            value={label}
            onChange={(e) => setLabel(e.target.value)}
            className="w-full text-[13px] border border-[#e8e8e8] px-3 py-2 focus:outline-none focus:border-[#6D071A] bg-white transition-colors"
            placeholder="Nom de la catégorie"
          />
        </div>

        {/* Ordre */}
        <div>
          <label className="block text-[10px] font-bold uppercase tracking-[0.15em] text-[#999] mb-1.5">
            Ordre d&apos;affichage
          </label>
          <input
            type="number"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="w-full text-[13px] border border-[#e8e8e8] px-3 py-2 focus:outline-none focus:border-[#6D071A] bg-white transition-colors text-center"
          />
        </div>

        {/* Save button */}
        <button
          onClick={save}
          disabled={!isDirty || saving}
          className={`mt-auto w-full flex items-center justify-center gap-2 py-2.5 text-[12px] font-bold uppercase tracking-wider transition-all ${
            saved
              ? "bg-emerald-500 text-white"
              : isDirty
              ? "bg-[#6D071A] text-white hover:bg-black"
              : "bg-[#f4f4f4] text-[#bbb] cursor-not-allowed"
          }`}
        >
          {saving ? (
            <div className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          ) : saved ? (
            <>
              <Check className="w-3.5 h-3.5" />
              Sauvegardé
            </>
          ) : (
            "Sauvegarder"
          )}
        </button>
      </div>
    </div>
  );
}

export default function AdminCategories() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("/api/admin/categories")
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then((data) => setCategories(data))
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  function handleSaved(updated: Category) {
    setCategories((prev) => prev.map((c) => (c.id === updated.id ? updated : c)));
  }

  return (
    <AdminShell>
      <div className="px-4 py-5 sm:px-6 sm:py-6 md:px-8 md:py-8">

        {/* Header */}
        <div className="flex items-start justify-between gap-3 mb-6">
          <div>
            <h1 className="text-[20px] md:text-[22px] font-bold text-[#1a1a1a]">Catégories de soins</h1>
            <p className="text-[12px] md:text-[13px] text-[#999] mt-0.5">
              {categories.length > 0 && `${categories.length} catégories · `}
              Cliquez sur l&apos;image pour uploader, modifiez le nom ou l&apos;ordre puis sauvegardez.
            </p>
          </div>
        </div>

        {/* Loading */}
        {loading && (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="bg-white border border-[#e8e8e8] overflow-hidden animate-pulse">
                <div className="h-[160px] bg-[#f0f0f0]" />
                <div className="p-4 space-y-3">
                  <div className="h-3 bg-[#f0f0f0] rounded w-1/3" />
                  <div className="h-8 bg-[#f0f0f0] rounded" />
                  <div className="h-8 bg-[#f0f0f0] rounded" />
                  <div className="h-9 bg-[#f0f0f0] rounded" />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Error */}
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 text-[13px]">
            Erreur de chargement. Vérifiez la connexion à la base de données.
          </div>
        )}

        {/* Grid */}
        {!loading && !error && (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {categories.map((cat) => (
              <CategoryCard key={cat.id} cat={cat} onSaved={handleSaved} />
            ))}
          </div>
        )}

        <p className="text-[11px] text-[#bbb] mt-5">
          Formats acceptés : JPG, PNG, WebP · L&apos;ordre détermine l&apos;affichage sur la page Nos Soins
        </p>
      </div>
    </AdminShell>
  );
}
