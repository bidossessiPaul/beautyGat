import type { Metadata } from "next";
import Image from "next/image";
import { Playfair_Display, DM_Sans } from "next/font/google";
import { buildMetadata } from "@/lib/seo";
import { Countdown } from "./Countdown";
import { BookingForm } from "./BookingForm";
import { EVENT, SERVICES, DATES } from "./config";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});
const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = buildMetadata({
  title: "Consultations & Suppression Accrochons — Parakou Juillet 2026",
  description:
    "Academy Beauty Gate arrive à Parakou du 06 au 10 juillet 2026. Diagnostic de peau professionnel (7 000 FCFA) & suppression des accrochons. Places limitées — réservation obligatoire.",
  path: "/reservation-parakou",
});

const FAQ = [
  {
    q: "Puis-je annuler ma réservation ?",
    a: "En cas d'empêchement, contacte-nous au moins 48h avant sur WhatsApp. Nous pourrons reporter ta réservation sur l'une des autres dates disponibles.",
  },
  {
    q: "Où se déroulera l'événement à Parakou ?",
    a: "L'adresse exacte te sera communiquée par WhatsApp après confirmation de ta réservation et de ton paiement.",
  },
  {
    q: "Combien de temps dure chaque séance ?",
    a: "Le diagnostic de peau dure entre 30 et 45 minutes. La suppression des accrochons dure entre 15 et 30 minutes selon la quantité d'acrochordons à traiter.",
  },
  {
    q: "Le paiement en ligne est-il sécurisé ?",
    a: "Oui. Nous utilisons FedaPay, la plateforme de référence en Afrique de l'Ouest. Paiement par mobile money (MTN, Moov) et carte bancaire acceptés.",
  },
  {
    q: "Puis-je réserver pour plusieurs membres de ma famille ?",
    a: "Absolument. Il faut effectuer une réservation distincte par personne, en indiquant le nom de chaque bénéficiaire.",
  },
  {
    q: "Les accrochons peuvent-ils revenir ?",
    a: "Les accrochons supprimés ne repoussent pas au même endroit. De nouveaux peuvent apparaître ailleurs — c'est une prédisposition génétique, mais notre protocole traite efficacement les zones ciblées.",
  },
];

export default function Page() {
  return (
    <div
      className={`${playfair.variable} ${dmSans.variable} min-h-screen`}
      style={{ fontFamily: "var(--font-body)", backgroundColor: "#faf6f0" }}
    >
      <style>{`
        .service-card {
          transition: transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94), box-shadow 0.4s ease;
        }
        .service-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 32px 64px rgba(0,0,0,0.18);
          z-index: 1;
        }
        .avantage-card {
          transition: background-color 0.25s ease, border-left-color 0.25s ease, transform 0.25s ease;
          border-left: 3px solid transparent;
        }
        .avantage-card:hover {
          background-color: #faf8f5 !important;
          border-left-color: #6D071A;
          transform: translateX(4px);
        }
        .temoignage-card {
          transition: transform 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94), box-shadow 0.35s ease;
        }
        .temoignage-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 24px 48px rgba(0,0,0,0.1);
        }
        .btn-cta {
          transition: background-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
        }
        .btn-cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(109,7,26,0.35);
          background-color: #8a0921 !important;
        }
        .btn-ghost-hover {
          transition: color 0.2s ease, border-color 0.2s ease, transform 0.2s ease;
        }
        .btn-ghost-hover:hover {
          color: #1a0d0d !important;
          border-color: rgba(26,13,13,0.4) !important;
          transform: translateY(-1px);
        }
        .stat-item {
          transition: transform 0.3s ease;
          cursor: default;
        }
        .stat-item:hover {
          transform: scale(1.04);
        }
        .checklist-item {
          transition: transform 0.2s ease, color 0.2s ease;
        }
        .checklist-item:hover {
          transform: translateX(6px);
        }
        .faq-row {
          transition: background-color 0.2s ease;
        }
        .faq-row:hover {
          background-color: rgba(109,7,26,0.03);
        }
        .nav-link {
          transition: color 0.2s ease, opacity 0.2s ease;
        }
        .nav-link:hover {
          opacity: 1 !important;
          color: #f9f3ec !important;
        }
        .img-wrap {
          overflow: hidden;
        }
        .img-wrap img {
          transition: transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94), filter 0.6s ease;
          will-change: transform;
        }
        .img-wrap:hover img {
          transform: scale(1.06);
          filter: brightness(1.05);
        }
      `}</style>

      {/* ── HERO (nav fusionnée) ─────────────────────────────────── */}
      <section
        className="relative overflow-hidden"
        style={{ backgroundColor: "#0a0806", minHeight: "100svh" }}
      >
        {/* Nav intégrée dans le hero — absolue, transparente */}
        <div className="absolute top-0 left-0 right-0 z-20">
          <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <Image
                src="/beautygate-logo-sans-bg.png"
                alt="Academy Beauty Gate"
                width={64}
                height={64}
                className="brightness-0 invert"
              />
              <div className="flex flex-col leading-none">
                <span className="text-[13px] font-semibold tracking-[0.08em]" style={{ color: "#f9f3ec" }}>Academy</span>
                <span className="text-[13px] font-semibold tracking-[0.08em]" style={{ color: "#f9f3ec" }}>Beauty Gate</span>
              </div>
            </div>
            <a
              href="#booking"
              className="text-[10px] font-semibold uppercase tracking-[0.25em] px-4 py-1.5 transition-all duration-300"
              style={{
                color: "#e8c4c4",
                border: "1px solid rgba(109,7,26,0.4)",
                backgroundColor: "rgba(109,7,26,0.12)",
              }}
            >
              Réserver →
            </a>
          </div>
        </div>
        {/* Ambient glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 30% 50%, rgba(109,7,26,0.18) 0%, transparent 70%)",
          }}
        />
        {/* Grain texture overlay */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
            backgroundSize: "200px 200px",
          }}
        />

        <div className="relative z-10 max-w-[1200px] mx-auto px-6 py-16 md:py-0 md:min-h-[100svh] flex flex-col md:flex-row md:items-center gap-12 md:gap-8">

          {/* LEFT — Text */}
          <div className="flex-1 md:py-24">
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-8">
              <span className="block w-8 h-px" style={{ backgroundColor: "#6D071A" }} />
              <span
                className="text-[10px] uppercase tracking-[0.4em]"
                style={{ color: "rgba(255,255,255,0.4)", fontFamily: "var(--font-body)" }}
              >
                Événement · Parakou · Bénin
              </span>
            </div>

            {/* Headline */}
            <h1
              className="leading-[1.05] mb-6"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(36px, 5.5vw, 64px)",
                color: "#f9f3ec",
                fontWeight: 700,
              }}
            >
              Consultations
              <br />
              <em
                className="not-italic"
                style={{ color: "#c98080", fontStyle: "italic" }}
              >
                Professionnelles
              </em>
              <br />
              <span style={{ fontSize: "0.65em", color: "rgba(249,243,236,0.5)", fontWeight: 400 }}>
                &amp; Suppression des Accrochons
              </span>
            </h1>

            {/* Date */}
            <div className="flex items-center gap-3 mb-8">
              <span
                className="text-[11px] uppercase tracking-[0.3em]"
                style={{ color: "rgba(255,255,255,0.35)" }}
              >
                Du
              </span>
              <span
                className="text-[15px] font-semibold"
                style={{ color: "#f9f3ec", fontFamily: "var(--font-display)" }}
              >
                06 — 10 Juillet 2026
              </span>
              <span className="block flex-1 h-px" style={{ backgroundColor: "rgba(255,255,255,0.08)" }} />
            </div>

            {/* Countdown */}
            <div className="mb-10">
              <Countdown />
            </div>

            {/* Urgency */}
            <div
              className="inline-flex items-center gap-2 mb-8 px-3 py-1.5"
              style={{
                backgroundColor: "rgba(180,100,0,0.12)",
                border: "1px solid rgba(180,100,0,0.3)",
              }}
            >
              <span
                className="text-[10px] uppercase tracking-[0.25em] font-semibold"
                style={{ color: "#e8a050" }}
              >
                Places limitées — Réservation obligatoire
              </span>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3">
              <a
                href="#booking"
                className="btn-cta group inline-flex items-center gap-2 px-7 py-3.5 text-[11px] font-semibold uppercase tracking-[0.2em]"
                style={{
                  backgroundColor: "#6D071A",
                  color: "#f9f3ec",
                  fontFamily: "var(--font-body)",
                }}
                onMouseEnter={undefined}
              >
                Réserver ma place
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
              <a
                href={`https://wa.me/${EVENT.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-[11px] font-semibold transition-all duration-300"
                style={{
                  color: "rgba(255,255,255,0.45)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                Questions ?
              </a>
            </div>
          </div>

          {/* RIGHT — Flyer */}
          <div className="md:w-[380px] lg:w-[420px] flex items-center justify-center md:py-16 shrink-0">
            <div
              className="relative"
              style={{ transform: "rotate(-1.5deg)", filter: "drop-shadow(0 30px 60px rgba(0,0,0,0.7))" }}
            >
              {/* White frame like a printed poster */}
              <div
                className="relative overflow-hidden"
                style={{
                  padding: "10px 10px 24px",
                  backgroundColor: "#fff",
                  boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.06)",
                }}
              >
                <Image
                  src="https://res.cloudinary.com/dqdduftrm/image/upload/v1779703774/beautygate/parakou/parakou-flyer.png"
                  alt="Affiche événement Parakou — Academy Beauty Gate"
                  width={360}
                  height={480}
                  className="block"
                  style={{ objectFit: "cover", display: "block" }}
                  priority
                />
                {/* Caption under poster */}
                <p
                  className="text-center mt-3 text-[9px] uppercase tracking-[0.3em]"
                  style={{
                    color: "#999",
                    fontFamily: "var(--font-body)",
                    userSelect: "none",
                  }}
                >
                  Academy Beauty Gate
                </p>
              </div>

              {/* Badge over image */}
              <div
                className="absolute -top-3 -right-3 w-16 h-16 rounded-full flex flex-col items-center justify-center"
                style={{ backgroundColor: "#6D071A", boxShadow: "0 4px 16px rgba(109,7,26,0.5)" }}
              >
                <span className="text-white text-[9px] uppercase tracking-wide font-bold leading-tight text-center px-1">
                  Places<br />limitées
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 hidden md:flex"
          style={{ color: "rgba(255,255,255,0.2)" }}
        >
          <span className="text-[9px] uppercase tracking-[0.3em]">Défiler</span>
          <div
            className="w-px h-8"
            style={{
              background: "linear-gradient(to bottom, rgba(255,255,255,0.3), transparent)",
            }}
          />
        </div>
      </section>

      {/* ── SERVICES ────────────────────────────────────────────── */}
      <section style={{ backgroundColor: "#f9f3ec" }}>
        {/* En-tête */}
        <div className="max-w-[1200px] mx-auto px-6 pt-20 pb-12 md:pt-28">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <p className="text-[9px] uppercase tracking-[0.45em] mb-3" style={{ color: "#6D071A" }}>
                Services disponibles
              </p>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(32px, 4.5vw, 52px)",
                  color: "#1a0d0d",
                  fontWeight: 700,
                  lineHeight: 1.05,
                }}
              >
                Choisis ton soin
              </h2>
            </div>
            <p className="text-[13px] md:text-right max-w-xs" style={{ color: "rgba(26,13,13,0.45)" }}>
              2 soins experts · Places limitées<br />Parakou, 06–10 juillet 2026
            </p>
          </div>
        </div>

        {/* Cards 2 colonnes */}
        <div className="max-w-[1200px] mx-auto px-6 pb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {(Object.values(SERVICES) as (typeof SERVICES[keyof typeof SERVICES])[]).map((s, idx) => {
              const dark = idx === 0;
              const bg = dark ? "#0a0806" : "#fff";
              const textPrimary = dark ? "#f9f3ec" : "#1a0d0d";
              const textMuted = dark ? "rgba(249,243,236,0.45)" : "rgba(26,13,13,0.45)";
              const borderColor = dark ? "rgba(249,243,236,0.08)" : "rgba(26,13,13,0.08)";
              const tagBg = dark ? "rgba(109,7,26,0.35)" : "rgba(109,7,26,0.08)";
              const tagColor = dark ? "#c98080" : "#6D071A";
              return (
                <div
                  key={s.id}
                  className="service-card p-6 md:p-10"
                  style={{
                    backgroundColor: bg,
                    display: "flex",
                    flexDirection: "column",
                    gap: 0,
                  }}
                >
                  {/* Top row */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-3">
                      <span
                        style={{
                          fontSize: 10,
                          fontWeight: 700,
                          letterSpacing: "0.35em",
                          textTransform: "uppercase" as const,
                          color: textMuted,
                        }}
                      >
                        Soin 0{idx + 1}
                      </span>
                      <span
                        style={{
                          fontSize: 10,
                          letterSpacing: "0.2em",
                          textTransform: "uppercase" as const,
                          padding: "3px 10px",
                          backgroundColor: tagBg,
                          color: tagColor,
                        }}
                      >
                        {s.duration}
                      </span>
                    </div>
                    {/* Numéro décoratif */}
                    <span
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: 64,
                        fontWeight: 900,
                        lineHeight: 1,
                        color: dark ? "rgba(249,243,236,0.05)" : "rgba(26,13,13,0.05)",
                        userSelect: "none",
                      }}
                    >
                      0{idx + 1}
                    </span>
                  </div>

                  {/* Titre + tagline */}
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "clamp(24px, 2.8vw, 34px)",
                      fontWeight: 700,
                      color: textPrimary,
                      lineHeight: 1.1,
                      marginBottom: 10,
                    }}
                  >
                    {s.label}
                  </h3>
                  <p
                    style={{
                      fontSize: 11,
                      fontWeight: 600,
                      letterSpacing: "0.25em",
                      textTransform: "uppercase" as const,
                      color: "#6D071A",
                      marginBottom: 20,
                    }}
                  >
                    {s.tagline}
                  </p>

                  {/* Description */}
                  <p
                    style={{
                      fontSize: 13.5,
                      lineHeight: 1.8,
                      color: textMuted,
                      marginBottom: 24,
                    }}
                  >
                    {s.description}
                  </p>

                  {/* Séparateur */}
                  <div style={{ height: 1, backgroundColor: borderColor, marginBottom: 24 }} />

                  {/* Features */}
                  <ul style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 32, flex: 1 }}>
                    {s.includes.map((item) => (
                      <li
                        key={item}
                        style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: 13 }}
                      >
                        <span style={{ color: "#6D071A", fontSize: 8, marginTop: 4, flexShrink: 0 }}>✦</span>
                        <span style={{ color: textMuted }}>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Séparateur */}
                  <div style={{ height: 1, backgroundColor: borderColor, marginBottom: 28 }} />

                  {/* Prix + CTA */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                      {s.id === "accrochons" && (
                        <p style={{ fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase" as const, color: textMuted, marginBottom: 4 }}>
                          À partir de
                        </p>
                      )}
                      <p
                        style={{
                          fontFamily: "var(--font-display)",
                          fontSize: "clamp(28px, 5vw, 36px)",
                          fontWeight: 900,
                          color: textPrimary,
                          lineHeight: 1,
                          whiteSpace: "nowrap" as const,
                        }}
                      >
                        {s.id === "diagnostic" ? "7 000 FCFA" : "5 000 FCFA"}
                      </p>
                    </div>
                    <a
                      href="#booking"
                      className="btn-cta w-full sm:w-auto text-center"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 8,
                        backgroundColor: "#6D071A",
                        color: "#f9f3ec",
                        padding: "14px 24px",
                        fontSize: 11,
                        fontWeight: 600,
                        textTransform: "uppercase" as const,
                        letterSpacing: "0.2em",
                        textDecoration: "none",
                        whiteSpace: "nowrap" as const,
                      }}
                    >
                      Réserver →
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bas de section */}
        <div className="max-w-[1200px] mx-auto px-6 py-8 flex items-center justify-between flex-wrap gap-4">
          <p className="text-[12px]" style={{ color: "rgba(26,13,13,0.35)" }}>
            Paiement sécurisé · Confirmation WhatsApp · Places limitées
          </p>
          <a
            href="#booking"
            className="text-[11px] font-semibold uppercase tracking-[0.2em]"
            style={{ color: "#6D071A" }}
          >
            Voir le formulaire →
          </a>
        </div>
      </section>

      {/* ── VIDÉO — 3 COLONNES ───────────────────────────────────── */}
      <section style={{ backgroundColor: "#000", padding: "80px 0 64px", overflow: "hidden" }}>
        <div className="max-w-[1200px] mx-auto px-6">

          {/* Label section */}
          <div className="flex items-center gap-4 mb-12">
            <span style={{ display: "block", width: 32, height: 1, backgroundColor: "#6D071A" }} />
            <p style={{ fontSize: 9, letterSpacing: "0.45em", color: "#fff", textTransform: "uppercase" }}>
              Nos soins en action
            </p>
          </div>

          {/* Grille 3 colonnes */}
          <div className="grid grid-cols-1 md:grid-cols-[1fr_300px_1fr] gap-10 md:gap-12 items-center">

            {/* ── Colonne gauche ── */}
            <div className="flex flex-col justify-center gap-8">
              <div>
                <h2
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(30px, 3.5vw, 52px)",
                    fontWeight: 700,
                    color: "#fff",
                    lineHeight: 1.05,
                    letterSpacing: "-0.01em",
                  }}
                >
                  Nos soins,<br />
                  <span style={{ color: "#c98080" }}>votre confiance</span>
                </h2>
                <div style={{ width: 40, height: 2, backgroundColor: "#6D071A", marginTop: 20, marginBottom: 20 }} />
                <p style={{ fontSize: 13.5, lineHeight: 1.85, color: "#fff", maxWidth: 300 }}>
                  Chaque consultation est un moment dédié à ta peau, réalisée par une esthéticienne certifiée avec un matériel irréprochable.
                </p>
              </div>

              <div className="space-y-3">
                {[
                  { n: "01", label: "Diagnostic complet de ta peau" },
                  { n: "02", label: "Suppression des accrochons" },
                  { n: "03", label: "Protocole sur mesure" },
                ].map(({ n, label }) => (
                  <div key={n} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <span style={{ fontSize: 10, fontWeight: 700, color: "#6D071A", fontFamily: "var(--font-display)", minWidth: 24 }}>{n}</span>
                    <div style={{ flex: 1, height: 1, backgroundColor: "rgba(255,255,255,0.12)" }} />
                    <span style={{ fontSize: 12, color: "#fff", textAlign: "right" }}>{label}</span>
                  </div>
                ))}
              </div>

              <a
                href="#booking"
                className="btn-cta"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  backgroundColor: "#6D071A",
                  color: "#f9f3ec",
                  padding: "14px 28px",
                  fontSize: 11,
                  fontWeight: 600,
                  textTransform: "uppercase" as const,
                  letterSpacing: "0.2em",
                  textDecoration: "none",
                  width: "fit-content",
                  transition: "background 0.2s",
                }}
              >
                Réserver ma place →
              </a>
            </div>

            {/* ── Colonne centrale — vidéo portrait ── */}
            <div style={{ position: "relative" }}>
              {/* Cadre décoratif décalé — desktop only */}
              <div className="hidden md:block" style={{
                position: "absolute",
                top: -10,
                left: -10,
                right: 10,
                bottom: 10,
                border: "1px solid rgba(109,7,26,0.35)",
                pointerEvents: "none",
                zIndex: 0,
              }} />

              {/* Vidéo — 16:9 mobile, 9:16 desktop */}
              <div style={{ position: "relative", zIndex: 1, overflow: "hidden" }} className="aspect-video md:aspect-[9/16]">
                <video
                  src="https://res.cloudinary.com/dqdduftrm/video/upload/v1779703810/beautygate/parakou/videoplayback.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center",
                    display: "block",
                  }}
                />
                {/* Gradient bas */}
                <div style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: "40%",
                  background: "linear-gradient(to top, rgba(10,8,6,0.85) 0%, transparent 100%)",
                  pointerEvents: "none",
                }} />
                {/* Caption vidéo */}
                <div style={{ position: "absolute", bottom: 20, left: 20, right: 20 }}>
                  <p style={{ fontSize: 10, letterSpacing: "0.3em", color: "#fff", textTransform: "uppercase" }}>
                    Parakou · Juillet 2026
                  </p>
                </div>
                {/* Badge REC */}
                <div style={{
                  position: "absolute",
                  top: 16,
                  right: 16,
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  backgroundColor: "rgba(10,8,6,0.6)",
                  padding: "4px 10px",
                  backdropFilter: "blur(4px)",
                }}>
                  <span style={{ width: 5, height: 5, borderRadius: "50%", backgroundColor: "#6D071A" }} />
                  <span style={{ fontSize: 9, letterSpacing: "0.25em", color: "#fff", textTransform: "uppercase" }}>Live</span>
                </div>
              </div>
            </div>

            {/* ── Colonne droite ── */}
            <div className="grid grid-cols-2 md:flex md:flex-col md:justify-center gap-6 md:gap-10">

              {/* Event info */}
              <div style={{ borderLeft: "2px solid #6D071A", paddingLeft: 20 }}>
                <p style={{ fontSize: 9, letterSpacing: "0.4em", color: "#fff", textTransform: "uppercase", marginBottom: 8 }}>
                  Événement
                </p>
                <p style={{ fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 700, color: "#fff", lineHeight: 1.2 }}>
                  06 — 10<br />Juillet 2026
                </p>
                <p style={{ fontSize: 12, marginTop: 8, color: "#fff" }}>
                  Parakou, Bénin
                </p>
              </div>

              {/* Prix */}
              <div>
                <p style={{ fontSize: 9, letterSpacing: "0.4em", color: "#fff", textTransform: "uppercase", marginBottom: 12 }}>
                  Tarifs
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {[
                    { label: "Diagnostic de peau", price: "7 000 FCFA" },
                    { label: "Suppression accrochons", price: "Dès 5 000 FCFA" },
                  ].map(({ label, price }) => (
                    <div key={label} style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                      <span style={{ fontSize: 11, color: "#fff" }}>{label}</span>
                      <span style={{ fontFamily: "var(--font-display)", fontSize: 17, fontWeight: 700, color: "#c98080" }}>{price}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Badges garanties — pleine largeur sur mobile */}
              <div className="col-span-2 md:col-span-1" style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {[
                  "Paiement sécurisé FedaPay",
                  "Confirmation WhatsApp",
                  "Matériel stérilisé garanti",
                ].map((item) => (
                  <div key={item} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <span style={{ fontSize: 8, color: "#6D071A" }}>✦</span>
                    <span style={{ fontSize: 12, color: "#fff" }}>{item}</span>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ── CHIFFRES CLÉS ────────────────────────────────────────── */}
      <section style={{ backgroundColor: "#6D071A" }}>
        <div className="max-w-[1200px] mx-auto px-6 py-14 md:py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 md:divide-x md:divide-white/20">
            {[
              { n: "5", suffix: " jours", label: "de consultations à Parakou" },
              { n: "2", suffix: " soins", label: "expertises spécialisées" },
              { n: "100%", suffix: "", label: "matériel stérilisé & usage unique" },
              { n: "5+", suffix: " ans", label: "d'expérience en esthétique" },
            ].map(({ n, suffix, label }) => (
              <div key={label} className="stat-item text-center md:px-8">
                <p style={{ fontFamily: "var(--font-display)", fontSize: "clamp(34px,4vw,52px)", fontWeight: 900, color: "#fff", lineHeight: 1 }}>
                  {n}<span style={{ fontSize: "0.5em", color: "rgba(255,255,255,0.6)" }}>{suffix}</span>
                </p>
                <p className="text-[11px] mt-3 leading-[1.5]" style={{ color: "rgba(255,255,255,0.6)" }}>{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ÉDUCATIF : DIAGNOSTIC ────────────────────────────────── */}
      <section style={{ backgroundColor: "#f9f3ec" }} className="py-20 md:py-28">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid md:grid-cols-[5fr_7fr] gap-12 md:gap-16 items-start">

            {/* Left — Image */}
            <div className="relative">
              <div className="relative overflow-hidden img-wrap" style={{ aspectRatio: "4/5" }}>
                <img
                  src="https://res.cloudinary.com/dqdduftrm/image/upload/v1779703791/beautygate/parakou/image.png"
                  alt="Diagnostic de peau professionnel"
                  className="w-full h-full object-cover"
                />
                {/* Overlay gradient bottom */}
                <div
                  className="absolute inset-x-0 bottom-0 h-24"
                  style={{ background: "linear-gradient(to top, rgba(249,243,236,0.6), transparent)" }}
                />
              </div>
              {/* Badge "Soin n°1" positionné en bas-gauche de l'image */}
              <div
                className="absolute bottom-4 left-4 px-4 py-2.5"
                style={{ backgroundColor: "#6D071A" }}
              >
                <p className="text-[9px] uppercase tracking-[0.4em]" style={{ color: "rgba(249,243,236,0.7)" }}>Soin n°1</p>
                <p className="text-[13px] font-bold mt-0.5" style={{ color: "#f9f3ec", fontFamily: "var(--font-display)" }}>Diagnostic de peau</p>
              </div>
              {/* Numéro décoratif */}
              <div
                className="absolute -top-4 -right-4 text-[90px] font-black select-none leading-none hidden md:block"
                style={{ color: "rgba(109,7,26,0.06)", fontFamily: "var(--font-display)" }}
              >
                01
              </div>
            </div>

            {/* Right — Content */}
            <div>
              <h2
                className="mb-6 leading-tight"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(24px, 3vw, 36px)",
                  color: "#1a0d0d",
                  fontWeight: 700,
                }}
              >
                {"Qu'est-ce qu'un diagnostic de peau professionnel ?"}
              </h2>

              <p
                className="text-[14px] leading-[1.9] mb-4"
                style={{ color: "rgba(26,13,13,0.65)" }}
              >
                {"Un diagnostic de peau professionnel va bien au-delà d'un simple bilan. Notre esthéticienne diplômée analyse ta peau sous toutes ses facettes : type de peau, texture, hydratation, imperfections, taches pigmentaires."}
              </p>
              <p
                className="text-[14px] leading-[1.9] mb-8"
                style={{ color: "rgba(26,13,13,0.65)" }}
              >
                {"Beaucoup de personnes utilisent des produits qui ne correspondent pas à leur peau pendant des années. Tu repars avec une feuille de route claire et un protocole sur mesure."}
              </p>

              {/* Pull quote */}
              <div
                className="border-l-2 pl-6 py-1 mb-8"
                style={{ borderColor: "#6D071A" }}
              >
                <p
                  className="text-[16px] leading-relaxed"
                  style={{
                    fontFamily: "var(--font-display)",
                    color: "#1a0d0d",
                    fontStyle: "italic",
                    fontWeight: 500,
                  }}
                >
                  "Comprends enfin ce que veut vraiment ta peau."
                </p>
              </div>

              {/* Features grid */}
              <div className="grid grid-cols-2 gap-3 mb-8">
                {[
                  "Analyse complète type de peau",
                  "Protocole personnalisé inclus",
                  "Conseils produits adaptés",
                  "30 à 45 min d'attention exclusive",
                ].map((text) => (
                  <div
                    key={text}
                    className="flex items-start gap-2.5 p-3"
                    style={{ backgroundColor: "rgba(109,7,26,0.04)", border: "1px solid rgba(109,7,26,0.08)" }}
                  >
                    <span style={{ color: "#6D071A", fontSize: 8, marginTop: 4 }}>✦</span>
                    <p className="text-[12px] leading-snug" style={{ color: "rgba(26,13,13,0.6)" }}>{text}</p>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-4 flex-wrap">
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 20,
                    fontWeight: 800,
                    color: "#6D071A",
                  }}
                >
                  7 000 FCFA
                </span>
                <a
                  href="#booking"
                  className="btn-cta inline-flex items-center gap-2 px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.2em] group"
                  style={{ backgroundColor: "#6D071A", color: "#f9f3ec" }}
                >
                  Réserver ce soin
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── AVANTAGES ────────────────────────────────────────────── */}
      <section style={{ backgroundColor: "#fff" }} className="py-20 md:py-28">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <p className="text-[9px] uppercase tracking-[0.45em] mb-3" style={{ color: "#6D071A" }}>
                Pourquoi nous choisir
              </p>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(28px,4vw,44px)",
                  color: "#1a0d0d",
                  fontWeight: 700,
                  lineHeight: 1.1,
                }}
              >
                Une expertise certifiée,<br />des résultats immédiats
              </h2>
            </div>
            <p className="text-[13px] max-w-xs" style={{ color: "rgba(26,13,13,0.45)" }}>
              Academy Beauty Gate, c'est une équipe formée aux standards professionnels les plus élevés.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-px" style={{ backgroundColor: "rgba(26,13,13,0.07)" }}>
            {[
              { n: "01", title: "Esthéticienne certifiée", body: "Intervenante professionnelle formée aux techniques les plus récentes d'analyse cutanée et de traitement." },
              { n: "02", title: "Matériel stérilisé", body: "Chaque intervention utilise du matériel à usage unique ou stérilisé. Hygiène irréprochable garantie." },
              { n: "03", title: "Résultats visibles", body: "Sur les accrochons : résultats immédiats après la séance. Sur le diagnostic : protocole sur mesure." },
              { n: "04", title: "Suivi WhatsApp", body: "Après ta séance, notre équipe reste disponible sur WhatsApp pour répondre à tes questions post-soin." },
              { n: "05", title: "Places limitées", body: "Pour garantir un accompagnement qualitatif, le nombre de rendez-vous par jour est strictement limité." },
              { n: "06", title: "Tarifs transparents", body: "Aucune surprise : le prix affiché est le prix payé. Réservation et paiement 100% sécurisés en ligne." },
            ].map(({ n, title, body }) => (
              <div key={n} className="avantage-card p-8 bg-white">
                <span
                  className="block mb-5 leading-none select-none"
                  style={{ fontFamily: "var(--font-display)", fontSize: 42, fontWeight: 900, color: "rgba(26,13,13,0.06)" }}
                >
                  {n}
                </span>
                <h3 className="text-[15px] font-semibold mb-2" style={{ color: "#1a0d0d", fontFamily: "var(--font-display)" }}>
                  {title}
                </h3>
                <p className="text-[13px] leading-[1.75]" style={{ color: "rgba(26,13,13,0.45)" }}>
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMMENT ÇA MARCHE ────────────────────────────────────── */}
      <section style={{ backgroundColor: "#f9f3ec", borderTop: "1px solid rgba(26,13,13,0.07)" }} className="py-20 md:py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14">
            <div>
              <p className="text-[9px] uppercase tracking-[0.45em] mb-3" style={{ color: "#6D071A" }}>
                Simple &amp; rapide
              </p>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(26px, 3.5vw, 42px)",
                  color: "#1a0d0d",
                  fontWeight: 700,
                  lineHeight: 1.1,
                }}
              >
                Comment réserver ?
              </h2>
            </div>
            <p className="text-[13px] max-w-xs" style={{ color: "rgba(26,13,13,0.45)" }}>
              3 étapes, moins de 5 minutes. Ta place est confirmée dès le paiement.
            </p>
          </div>

          {/* Steps */}
          <div className="grid md:grid-cols-3 gap-0 relative">
            {/* Ligne de connexion desktop */}
            <div
              className="absolute top-9 left-[16.5%] right-[16.5%] h-px hidden md:block"
              style={{ backgroundColor: "rgba(26,13,13,0.1)", zIndex: 0 }}
            />

            {[
              {
                n: "01",
                title: "Choisis ton soin",
                desc: "Diagnostic de peau ou suppression des accrochons — sélectionne ce qui te correspond.",
              },
              {
                n: "02",
                title: "Remplis & paie",
                desc: "Tes coordonnées, ta date préférée, puis paiement sécurisé par mobile money ou carte.",
              },
              {
                n: "03",
                title: "Confirmation",
                desc: "Tu reçois immédiatement un message WhatsApp avec tous les détails de ton rendez-vous.",
              },
            ].map((item, i) => (
              <div
                key={item.n}
                className="relative flex flex-col items-center md:items-start text-center md:text-left px-4 md:px-8"
                style={{ zIndex: 1 }}
              >
                {/* Cercle numéroté */}
                <div
                  className="w-16 h-16 rounded-full flex flex-col items-center justify-center mb-6 shrink-0"
                  style={{
                    backgroundColor: i === 1 ? "#6D071A" : "#fff",
                    border: i === 1 ? "none" : "1px solid rgba(26,13,13,0.12)",
                    boxShadow: i === 1 ? "0 8px 24px rgba(109,7,26,0.3)" : "0 2px 8px rgba(0,0,0,0.05)",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: 22,
                      fontWeight: 900,
                      color: i === 1 ? "#f9f3ec" : "#1a0d0d",
                      lineHeight: 1,
                    }}
                  >
                    {item.n}
                  </span>
                </div>

                <h3
                  className="mb-2"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 18,
                    fontWeight: 700,
                    color: "#1a0d0d",
                    lineHeight: 1.2,
                  }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-[13px] leading-relaxed"
                  style={{ color: "rgba(26,13,13,0.5)" }}
                >
                  {item.desc}
                </p>

                {/* Flèche mobile entre les steps */}
                {i < 2 && (
                  <div className="md:hidden my-5 w-px h-8 mx-auto" style={{ backgroundColor: "rgba(26,13,13,0.15)" }} />
                )}
              </div>
            ))}
          </div>

          {/* CTA sous les steps */}
          <div className="mt-12 flex justify-center">
            <a
              href="#booking"
              className="btn-cta inline-flex items-center gap-2 px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.2em] group"
              style={{ backgroundColor: "#1a0d0d", color: "#f9f3ec" }}
            >
              Commencer ma réservation
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* ── ÉDUCATIF : ACCROCHONS ───────────────────────────────── */}
      <section
        style={{ backgroundColor: "#fff", borderTop: "1px solid rgba(26,13,13,0.06)", borderBottom: "1px solid rgba(26,13,13,0.06)" }}
        className="py-20 md:py-28"
      >
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid md:grid-cols-[5fr_7fr] gap-12 md:gap-16 items-start">

            {/* Left — Image */}
            <div className="relative">
              <div className="relative overflow-hidden img-wrap" style={{ aspectRatio: "4/5" }}>
                <img
                  src="/images/design-sans-titre-2.png"
                  alt="Suppression des accrochons"
                  className="w-full h-full object-cover"
                />
                <div
                  className="absolute inset-x-0 bottom-0 h-24"
                  style={{ background: "linear-gradient(to top, rgba(255,255,255,0.6), transparent)" }}
                />
              </div>
              <div
                className="absolute bottom-4 left-4 px-4 py-2.5"
                style={{ backgroundColor: "#1a0d0d" }}
              >
                <p className="text-[9px] uppercase tracking-[0.4em]" style={{ color: "rgba(249,243,236,0.7)" }}>Soin n°2</p>
                <p className="text-[13px] font-bold mt-0.5" style={{ color: "#f9f3ec", fontFamily: "var(--font-display)" }}>Suppression accrochons</p>
              </div>
              <div
                className="absolute -top-4 -right-4 text-[90px] font-black select-none leading-none hidden md:block"
                style={{ color: "rgba(26,13,13,0.05)", fontFamily: "var(--font-display)" }}
              >
                02
              </div>
            </div>

            <div>
              <h2
                className="mb-6 leading-tight"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(24px, 3vw, 36px)",
                  color: "#1a0d0d",
                  fontWeight: 700,
                }}
              >
                {"Qu'est-ce qu'un acrochordon (accrochon) ?"}
              </h2>

              <p className="text-[14px] leading-[1.9] mb-4" style={{ color: "rgba(26,13,13,0.65)" }}>
                {"Les accrochons, aussi appelés « skin tags », sont de petites excroissances cutanées bénignes. Ils ne sont pas dangereux ni contagieux, mais peuvent être inesthétiques et affecter la confiance en soi — surtout au niveau du cou."}
              </p>
              <p className="text-[14px] leading-[1.9] mb-6" style={{ color: "rgba(26,13,13,0.65)" }}>
                {"Notre procédure est réalisée avec du matériel stérilisé à usage unique. C'est rapide, peu douloureux, sans cicatrice visible. Les résultats sont immédiats."}
              </p>

              <a
                href="#booking"
                className="inline-flex items-center gap-2 mb-8 px-7 py-3.5 text-[11px] font-bold uppercase tracking-[0.2em] group"
                style={{ backgroundColor: "#6D071A", color: "#f9f3ec" }}
              >
                Réserver la suppression accrochons
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>

              {/* Stats */}
              <div className="grid grid-cols-4 gap-3 mb-8">
                {[
                  { v: "Bénins", l: "Non dangereux" },
                  { v: "Rapide", l: "15–30 min" },
                  { v: "Doux", l: "Peu douloureux" },
                  { v: "Net", l: "Sans cicatrice" },
                ].map((item) => (
                  <div key={item.l} className="text-center py-4" style={{ borderTop: "2px solid rgba(26,13,13,0.1)" }}>
                    <p
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: 15,
                        fontWeight: 700,
                        color: "#1a0d0d",
                      }}
                    >
                      {item.v}
                    </p>
                    <p className="text-[10px] mt-1 uppercase tracking-wide" style={{ color: "rgba(26,13,13,0.35)" }}>
                      {item.l}
                    </p>
                  </div>
                ))}
              </div>

              <div
                className="px-4 py-3 text-[13px] mb-8"
                style={{
                  backgroundColor: "rgba(16,185,129,0.06)",
                  border: "1px solid rgba(16,185,129,0.2)",
                  color: "#065f46",
                }}
              >
                Les accrochons supprimés ne repoussent pas au même endroit.
              </div>

              <div className="flex items-center gap-4 flex-wrap">
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 20,
                    fontWeight: 800,
                    color: "#6D071A",
                  }}
                >
                  Dès 5 000 FCFA
                </span>
                <a
                  href="#booking"
                  className="btn-cta inline-flex items-center gap-2 px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.2em] group"
                  style={{ backgroundColor: "#6D071A", color: "#f9f3ec" }}
                >
                  Réserver ce soin
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TÉMOIGNAGES ──────────────────────────────────────────── */}
      <section style={{ backgroundColor: "#fff" }} className="py-20 md:py-28">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <p className="text-[9px] uppercase tracking-[0.45em] mb-3" style={{ color: "#6D071A" }}>
                Témoignages
              </p>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(28px,4vw,44px)",
                  color: "#1a0d0d",
                  fontWeight: 700,
                  lineHeight: 1.1,
                }}
              >
                Ce qu'elles disent
              </h2>
            </div>
            <p className="text-[13px] max-w-xs" style={{ color: "rgba(26,13,13,0.4)" }}>
              Clientes d'Academy Beauty Gate ayant bénéficié de nos consultations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                quote: "J'ai passé un moment exceptionnel à Academy Beauty Gate ! Dès mon arrivée, j'ai été accueillie très chaleureusement. Le personnel est très professionnel et attentif, et les soins sont d'une grande qualité.",
                name: "Gloria Zocli",
                time: "il y a un an",
                rating: 5,
              },
              {
                quote: "Très belle expérience. Ne peut que recommander. Ce sont des professionnels avec un accompagnement client exceptionnel. Équipements de pointe, bref tout ce qu'il faut pour vous redonner le sourire.",
                name: "Renaud Martins",
                time: "il y a 6 mois",
                rating: 5,
              },
              {
                quote: "Professionnalisme, sympathie et compétence. Trois mots qui résument mon retour d'expérience chez Beauty Gate. Il y a eu un bon suivi aussi après les soins. Je recommande.",
                name: "David IG",
                time: "il y a 2 ans",
                rating: 5,
              },
            ].map(({ quote, name, time, rating }) => (
              <div
                key={name}
                className="temoignage-card flex flex-col justify-between p-8 gap-8"
                style={{ backgroundColor: "#faf8f5", borderTop: "3px solid #6D071A" }}
              >
                <div>
                  <div className="flex gap-0.5 mb-4">
                    {Array.from({ length: rating }).map((_, i) => (
                      <span key={i} style={{ color: "#6D071A", fontSize: 14 }}>★</span>
                    ))}
                  </div>
                  <p
                    className="text-[13.5px] leading-[1.85]"
                    style={{ color: "rgba(26,13,13,0.6)", fontStyle: "italic" }}
                  >
                    {`"${quote}"`}
                  </p>
                </div>
                <div>
                  <p
                    className="text-[14px] font-semibold"
                    style={{ color: "#1a0d0d", fontFamily: "var(--font-display)" }}
                  >
                    {name}
                  </p>
                  <p className="text-[11px] mt-0.5" style={{ color: "rgba(26,13,13,0.3)" }}>
                    {time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── POUR QUI ? ───────────────────────────────────────────── */}
      <section style={{ backgroundColor: "#0a0806" }} className="py-20 md:py-28">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

            {/* Left */}
            <div>
              <p className="text-[9px] uppercase tracking-[0.45em] mb-3" style={{ color: "#6D071A" }}>
                Pour qui ?
              </p>
              <h2
                className="mb-6 leading-tight"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(26px,3.5vw,40px)",
                  color: "#f9f3ec",
                  fontWeight: 700,
                  lineHeight: 1.15,
                }}
              >
                Ce pop-up est fait<br />pour toi si…
              </h2>
              <p
                className="text-[13.5px] leading-[1.85] mb-8"
                style={{ color: "#ffffff" }}
              >
                Ces consultations s'adressent à toutes celles qui veulent prendre soin de leur peau avec un accompagnement professionnel, bienveillant et adapté à leur réalité.
              </p>
              <a
                href="#booking"
                className="btn-cta inline-flex items-center gap-2 px-7 py-4 text-[11px] font-semibold uppercase tracking-[0.2em] group"
                style={{ backgroundColor: "#6D071A", color: "#f9f3ec" }}
              >
                Réserver ma place
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
            </div>

            {/* Right — checklist */}
            <ul className="space-y-4">
              {[
                "Tu as des problèmes de peau (acné, taches, déshydratation) sans solution durable",
                "Tu veux savoir exactement quels produits utiliser pour ta peau",
                "Tu as des accrochons (skin tags) qui te complexent",
                "Tu n'as jamais fait de diagnostic de peau professionnel",
                "Tu veux un protocole de soins réalisable au quotidien",
                "Tu cherches une professionnelle de confiance, à Parakou",
              ].map((item, i) => (
                <li key={i} className="checklist-item flex items-start gap-4">
                  <span
                    className="mt-0.5 w-5 h-5 rounded-full flex items-center justify-center shrink-0 text-[9px] font-bold"
                    style={{ backgroundColor: "rgba(109,7,26,0.25)", color: "#c98080", border: "1px solid rgba(109,7,26,0.3)" }}
                  >
                    ✓
                  </span>
                  <span
                    className="text-[13.5px] leading-[1.65]"
                    style={{ color: "#ffffff" }}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>

          </div>
        </div>
      </section>

      {/* ── BOOKING ─────────────────────────────────────────────── */}
      <section
        id="booking"
        style={{ backgroundColor: "#0a0806" }}
        className="py-20 md:py-28"
      >
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid md:grid-cols-[1fr_1.3fr] gap-12 md:gap-16 items-start">

            {/* Left — Info */}
            <div>
              <p
                className="text-[9px] uppercase tracking-[0.4em] mb-4"
                style={{ color: "#c98080", fontFamily: "var(--font-body)" }}
              >
                Réservation en ligne
              </p>
              <h2
                className="mb-5 leading-tight"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(26px, 3.5vw, 42px)",
                  color: "#f9f3ec",
                  fontWeight: 700,
                }}
              >
                Réserve ta place maintenant
              </h2>
              <p
                className="text-[14px] leading-relaxed mb-8"
                style={{ color: "#ffffff" }}
              >
                Formulaire en 4 étapes. Le paiement en ligne confirme définitivement ta place. Même sans aller jusqu'au bout, tes coordonnées sont sauvegardées.
              </p>

              {/* Mini info */}
              <div className="space-y-3">
                {[
                  "06 au 10 juillet 2026 · Parakou",
                  "Paiement sécurisé via FedaPay",
                  "Confirmation par WhatsApp",
                  "Mobile money & carte acceptés",
                ].map((text) => (
                  <div key={text} className="flex items-center gap-3">
                    <span className="w-1 h-1 rounded-full shrink-0" style={{ backgroundColor: "#6D071A" }} />
                    <span className="text-[13px]" style={{ color: "#ffffff" }}>{text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Form */}
            <div>
              <BookingForm />
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────── */}
      <section style={{ backgroundColor: "#f9f3ec" }} className="py-20 md:py-24">
        <div className="max-w-3xl mx-auto px-6">
          <p
            className="text-[9px] uppercase tracking-[0.45em] mb-3"
            style={{ color: "#6D071A", fontFamily: "var(--font-body)" }}
          >
            FAQ
          </p>
          <h2
            className="mb-12"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(24px, 3vw, 36px)",
              color: "#1a0d0d",
              fontWeight: 700,
            }}
          >
            Questions fréquentes
          </h2>
          <div className="divide-y" style={{ borderTop: "1px solid rgba(26,13,13,0.1)", borderColor: "rgba(26,13,13,0.1)" }}>
            {FAQ.map((item) => (
              <details
                key={item.q}
                className="faq-row group py-1"
              >
                <summary
                  className="flex items-center justify-between py-5 cursor-pointer list-none select-none"
                  style={{ color: "#1a0d0d" }}
                >
                  <span
                    className="text-[15px] font-semibold pr-6 leading-snug"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {item.q}
                  </span>
                  <span
                    className="shrink-0 text-xl font-light transition-transform duration-300 group-open:rotate-45"
                    style={{ color: "#6D071A" }}
                  >
                    +
                  </span>
                </summary>
                <div
                  className="pb-5 text-[13.5px] leading-[1.8]"
                  style={{ color: "rgba(26,13,13,0.55)" }}
                >
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ────────────────────────────────────────────── */}
      <section
        style={{ backgroundColor: "#6D071A" }}
        className="py-16 md:py-20"
      >
        <div className="max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <p className="text-[10px] uppercase tracking-[0.35em] mb-2" style={{ color: "rgba(249,243,236,0.5)" }}>
              Places limitées · {EVENT.city} · {DATES.length} jours
            </p>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(22px, 3vw, 34px)",
                color: "#f9f3ec",
                fontWeight: 700,
              }}
            >
              Ne rate pas cette chance.
            </h2>
          </div>
          <a
            href="#booking"
            className="btn-cta shrink-0 px-10 py-4 text-[11px] font-semibold uppercase tracking-[0.25em]"
            style={{ backgroundColor: "#f9f3ec", color: "#6D071A" }}
          >
            Réserver maintenant →
          </a>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────────────── */}
      <footer style={{ backgroundColor: "#060402", borderTop: "1px solid rgba(249,243,236,0.06)" }} className="pt-14 pb-8">
        <div className="max-w-[1200px] mx-auto px-6">

          {/* Top grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-10" style={{ borderBottom: "1px solid rgba(249,243,236,0.06)" }}>

            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Image
                  src="/beautygate-logo-sans-bg.png"
                  alt="Academy Beauty Gate"
                  width={40}
                  height={40}
                  className="brightness-0 invert opacity-80"
                />
                <div>
                  <p style={{ fontFamily: "var(--font-display)", fontSize: 14, fontWeight: 700, color: "#f9f3ec", lineHeight: 1.2 }}>
                    Academy<br />Beauty Gate
                  </p>
                </div>
              </div>
              <p className="text-[12px] leading-[1.75]" style={{ color: "rgba(249,243,236,0.35)" }}>
                Centre de bien-être et d'esthétique avancée.<br />Cotonou, Bénin · Plus de 175 avis 5 étoiles.
              </p>
            </div>

            {/* Event */}
            <div>
              <p className="text-[9px] uppercase tracking-[0.4em] mb-4" style={{ color: "#6D071A" }}>Pop-up Parakou</p>
              <ul className="space-y-2.5">
                {[
                  { label: "Lieu", value: "Parakou, Bénin" },
                  { label: "Dates", value: "06 – 10 juillet 2026" },
                  { label: "Diagnostic", value: "7 000 FCFA · 30–45 min" },
                  { label: "Accrochons", value: "Dès 5 000 FCFA · 15–30 min" },
                ].map(row => (
                  <li key={row.label} className="flex gap-3 text-[12px]">
                    <span style={{ color: "rgba(249,243,236,0.25)", minWidth: 72 }}>{row.label}</span>
                    <span style={{ color: "rgba(249,243,236,0.65)" }}>{row.value}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact + CTA */}
            <div>
              <p className="text-[9px] uppercase tracking-[0.4em] mb-4" style={{ color: "#6D071A" }}>Contact</p>
              <div className="space-y-3 mb-6">
                <a
                  href={`tel:${EVENT.phoneRaw}`}
                  className="flex items-center gap-3 text-[13px] group"
                  style={{ color: "rgba(249,243,236,0.55)" }}
                >
                  <span style={{ color: "#6D071A", fontSize: 10 }}>✦</span>
                  <span className="group-hover:text-[#f9f3ec] transition-colors">{EVENT.phone}</span>
                </a>
                <a
                  href={`https://wa.me/${EVENT.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-[13px] group"
                  style={{ color: "rgba(249,243,236,0.55)" }}
                >
                  <span style={{ color: "#6D071A", fontSize: 10 }}>✦</span>
                  <span className="group-hover:text-[#f9f3ec] transition-colors">WhatsApp</span>
                </a>
              </div>
              <a
                href="#booking"
                className="btn-cta inline-flex items-center gap-2 px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.2em] group"
                style={{ backgroundColor: "#6D071A", color: "#f9f3ec" }}
              >
                Réserver ma place
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
            </div>

          </div>

          {/* Bottom bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6">
            <p className="text-[10px]" style={{ color: "rgba(249,243,236,0.15)" }}>
              © 2026 Academy Beauty Gate · Tous droits réservés
            </p>
            <p className="text-[10px]" style={{ color: "rgba(249,243,236,0.1)" }}>
              Places limitées · Paiement sécurisé FedaPay
            </p>
          </div>

        </div>
      </footer>

    </div>
  );
}
