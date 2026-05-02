"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { MapPin, Phone, Star, Clock } from "lucide-react";

const FAQS = [
  {
    q: "L'épilation par électrolyse est-elle douloureuse ?",
    a: "La sensation varie selon les zones et la sensibilité de chaque personne. Elle est généralement décrite comme un léger picotement ou une légère chaleur au niveau du follicule. Nos praticiens adaptent l'intensité pour maximiser votre confort tout au long de la séance.",
  },
  {
    q: "Quelles zones du corps peuvent être traitées par électrolyse ?",
    a: "Toutes les zones : visage (lèvre supérieure, menton, sourcils, joues), aisselles, bras, jambes, maillot, torse, dos et abdomen. L'électrolyse est particulièrement recommandée pour les zones sensibles et les poils fins ou blancs que le laser ne peut pas cibler.",
  },
  {
    q: "Combien de séances sont nécessaires ?",
    a: "Le nombre de séances dépend de la zone traitée, de la densité et du type de pilosité, ainsi que des cycles de repousse. En moyenne, plusieurs séances espacées de 4 à 6 semaines sont nécessaires. Un protocole personnalisé est établi lors de la consultation initiale.",
  },
  {
    q: "Quelles sont les contre-indications à l'électrolyse ?",
    a: "Les principales contre-indications sont : grossesse, port d'un stimulateur cardiaque (pacemaker), certaines maladies cutanées actives sur la zone, et prise de médicaments anti-coagulants. Un bilan est systématiquement réalisé avant la première séance.",
  },
  {
    q: "Quelle est la différence entre électrolyse et épilation laser ?",
    a: "L'électrolyse est la seule méthode reconnue comme définitive à 100%, poil par poil, efficace sur tous les types de poils (y compris blancs, blonds, fins) et toutes les couleurs de peau. Le laser agit en masse mais ne peut pas cibler les poils sans pigmentation. Les deux techniques sont complémentaires.",
  },
  {
    q: "Y a-t-il une période de convalescence après la séance ?",
    a: "Non. Une légère rougeur peut apparaître pendant quelques heures après la séance, c'est tout à fait normal. La reprise des activités est immédiate. Il est recommandé d'éviter le soleil direct et d'appliquer un soin apaisant sur la zone traitée pendant 24h.",
  },
];

function FaqItem({ item }: { item: typeof FAQS[0] }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-[#eee] last:border-0">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between gap-4 py-5 text-left">
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

const AVANTAGES = [
  { titre: "100% définitif", desc: "La seule méthode reconnue scientifiquement comme totalement définitive, poil par poil." },
  { titre: "Tous types de poils", desc: "Efficace sur les poils blancs, blonds, roux et fins que le laser ne peut pas cibler." },
  { titre: "Toutes couleurs de peau", desc: "Parfaitement adapté aux peaux foncées et métissées — aucun risque de dépigmentation." },
  { titre: "Visage & corps", desc: "Traitement de précision pour toutes les zones, même les plus petites et délicates." },
  { titre: "Non invasif", desc: "Protocole haute fréquence sans chirurgie, sans cicatrice, sans éviction sociale." },
  { titre: "Suivi personnalisé", desc: "Un protocole sur-mesure établi après bilan complet, ajusté à chaque séance." },
];

const ETAPES = [
  { num: "01", titre: "Consultation initiale offerte", desc: "Bilan complet de la pilosité et du type de peau. Définition du protocole personnalisé et estimation du nombre de séances." },
  { num: "02", titre: "Préparation de la zone", desc: "Nettoyage et désinfection. La zone ne doit pas être épilée à la cire ou à la pince dans les semaines précédant la séance." },
  { num: "03", titre: "Application de l'électrolyse", desc: "Une fine aiguille est introduite dans chaque follicule pileux. Une impulsion électrique haute fréquence détruit définitivement la racine du poil." },
  { num: "04", titre: "Soin post-séance", desc: "Application d'un gel apaisant et antiseptique. La zone peut être légèrement rosée pendant quelques heures — totalement normal." },
];

export function ElectrolysePage() {
  return (
    <main>

      {/* HERO */}
      <section className="relative h-[500px] md:h-[580px] overflow-hidden bg-black">
        <Image
          src="/images/electrolyse/electrolyse.png"
          alt="Épilation par électrolyse Cotonou Academy Beauty Gate"
          fill
          className="object-cover opacity-55"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent" />
        <div className="relative z-10 h-full flex flex-col justify-center max-w-[1300px] mx-auto px-6 md:px-10 pt-[90px]">
          <p className="text-[12px] font-bold uppercase tracking-[3px] text-[#6D071A] mb-4">
            Academy Beauty Gate — Cotonou
          </p>
          <h1 className="font-heading text-[36px] md:text-[56px] font-bold text-white leading-tight max-w-[700px] mb-5">
            Épilation par électrolyse<br />à Cotonou
          </h1>
          <p className="text-white/80 text-[16px] max-w-[520px] leading-[26px] mb-8">
            La seule technique d'épilation reconnue comme 100% définitive, poil par poil — efficace sur tous les types de peau et de poils, y compris les poils blancs et fins.
          </p>
          <div className="flex flex-wrap gap-4 items-center">
            <Link href="#contact" className="group relative overflow-hidden inline-block bg-[#6D071A] text-white px-8 py-4 text-[13px] font-semibold uppercase tracking-widest rounded-[3px]">
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
            { icon: "◎", titre: "La seule méthode 100% définitive", desc: "Reconnue scientifiquement comme la seule technique d'épilation totalement permanente, sans risque." },
            { icon: "◈", titre: "Tous types de peaux & poils", desc: "Efficace sur les poils blancs, blonds, fins — et parfaitement adapté aux peaux foncées du Bénin." },
            { icon: "◉", titre: "Protocole sur-mesure haute fréquence", desc: "Chaque séance est conçue spécifiquement pour votre pilosité, zone par zone." },
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
          <div className="relative aspect-square rounded-xl overflow-hidden group">
            <Image
              src="/images/electrolyse/epilation-electrolyse-appart-beaute.webp"
              alt="Épilation par électrolyse haute fréquence Cotonou"
              fill
              className="object-cover transition-transform duration-[1400ms] ease-in-out group-hover:scale-[1.04]"
            />
          </div>
          <div>
            <p className="text-[12px] font-bold uppercase tracking-[3px] text-[#6D071A] mb-4">La technique</p>
            <h2 className="font-heading text-[32px] md:text-[40px] font-bold text-black leading-tight mb-6">
              Dites adieu à votre pilosité avec l'épilation haute fréquence
            </h2>
            <p className="text-[15px] text-[#444] leading-[26px] mb-4">
              L'épilation par électrolyse, ou épilation haute fréquence, est la seule méthode d'épilation reconnue scientifiquement comme <strong>totalement et définitivement permanente</strong>. Elle agit poil par poil en détruisant la racine du follicule pileux grâce à une fine impulsion électrique.
            </p>
            <p className="text-[15px] text-[#444] leading-[26px] mb-4">
              À <strong>Academy Beauty Gate à Cotonou</strong>, cette technique est particulièrement précieuse car elle est efficace sur <strong>tous les types de poils</strong> — y compris les poils blancs, blonds, roux et fins que le laser ne peut pas traiter — et sur toutes les carnations, des plus claires aux plus foncées.
            </p>
            <p className="text-[15px] text-[#444] leading-[26px]">
              Idéale pour le visage (lèvre supérieure, menton, sourcils) comme pour le corps, l'électrolyse offre une précision millimétrique impossible à atteindre avec d'autres techniques.
            </p>
          </div>
        </div>
      </section>

      {/* AVANTAGES */}
      <section className="py-[80px] bg-[#fafafa]">
        <div className="max-w-[1300px] mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[12px] font-bold uppercase tracking-[3px] text-[#6D071A] mb-4">Bénéfices</p>
            <h2 className="font-heading text-[32px] md:text-[40px] font-bold text-black leading-tight mb-8">
              Les avantages de l'épilation par électrolyse
            </h2>
            <div className="space-y-5">
              {AVANTAGES.map((a) => (
                <div key={a.titre} className="flex gap-4">
                  <span className="w-6 h-6 rounded-full bg-[#6D071A]/10 flex items-center justify-center shrink-0 mt-0.5 text-[#6D071A] text-[11px] font-bold">✓</span>
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
              src="/images/electrolyse/avantages-epilation-electrolyse.webp"
              alt="Avantages épilation électrolyse Cotonou Bénin"
              fill
              className="object-cover transition-transform duration-[1400ms] ease-in-out group-hover:scale-[1.04]"
            />
          </div>
        </div>
      </section>

      {/* PRÉCAUTIONS + DIAGNOSTIC */}
      <section className="py-[80px] bg-white">
        <div className="max-w-[1300px] mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-[12px] font-bold uppercase tracking-[3px] text-[#6D071A] mb-4">À savoir</p>
            <h2 className="font-heading text-[32px] md:text-[38px] font-bold text-black leading-tight mb-6">
              Précautions & recommandations
            </h2>
            <p className="text-[15px] text-[#444] leading-[26px] mb-5">
              Pour garantir l'efficacité et la sécurité de votre traitement, voici les recommandations à respecter avant et après chaque séance.
            </p>
            <div className="grid grid-cols-1 gap-4">
              {[
                { titre: "Avant la séance", items: ["Ne pas épiler à la cire ni à la pince 3 semaines avant", "Raser la zone 48h avant si nécessaire", "Hydrater la peau dans les jours précédant la séance", "Éviter les expositions solaires récentes"] },
                { titre: "Après la séance", items: ["Légère rougeur possible — totalement normale", "Éviter le soleil direct 48h après", "Appliquer un soin apaisant recommandé", "Ne pas gratter ni frotter la zone traitée"] },
              ].map((bloc) => (
                <div key={bloc.titre} className="border border-[#eee] rounded-xl p-5">
                  <p className="text-[13px] font-bold uppercase tracking-[1px] text-[#6D071A] mb-3">{bloc.titre}</p>
                  <ul className="space-y-2">
                    {bloc.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-[13px] text-[#555]">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#6D071A] shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
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
              Avant toute séance d'électrolyse, nos praticiens réalisent gratuitement un bilan complet de votre pilosité et un test de sensibilité pour calibrer le protocole idéal. Sans engagement.
            </p>
            <ul className="space-y-2 mb-8">
              {["Analyse du type de poil et de peau", "Test haute fréquence sur petite zone", "Protocole et planning personnalisés", "Devis transparent sans surprise"].map((item) => (
                <li key={item} className="flex items-center gap-2 text-[13px] text-white/90">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/60" />
                  {item}
                </li>
              ))}
            </ul>
            <Link href="#contact" className="group relative overflow-hidden inline-block bg-white text-[#6D071A] px-7 py-3.5 text-[13px] font-semibold uppercase tracking-widest rounded-[3px]">
              <span className="absolute inset-0 bg-black translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500" />
              <span className="relative z-10 group-hover:text-white transition-colors duration-500">Réserver ma consultation</span>
            </Link>
          </div>
        </div>
      </section>

      {/* TARIFS */}
      <section className="py-[80px] bg-[#fafafa]">
        <div className="max-w-[1300px] mx-auto px-6 md:px-10">
          <div className="text-center mb-12">
            <p className="text-[12px] font-bold uppercase tracking-[3px] text-[#6D071A] mb-4">Investissement</p>
            <h2 className="font-heading text-[32px] md:text-[40px] font-bold text-black mb-3">Nos tarifs d'épilation par électrolyse</h2>
            <p className="text-[15px] text-[#555]">Les tarifs sont calculés au temps de séance — travail minutieux, poil par poil. Première consultation gratuite.</p>
          </div>
          <div className="max-w-[700px] mx-auto">
            <div className="border border-[#eee] rounded-2xl overflow-hidden">
              {[
                { durée: "15 minutes", prix: "Sur devis" },
                { durée: "30 minutes", prix: "Sur devis" },
                { durée: "45 minutes", prix: "Sur devis" },
                { durée: "1 heure", prix: "Sur devis" },
                { durée: "Forfait 5 séances", prix: "Sur devis" },
              ].map((t, i) => (
                <div key={t.durée} className={`flex items-center justify-between px-6 py-4 ${i % 2 === 0 ? "bg-white" : "bg-[#fafafa]"}`}>
                  <span className="text-[14px] font-semibold text-black">{t.durée}</span>
                  <span className="text-[14px] text-[#6D071A] font-semibold">{t.prix}</span>
                </div>
              ))}
            </div>
            <p className="text-center text-[13px] text-[#888] mt-6">
              Contactez-nous au{" "}
              <Link href="tel:+22997885887" className="text-[#6D071A] font-semibold">+229 97 88 58 87</Link>
              {" "}pour un devis personnalisé.
            </p>
          </div>
        </div>
      </section>

      {/* DÉROULEMENT */}
      <section className="py-[80px] bg-white">
        <div className="max-w-[1300px] mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[12px] font-bold uppercase tracking-[3px] text-[#6D071A] mb-4">Protocole</p>
            <h2 className="font-heading text-[32px] md:text-[40px] font-bold text-black leading-tight mb-10">
              Comment se déroule une séance d'électrolyse ?
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
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden group">
            <Image
              src="/images/electrolyse/deroulement-seance-epilatioon-electrolyse.webp"
              alt="Déroulement séance électrolyse Academy Beauty Gate Cotonou"
              fill
              className="object-cover transition-transform duration-[1400ms] ease-in-out group-hover:scale-[1.04]"
            />
          </div>
        </div>
      </section>

      {/* PREMIÈRE CONSULTATION */}
      <section className="py-[80px] bg-[#fafafa]">
        <div className="max-w-[1300px] mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden group">
            <Image
              src="/images/electrolyse/consultation-seance-epilation-electrolyse-appart-beaute.webp"
              alt="Première consultation épilation électrolyse Cotonou"
              fill
              className="object-cover transition-transform duration-[1400ms] ease-in-out group-hover:scale-[1.04]"
            />
          </div>
          <div>
            <p className="text-[12px] font-bold uppercase tracking-[3px] text-[#6D071A] mb-4">Consultation initiale</p>
            <h2 className="font-heading text-[32px] md:text-[38px] font-bold text-black leading-tight mb-6">
              Votre première consultation : le début de votre projet esthétique
            </h2>
            <p className="text-[15px] text-[#444] leading-[26px] mb-4">
              La première consultation chez Academy Beauty Gate est <strong>entièrement offerte</strong>. Elle permet à notre praticien d'évaluer votre pilosité, votre type de peau et vos attentes pour définir le protocole le plus adapté.
            </p>
            <p className="text-[15px] text-[#444] leading-[26px] mb-6">
              À l'issue de cette consultation, vous repartez avec un planning de séances personnalisé, une estimation du nombre de séances nécessaires et un devis transparent — sans engagement de votre part.
            </p>
            <Link href="#contact" className="group relative overflow-hidden inline-block bg-[#6D071A] text-white px-8 py-4 text-[13px] font-semibold uppercase tracking-widest rounded-[3px]">
              <span className="absolute inset-0 bg-black translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500" />
              <span className="relative z-10">Réserver ma consultation gratuite</span>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-[80px] bg-white">
        <div className="max-w-[1300px] mx-auto px-6 md:px-10">
          <div className="text-center mb-12">
            <p className="text-[12px] font-bold uppercase tracking-[3px] text-[#6D071A] mb-4">Questions fréquentes</p>
            <h2 className="font-heading text-[32px] md:text-[40px] font-bold text-black">
              Tout savoir sur l'électrolyse à Cotonou
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 max-w-[1100px] mx-auto">
            <div>{FAQS.slice(0, 3).map((f) => <FaqItem key={f.q} item={f} />)}</div>
            <div>{FAQS.slice(3).map((f) => <FaqItem key={f.q} item={f} />)}</div>
          </div>
        </div>
      </section>

      {/* GEO SEO 1 — Expertise locale */}
      <section className="py-[80px] bg-[#fafafa]">
        <div className="max-w-[1300px] mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Texte SEO */}
          <div>
            <p className="text-[12px] font-bold uppercase tracking-[3px] text-[#6D071A] mb-4">Notre expertise à Cotonou</p>
            <h2 className="font-heading text-[32px] md:text-[40px] font-bold text-black leading-tight mb-6">
              Pourquoi choisir Academy Beauty Gate pour votre électrolyse à Cotonou ?
            </h2>
            <div className="space-y-4 text-[15px] text-[#444] leading-[26px]">
              <p>
                Academy Beauty Gate est l&apos;institut de référence pour l&apos;épilation par électrolyse à Cotonou, Bénin.
                Installé au cœur de Cadjehoun, notre centre propose la seule méthode d&apos;épilation reconnue comme
                100% définitive, adaptée à tous les types de poils — y compris les poils blancs, fins et roux que
                le laser ne peut pas traiter.
              </p>
              <p>
                Nos praticiens certifiés maîtrisent les protocoles haute fréquence les plus exigeants, avec une
                expertise particulière sur les peaux africaines et métissées. Chaque traitement commence par
                une consultation gratuite et un diagnostic complet pour définir le protocole le mieux adapté
                à votre pilosité et votre type de peau.
              </p>
              <p>
                À Academy Beauty Gate Cotonou, chaque séance est réalisée dans le respect des normes d&apos;hygiène
                les plus strictes, avec du matériel à usage unique et des équipements certifiés.
                Votre sécurité et votre confort sont notre priorité absolue.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6 mt-8">
              {[
                { value: "175+", label: "Avis 5 étoiles" },
                { value: "8 ans", label: "D'expertise" },
                { value: "100%", label: "Définitif" },
              ].map((s) => (
                <div key={s.label} className="border-l-2 border-[#6D071A]/20 pl-4">
                  <p className="text-[24px] font-bold text-[#6D071A]">{s.value}</p>
                  <p className="text-[12px] text-[#888] mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Carte Institut */}
          <div>
            <div className="bg-[#6D071A] rounded-2xl p-8 text-white mb-0">
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
          src="/images/electrolyse/epilation-electrolyse-appart-beaute.webp"
          alt="Academy Beauty Gate Cotonou électrolyse"
          fill
          className="object-cover opacity-25"
        />
        <div className="relative z-10 max-w-[700px] mx-auto px-6 text-center">
          <p className="text-[12px] font-bold uppercase tracking-[3px] text-[#6D071A] mb-4">Prêt(e) à commencer ?</p>
          <h2 className="font-heading text-[32px] md:text-[44px] font-bold text-white leading-tight mb-5">
            Nous sommes là pour vous accompagner
          </h2>
          <p className="text-white/70 text-[15px] leading-[26px] mb-8">
            Prenez rendez-vous pour votre consultation offerte à Academy Beauty Gate, Cadjehoun, Cotonou. Nos praticiens répondent à toutes vos questions.
          </p>
          <Link href="#contact" className="group relative overflow-hidden inline-block bg-[#6D071A] text-white px-10 py-4 text-[13px] font-semibold uppercase tracking-widest rounded-[3px]">
            <span className="absolute inset-0 bg-white translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500" />
            <span className="relative z-10 group-hover:text-[#6D071A] transition-colors duration-500">Prendre rendez-vous</span>
          </Link>
        </div>
      </section>

    </main>
  );
}
