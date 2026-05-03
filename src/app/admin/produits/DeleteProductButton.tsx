"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export function DeleteProductButton({ id, name }: { id: string; name: string }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function handleDelete() {
    if (!confirm(`Supprimer "${name}" ?`)) return;
    setLoading(true);
    await fetch(`/api/admin/produits/${id}`, { method: "DELETE" });
    router.refresh();
  }

  return (
    <button
      onClick={handleDelete}
      disabled={loading}
      className="text-[12px] text-[#999] hover:text-red-500 transition-colors disabled:opacity-50"
    >
      {loading ? "…" : "Supprimer"}
    </button>
  );
}
