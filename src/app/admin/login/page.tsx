"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function AdminLogin() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });

    if (res.ok) {
      router.push("/admin/dashboard");
    } else {
      setError("Mot de passe incorrect");
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-[#fafafa] flex items-center justify-center px-4">
      <div className="w-full max-w-[400px]">
        <div className="text-center mb-8">
          <Image src="/beautygate-logo-sans-bg.png" alt="Beauty Gate" width={140} height={52} className="mx-auto mb-4 h-14 w-auto object-contain" />
          <h1 className="text-[22px] font-bold text-black">Administration</h1>
          <p className="text-[13px] text-[#999] mt-1">Espace réservé à la gérance</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white border border-[#f0f0f0] p-8 space-y-4">
          <div>
            <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#666] mb-2">
              Mot de passe
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoFocus
              autoComplete="current-password"
              data-1p-ignore="true"
              data-lpignore="true"
              className="w-full border border-[#ddd] px-4 py-3 text-[14px] focus:outline-none focus:border-[#6D071A] transition-colors"
              placeholder="••••••••"
            />
          </div>

          {error && (
            <p className="text-red-500 text-[13px]">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#6D071A] text-white text-[11px] font-bold uppercase tracking-widest py-3.5 hover:bg-black transition-colors disabled:opacity-50"
          >
            {loading ? "Connexion…" : "Accéder au tableau de bord"}
          </button>
        </form>
      </div>
    </div>
  );
}
