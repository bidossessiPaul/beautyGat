// Jeux d'images par sous-catégorie (catGroup), appliqués aux pages détail de
// TOUS les services de la sous-catégorie. Prioritaires sur les images génériques
// héritées de la catégorie. Images stockées dans /public/images/soins/<groupe>/.

export interface SubcatImageSet {
  hero: string;      // section HERO (paysage)
  intro: string;     // section intro (image à côté du texte)
  forWho: string;    // section "Pour qui ?"
  steps: string;     // section "Étapes du soin"
  benefits: string;  // section "Bienfaits / Résultats"
  extras?: string[]; // visuels supplémentaires — variété sur les cartes de la page liste
}

export const SUBCAT_IMAGE_SETS: Record<string, SubcatImageSet> = {
  pedicure: {
    hero:     "/images/soins/pedicure/hero.jpg",
    intro:    "/images/soins/pedicure/ambiance.jpg",
    forWho:   "/images/soins/pedicure/service-a.jpg",
    steps:    "/images/soins/pedicure/service-b.jpg",
    benefits: "/images/soins/pedicure/service-a.jpg",
  },
  manucure: {
    hero:     "/images/soins/manucure/hero.jpg",
    intro:    "/images/soins/manucure/ambiance.jpg",
    forWho:   "/images/soins/manucure/service-a.jpg",
    steps:    "/images/soins/manucure/service-b.jpg",
    benefits: "/images/soins/manucure/service-a.jpg",
  },
  massage: {
    hero:     "/images/soins/massage/hero.jpg",
    intro:    "/images/soins/massage/ambiance.jpg",
    forWho:   "/images/soins/massage/service-a.jpg",
    steps:    "/images/soins/massage/service-b.jpg",
    benefits: "/images/soins/massage/service-a.jpg",
    extras: [
      "/images/soins/massage/service-c.jpg",
      "/images/soins/massage/service-d.jpg",
      "/images/soins/massage/service-e.jpg",
    ],
  },
};
