"use client";

import { useState, useTransition } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const CATEGORY_LABELS: Record<string, string> = {
  visage:          "Visage",
  corps:           "Corps",
  "epilation-cire":"Épilation cire",
  massages:        "Massages",
  "mains-pieds":   "Mains & Pieds",
  "duo-enfants":   "Duo & Enfants",
  injections:      "Médical",
  diagnostic:      "Consultations",
  privatisation:   "Privatisation",
};

const CATEGORY_FALLBACK: Record<string, string> = {
  visage:          "/images/soins/hydrafacial/hero.jpg",
  corps:           "/images/soins/bodysculpt/hero.png",
  "epilation-cire":"/images/dsc00744-1-scaled.jpg",
  massages:        "/images/Appart-beaute-accueil-philosophie-1-scaled.jpg",
  "mains-pieds":   "/images/appart-beaute-3873920.jpg",
  "duo-enfants":   "/images/dsc01280.jpg",
  injections:      "/images/soins/injection-hyaluronique/hero.jpg",
  diagnostic:      "/images/soins/diagnostic-peau/hero.jpg",
  privatisation:   "/images/dsc01308-scaled.jpg",
};

interface Service {
  id: string;
  slug: string;
  title: string;
  category: string;
  active: boolean;
  createdAt: Date;
  hero: { image?: string } | null;
}

function ToggleActiveButton({ id, active }: { id: string; active: boolean }) {
  const router = useRouter();
  const [pending, startTransition] = useTransition();
  const [optimistic, setOptimistic] = useState(active);

  async function toggle() {
    setOptimistic(!optimistic);
    await fetch(`/api/admin/services/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ active: !optimistic }),
    });
    startTransition(() => router.refresh());
  }

  return (
    <button
      onClick={toggle}
      disabled={pending}
      title={optimistic ? "Désactiver" : "Activer"}
      style={{ width: 36, height: 20, minWidth: 36 }}
      className={`relative rounded-full transition-colors duration-200 disabled:opacity-60 flex-shrink-0 block ${
        optimistic ? "bg-emerald-500" : "bg-gray-300"
      }`}
    >
      <span
        style={{ width: 16, height: 16, top: 2 }}
        className={`absolute bg-white rounded-full shadow-sm transition-transform duration-200 ${
          optimistic ? "translate-x-[18px]" : "translate-x-[2px]"
        }`}
      />
    </button>
  );
}

function DeleteButton({ id, title }: { id: string; title: string }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function handleDelete() {
    if (!confirm(`Supprimer "${title}" ? Cette action est irréversible.`)) return;
    setLoading(true);
    try {
      await fetch(`/api/admin/services/${id}`, { method: "DELETE" });
      router.refresh();
    } finally {
      setLoading(false);
    }
  }

  return (
    <button
      onClick={handleDelete}
      disabled={loading}
      className="p-1.5 text-[#ccc] hover:text-red-500 transition-colors"
      title="Supprimer"
    >
      <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
        <path fillRule="evenodd" d="M8.75 1A2.75 2.75 0 0 0 6 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 1 0 .23 1.482l.149-.022.841 10.518A2.75 2.75 0 0 0 7.596 19h4.807a2.75 2.75 0 0 0 2.742-2.53l.841-10.52.149.023a.75.75 0 0 0 .23-1.482A41.03 41.03 0 0 0 14 4.193v-.443A2.75 2.75 0 0 0 11.25 1h-2.5zM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4zM8.58 7.72a.75.75 0 0 0-1.5.06l.3 7.5a.75.75 0 1 0 1.5-.06l-.3-7.5zm4.34.06a.75.75 0 1 0-1.5-.06l-.3 7.5a.75.75 0 1 0 1.5.06l.3-7.5z" clipRule="evenodd" />
      </svg>
    </button>
  );
}

export function ServicesTable({ services }: { services: Service[] }) {
  const [query, setQuery] = useState("");
  const [filterCat, setFilterCat] = useState("all");
  const [filterActive, setFilterActive] = useState<"all" | "active" | "inactive">("all");

  // Catégories présentes dans la liste
  const categories = Array.from(new Set(services.map((s) => s.category))).sort();

  const filtered = services.filter((s) => {
    const q = query.toLowerCase();
    const matchQuery = !q || s.title.toLowerCase().includes(q) || s.slug.toLowerCase().includes(q);
    const matchCat = filterCat === "all" || s.category === filterCat;
    const matchActive =
      filterActive === "all" ||
      (filterActive === "active" && s.active) ||
      (filterActive === "inactive" && !s.active);
    return matchQuery && matchCat && matchActive;
  });

  return (
    <>
      {/* ── Barre de filtres ─────────────────────────────── */}
      <div className="space-y-3 mb-6">

        {/* Recherche + actif/inactif */}
        <div className="flex flex-col sm:flex-row gap-2">
          <div className="relative flex-1 sm:max-w-xs">
            <svg viewBox="0 0 20 20" fill="currentColor" className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#bbb] pointer-events-none">
              <path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11zM2 9a7 7 0 1 1 12.452 4.391l3.328 3.329a.75.75 0 1 1-1.06 1.06l-3.329-3.328A7 7 0 0 1 2 9z" clipRule="evenodd" />
            </svg>
            <input
              type="text"
              placeholder="Rechercher un service…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-[13px] border border-[#e8e8e8] focus:border-[#6D071A] focus:outline-none bg-white"
            />
          </div>
          <div className="flex gap-1">
            {(["all", "active", "inactive"] as const).map((f) => (
              <button
                key={f}
                onClick={() => setFilterActive(f)}
                className={`px-3 py-2 text-[12px] font-medium border transition-colors whitespace-nowrap ${
                  filterActive === f
                    ? "bg-[#6D071A] text-white border-[#6D071A]"
                    : "bg-white text-[#555] border-[#e8e8e8] hover:border-[#6D071A] hover:text-[#6D071A]"
                }`}
              >
                {f === "all" ? "Tous" : f === "active" ? "Actifs" : "Inactifs"}
              </button>
            ))}
          </div>
          <span className="text-[12px] text-[#999] self-center shrink-0">
            {filtered.length} / {services.length}
          </span>
        </div>

        {/* Filtre catégorie */}
        <div className="flex flex-wrap gap-1.5">
          <button
            onClick={() => setFilterCat("all")}
            className={`px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wide border transition-colors ${
              filterCat === "all"
                ? "bg-[#1a1a1a] text-white border-[#1a1a1a]"
                : "bg-white text-[#666] border-[#e8e8e8] hover:border-[#1a1a1a] hover:text-[#1a1a1a]"
            }`}
          >
            Toutes
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilterCat(cat)}
              className={`px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wide border transition-colors ${
                filterCat === cat
                  ? "bg-[#6D071A] text-white border-[#6D071A]"
                  : "bg-white text-[#666] border-[#e8e8e8] hover:border-[#6D071A] hover:text-[#6D071A]"
              }`}
            >
              {CATEGORY_LABELS[cat] ?? cat}
            </button>
          ))}
        </div>
      </div>

      {/* ── Grille de cards ──────────────────────────────── */}
      {filtered.length === 0 ? (
        <div className="bg-white border border-[#e8e8e8] px-6 py-14 text-center text-[13px] text-[#999]">
          Aucun service ne correspond.
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
          {filtered.map((s) => {
            const img = s.hero?.image || CATEGORY_FALLBACK[s.category] || null;
            return (
              <div
                key={s.id}
                className={`group bg-white border flex flex-col overflow-hidden transition-all ${
                  s.active ? "border-[#e8e8e8]" : "border-[#e8e8e8] opacity-60"
                } hover:border-[#6D071A]/40 hover:shadow-md`}
              >
                {/* Image */}
                <div className="relative h-[130px] bg-[#f0ebe8] overflow-hidden shrink-0">
                  {img ? (
                    <Image
                      src={img}
                      alt={s.title}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                      className="object-cover group-hover:scale-[1.04] transition-transform duration-500"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-[#f5e8ea] to-[#e0c8cc]" />
                  )}

                  {/* Badge statut */}
                  <div className="absolute top-2 left-2">
                    <span className={`text-[9px] font-bold uppercase px-1.5 py-0.5 ${
                      s.active ? "bg-emerald-500 text-white" : "bg-gray-400 text-white"
                    }`}>
                      {s.active ? "Actif" : "Inactif"}
                    </span>
                  </div>

                  {/* Toggle au hover */}
                  <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ToggleActiveButton id={s.id} active={s.active} />
                  </div>
                </div>

                {/* Contenu */}
                <div className="p-3 flex flex-col flex-1">
                  {/* Catégorie */}
                  <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-[#6D071A] mb-1">
                    {CATEGORY_LABELS[s.category] ?? s.category}
                  </span>

                  {/* Titre */}
                  <p className="text-[12px] font-semibold text-[#1a1a1a] leading-[1.35] line-clamp-2 flex-1 mb-3">
                    {s.title}
                  </p>

                  {/* Actions */}
                  <div className="flex items-center justify-between gap-1 mt-auto">
                    <Link
                      href={`/admin/services/${s.id}`}
                      className="flex-1 text-center text-[11px] font-semibold text-white bg-[#6D071A] hover:bg-black px-2 py-1.5 transition-colors"
                    >
                      Modifier
                    </Link>
                    <Link
                      href={`/soins/${s.slug}`}
                      target="_blank"
                      className="p-1.5 text-[#bbb] hover:text-[#6D071A] transition-colors"
                      title="Voir sur le site"
                    >
                      <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                        <path d="M11 3a1 1 0 1 0 0 2h2.586l-6.293 6.293a1 1 0 1 0 1.414 1.414L15 6.414V9a1 1 0 1 0 2 0V4a1 1 0 0 0-1-1h-5z" />
                        <path d="M5 5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-3a1 1 0 1 0-2 0v3H5V7h3a1 1 0 0 0 0-2H5z" />
                      </svg>
                    </Link>
                    <DeleteButton id={s.id} title={s.title} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}
