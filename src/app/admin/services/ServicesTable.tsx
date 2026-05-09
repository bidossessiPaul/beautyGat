"use client";

import { useState, useTransition } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface Service {
  id: string;
  slug: string;
  title: string;
  category: string;
  active: boolean;
  createdAt: Date;
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
      className={`relative w-10 h-5 rounded-full transition-colors duration-200 disabled:opacity-60 shrink-0 ${
        optimistic ? "bg-emerald-500" : "bg-gray-300"
      }`}
    >
      <span
        className={`absolute top-0.5 w-4 h-4 bg-white rounded-full shadow transition-transform duration-200 ${
          optimistic ? "translate-x-5" : "translate-x-0.5"
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
      className="text-[12px] font-medium text-red-500 hover:text-red-700 transition-colors px-2.5 py-1.5 border border-red-200 hover:border-red-400 disabled:opacity-50 whitespace-nowrap"
    >
      {loading ? "…" : "Supprimer"}
    </button>
  );
}

export function ServicesTable({ services }: { services: Service[] }) {
  const [query, setQuery] = useState("");
  const [filterActive, setFilterActive] = useState<"all" | "active" | "inactive">("all");

  const filtered = services.filter((s) => {
    const q = query.toLowerCase();
    const matchQuery =
      !q ||
      s.title.toLowerCase().includes(q) ||
      s.slug.toLowerCase().includes(q) ||
      s.category.toLowerCase().includes(q);
    const matchActive =
      filterActive === "all" ||
      (filterActive === "active" && s.active) ||
      (filterActive === "inactive" && !s.active);
    return matchQuery && matchActive;
  });

  return (
    <>
      {/* Barre recherche + filtres */}
      <div className="flex flex-col sm:flex-row gap-2 sm:items-center mb-4">
        <div className="relative flex-1 sm:max-w-xs">
          <svg
            viewBox="0 0 20 20"
            fill="currentColor"
            className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#bbb] pointer-events-none"
          >
            <path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11zM2 9a7 7 0 1 1 12.452 4.391l3.328 3.329a.75.75 0 1 1-1.06 1.06l-3.329-3.328A7 7 0 0 1 2 9z" clipRule="evenodd" />
          </svg>
          <input
            type="text"
            placeholder="Rechercher…"
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
              className={`flex-1 sm:flex-none px-3 py-2 text-[12px] font-medium border transition-colors whitespace-nowrap ${
                filterActive === f
                  ? "bg-[#6D071A] text-white border-[#6D071A]"
                  : "bg-white text-[#555] border-[#e8e8e8] hover:border-[#6D071A] hover:text-[#6D071A]"
              }`}
            >
              {f === "all" ? "Tous" : f === "active" ? "Actifs" : "Inactifs"}
            </button>
          ))}
        </div>

        <span className="text-[12px] text-[#999] shrink-0">
          {filtered.length} / {services.length}
        </span>
      </div>

      {filtered.length === 0 ? (
        <div className="bg-white border border-[#e8e8e8] px-6 py-10 text-center text-[13px] text-[#999]">
          Aucun service ne correspond à votre recherche.
        </div>
      ) : (
        <>
          {/* ── Layout carte (mobile + tablet) ─────────────── */}
          <div className="xl:hidden bg-white border border-[#e8e8e8] divide-y divide-[#f0f0f0]">
            {filtered.map((service) => (
              <div key={service.id} className="flex items-center gap-3 px-4 py-3">
                {/* Toggle */}
                <ToggleActiveButton id={service.id} active={service.active} />

                {/* Titre + catégorie */}
                <div className="flex-1 min-w-0">
                  <p className="text-[13px] font-semibold text-[#1a1a1a] leading-tight truncate">
                    {service.title}
                  </p>
                  <p className="text-[11px] text-[#999] mt-0.5 capitalize">{service.category}</p>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-1.5 shrink-0">
                  <Link
                    href={`/admin/services/${service.id}`}
                    className="text-[12px] font-medium text-[#555] hover:text-[#6D071A] transition-colors px-2.5 py-1.5 border border-[#e8e8e8] hover:border-[#6D071A] whitespace-nowrap"
                  >
                    Modifier
                  </Link>
                  <DeleteButton id={service.id} title={service.title} />
                </div>
              </div>
            ))}
          </div>

          {/* ── Table (desktop xl+) ─────────────────────────── */}
          <div className="hidden xl:block bg-white border border-[#e8e8e8]">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#f0f0f0]">
                  <th className="text-left px-5 py-3 text-[11px] font-bold uppercase tracking-wider text-[#999]">Titre</th>
                  <th className="text-left px-5 py-3 text-[11px] font-bold uppercase tracking-wider text-[#999]">Catégorie</th>
                  <th className="text-left px-5 py-3 text-[11px] font-bold uppercase tracking-wider text-[#999]">Slug</th>
                  <th className="text-left px-5 py-3 text-[11px] font-bold uppercase tracking-wider text-[#999]">Actif</th>
                  <th className="text-left px-5 py-3 text-[11px] font-bold uppercase tracking-wider text-[#999]">Créé le</th>
                  <th className="px-5 py-3" />
                </tr>
              </thead>
              <tbody className="divide-y divide-[#f9f9f9]">
                {filtered.map((service) => (
                  <tr key={service.id} className="hover:bg-[#fafafa] transition-colors">
                    <td className="px-5 py-3.5">
                      <p className="text-[13px] font-semibold text-[#1a1a1a]">{service.title}</p>
                    </td>
                    <td className="px-5 py-3.5">
                      <span className="text-[12px] text-[#666] capitalize">{service.category}</span>
                    </td>
                    <td className="px-5 py-3.5">
                      <Link
                        href={`/soins/${service.slug}`}
                        target="_blank"
                        className="text-[12px] font-mono text-[#6D071A] hover:underline"
                      >
                        {service.slug}
                      </Link>
                    </td>
                    <td className="px-5 py-3.5">
                      <ToggleActiveButton id={service.id} active={service.active} />
                    </td>
                    <td className="px-5 py-3.5 text-[13px] text-[#999]">
                      {new Date(service.createdAt).toLocaleDateString("fr-FR")}
                    </td>
                    <td className="px-5 py-3.5">
                      <div className="flex items-center gap-2 justify-end">
                        <Link
                          href={`/admin/services/${service.id}`}
                          className="text-[12px] font-medium text-[#555] hover:text-[#6D071A] transition-colors px-3 py-1.5 border border-[#e8e8e8] hover:border-[#6D071A] whitespace-nowrap"
                        >
                          Modifier
                        </Link>
                        <DeleteButton id={service.id} title={service.title} />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </>
  );
}
