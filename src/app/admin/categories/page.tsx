"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AdminShell } from "@/components/admin/AdminShell";
import {
  ChevronDown, ChevronRight, Upload, ImageIcon,
  Pencil, Trash2, Check, X, Plus, Tag, Layers,
} from "lucide-react";

// ── Types ──────────────────────────────────────────────────────────────────
interface Category { id: string; key: string; label: string; image: string | null; sortOrder: number; }
// { [category]: { [group]: [{key, count}] } }
type StructureData = Record<string, Record<string, { key: string; count: number }[]>>;

const MAIN_KEYS = ["visage", "soin-corps", "mains-pieds", "consultation", "formation"];

// Labels lisibles pour les groupes et sous-catégories
const LABELS: Record<string, string> = {
  "soin-classique":    "Soin Classique",
  "soin-avance":       "Soin Avancé",
  "peeling":           "Peeling",
  "microneedling":     "Microneedling",
  "microdermabrasion": "Microdermabrasion",
  "oxygenation":       "Oxygénation",
  "hydra-facial":      "Hydra Facial",
  "traitements":       "Traitements",
  "epilation":         "Épilation",
  "massage":           "Massage",
  "gommage":           "Gommage",
  "soins-intimes":     "Soins Intimes",
  "manucure":          "Manucure",
  "pedicure":          "Pédicure",
  "manucure-pedicure": "Manucure & Pédicure",
  "consultation":      "Consultation",
  "formation":         "Formation",
  "duo-enfants":       "Duo & Enfants",
};
const label = (key: string) => LABELS[key] ?? key;

// ── Sous-catégorie row ─────────────────────────────────────────────────────
function SubcatRow({ categoryKey, groupKey, sub, onReload }: {
  categoryKey: string; groupKey: string;
  sub: { key: string; count: number };
  onReload: () => void;
}) {
  const [editing, setEditing] = useState(false);
  const [val, setVal] = useState(sub.key);
  const [busy, setBusy] = useState(false);
  const [confirmDel, setConfirmDel] = useState(false);

  async function rename() {
    if (!val.trim() || val === sub.key) { setEditing(false); return; }
    setBusy(true);
    await fetch("/api/admin/subcategories", {
      method: "PATCH", headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ category: categoryKey, group: groupKey, oldKey: sub.key, newKey: val }),
    });
    setBusy(false); setEditing(false); onReload();
  }

  async function del() {
    setBusy(true);
    await fetch("/api/admin/subcategories", {
      method: "DELETE", headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ category: categoryKey, group: groupKey, key: sub.key }),
    });
    setBusy(false); setConfirmDel(false); onReload();
  }

  if (sub.key === "__none__") return null;

  return (
    <div className="flex items-center gap-3 pl-8 pr-4 py-2 border-b border-[#f2f2f2] last:border-0 group hover:bg-white transition-colors">
      <Tag className="w-3 h-3 text-[#6D071A]/50 shrink-0" />
      {editing ? (
        <div className="flex flex-1 items-center gap-2">
          <input value={val} onChange={e => setVal(e.target.value)} onKeyDown={e => e.key === "Enter" && rename()}
            className="flex-1 text-[12px] font-mono border border-[#6D071A] px-2 py-1 focus:outline-none" autoFocus />
          <button onClick={rename} disabled={busy} className="p-1 bg-[#6D071A] text-white hover:bg-black rounded">
            {busy ? <div className="w-3 h-3 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : <Check className="w-3 h-3" />}
          </button>
          <button onClick={() => { setEditing(false); setVal(sub.key); }} className="p-1 text-[#aaa] hover:text-[#333]"><X className="w-3 h-3" /></button>
        </div>
      ) : (
        <>
          <span className="flex-1 text-[13px] text-[#444]">
            <span className="font-medium">{label(sub.key)}</span>
            <span className="text-[11px] text-[#bbb] font-mono ml-2">{sub.key}</span>
          </span>
          <span className="text-[11px] text-[#bbb] shrink-0">{sub.count} service{sub.count > 1 ? "s" : ""}</span>
          <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity shrink-0">
            <button onClick={() => setEditing(true)} className="p-1 text-[#ccc] hover:text-[#6D071A]"><Pencil className="w-3 h-3" /></button>
            {confirmDel ? (
              <div className="flex items-center gap-1">
                <span className="text-[10px] text-red-500 font-bold">Supprimer ?</span>
                <button onClick={del} className="text-[10px] bg-red-500 text-white px-1.5 py-0.5 font-bold hover:bg-red-600">Oui</button>
                <button onClick={() => setConfirmDel(false)} className="text-[10px] text-[#999] px-1">Non</button>
              </div>
            ) : (
              <button onClick={() => setConfirmDel(true)} className="p-1 text-[#ccc] hover:text-red-500"><Trash2 className="w-3 h-3" /></button>
            )}
          </div>
        </>
      )}
    </div>
  );
}

// ── Groupe row (niveau 2 dans la hiérarchie) ───────────────────────────────
function GroupRow({ categoryKey, groupKey, subcats, onReload }: {
  categoryKey: string; groupKey: string;
  subcats: { key: string; count: number }[];
  onReload: () => void;
}) {
  const [open, setOpen] = useState(false);
  const [addingSubcat, setAddingSubcat] = useState(false);
  const [newSubKey, setNewSubKey] = useState("");
  const [addBusy, setAddBusy] = useState(false);

  const validSubcats = subcats.filter(s => s.key !== "__none__");
  const total = validSubcats.reduce((s, x) => s + x.count, 0);

  async function addSubcat() {
    if (!newSubKey.trim()) return;
    setAddBusy(true);
    await fetch("/api/admin/subcategories", {
      method: "PATCH", headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ category: categoryKey, group: groupKey, oldKey: `__new__${Date.now()}`, newKey: newSubKey }),
    });
    setAddBusy(false); setNewSubKey(""); setAddingSubcat(false); onReload();
  }

  if (groupKey === "__none__") return null;

  return (
    <div className="border-b border-[#f0f0f0] last:border-0">
      {/* En-tête du groupe */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-3 px-4 py-2.5 hover:bg-[#f7f3f3] transition-colors text-left"
      >
        <Layers className="w-3.5 h-3.5 text-[#6D071A] shrink-0" />
        <span className="flex-1 text-[13px] font-semibold text-[#222]">{label(groupKey)}</span>
        <span className="text-[11px] text-[#bbb]">
          {validSubcats.length > 0 ? `${validSubcats.length} sous-cat. · ` : ""}{total} services
        </span>
        {open
          ? <ChevronDown className="w-3.5 h-3.5 text-[#6D071A] shrink-0" />
          : <ChevronRight className="w-3.5 h-3.5 text-[#aaa] shrink-0" />
        }
      </button>

      {/* Sous-catégories du groupe */}
      {open && (
        <div className="bg-[#fdfcfb]">
          {validSubcats.length === 0 && !addingSubcat && (
            <p className="pl-8 pr-4 py-2 text-[12px] text-[#ccc] italic">Services directs dans ce groupe</p>
          )}
          {validSubcats.map(sub => (
            <SubcatRow key={sub.key} categoryKey={categoryKey} groupKey={groupKey} sub={sub} onReload={onReload} />
          ))}
          {/* Ajouter sous-catégorie */}
          <div className="pl-8 pr-4 py-2.5">
            {addingSubcat ? (
              <div className="flex items-center gap-2">
                <input value={newSubKey} onChange={e => setNewSubKey(e.target.value)} onKeyDown={e => e.key === "Enter" && addSubcat()}
                  className="flex-1 text-[12px] font-mono border border-[#6D071A] px-2 py-1 focus:outline-none" placeholder="ex: soin-avance" autoFocus />
                <button onClick={addSubcat} disabled={addBusy} className="px-3 py-1 text-[11px] font-bold bg-[#6D071A] text-white hover:bg-black">
                  {addBusy ? "…" : "Ajouter"}
                </button>
                <button onClick={() => { setAddingSubcat(false); setNewSubKey(""); }} className="text-[#aaa]"><X className="w-3.5 h-3.5" /></button>
              </div>
            ) : (
              <button onClick={() => setAddingSubcat(true)} className="flex items-center gap-1.5 text-[11px] text-[#bbb] hover:text-[#6D071A] transition-colors">
                <Plus className="w-3 h-3" />Ajouter une sous-catégorie
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

// ── Bloc catégorie ─────────────────────────────────────────────────────────
function CategoryBlock({ cat, structure, onCatSaved, onCatDeleted, onSubReload }: {
  cat: Category;
  structure: Record<string, { key: string; count: number }[]>;
  onCatSaved: (c: Category) => void;
  onCatDeleted: (id: string) => void;
  onSubReload: () => void;
}) {
  const [open, setOpen] = useState(false);
  const [editLabel, setEditLabel] = useState(false);
  const [lbl, setLbl] = useState(cat.label);
  const [img, setImg] = useState(cat.image ?? "");
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [confirmDel, setConfirmDel] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  async function handleUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]; if (!file) return;
    setUploading(true);
    const fd = new FormData(); fd.append("file", file);
    const res = await fetch("/api/admin/upload", { method: "POST", body: fd });
    const data = await res.json();
    if (data.url) setImg(data.url);
    setUploading(false);
    if (fileRef.current) fileRef.current.value = "";
  }

  async function saveCat() {
    setSaving(true);
    const res = await fetch(`/api/admin/categories/${cat.id}`, {
      method: "PATCH", headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ label: lbl, image: img }),
    });
    if (res.ok) { const u = await res.json(); onCatSaved(u); setSaved(true); setEditLabel(false); setTimeout(() => setSaved(false), 2000); }
    setSaving(false);
  }

  const groups = Object.entries(structure);
  const totalServices = groups.reduce((sum, [, subs]) => sum + subs.reduce((s, x) => s + x.count, 0), 0);
  const groupCount = groups.filter(([k]) => k !== "__none__").length;

  return (
    <div className="rounded-xl border border-[#e4e4e4] overflow-hidden shadow-sm bg-white">

      {/* ── En-tête ── */}
      <div className="flex items-stretch min-h-[88px]">

        {/* Image */}
        <div className="relative w-[88px] shrink-0 cursor-pointer overflow-hidden group bg-[#f5efee]"
          onClick={() => fileRef.current?.click()}>
          {img
            ? <Image src={img} alt={cat.label} fill sizes="88px" className="object-cover group-hover:scale-105 transition-transform duration-300" />
            : <div className="absolute inset-0 bg-gradient-to-br from-[#f5e8ea] to-[#e0c8cc] flex items-center justify-center">
                <ImageIcon className="w-6 h-6 text-[#c0a0a5]" />
              </div>
          }
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 flex items-center justify-center transition-colors">
            {uploading
              ? <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              : <Upload className="w-4 h-4 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
            }
          </div>
          <input ref={fileRef} type="file" accept="image/jpeg,image/png,image/webp" className="hidden" onChange={handleUpload} />
        </div>

        {/* Contenu */}
        <div className="flex-1 flex flex-col justify-center px-5 py-4 min-w-0">
          {editLabel ? (
            <div className="flex items-center gap-2 mb-1">
              <input value={lbl} onChange={e => setLbl(e.target.value)} onKeyDown={e => e.key === "Enter" && saveCat()}
                className="text-[15px] font-bold border-b-2 border-[#6D071A] focus:outline-none bg-transparent flex-1" autoFocus />
              <button onClick={saveCat} disabled={saving} className="p-1 text-[#6D071A] hover:text-black shrink-0">
                {saving ? <div className="w-3.5 h-3.5 border-2 border-[#6D071A]/30 border-t-[#6D071A] rounded-full animate-spin" /> : <Check className="w-3.5 h-3.5" />}
              </button>
              <button onClick={() => { setEditLabel(false); setLbl(cat.label); }} className="p-1 text-[#aaa] hover:text-[#333] shrink-0"><X className="w-3.5 h-3.5" /></button>
            </div>
          ) : (
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[15px] font-bold text-[#1a1a1a]">{cat.label}</span>
              {saved && <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />}
              <button onClick={() => setEditLabel(true)} className="p-1 text-[#ddd] hover:text-[#6D071A] shrink-0"><Pencil className="w-3 h-3" /></button>
            </div>
          )}
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-[10px] font-mono text-[#bbb] bg-[#f5f5f5] px-1.5 py-0.5 rounded">{cat.key}</span>
            {groupCount > 0 && <span className="text-[11px] text-[#bbb]">{groupCount} groupe{groupCount > 1 ? "s" : ""}</span>}
            <span className="text-[11px] text-[#bbb]">{totalServices} services</span>
          </div>
        </div>

        {/* Actions + toggle */}
        <div className="flex items-center pr-2 gap-1 shrink-0">
          {confirmDel ? (
            <div className="flex items-center gap-1.5">
              <span className="text-[11px] text-red-500 font-bold">Supprimer ?</span>
              <button onClick={() => fetch(`/api/admin/categories/${cat.id}`, { method: "DELETE" }).then(() => onCatDeleted(cat.id))}
                className="text-[11px] bg-red-500 text-white px-2 py-1 font-bold hover:bg-red-600 rounded">Oui</button>
              <button onClick={() => setConfirmDel(false)} className="text-[11px] text-[#999] px-1 rounded border border-[#e0e0e0]">Non</button>
            </div>
          ) : (
            <button onClick={() => setConfirmDel(true)} className="p-1.5 text-[#e0e0e0] hover:text-red-500 hover:bg-red-50 rounded transition-colors">
              <Trash2 className="w-3.5 h-3.5" />
            </button>
          )}
          <button onClick={() => setOpen(!open)} className="p-2 hover:bg-[#f5f5f5] rounded transition-colors" aria-label={open ? "Fermer" : "Ouvrir"}>
            {open ? <ChevronDown className="w-4 h-4 text-[#6D071A]" /> : <ChevronRight className="w-4 h-4 text-[#aaa]" />}
          </button>
        </div>
      </div>

      {/* ── Contenu accordéon ── */}
      {open && (
        <div className="border-t border-[#f0f0f0] bg-[#fdfcfb]">
          {groups.length === 0 ? (
            <p className="px-4 py-3 text-[12px] text-[#ccc] italic">Aucun service dans cette catégorie</p>
          ) : (
            groups
              .filter(([k]) => k !== "__none__")
              .map(([groupKey, subs]) => (
                <GroupRow
                  key={groupKey}
                  categoryKey={cat.key}
                  groupKey={groupKey}
                  subcats={subs}
                  onReload={onSubReload}
                />
              ))
          )}
        </div>
      )}
    </div>
  );
}

// ── Page ───────────────────────────────────────────────────────────────────
export default function AdminCategories() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [structure, setStructure] = useState<StructureData>({});
  const [loading, setLoading] = useState(true);

  async function loadStructure() {
    const data = await fetch("/api/admin/subcategories").then(r => r.json());
    setStructure(data);
  }

  useEffect(() => {
    Promise.all([
      fetch("/api/admin/categories").then(r => r.json()),
      fetch("/api/admin/subcategories").then(r => r.json()),
    ]).then(([cats, struct]) => {
      const ordered = MAIN_KEYS
        .map(key => (cats as Category[]).find(c => c.key === key))
        .filter(Boolean) as Category[];
      setCategories(ordered);
      setStructure(struct);
    }).finally(() => setLoading(false));
  }, []);

  return (
    <AdminShell>
      <div className="px-5 py-6 md:px-8 md:py-8">

        <div className="mb-7">
          <h1 className="text-[22px] font-bold text-[#1a1a1a]">Catégories</h1>
          <p className="text-[13px] text-[#999] mt-1">
            Cliquez sur <strong className="text-[#555]">›</strong> pour voir les groupes et sous-catégories
          </p>
        </div>

        {loading && (
          <div className="space-y-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="h-[88px] bg-[#f4f4f4] rounded-xl animate-pulse" />
            ))}
          </div>
        )}

        {!loading && (
          <div className="space-y-4 max-w-2xl">
            {categories.map(cat => (
              <CategoryBlock
                key={cat.id}
                cat={cat}
                structure={structure[cat.key] ?? {}}
                onCatSaved={u => setCategories(prev => prev.map(c => c.id === u.id ? u : c))}
                onCatDeleted={id => setCategories(prev => prev.filter(c => c.id !== id))}
                onSubReload={loadStructure}
              />
            ))}

            {MAIN_KEYS.filter(k => !categories.find(c => c.key === k)).map(key => (
              <div key={key} className="rounded-xl border border-dashed border-[#ddd] bg-[#fafafa] px-5 py-4 flex items-center gap-4">
                <div className="w-[60px] h-[60px] rounded-lg bg-[#f0ebe8] flex items-center justify-center shrink-0">
                  <ImageIcon className="w-5 h-5 text-[#ccc]" />
                </div>
                <div>
                  <p className="text-[13px] font-mono text-[#bbb]">{key}</p>
                  <p className="text-[11px] text-[#ccc]">Catégorie vide — aucun service</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </AdminShell>
  );
}
