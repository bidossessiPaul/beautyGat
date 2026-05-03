import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const products = [
    {
      slug: "serum-anti-age-eclat",
      name: "Sérum Anti-Âge Éclat",
      shortDescription: "Concentré de vitamines C & E pour un teint lumineux et unifié.",
      description: "Notre sérum signature formulé au Bénin avec des actifs naturels locaux. La vitamine C pure à 15 % éclaire le teint, réduit les taches et stimule la production de collagène. La vitamine E protège et nourrit en profondeur. Résultat visible dès la première semaine.",
      price: 18500, comparePrice: 22000,
      image: "/images/appart-beaute-3873926.jpg",
      category: "soins-visage", categoryLabel: "Soins Visage",
      stock: 20, badge: "Best-seller",
      ingredients: "Aqua, Ascorbic Acid 15%, Tocopherol, Niacinamide, Hyaluronic Acid, Aloe Vera Leaf Juice, Glycerin.",
      howToUse: "Appliquer 2–3 gouttes sur une peau propre matin et soir.",
    },
    {
      slug: "creme-hydratante-karite",
      name: "Crème Hydratante au Karité",
      shortDescription: "Beurre de karité pur du Bénin pour une peau douce et nourrie.",
      description: "Formulée à base de beurre de karité 100 % naturel issu de nos régions, cette crème fondante nourrit et protège les peaux sèches à très sèches. Sans paraben, sans silicone.",
      price: 9500,
      image: "/images/Appart-beaute-accueil-philosophie-1-scaled.jpg",
      category: "soins-visage", categoryLabel: "Soins Visage",
      stock: 35,
      ingredients: "Butyrospermum Parkii Butter, Aqua, Glycerin, Cetyl Alcohol, Phenoxyethanol, Parfum.",
      howToUse: "Appliquer une noisette sur le visage propre, matin et/ou soir.",
    },
    {
      slug: "huile-corps-baobab-argan",
      name: "Huile Corps Baobab & Argan",
      shortDescription: "Mélange luxueux d'huiles précieuses pour une peau soyeuse.",
      description: "Cette huile sèche associe l'huile de baobab riche en oméga et l'huile d'argan chargée en vitamine E. Pénètre instantanément, laisse la peau satinée et parfumée.",
      price: 12000,
      image: "/images/dsc00744-1-scaled.jpg",
      category: "soins-corps", categoryLabel: "Soins Corps",
      stock: 25, badge: "Nouveau",
      ingredients: "Adansonia Digitata Seed Oil, Argania Spinosa Kernel Oil, Tocopherol, Parfum.",
      howToUse: "Appliquer en massage circulaire sur peau humide après la douche.",
    },
    {
      slug: "gommage-corps-sucre-vanille",
      name: "Gommage Corps Sucre & Vanille",
      shortDescription: "Exfoliant doux au sucre de canne pour une peau lisse et parfumée.",
      description: "Ce gommage au sucre de canne et à l'extrait de vanille élimine délicatement les cellules mortes tout en nourrissant la peau grâce aux huiles végétales.",
      price: 7500, comparePrice: 9000,
      image: "/images/img_4538.jpg",
      category: "soins-corps", categoryLabel: "Soins Corps",
      stock: 40,
      ingredients: "Sucrose, Helianthus Annuus Seed Oil, Vanilla Planifolia Fruit Extract, Parfum.",
      howToUse: "Appliquer sur peau humide 2 fois par semaine. Rincer abondamment.",
    },
    {
      slug: "masque-purifiant-argile",
      name: "Masque Purifiant Argile Verte",
      shortDescription: "Argile verte & charbon actif pour désobstruer les pores en profondeur.",
      description: "Ce masque à l'argile verte pure débarrasse la peau de ses impuretés, réduit les pores dilatés et matifie le teint. Enrichi de charbon actif et d'aloe vera.",
      price: 8500,
      image: "/images/soins/microneedling/hero.jpg",
      category: "soins-visage", categoryLabel: "Soins Visage",
      stock: 30,
      ingredients: "Kaolin, Aqua, Charcoal Powder, Aloe Barbadensis Leaf Juice, Glycerin.",
      howToUse: "Appliquer une couche fine, laisser poser 10–15 min, rincer. 1–2 fois/semaine.",
    },
    {
      slug: "coffret-rituel-beaute-complet",
      name: "Coffret Rituel Beauté Complet",
      shortDescription: "Le duo sérum + crème hydratante pour une routine soin complète.",
      description: "Offrez ou faites-vous plaisir avec ce coffret qui réunit notre Sérum Anti-Âge Éclat et notre Crème Hydratante au Karité dans un packaging cadeau élégant.",
      price: 25000, comparePrice: 28000,
      image: "/images/appart-beaute-3873920.jpg",
      category: "coffrets", categoryLabel: "Coffrets Cadeaux",
      stock: 15, badge: "Idée cadeau",
    },
    {
      slug: "coffret-soin-corps-spa",
      name: "Coffret Soin Corps Spa",
      shortDescription: "Gommage + Huile corps pour un rituel spa à la maison.",
      description: "Ce coffret duo vous offre l'expérience d'un soin spa chez vous. Gommage Corps Sucre & Vanille + Huile Corps Baobab & Argan.",
      price: 18000, comparePrice: 19500,
      image: "/images/adobestock-316410994-jidarv-1-scaled.jpeg",
      category: "coffrets", categoryLabel: "Coffrets Cadeaux",
      stock: 12, badge: "Idée cadeau",
    },
    {
      slug: "eau-micellaire-nettoyante",
      name: "Eau Micellaire Nettoyante",
      shortDescription: "Nettoyage en douceur sans rinçage pour toutes les peaux.",
      description: "Cette eau micellaire triple action nettoie, purifie et démaquille en une seule étape sans rinçage. Sans alcool, sans parfum. Convient aux peaux sensibles.",
      price: 6500,
      image: "/images/soins/hydrafacial/hero.jpg",
      category: "soins-visage", categoryLabel: "Soins Visage",
      stock: 50,
      ingredients: "Aqua, Micelles (Poloxamer 184), Glycerin, Allantoin, Panthenol.",
      howToUse: "Imbiber un coton et passer sur le visage sans frotter. Ne pas rincer.",
    },
  ];

  for (const product of products) {
    await prisma.product.upsert({
      where: { slug: product.slug },
      update: product,
      create: product,
    });
  }

  console.log(`✓ ${products.length} produits seedés dans MySQL`);
}

main().catch(console.error).finally(() => prisma.$disconnect());
