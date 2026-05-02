"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { MapPin, Phone, Star, Clock } from "lucide-react";

/* ── FAQ ──────────────────────────────────────────────────────── */
const FAQS = [
  {
    q: "L'épilation laser est-elle adaptée à tous les types de peau ?",
    a: "Oui. Nos lasers de dernière génération sont compatibles avec tous les phototypes, y compris les peaux foncées et métissées très présentes au Bénin. Un bilan personnalisé est réalisé avant la première séance pour adapter les paramètres.",
  },
  {
    q: "Combien de séances sont nécessaires pour un résultat définitif ?",
    a: "En moyenne 6 à 8 séances suffisent pour réduire de 80 à 95 % la repousse. L'espacement entre les séances varie de 4 à 8 semaines selon la zone et la phase du cycle pilaire.",
  },
  {
    q: "L'épilation laser est-elle douloureuse ?",
    a: "La sensation est comparable à un léger picotement ou un élastique claqué sur la peau. Nos appareils intègrent un système de refroidissement qui minimise l'inconfort. La plupart des clients trouvent la procédure très supportable.",
  },
  {
    q: "Quelles zones peut-on traiter ?",
    a: "Toutes les zones : aisselles, jambes, bras, maillot intégral, visage (lèvre supérieure, menton, joues), torse, dos, abdomen et zone intime. Un traitement corps entier est également possible.",
  },
  {
    q: "Y a-t-il des contre-indications ?",
    a: "Oui : grossesse, allaitement, exposition solaire récente, peau bronzée, certains médicaments photosensibilisants et maladies cutanées actives. Un bilan médical préalable est systématiquement réalisé.",
  },
  {
    q: "Que faire avant et après la séance ?",
    a: "Avant : raser la zone 24h avant (ne pas épiler à la cire), éviter le soleil et les autobronzants. Après : éviter le soleil et la chaleur intense (sauna, hammam) pendant 48h, appliquer un soin apaisant si nécessaire.",
  },
  {
    q: "À partir de quel âge peut-on faire une épilation laser ?",
    a: "L'épilation laser est recommandée à partir de 18 ans. Entre 16 et 18 ans, une consultation parentale est requise. En dessous de 16 ans, elle est déconseillée car la pilosité n'est pas encore stabilisée.",
  },
  {
    q: "Comment prendre rendez-vous pour une épilation laser à Cotonou ?",
    a: "Vous pouvez nous contacter via WhatsApp au +229 97 88 58 87, par e-mail à beautygate055@gmail.com ou en remplissant le formulaire de contact sur cette page. La première consultation est offerte.",
  },
];

function FaqItem({ item }: { item: typeof FAQS[0] }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-[#eee] last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 py-5 text-left"
      >
        <span className="text-[15px] font-semibold text-black leading-snug">{item.q}</span>
        <span className={`shrink-0 w-7 h-7 rounded-full border flex items-center justify-center transition-all duration-300 ${open ? "bg-[#6D071A] border-[#6D071A]" : "bg-white border-[#ddd]"}`}>
          <svg viewBox="0 0 24 24" fill="none" stroke={open ? "#fff" : "#6D071A"} strokeWidth="2.5" strokeLinecap="round" className={`w-3.5 h-3.5 transition-transform duration-300 ${open ? "rotate-45" : ""}`}>
            <path d="M12 5v14M5 12h14" />
          </svg>
        </span>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[300px] pb-5" : "max-h-0"}`}>
        <p className="text-[14px] text-[#555] leading-[24px]">{item.a}</p>
      </div>
    </div>
  );
}

/* ── ZONES ────────────────────────────────────────────────────── */
const ZONES = [
  { label: "Aisselles", desc: "Résultat dès la 1ère séance" },
  { label: "Maillot intégral", desc: "Toutes options disponibles" },
  { label: "Jambes complètes", desc: "Demi-jambes ou complètes" },
  { label: "Bras & avant-bras", desc: "Traitement doux et rapide" },
  { label: "Lèvre supérieure", desc: "Précision millimétrique" },
  { label: "Menton & joues", desc: "Adapté aux peaux sensibles" },
  { label: "Torse & dos", desc: "Pour hommes et femmes" },
  { label: "Abdomen", desc: "Ligne de ventre incluse" },
  { label: "Corps entier", desc: "Forfait avantageux disponible" },
];

/* ── AVANTAGES ────────────────────────────────────────────────── */
const AVANTAGES = [
  { icon: "✓", titre: "Résultat durable", desc: "Réduction de 80 à 95 % de la pilosité après 6 à 8 séances." },
  { icon: "✓", titre: "Adapté à tous les phototypes", desc: "Technologie compatible peaux foncées, métissées, claires." },
  { icon: "✓", titre: "Indolore & sécurisé", desc: "Système de refroidissement intégré, protocole médical strict." },
  { icon: "✓", titre: "Rapide", desc: "Une séance aisselles : 10 min. Jambes complètes : 45 min." },
  { icon: "✓", titre: "Sans éviction sociale", desc: "Reprise immédiate des activités après la séance." },
  { icon: "✓", titre: "Suivi personnalisé", desc: "Bilan peau offert + accompagnement post-séance inclus." },
];

/* ── ÉTAPES ───────────────────────────────────────────────────── */
const ETAPES = [
  { num: "01", titre: "Consultation & bilan", desc: "Analyse de votre peau et pilosité, détermination du protocole adapté à votre phototype. La première consultation est offerte." },
  { num: "02", titre: "Préparation de la zone", desc: "Nettoyage et désinfection de la zone à traiter. Rasage préalable requis 24h avant la séance." },
  { num: "03", titre: "Application du laser", desc: "Le praticien applique les impulsions lumineuses sur la zone. Le système de refroidissement assure votre confort." },
  { num: "04", titre: "Soin post-laser", desc: "Application d'un gel apaisant. Conseils de suivi personnalisés pour optimiser les résultats entre les séances." },
];

/* ── COMPOSANT PRINCIPAL ──────────────────────────────────────── */
export function EpilationLaserPage() {
  return (
    <main>

      {/* HERO */}
      <section className="relative h-[500px] md:h-[580px] overflow-hidden bg-black">
        <Image
          src="/images/epilation-laser/Appart-beaute-epilation-intro-1-scaled.jpg"
          alt="Épilation laser Cotonou Academy Beauty Gate"
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent" />
        <div className="relative z-10 h-full flex flex-col justify-center max-w-[1300px] mx-auto px-6 md:px-10 pt-[90px]">
          <p className="text-[12px] font-bold uppercase tracking-[3px] text-[#6D071A] mb-4">
            Academy Beauty Gate — Cotonou
          </p>
          <h1 className="font-heading text-[36px] md:text-[56px] font-bold text-white leading-tight max-w-[700px] mb-5">
            Épilation laser<br />définitive à Cotonou
          </h1>
          <p className="text-white/80 text-[16px] max-w-[520px] leading-[26px] mb-8">
            Dites adieu aux poils indésirables avec nos lasers dernière génération, adaptés à tous les phototypes — peaux foncées, métissées et claires.
          </p>
          <div className="flex flex-wrap gap-4 items-center">
            <Link
              href="#contact"
              className="group relative overflow-hidden inline-block bg-[#6D071A] text-white px-8 py-4 text-[13px] font-semibold uppercase tracking-widest rounded-[3px]"
            >
              <span className="absolute inset-0 bg-white translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500" />
              <span className="relative z-10 group-hover:text-[#6D071A] transition-colors duration-500">Prendre rendez-vous</span>
            </Link>
            <span className="text-white/70 text-[13px]">1ère consultation offerte</span>
          </div>
        </div>
      </section>

      {/* 3 BADGES */}
      <section className="bg-[#fafafa] border-b border-[#eee]">
        <div className="max-w-[1300px] mx-auto px-6 md:px-10 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: "◎", titre: "Tous types de peau", desc: "Laser compatible peaux noires, métissées et claires — technologie adaptée au Bénin." },
            { icon: "◈", titre: "Non invasif & sans douleur", desc: "Protocole médical doux avec refroidissement intégré pour un confort maximal." },
            { icon: "◉", titre: "Résultats garantis", desc: "Réduction permanente dès la 1ère séance, résultat définitif en 6 à 8 séances." },
          ].map((b) => (
            <div key={b.titre} className="flex gap-4 items-start">
              <span className="text-[#6D071A] text-[22px] mt-0.5">{b.icon}</span>
              <div>
                <p className="text-[14px] font-bold text-black mb-1">{b.titre}</p>
                <p className="text-[13px] text-[#666] leading-[20px]">{b.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* QU'EST-CE QUE C'EST */}
      <section className="py-[80px] bg-white">
        <div className="max-w-[1300px] mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden group">
            <Image
              src="/images/epilation-laser/epilation-laser-definitive-explication.webp"
              alt="Séance épilation laser Academy Beauty Gate Cotonou"
              fill
              className="object-cover transition-transform duration-[1400ms] ease-in-out group-hover:scale-[1.04]"
            />
          </div>
          <div>
            <p className="text-[12px] font-bold uppercase tracking-[3px] text-[#6D071A] mb-4">À propos du traitement</p>
            <h2 className="font-heading text-[32px] md:text-[40px] font-bold text-black leading-tight mb-6">
              Épilation laser définitive : qu'est-ce que c'est ?
            </h2>
            <p className="text-[15px] text-[#444] leading-[26px] mb-4">
              L'épilation laser est une technique esthétique qui utilise des impulsions lumineuses ciblant la mélanine du poil pour détruire définitivement le follicule pileux, sans abîmer la peau environnante.
            </p>
            <p className="text-[15px] text-[#444] leading-[26px] mb-4">
              À <strong>Academy Beauty Gate à Cotonou</strong>, nous utilisons des lasers de dernière génération spécialement calibrés pour les <strong>peaux foncées et métissées</strong> — une caractéristique essentielle pour garantir efficacité et sécurité en contexte béninois.
            </p>
            <p className="text-[15px] text-[#444] leading-[26px]">
              Le résultat est une réduction permanente et progressive de la pilosité, avec des effets visibles dès la première séance. Hommes et femmes peuvent bénéficier du traitement sur toutes les zones du corps.
            </p>
          </div>
        </div>
      </section>

      {/* AVANTAGES */}
      <section className="py-[80px] bg-[#fafafa]">
        <div className="max-w-[1300px] mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[12px] font-bold uppercase tracking-[3px] text-[#6D071A] mb-4">Pourquoi choisir le laser</p>
            <h2 className="font-heading text-[32px] md:text-[40px] font-bold text-black leading-tight mb-8">
              Les avantages de l'épilation laser
            </h2>
            <div className="space-y-5">
              {AVANTAGES.map((a) => (
                <div key={a.titre} className="flex gap-4">
                  <span className="w-6 h-6 rounded-full bg-[#6D071A]/10 flex items-center justify-center shrink-0 mt-0.5 text-[#6D071A] text-[12px] font-bold">{a.icon}</span>
                  <div>
                    <p className="text-[14px] font-bold text-black mb-0.5">{a.titre}</p>
                    <p className="text-[13px] text-[#666] leading-[20px]">{a.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative aspect-square rounded-xl overflow-hidden group">
            <Image
              src="/images/epilation-laser/avantages-epilation-laser.webp"
              alt="Avantages épilation laser Cotonou Bénin"
              fill
              className="object-cover transition-transform duration-[1400ms] ease-in-out group-hover:scale-[1.04]"
            />
          </div>
        </div>
      </section>

      {/* ZONES TRAITÉES */}
      <section className="py-[80px] bg-white">
        <div className="max-w-[1300px] mx-auto px-6 md:px-10">
          <div className="text-center mb-12 max-w-[650px] mx-auto">
            <p className="text-[12px] font-bold uppercase tracking-[3px] text-[#6D071A] mb-4">Zones de traitement</p>
            <h2 className="font-heading text-[32px] md:text-[40px] font-bold text-black leading-tight mb-4">
              Quelles zones peut-on traiter ?
            </h2>
            <p className="text-[15px] text-[#555] leading-[26px]">
              L'épilation laser à Cotonou couvre toutes les zones du corps, des plus petites (lèvre supérieure) aux plus grandes (jambes complètes, dos).
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {ZONES.map((z) => (
              <div key={z.label} className="border border-[#eee] rounded-xl p-5 hover:border-[#6D071A]/30 hover:shadow-md transition-all duration-300">
                <p className="text-[15px] font-bold text-black mb-1">{z.label}</p>
                <p className="text-[12px] text-[#999]">{z.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DÉROULEMENT */}
      <section className="py-[80px] bg-[#fafafa]">
        <div className="max-w-[1300px] mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-[12px] font-bold uppercase tracking-[3px] text-[#6D071A] mb-4">Protocole</p>
            <h2 className="font-heading text-[32px] md:text-[40px] font-bold text-black leading-tight mb-10">
              Déroulement d'une séance
            </h2>
            <div className="space-y-8">
              {ETAPES.map((e) => (
                <div key={e.num} className="flex gap-5">
                  <span className="text-[28px] font-bold text-[#6D071A]/20 leading-none shrink-0 w-10">{e.num}</span>
                  <div>
                    <p className="text-[15px] font-bold text-black mb-1">{e.titre}</p>
                    <p className="text-[14px] text-[#555] leading-[22px]">{e.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Diagnostic offert */}
          <div className="bg-[#6D071A] rounded-2xl p-8 text-white">
            <p className="text-[11px] font-bold uppercase tracking-[3px] text-white/60 mb-4">Offre de bienvenue</p>
            <h3 className="font-heading text-[26px] font-bold leading-tight mb-4">
              Diagnostic & test de sensibilité offerts
            </h3>
            <p className="text-[14px] text-white/80 leading-[22px] mb-6">
              Avant toute séance, nos praticiens réalisent gratuitement un bilan complet de votre peau et un test laser pour déterminer les paramètres idéaux. Aucun engagement, aucun risque.
            </p>
            <ul className="space-y-2 mb-8">
              {["Analyse du phototype", "Test de sensibilité", "Protocole personnalisé", "Devis sans engagement"].map((item) => (
                <li key={item} className="flex items-center gap-2 text-[13px] text-white/90">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/60" />
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="#contact"
              className="group relative overflow-hidden inline-block bg-white text-[#6D071A] px-7 py-3.5 text-[13px] font-semibold uppercase tracking-widest rounded-[3px]"
            >
              <span className="absolute inset-0 bg-black translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500" />
              <span className="relative z-10 group-hover:text-white transition-colors duration-500">Réserver ma consultation</span>
            </Link>
          </div>
        </div>
      </section>

      {/* TARIFS */}
      <section className="py-[80px] bg-white">
        <div className="max-w-[1300px] mx-auto px-6 md:px-10">
          <div className="text-center mb-12">
            <p className="text-[12px] font-bold uppercase tracking-[3px] text-[#6D071A] mb-4">Investissement</p>
            <h2 className="font-heading text-[32px] md:text-[40px] font-bold text-black mb-3">Nos tarifs d'épilation laser</h2>
            <p className="text-[15px] text-[#555]">Séances à l'unité ou en forfait — contactez-nous pour un devis personnalisé.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-[900px] mx-auto">
            {[
              { zone: "Aisselles", seance: "Sur devis", forfait: "Forfait 6 séances" },
              { zone: "Maillot classique", seance: "Sur devis", forfait: "Forfait 6 séances" },
              { zone: "Maillot intégral", seance: "Sur devis", forfait: "Forfait 6 séances" },
              { zone: "Demi-jambes", seance: "Sur devis", forfait: "Forfait 6 séances" },
              { zone: "Jambes complètes", seance: "Sur devis", forfait: "Forfait 6 séances" },
              { zone: "Lèvre supérieure", seance: "Sur devis", forfait: "Forfait 6 séances" },
            ].map((t) => (
              <div key={t.zone} className="border border-[#eee] rounded-xl p-5">
                <p className="text-[15px] font-bold text-black mb-2">{t.zone}</p>
                <p className="text-[13px] text-[#6D071A] font-semibold">{t.seance}</p>
                <p className="text-[12px] text-[#aaa] mt-1">{t.forfait}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-[13px] text-[#888] mt-8">
            Tarifs disponibles sur demande — contactez-nous au{" "}
            <Link href="tel:+22997885887" className="text-[#6D071A] font-semibold">+229 97 88 58 87</Link>
          </p>
        </div>
      </section>

      {/* CONTRE-INDICATIONS */}
      <section className="py-[80px] bg-[#fafafa]">
        <div className="max-w-[1300px] mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[12px] font-bold uppercase tracking-[3px] text-[#6D071A] mb-4">À savoir</p>
            <h2 className="font-heading text-[32px] md:text-[38px] font-bold text-black leading-tight mb-6">
              Contre-indications & précautions
            </h2>
            <p className="text-[15px] text-[#444] leading-[26px] mb-5">
              L'épilation laser est déconseillée dans les situations suivantes. Un bilan est toujours effectué avant la première séance pour écarter tout risque.
            </p>
            <ul className="space-y-3">
              {[
                "Grossesse et allaitement",
                "Exposition solaire récente ou peau bronzée",
                "Prise de médicaments photosensibilisants",
                "Maladies cutanées actives (eczéma, psoriasis sur zone)",
                "Antécédents de chéloïdes",
                "Moins de 18 ans (accord parental requis entre 16-18 ans)",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-[14px] text-[#444]">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#6D071A] shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden group">
            <Image
              src="/images/epilation-laser/contre-indications-epilation-laser.webp"
              alt="Contre-indications épilation laser Cotonou Bénin"
              fill
              className="object-cover transition-transform duration-[1400ms] ease-in-out group-hover:scale-[1.04]"
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-[80px] bg-white">
        <div className="max-w-[1300px] mx-auto px-6 md:px-10">
          <div className="text-center mb-12">
            <p className="text-[12px] font-bold uppercase tracking-[3px] text-[#6D071A] mb-4">Questions fréquentes</p>
            <h2 className="font-heading text-[32px] md:text-[40px] font-bold text-black">
              Tout savoir sur l'épilation laser à Cotonou
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 max-w-[1100px] mx-auto">
            <div>{FAQS.slice(0, 4).map((f) => <FaqItem key={f.q} item={f} />)}</div>
            <div>{FAQS.slice(4).map((f) => <FaqItem key={f.q} item={f} />)}</div>
          </div>
        </div>
      </section>

      {/* GEO SEO 1 — Expertise locale */}
      <section className="py-[80px] bg-[#fafafa]">
        <div className="max-w-[1300px] mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-[12px] font-bold uppercase tracking-[3px] text-[#6D071A] mb-4">Notre expertise à Cotonou</p>
            <h2 className="font-heading text-[32px] md:text-[40px] font-bold text-black leading-tight mb-6">
              Pourquoi choisir Academy Beauty Gate pour votre épilation laser à Cotonou ?
            </h2>
            <div className="space-y-4 text-[15px] text-[#444] leading-[26px]">
              <p>
                Academy Beauty Gate est l&apos;institut de référence pour l&apos;épilation laser à Cotonou, Bénin.
                Installé au cœur de Cadjehoun, notre centre utilise des lasers de dernière génération adaptés
                à tous les phototypes — particulièrement aux peaux africaines et métissées qui nécessitent
                des protocoles spécifiques pour garantir sécurité et efficacité.
              </p>
              <p>
                Notre équipe de praticiens certifiés maîtrise les technologies laser les plus avancées,
                avec une expertise reconnue sur les peaux à fort potentiel mélanogénique. Chaque traitement
                débute par une consultation offerte et un test de sensibilité pour définir les paramètres
                optimaux adaptés à votre peau.
              </p>
              <p>
                À Academy Beauty Gate Cotonou, nous utilisons exclusivement des lasers homologués,
                dans le strict respect des normes d&apos;hygiène et de sécurité. Votre confort et la
                qualité des résultats sont au cœur de chacune de nos séances.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-6 mt-8">
              {[
                { value: "175+", label: "Avis 5 étoiles" },
                { value: "8 ans", label: "D'expertise" },
                { value: "90%", label: "Réduction du poil" },
              ].map((s) => (
                <div key={s.label} className="border-l-2 border-[#6D071A]/20 pl-4">
                  <p className="text-[24px] font-bold text-[#6D071A]">{s.value}</p>
                  <p className="text-[12px] text-[#888] mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="bg-[#6D071A] rounded-2xl p-8 text-white">
              <p className="text-[11px] font-bold uppercase tracking-[3px] text-white/60 mb-6">
                Academy Beauty Gate — Cotonou
              </p>
              <div className="space-y-5 mb-8">
                {[
                  { icon: <MapPin size={15} />, label: "Adresse", value: "Cadjehoun, Cotonou, Bénin" },
                  { icon: <Phone size={15} />, label: "Téléphone", value: "+229 97 88 58 87" },
                  { icon: <Star size={15} />, label: "Avis Google", value: "4,9 / 5 — 175+ avis" },
                  { icon: <Clock size={15} />, label: "Horaires", value: "Lun–Ven 8h–20h · Sam 9h–18h" },
                ].map((info) => (
                  <div key={info.label} className="flex items-start gap-4">
                    <div className="text-white/50 mt-0.5 shrink-0">{info.icon}</div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-white/50 mb-0.5">{info.label}</p>
                      <p className="text-[14px] font-medium">{info.value}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link href="#contact" className="group relative overflow-hidden block text-center bg-white text-[#6D071A] px-7 py-3.5 text-[13px] font-bold uppercase tracking-widest rounded-[3px]">
                <span className="absolute inset-0 bg-black translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500" />
                <span className="relative z-10 group-hover:text-white transition-colors duration-500">Prendre rendez-vous</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* GEO SEO 2 — Zones desservies */}
      <section className="py-[80px] bg-white">
        <div className="max-w-[1300px] mx-auto px-6 md:px-10">
          <div className="text-center mb-12">
            <p className="text-[12px] font-bold uppercase tracking-[3px] text-[#6D071A] mb-4">Accessibilité</p>
            <h2 className="font-heading text-[32px] md:text-[40px] font-bold text-black mb-4">
              Nous accueillons nos clients de tout Cotonou et du Bénin
            </h2>
            <p className="text-[15px] text-[#555] max-w-xl mx-auto">
              Academy Beauty Gate est situé à Cadjehoun, au cœur de Cotonou — facilement accessible depuis tous les quartiers de la ville et les villes du Bénin.
            </p>
          </div>
          <div className="mb-8">
            <p className="text-[11px] font-bold text-[#bbb] uppercase tracking-widest mb-4 text-center">Quartiers de Cotonou</p>
            <div className="flex flex-wrap justify-center gap-2">
              {["Cadjehoun", "Akpakpa", "Fidjrossè", "Ganhi", "Gbegamey", "Jéricho", "Agla", "Sainte-Rita", "Haie-Vive", "Mènontin", "Zogbo", "Kouhounou", "Vèdoko", "Dantokpa", "Placodji"].map((q) => (
                <span key={q} className="px-3 py-1.5 bg-[#fafafa] border border-[#eee] text-[#666] text-[12px] font-medium hover:border-[#6D071A]/40 hover:text-[#6D071A] transition-all duration-200 cursor-default rounded-[3px]">
                  {q}
                </span>
              ))}
            </div>
          </div>
          <div className="mb-12">
            <p className="text-[11px] font-bold text-[#bbb] uppercase tracking-widest mb-4 text-center">Villes du Bénin</p>
            <div className="flex flex-wrap justify-center gap-2">
              {["Godomey", "Abomey-Calavi", "Porto-Novo", "Ouidah", "Bohicon", "Parakou", "Natitingou", "Lokossa", "Kandi"].map((v) => (
                <span key={v} className="px-3 py-1.5 bg-[#fafafa] border border-[#eee] text-[#666] text-[12px] font-medium hover:border-[#6D071A]/40 hover:text-[#6D071A] transition-all duration-200 cursor-default rounded-[3px]">
                  {v}
                </span>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#eee] border border-[#eee] overflow-hidden rounded-xl">
            {[
              { value: "Cotonou", label: "Ville d'implantation" },
              { value: "Cadjehoun", label: "Quartier" },
              { value: "Bénin", label: "Pays" },
              { value: "Afrique de l'Ouest", label: "Région" },
            ].map((item) => (
              <div key={item.label} className="bg-white px-6 py-5 text-center">
                <p className="font-bold text-black text-[15px] mb-1">{item.value}</p>
                <p className="text-[#aaa] text-[11px] uppercase tracking-wider">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="relative py-[80px] bg-black overflow-hidden">
        <Image
          src="/images/epilation-laser/resultats-epilation-laser-definitive.webp"
          alt="Résultats épilation laser Academy Beauty Gate Cotonou"
          fill
          className="object-cover opacity-30"
        />
        <div className="relative z-10 max-w-[700px] mx-auto px-6 text-center">
          <p className="text-[12px] font-bold uppercase tracking-[3px] text-[#6D071A] mb-4">Prêt(e) à commencer ?</p>
          <h2 className="font-heading text-[32px] md:text-[44px] font-bold text-white leading-tight mb-5">
            Nous sommes là pour vous accompagner
          </h2>
          <p className="text-white/70 text-[15px] leading-[26px] mb-8">
            Contactez Academy Beauty Gate à Cotonou pour votre première consultation offerte. Nos praticiens vous accompagnent à chaque étape.
          </p>
          <Link
            href="#contact"
            className="group relative overflow-hidden inline-block bg-[#6D071A] text-white px-10 py-4 text-[13px] font-semibold uppercase tracking-widest rounded-[3px]"
          >
            <span className="absolute inset-0 bg-white translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500" />
            <span className="relative z-10 group-hover:text-[#6D071A] transition-colors duration-500">Prendre rendez-vous</span>
          </Link>
        </div>
      </section>

    </main>
  );
}
