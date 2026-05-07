"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export function DeleteServiceButton({ id, title }: { id: string; title: string }) {
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
      className="text-[12px] font-medium text-red-500 hover:text-red-700 transition-colors px-3 py-1.5 border border-red-200 hover:border-red-400 disabled:opacity-50"
    >
      {loading ? "..." : "Supprimer"}
    </button>
  );
}
