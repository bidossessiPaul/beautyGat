export interface Product {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  price: number;
  comparePrice?: number;
  image: string;
  images?: string[];
  category: "soins-visage" | "soins-corps" | "coffrets" | "accessoires";
  categoryLabel: string;
  stock: number;
  badge?: string;
  ingredients?: string;
  howToUse?: string;
}

export const products: Product[] = [
  {
    id: "prod_001",
    slug: "serum-anti-age-eclat",
    name: "Sérum Anti-Âge Éclat",
    shortDescription: "Concentré de vitamines C & E pour un teint lumineux et unifié.",
    description:
      "Notre sérum signature formule au Bénin avec des actifs naturels locaux. La vitamine C pure à 15 % éclaire le teint, réduit les taches et stimule la production de collagène. La vitamine E protège et nourrit en profondeur. Résultat visible dès la première semaine.",
    price: 18500,
    comparePrice: 22000,
    image: "/images/appart-beaute-3873926.jpg",
    category: "soins-visage",
    categoryLabel: "Soins Visage",
    stock: 20,
    badge: "Best-seller",
    ingredients:
      "Aqua, Ascorbic Acid 15%, Tocopherol, Niacinamide, Hyaluronic Acid, Aloe Vera Leaf Juice, Glycerin.",
    howToUse:
      "Appliquer 2–3 gouttes sur une peau propre matin et soir. Masser délicatement jusqu'à absorption complète. Suivre d'une crème hydratante.",
  },
  {
    id: "prod_002",
    slug: "creme-hydratante-karite",
    name: "Crème Hydratante au Karité",
    shortDescription: "Beurre de karité pur du Bénin pour une peau douce et nourrie.",
    description:
      "Formulée à base de beurre de karité 100 % naturel issu de nos régions, cette crème fondante nourrit et protège les peaux sèches à très sèches. Sans paraben, sans silicone. Texture onctueuse qui pénètre rapidement sans laisser de film gras.",
    price: 9500,
    image: "/images/Appart-beaute-accueil-philosophie-1-scaled.jpg",
    category: "soins-visage",
    categoryLabel: "Soins Visage",
    stock: 35,
    ingredients:
      "Butyrospermum Parkii Butter, Aqua, Glycerin, Cetyl Alcohol, Phenoxyethanol, Parfum.",
    howToUse:
      "Appliquer une noisette de produit sur le visage propre et sec, matin et/ou soir en massant délicatement.",
  },
  {
    id: "prod_003",
    slug: "huile-corps-baobab-argan",
    name: "Huile Corps Baobab & Argan",
    shortDescription: "Mélange luxueux d'huiles précieuses pour une peau soyeuse.",
    description:
      "Cette huile sèche associe l'huile de baobab riche en oméga et l'huile d'argan chargée en vitamine E. Elle pénètre instantanément sans laisser de résidu gras, laisse la peau satinée et parfumée. Idéale après la douche ou le bain.",
    price: 12000,
    image: "/images/dsc00744-1-scaled.jpg",
    category: "soins-corps",
    categoryLabel: "Soins Corps",
    stock: 25,
    badge: "Nouveau",
    ingredients:
      "Adansonia Digitata Seed Oil, Argania Spinosa Kernel Oil, Tocopherol, Parfum.",
    howToUse:
      "Appliquer en massage circulaire sur peau humide après la douche. Insister sur les zones sèches (coudes, genoux, talons).",
  },
  {
    id: "prod_004",
    slug: "gommage-corps-sucre-vanille",
    name: "Gommage Corps Sucre & Vanille",
    shortDescription: "Exfoliant doux au sucre de canne pour une peau lisse et parfumée.",
    description:
      "Ce gommage au sucre de canne et à l'extrait de vanille élimine délicatement les cellules mortes tout en nourrissant la peau grâce aux huiles végétales intégrées dans la formule. La peau retrouve sa douceur et son éclat naturel en une seule utilisation.",
    price: 7500,
    comparePrice: 9000,
    image: "/images/img_4538.jpg",
    category: "soins-corps",
    categoryLabel: "Soins Corps",
    stock: 40,
    ingredients:
      "Sucrose, Helianthus Annuus Seed Oil, Vanilla Planifolia Fruit Extract, Parfum, Tocopherol.",
    howToUse:
      "Appliquer sur peau humide en massages circulaires 2 fois par semaine. Rincer abondamment à l'eau tiède.",
  },
  {
    id: "prod_005",
    slug: "masque-purifiant-argile",
    name: "Masque Purifiant Argile Verte",
    shortDescription: "Argile verte & charbon actif pour désobstruer les pores en profondeur.",
    description:
      "Ce masque à l'argile verte pure débarrasse la peau de ses impuretés, réduit les pores dilatés et matifie le teint. Enrichi de charbon actif pour une action détox maximale et d'aloe vera pour calmer et hydrater après l'élimination des toxines.",
    price: 8500,
    image: "/images/soins/microneedling/hero.jpg",
    category: "soins-visage",
    categoryLabel: "Soins Visage",
    stock: 30,
    ingredients:
      "Kaolin, Aqua, Charcoal Powder, Aloe Barbadensis Leaf Juice, Glycerin, Zinc Oxide, Parfum.",
    howToUse:
      "Appliquer une couche fine sur le visage propre, éviter le contour des yeux. Laisser poser 10–15 min. Rincer à l'eau tiède. 1–2 fois par semaine.",
  },
  {
    id: "prod_006",
    slug: "coffret-rituel-beaute-complet",
    name: "Coffret Rituel Beauté Complet",
    shortDescription: "Le duo sérum + crème hydratante pour une routine soin complète.",
    description:
      "Offrez ou faites-vous plaisir avec ce coffret complet qui réunit notre Sérum Anti-Âge Éclat et notre Crème Hydratante au Karité dans un packaging cadeau élégant. Parfait pour débuter une vraie routine beauté ou offrir un soin de qualité.",
    price: 25000,
    comparePrice: 28000,
    image: "/images/appart-beaute-3873920.jpg",
    category: "coffrets",
    categoryLabel: "Coffrets Cadeaux",
    stock: 15,
    badge: "Idée cadeau",
    howToUse:
      "Appliquer le sérum en premier sur peau propre, attendre 1–2 min d'absorption, puis appliquer la crème pour sceller les actifs.",
  },
  {
    id: "prod_007",
    slug: "coffret-soin-corps-spa",
    name: "Coffret Soin Corps Spa",
    shortDescription: "Gommage + Huile corps pour un rituel spa à la maison.",
    description:
      "Ce coffret duo vous offre l'expérience d'un soin spa chez vous. Commencez par le Gommage Corps Sucre & Vanille pour préparer la peau, puis appliquez l'Huile Corps Baobab & Argan pour une hydratation intense. Un rituel sensoriel complet.",
    price: 18000,
    comparePrice: 19500,
    image: "/images/adobestock-316410994-jidarv-1-scaled.jpeg",
    category: "coffrets",
    categoryLabel: "Coffrets Cadeaux",
    stock: 12,
    badge: "Idée cadeau",
  },
  {
    id: "prod_008",
    slug: "eau-micellaire-nettoyante",
    name: "Eau Micellaire Nettoyante",
    shortDescription: "Nettoyage en douceur sans rinçage pour toutes les peaux.",
    description:
      "Cette eau micellaire triple action nettoie, purifie et démaquille en une seule étape sans avoir à rincer. Sa formule légère respecte le film hydrolipidique naturel de la peau. Convient aux peaux sensibles. Sans alcool, sans parfum.",
    price: 6500,
    image: "/images/soins/hydrafacial/hero.jpg",
    category: "soins-visage",
    categoryLabel: "Soins Visage",
    stock: 50,
    ingredients:
      "Aqua, Micelles (Poloxamer 184), Glycerin, Allantoin, Panthenol, Sodium Benzoate.",
    howToUse:
      "Imbiber un coton et passer délicatement sur le visage, le cou et le décolleté sans frotter. Ne pas rincer.",
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: Product["category"]): Product[] {
  return products.filter((p) => p.category === category);
}

export const CATEGORIES: { value: Product["category"] | "all"; label: string }[] = [
  { value: "all", label: "Tous les produits" },
  { value: "soins-visage", label: "Soins Visage" },
  { value: "soins-corps", label: "Soins Corps" },
  { value: "coffrets", label: "Coffrets Cadeaux" },
  { value: "accessoires", label: "Accessoires" },
];
