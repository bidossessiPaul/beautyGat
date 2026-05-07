"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

/* ─── Types ──────────────────────────────────────────────────────────────── */
interface Badge { icon: string; text: string }
interface Benefit { title: string; description: string }
interface PricingItem { label: string; price: string; note: string }
interface FaqItem { question: string; answer: string }

interface ServiceFormData {
  id?: string;
  slug: string;
  title: string;
  metaDescription: string;
  category: string;
  active: boolean;
  sortOrder: number;
  hero: { image: string; imageAlt: string; eyebrow: string; headline: string; subheadline: string; imagePosition: string };
  badges: Badge[];
  intro: { image: string; imageAlt: string; headline: string; description: string; listItems: string[] };
  benefits: Benefit[];
  pricing: { headline: string; note: string; items: PricingItem[] };
  faq: FaqItem[];
  cta: { headline: string; description: string };
}

const CATEGORIES = [
  "visage", "corps", "epilation", "injections", "diagnostic",
  "mains-pieds", "massages", "coiffure", "barber", "duo-enfants",
  "privatisation", "epilation-cire",
];

function empty(): ServiceFormData {
  return {
    slug: "",
    title: "",
    metaDescription: "",
    category: "visage",
    active: true,
    sortOrder: 0,
    hero: { image: "", imageAlt: "", eyebrow: "", headline: "", subheadline: "", imagePosition: "center" },
    badges: [{ icon: "✦", text: "" }],
    intro: { image: "", imageAlt: "", headline: "", description: "", listItems: [""] },
    benefits: [{ title: "", description: "" }],
    pricing: { headline: "", note: "", items: [{ label: "", price: "", note: "" }] },
    faq: [{ question: "", answer: "" }],
    cta: { headline: "", description: "" },
  };
}

function slugify(str: string) {
  return str
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

/* ─── Field helpers ──────────────────────────────────────────────────────── */
function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <div>
      <label className="block text-[12px] font-semibold text-[#444] uppercase tracking-wide mb-1.5">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      {children}
    </div>
  );
}

const inputCls = "w-full border border-[#ddd] px-3 py-2 text-[13px] text-[#1a1a1a] focus:outline-none focus:border-[#6D071A] transition-colors bg-white";
const textareaCls = `${inputCls} resize-none`;

/* ─── Section wrapper ────────────────────────────────────────────────────── */
function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-white border border-[#e8e8e8] overflow-hidden">
      <div className="px-6 py-4 bg-[#fafafa] border-b border-[#e8e8e8]">
        <h3 className="text-[13px] font-bold text-[#1a1a1a] uppercase tracking-wide">{title}</h3>
      </div>
      <div className="px-6 py-6 space-y-5">{children}</div>
    </div>
  );
}

/* ─── Add/remove row buttons ─────────────────────────────────────────────── */
function AddBtn({ onClick, label }: { onClick: () => void; label: string }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="text-[12px] font-semibold text-[#6D071A] hover:text-black transition-colors flex items-center gap-1 mt-1"
    >
      <span className="text-[16px] leading-none">+</span> {label}
    </button>
  );
}
function RemoveBtn({ onClick }: { onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="text-[12px] text-red-400 hover:text-red-600 transition-colors px-2 py-1 border border-red-200 hover:border-red-400 mt-0.5"
      title="Supprimer"
    >
      ✕
    </button>
  );
}

/* ─── Main component ─────────────────────────────────────────────────────── */
export function ServiceForm({ initial }: { initial?: Partial<ServiceFormData> & { id?: string } }) {
  const router = useRouter();
  const [data, setData] = useState<ServiceFormData>(() => ({ ...empty(), ...initial }));
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [slugEdited, setSlugEdited] = useState(!!initial?.slug);

  /* helpers */
  const set = <K extends keyof ServiceFormData>(key: K, val: ServiceFormData[K]) =>
    setData((d) => ({ ...d, [key]: val }));

  const setHero = (k: keyof ServiceFormData["hero"], v: string) =>
    setData((d) => ({ ...d, hero: { ...d.hero, [k]: v } }));

  const setIntro = (k: keyof ServiceFormData["intro"], v: string | string[]) =>
    setData((d) => ({ ...d, intro: { ...d.intro, [k]: v } }));

  const setPricing = (k: keyof Omit<ServiceFormData["pricing"], "items">, v: string) =>
    setData((d) => ({ ...d, pricing: { ...d.pricing, [k]: v } }));

  const setCta = (k: keyof ServiceFormData["cta"], v: string) =>
    setData((d) => ({ ...d, cta: { ...d.cta, [k]: v } }));

  /* array item updaters */
  function updateBadge(i: number, k: keyof Badge, v: string) {
    setData((d) => {
      const arr = [...d.badges];
      arr[i] = { ...arr[i], [k]: v };
      return { ...d, badges: arr };
    });
  }
  function updateBenefit(i: number, k: keyof Benefit, v: string) {
    setData((d) => {
      const arr = [...d.benefits];
      arr[i] = { ...arr[i], [k]: v };
      return { ...d, benefits: arr };
    });
  }
  function updatePricingItem(i: number, k: keyof PricingItem, v: string) {
    setData((d) => {
      const arr = [...d.pricing.items];
      arr[i] = { ...arr[i], [k]: v };
      return { ...d, pricing: { ...d.pricing, items: arr } };
    });
  }
  function updateFaq(i: number, k: keyof FaqItem, v: string) {
    setData((d) => {
      const arr = [...d.faq];
      arr[i] = { ...arr[i], [k]: v };
      return { ...d, faq: arr };
    });
  }
  function updateListItem(i: number, v: string) {
    setData((d) => {
      const arr = [...d.intro.listItems];
      arr[i] = v;
      return { ...d, intro: { ...d.intro, listItems: arr } };
    });
  }

  /* submit */
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    setError(null);

    try {
      const isEdit = !!data.id;
      const url = isEdit ? `/api/admin/services/${data.id}` : "/api/admin/services";
      const method = isEdit ? "PUT" : "POST";

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const json = await res.json();

      if (!res.ok) {
        setError(json.error ?? "Erreur inconnue");
        return;
      }

      router.push("/admin/services");
      router.refresh();
    } catch {
      setError("Erreur réseau. Veuillez réessayer.");
    } finally {
      setSaving(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-5 py-3.5 text-[13px]">
          {error}
        </div>
      )}

      {/* ── Informations générales ─────────────────────────────────────── */}
      <Section title="Informations générales">
        <div className="grid grid-cols-2 gap-5">
          <Field label="Titre de la page" required>
            <input
              type="text"
              value={data.title}
              onChange={(e) => {
                set("title", e.target.value);
                if (!slugEdited) set("slug", slugify(e.target.value) + "-cotonou");
              }}
              className={inputCls}
              placeholder="Hydrafacial à Cotonou — Academy Beauty Gate"
            />
          </Field>
          <Field label="Slug (URL)" required>
            <input
              type="text"
              value={data.slug}
              onChange={(e) => {
                set("slug", e.target.value);
                setSlugEdited(true);
              }}
              className={inputCls}
              placeholder="hydrafacial-cotonou"
            />
          </Field>
        </div>
        <Field label="Meta description">
          <textarea
            value={data.metaDescription}
            onChange={(e) => set("metaDescription", e.target.value)}
            className={textareaCls}
            rows={2}
            placeholder="Description affichée dans Google (150-160 caractères)"
          />
        </Field>
        <div className="grid grid-cols-3 gap-5">
          <Field label="Catégorie">
            <select
              value={data.category}
              onChange={(e) => set("category", e.target.value)}
              className={inputCls}
            >
              {CATEGORIES.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </Field>
          <Field label="Ordre d'affichage">
            <input
              type="number"
              value={data.sortOrder}
              onChange={(e) => set("sortOrder", Number(e.target.value))}
              className={inputCls}
            />
          </Field>
          <Field label="Statut">
            <label className="flex items-center gap-2 h-[36px] cursor-pointer">
              <input
                type="checkbox"
                checked={data.active}
                onChange={(e) => set("active", e.target.checked)}
                className="w-4 h-4 accent-[#6D071A]"
              />
              <span className="text-[13px] text-[#444]">Service actif (visible)</span>
            </label>
          </Field>
        </div>
      </Section>

      {/* ── Hero ───────────────────────────────────────────────────────── */}
      <Section title="Section Hero (bannière principale)">
        <div className="grid grid-cols-2 gap-5">
          <Field label="Image hero (chemin)">
            <input
              type="text"
              value={data.hero.image}
              onChange={(e) => setHero("image", e.target.value)}
              className={inputCls}
              placeholder="/images/soins/hydrafacial/hero.jpg"
            />
          </Field>
          <Field label="Alt de l'image">
            <input
              type="text"
              value={data.hero.imageAlt}
              onChange={(e) => setHero("imageAlt", e.target.value)}
              className={inputCls}
              placeholder="Soin Hydrafacial à Cotonou"
            />
          </Field>
        </div>
        <Field label="Eyebrow (petit texte au-dessus)">
          <input
            type="text"
            value={data.hero.eyebrow}
            onChange={(e) => setHero("eyebrow", e.target.value)}
            className={inputCls}
            placeholder="Soin visage haute technologie"
          />
        </Field>
        <Field label="Headline (titre principal)">
          <input
            type="text"
            value={data.hero.headline}
            onChange={(e) => setHero("headline", e.target.value)}
            className={inputCls}
            placeholder="Hydrafacial à Cotonou : l'éclat en une séance"
          />
        </Field>
        <Field label="Sous-titre">
          <textarea
            value={data.hero.subheadline}
            onChange={(e) => setHero("subheadline", e.target.value)}
            className={textareaCls}
            rows={2}
            placeholder="Description courte affichée sous le titre..."
          />
        </Field>
      </Section>

      {/* ── Badges ─────────────────────────────────────────────────────── */}
      <Section title="Badges (points forts)">
        <div className="space-y-3">
          {data.badges.map((badge, i) => (
            <div key={i} className="flex items-center gap-3">
              <input
                type="text"
                value={badge.icon}
                onChange={(e) => updateBadge(i, "icon", e.target.value)}
                className={`${inputCls} w-16`}
                placeholder="✦"
              />
              <input
                type="text"
                value={badge.text}
                onChange={(e) => updateBadge(i, "text", e.target.value)}
                className={inputCls}
                placeholder="Résultats visibles dès la 1ère séance"
              />
              {data.badges.length > 1 && (
                <RemoveBtn onClick={() => setData((d) => ({ ...d, badges: d.badges.filter((_, j) => j !== i) }))} />
              )}
            </div>
          ))}
          <AddBtn onClick={() => setData((d) => ({ ...d, badges: [...d.badges, { icon: "✦", text: "" }] }))} label="Ajouter un badge" />
        </div>
      </Section>

      {/* ── Introduction ───────────────────────────────────────────────── */}
      <Section title="Section Introduction">
        <div className="grid grid-cols-2 gap-5">
          <Field label="Image intro (chemin)">
            <input
              type="text"
              value={data.intro.image}
              onChange={(e) => setIntro("image", e.target.value)}
              className={inputCls}
              placeholder="/images/soins/hydrafacial/intro.webp"
            />
          </Field>
          <Field label="Alt de l'image intro">
            <input
              type="text"
              value={data.intro.imageAlt}
              onChange={(e) => setIntro("imageAlt", e.target.value)}
              className={inputCls}
              placeholder="Qu'est-ce que le soin Hydrafacial ?"
            />
          </Field>
        </div>
        <Field label="Titre introduction">
          <input
            type="text"
            value={data.intro.headline}
            onChange={(e) => setIntro("headline", e.target.value)}
            className={inputCls}
            placeholder="Qu'est-ce que l'Hydrafacial ?"
          />
        </Field>
        <Field label="Description">
          <textarea
            value={data.intro.description}
            onChange={(e) => setIntro("description", e.target.value)}
            className={textareaCls}
            rows={4}
            placeholder="Description complète du soin..."
          />
        </Field>
        <Field label="Points clés (liste)">
          <div className="space-y-2">
            {data.intro.listItems.map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <input
                  type="text"
                  value={item}
                  onChange={(e) => updateListItem(i, e.target.value)}
                  className={inputCls}
                  placeholder="Point clé..."
                />
                {data.intro.listItems.length > 1 && (
                  <RemoveBtn onClick={() => setData((d) => ({ ...d, intro: { ...d.intro, listItems: d.intro.listItems.filter((_, j) => j !== i) } }))} />
                )}
              </div>
            ))}
            <AddBtn onClick={() => setData((d) => ({ ...d, intro: { ...d.intro, listItems: [...d.intro.listItems, ""] } }))} label="Ajouter un point" />
          </div>
        </Field>
      </Section>

      {/* ── Bénéfices ─────────────────────────────────────────────────── */}
      <Section title="Bénéfices">
        <div className="space-y-4">
          {data.benefits.map((b, i) => (
            <div key={i} className="border border-[#f0f0f0] p-4 space-y-3">
              <div className="flex items-start gap-2">
                <div className="flex-1 space-y-3">
                  <input
                    type="text"
                    value={b.title}
                    onChange={(e) => updateBenefit(i, "title", e.target.value)}
                    className={inputCls}
                    placeholder="Titre du bénéfice"
                  />
                  <textarea
                    value={b.description}
                    onChange={(e) => updateBenefit(i, "description", e.target.value)}
                    className={textareaCls}
                    rows={2}
                    placeholder="Description du bénéfice..."
                  />
                </div>
                {data.benefits.length > 1 && (
                  <RemoveBtn onClick={() => setData((d) => ({ ...d, benefits: d.benefits.filter((_, j) => j !== i) }))} />
                )}
              </div>
            </div>
          ))}
          <AddBtn onClick={() => setData((d) => ({ ...d, benefits: [...d.benefits, { title: "", description: "" }] }))} label="Ajouter un bénéfice" />
        </div>
      </Section>

      {/* ── Tarifs ────────────────────────────────────────────────────── */}
      <Section title="Tarifs">
        <div className="grid grid-cols-2 gap-5">
          <Field label="Titre de la section tarifs">
            <input
              type="text"
              value={data.pricing.headline}
              onChange={(e) => setPricing("headline", e.target.value)}
              className={inputCls}
              placeholder="Tarifs Hydrafacial à Cotonou"
            />
          </Field>
          <Field label="Note tarifaire">
            <input
              type="text"
              value={data.pricing.note}
              onChange={(e) => setPricing("note", e.target.value)}
              className={inputCls}
              placeholder="Première consultation offerte."
            />
          </Field>
        </div>
        <Field label="Lignes tarifaires">
          <div className="space-y-2">
            {data.pricing.items.map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <input
                  type="text"
                  value={item.label}
                  onChange={(e) => updatePricingItem(i, "label", e.target.value)}
                  className={`${inputCls} flex-[2]`}
                  placeholder="Hydrafacial classique (30 min)"
                />
                <input
                  type="text"
                  value={item.price}
                  onChange={(e) => updatePricingItem(i, "price", e.target.value)}
                  className={`${inputCls} flex-1`}
                  placeholder="25 000 FCFA"
                />
                <input
                  type="text"
                  value={item.note}
                  onChange={(e) => updatePricingItem(i, "note", e.target.value)}
                  className={`${inputCls} flex-1`}
                  placeholder="Note optionnelle"
                />
                {data.pricing.items.length > 1 && (
                  <RemoveBtn onClick={() => setData((d) => ({ ...d, pricing: { ...d.pricing, items: d.pricing.items.filter((_, j) => j !== i) } }))} />
                )}
              </div>
            ))}
            <AddBtn onClick={() => setData((d) => ({ ...d, pricing: { ...d.pricing, items: [...d.pricing.items, { label: "", price: "", note: "" }] } }))} label="Ajouter un tarif" />
          </div>
        </Field>
      </Section>

      {/* ── FAQ ────────────────────────────────────────────────────────── */}
      <Section title="FAQ">
        <div className="space-y-4">
          {data.faq.map((item, i) => (
            <div key={i} className="border border-[#f0f0f0] p-4 space-y-3">
              <div className="flex items-start gap-2">
                <div className="flex-1 space-y-3">
                  <input
                    type="text"
                    value={item.question}
                    onChange={(e) => updateFaq(i, "question", e.target.value)}
                    className={inputCls}
                    placeholder="Question fréquente..."
                  />
                  <textarea
                    value={item.answer}
                    onChange={(e) => updateFaq(i, "answer", e.target.value)}
                    className={textareaCls}
                    rows={2}
                    placeholder="Réponse..."
                  />
                </div>
                {data.faq.length > 1 && (
                  <RemoveBtn onClick={() => setData((d) => ({ ...d, faq: d.faq.filter((_, j) => j !== i) }))} />
                )}
              </div>
            </div>
          ))}
          <AddBtn onClick={() => setData((d) => ({ ...d, faq: [...d.faq, { question: "", answer: "" }] }))} label="Ajouter une question" />
        </div>
      </Section>

      {/* ── CTA ───────────────────────────────────────────────────────── */}
      <Section title="Appel à l'action (bas de page)">
        <Field label="Titre CTA">
          <input
            type="text"
            value={data.cta.headline}
            onChange={(e) => setCta("headline", e.target.value)}
            className={inputCls}
            placeholder="Prête pour un éclat immédiat ?"
          />
        </Field>
        <Field label="Description CTA">
          <textarea
            value={data.cta.description}
            onChange={(e) => setCta("description", e.target.value)}
            className={textareaCls}
            rows={2}
            placeholder="Réservez votre séance dès aujourd'hui..."
          />
        </Field>
      </Section>

      {/* ── Submit ─────────────────────────────────────────────────────── */}
      <div className="flex items-center gap-4 pb-4">
        <button
          type="submit"
          disabled={saving}
          className="flex items-center gap-2 bg-[#6D071A] text-white text-[13px] font-bold px-6 py-3 hover:bg-black transition-colors disabled:opacity-60 uppercase tracking-wide"
        >
          {saving ? (
            <>
              <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Enregistrement...
            </>
          ) : (
            <>{data.id ? "Mettre à jour" : "Créer le service"}</>
          )}
        </button>
        <button
          type="button"
          onClick={() => router.push("/admin/services")}
          className="text-[13px] text-[#666] hover:text-black transition-colors"
        >
          Annuler
        </button>
      </div>
    </form>
  );
}
