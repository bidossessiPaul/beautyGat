"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

/* ─── Types ──────────────────────────────────────────────────────────────── */
interface Badge { icon: string; text: string }
interface Benefit { title: string; description: string }
interface PricingItem { label: string; price: string; note: string }
interface FaqItem { question: string; answer: string }
interface GalleryItem { src: string; alt: string }
interface Step { title: string; description: string }
interface Booster { title: string; description: string }

interface ServiceFormData {
  id?: string;
  slug: string;
  title: string;
  name: string;
  metaDescription: string;
  category: string;
  active: boolean;
  sortOrder: number;
  hero: { image: string; imageAlt: string; eyebrow: string; headline: string; subheadline: string; imagePosition: string };
  badges: Badge[];
  intro: { image: string; imageAlt: string; headline: string; description: string; listItems: string[] };
  forWho: { image: string; imageAlt: string; targets: string[] };
  steps: Step[];
  stepsImage: string;
  stepsImageAlt: string;
  boosters: Booster[];
  benefits: Benefit[];
  benefitsImage: string;
  benefitsImageAlt: string;
  pricing: { headline: string; note: string; items: PricingItem[] };
  faq: FaqItem[];
  cta: { headline: string; description: string };
  gallery: GalleryItem[];
}

const CATEGORIES = [
  { value: "visage", label: "Soins Visage" },
  { value: "corps", label: "Soins Corps" },
  { value: "epilation", label: "Épilation Laser" },
  { value: "epilation-cire", label: "Épilation à la Cire" },
  { value: "injections", label: "Injections" },
  { value: "diagnostic", label: "Diagnostic" },
  { value: "mains-pieds", label: "Mains & Pieds" },
  { value: "massages", label: "Massages" },
  { value: "duo-enfants", label: "Duo & Enfants" },
  { value: "privatisation", label: "Privatisation" },
];

/* Images de fallback par catégorie — identiques à ServicePageTemplate */
const HERO_FALLBACK: Record<string, string> = {
  visage:           "/images/soins/hydrafacial/hero.jpg",
  corps:            "/images/soins/bodysculpt/hero.png",
  epilation:        "/images/soins/epilation-laser-homme/hero.jpg",
  "epilation-cire": "/images/dsc00744-1-scaled.jpg",
  injections:       "/images/soins/injection-hyaluronique/hero.jpg",
  diagnostic:       "/images/soins/diagnostic-peau/hero.jpg",
  "mains-pieds":    "/images/appart-beaute-3873920.jpg",
  massages:         "/images/Appart-beaute-accueil-philosophie-1-scaled.jpg",
  "duo-enfants":    "/images/dsc01280.jpg",
  privatisation:    "/images/dsc01308-scaled.jpg",
};

const INTRO_FALLBACK: Record<string, string> = {
  visage:           "/images/soins/microneedling/hero.jpg",
  corps:            "/images/soins/bodysculpt/intro.jpg",
  epilation:        "/images/epilation-laser/Appart-beaute-epilation-intro-1-scaled.jpg",
  "epilation-cire": "/images/soins/epilation-laser-homme/intro.jpg",
  injections:       "/images/soins/injection-botulique/intro.jpg",
  diagnostic:       "/images/soins/diagnostic-peau/intro.jpg",
  "mains-pieds":    "/images/appart-beaute-3873926.jpg",
  massages:         "/images/appart-beaute-3873920.jpg",
  "duo-enfants":    "/images/dsc01308-scaled.jpg",
  privatisation:    "/images/dsc01280.jpg",
};

function empty(): ServiceFormData {
  return {
    slug: "",
    title: "",
    name: "",
    metaDescription: "",
    category: "visage",
    active: true,
    sortOrder: 0,
    hero: { image: "", imageAlt: "", eyebrow: "", headline: "", subheadline: "", imagePosition: "center" },
    badges: [{ icon: "✦", text: "" }],
    intro: { image: "", imageAlt: "", headline: "", description: "", listItems: [""] },
    forWho: { image: "", imageAlt: "", targets: [""] },
    steps: [{ title: "", description: "" }],
    stepsImage: "",
    stepsImageAlt: "",
    boosters: [],
    benefits: [{ title: "", description: "" }],
    benefitsImage: "",
    benefitsImageAlt: "",
    pricing: { headline: "", note: "", items: [{ label: "", price: "", note: "" }] },
    faq: [{ question: "", answer: "" }],
    cta: { headline: "", description: "" },
    gallery: [],
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

/* ─── Image preview ──────────────────────────────────────────────────────── */
function ImgPreview({ src, alt, fallback }: { src: string; alt: string; fallback?: string }) {
  const [err, setErr] = useState(false);
  const effective = (!src || err) ? (fallback ?? "") : src;
  const isFallback = (!src || err) && !!fallback;

  if (!effective) {
    return (
      <div className="w-full h-full bg-[#f0f0f0] flex flex-col items-center justify-center gap-1.5">
        <svg viewBox="0 0 20 20" fill="currentColor" className="w-8 h-8 text-[#ccc]">
          <path fillRule="evenodd" d="M4 3a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
        </svg>
        <span className="text-[11px] text-[#bbb] font-medium">Aucune image</span>
        <span className="text-[10px] text-[#ccc]">Entrez un chemin ci-dessous</span>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full">
      <Image
        src={effective}
        alt={alt || "preview"}
        fill
        className="object-cover"
        onError={() => setErr(true)}
      />
      {isFallback && (
        <div className="absolute bottom-0 inset-x-0 bg-black/60 text-white text-[10px] text-center py-1 font-medium">
          Image par défaut ({effective.split("/").pop()})
        </div>
      )}
    </div>
  );
}

/* ─── Image upload field ─────────────────────────────────────────────────── */
function ImageUploadField({
  value,
  onChange,
  fallback,
  folder = "soins",
  height,
}: {
  value: string;
  onChange: (url: string) => void;
  fallback?: string;
  folder?: string;
  height?: number;
}) {
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  async function handleFile(file: File) {
    setUploading(true);
    setUploadError(null);
    const fd = new FormData();
    fd.append("file", file);
    try {
      const res = await fetch(`/api/admin/upload?folder=${folder}`, { method: "POST", body: fd });
      const json = await res.json();
      if (!res.ok) { setUploadError(json.error ?? "Erreur upload"); return; }
      onChange(json.url);
    } catch {
      setUploadError("Erreur réseau");
    } finally {
      setUploading(false);
    }
  }

  return (
    <div className="space-y-2">
      <div
        className={`relative w-full rounded-[6px] overflow-hidden border border-[#e8e8e8] bg-[#f0f0f0] group cursor-pointer ${!height ? "h-full" : ""}`}
        style={height ? { height } : undefined}
        onClick={() => !uploading && fileRef.current?.click()}
      >
        <ImgPreview src={value} alt="" fallback={fallback} />
        <div className={`absolute inset-0 bg-black/40 flex flex-col items-center justify-center gap-2 transition-opacity ${uploading ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}>
          {uploading ? (
            <svg className="animate-spin w-7 h-7 text-white" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
          ) : (
            <>
              <svg viewBox="0 0 20 20" fill="currentColor" className="w-7 h-7 text-white drop-shadow">
                <path fillRule="evenodd" d="M3 17a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1zM6.293 6.707a1 1 0 0 1 0-1.414l3-3a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1-1.414 1.414L11 5.414V13a1 1 0 1 1-2 0V5.414L7.707 6.707a1 1 0 0 1-1.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-white text-[13px] font-semibold drop-shadow">{value ? "Changer l'image" : "Choisir une image"}</span>
              <span className="text-white/70 text-[11px]">JPG, PNG, WEBP</span>
            </>
          )}
        </div>
        {!value && !fallback && !uploading && (
          <div className="absolute bottom-3 inset-x-0 flex justify-center pointer-events-none">
            <span className="text-[11px] bg-white/80 text-[#666] px-3 py-1 rounded-full font-medium">Cliquer pour uploader</span>
          </div>
        )}
      </div>
      {value && (
        <div className="flex items-center gap-2">
          <span className="flex-1 text-[11px] text-[#999] truncate bg-[#f7f7f7] border border-[#e8e8e8] px-3 py-1.5 rounded-[4px] font-mono">{value}</span>
          <button
            type="button"
            onClick={() => onChange("")}
            className="shrink-0 w-7 h-7 flex items-center justify-center text-[#ccc] hover:text-red-500 hover:bg-red-50 rounded-[4px] border border-[#e8e8e8] hover:border-red-200 transition-all"
            title="Supprimer l'image"
          >
            <svg viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 0 1 1.414 0L10 8.586l4.293-4.293a1 1 0 1 1 1.414 1.414L11.414 10l4.293 4.293a1 1 0 0 1-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 0 1-1.414-1.414L8.586 10 4.293 5.707a1 1 0 0 1 0-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      )}
      {!value && fallback && (
        <p className="text-[11px] text-amber-600">Image par défaut utilisée : {fallback}</p>
      )}
      {uploadError && <p className="text-[11px] text-red-500">{uploadError}</p>}
      <input
        ref={fileRef}
        type="file"
        accept="image/jpeg,image/png,image/webp,image/gif"
        className="hidden"
        onChange={(e) => { const f = e.target.files?.[0]; if (f) handleFile(f); e.target.value = ""; }}
      />
    </div>
  );
}

/* ─── Field helpers ──────────────────────────────────────────────────────── */
function Label({ children, required }: { children: React.ReactNode; required?: boolean }) {
  return (
    <label className="block text-[11px] font-bold text-[#666] uppercase tracking-[0.08em] mb-1.5">
      {children} {required && <span className="text-red-500 normal-case font-normal">*</span>}
    </label>
  );
}

const inputCls = "w-full border border-[#e0e0e0] px-3 py-2.5 text-[13px] text-[#1a1a1a] focus:outline-none focus:border-[#6D071A] focus:ring-1 focus:ring-[#6D071A]/10 transition-colors bg-white rounded-[4px] placeholder:text-[#bbb]";
const textareaCls = `${inputCls} resize-none`;

/* ─── Section wrapper ────────────────────────────────────────────────────── */
function Section({ title, icon, children, badge }: { title: string; icon: React.ReactNode; children: React.ReactNode; badge?: string | number }) {
  return (
    <div className="bg-white border border-[#e8e8e8] rounded-[6px] overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
      <div className="px-6 py-4 border-b border-[#f0f0f0] flex items-center gap-3">
        <div className="w-7 h-7 rounded-[5px] bg-[#6D071A]/8 flex items-center justify-center text-[#6D071A] shrink-0">
          {icon}
        </div>
        <h3 className="text-[13px] font-bold text-[#1a1a1a] tracking-[-0.01em]">{title}</h3>
        {badge !== undefined && (
          <span className="ml-auto text-[11px] font-semibold bg-[#f0f0f0] text-[#888] px-2 py-0.5 rounded-full">
            {badge}
          </span>
        )}
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
      className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-[#6D071A] hover:text-black transition-colors mt-1 py-1"
    >
      <span className="w-4 h-4 rounded-full border-2 border-current flex items-center justify-center text-[10px] leading-none">+</span>
      {label}
    </button>
  );
}

function RemoveBtn({ onClick }: { onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="shrink-0 w-7 h-7 flex items-center justify-center text-[#ccc] hover:text-red-500 hover:bg-red-50 rounded-[4px] border border-[#e8e8e8] hover:border-red-200 transition-all"
      title="Supprimer"
    >
      <svg viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5">
        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 0 1 1.414 0L10 8.586l4.293-4.293a1 1 0 1 1 1.414 1.414L11.414 10l4.293 4.293a1 1 0 0 1-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 0 1-1.414-1.414L8.586 10 4.293 5.707a1 1 0 0 1 0-1.414z" clipRule="evenodd" />
      </svg>
    </button>
  );
}

/* ─── Icons ──────────────────────────────────────────────────────────────── */
const icons = {
  info:    <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4"><path fillRule="evenodd" d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0zm-7-4a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM9 9a1 1 0 0 0 0 2v3a1 1 0 0 0 1 1h1a1 1 0 1 0 0-2v-3a1 1 0 0 0-1-1H9z" clipRule="evenodd" /></svg>,
  image:   <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4"><path fillRule="evenodd" d="M4 3a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" /></svg>,
  badge:   <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4"><path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 0 0 0 5.09m.001 0a3.066 3.066 0 0 0 4.732 0 3.066 3.066 0 0 0 4.732 0 3.066 3.066 0 0 0 0-5.09 3.066 3.066 0 0 0-4.732 0 3.066 3.066 0 0 0-4.732 0zM3 11a5 5 0 0 1 5-5 5 5 0 0 1 5 5v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1z" clipRule="evenodd" /></svg>,
  text:    <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4"><path fillRule="evenodd" d="M3 4a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1zm0 4a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1zm0 4a1 1 0 0 1 1-1h7a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1z" clipRule="evenodd" /></svg>,
  star:    <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 0 0-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 0 0 .951-.69l1.07-3.292z" /></svg>,
  money:   <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4"><path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 0 1-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 0 1-.567.267z" /><path fillRule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm1-13a1 1 0 1 0-2 0v.092a4.535 4.535 0 0 0-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 1 0-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 1 0 2 0v-.092a4.535 4.535 0 0 0 1.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0 0 11 9.092V7.151c.391.127.68.317.843.504a1 1 0 1 0 1.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" /></svg>,
  faq:     <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4"><path fillRule="evenodd" d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0zm-8-3a1 1 0 0 0-.867.5 1 1 0 1 1-1.731-1A3 3 0 0 1 13 8a3.001 3.001 0 0 1-2 2.83V11a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1 1 1 0 1 0 0-2zm0 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" clipRule="evenodd" /></svg>,
  cta:     <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4"><path d="M10 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" /><path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 1 1-8 0 4 4 0 0 1 8 0z" clipRule="evenodd" /></svg>,
  gallery: <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4"><path d="M5 3a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5zM5 11a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2H5zM11 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2V5zM14 11a1 1 0 0 1 1 1v1h1a1 1 0 1 1 0 2h-1v1a1 1 0 1 1-2 0v-1h-1a1 1 0 1 1 0-2h1v-1a1 1 0 0 1 1-1z" /></svg>,
  users:   <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4"><path d="M9 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM17 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 0 0-1.5-4.33A5 5 0 0 1 19 16v1h-6.07zM6 11a5 5 0 0 1 5 5v1H1v-1a5 5 0 0 1 5-5z" /></svg>,
  steps:   <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4"><path fillRule="evenodd" d="M3 5a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1zM3 10a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1zM3 15a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1z" clipRule="evenodd" /></svg>,
  sparkle: <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4"><path fillRule="evenodd" d="M5 2a1 1 0 0 1 1 1v1h1a1 1 0 0 1 0 2H6v1a1 1 0 0 1-2 0V6H3a1 1 0 0 1 0-2h1V3a1 1 0 0 1 1-1zm0 10a1 1 0 0 1 1 1v1h1a1 1 0 1 1 0 2H6v1a1 1 0 1 1-2 0v-1H3a1 1 0 1 1 0-2h1v-1a1 1 0 0 1 1-1zM12 2a1 1 0 0 1 .967.744L14 7.439l3.693 1.233a1 1 0 0 1 0 1.906L14 11.81l-1.033 4.695a1 1 0 0 1-1.934 0L10 11.81l-3.693-1.232a1 1 0 0 1 0-1.906L10 7.439l1.033-4.695A1 1 0 0 1 12 2z" clipRule="evenodd" /></svg>,
};

/* ─── Main component ─────────────────────────────────────────────────────── */
export function ServiceForm({ initial }: { initial?: Partial<ServiceFormData> & { id?: string } }) {
  const router = useRouter();
  const [data, setData] = useState<ServiceFormData>(() => ({ ...empty(), ...initial }));
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [slugEdited, setSlugEdited] = useState(!!initial?.slug);

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

  function updateBadge(i: number, k: keyof Badge, v: string) {
    setData((d) => { const a = [...d.badges]; a[i] = { ...a[i], [k]: v }; return { ...d, badges: a }; });
  }
  function updateBenefit(i: number, k: keyof Benefit, v: string) {
    setData((d) => { const a = [...d.benefits]; a[i] = { ...a[i], [k]: v }; return { ...d, benefits: a }; });
  }
  function updatePricingItem(i: number, k: keyof PricingItem, v: string) {
    setData((d) => { const a = [...d.pricing.items]; a[i] = { ...a[i], [k]: v }; return { ...d, pricing: { ...d.pricing, items: a } }; });
  }
  function updateFaq(i: number, k: keyof FaqItem, v: string) {
    setData((d) => { const a = [...d.faq]; a[i] = { ...a[i], [k]: v }; return { ...d, faq: a }; });
  }
  function updateListItem(i: number, v: string) {
    setData((d) => { const a = [...d.intro.listItems]; a[i] = v; return { ...d, intro: { ...d.intro, listItems: a } }; });
  }
  function updateGallery(i: number, k: keyof GalleryItem, v: string) {
    setData((d) => { const a = [...d.gallery]; a[i] = { ...a[i], [k]: v }; return { ...d, gallery: a }; });
  }
  function updateForWhoTarget(i: number, v: string) {
    setData((d) => { const a = [...d.forWho.targets]; a[i] = v; return { ...d, forWho: { ...d.forWho, targets: a } }; });
  }
  function updateStep(i: number, k: keyof Step, v: string) {
    setData((d) => { const a = [...d.steps]; a[i] = { ...a[i], [k]: v }; return { ...d, steps: a }; });
  }
  function updateBooster(i: number, k: keyof Booster, v: string) {
    setData((d) => { const a = [...d.boosters]; a[i] = { ...a[i], [k]: v }; return { ...d, boosters: a }; });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    setError(null);
    try {
      const isEdit = !!data.id;
      const url = isEdit ? `/api/admin/services/${data.id}` : "/api/admin/services";
      const res = await fetch(url, {
        method: isEdit ? "PUT" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok) { setError(json.error ?? "Erreur inconnue"); return; }
      router.push("/admin/services");
      router.refresh();
    } catch {
      setError("Erreur réseau. Veuillez réessayer.");
    } finally {
      setSaving(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">

      {/* ── Error banner ──────────────────────────────────────────────────── */}
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-5 py-3.5 text-[13px] rounded-[4px] flex items-center gap-2">
          <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 shrink-0">
            <path fillRule="evenodd" d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0zm-7 4a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-1-9a1 1 0 0 0-1 1v4a1 1 0 1 0 2 0V6a1 1 0 0 0-1-1z" clipRule="evenodd" />
          </svg>
          {error}
        </div>
      )}

      {/* ── 1. Informations générales ──────────────────────────────────────── */}
      <Section title="Informations générales" icon={icons.info}>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label required>Titre de la page</Label>
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
          </div>
          <div>
            <Label required>Slug (URL)</Label>
            <div className="flex items-center gap-0">
              <span className="shrink-0 border border-r-0 border-[#e0e0e0] bg-[#f7f7f7] px-3 py-2.5 text-[12px] text-[#999] rounded-l-[4px]">/soins/</span>
              <input
                type="text"
                value={data.slug}
                onChange={(e) => { set("slug", e.target.value); setSlugEdited(true); }}
                className={`${inputCls} rounded-l-none`}
                placeholder="hydrafacial-cotonou"
              />
            </div>
          </div>
        </div>

        <div>
          <Label>Nom court du service</Label>
          <input
            type="text"
            value={data.name}
            onChange={(e) => set("name", e.target.value)}
            className={inputCls}
            placeholder="l'Hydrafacial (utilisé dans les titres de sections)"
          />
          <p className="text-[11px] text-[#aaa] mt-1">Ex&nbsp;: &quot;l&apos;Hydrafacial&quot; → &quot;Qu&apos;est-ce que l&apos;Hydrafacial ?&quot;</p>
        </div>

        <div>
          <Label>Meta description</Label>
          <textarea
            value={data.metaDescription}
            onChange={(e) => set("metaDescription", e.target.value)}
            className={textareaCls}
            rows={2}
            placeholder="Description affichée dans Google (150-160 caractères)"
          />
          <p className="text-[11px] text-[#aaa] mt-1">{data.metaDescription.length} / 160 caractères</p>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div>
            <Label>Catégorie</Label>
            <select value={data.category} onChange={(e) => set("category", e.target.value)} className={inputCls}>
              {CATEGORIES.map((c) => <option key={c.value} value={c.value}>{c.label}</option>)}
            </select>
          </div>
          <div>
            <Label>Ordre d&apos;affichage</Label>
            <input
              type="number"
              value={data.sortOrder}
              onChange={(e) => set("sortOrder", Number(e.target.value))}
              className={inputCls}
            />
          </div>
          <div>
            <Label>Statut</Label>
            <label className={`flex items-center gap-2.5 cursor-pointer border border-[#e0e0e0] px-3 py-2.5 rounded-[4px] ${data.active ? "bg-emerald-50 border-emerald-200" : "bg-[#fafafa]"}`}>
              <div
                onClick={() => set("active", !data.active)}
                className={`w-8 h-4.5 rounded-full relative transition-colors cursor-pointer ${data.active ? "bg-emerald-500" : "bg-[#ddd]"}`}
                style={{ height: "18px" }}
              >
                <div className={`absolute top-0.5 w-3.5 h-3.5 bg-white rounded-full shadow transition-transform ${data.active ? "translate-x-4" : "translate-x-0.5"}`} />
              </div>
              <span className={`text-[12px] font-semibold ${data.active ? "text-emerald-700" : "text-[#999]"}`}>
                {data.active ? "Actif" : "Inactif"}
              </span>
            </label>
          </div>
        </div>
      </Section>

      {/* ── 2. Hero ──────────────────────────────────────────────────────────── */}
      <Section title="Bannière Hero" icon={icons.image}>
        <div>
          <Label>Image hero</Label>
          <ImageUploadField
            value={data.hero.image}
            onChange={(url) => setHero("image", url)}
            fallback={HERO_FALLBACK[data.category]}
            height={240}
          />
        </div>
        <div>
          <Label>Texte alternatif</Label>
          <input
            type="text"
            value={data.hero.imageAlt}
            onChange={(e) => setHero("imageAlt", e.target.value)}
            className={inputCls}
            placeholder="Soin Hydrafacial à Cotonou"
          />
        </div>
        <div>
          <Label>Eyebrow (surtitre)</Label>
          <input
            type="text"
            value={data.hero.eyebrow}
            onChange={(e) => setHero("eyebrow", e.target.value)}
            className={inputCls}
            placeholder="Soin visage haute technologie"
          />
        </div>
        <div>
          <Label>Titre principal</Label>
          <input
            type="text"
            value={data.hero.headline}
            onChange={(e) => setHero("headline", e.target.value)}
            className={inputCls}
            placeholder="Hydrafacial à Cotonou : l'éclat en une séance"
          />
        </div>
        <div>
          <Label>Sous-titre</Label>
          <textarea
            value={data.hero.subheadline}
            onChange={(e) => setHero("subheadline", e.target.value)}
            className={textareaCls}
            rows={2}
            placeholder="Description courte sous le titre..."
          />
        </div>
      </Section>

      {/* ── 3. Badges ─────────────────────────────────────────────────────────── */}
      <Section title="Badges (points forts)" icon={icons.badge} badge={data.badges.length}>
        <div className="space-y-2.5">
          {data.badges.map((badge, i) => (
            <div key={i} className="flex items-center gap-2">
              <input
                type="text"
                value={badge.icon}
                onChange={(e) => updateBadge(i, "icon", e.target.value)}
                className={`${inputCls} w-14 text-center`}
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

      {/* ── 4. Introduction ───────────────────────────────────────────────────── */}
      <Section title="Section Introduction" icon={icons.text}>
        <div>
          <Label>Image introduction</Label>
          <ImageUploadField
            value={data.intro.image}
            onChange={(url) => setIntro("image", url)}
            fallback={INTRO_FALLBACK[data.category]}
            height={200}
          />
        </div>
        <div>
          <Label>Texte alternatif</Label>
          <input
            type="text"
            value={data.intro.imageAlt}
            onChange={(e) => setIntro("imageAlt", e.target.value)}
            className={inputCls}
            placeholder="Qu'est-ce que le soin ?"
          />
        </div>
        <div>
          <Label>Titre</Label>
          <input
            type="text"
            value={data.intro.headline}
            onChange={(e) => setIntro("headline", e.target.value)}
            className={inputCls}
            placeholder="Qu'est-ce que l'Hydrafacial ?"
          />
        </div>
        <div>
          <Label>Description</Label>
          <textarea
            value={data.intro.description}
            onChange={(e) => setIntro("description", e.target.value)}
            className={textareaCls}
            rows={4}
            placeholder="Description complète du soin..."
          />
        </div>

        <div>
          <Label>Points clés (liste)</Label>
          <div className="space-y-2">
            {data.intro.listItems.map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className="text-[#6D071A] text-[10px] font-bold shrink-0">✦</span>
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
        </div>
      </Section>

      {/* ── 5. Pour qui ───────────────────────────────────────────────────────── */}
      <Section title="Pour qui ? (indications)" icon={icons.users} badge={data.forWho.targets.length}>
        <div>
          <Label>Image</Label>
          <ImageUploadField
            value={data.forWho.image}
            onChange={(url) => setData((d) => ({ ...d, forWho: { ...d.forWho, image: url } }))}
            height={160}
          />
        </div>
        <div>
          <Label>Texte alternatif</Label>
          <input
            type="text"
            value={data.forWho.imageAlt}
            onChange={(e) => setData((d) => ({ ...d, forWho: { ...d.forWho, imageAlt: e.target.value } }))}
            className={inputCls}
            placeholder="Pour qui est l'Hydrafacial ?"
          />
        </div>
        <div>
          <Label>Profils ciblés</Label>
          <div className="space-y-2">
            {data.forWho.targets.map((t, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className="text-[#6D071A] text-[10px] font-bold shrink-0">✓</span>
                <input
                  type="text"
                  value={t}
                  onChange={(e) => updateForWhoTarget(i, e.target.value)}
                  className={inputCls}
                  placeholder="Peaux déshydratées sous le climat de Cotonou"
                />
                {data.forWho.targets.length > 1 && (
                  <RemoveBtn onClick={() => setData((d) => ({ ...d, forWho: { ...d.forWho, targets: d.forWho.targets.filter((_, j) => j !== i) } }))} />
                )}
              </div>
            ))}
            <AddBtn onClick={() => setData((d) => ({ ...d, forWho: { ...d.forWho, targets: [...d.forWho.targets, ""] } }))} label="Ajouter un profil" />
          </div>
        </div>
      </Section>

      {/* ── 6. Étapes du soin ─────────────────────────────────────────────────── */}
      <Section title="Étapes du soin" icon={icons.steps} badge={data.steps.length}>
        <div>
          <Label>Image des étapes <span className="normal-case font-normal text-[#aaa]">(si vide : image hero utilisée)</span></Label>
          <ImageUploadField
            value={data.stepsImage}
            onChange={(url) => setData((d) => ({ ...d, stepsImage: url }))}
            height={160}
          />
        </div>
        <div>
          <Label>Texte alternatif</Label>
          <input
            type="text"
            value={data.stepsImageAlt}
            onChange={(e) => setData((d) => ({ ...d, stepsImageAlt: e.target.value }))}
            className={inputCls}
            placeholder="Étapes du soin Hydrafacial"
          />
        </div>
        <div>
          <Label>Liste des étapes</Label>
          <div className="space-y-3">
            {data.steps.map((step, i) => (
              <div key={i} className="border border-[#f0f0f0] rounded-[5px] p-4 bg-[#fafafa] space-y-2">
                <div className="flex items-start gap-2">
                  <span className="w-7 h-7 rounded-full border-2 border-[#6D071A] flex items-center justify-center text-[#6D071A] font-bold text-[11px] shrink-0 mt-0.5">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flex-1 space-y-2">
                    <input
                      type="text"
                      value={step.title}
                      onChange={(e) => updateStep(i, "title", e.target.value)}
                      className={inputCls}
                      placeholder={`Titre de l'étape ${i + 1}`}
                    />
                    <textarea
                      value={step.description}
                      onChange={(e) => updateStep(i, "description", e.target.value)}
                      className={textareaCls}
                      rows={2}
                      placeholder="Description de cette étape..."
                    />
                  </div>
                  {data.steps.length > 1 && (
                    <RemoveBtn onClick={() => setData((d) => ({ ...d, steps: d.steps.filter((_, j) => j !== i) }))} />
                  )}
                </div>
              </div>
            ))}
            <AddBtn onClick={() => setData((d) => ({ ...d, steps: [...d.steps, { title: "", description: "" }] }))} label="Ajouter une étape" />
          </div>
        </div>
      </Section>

      {/* ── 7. Boosters ───────────────────────────────────────────────────────── */}
      <Section title="Boosters (optionnel)" icon={icons.sparkle} badge={data.boosters.length}>
        <p className="text-[12px] text-[#999] -mt-2">Si vide, la section Boosters n&apos;apparaît pas sur la page.</p>
        <div className="space-y-3">
          {data.boosters.map((b, i) => (
            <div key={i} className="border border-[#f0f0f0] rounded-[5px] p-4 bg-[#fafafa] space-y-2">
              <div className="flex items-start gap-2">
                <div className="flex-1 space-y-2">
                  <input
                    type="text"
                    value={b.title}
                    onChange={(e) => updateBooster(i, "title", e.target.value)}
                    className={inputCls}
                    placeholder="Booster Vitamine C"
                  />
                  <textarea
                    value={b.description}
                    onChange={(e) => updateBooster(i, "description", e.target.value)}
                    className={textareaCls}
                    rows={2}
                    placeholder="Description du booster..."
                  />
                </div>
                <RemoveBtn onClick={() => setData((d) => ({ ...d, boosters: d.boosters.filter((_, j) => j !== i) }))} />
              </div>
            </div>
          ))}
          <AddBtn onClick={() => setData((d) => ({ ...d, boosters: [...d.boosters, { title: "", description: "" }] }))} label="Ajouter un booster" />
        </div>
      </Section>

      {/* ── 8. Bénéfices / Résultats ──────────────────────────────────────────── */}
      <Section title="Résultats / Bénéfices" icon={icons.star} badge={data.benefits.length}>
        <div>
          <Label>Image résultats</Label>
          <ImageUploadField
            value={data.benefitsImage}
            onChange={(url) => setData((d) => ({ ...d, benefitsImage: url }))}
            fallback={INTRO_FALLBACK[data.category]}
            height={160}
          />
        </div>
        <div>
          <Label>Texte alternatif</Label>
          <input
            type="text"
            value={data.benefitsImageAlt}
            onChange={(e) => setData((d) => ({ ...d, benefitsImageAlt: e.target.value }))}
            className={inputCls}
            placeholder="Résultats du soin Hydrafacial"
          />
        </div>
        <div className="space-y-3">
          {data.benefits.map((b, i) => (
            <div key={i} className="border border-[#f0f0f0] rounded-[5px] p-4 bg-[#fafafa] space-y-3">
              <div className="flex items-start gap-2">
                <div className="flex-1 space-y-2">
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

      {/* ── 6. Tarifs ─────────────────────────────────────────────────────────── */}
      <Section title="Tarifs" icon={icons.money} badge={data.pricing.items.length}>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label>Titre de la section</Label>
            <input
              type="text"
              value={data.pricing.headline}
              onChange={(e) => setPricing("headline", e.target.value)}
              className={inputCls}
              placeholder="Tarifs Hydrafacial à Cotonou"
            />
          </div>
          <div>
            <Label>Note tarifaire</Label>
            <input
              type="text"
              value={data.pricing.note}
              onChange={(e) => setPricing("note", e.target.value)}
              className={inputCls}
              placeholder="Première consultation offerte."
            />
          </div>
        </div>

        <div>
          <Label>Lignes tarifaires</Label>
          <div className="border border-[#e8e8e8] rounded-[5px] overflow-hidden">
            <div className="grid grid-cols-[2fr_1fr_1fr_32px] gap-0 bg-[#f7f7f7] border-b border-[#e8e8e8] px-3 py-2">
              {["Prestation", "Prix", "Note", ""].map((h) => (
                <span key={h} className="text-[10px] font-bold text-[#999] uppercase tracking-wide">{h}</span>
              ))}
            </div>
            <div className="divide-y divide-[#f0f0f0]">
              {data.pricing.items.map((item, i) => (
                <div key={i} className="grid grid-cols-[2fr_1fr_1fr_32px] gap-2 px-3 py-2 items-center">
                  <input
                    type="text"
                    value={item.label}
                    onChange={(e) => updatePricingItem(i, "label", e.target.value)}
                    className={`${inputCls} !py-2`}
                    placeholder="Hydrafacial classique (30 min)"
                  />
                  <input
                    type="text"
                    value={item.price}
                    onChange={(e) => updatePricingItem(i, "price", e.target.value)}
                    className={`${inputCls} !py-2`}
                    placeholder="25 000 FCFA"
                  />
                  <input
                    type="text"
                    value={item.note}
                    onChange={(e) => updatePricingItem(i, "note", e.target.value)}
                    className={`${inputCls} !py-2`}
                    placeholder="Optionnel"
                  />
                  {data.pricing.items.length > 1 ? (
                    <RemoveBtn onClick={() => setData((d) => ({ ...d, pricing: { ...d.pricing, items: d.pricing.items.filter((_, j) => j !== i) } }))} />
                  ) : <div />}
                </div>
              ))}
            </div>
          </div>
          <AddBtn onClick={() => setData((d) => ({ ...d, pricing: { ...d.pricing, items: [...d.pricing.items, { label: "", price: "", note: "" }] } }))} label="Ajouter un tarif" />
        </div>
      </Section>

      {/* ── 7. FAQ ────────────────────────────────────────────────────────────── */}
      <Section title="FAQ" icon={icons.faq} badge={data.faq.length}>
        <div className="space-y-3">
          {data.faq.map((item, i) => (
            <div key={i} className="border border-[#f0f0f0] rounded-[5px] bg-[#fafafa] overflow-hidden">
              <div className="flex items-start gap-2 p-4">
                <div className="flex-1 space-y-2">
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
                    placeholder="Réponse détaillée..."
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

      {/* ── 8. CTA ────────────────────────────────────────────────────────────── */}
      <Section title="Appel à l&apos;action" icon={icons.cta}>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label>Titre</Label>
            <input
              type="text"
              value={data.cta.headline}
              onChange={(e) => setCta("headline", e.target.value)}
              className={inputCls}
              placeholder="Prête pour un éclat immédiat ?"
            />
          </div>
          <div>
            <Label>Description</Label>
            <input
              type="text"
              value={data.cta.description}
              onChange={(e) => setCta("description", e.target.value)}
              className={inputCls}
              placeholder="Réservez votre séance dès aujourd'hui..."
            />
          </div>
        </div>
      </Section>

      {/* ── 9. Galerie ────────────────────────────────────────────────────────── */}
      <Section title="Galerie photos" icon={icons.gallery} badge={data.gallery.length}>
        {data.gallery.length === 0 && (
          <div className="border-2 border-dashed border-[#e0e0e0] rounded-[5px] py-10 text-center">
            <div className="text-[#ddd] mb-2 flex justify-center">{icons.gallery}</div>
            <p className="text-[13px] text-[#bbb]">Aucune photo dans la galerie</p>
            <p className="text-[11px] text-[#ccc] mt-0.5">Ajoutez des photos pour montrer vos résultats</p>
          </div>
        )}
        {data.gallery.length > 0 && (
          <div className="grid grid-cols-3 gap-3">
            {data.gallery.map((img, i) => (
              <div key={i} className="border border-[#e8e8e8] rounded-[5px] overflow-hidden bg-[#fafafa]">
                <div className="relative w-full aspect-square">
                  <ImageUploadField
                    value={img.src}
                    onChange={(url) => updateGallery(i, "src", url)}
                  />
                  <button
                    type="button"
                    onClick={() => setData((d) => ({ ...d, gallery: d.gallery.filter((_, j) => j !== i) }))}
                    className="absolute top-1.5 right-1.5 z-10 w-6 h-6 bg-white/90 hover:bg-red-50 border border-[#e0e0e0] hover:border-red-300 rounded-full flex items-center justify-center text-[#999] hover:text-red-500 transition-all shadow-sm"
                  >
                    <svg viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 0 1 1.414 0L10 8.586l4.293-4.293a1 1 0 1 1 1.414 1.414L11.414 10l4.293 4.293a1 1 0 0 1-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 0 1-1.414-1.414L8.586 10 4.293 5.707a1 1 0 0 1 0-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                  <span className="absolute bottom-1.5 left-1.5 z-10 text-[10px] font-bold bg-black/50 text-white px-1.5 py-0.5 rounded-full pointer-events-none">
                    #{i + 1}
                  </span>
                </div>
                <div className="px-2 pb-2">
                  <input
                    type="text"
                    value={img.alt}
                    onChange={(e) => updateGallery(i, "alt", e.target.value)}
                    className={`${inputCls} !py-1.5 !text-[11px]`}
                    placeholder="Description de l'image"
                  />
                </div>
              </div>
            ))}
          </div>
        )}
        <AddBtn
          onClick={() => setData((d) => ({ ...d, gallery: [...d.gallery, { src: "", alt: "" }] }))}
          label="Ajouter une photo"
        />
      </Section>

      {/* ── Submit ─────────────────────────────────────────────────────────────── */}
      <div className="flex items-center gap-3 py-2 sticky bottom-0 bg-transparent">
        <div className="flex items-center gap-3 bg-white border border-[#e8e8e8] shadow-[0_-2px_12px_rgba(0,0,0,0.06)] px-5 py-3.5 rounded-[6px] w-full">
          <button
            type="submit"
            disabled={saving}
            className="flex items-center gap-2 bg-[#6D071A] text-white text-[13px] font-bold px-6 py-2.5 hover:bg-black transition-colors disabled:opacity-60 rounded-[4px] uppercase tracking-wide"
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
            className="text-[13px] text-[#666] hover:text-black transition-colors px-4 py-2.5 border border-[#e0e0e0] hover:border-[#999] rounded-[4px]"
          >
            Annuler
          </button>
          {data.slug && (
            <a
              href={`/soins/${data.slug}`}
              target="_blank"
              className="ml-auto text-[12px] text-[#6D071A] hover:underline flex items-center gap-1"
            >
              <svg viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5">
                <path d="M11 3a1 1 0 1 0 0 2h2.586l-6.293 6.293a1 1 0 1 0 1.414 1.414L15 6.414V9a1 1 0 1 0 2 0V4a1 1 0 0 0-1-1h-5z" />
                <path d="M5 5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-3a1 1 0 1 0-2 0v3H5V7h3a1 1 0 0 0 0-2H5z" />
              </svg>
              Voir la page
            </a>
          )}
        </div>
      </div>
    </form>
  );
}
