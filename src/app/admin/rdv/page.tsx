"use client";

import { useEffect, useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { AdminShell } from "@/components/admin/AdminShell";
import { Calendar, Clock, User, Sparkles, Trash2, Phone, Mail } from "lucide-react";

interface Appointment {
  id: string;
  serviceTitle: string;
  serviceSlug: string | null;
  date: string;
  time: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string | null;
  message: string | null;
  status: string;
  createdAt: string;
}

const STATUS_CONFIG = {
  pending:   { label: "En attente",  cls: "bg-amber-50 text-amber-700 border-amber-200" },
  confirmed: { label: "Confirmé",    cls: "bg-emerald-50 text-emerald-700 border-emerald-200" },
  cancelled: { label: "Annulé",      cls: "bg-red-50 text-red-600 border-red-200" },
};

function StatusSelect({ id, current }: { id: string; current: string }) {
  const router = useRouter();
  const [, startTransition] = useTransition();
  const [status, setStatus] = useState(current);
  const [saving, setSaving] = useState(false);
  const cfg = STATUS_CONFIG[status as keyof typeof STATUS_CONFIG] ?? STATUS_CONFIG.pending;

  async function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const next = e.target.value;
    setStatus(next);
    setSaving(true);
    await fetch(`/api/rdv/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: next }),
    });
    setSaving(false);
    startTransition(() => router.refresh());
  }

  return (
    <select
      value={status}
      onChange={handleChange}
      disabled={saving}
      className={`text-[11px] font-bold uppercase tracking-wide px-2.5 py-1.5 border rounded-full appearance-none cursor-pointer transition-all focus:outline-none disabled:opacity-60 ${cfg.cls}`}
    >
      <option value="pending">En attente</option>
      <option value="confirmed">Confirmé</option>
      <option value="cancelled">Annulé</option>
    </select>
  );
}

function DeleteBtn({ id, onDelete }: { id: string; onDelete: () => void }) {
  const [loading, setLoading] = useState(false);
  async function del() {
    if (!confirm("Supprimer ce rendez-vous ?")) return;
    setLoading(true);
    await fetch(`/api/rdv/${id}`, { method: "DELETE" });
    onDelete();
    setLoading(false);
  }
  return (
    <button onClick={del} disabled={loading} className="p-1.5 text-[#ccc] hover:text-red-500 transition-colors">
      <Trash2 className="w-4 h-4" />
    </button>
  );
}

export default function AdminRdv() {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [loading, setLoading] = useState(true);
  const [filterStatus, setFilterStatus] = useState<"all" | "pending" | "confirmed" | "cancelled">("all");

  useEffect(() => {
    fetch("/api/rdv")
      .then(r => r.ok ? r.json() : [])
      .then(setAppointments)
      .finally(() => setLoading(false));
  }, []);

  const filtered = filterStatus === "all" ? appointments : appointments.filter(a => a.status === filterStatus);

  const counts = {
    pending: appointments.filter(a => a.status === "pending").length,
    confirmed: appointments.filter(a => a.status === "confirmed").length,
    cancelled: appointments.filter(a => a.status === "cancelled").length,
  };

  function formatDate(d: string) {
    return new Date(d + "T12:00:00").toLocaleDateString("fr-FR", { weekday: "short", day: "numeric", month: "short", year: "numeric" });
  }

  return (
    <AdminShell>
      <div className="px-4 py-5 sm:px-6 sm:py-6 md:px-8 md:py-8">

        {/* Header */}
        <div className="flex items-start justify-between gap-3 mb-6">
          <div>
            <h1 className="text-[20px] md:text-[22px] font-bold text-[#1a1a1a]">Rendez-vous</h1>
            <p className="text-[12px] md:text-[13px] text-[#999] mt-0.5">
              <span className="text-amber-600 font-medium">{counts.pending} en attente</span>
              {counts.confirmed > 0 && <span className="text-emerald-600 font-medium"> · {counts.confirmed} confirmés</span>}
              <span className="text-[#ccc]"> · {appointments.length} total</span>
            </p>
          </div>
          <a href="/rendez-vous" target="_blank" className="flex items-center gap-1.5 bg-[#6D071A] text-white text-[12px] font-semibold px-3 py-2 hover:bg-black transition-colors shrink-0">
            <Calendar className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Voir la page</span>
          </a>
        </div>

        {/* Filtres */}
        <div className="flex gap-1.5 mb-5 flex-wrap">
          {(["all", "pending", "confirmed", "cancelled"] as const).map(f => (
            <button key={f} onClick={() => setFilterStatus(f)}
              className={`px-3 py-1.5 text-[11px] font-bold uppercase tracking-wide border transition-colors ${
                filterStatus === f ? "bg-[#1a1a1a] text-white border-[#1a1a1a]" : "bg-white text-[#666] border-[#e8e8e8] hover:border-[#1a1a1a]"
              }`}>
              {f === "all" ? "Tous" : STATUS_CONFIG[f].label}
              {f !== "all" && <span className="ml-1.5 opacity-60">{counts[f]}</span>}
            </button>
          ))}
        </div>

        {/* Loading */}
        {loading && <p className="text-[#999] text-[13px] py-10 text-center">Chargement…</p>}

        {/* Empty */}
        {!loading && filtered.length === 0 && (
          <div className="bg-white border border-[#e8e8e8] px-6 py-14 text-center text-[#999] text-[14px]">
            Aucun rendez-vous{filterStatus !== "all" ? " dans cette catégorie" : ""}.
          </div>
        )}

        {/* Cards grid */}
        {!loading && filtered.length > 0 && (
          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {filtered.map(a => {
              const cfg = STATUS_CONFIG[a.status as keyof typeof STATUS_CONFIG] ?? STATUS_CONFIG.pending;
              return (
                <div key={a.id} className={`bg-white border overflow-hidden flex flex-col transition-all hover:shadow-sm ${a.status === "cancelled" ? "opacity-60 border-[#e8e8e8]" : "border-[#e8e8e8]"}`}>

                  {/* Top bar */}
                  <div className="px-4 py-3 border-b border-[#f4f4f4] flex items-center justify-between gap-2">
                    <StatusSelect id={a.id} current={a.status} />
                    <span className="text-[11px] text-[#bbb]">
                      {new Date(a.createdAt).toLocaleDateString("fr-FR", { day: "2-digit", month: "short" })}
                    </span>
                    <DeleteBtn id={a.id} onDelete={() => setAppointments(p => p.filter(x => x.id !== a.id))} />
                  </div>

                  <div className="p-4 flex flex-col gap-3 flex-1">
                    {/* Service */}
                    <div className="flex items-start gap-2">
                      <Sparkles className="w-3.5 h-3.5 text-[#6D071A] mt-0.5 shrink-0" />
                      <p className="text-[13px] font-semibold text-[#1a1a1a] leading-tight">{a.serviceTitle}</p>
                    </div>

                    {/* Date + heure */}
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-[#999]" />
                        <span className="text-[12px] text-[#555] capitalize">{formatDate(a.date)}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-[#999]" />
                        <span className="text-[12px] text-[#555]">{a.time}</span>
                      </div>
                    </div>

                    {/* Client */}
                    <div className="border-t border-[#f4f4f4] pt-3 space-y-1.5">
                      <div className="flex items-center gap-2">
                        <User className="w-3.5 h-3.5 text-[#999]" />
                        <span className="text-[13px] font-semibold text-[#1a1a1a]">{a.firstName} {a.lastName}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="w-3.5 h-3.5 text-[#999]" />
                        <a href={`https://wa.me/${a.phone.replace(/\D/g, "")}`} target="_blank" className="text-[12px] text-[#6D071A] hover:underline">{a.phone}</a>
                      </div>
                      {a.email && (
                        <div className="flex items-center gap-2">
                          <Mail className="w-3.5 h-3.5 text-[#999]" />
                          <span className="text-[12px] text-[#666]">{a.email}</span>
                        </div>
                      )}
                      {a.message && (
                        <p className="text-[11px] text-[#999] italic mt-1 leading-relaxed">"{a.message}"</p>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </AdminShell>
  );
}
