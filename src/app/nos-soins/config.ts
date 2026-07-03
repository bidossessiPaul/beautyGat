export const CATEGORY_LABELS: Record<string, string> = {
  // 5 catégories principales
  visage:         "Soins Visage",
  "soin-corps":   "Soins du Corps",
  "mains-pieds":  "Mains & Pieds",
  consultation:   "Consultation",
  formation:      "Formations",
  // Autres
  "duo-enfants":  "Duo & Enfants",
  injections:     "Médical & Injections",
  diagnostic:     "Consultations",
  privatisation:  "Privatisation",
};

// Les 5 catégories affichées sur /nos-soins
export const MAIN_CATEGORIES = ["visage", "soin-corps", "mains-pieds", "consultation", "formation"];

export const CATEGORY_DESCRIPTIONS: Record<string, string> = {
  visage:        "Soins classiques, peelings, microneedling, microdermabrasion, oxygénation et plus",
  "soin-corps":  "Épilation, massages, gommages et soins du corps",
  "mains-pieds": "Manucure, pédicure, nail art et soins SPA",
  consultation:  "Consultations visio et présentiel, diagnostic de peau personnalisé",
  formation:     "Formations modulaires, perfectionnement et formation complète en esthétique",
};

export const CATEGORY_FALLBACK_IMAGES: Record<string, string> = {
  visage:        "/images/soins/hydrafacial/hero.jpg",
  "soin-corps":  "/images/Appart-beaute-accueil-philosophie-1-scaled.jpg",
  "mains-pieds": "/images/appart-beaute-3873920.jpg",
  formation:     "/images/dsc01280.jpg",
  "duo-enfants": "/images/dsc01280.jpg",
  injections:    "/images/soins/injection-hyaluronique/hero.jpg",
  diagnostic:    "/images/soins/diagnostic-peau/hero.jpg",
  privatisation: "/images/dsc01308-scaled.jpg",
};
