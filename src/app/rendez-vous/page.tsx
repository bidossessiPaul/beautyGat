"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ChevronLeft, ChevronRight, Check, Calendar, Clock, User, Sparkles, X, ArrowRight, ShieldCheck, AlertCircle } from "lucide-react";
import { TIME_SLOTS, DEPOSIT_DISPLAY_AMOUNT } from "@/lib/booking";

/* ─────────────────────────────────────────────────────────── types */
interface Service {
  id: string;
  slug: string;
  title: string;
  category: string;
  hero: { image?: string; headline?: string } | null;
  intro: { description?: string; highlights?: { label: string; value: string }[] } | null;
  benefits: { icon?: string; title: string; description: string }[] | null;
  pricing: { items?: { label: string; price: string }[] } | null;
}

interface FormData {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  message: string;
}

const CATEGORY_LABELS: Record<string, string> = {
  visage: "Visage", corps: "Corps", "epilation-cire": "Épilation cire",
  massages: "Massages", "mains-pieds": "Mains & Pieds", "duo-enfants": "Duo & Enfants",
  injections: "Médical", diagnostic: "Consultations", privatisation: "Privatisation",
};


/* ─────────────────────────────────────── service preview drawer */
function ServiceDrawer({ service, onClose, onSelect }: {
  service: Service;
  onClose: () => void;
  onSelect: () => void;
}) {
  const img = service.hero?.image || null;
  const items = service.pricing?.items ?? [];
  const firstPrice = items[0]?.price ?? null;
  const isDevis = firstPrice?.toLowerCase().includes("devis") || firstPrice?.toLowerCase().includes("demande");
  const benefits = Array.isArray(service.benefits) ? service.benefits : [];
  const intro = service.intro;

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/50 z-40 backdrop-blur-sm" onClick={onClose} />

      {/* Drawer */}
      <div className="fixed right-0 top-0 h-full w-full sm:w-[480px] bg-white z-50 flex flex-col shadow-2xl overflow-y-auto">

        {/* Image hero */}
        <div className="relative h-[220px] shrink-0 bg-[#f0ebe8]">
          {img
            ? <Image src={img} alt={service.title} fill className="object-cover" sizes="480px" />
            : <div className="absolute inset-0 bg-gradient-to-br from-[#f5e8ea] to-[#e0c8cc]" />
          }
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <button onClick={onClose} className="absolute top-4 right-4 w-8 h-8 bg-black/40 hover:bg-black/70 flex items-center justify-center transition-colors backdrop-blur-sm">
            <X className="w-4 h-4 text-white" />
          </button>
          <div className="absolute bottom-4 left-5 right-5">
            <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#f5a0a0] block mb-1">
              {CATEGORY_LABELS[service.category] ?? service.category}
            </span>
            <h3 className="text-white font-bold text-[18px] leading-tight">{service.title}</h3>
          </div>
        </div>

        {/* Contenu */}
        <div className="flex-1 p-5 space-y-5">

          {/* Tarifs */}
          {items.length > 0 && (
            <div className="bg-[#fdf5f6] border border-[#f0d9dc] p-4">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#6D071A] mb-2.5">Tarifs</p>
              <div className="space-y-1.5">
                {items.map((item, i) => (
                  <div key={i} className="flex items-center justify-between gap-3">
                    <span className="text-[13px] text-[#555]">{item.label}</span>
                    <span className="text-[13px] font-bold text-[#6D071A] shrink-0">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Description */}
          {intro?.description && (
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#999] mb-2">À propos</p>
              <p className="text-[13px] text-[#555] leading-[1.75]">{intro.description}</p>
            </div>
          )}

          {/* Highlights */}
          {intro?.highlights && intro.highlights.length > 0 && (
            <div className="grid grid-cols-3 gap-2">
              {intro.highlights.map((h, i) => (
                <div key={i} className="bg-[#faf8f6] border border-[#ebebeb] p-3 text-center">
                  <p className="text-[16px] font-bold text-[#6D071A] leading-none mb-1">{h.value}</p>
                  <p className="text-[10px] text-[#888] uppercase tracking-[0.1em] leading-tight">{h.label}</p>
                </div>
              ))}
            </div>
          )}

          {/* Bénéfices */}
          {benefits.length > 0 && (
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#999] mb-3">Les bénéfices</p>
              <div className="space-y-3">
                {benefits.slice(0, 4).map((b, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-[#6D071A] text-[14px] mt-0.5 shrink-0">{b.icon || "✦"}</span>
                    <div>
                      <p className="text-[13px] font-semibold text-[#1a1a1a]">{b.title}</p>
                      <p className="text-[12px] text-[#777] leading-relaxed mt-0.5">{b.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* CTA sticky */}
        <div className="sticky bottom-0 bg-white border-t border-[#e8e8e8] p-4">
          {firstPrice && (
            <p className="text-[11px] text-[#999] text-center mb-2">
              {isDevis ? "Tarif sur devis — contactez-nous" : `À partir de ${firstPrice}`}
            </p>
          )}
          <button
            onClick={onSelect}
            className="w-full bg-[#6D071A] text-white text-[12px] font-bold uppercase tracking-widest py-4 hover:bg-black transition-colors flex items-center justify-center gap-2"
          >
            Choisir ce soin
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </>
  );
}

/* ─────────────────────────────────────────── mini calendar component */
function MiniCalendar({ selected, onSelect }: { selected: string | null; onSelect: (d: string) => void }) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const [viewYear, setViewYear] = useState(today.getFullYear());
  const [viewMonth, setViewMonth] = useState(today.getMonth());

  const firstDay = new Date(viewYear, viewMonth, 1);
  const lastDay = new Date(viewYear, viewMonth + 1, 0);
  const startDow = (firstDay.getDay() + 6) % 7; // lundi=0
  const daysInMonth = lastDay.getDate();

  const monthLabel = new Date(viewYear, viewMonth, 1).toLocaleDateString("fr-FR", { month: "long", year: "numeric" });

  function prevMonth() {
    if (viewMonth === 0) { setViewMonth(11); setViewYear(y => y - 1); }
    else setViewMonth(m => m - 1);
  }
  function nextMonth() {
    if (viewMonth === 11) { setViewMonth(0); setViewYear(y => y + 1); }
    else setViewMonth(m => m + 1);
  }

  const cells: (number | null)[] = [...Array(startDow).fill(null), ...Array.from({ length: daysInMonth }, (_, i) => i + 1)];
  while (cells.length % 7 !== 0) cells.push(null);

  return (
    <div className="select-none">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <button onClick={prevMonth} className="p-1.5 hover:bg-[#f0f0f0] rounded transition-colors">
          <ChevronLeft className="w-4 h-4 text-[#555]" />
        </button>
        <span className="text-[14px] font-bold text-[#1a1a1a] capitalize">{monthLabel}</span>
        <button onClick={nextMonth} className="p-1.5 hover:bg-[#f0f0f0] rounded transition-colors">
          <ChevronRight className="w-4 h-4 text-[#555]" />
        </button>
      </div>

      {/* DOW headers */}
      <div className="grid grid-cols-7 mb-1">
        {["Lu", "Ma", "Me", "Je", "Ve", "Sa", "Di"].map(d => (
          <div key={d} className="text-center text-[11px] font-bold uppercase tracking-wider text-[#bbb] py-1">{d}</div>
        ))}
      </div>

      {/* Days */}
      <div className="grid grid-cols-7 gap-0.5">
        {cells.map((day, i) => {
          if (!day) return <div key={i} />;
          const date = new Date(viewYear, viewMonth, day);
          const dateStr = `${viewYear}-${String(viewMonth + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
          const isPast = date < today;
          const isSunday = date.getDay() === 0;
          const disabled = isPast || isSunday;
          const isSelected = selected === dateStr;
          const isToday = date.getTime() === today.getTime();

          return (
            <button
              key={i}
              disabled={disabled}
              onClick={() => onSelect(dateStr)}
              className={`aspect-square flex items-center justify-center text-[13px] font-medium rounded transition-all ${
                isSelected
                  ? "bg-[#6D071A] text-white font-bold"
                  : disabled
                  ? "text-[#ddd] cursor-not-allowed"
                  : isToday
                  ? "border border-[#6D071A] text-[#6D071A] hover:bg-[#6D071A]/10"
                  : "text-[#333] hover:bg-[#f5eded] hover:text-[#6D071A]"
              }`}
            >
              {day}
            </button>
          );
        })}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────── step indicator */
function StepIndicator({ step }: { step: number }) {
  const steps = [
    { n: 1, label: "Service", icon: Sparkles },
    { n: 2, label: "Date & Heure", icon: Calendar },
    { n: 3, label: "Coordonnées", icon: User },
  ];
  return (
    <div className="flex items-center justify-center gap-0 mb-8 md:mb-10">
      {steps.map((s, i) => {
        const Icon = s.icon;
        const done = step > s.n;
        const active = step === s.n;
        return (
          <div key={s.n} className="flex items-center">
            <div className={`flex items-center gap-2 px-4 py-2.5 transition-all ${
              active ? "opacity-100" : done ? "opacity-70" : "opacity-35"
            }`}>
              <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                done ? "bg-emerald-500" : active ? "bg-[#6D071A]" : "bg-[#e0e0e0]"
              }`}>
                {done
                  ? <Check className="w-3.5 h-3.5 text-white" />
                  : <Icon className={`w-3.5 h-3.5 ${active ? "text-white" : "text-[#999]"}`} />
                }
              </div>
              <span className={`text-[12px] font-bold uppercase tracking-wide hidden sm:block ${
                active ? "text-[#1a1a1a]" : done ? "text-emerald-600" : "text-[#bbb]"
              }`}>{s.label}</span>
            </div>
            {i < steps.length - 1 && (
              <div className={`w-8 md:w-12 h-px transition-colors ${step > s.n ? "bg-emerald-400" : "bg-[#e0e0e0]"}`} />
            )}
          </div>
        );
      })}
    </div>
  );
}

/* ────────────────────────────────────────────────────── main page */
function BookingPageInner() {
  const searchParams = useSearchParams();
  const preSlug = searchParams.get("service");
  const preName = searchParams.get("name");
  const prePrice = searchParams.get("price");

  const [step, setStep] = useState(1);
  const [services, setServices] = useState<Service[]>([]);
  const [loadingServices, setLoadingServices] = useState(true);
  const [filterCat, setFilterCat] = useState("all");

  const [previewService, setPreviewService] = useState<Service | null>(null);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [form, setForm] = useState<FormData>({ firstName: "", lastName: "", phone: "", email: "", message: "" });
  // "deposit" = paiement de l'acompte en cours, "free" = réservation sans acompte
  const [submitting, setSubmitting] = useState<"deposit" | "free" | null>(null);
  const [error, setError] = useState<string | null>(null);
  // Renseigné par l'API : n'annoncer un email que s'il est réellement parti.
  const [emailSent, setEmailSent] = useState(false);
  const [confirmed, setConfirmed] = useState(false);

  // Charger les services
  useEffect(() => {
    fetch("/api/admin/services")
      .then(r => r.ok ? r.json() : [])
      .then((data: Service[]) => {
        const active = data.filter((s: Service & { active?: boolean }) => s.active !== false);
        setServices(active);

        if (preSlug) {
          const match = active.find((s: Service) => s.slug === preSlug);
          if (match) { setSelectedService(match); setStep(2); return; }
        }

        if (preName) {
          const norm = (s: string) => s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").trim();
          const key = norm(preName);
          const match = active.find((s: Service) => {
            const t = norm(s.title.split("—")[0].split("|")[0].split("à Cotonou")[0]);
            return t.includes(key) || key.includes(t);
          });
          if (match) {
            setSelectedService(match);
          } else {
            // Service introuvable en DB — créer un objet minimal depuis l'URL
            const synthetic: Service = {
              id: "custom",
              slug: "",
              title: preName,
              category: "visage",
              hero: null,
              intro: null,
              benefits: null,
              pricing: prePrice ? { items: [{ label: preName, price: prePrice }] } : null,
            };
            setSelectedService(synthetic);
          }
          setStep(2);
        }
      })
      .finally(() => setLoadingServices(false));
  }, [preSlug, preName, prePrice]);

  const categories = Array.from(new Set(services.map(s => s.category))).sort();
  const filteredServices = filterCat === "all" ? services : services.filter(s => s.category === filterCat);

  /**
   * Enregistre le rendez-vous, puis redirige vers FedaPay si le client
   * a choisi de garantir sa place avec un acompte.
   */
  async function handleSubmit(withDeposit: boolean) {
    if (!selectedService || !selectedDate || !selectedTime || !form.firstName || !form.lastName || !form.phone) return;

    setSubmitting(withDeposit ? "deposit" : "free");
    setError(null);

    try {
      const res = await fetch("/api/rdv", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          serviceTitle: selectedService.title,
          serviceSlug: selectedService.slug,
          servicePrice: selectedService.pricing?.items?.[0]?.price ?? null,
          date: selectedDate,
          time: selectedTime,
          withDeposit,
          ...form,
        }),
      });

      if (!res.ok) {
        const payload = await res.json().catch(() => null);
        throw new Error(payload?.error ?? "Votre demande n'a pas pu être enregistrée.");
      }

      const { id, clientEmailSent } = await res.json();

      if (withDeposit) {
        const payRes = await fetch(`/api/rdv/${id}/pay`, { method: "POST" });
        if (!payRes.ok) {
          const payload = await payRes.json().catch(() => null);
          throw new Error(payload?.error ?? "Le paiement n'a pas pu être ouvert.");
        }
        const { paymentUrl } = await payRes.json();
        // On quitte la page : inutile de réinitialiser l'état de chargement.
        window.location.href = paymentUrl;
        return;
      }

      setEmailSent(Boolean(clientEmailSent));
      setConfirmed(true);
      setSubmitting(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Une erreur est survenue. Réessayez.");
      setSubmitting(null);
    }
  }

  function formatDate(d: string) {
    return new Date(d + "T12:00:00").toLocaleDateString("fr-FR", { weekday: "long", day: "numeric", month: "long", year: "numeric" });
  }

  // ── Confirmation ──────────────────────────────────────────────────
  if (confirmed) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center px-4 py-16">
        <div className="max-w-[500px] w-full text-center">
          <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-[26px] md:text-[30px] font-bold text-[#1a1a1a] mb-3">Demande envoyée !</h2>
          <p className="text-[#666] text-[15px] leading-relaxed mb-8">
            Votre demande de rendez-vous a bien été reçue. Notre équipe vous contactera rapidement sur le <strong>{form.phone}</strong> pour confirmer.
            {emailSent && <> Un récapitulatif vient de vous être envoyé à <strong>{form.email}</strong>.</>}
          </p>
          <div className="bg-[#faf8f6] border border-[#e8e8e8] p-5 text-left mb-8 space-y-2.5">
            <div className="flex justify-between text-[13px]">
              <span className="text-[#999]">Soin</span>
              <span className="font-semibold text-[#1a1a1a] text-right max-w-[60%]">{selectedService?.title}</span>
            </div>
            {(() => {
              const items = selectedService?.pricing?.items ?? [];
              const p = items[0]?.price ?? null;
              if (!p) return null;
              const isDevis = p.toLowerCase().includes("devis") || p.toLowerCase().includes("demande");
              return (
                <div className="flex justify-between text-[13px]">
                  <span className="text-[#999]">Tarif</span>
                  <span className="font-bold text-[#6D071A]">{isDevis ? "Sur devis" : `À partir de ${p}`}</span>
                </div>
              );
            })()}
            <div className="flex justify-between text-[13px]">
              <span className="text-[#999]">Date</span>
              <span className="font-semibold text-[#1a1a1a] capitalize">{selectedDate && formatDate(selectedDate)}</span>
            </div>
            <div className="flex justify-between text-[13px]">
              <span className="text-[#999]">Heure</span>
              <span className="font-semibold text-[#1a1a1a]">{selectedTime}</span>
            </div>
            <div className="flex justify-between text-[13px] pt-1 border-t border-[#ebebeb]">
              <span className="text-[#999]">Client</span>
              <span className="font-semibold text-[#1a1a1a]">{form.firstName} {form.lastName}</span>
            </div>
          </div>
          <Link href="/nos-soins" className="inline-block bg-[#6D071A] text-white text-[12px] font-bold uppercase tracking-widest px-8 py-3.5 hover:bg-black transition-colors">
            Explorer nos soins
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-[900px] mx-auto px-4 py-10 md:py-14">
      <StepIndicator step={step} />

      {/* ── Étape 1 : Choisir un service ──────────────────── */}
      {step === 1 && (
        <div>
          <h2 className="text-[22px] md:text-[26px] font-bold text-[#1a1a1a] mb-1 text-center">Quel soin souhaitez-vous ?</h2>
          <p className="text-[#999] text-[13px] text-center mb-6">Sélectionnez le soin pour lequel vous souhaitez réserver</p>

          {/* Filtre catégorie */}
          <div className="flex flex-wrap gap-1.5 justify-center mb-6">
            <button onClick={() => setFilterCat("all")} className={`px-3 py-1.5 text-[11px] font-bold uppercase tracking-wide border transition-colors ${filterCat === "all" ? "bg-[#1a1a1a] text-white border-[#1a1a1a]" : "bg-white text-[#666] border-[#e8e8e8] hover:border-[#1a1a1a]"}`}>
              Tous
            </button>
            {categories.map(cat => (
              <button key={cat} onClick={() => setFilterCat(cat)} className={`px-3 py-1.5 text-[11px] font-bold uppercase tracking-wide border transition-colors ${filterCat === cat ? "bg-[#6D071A] text-white border-[#6D071A]" : "bg-white text-[#666] border-[#e8e8e8] hover:border-[#6D071A]"}`}>
                {CATEGORY_LABELS[cat] ?? cat}
              </button>
            ))}
          </div>

          {loadingServices ? (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="bg-white border border-[#e8e8e8] animate-pulse">
                  <div className="h-[110px] bg-[#f0f0f0]" />
                  <div className="p-3 space-y-2"><div className="h-3 bg-[#f0f0f0] rounded w-1/2" /><div className="h-4 bg-[#f0f0f0] rounded" /></div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
              {filteredServices.map(s => {
                const img = (s.hero as { image?: string } | null)?.image || null;
                const items = s.pricing?.items ?? [];
                const firstPrice = items[0]?.price ?? null;
                const isSurDevis = firstPrice?.toLowerCase().includes("devis") || firstPrice?.toLowerCase().includes("demande");
                const priceLabel = firstPrice
                  ? isSurDevis ? "Sur devis" : `À partir de ${firstPrice}`
                  : null;

                return (
                  <button
                    key={s.id}
                    onClick={() => setPreviewService(s)}
                    className="group bg-white border border-[#e8e8e8] overflow-hidden text-left hover:border-[#6D071A] hover:shadow-md transition-all flex sm:flex-col"
                  >
                    {/* Image */}
                    <div className="relative w-[110px] sm:w-full h-auto sm:h-[120px] shrink-0 bg-[#f0ebe8] overflow-hidden" style={{ aspectRatio: undefined }}>
                      <div className="absolute inset-0">
                        {img
                          ? <Image src={img} alt={s.title} fill sizes="(max-width: 640px) 110px, (max-width: 1024px) 50vw, 33vw" className="object-cover object-[center_15%] group-hover:scale-[1.05] transition-transform duration-500" />
                          : <div className="absolute inset-0 bg-gradient-to-br from-[#f5e8ea] to-[#e0c8cc]" />
                        }
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent h-12 pointer-events-none" />
                        <div className="absolute bottom-2 left-2.5 right-2.5">
                          {priceLabel ? (
                            <span className={`text-[10px] font-bold leading-none ${isSurDevis ? "text-white/70" : "text-[#f5c2c2]"}`}>
                              {priceLabel}
                            </span>
                          ) : (
                            <span className="text-[10px] text-white/40">Sur demande</span>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Texte */}
                    <div className="p-3 flex-1 min-w-0">
                      <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-[#6D071A]">
                        {CATEGORY_LABELS[s.category] ?? s.category}
                      </span>
                      <p className="text-[13px] sm:text-[12px] font-semibold text-[#1a1a1a] leading-[1.4] line-clamp-2 mt-0.5">{s.title}</p>
                      {items.length > 1 && (
                        <div className="mt-2 space-y-1">
                          {items.slice(0, 2).map((item, i) => (
                            <div key={i} className="flex items-center justify-between gap-2">
                              <span className="text-[11px] text-[#999] truncate">{item.label}</span>
                              <span className="text-[11px] font-bold text-[#6D071A] shrink-0">{item.price}</span>
                            </div>
                          ))}
                          {items.length > 2 && (
                            <span className="text-[10px] text-[#bbb]">+{items.length - 2} tarif{items.length - 2 > 1 ? "s" : ""}</span>
                          )}
                        </div>
                      )}
                      {items.length === 1 && !isSurDevis && (
                        <div className="mt-2 flex items-center justify-between gap-2">
                          <span className="text-[11px] text-[#999] truncate">{items[0].label}</span>
                          <span className="text-[11px] font-bold text-[#6D071A] shrink-0">{items[0].price}</span>
                        </div>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          )}

          {/* Drawer prévisualisation service */}
          {previewService && (
            <ServiceDrawer
              service={previewService}
              onClose={() => setPreviewService(null)}
              onSelect={() => {
                setSelectedService(previewService);
                setPreviewService(null);
                setStep(2);
              }}
            />
          )}
        </div>
      )}

      {/* ── Étape 2 : Date & Heure ────────────────────────── */}
      {step === 2 && (
        <div>
          <button onClick={() => setStep(1)} className="flex items-center gap-1.5 text-[13px] text-[#999] hover:text-[#1a1a1a] mb-6 transition-colors">
            <ChevronLeft className="w-4 h-4" /> Changer de service
          </button>

          {selectedService && (
            <div className="flex items-center gap-3 mb-6 bg-[#fdf5f6] border border-[#f0d9dc] px-4 py-3">
              <Sparkles className="w-4 h-4 text-[#6D071A] shrink-0" />
              <div className="flex-1 min-w-0">
                <span className="text-[13px] font-semibold text-[#1a1a1a] block truncate">{selectedService.title}</span>
                <span className="text-[11px] text-[#999]">{CATEGORY_LABELS[selectedService.category] ?? selectedService.category}</span>
              </div>
              {(() => {
                const items = selectedService.pricing?.items ?? [];
                const p = items[0]?.price ?? null;
                if (!p) return null;
                const isDevis = p.toLowerCase().includes("devis") || p.toLowerCase().includes("demande");
                return (
                  <span className="text-[12px] font-bold text-[#6D071A] shrink-0">
                    {isDevis ? "Sur devis" : `À partir de ${p}`}
                  </span>
                );
              })()}
            </div>
          )}

          <h2 className="text-[22px] md:text-[26px] font-bold text-[#1a1a1a] mb-1 text-center">Choisissez votre créneau</h2>
          <p className="text-[#999] text-[13px] text-center mb-8">Dimanche fermé · Les créneaux du matin : 9h–12h, après-midi : 14h–19h</p>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Calendrier */}
            <div className="bg-white border border-[#e8e8e8] p-5">
              <div className="flex items-center gap-2 mb-4">
                <Calendar className="w-4 h-4 text-[#6D071A]" />
                <span className="text-[12px] font-bold uppercase tracking-wider text-[#666]">Choisir une date</span>
              </div>
              <MiniCalendar selected={selectedDate} onSelect={d => { setSelectedDate(d); setSelectedTime(null); }} />
            </div>

            {/* Créneaux horaires */}
            <div className="bg-white border border-[#e8e8e8] p-5">
              <div className="flex items-center gap-2 mb-4">
                <Clock className="w-4 h-4 text-[#6D071A]" />
                <span className="text-[12px] font-bold uppercase tracking-wider text-[#666]">
                  {selectedDate ? `Créneaux du ${new Date(selectedDate + "T12:00:00").toLocaleDateString("fr-FR", { day: "numeric", month: "long" })}` : "Sélectionnez d'abord une date"}
                </span>
              </div>
              {!selectedDate ? (
                <div className="flex items-center justify-center h-[200px] text-[#ddd]">
                  <Calendar className="w-10 h-10" />
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-2">
                  {TIME_SLOTS.map(t => (
                    <button
                      key={t}
                      onClick={() => setSelectedTime(t)}
                      className={`py-2.5 text-[13px] font-semibold border transition-all ${
                        selectedTime === t
                          ? "bg-[#6D071A] text-white border-[#6D071A]"
                          : "bg-white text-[#333] border-[#e8e8e8] hover:border-[#6D071A] hover:text-[#6D071A]"
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="flex justify-end mt-6">
            <button
              disabled={!selectedDate || !selectedTime}
              onClick={() => setStep(3)}
              className="bg-[#6D071A] text-white text-[12px] font-bold uppercase tracking-widest px-8 py-3.5 hover:bg-black transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Continuer →
            </button>
          </div>
        </div>
      )}

      {/* ── Étape 3 : Coordonnées ─────────────────────────── */}
      {step === 3 && (
        <div>
          <button onClick={() => setStep(2)} className="flex items-center gap-1.5 text-[13px] text-[#999] hover:text-[#1a1a1a] mb-6 transition-colors">
            <ChevronLeft className="w-4 h-4" /> Changer de créneau
          </button>

          {/* Récap */}
          {(() => {
            const items = selectedService?.pricing?.items ?? [];
            const firstPrice = items[0]?.price ?? null;
            const isDevis = firstPrice?.toLowerCase().includes("devis") || firstPrice?.toLowerCase().includes("demande");
            const priceLabel = firstPrice ? (isDevis ? "Sur devis" : firstPrice) : null;
            return (
              <div className={`bg-[#1a1a1a] text-white p-5 mb-8 grid gap-4 text-center ${priceLabel ? "grid-cols-2 sm:grid-cols-4" : "grid-cols-3"}`}>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-white/40 mb-1">Soin</p>
                  <p className="text-[12px] font-semibold leading-tight line-clamp-2">{selectedService?.title}</p>
                </div>
                {priceLabel && (
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-white/40 mb-1">Tarif</p>
                    <p className="text-[12px] font-bold text-[#f5a0a0]">{priceLabel}</p>
                  </div>
                )}
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-white/40 mb-1">Date</p>
                  <p className="text-[12px] font-semibold capitalize">{selectedDate && new Date(selectedDate + "T12:00:00").toLocaleDateString("fr-FR", { day: "numeric", month: "short" })}</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-white/40 mb-1">Heure</p>
                  <p className="text-[12px] font-semibold">{selectedTime}</p>
                </div>
              </div>
            );
          })()}

          <h2 className="text-[22px] md:text-[26px] font-bold text-[#1a1a1a] mb-1 text-center">Vos coordonnées</h2>
          <p className="text-[#999] text-[13px] text-center mb-8">Nous vous contacterons sur WhatsApp pour confirmer</p>

          <div className="bg-white border border-[#e8e8e8] p-6 md:p-8">
            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-[#666] mb-1.5">Prénom <span className="text-[#6D071A]">*</span></label>
                <input value={form.firstName} onChange={e => setForm(f => ({ ...f, firstName: e.target.value }))}
                  className="w-full border border-[#e8e8e8] px-4 py-2.5 text-[14px] focus:outline-none focus:border-[#6D071A] transition-colors"
                  placeholder="Votre prénom" />
              </div>
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-[#666] mb-1.5">Nom <span className="text-[#6D071A]">*</span></label>
                <input value={form.lastName} onChange={e => setForm(f => ({ ...f, lastName: e.target.value }))}
                  className="w-full border border-[#e8e8e8] px-4 py-2.5 text-[14px] focus:outline-none focus:border-[#6D071A] transition-colors"
                  placeholder="Votre nom" />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-[#666] mb-1.5">Téléphone / WhatsApp <span className="text-[#6D071A]">*</span></label>
                <input value={form.phone} onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                  type="tel"
                  className="w-full border border-[#e8e8e8] px-4 py-2.5 text-[14px] focus:outline-none focus:border-[#6D071A] transition-colors"
                  placeholder="+229 XX XX XX XX" />
              </div>
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-[#666] mb-1.5">Email <span className="text-[#aaa] text-[10px] normal-case font-normal">(optionnel)</span></label>
                <input value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                  type="email"
                  className="w-full border border-[#e8e8e8] px-4 py-2.5 text-[14px] focus:outline-none focus:border-[#6D071A] transition-colors"
                  placeholder="votre@email.com" />
              </div>
            </div>
            <div className="mb-6">
              <label className="block text-[11px] font-bold uppercase tracking-wider text-[#666] mb-1.5">Message <span className="text-[#aaa] text-[10px] normal-case font-normal">(optionnel)</span></label>
              <textarea value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                rows={3}
                className="w-full border border-[#e8e8e8] px-4 py-2.5 text-[14px] focus:outline-none focus:border-[#6D071A] transition-colors resize-none"
                placeholder="Précisions sur votre soin, questions..." />
            </div>

            {error && (
              <div className="flex items-start gap-2.5 bg-[#fdf2f2] border border-[#f0c9c9] px-4 py-3 mb-4">
                <AlertCircle className="w-4 h-4 text-[#c0392b] shrink-0 mt-0.5" />
                <p className="text-[13px] text-[#a33] leading-relaxed">{error}</p>
              </div>
            )}

            {/* Option mise en avant : l'acompte garantit le créneau */}
            <button
              onClick={() => handleSubmit(true)}
              disabled={submitting !== null || !form.firstName || !form.lastName || !form.phone}
              className="w-full bg-[#6D071A] text-white text-[12px] font-bold uppercase tracking-widest py-4 hover:bg-black transition-colors disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {submitting === "deposit"
                ? <><div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Redirection vers le paiement…</>
                : <><ShieldCheck className="w-4 h-4" /> Garantir ma place — {DEPOSIT_DISPLAY_AMOUNT.toLocaleString("fr-FR")} FCFA</>}
            </button>
            <p className="text-[11px] text-[#999] text-center mt-2.5 leading-relaxed">
              Acompte déduit du prix de votre soin · Paiement sécurisé par FedaPay
            </p>

            {/* Option secondaire, volontairement discrète */}
            <div className="flex items-center gap-3 my-5">
              <div className="flex-1 h-px bg-[#ececec]" />
              <span className="text-[10px] uppercase tracking-widest text-[#ccc]">ou</span>
              <div className="flex-1 h-px bg-[#ececec]" />
            </div>

            <button
              onClick={() => handleSubmit(false)}
              disabled={submitting !== null || !form.firstName || !form.lastName || !form.phone}
              className="w-full text-[12px] text-[#9a9a9a] underline underline-offset-4 decoration-[#dcdcdc] hover:text-[#6D071A] hover:decoration-[#6D071A] transition-colors disabled:opacity-40 disabled:cursor-not-allowed py-1"
            >
              {submitting === "free" ? "Envoi en cours…" : "Réserver sans payer d'avance"}
            </button>
            <p className="text-[10px] text-[#c5c5c5] text-center mt-1.5">
              Créneau non garanti — nous vous rappellerons pour confirmer
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default function RendezVousPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#faf8f6] pt-[90px]">
        {/* Hero */}
        <div className="bg-[#1a1a1a] py-10 md:py-14">
          <div className="max-w-[900px] mx-auto px-4 text-center">
            <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#6D071A] mb-3">Academy Beauty Gate</p>
            <h1 className="text-white text-[28px] md:text-[40px] font-bold leading-[1.15] mb-3">
              Prendre rendez-vous
            </h1>
            <p className="text-white/50 text-[14px]">Cadjehoun, Cotonou · Lun–Sam · 9h–19h</p>
          </div>
        </div>

        <Suspense fallback={<div className="py-20 text-center text-[#999]">Chargement…</div>}>
          <BookingPageInner />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
