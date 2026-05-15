export const EVENT = {
  name: "Consultations Professionnelles & Suppression des Accrochons",
  city: "Parakou",
  country: "Bénin",
  startDate: "2026-07-06T08:00:00",
  phone: "01 68 41 11 11",
  phoneRaw: "+2290168411111",
  whatsapp: "2290168411111",
} as const;

export const DATES = [
  { value: "2026-07-06", label: "Lundi 06 juillet" },
  { value: "2026-07-07", label: "Mardi 07 juillet" },
  { value: "2026-07-08", label: "Mercredi 08 juillet" },
  { value: "2026-07-09", label: "Jeudi 09 juillet" },
  { value: "2026-07-10", label: "Vendredi 10 juillet" },
];

export const SERVICES = {
  diagnostic: {
    id: "diagnostic" as const,
    label: "Diagnostic de peau professionnel",
    price: 7000,
    priceLabel: "7 000 FCFA",
    duration: "30 à 45 min",
    tagline: "Comprends enfin ta peau",
    description: "Analyse complète de ton type de peau par notre esthéticienne certifiée. Tu repars avec un protocole de soins sur mesure.",
    includes: [
      "Analyse du type de peau (grasse, sèche, mixte, sensible)",
      "Identification des problèmes : acné, taches, déshydratation",
      "Protocole de soins personnalisé",
      "Recommandations de produits adaptées",
      "Conseils gestes quotidiens",
    ],
  },
  accrochons: {
    id: "accrochons" as const,
    label: "Suppression des accrochons",
    price: 5000,
    priceLabel: "À partir de 5 000 FCFA",
    duration: "15 à 30 min",
    tagline: "Peau nette, confiance retrouvée",
    description: "Suppression sécurisée et indolore des acrochordons (skin tags) par une professionnelle qualifiée. Résultats immédiats.",
    includes: [
      "Examen préalable des zones à traiter",
      "Procédure rapide et peu douloureuse",
      "Matériel stérilisé à usage unique",
      "Conseils post-soin inclus",
      "Résultats visibles immédiatement",
    ],
  },
} as const;

export type ServiceId = keyof typeof SERVICES;
