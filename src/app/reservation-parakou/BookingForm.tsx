"use client";
import { useState } from "react";
import { SERVICES, DATES, EVENT, type ServiceId } from "./config";

type Step = 1 | 2 | 3 | 4;

interface FormState {
  service: ServiceId | null;
  name: string;
  phone: string;
  email: string;
  date: string;
  leadId: string | null;
  loading: boolean;
  error: string | null;
}

const INITIAL: FormState = {
  service: null, name: "", phone: "", email: "",
  date: "", leadId: null, loading: false, error: null,
};

const STEP_LABELS = ["Soin", "Coordonnées", "Date", "Paiement"];

function Steps({ step }: { step: Step }) {
  return (
    <div className="flex items-center gap-0 mb-8">
      {STEP_LABELS.map((label, i) => {
        const n = (i + 1) as Step;
        const done = step > n;
        const active = step === n;
        return (
          <div key={label} className="flex items-center flex-1">
            <div className="flex flex-col items-center">
              <div
                className="w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold mb-1 transition-all duration-300"
                style={{
                  backgroundColor: done ? "#059669" : active ? "#6D071A" : "rgba(249,243,236,0.08)",
                  color: done || active ? "#f9f3ec" : "rgba(249,243,236,0.2)",
                  border: active ? "none" : "none",
                }}
              >
                {done ? "✓" : n}
              </div>
              <span
                className="text-[9px] uppercase tracking-wide hidden sm:block"
                style={{ color: active ? "#c98080" : "rgba(249,243,236,0.2)" }}
              >
                {label}
              </span>
            </div>
            {i < 3 && (
              <div
                className="flex-1 h-px mx-1 mb-4 transition-all duration-500"
                style={{ backgroundColor: step > n ? "#059669" : "rgba(249,243,236,0.08)" }}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}

const inputStyle = {
  width: "100%",
  backgroundColor: "transparent",
  border: "none",
  borderBottom: "1px solid rgba(249,243,236,0.15)",
  color: "#f9f3ec",
  fontSize: 14,
  padding: "10px 0",
  outline: "none",
  fontFamily: "var(--font-body)",
};

const labelStyle = {
  display: "block",
  fontSize: 9,
  textTransform: "uppercase" as const,
  letterSpacing: "0.3em",
  color: "rgba(249,243,236,0.35)",
  marginBottom: 6,
};

export function BookingForm() {
  const [step, setStep] = useState<Step>(1);
  const [form, setForm] = useState<FormState>(INITIAL);

  const set = (patch: Partial<FormState>) => setForm(prev => ({ ...prev, ...patch }));

  async function submitStep2() {
    if (!form.name.trim() || !form.phone.trim()) {
      set({ error: "Merci de renseigner ton nom et ton numéro WhatsApp." });
      return;
    }
    set({ loading: true, error: null });
    try {
      const res = await fetch("/api/event-leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name.trim(),
          phone: form.phone.trim(),
          email: form.email.trim() || null,
          service: form.service,
          price: SERVICES[form.service!].price,
        }),
      });
      const data = await res.json() as { id?: string; error?: string };
      if (!res.ok) throw new Error(data.error ?? "Erreur serveur");
      set({ leadId: data.id!, loading: false });
      setStep(3);
    } catch (e) {
      set({ loading: false, error: (e as Error).message });
    }
  }

  async function submitStep3() {
    if (!form.date) { set({ error: "Choisis une date." }); return; }
    set({ loading: true, error: null });
    try {
      await fetch(`/api/event-leads/${form.leadId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ date: form.date, stepReached: 3 }),
      });
      set({ loading: false });
      setStep(4);
    } catch {
      set({ loading: false, error: "Erreur lors de la sauvegarde." });
    }
  }

  async function pay() {
    set({ loading: true, error: null });
    try {
      const res = await fetch(`/api/event-leads/${form.leadId}/pay`, { method: "POST" });
      const data = await res.json() as { paymentUrl?: string; error?: string };
      if (!res.ok) throw new Error(data.error ?? "Erreur paiement");
      window.location.href = data.paymentUrl!;
    } catch (e) {
      set({ loading: false, error: (e as Error).message });
    }
  }

  const svc = form.service ? SERVICES[form.service] : null;
  const dateLabel = DATES.find(d => d.value === form.date)?.label;

  const btnPrimary: React.CSSProperties = {
    width: "100%",
    backgroundColor: "#6D071A",
    color: "#f9f3ec",
    border: "none",
    padding: "14px 24px",
    fontSize: 11,
    fontWeight: 600,
    textTransform: "uppercase",
    letterSpacing: "0.2em",
    cursor: "pointer",
    fontFamily: "var(--font-body)",
    transition: "background 0.2s",
  };

  const btnGhost: React.CSSProperties = {
    backgroundColor: "transparent",
    color: "rgba(249,243,236,0.35)",
    border: "1px solid rgba(249,243,236,0.1)",
    padding: "12px 20px",
    fontSize: 11,
    cursor: "pointer",
    fontFamily: "var(--font-body)",
    letterSpacing: "0.1em",
    transition: "all 0.2s",
  };

  return (
    <div style={{ backgroundColor: "rgba(249,243,236,0.04)", border: "1px solid rgba(249,243,236,0.07)", padding: "32px" }}>
      <Steps step={step} />

      {/* ── STEP 1 — Soin ───────────────── */}
      {step === 1 && (
        <div>
          <h3
            className="mb-5"
            style={{ fontFamily: "var(--font-display)", fontSize: 20, fontWeight: 700, color: "#f9f3ec" }}
          >
            Quel soin souhaites-tu ?
          </h3>
          <div className="space-y-3 mb-6">
            {(Object.values(SERVICES) as (typeof SERVICES[ServiceId])[]).map((s) => (
              <button
                key={s.id}
                onClick={() => set({ service: s.id as ServiceId })}
                className="w-full text-left p-4 transition-all duration-200"
                style={{
                  backgroundColor: form.service === s.id ? "rgba(109,7,26,0.25)" : "rgba(249,243,236,0.03)",
                  border: `1px solid ${form.service === s.id ? "rgba(109,7,26,0.6)" : "rgba(249,243,236,0.07)"}`,
                }}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[13px] font-semibold" style={{ color: "#f9f3ec" }}>
                      {s.label}
                    </p>
                    <p className="text-[11px] mt-0.5" style={{ color: "rgba(249,243,236,0.35)" }}>⏱ {s.duration}</p>
                  </div>
                  <span
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: 16,
                      fontWeight: 700,
                      color: form.service === s.id ? "#c98080" : "rgba(249,243,236,0.5)",
                    }}
                  >
                    {s.priceLabel}
                  </span>
                </div>
              </button>
            ))}
          </div>
          <button
            style={{ ...btnPrimary, opacity: form.service ? 1 : 0.4, cursor: form.service ? "pointer" : "not-allowed" }}
            onClick={() => form.service && setStep(2)}
            disabled={!form.service}
          >
            Continuer →
          </button>
        </div>
      )}

      {/* ── STEP 2 — Coordonnées ─────────── */}
      {step === 2 && (
        <div>
          <h3
            className="mb-6"
            style={{ fontFamily: "var(--font-display)", fontSize: 20, fontWeight: 700, color: "#f9f3ec" }}
          >
            Tes coordonnées
          </h3>
          <div className="space-y-5 mb-6">
            <div>
              <label style={labelStyle}>Prénom & Nom *</label>
              <input
                type="text"
                placeholder="Ex : Fatima Soumanou"
                value={form.name}
                onChange={e => set({ name: e.target.value })}
                style={{ ...inputStyle }}
              />
            </div>
            <div>
              <label style={labelStyle}>Numéro WhatsApp *</label>
              <input
                type="tel"
                placeholder="97 00 00 00"
                value={form.phone}
                onChange={e => set({ phone: e.target.value })}
                style={{ ...inputStyle }}
              />
            </div>
            <div>
              <label style={labelStyle}>Email <span style={{ opacity: 0.4 }}>(facultatif)</span></label>
              <input
                type="email"
                placeholder="ton@email.com"
                value={form.email}
                onChange={e => set({ email: e.target.value })}
                style={{ ...inputStyle }}
              />
            </div>
          </div>
          {form.error && <p className="mb-4 text-[12px]" style={{ color: "#f87171" }}>{form.error}</p>}
          <div className="flex gap-3">
            <button style={btnGhost} onClick={() => setStep(1)}>← Retour</button>
            <button
              style={{ ...btnPrimary, opacity: form.loading ? 0.6 : 1 }}
              onClick={submitStep2}
              disabled={form.loading}
            >
              {form.loading ? "Enregistrement…" : "Continuer →"}
            </button>
          </div>
        </div>
      )}

      {/* ── STEP 3 — Date ───────────────── */}
      {step === 3 && (
        <div>
          <h3
            className="mb-6"
            style={{ fontFamily: "var(--font-display)", fontSize: 20, fontWeight: 700, color: "#f9f3ec" }}
          >
            Choisis ta date
          </h3>
          <div className="grid grid-cols-1 gap-2 mb-6">
            {DATES.map(d => (
              <button
                key={d.value}
                onClick={() => set({ date: d.value })}
                className="flex items-center justify-between px-4 py-3 transition-all duration-200"
                style={{
                  backgroundColor: form.date === d.value ? "rgba(109,7,26,0.25)" : "rgba(249,243,236,0.03)",
                  border: `1px solid ${form.date === d.value ? "rgba(109,7,26,0.6)" : "rgba(249,243,236,0.07)"}`,
                }}
              >
                <span className="text-[13px] font-medium" style={{ color: "#f9f3ec" }}>{d.label}</span>
                {form.date === d.value && <span style={{ color: "#c98080" }}>✓</span>}
              </button>
            ))}
          </div>
          {form.error && <p className="mb-4 text-[12px]" style={{ color: "#f87171" }}>{form.error}</p>}
          <div className="flex gap-3">
            <button style={btnGhost} onClick={() => setStep(2)}>← Retour</button>
            <button
              style={{ ...btnPrimary, opacity: form.loading || !form.date ? 0.4 : 1, cursor: form.date ? "pointer" : "not-allowed" }}
              onClick={submitStep3}
              disabled={form.loading || !form.date}
            >
              {form.loading ? "Enregistrement…" : "Continuer →"}
            </button>
          </div>
        </div>
      )}

      {/* ── STEP 4 — Paiement ───────────── */}
      {step === 4 && svc && (
        <div>
          <h3
            className="mb-6"
            style={{ fontFamily: "var(--font-display)", fontSize: 20, fontWeight: 700, color: "#f9f3ec" }}
          >
            Récapitulatif
          </h3>
          <div className="space-y-3 mb-6 pb-5" style={{ borderBottom: "1px solid rgba(249,243,236,0.07)" }}>
            {[
              { l: "Soin", v: svc.label },
              { l: "Date", v: dateLabel ?? "—" },
              { l: "Nom", v: form.name },
              { l: "WhatsApp", v: form.phone },
            ].map(row => (
              <div key={row.l} className="flex justify-between text-[13px]">
                <span style={{ color: "rgba(249,243,236,0.3)" }}>{row.l}</span>
                <span className="font-medium text-right max-w-[60%]" style={{ color: "#f9f3ec" }}>{row.v}</span>
              </div>
            ))}
          </div>
          <div className="flex justify-between items-baseline mb-6">
            <span className="text-[11px] uppercase tracking-wide" style={{ color: "rgba(249,243,236,0.35)" }}>Total</span>
            <span style={{ fontFamily: "var(--font-display)", fontSize: 28, fontWeight: 800, color: "#c98080" }}>
              {svc.priceLabel}
            </span>
          </div>
          <div
            className="px-3 py-2.5 text-[11px] mb-5"
            style={{ backgroundColor: "rgba(180,100,0,0.1)", border: "1px solid rgba(180,100,0,0.25)", color: "#e8a050" }}
          >
            ⚠ Le paiement confirme définitivement ta place.
          </div>
          {form.error && <p className="mb-4 text-[12px]" style={{ color: "#f87171" }}>{form.error}</p>}
          <button
            style={{ ...btnPrimary, opacity: form.loading ? 0.6 : 1, fontSize: 12 }}
            onClick={pay}
            disabled={form.loading}
          >
            {form.loading ? "Redirection…" : `Payer ${svc.priceLabel} →`}
          </button>
          <button
            style={{ ...btnGhost, width: "100%", marginTop: 10, fontSize: 11 }}
            onClick={() => setStep(3)}
          >
            ← Modifier la date
          </button>
        </div>
      )}
    </div>
  );
}
