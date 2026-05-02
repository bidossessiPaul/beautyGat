export interface ServiceBadge {
  icon: string;
  text: string;
}

export interface ServiceBenefit {
  title: string;
  description: string;
}

export interface ServicePricingItem {
  label: string;
  price: string;
  note?: string;
}

export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface ServiceData {
  slug: string;
  title: string;
  metaDescription: string;
  category: "visage" | "corps" | "epilation" | "injections" | "diagnostic"
    | "mains-pieds" | "massages" | "maquillage" | "coiffure" | "barber"
    | "duo-enfants" | "privatisation" | "epilation-cire";
  hero: {
    image?: string;
    imageAlt: string;
    eyebrow: string;
    headline: string;
    subheadline: string;
    imagePosition?: string;
  };
  badges: ServiceBadge[];
  intro: {
    image?: string;
    imageAlt: string;
    headline: string;
    description: string;
    listItems: string[];
  };
  benefits: ServiceBenefit[];
  pricing: {
    headline: string;
    note: string;
    items: ServicePricingItem[];
  };
  faq: ServiceFaq[];
  cta: {
    headline: string;
    description: string;
  };
}

export const services: ServiceData[] = [
  // ─── SOINS VISAGE ────────────────────────────────────────────────────────────
  {
    slug: "hydrafacial-cotonou",
    title: "Hydrafacial à Cotonou — Academy Beauty Gate",
    metaDescription: "Soin Hydrafacial à Cotonou : nettoyage en profondeur, hydratation intense et éclat immédiat. Résultats visibles dès la première séance à Academy Beauty Gate, Cadjehoun.",
    category: "visage",
    hero: {
      image: "/images/soins/hydrafacial/hero.jpg",
      imageAlt: "Soin Hydrafacial à Cotonou",
      eyebrow: "Soin visage haute technologie",
      headline: "Hydrafacial à Cotonou : l'éclat en une séance",
      subheadline: "Nettoie, exfolie, extrait et hydrate en profondeur. Des résultats visibles immédiatement, adaptés à tous les types de peau.",
    },
    badges: [
      { icon: "✦", text: "Résultats visibles dès la 1ère séance" },
      { icon: "✦", text: "Adapté à tous les types de peau" },
      { icon: "✦", text: "Aucune éviction sociale" },
    ],
    intro: {
      image: "/images/soins/hydrafacial/intro.webp",
      imageAlt: "Qu'est-ce que le soin Hydrafacial ?",
      headline: "Qu'est-ce que l'Hydrafacial ?",
      description: "L'Hydrafacial® est un soin visage multi-étapes qui combine nettoyage, exfoliation, extraction des impuretés et infusion de sérums hydratants en une seule séance. Grâce à sa technologie Vortex-Fusion®, il délivre des actifs directement dans les pores pour une peau instantanément purifiée, lissée et lumineuse.",
      listItems: [
        "Nettoyage profond des pores et des points noirs",
        "Exfoliation douce sans irritation",
        "Infusion de sérums antioxydants et hydratants",
        "Stimulation de la production de collagène",
        "Éclat immédiat, peau rebondie et unifiée",
      ],
    },
    benefits: [
      { title: "Hydratation intense", description: "Les sérums pénètrent en profondeur pour une hydratation durable, parfaite sous le climat chaud de Cotonou." },
      { title: "Anti-âge & anti-taches", description: "Atténue les rides, ridules et irrégularités de teint pour un visage plus jeune et unifié." },
      { title: "Séance rapide", description: "Le soin dure entre 30 et 60 minutes, sans douleur ni rougeurs persistantes." },
      { title: "Résultats cumulatifs", description: "Chaque séance améliore la texture et l'éclat. Les résultats s'amplifient au fil des séances." },
    ],
    pricing: {
      headline: "Tarifs Hydrafacial à Cotonou",
      note: "Première consultation offerte. Tarifs valables à Academy Beauty Gate, Cadjehoun.",
      items: [
        { label: "Hydrafacial classique (30 min)", price: "25 000 FCFA" },
        { label: "Hydrafacial premium (60 min)", price: "45 000 FCFA" },
        { label: "Cure de 3 séances", price: "110 000 FCFA", note: "Économisez 25 000 FCFA" },
        { label: "Cure de 6 séances", price: "200 000 FCFA", note: "Économisez 70 000 FCFA" },
      ],
    },
    faq: [
      { question: "Combien de temps dure un soin Hydrafacial ?", answer: "La séance dure entre 30 et 60 minutes selon le protocole choisi. Aucun temps d'éviction n'est nécessaire." },
      { question: "Combien de séances sont nécessaires ?", answer: "Des résultats sont visibles dès la première séance. Pour des effets durables, une cure de 4 à 6 séances espacées de 2 à 4 semaines est recommandée." },
      { question: "L'Hydrafacial est-il douloureux ?", answer: "Non, le soin est totalement indolore. Vous ressentez une légère aspiration sur la peau, très agréable." },
      { question: "Quelles peaux peuvent bénéficier de l'Hydrafacial ?", answer: "Toutes les peaux peuvent en bénéficier : peaux sèches, grasses, mixtes, sensibles, mates ou claires. Le protocole est personnalisé à chaque type de peau." },
    ],
    cta: {
      headline: "Prête pour un éclat immédiat ?",
      description: "Réservez votre séance Hydrafacial à Cotonou dès aujourd'hui. Première consultation offerte.",
    },
  },
  {
    slug: "peeling-visage-cotonou",
    title: "Peeling Visage à Cotonou — Academy Beauty Gate",
    metaDescription: "Peeling visage à Cotonou : exfoliation chimique pour unifier le teint, atténuer les taches et lisser la peau. Protocole sur-mesure à Academy Beauty Gate, Cadjehoun.",
    category: "visage",
    hero: {
      image: "/images/soins/peeling-visage/hero.jpg",
      imageAlt: "Peeling visage à Cotonou",
      eyebrow: "Soin exfoliant professionnel",
      headline: "Peeling visage à Cotonou : retrouvez une peau neuve",
      subheadline: "Exfoliation chimique sur-mesure pour unifier le teint, effacer les taches et retrouver un grain de peau lisse et lumineux.",
    },
    badges: [
      { icon: "✦", text: "Protocole personnalisé" },
      { icon: "✦", text: "Adapté aux peaux mates" },
      { icon: "✦", text: "Taches & irrégularités de teint" },
    ],
    intro: {
      image: "/images/soins/peeling-visage/intro.webp",
      imageAlt: "Indications du peeling visage",
      headline: "Comment fonctionne le peeling visage ?",
      description: "Le peeling est un soin exfoliant qui utilise des acides (AHA, BHA, TCA) pour accélérer le renouvellement cellulaire. En éliminant les cellules mortes, il révèle une peau plus lisse, plus lumineuse et plus uniforme. Notre protocole est adapté à la réalité des peaux africaines et métissées pour éviter tout risque d'hyperpigmentation.",
      listItems: [
        "Élimination des cellules mortes en profondeur",
        "Atténuation des taches brunes et cicatrices d'acné",
        "Unification et éclat du teint",
        "Lissage du grain de peau",
        "Stimulation du collagène naturel",
      ],
    },
    benefits: [
      { title: "Taches & hyperpigmentation", description: "Réduit visiblement les taches solaires, les mélasmas et les cicatrices laissées par l'acné." },
      { title: "Grain de peau lissé", description: "Affine le grain de peau et minimise l'apparence des pores dilatés." },
      { title: "Teint unifié & lumineux", description: "Révèle l'éclat naturel de votre peau en ciblant les zones ternes et irrégulières." },
      { title: "Protocole sécurisé", description: "Nos praticiens sont formés aux protocoles adaptés aux peaux à fort potentiel mélanogénique." },
    ],
    pricing: {
      headline: "Tarifs peeling visage à Cotonou",
      note: "Diagnostic de peau offert avant chaque protocole. Tarifs à Academy Beauty Gate.",
      items: [
        { label: "Peeling superficiel", price: "20 000 FCFA" },
        { label: "Peeling moyen", price: "35 000 FCFA" },
        { label: "Cure anti-taches (4 séances)", price: "110 000 FCFA" },
        { label: "Cure éclat (6 séances)", price: "180 000 FCFA" },
      ],
    },
    faq: [
      { question: "Le peeling est-il adapté aux peaux noires et métissées ?", answer: "Oui, à condition d'utiliser des protocoles adaptés. Nos praticiens sont spécialement formés pour les peaux à fort potentiel mélanogénique afin d'éviter tout risque de dyschromie." },
      { question: "Y a-t-il des suites post-peeling ?", answer: "Un léger rougissement et une légère desquamation sont normaux les premiers jours. Cela dépend du type de peeling choisi." },
      { question: "Combien de séances faut-il ?", answer: "Pour les taches et l'unification du teint, nous recommandons une cure de 4 à 6 séances espacées de 3 à 4 semaines." },
      { question: "Peut-on faire un peeling en saison chaude ?", answer: "Oui, mais une protection solaire stricte est indispensable après chaque séance. Nos praticiens vous guident sur les précautions à respecter." },
    ],
    cta: {
      headline: "Un teint unifié vous attend",
      description: "Prenez rendez-vous à Academy Beauty Gate à Cadjehoun, Cotonou. Diagnostic de peau offert.",
    },
  },
  {
    slug: "photomodulation-led-cotonou",
    title: "Photomodulation LED à Cotonou — Academy Beauty Gate",
    metaDescription: "Photomodulation LED à Cotonou : soin anti-âge, anti-acné et régénérateur par la lumière. Protocole indolore à Academy Beauty Gate, Cadjehoun.",
    category: "visage",
    hero: {
      image: "/images/soins/photomodulation-led/hero.webp",
      imageAlt: "Photomodulation LED à Cotonou",
      eyebrow: "Luminothérapie médicale",
      headline: "Photomodulation LED : la lumière qui régénère votre peau",
      subheadline: "Soin anti-âge, anti-acné et réparateur par la lumière. Aucune douleur, aucune éviction sociale.",
    },
    badges: [
      { icon: "✦", text: "100% indolore & non invasif" },
      { icon: "✦", text: "Anti-âge & anti-acné" },
      { icon: "✦", text: "Résultats progressifs & durables" },
    ],
    intro: {
      image: "/images/soins/photomodulation-led/intro.webp",
      imageAlt: "Régénération cellulaire par photomodulation LED",
      headline: "La lumière au service de votre peau",
      description: "La photomodulation par LED utilise des longueurs d'onde lumineuses spécifiques pour stimuler les cellules cutanées en profondeur. La lumière rouge stimule la production de collagène et l'élastine pour lutter contre le vieillissement. La lumière bleue cible les bactéries responsables de l'acné. La lumière infrarouge favorise la régénération tissulaire.",
      listItems: [
        "Rouge : anti-âge, stimulation du collagène",
        "Bleu : anti-acné, assainissement de la peau",
        "Infrarouge : régénération et cicatrisation",
        "Jaune : apaisement des rougeurs et couperose",
        "Combinaisons personnalisées selon votre peau",
      ],
    },
    benefits: [
      { title: "Anti-âge puissant", description: "Stimule la production de collagène et d'élastine pour réduire rides, ridules et relâchement cutané." },
      { title: "Acné & cicatrices", description: "Réduit l'inflammation, assainit la peau acnéique et atténue les marques post-acné." },
      { title: "Zéro douleur", description: "Le soin est totalement indolore, sans rougeurs ni suites. Idéal pour les peaux sensibles." },
      { title: "Potentialise les autres soins", description: "Associé à l'Hydrafacial ou au microneedling, la LED décuple les résultats de régénération." },
    ],
    pricing: {
      headline: "Tarifs photomodulation LED à Cotonou",
      note: "Protocole personnalisé après bilan de peau. Séances en add-on possibles.",
      items: [
        { label: "Séance LED seule (30 min)", price: "15 000 FCFA" },
        { label: "LED en complément d'un soin", price: "10 000 FCFA" },
        { label: "Cure anti-âge (8 séances)", price: "100 000 FCFA" },
        { label: "Cure anti-acné (10 séances)", price: "120 000 FCFA" },
      ],
    },
    faq: [
      { question: "Combien de séances de LED sont nécessaires ?", answer: "Pour des résultats optimaux, une cure de 8 à 10 séances est recommandée, à raison de 2 par semaine. Des séances d'entretien mensuelles permettent de maintenir les résultats." },
      { question: "La LED est-elle compatible avec d'autres soins ?", answer: "Oui, elle se combine parfaitement avec l'Hydrafacial, le peeling ou le microneedling pour amplifier les résultats." },
      { question: "Y a-t-il des contre-indications ?", answer: "La photomodulation est déconseillée aux femmes enceintes, aux personnes épileptiques et à celles sous traitements photosensibilisants." },
      { question: "Les résultats sont-ils visibles rapidement ?", answer: "Dès les premières séances, la peau gagne en éclat. Les effets anti-âge et anti-acné se confirment après 4 à 6 séances." },
    ],
    cta: {
      headline: "Réveillez l'éclat naturel de votre peau",
      description: "Réservez votre cure de photomodulation LED à Academy Beauty Gate, Cotonou.",
    },
  },
  {
    slug: "baby-face-lasemd-cotonou",
    title: "Baby Face LaseMD à Cotonou — Academy Beauty Gate",
    metaDescription: "Traitement Baby Face LaseMD à Cotonou : rajeunissement cutané au laser fractionné. Peau neuve, teint unifié, éclat retrouvé à Academy Beauty Gate, Cadjehoun.",
    category: "visage",
    hero: {
      image: "/images/soins/baby-face-lasemd/hero.jpg",
      imageAlt: "Traitement Baby Face LaseMD à Cotonou",
      eyebrow: "Laser fractionné nouvelle génération",
      headline: "Baby Face LaseMD : une cure de jouvence au laser",
      subheadline: "Le laser fractionné LaseMD™ cible les imperfections cutanées en profondeur pour une peau lissée, unifiée et visiblement rajeunie.",
    },
    badges: [
      { icon: "✦", text: "Laser fractionné non ablatif" },
      { icon: "✦", text: "Taches, rides & texture" },
      { icon: "✦", text: "Récupération rapide" },
    ],
    intro: {
      image: "/images/soins/baby-face-lasemd/intro.webp",
      imageAlt: "Le traitement Baby Face LaseMD",
      headline: "Le pouvoir du laser fractionné LaseMD™",
      description: "Le LaseMD™ est un laser thulium fractionné qui crée des microcanaux dans la peau pour stimuler sa régénération naturelle. Des sérums actifs sont infusés simultanément dans ces microcanaux pour une efficacité décuplée. Le résultat : une peau lissée, lumineuse et visiblement rajeunie en quelques séances.",
      listItems: [
        "Traitement des taches brunes et du mélasma",
        "Lissage des rides fines et ridules",
        "Amélioration de la texture et du grain de peau",
        "Éclat et uniformisation du teint",
        "Stimulation profonde du collagène",
      ],
    },
    benefits: [
      { title: "Taches & mélasma", description: "Cible et fragmente les dépôts de mélanine pour un teint progressivement unifié." },
      { title: "Anti-âge global", description: "Stimule la néocollagénèse pour des effets liftants et rajeunissants durables." },
      { title: "Texture & grain de peau", description: "Améliore la texture de la peau, réduit les pores dilatés et lisse les irrégularités." },
      { title: "Récupération rapide", description: "Légères rougeurs pendant 1 à 2 jours seulement. Reprise d'activité quasi immédiate." },
    ],
    pricing: {
      headline: "Tarifs Baby Face LaseMD à Cotonou",
      note: "Consultation préalable obligatoire pour évaluer l'indication et définir le protocole.",
      items: [
        { label: "Séance LaseMD visage", price: "60 000 FCFA" },
        { label: "Séance LaseMD visage + cou", price: "80 000 FCFA" },
        { label: "Cure 3 séances visage", price: "160 000 FCFA" },
        { label: "Cure 6 séances visage", price: "300 000 FCFA" },
      ],
    },
    faq: [
      { question: "Combien de séances LaseMD sont nécessaires ?", answer: "Pour des résultats optimaux, une cure de 3 à 6 séances espacées de 4 semaines est recommandée." },
      { question: "Le LaseMD est-il douloureux ?", answer: "Une crème anesthésiante est appliquée avant la séance. Vous ressentez de légères sensations de chaleur, généralement bien tolérées." },
      { question: "Y a-t-il une éviction sociale après LaseMD ?", answer: "Des rougeurs légères sont possibles pendant 24 à 48 heures. L'éviction sociale est très courte comparée aux lasers ablatifs." },
      { question: "Le LaseMD est-il adapté aux peaux mates et noires ?", answer: "Oui, le LaseMD est l'un des lasers les plus sûrs pour les phototypes foncés lorsqu'il est utilisé par un praticien formé à ces indications." },
    ],
    cta: {
      headline: "Rajeunissez votre peau en profondeur",
      description: "Consultez nos experts à Academy Beauty Gate, Cotonou pour un bilan personnalisé.",
    },
  },
  {
    slug: "instant-glow-cotonou",
    title: "Instant Glow à Cotonou — Academy Beauty Gate",
    metaDescription: "Soin Instant Glow à Cotonou : éclat et luminosité immédiate pour votre peau. Cocktail d'actifs boosteurs de lumière à Academy Beauty Gate, Cadjehoun.",
    category: "visage",
    hero: {
      image: "/images/soins/instant-glow/hero.webp",
      imageAlt: "Soin Instant Glow à Cotonou",
      eyebrow: "Soin booster d'éclat",
      headline: "Instant Glow : la luminosité en une séance",
      subheadline: "Un cocktail d'actifs concentrés pour un teint radieux, lumineux et éclatant. Résultat immédiat, idéal avant un événement.",
    },
    badges: [
      { icon: "✦", text: "Éclat & luminosité instantanés" },
      { icon: "✦", text: "Zéro rougeur ni éviction" },
      { icon: "✦", text: "Idéal avant un événement" },
    ],
    intro: {
      image: "/images/soins/instant-glow/intro.webp",
      imageAlt: "Instant Glow : le soin que votre peau attendait",
      headline: "Le soin express pour un teint parfait",
      description: "L'Instant Glow est un soin visage express qui associe exfoliation douce, infusion d'actifs boosteurs de luminosité et protection hydratante. En 45 minutes, votre peau retrouve un éclat naturel et une uniformité de teint remarquable. Idéal pour préparer la peau avant un grand événement ou pour une cure de fond.",
      listItems: [
        "Exfoliation enzymatique et acide douce",
        "Infusion de vitamine C et acide hyaluronique",
        "Boosteur de luminosité et d'uniformité",
        "Finition protectrice et éclatante",
        "Résultat immédiat, durable plusieurs jours",
      ],
    },
    benefits: [
      { title: "Éclat immédiat", description: "Votre peau resplendit dès la fin de la séance. Parfait pour préparer un événement ou un shooting." },
      { title: "Teint unifié & lumineux", description: "Estompe les zones ternes et irrégulières pour un teint homogène et naturellement lumineux." },
      { title: "Hydratation profonde", description: "Grâce à l'acide hyaluronique et aux actifs boosteurs, la peau est rebondie et pulpée." },
      { title: "Zéro contrainte", description: "Aucune rougeur ni éviction. Vous pouvez maquiller votre peau immédiatement après." },
    ],
    pricing: {
      headline: "Tarifs Instant Glow à Cotonou",
      note: "Soin disponible seul ou en association avec d'autres traitements.",
      items: [
        { label: "Séance Instant Glow (45 min)", price: "20 000 FCFA" },
        { label: "Cure 3 séances", price: "55 000 FCFA" },
        { label: "Cure 6 séances", price: "100 000 FCFA" },
        { label: "Instant Glow + LED (1h15)", price: "30 000 FCFA" },
      ],
    },
    faq: [
      { question: "Combien de temps dure le soin Instant Glow ?", answer: "La séance dure 45 minutes. Aucune suite, aucune rougeur. Vous pouvez vaquer à vos occupations immédiatement." },
      { question: "Puis-je me maquiller après l'Instant Glow ?", answer: "Oui, immédiatement. La peau est préparée et hydratée, ce qui permet un maquillage impeccable." },
      { question: "À quelle fréquence faire l'Instant Glow ?", answer: "Il peut être réalisé toutes les 2 à 4 semaines en cure de fond, ou ponctuellement avant un événement." },
      { question: "L'Instant Glow convient-il à toutes les peaux ?", answer: "Oui, le protocole est adapté à chaque type de peau. Les actifs sont sélectionnés selon vos besoins spécifiques." },
    ],
    cta: {
      headline: "Brillez de mille feux",
      description: "Réservez votre soin Instant Glow à Academy Beauty Gate, Cadjehoun, Cotonou.",
    },
  },
  {
    slug: "microneedling-cotonou",
    title: "Microneedling à Cotonou — Academy Beauty Gate",
    metaDescription: "Microneedling à Cotonou : stimulation du collagène, réduction des cicatrices et anti-âge profond. Traitement expert à Academy Beauty Gate, Cadjehoun.",
    category: "visage",
    hero: {
      image: "/images/soins/microneedling/hero.jpg",
      imageAlt: "Microneedling à Cotonou",
      eyebrow: "Mésothérapie mécanique",
      headline: "Microneedling à Cotonou : stimulez votre collagène",
      subheadline: "Des micro-aiguilles créent des microcanaux dans la peau pour stimuler la régénération naturelle et lutter contre le vieillissement cutané.",
    },
    badges: [
      { icon: "✦", text: "Stimulation du collagène" },
      { icon: "✦", text: "Cicatrices & vergetures" },
      { icon: "✦", text: "Résultats progressifs & naturels" },
    ],
    intro: {
      image: "/images/soins/microneedling/intro.png",
      imageAlt: "Qu'est-ce que le microneedling ?",
      headline: "Qu'est-ce que le microneedling ?",
      description: "Le microneedling (ou mésoneedling) utilise un stylet à micro-aiguilles qui crée des microperforations dans la peau. Ces microtraumatismes contrôlés déclenchent la réparation naturelle de la peau : production de collagène et d'élastine, renouvellement cellulaire accéléré, amélioration de la texture. Des sérums actifs sont simultanément infusés pour amplifier les résultats.",
      listItems: [
        "Réduction des cicatrices d'acné et vergetures",
        "Anti-âge profond par stimulation du collagène",
        "Atténuation des taches et irrégularités de teint",
        "Lissage du grain de peau et des pores",
        "Infusion de sérums actifs personnalisés",
      ],
    },
    benefits: [
      { title: "Cicatrices & vergetures", description: "Réduit visiblement les cicatrices d'acné, les vergetures et les marques de la peau." },
      { title: "Anti-âge global", description: "Stimule la production de collagène et d'élastine pour une peau plus ferme et plus jeune." },
      { title: "Taches & teint", description: "Améliore l'uniformité du teint et réduit les taches brunes grâce au renouvellement cellulaire." },
      { title: "Infusion de sérums", description: "Les microcanaux permettent une pénétration optimale des actifs pour des résultats décuplés." },
    ],
    pricing: {
      headline: "Tarifs microneedling à Cotonou",
      note: "Consultation préalable pour évaluer les besoins et définir le protocole adapté.",
      items: [
        { label: "Séance microneedling visage", price: "40 000 FCFA" },
        { label: "Séance visage + cou", price: "55 000 FCFA" },
        { label: "Cure 3 séances visage", price: "105 000 FCFA" },
        { label: "Microneedling + LED", price: "50 000 FCFA" },
      ],
    },
    faq: [
      { question: "Le microneedling est-il douloureux ?", answer: "Une crème anesthésiante est appliquée 30 minutes avant. La séance est bien tolérée, avec de légères sensations de chaleur." },
      { question: "Quelle est la période de récupération ?", answer: "Rougeurs légères pendant 24 à 48 heures. La peau peut être légèrement squameuse les premiers jours." },
      { question: "Combien de séances pour traiter les cicatrices d'acné ?", answer: "En moyenne 3 à 6 séances espacées de 4 semaines pour des résultats significatifs sur les cicatrices." },
      { question: "Le microneedling est-il compatible avec les peaux mates ?", answer: "Oui, le microneedling est adapté à tous les phototypes, y compris les peaux mates et foncées." },
    ],
    cta: {
      headline: "Régénérez votre peau en profondeur",
      description: "Consultez nos experts pour un protocole microneedling personnalisé à Cotonou.",
    },
  },

  // ─── SOINS CORPS ─────────────────────────────────────────────────────────────
  {
    slug: "carbon-laser-peel-cotonou",
    title: "Carbon Laser Peel à Cotonou — Academy Beauty Gate",
    metaDescription: "Carbon Laser Peel à Cotonou : soin purifiant et éclat visage au laser carbone. Réduit les pores, l'acné et les taches à Academy Beauty Gate, Cadjehoun.",
    category: "visage",
    hero: {
      image: "/images/soins/carbon-laser-peel/hero.jpg",
      imageAlt: "Carbon Laser Peel à Cotonou",
      eyebrow: "Hollywood Peel au laser",
      headline: "Carbon Laser Peel : purifiez et éclatez de beauté",
      subheadline: "Le soin star des célébrités : un masque carbone + laser Nd:YAG pour une peau purifiée, lissée et ultra-lumineuse en une séance.",
    },
    badges: [
      { icon: "✦", text: "Pores réduits visiblement" },
      { icon: "✦", text: "Anti-acné & anti-séborrhée" },
      { icon: "✦", text: "Résultat immédiat 0 éviction" },
    ],
    intro: {
      image: "/images/soins/carbon-laser-peel/intro.jpg",
      imageAlt: "Carbon Laser Peel : éclat et pureté du visage",
      headline: "Le soin Hollywood Peel, disponible à Cotonou",
      description: "Le Carbon Laser Peel combine un masque de carbone actif et un laser Nd:YAG Q-Switch. Le carbone pénètre dans les pores et absorbe les impuretés. Le laser détruit ensuite le carbone, éliminant en même temps les débris et sebum accumulés. Résultat : une peau purifiée, des pores réduits et un teint parfaitement lissé.",
      listItems: [
        "Purification profonde des pores",
        "Réduction du sébum et de l'acné",
        "Éclat et lissage immédiat du teint",
        "Atténuation des taches et irrégularités",
        "Stimulation du collagène",
      ],
    },
    benefits: [
      { title: "Pores & sébum", description: "Réduit visiblement les pores dilatés et régule la production de sébum." },
      { title: "Acné & points noirs", description: "Élimine les bactéries responsables de l'acné et débouche les pores en profondeur." },
      { title: "Éclat instantané", description: "Le visage est immédiatement plus lumineux, la peau plus lisse et unifiée." },
      { title: "Sans éviction sociale", description: "Légères rougeurs disparaissant en quelques heures. Idéal avant un événement." },
    ],
    pricing: {
      headline: "Tarifs Carbon Laser Peel à Cotonou",
      note: "Séance de 30 minutes. Résultats visibles dès la première séance.",
      items: [
        { label: "Séance Carbon Laser Peel (visage)", price: "45 000 FCFA" },
        { label: "Séance visage + cou", price: "60 000 FCFA" },
        { label: "Cure 4 séances", price: "160 000 FCFA" },
        { label: "Cure 6 séances", price: "230 000 FCFA" },
      ],
    },
    faq: [
      { question: "Le Carbon Laser Peel est-il douloureux ?", answer: "Non, la séance est très bien tolérée. Vous ressentez une légère chaleur lors du passage du laser." },
      { question: "Combien de séances sont nécessaires ?", answer: "Des résultats sont visibles dès la première séance. Pour des effets durables, une cure de 4 à 6 séances mensuelles est recommandée." },
      { question: "Le Carbon Peel est-il adapté aux peaux foncées ?", answer: "Oui, lorsqu'il est réalisé par un praticien formé aux phototypes foncés, le Carbon Laser Peel est sûr pour les peaux mates et noires." },
      { question: "Peut-on sortir juste après la séance ?", answer: "Oui, c'est l'un des atouts majeurs du soin. De légères rougeurs peuvent persister quelques heures, puis disparaissent." },
    ],
    cta: {
      headline: "Une peau purifiée vous attend",
      description: "Réservez votre séance Carbon Laser Peel à Academy Beauty Gate, Cotonou.",
    },
  },
  {
    slug: "bleaching-cotonou",
    title: "Bleaching Laser à Cotonou — Academy Beauty Gate",
    metaDescription: "Bleaching laser à Cotonou : éclaircissement du duvet et des poils fins par laser. Alternative naturelle à l'épilation à Academy Beauty Gate, Cadjehoun.",
    category: "epilation",
    hero: {
      image: "/images/soins/bleaching/hero.png",
      imageAlt: "Bleaching laser à Cotonou",
      eyebrow: "Éclaircissement du duvet au laser",
      headline: "Bleaching laser : adieu au duvet indésirable",
      subheadline: "Le bleaching laser éclaircit les poils fins et le duvet sans les retirer, pour une peau parfaitement lisse et naturellement belle.",
    },
    badges: [
      { icon: "✦", text: "Alternative à l'épilation" },
      { icon: "✦", text: "Poils fins & duvet" },
      { icon: "✦", text: "Résultat naturel & discret" },
    ],
    intro: {
      image: "/images/soins/bleaching/intro.png",
      imageAlt: "Bleaching : l'alternative idéale pour les poils fins",
      headline: "Le bleaching, c'est quoi exactement ?",
      description: "Le bleaching laser est une technique qui cible la mélanine des poils fins et du duvet pour les éclaircir et les rendre quasi invisibles. Contrairement à l'épilation, les poils restent en place mais perdent leur pigmentation. C'est la solution idéale pour les zones où l'épilation est difficile ou peu adaptée.",
      listItems: [
        "Éclaircissement des poils fins du visage",
        "Duvet des bras et des jambes",
        "Zones sensibles : lèvre supérieure, menton",
        "Résultat naturel sans marques",
        "Séances courtes, résultats progressifs",
      ],
    },
    benefits: [
      { title: "Poils invisibles", description: "Les poils fins deviennent quasi invisibles, sans les retirer ni altérer la texture de la peau." },
      { title: "Alternative douce", description: "Idéal pour les personnes qui ne souhaitent pas épiler les zones à faible densité pilaire." },
      { title: "Toutes zones du visage", description: "Convient particulièrement pour la lèvre supérieure, le menton, les pattes et le duvet des joues." },
      { title: "Séances rapides", description: "Chaque séance dure 15 à 30 minutes selon les zones traitées." },
    ],
    pricing: {
      headline: "Tarifs bleaching laser à Cotonou",
      note: "Bilan capillaire gratuit avant la première séance.",
      items: [
        { label: "Lèvre supérieure", price: "10 000 FCFA" },
        { label: "Visage complet", price: "25 000 FCFA" },
        { label: "Bras (duvet)", price: "30 000 FCFA" },
        { label: "Jambes (duvet)", price: "40 000 FCFA" },
      ],
    },
    faq: [
      { question: "Le bleaching convient-il aux peaux mates ?", answer: "Oui, avec les bons paramètres laser. Nos praticiens adaptent le protocole à votre phototype pour un résultat sécurisé." },
      { question: "Combien de séances faut-il ?", answer: "En général, 3 à 5 séances suffisent pour un résultat satisfaisant. La fréquence est d'une séance par mois." },
      { question: "Le bleaching est-il permanent ?", answer: "Non, l'éclaircissement est durable mais nécessite des séances d'entretien tous les 6 à 12 mois." },
      { question: "Peut-on combiner bleaching et épilation laser ?", answer: "Oui, les deux traitements peuvent être planifiés sur des zones différentes lors de la même consultation." },
    ],
    cta: {
      headline: "Une peau parfaitement lisse et naturelle",
      description: "Consultez nos experts bleaching à Academy Beauty Gate, Cotonou.",
    },
  },
  {
    slug: "peeling-intime-cotonou",
    title: "Peeling Intime à Cotonou — Academy Beauty Gate",
    metaDescription: "Peeling intime à Cotonou : éclaircissement et traitement des zones intimes. Protocole discret et sécurisé à Academy Beauty Gate, Cadjehoun.",
    category: "corps",
    hero: {
      image: "/images/soins/peeling-intime/hero.webp",
      imageAlt: "Peeling intime à Cotonou",
      eyebrow: "Soin zones intimes",
      headline: "Peeling intime : retrouvez confiance en vous",
      subheadline: "Traitement spécialisé pour l'éclaircissement et l'amélioration de l'aspect des zones intimes. Protocole sécurisé et confidentiel.",
    },
    badges: [
      { icon: "✦", text: "Séance discrète & confidentielle" },
      { icon: "✦", text: "Adapté aux peaux mates & noires" },
      { icon: "✦", text: "Résultats progressifs & sûrs" },
    ],
    intro: {
      image: "/images/soins/peeling-intime/intro.webp",
      imageAlt: "Peeling intime : traitement pour votre confort",
      headline: "Un traitement pour votre bien-être intime",
      description: "Le peeling intime est un soin esthétique spécialisé qui utilise des acides de fruit adaptés pour traiter les zones intimes hyperpigmentées. Il réduit les taches, unifie le teint de ces zones sensibles et améliore l'aspect général de la peau. Le protocole est réalisé dans le strict respect de votre intimité et de votre confort.",
      listItems: [
        "Éclaircissement des zones hyperpigmentées",
        "Traitement des taches et inégalités de teint",
        "Amélioration de la texture cutanée",
        "Protocole adapté aux peaux foncées",
        "Cadre discret et professionnel",
      ],
    },
    benefits: [
      { title: "Hyperpigmentation intime", description: "Réduit visiblement les taches et l'hyperpigmentation des zones intimes." },
      { title: "Confort & confiance", description: "Retrouvez confiance et confort dans votre corps grâce à une peau plus uniforme." },
      { title: "Protocole sécurisé", description: "Formules spécialement développées pour les zones sensibles, testées dermatologiquement." },
      { title: "Discrétion totale", description: "Chaque séance se déroule dans le plus grand respect de votre intimité." },
    ],
    pricing: {
      headline: "Tarifs peeling intime à Cotonou",
      note: "Consultation préalable obligatoire. Tarification selon les zones concernées.",
      items: [
        { label: "Zone aisselles", price: "15 000 FCFA" },
        { label: "Zone maillot", price: "25 000 FCFA" },
        { label: "Zone aisselles + maillot", price: "35 000 FCFA" },
        { label: "Cure 4 séances (zone au choix)", price: "80 000 FCFA" },
      ],
    },
    faq: [
      { question: "Le peeling intime est-il douloureux ?", answer: "Non, le soin est peu inconfortable. Une légère sensation de chaleur peut être ressentie pendant l'application." },
      { question: "Combien de séances sont nécessaires ?", answer: "En général, 4 à 6 séances espacées de 3 à 4 semaines permettent d'obtenir des résultats satisfaisants." },
      { question: "Y a-t-il des contre-indications ?", answer: "Le soin est déconseillé chez la femme enceinte ou allaitante, et en cas de lésions cutanées actives sur les zones concernées." },
      { question: "Les résultats sont-ils permanents ?", answer: "Les résultats sont durables mais des séances d'entretien annuelles peuvent être nécessaires selon l'exposition et le phototype." },
    ],
    cta: {
      headline: "Retrouvez confiance et bien-être",
      description: "Prenez rendez-vous en toute confidentialité à Academy Beauty Gate, Cotonou.",
    },
  },
  {
    slug: "cryolipolyse-cotonou",
    title: "Cryolipolyse à Cotonou — Academy Beauty Gate",
    metaDescription: "Cryolipolyse à Cotonou : réduction des graisses localisées par le froid. Ventre, flancs, cuisses et bras traités à Academy Beauty Gate, Cadjehoun.",
    category: "corps",
    hero: {
      image: "/images/soins/cryolipolyse/hero.png",
      imageAlt: "Cryolipolyse à Cotonou",
      eyebrow: "Réduction des graisses par le froid",
      headline: "Cryolipolyse à Cotonou : sculptez votre silhouette",
      subheadline: "La technologie de cryolipolyse élimine définitivement les cellules graisseuses localisées par le froid, sans chirurgie ni éviction sociale.",
    },
    badges: [
      { icon: "✦", text: "Élimination définitive des graisses" },
      { icon: "✦", text: "Sans chirurgie ni cicatrices" },
      { icon: "✦", text: "Résultats en 6 à 12 semaines" },
    ],
    intro: {
      image: "/images/soins/cryolipolyse/intro.jpg",
      imageAlt: "La cryolipolyse : quand le froid redessine le corps",
      headline: "Comment le froid élimine vos graisses ?",
      description: "La cryolipolyse utilise le froid contrôlé (-8°C à -12°C) pour cibler et détruire les cellules graisseuses par apoptose (mort cellulaire naturelle). Les adipocytes détruits sont progressivement éliminés par le système lymphatique en 6 à 12 semaines. Résultat : une réduction visible et durable des graisses localisées.",
      listItems: [
        "Ventre et poignées d'amour",
        "Cuisses intérieures et extérieures",
        "Bras et culotte de cheval",
        "Dos et flancs",
        "Résultats définitifs sur les zones traitées",
      ],
    },
    benefits: [
      { title: "Élimination définitive", description: "Les cellules graisseuses détruites ne reviendront pas, pour des résultats durables." },
      { title: "Non invasif", description: "Aucune chirurgie, aucune anesthésie, aucune injection. Retour à domicile immédiat après la séance." },
      { title: "Résultats visibles", description: "Réduction de 20 à 25% du volume graisseux traité en une seule séance, confirmée en 6 à 12 semaines." },
      { title: "Multi-zones", description: "Plusieurs zones peuvent être traitées en une seule session grâce aux applicateurs doubles." },
    ],
    pricing: {
      headline: "Tarifs cryolipolyse à Cotonou",
      note: "Bilan morphologique gratuit avant toute séance. Résultats garantis ou séance offerte.",
      items: [
        { label: "1 applicateur (1 zone)", price: "80 000 FCFA" },
        { label: "2 applicateurs simultanés", price: "140 000 FCFA" },
        { label: "Pack 3 zones", price: "210 000 FCFA" },
        { label: "Pack ventre complet (3 applicateurs)", price: "200 000 FCFA" },
      ],
    },
    faq: [
      { question: "La cryolipolyse est-elle douloureuse ?", answer: "Vous ressentez une sensation de froid intense au début, qui s'estompe rapidement. La séance est globalement indolore et relaxante." },
      { question: "Quand voit-on les résultats ?", answer: "Les premiers résultats apparaissent après 4 à 6 semaines. Le résultat final est visible après 12 semaines." },
      { question: "La cryolipolyse est-elle un traitement anti-obésité ?", answer: "Non, c'est un traitement de contouring corporel pour les graisses localisées. Il ne remplace pas un régime alimentaire équilibré." },
      { question: "Combien de séances sont nécessaires ?", answer: "En général, 1 à 2 séances par zone sont suffisantes pour des résultats optimaux." },
    ],
    cta: {
      headline: "Remodellez votre silhouette sans chirurgie",
      description: "Consultez nos experts cryolipolyse à Academy Beauty Gate, Cotonou.",
    },
  },
  {
    slug: "bodysculpt-cotonou",
    title: "BodySculpt à Cotonou — Academy Beauty Gate",
    metaDescription: "BodySculpt à Cotonou : tonification musculaire et réduction des graisses par technologie haute intensité. Résultats rapides à Academy Beauty Gate, Cadjehoun.",
    category: "corps",
    hero: {
      image: "/images/soins/bodysculpt/hero.png",
      imageAlt: "BodySculpt à Cotonou",
      eyebrow: "Électrostimulation haute intensité",
      headline: "BodySculpt à Cotonou : un corps tonique sans effort",
      subheadline: "La technologie BodySculpt génère 20 000 contractions musculaires en 30 minutes pour tonifier, muscler et réduire les graisses simultanément.",
    },
    badges: [
      { icon: "✦", text: "20 000 contractions en 30 min" },
      { icon: "✦", text: "Tonification & perte de graisses" },
      { icon: "✦", text: "Équivalent à 5h de sport intense" },
    ],
    intro: {
      image: "/images/soins/bodysculpt/intro.jpg",
      imageAlt: "BodySculpt : tonifiez votre corps sans chirurgie",
      headline: "La technologie qui révolutionne le sport",
      description: "Le BodySculpt utilise des impulsions électromagnétiques de haute intensité (HIFEM) pour provoquer des contractions musculaires supramaximales — impossibles à atteindre lors d'un exercice physique normal. En 30 minutes, il génère l'équivalent de 20 000 contractions musculaires, tout en brûlant les graisses adjacentes.",
      listItems: [
        "Abdos : ventre plat et muscles sculptés",
        "Fessiers : lift et tonification naturelle",
        "Cuisses et jambes",
        "Bras : biceps et triceps",
        "Réduction des graisses localisées simultanée",
      ],
    },
    benefits: [
      { title: "Muscles sculptés", description: "Augmentation de la masse musculaire de 16% en moyenne après une cure complète." },
      { title: "Graisses réduites", description: "Réduction de 19% des graisses localisées dans la zone traitée." },
      { title: "Sans effort ni transpiration", description: "Allongé(e) et détendu(e) pendant la séance, votre corps travaille à votre place." },
      { title: "Résultats rapides", description: "Premiers résultats visibles dès la 2e séance, résultat final après 4 séances." },
    ],
    pricing: {
      headline: "Tarifs BodySculpt à Cotonou",
      note: "Bilan morphologique gratuit. Résultats mesurables garantis.",
      items: [
        { label: "Séance BodySculpt 1 zone", price: "50 000 FCFA" },
        { label: "Séance 2 zones", price: "85 000 FCFA" },
        { label: "Cure 4 séances (1 zone)", price: "180 000 FCFA" },
        { label: "Cure complète 8 séances", price: "340 000 FCFA" },
      ],
    },
    faq: [
      { question: "Le BodySculpt est-il douloureux ?", answer: "Non, les contractions peuvent être intenses mais ne sont pas douloureuses. L'intensité est progressivement augmentée selon votre confort." },
      { question: "Combien de séances pour des résultats visibles ?", answer: "4 séances à raison de 2 à 3 par semaine constituent une cure complète. Les résultats sont visibles et mesurables après la cure." },
      { question: "Peut-on combiner BodySculpt et cryolipolyse ?", answer: "Oui, c'est même recommandé ! La cryolipolyse réduit les graisses tandis que le BodySculpt sculpte et tonifie les muscles." },
      { question: "Y a-t-il des contre-indications ?", answer: "Le BodySculpt est déconseillé aux femmes enceintes, porteurs de pacemaker ou implants métalliques dans la zone traitée." },
    ],
    cta: {
      headline: "Sculptez le corps de vos rêves",
      description: "Consultez nos experts BodySculpt à Academy Beauty Gate, Cotonou.",
    },
  },
  {
    slug: "detatouage-laser-cotonou",
    title: "Détatouage Laser à Cotonou — Academy Beauty Gate",
    metaDescription: "Détatouage laser à Cotonou : effacement des tatouages par laser Q-Switch. Résultats progressifs et sécurisés à Academy Beauty Gate, Cadjehoun.",
    category: "corps",
    hero: {
      image: "/images/soins/detatouage-laser/hero.jpg",
      imageAlt: "Détatouage laser à Cotonou",
      eyebrow: "Effacement laser de tatouage",
      headline: "Détatouage laser à Cotonou : effacez votre passé",
      subheadline: "Le laser Q-Switch fragmente les pigments du tatouage pour les éliminer progressivement, sans cicatrices ni marques durables.",
      imagePosition: "object-right",
    },
    badges: [
      { icon: "✦", text: "Laser Q-Switch dernière génération" },
      { icon: "✦", text: "Toutes couleurs de tatouage" },
      { icon: "✦", text: "Sans cicatrices" },
    ],
    intro: {
      image: "/images/soins/detatouage-laser/intro.jpg",
      imageAlt: "Détatouage laser : enlever un tatouage sans cicatrices",
      headline: "Comment fonctionne le détatouage laser ?",
      description: "Le laser Q-Switch émet des impulsions lumineuses ultra-courtes qui fragmentent les particules d'encre du tatouage en minuscules fragments. Ces fragments sont ensuite progressivement éliminés par le système immunitaire. Le traitement est progressif : l'encre s'efface séance après séance jusqu'à disparition complète.",
      listItems: [
        "Efficace sur toutes les couleurs d'encre",
        "Traitement sécurisé des peaux mates et noires",
        "Aucune cicatrice lorsque le protocole est respecté",
        "Effacement progressif et naturel",
        "Résultats visibles dès la 2e ou 3e séance",
      ],
    },
    benefits: [
      { title: "Toutes couleurs", description: "Le laser Q-Switch traite les encres noires, bleues, rouges et multicolores." },
      { title: "Sans cicatrices", description: "Lorsque les soins post-séance sont respectés, aucune cicatrice ne persiste." },
      { title: "Toutes tailles", description: "Des petits tatouages aux grandes pièces, chaque traitement est adapté à votre cas." },
      { title: "Progressif & sûr", description: "L'effacement se fait progressivement pour préserver l'intégrité de votre peau." },
    ],
    pricing: {
      headline: "Tarifs détatouage laser à Cotonou",
      note: "Estimation du nombre de séances lors de la consultation initiale gratuite.",
      items: [
        { label: "Petit tatouage (< 5 cm)", price: "30 000 FCFA / séance" },
        { label: "Moyen (5 à 15 cm)", price: "55 000 FCFA / séance" },
        { label: "Grand tatouage (> 15 cm)", price: "Devis personnalisé" },
        { label: "Maquillage permanent", price: "25 000 FCFA / séance" },
      ],
    },
    faq: [
      { question: "Combien de séances pour effacer un tatouage ?", answer: "Entre 6 et 15 séances selon la taille, la couleur et l'ancienneté du tatouage. Les séances sont espacées de 6 à 8 semaines." },
      { question: "Le détatouage laser est-il douloureux ?", answer: "La sensation est comparable à des claquements de caoutchouc. Une crème anesthésiante peut être appliquée avant la séance." },
      { question: "Peut-on détatouer sur une peau noire ?", answer: "Oui, avec un laser adapté et un praticien formé. Nous utilisons les paramètres spécifiques aux phototypes foncés." },
      { question: "Peut-on couvrir le tatouage après un détatouage partiel ?", answer: "Oui, certains clients font appel au détatouage pour affadir suffisamment le tatouage et permettre un cover-up de meilleure qualité." },
    ],
    cta: {
      headline: "Effacez ce tatouage définitivement",
      description: "Consultez nos experts en détatouage laser à Academy Beauty Gate, Cotonou.",
    },
  },

  // ─── INJECTIONS ──────────────────────────────────────────────────────────────
  {
    slug: "injection-acide-hyaluronique-cotonou",
    title: "Injections Acide Hyaluronique à Cotonou — Academy Beauty Gate",
    metaDescription: "Injections d'acide hyaluronique à Cotonou : lèvres, cernes, pommettes, rides. Résultats naturels et durables à Academy Beauty Gate, Cadjehoun.",
    category: "injections",
    hero: {
      image: "/images/soins/injection-hyaluronique/hero.jpg",
      imageAlt: "Injection acide hyaluronique à Cotonou",
      eyebrow: "Esthétique avancée",
      headline: "Acide hyaluronique à Cotonou : un visage repulpé et rajeuni",
      subheadline: "Comblements des rides, volume des lèvres, correction des cernes et remodelage du visage par injection d'acide hyaluronique.",
    },
    badges: [
      { icon: "✦", text: "Résultats naturels immédiats" },
      { icon: "✦", text: "Réversible et sécurisé" },
      { icon: "✦", text: "Durée 12 à 18 mois" },
    ],
    intro: {
      image: "/images/soins/injection-hyaluronique/intro.jpg",
      imageAlt: "Injections d'acide hyaluronique : qu'est-ce que c'est ?",
      headline: "L'acide hyaluronique, votre allié anti-âge",
      description: "L'acide hyaluronique est une molécule naturellement présente dans le corps qui retient l'eau et donne du volume à la peau. Les injections permettent de restaurer les volumes perdus avec l'âge, combler les rides profondes, redessiner les contours du visage et hydrater les tissus en profondeur. Les résultats sont immédiats et naturels.",
      listItems: [
        "Correction des rides nasogéniennes et plis d'amertume",
        "Volumisation des lèvres et des pommettes",
        "Traitement des cernes creux",
        "Remodelage du menton et de la mâchoire",
        "Hydratation profonde (skinbooster)",
      ],
    },
    benefits: [
      { title: "Résultats immédiats", description: "Les résultats sont visibles immédiatement après l'injection et s'affinent dans les jours suivants." },
      { title: "Naturels & modulables", description: "Le traitement est personnalisé pour un résultat harmonieux et naturel, adapté à votre morphologie." },
      { title: "Réversible", description: "L'acide hyaluronique peut être dissout par une enzyme (hyaluronidase) si nécessaire." },
      { title: "Durée 12 à 18 mois", description: "Les résultats durent en moyenne 12 à 18 mois selon la zone traitée et votre métabolisme." },
    ],
    pricing: {
      headline: "Tarifs injections hyaluronique à Cotonou",
      note: "Consultation médicale préalable obligatoire. Tarifs selon la zone et la quantité de produit.",
      items: [
        { label: "Lèvres (0,5 ml)", price: "80 000 FCFA" },
        { label: "Cernes / Pommettes (1 ml)", price: "120 000 FCFA" },
        { label: "Rides (1 ml)", price: "100 000 FCFA" },
        { label: "Skinbooster visage", price: "150 000 FCFA" },
      ],
    },
    faq: [
      { question: "Les injections d'acide hyaluronique sont-elles douloureuses ?", answer: "Une crème anesthésiante est appliquée avant et les seringues contiennent souvent de la lidocaïne. La douleur est minime." },
      { question: "Y a-t-il des suites après l'injection ?", answer: "De légères rougeurs, gonflements ou ecchymoses peuvent apparaître pendant 2 à 5 jours. Ils disparaissent naturellement." },
      { question: "À quelle fréquence faut-il refaire les injections ?", answer: "Selon la zone et le produit utilisé, les retouches sont nécessaires tous les 12 à 18 mois." },
      { question: "L'acide hyaluronique est-il dangereux ?", answer: "Non, c'est une substance biocompatible et biodégradable. Le traitement est sécurisé lorsqu'il est réalisé par un praticien qualifié." },
    ],
    cta: {
      headline: "Un visage harmonieux et naturel",
      description: "Prenez rendez-vous pour une consultation médicale à Academy Beauty Gate, Cotonou.",
    },
  },
  {
    slug: "injection-botox-cotonou",
    title: "Injection Toxine Botulique à Cotonou — Academy Beauty Gate",
    metaDescription: "Injections de toxine botulique (Botox) à Cotonou : traitement des rides d'expression, front, rides du lion et pattes-d'oie. Academy Beauty Gate, Cadjehoun.",
    category: "injections",
    hero: {
      image: "/images/soins/injection-botulique/hero.jpg",
      imageAlt: "Injection toxine botulique à Cotonou",
      eyebrow: "Esthétique avancée",
      headline: "Toxine botulique à Cotonou : effacez les rides d'expression",
      subheadline: "La toxine botulique lisse les rides d'expression du front, de la glabelle et du contour des yeux pour un visage détendu et naturellement jeune.",
    },
    badges: [
      { icon: "✦", text: "Rides d'expression effacées" },
      { icon: "✦", text: "Résultat naturel & frais" },
      { icon: "✦", text: "Durée 4 à 6 mois" },
    ],
    intro: {
      image: "/images/soins/injection-botulique/intro.jpg",
      imageAlt: "Injection de toxine botulique : traitement des rides",
      headline: "La toxine botulique, l'anti-âge n°1 au monde",
      description: "La toxine botulique (Botox®) est la solution médicale la plus utilisée au monde pour traiter les rides d'expression. En bloquant temporairement les muscles responsables des rides, elle lisse le visage sans altérer les expressions naturelles. Résultat : un visage détendu, rajeuni et naturellement expressif.",
      listItems: [
        "Rides du front (horizontales)",
        "Ride du lion (entre les sourcils)",
        "Pattes-d'oie (contour des yeux)",
        "Lift des sourcils",
        "Sudation excessive (hyperhidrose)",
      ],
    },
    benefits: [
      { title: "Résultat naturel", description: "Un praticien expert dosera précisément la toxine pour un résultat naturel qui préserve vos expressions." },
      { title: "Séance express", description: "La séance dure 20 à 30 minutes. Les résultats apparaissent en 3 à 7 jours." },
      { title: "Préventif & curatif", description: "La toxine botulique prévient l'apparition de nouvelles rides en ralentissant les contractions musculaires répétées." },
      { title: "Sans cicatrices", description: "Des micro-injections à l'aiguille fine, sans chirurgie ni cicatrices." },
    ],
    pricing: {
      headline: "Tarifs toxine botulique à Cotonou",
      note: "Consultation médicale préalable obligatoire. Tarifs selon les zones traitées.",
      items: [
        { label: "1 zone (front ou lion ou pattes-d'oie)", price: "80 000 FCFA" },
        { label: "2 zones", price: "140 000 FCFA" },
        { label: "3 zones (visage complet)", price: "190 000 FCFA" },
        { label: "Hyperhidrose aisselles", price: "200 000 FCFA" },
      ],
    },
    faq: [
      { question: "La toxine botulique est-elle sans danger ?", answer: "Oui, utilisée depuis plus de 30 ans en esthétique avancée à des doses faibles et précises, la toxine botulique est sécurisée." },
      { question: "Quand voient-on les résultats ?", answer: "Les effets apparaissent entre 3 et 7 jours après l'injection et atteignent leur maximum vers le 15e jour." },
      { question: "Combien de temps durent les effets ?", answer: "En moyenne 4 à 6 mois. Des séances régulières peuvent espacer les retouches dans le temps." },
      { question: "Peut-on combiner toxine et acide hyaluronique ?", answer: "Oui, les deux traitements sont complémentaires et peuvent être réalisés lors de la même consultation." },
    ],
    cta: {
      headline: "Un visage détendu et naturellement jeune",
      description: "Consultez nos médecins esthétiques à Academy Beauty Gate, Cotonou.",
    },
  },

  // ─── DIAGNOSTIC ──────────────────────────────────────────────────────────────
  {
    slug: "diagnostic-de-peau-cotonou",
    title: "Diagnostic de Peau à Cotonou — Academy Beauty Gate",
    metaDescription: "Diagnostic de peau à Cotonou : analyse précise de votre peau pour un soin personnalisé. Bilan complet offert à Academy Beauty Gate, Cadjehoun.",
    category: "diagnostic",
    hero: {
      image: "/images/soins/diagnostic-peau/hero.jpg",
      imageAlt: "Diagnostic de peau à Cotonou",
      eyebrow: "Bilan de peau personnalisé",
      headline: "Diagnostic de peau à Cotonou : le point de départ de tout soin",
      subheadline: "Avant tout traitement, notre analyse complète identifie votre type de peau, vos besoins et définit le protocole le mieux adapté.",
    },
    badges: [
      { icon: "✦", text: "Diagnostic offert" },
      { icon: "✦", text: "Analyse technologique précise" },
      { icon: "✦", text: "Protocole 100% personnalisé" },
    ],
    intro: {
      image: "/images/soins/diagnostic-peau/intro.jpg",
      imageAlt: "Le diagnostic de peau : la base de tout soin esthétique",
      headline: "Pourquoi faire un diagnostic de peau ?",
      description: "Le diagnostic de peau est l'étape fondamentale avant tout soin esthétique. Sans analyse préalable, un traitement peut être inadapté voire contre-productif. Chez Academy Beauty Gate, notre équipe utilise des outils d'analyse avancés pour évaluer précisément votre type de peau, identifier les problématiques à traiter et vous recommander le protocole optimal.",
      listItems: [
        "Analyse du type de peau (sèche, grasse, mixte, sensible)",
        "Évaluation de l'hydratation et du sébum",
        "Identification des imperfections : taches, rides, pores",
        "Analyse adaptée aux peaux africaines et métissées",
        "Rapport écrit avec recommandations personnalisées",
      ],
    },
    benefits: [
      { title: "Soins adaptés", description: "Chaque soin est sélectionné en fonction de votre peau réelle, pas de son apparence supposée." },
      { title: "Prévention", description: "Identifier les signes précoces de vieillissement ou d'hyperpigmentation pour les traiter à temps." },
      { title: "Économies", description: "Évitez les soins inadaptés en ciblant exactement ce dont votre peau a besoin." },
      { title: "Suivi dans le temps", description: "Des diagnostics réguliers permettent de mesurer l'évolution et d'ajuster les protocoles." },
    ],
    pricing: {
      headline: "Tarifs diagnostic de peau à Cotonou",
      note: "Le diagnostic est offert avant tout soin ou cure à Academy Beauty Gate.",
      items: [
        { label: "Diagnostic complet (offert avec soin)", price: "Offert" },
        { label: "Diagnostic seul (30 min)", price: "10 000 FCFA" },
        { label: "Diagnostic + rapport écrit", price: "15 000 FCFA" },
        { label: "Suivi mensuel (4 diagnostics)", price: "40 000 FCFA" },
      ],
    },
    faq: [
      { question: "Combien de temps dure le diagnostic de peau ?", answer: "Le diagnostic complet dure environ 30 minutes. Vous repartez avec une analyse détaillée et des recommandations personnalisées." },
      { question: "Le diagnostic est-il vraiment offert ?", answer: "Oui, tout diagnostic préalable à un soin ou une cure à Academy Beauty Gate est offert sans condition." },
      { question: "À quelle fréquence faire un diagnostic ?", answer: "Un diagnostic de suivi tous les 3 à 6 mois permet de mesurer les progrès et d'adapter les protocoles en cours." },
      { question: "Le diagnostic est-il adapté aux peaux noires et métissées ?", answer: "Absolument, nos praticiens sont spécialement formés à l'analyse des peaux à fort potentiel mélanogénique." },
    ],
    cta: {
      headline: "Commencez par connaître votre peau",
      description: "Diagnostic de peau offert à Academy Beauty Gate, Cadjehoun, Cotonou.",
    },
  },

  // ─── ÉPILATION HOMME ─────────────────────────────────────────────────────────
  {
    slug: "epilation-laser-homme-cotonou",
    title: "Épilation Laser Homme à Cotonou — Academy Beauty Gate",
    metaDescription: "Épilation laser pour homme à Cotonou : dos, torse, nuque, barbe. Résultats durables et adaptés à tous phototypes à Academy Beauty Gate, Cadjehoun.",
    category: "epilation",
    hero: {
      image: "/images/soins/epilation-laser-homme/hero.jpg",
      imageAlt: "Épilation laser homme à Cotonou",
      eyebrow: "Épilation laser homme",
      headline: "Épilation laser homme à Cotonou : soyez net et confiant",
      subheadline: "Épilation laser définitive adaptée à la morphologie masculine. Dos, torse, nuque, barbe et toutes les zones du corps.",
    },
    badges: [
      { icon: "✦", text: "Adapté à la peau masculine" },
      { icon: "✦", text: "Toutes zones du corps" },
      { icon: "✦", text: "Résultats durables & définitifs" },
    ],
    intro: {
      image: "/images/soins/epilation-laser-homme/intro.jpg",
      imageAlt: "Épilation laser pour homme : fonctionnement",
      headline: "L'épilation laser, aussi pour les hommes",
      description: "L'épilation laser n'est plus réservée aux femmes. De plus en plus d'hommes optent pour l'épilation laser définitive pour se débarrasser du poil indésirable sur le dos, le torse, la nuque ou pour gérer la barbe. Le laser cible la mélanine du poil pour détruire le follicule pileux, sans affecter la peau environnante.",
      listItems: [
        "Dos et épaules",
        "Torse et ventre",
        "Nuque et cou",
        "Barbe et pattes",
        "Aisselles et membres",
      ],
    },
    benefits: [
      { title: "Efficace sur poils foncés", description: "Le laser est particulièrement efficace sur les poils foncés et denses typiques des hommes." },
      { title: "Confort au quotidien", description: "Fini les irritations du rasage et les poils incarnés douloureux." },
      { title: "Toutes zones", description: "Dos, torse, nuque, barbe, aisselles : toutes les zones masculines sont traitables." },
      { title: "Résultats durables", description: "Après la cure complète, 90% des poils sont définitivement éliminés." },
    ],
    pricing: {
      headline: "Tarifs épilation laser homme à Cotonou",
      note: "Première séance test offerte. Forfaits séances disponibles.",
      items: [
        { label: "Dos complet", price: "50 000 FCFA / séance" },
        { label: "Torse", price: "40 000 FCFA / séance" },
        { label: "Nuque / Cou", price: "20 000 FCFA / séance" },
        { label: "Forfait dos + torse (6 séances)", price: "480 000 FCFA" },
      ],
    },
    faq: [
      { question: "L'épilation laser homme est-elle douloureuse ?", answer: "Une légère sensation de chaleur est ressentie lors du passage du laser. Les machines modernes avec système de refroidissement intégré rendent la séance très confortable." },
      { question: "Combien de séances pour le dos d'un homme ?", answer: "En moyenne 6 à 8 séances sont nécessaires pour un dos d'homme, espacées de 6 à 8 semaines." },
      { question: "Le laser fonctionne-t-il sur tous les phototypes masculins ?", answer: "Oui, nous utilisons des lasers adaptés à tous les phototypes, y compris les peaux mates et noires." },
      { question: "Peut-on épiler la barbe entière au laser ?", answer: "Oui, mais en gardant les zones souhaitées. Il faut définir précisément les contours lors de la consultation." },
    ],
    cta: {
      headline: "Un corps net et soigné vous attend",
      description: "Réservez votre séance d'épilation laser homme à Academy Beauty Gate, Cotonou.",
    },
  },
  {
    slug: "epilation-electrolyse-homme-cotonou",
    title: "Épilation par Électrolyse Homme à Cotonou — Academy Beauty Gate",
    metaDescription: "Épilation par électrolyse pour homme à Cotonou : la seule méthode 100% définitive pour tous types de poils. Academy Beauty Gate, Cadjehoun.",
    category: "epilation",
    hero: {
      image: "/images/soins/epilation-electrolyse-homme/hero.jpg",
      imageAlt: "Épilation électrolyse homme à Cotonou",
      eyebrow: "Épilation 100% définitive",
      headline: "Électrolyse homme à Cotonou : définitif sur tous les poils",
      subheadline: "La seule technique d'épilation 100% définitive pour tous types de poils et toutes couleurs, idéale pour les poils blancs ou roux.",
    },
    badges: [
      { icon: "✦", text: "100% définitif, poil par poil" },
      { icon: "✦", text: "Tous types de poils" },
      { icon: "✦", text: "Poils blancs, roux & clairs" },
    ],
    intro: {
      image: "/images/soins/epilation-electrolyse-homme/intro.webp",
      imageAlt: "Épilation électrolyse pour homme",
      headline: "L'électrolyse, seule solution définitive pour tous les poils",
      description: "Contrairement au laser qui nécessite de la mélanine pour fonctionner, l'électrolyse agit par courant électrique directement dans le follicule pileux. Cette technique permet de traiter tous les types de poils — blancs, roux, fins, durs — avec une efficacité définitive garantie. Elle est particulièrement recommandée pour les hommes souhaitant traiter la barbe ingrate, les poils incarnés chroniques ou les zones de la nuque.",
      listItems: [
        "Poils blancs, roux et gris",
        "Nuque et contour de barbe",
        "Poils incarnés chroniques",
        "Oreilles et nez",
        "Efficace sur toutes les couleurs de peau",
      ],
    },
    benefits: [
      { title: "100% définitif", description: "L'électrolyse est reconnue comme la seule méthode d'épilation véritablement permanente." },
      { title: "Tous types de poils", description: "Fonctionne sur tous les poils, même ceux qui résistent au laser (blancs, roux, fins)." },
      { title: "Précision millimétrique", description: "Traitement poil par poil, idéal pour retravailler les contours de la barbe avec précision." },
      { title: "Poils incarnés", description: "L'électrolyse traite définitivement les poils incarnés récidivants, fréquents chez les hommes à la peau foncée." },
    ],
    pricing: {
      headline: "Tarifs électrolyse homme à Cotonou",
      note: "Première consultation offerte. Tarification à la durée de séance.",
      items: [
        { label: "Séance 15 minutes", price: "10 000 FCFA" },
        { label: "Séance 30 minutes", price: "18 000 FCFA" },
        { label: "Séance 60 minutes", price: "32 000 FCFA" },
        { label: "Forfait 10 séances x 30 min", price: "160 000 FCFA" },
      ],
    },
    faq: [
      { question: "Pourquoi choisir l'électrolyse plutôt que le laser pour homme ?", answer: "L'électrolyse est préférée lorsque les poils sont blancs, roux ou trop fins pour être captés par le laser, ou pour des zones de précision comme le contour de barbe." },
      { question: "Combien de temps prend le traitement ?", answer: "Le temps varie selon la zone et la densité. Une nuque peut nécessiter 20 à 40 séances de 15 à 30 minutes." },
      { question: "L'électrolyse est-elle douloureuse ?", answer: "Une légère piqûre est ressentie à chaque poil. La douleur est bien tolérée et s'atténue au fil des séances." },
      { question: "Peut-on combiner électrolyse et laser ?", answer: "Oui, une stratégie combinée est souvent recommandée : le laser sur les poils foncés, l'électrolyse sur les poils résistants." },
    ],
    cta: {
      headline: "La solution définitive pour tous vos poils",
      description: "Consultation offerte à Academy Beauty Gate, Cadjehoun, Cotonou.",
    },
  },

  // ─── SOINS HOMME ─────────────────────────────────────────────────────────────
  {
    slug: "hydrafacial-homme-cotonou",
    title: "Hydrafacial Homme à Cotonou — Academy Beauty Gate",
    metaDescription: "Hydrafacial pour homme à Cotonou : nettoyage profond, hydratation et éclat du visage masculin. Soin adapté à la peau de l'homme à Academy Beauty Gate.",
    category: "visage",
    hero: {
      image: "/images/soins/hydrafacial-homme/hero.jpg",
      imageAlt: "Hydrafacial homme à Cotonou",
      eyebrow: "Soin visage homme",
      headline: "Hydrafacial homme à Cotonou : prenez soin de votre peau",
      subheadline: "Le soin Hydrafacial adapté à la peau masculine : nettoyage en profondeur, hydratation intense et teint éclatant en une séance.",
    },
    badges: [
      { icon: "✦", text: "Adapté à la peau masculine" },
      { icon: "✦", text: "Résultats en 30 à 60 minutes" },
      { icon: "✦", text: "Peau nette & reposée" },
    ],
    intro: {
      image: "/images/soins/hydrafacial-homme/intro.jpg",
      imageAlt: "Hydrafacial homme : soin visage adapté",
      headline: "Le soin visage indispensable pour l'homme moderne",
      description: "La peau masculine est différente : plus épaisse, plus séborrhéique, éprouvée par le rasage quotidien. L'Hydrafacial® pour homme est un protocole spécifiquement adapté qui nettoie en profondeur les pores dilatés, élimine les points noirs, hydrate et protège la peau. Résultat : une peau nette, fraîche et visiblement améliorée.",
      listItems: [
        "Nettoyage approfondi des pores masculins",
        "Élimination des points noirs et impuretés",
        "Traitement des zones irritées par le rasage",
        "Hydratation sans effet gras",
        "Teint unifié et fraîcheur retrouvée",
      ],
    },
    benefits: [
      { title: "Peau nette", description: "Élimine les impuretés, points noirs et excès de sébum pour une peau saine." },
      { title: "Anti-irritations", description: "Apaise les irritations liées au rasage et réduit les poils incarnés." },
      { title: "Hydratation masculine", description: "Hydratation longue durée sans effet gras ni film collant." },
      { title: "Rapide & efficace", description: "30 à 60 minutes en cabine, aucune éviction. Retour direct au travail ou à la vie sociale." },
    ],
    pricing: {
      headline: "Tarifs Hydrafacial homme à Cotonou",
      note: "Séances adaptées aux besoins spécifiques de la peau masculine.",
      items: [
        { label: "Hydrafacial homme (30 min)", price: "25 000 FCFA" },
        { label: "Hydrafacial homme premium (60 min)", price: "45 000 FCFA" },
        { label: "Cure 4 séances", price: "90 000 FCFA" },
        { label: "Cure 6 séances", price: "125 000 FCFA" },
      ],
    },
    faq: [
      { question: "L'Hydrafacial est-il vraiment adapté aux hommes ?", answer: "Oui, le protocole est spécifiquement adapté : pression plus forte, actifs anti-séborrhéiques, traitement des zones de rasage." },
      { question: "À quelle fréquence faire l'Hydrafacial homme ?", answer: "Une fois par mois en cure de fond, ou toutes les 2 semaines pour traiter l'acné et le sébum excessif." },
      { question: "Peut-on se raser avant ou après l'Hydrafacial ?", answer: "Évitez de vous raser le jour de la séance. Attendez 24 heures après pour une peau traitée sans irritation." },
      { question: "L'Hydrafacial traite-t-il les poils incarnés ?", answer: "Il contribue à réduire les poils incarnés en libérant les pores et en exfoliant la peau, mais pour un traitement définitif, l'électrolyse est recommandée." },
    ],
    cta: {
      headline: "Votre peau mérite les meilleurs soins",
      description: "Réservez votre Hydrafacial homme à Academy Beauty Gate, Cotonou.",
    },
  },
  {
    slug: "peeling-visage-homme-cotonou",
    title: "Peeling Visage Homme à Cotonou — Academy Beauty Gate",
    metaDescription: "Peeling visage pour homme à Cotonou : exfoliation, éclat et traitement de l'acné masculine. Protocole adapté à la peau de l'homme à Academy Beauty Gate.",
    category: "visage",
    hero: {
      image: "/images/soins/peeling-homme/hero.jpg",
      imageAlt: "Peeling visage homme à Cotonou",
      eyebrow: "Exfoliation chimique homme",
      headline: "Peeling homme à Cotonou : une peau nette et lumineuse",
      subheadline: "Exfoliation chimique adaptée à la peau masculine épaisse et séborrhéique. Traitement de l'acné, des taches et du teint terne.",
    },
    badges: [
      { icon: "✦", text: "Adapté peau masculine épaisse" },
      { icon: "✦", text: "Acné & cicatrices" },
      { icon: "✦", text: "Teint unifié & mat" },
    ],
    intro: {
      image: "/images/soins/peeling-homme/intro.jpg",
      imageAlt: "Peeling visage pour homme",
      headline: "Pourquoi le peeling est essentiel pour l'homme ?",
      description: "La peau de l'homme est 20% plus épaisse que celle de la femme et produit davantage de sébum. Elle accumule plus rapidement les cellules mortes, les impuretés et développe plus facilement l'acné. Le peeling chimique adapté à la peau masculine offre une exfoliation profonde qui libère les pores, traite l'acné et révèle une peau fraîche et unifiée.",
      listItems: [
        "Exfoliation profonde adaptée à l'épaisseur masculine",
        "Traitement des cicatrices d'acné",
        "Réduction du sébum et des pores dilatés",
        "Éclat et unification du teint",
        "Atténuation des taches post-rasage",
      ],
    },
    benefits: [
      { title: "Acné masculine", description: "Réduit les lésions acnéiques actives et les cicatrices laissées par l'acné." },
      { title: "Pores & sébum", description: "Minimise l'aspect des pores dilatés et réduit l'excès de sébum." },
      { title: "Teint revitalisé", description: "Élimine la couche de cellules mortes pour un teint frais et lumineux." },
      { title: "Résultats durables", description: "Une cure régulière maintient une peau nette et homogène sur la durée." },
    ],
    pricing: {
      headline: "Tarifs peeling homme à Cotonou",
      note: "Diagnostic de peau offert. Protocole adapté à vos besoins spécifiques.",
      items: [
        { label: "Peeling superficiel homme", price: "22 000 FCFA" },
        { label: "Peeling moyen homme", price: "38 000 FCFA" },
        { label: "Cure anti-acné 4 séances", price: "120 000 FCFA" },
        { label: "Cure éclat 6 séances", price: "190 000 FCFA" },
      ],
    },
    faq: [
      { question: "Le peeling est-il adapté à toutes les peaux masculines ?", answer: "Oui, le protocole est personnalisé selon votre phototype et vos problématiques (acné, taches, teint terne)." },
      { question: "Peut-on se raser après un peeling ?", answer: "Attendez au moins 3 à 5 jours après un peeling avant de vous raser pour éviter les irritations." },
      { question: "Combien de séances pour traiter l'acné masculine ?", answer: "Une cure de 4 à 6 séances espacées de 3 à 4 semaines est généralement recommandée." },
      { question: "Y a-t-il une éviction sociale après le peeling homme ?", answer: "Légère desquamation pendant 2 à 4 jours. La reprise d'activité est possible dès le lendemain." },
    ],
    cta: {
      headline: "Une peau masculine nette et soignée",
      description: "Prenez rendez-vous pour votre peeling homme à Academy Beauty Gate, Cotonou.",
    },
  },
  {
    slug: "cryolipolyse-homme-cotonou",
    title: "Cryolipolyse Homme à Cotonou — Academy Beauty Gate",
    metaDescription: "Cryolipolyse pour homme à Cotonou : réduction des graisses abdominales, flancs et poignées d'amour. Sans chirurgie à Academy Beauty Gate, Cadjehoun.",
    category: "corps",
    hero: {
      image: "/images/soins/cryolipolyse-homme/hero.png",
      imageAlt: "Cryolipolyse homme à Cotonou",
      eyebrow: "Remodelage corporel homme",
      headline: "Cryolipolyse homme à Cotonou : éliminez les graisses rebelles",
      subheadline: "Le traitement par le froid élimine définitivement les graisses localisées qui résistent au sport et au régime.",
    },
    badges: [
      { icon: "✦", text: "Ventre & flancs ciblés" },
      { icon: "✦", text: "Élimination définitive" },
      { icon: "✦", text: "Zéro chirurgie, zéro arrêt" },
    ],
    intro: {
      image: "/images/soins/cryolipolyse-homme/intro.webp",
      imageAlt: "Cryolipolyse homme : zones masculines traitées",
      headline: "Les zones masculines idéales pour la cryolipolyse",
      description: "Chez l'homme, les graisses ont tendance à se concentrer sur le ventre, les flancs et les poignées d'amour. Ces zones, souvent résistantes au sport et à l'alimentation, répondent particulièrement bien à la cryolipolyse. Le froid contrôlé détruit les cellules graisseuses, qui sont ensuite éliminées naturellement par le corps en 6 à 12 semaines.",
      listItems: [
        "Ventre et abdomen",
        "Flancs et poignées d'amour",
        "Dos (bourrelets)",
        "Pectoraux (gynécomastie légère)",
        "Menton (double menton)",
      ],
    },
    benefits: [
      { title: "Résultats mesurables", description: "Réduction de 20 à 25% du volume graisseux traité, mesurable à 12 semaines." },
      { title: "Non invasif", description: "Aucune chirurgie, aucune anesthésie, aucune injection. Retour immédiat au travail." },
      { title: "Adapté au mode de vie actif", description: "Les cellules graisseuses détruites ne reviendront pas, même lors de légères prises de poids." },
      { title: "Complémentaire au sport", description: "Associé à une activité physique régulière, les résultats sont spectaculaires." },
    ],
    pricing: {
      headline: "Tarifs cryolipolyse homme à Cotonou",
      note: "Bilan morphologique gratuit. Estimation du nombre de séances lors de la consultation.",
      items: [
        { label: "1 applicateur ventre", price: "80 000 FCFA" },
        { label: "2 applicateurs ventre + flancs", price: "140 000 FCFA" },
        { label: "Pack ventre complet (3 appli)", price: "200 000 FCFA" },
        { label: "Pack silhouette homme (4 zones)", price: "280 000 FCFA" },
      ],
    },
    faq: [
      { question: "La cryolipolyse est-elle efficace sur la bière-belly ?", answer: "Oui, la graisse abdominale viscérale superficielle répond bien au traitement. En revanche, la graisse profonde (intra-abdominale) n'est pas concernée." },
      { question: "Peut-on combiner cryolipolyse et BodySculpt ?", answer: "C'est même recommandé ! La cryolipolyse réduit les graisses tandis que le BodySculpt tonifie les abdominaux sous-jacents." },
      { question: "Combien de séances pour voir des résultats ?", answer: "En général 1 à 2 séances par zone suffisent. Les résultats finaux sont visibles à 12 semaines." },
      { question: "Est-il possible de traiter la gynécomastie avec la cryolipolyse ?", answer: "Pour les gynécomasties légères d'origine adipeuse, oui. Les cas glandulaires doivent être évalués médicalement." },
    ],
    cta: {
      headline: "Un ventre plat vous attend",
      description: "Bilan morphologique gratuit à Academy Beauty Gate, Cotonou.",
    },
  },
  {
    slug: "carbon-laser-peel-homme-cotonou",
    title: "Carbon Laser Peel Homme à Cotonou — Academy Beauty Gate",
    metaDescription: "Carbon Laser Peel pour homme à Cotonou : soin purifiant et anti-âge adapté à la peau masculine. Pores réduits, éclat retrouvé à Academy Beauty Gate.",
    category: "visage",
    hero: {
      image: "/images/soins/carbon-laser-peel-homme/hero.jpg",
      imageAlt: "Carbon Laser Peel homme à Cotonou",
      eyebrow: "Hollywood Peel homme",
      headline: "Carbon Laser Peel homme à Cotonou : une peau au sommet",
      subheadline: "Le soin laser carbone adapté à la peau masculine : purification profonde, réduction des pores et éclat immédiat.",
    },
    badges: [
      { icon: "✦", text: "Adapté peau masculine" },
      { icon: "✦", text: "Pores & sébum réduits" },
      { icon: "✦", text: "Résultat immédiat" },
    ],
    intro: {
      image: "/images/soins/carbon-laser-peel-homme/intro.jpg",
      imageAlt: "Carbon Laser Peel : bienfaits pour la peau masculine",
      headline: "Le soin laser carbone, taillé pour l'homme",
      description: "La peau masculine, plus épaisse et plus séborrhéique, bénéficie particulièrement du Carbon Laser Peel. Le masque de carbone pénètre profondément dans les pores masculins dilatés, absorbe le sébum et les impuretés. Le laser les détruit avec précision, révélant une peau instantanément plus nette, plus lisse et plus lumineuse.",
      listItems: [
        "Nettoyage profond des pores masculins",
        "Réduction durable du sébum excessif",
        "Traitement des points noirs rebelles",
        "Éclat et lissage instantané",
        "Stimulation du collagène masculin",
      ],
    },
    benefits: [
      { title: "Peau nette & purifiée", description: "Élimine les impuretés accumulées dans les pores masculins pour une peau profondément nettoyée." },
      { title: "Sébum contrôlé", description: "Régule durablement la production de sébum, réduisant la brillance et l'acné." },
      { title: "Sans éviction", description: "Légères rougeurs pendant 1 à 2 heures. Vous pouvez reprendre vos activités immédiatement." },
      { title: "Complémentaire au rasage", description: "Assainit et prépare la peau pour un rasage plus confortable et des résultats plus durables." },
    ],
    pricing: {
      headline: "Tarifs Carbon Laser Peel homme à Cotonou",
      note: "Consultation incluse dans la première séance.",
      items: [
        { label: "Séance visage homme", price: "45 000 FCFA" },
        { label: "Visage + cou", price: "60 000 FCFA" },
        { label: "Cure 4 séances", price: "160 000 FCFA" },
        { label: "Cure 6 séances", price: "230 000 FCFA" },
      ],
    },
    faq: [
      { question: "Le Carbon Laser Peel est-il adapté à la barbe ?", answer: "Il peut être réalisé sur les zones sans barbe. Pour les zones poilues, un protocole différent est recommandé." },
      { question: "Combien de séances pour des résultats durables ?", answer: "4 à 6 séances mensuelles pour des résultats optimaux et durables sur le sébum et les pores." },
      { question: "Peut-on se raser avant la séance ?", answer: "Rasez-vous 24 heures avant pour permettre à la peau de se reposer avant la séance laser." },
      { question: "Le soin convient-il aux peaux noires masculines ?", answer: "Oui, nos praticiens maîtrisent les paramètres adaptés aux phototypes foncés pour un résultat sécurisé." },
    ],
    cta: {
      headline: "Votre peau, au meilleur d'elle-même",
      description: "Réservez votre Carbon Laser Peel homme à Academy Beauty Gate, Cotonou.",
    },
  },
  {
    slug: "bodysculpt-homme-cotonou",
    title: "BodySculpt Homme à Cotonou — Academy Beauty Gate",
    metaDescription: "BodySculpt pour homme à Cotonou : tonification musculaire et remodelage corporel par électrostimulation. Abdos et fessiers sculptés à Academy Beauty Gate.",
    category: "corps",
    hero: {
      image: "/images/soins/bodysculpt-homme/hero.png",
      imageAlt: "BodySculpt homme à Cotonou",
      eyebrow: "Tonification & sculpture masculine",
      headline: "BodySculpt homme à Cotonou : sculptez un corps de champion",
      subheadline: "20 000 contractions musculaires en 30 minutes pour des abdos en béton et une silhouette sculptée sans salle de sport.",
    },
    badges: [
      { icon: "✦", text: "Abdos & muscles sculptés" },
      { icon: "✦", text: "Masse musculaire + 16%" },
      { icon: "✦", text: "Graisses - 19%" },
    ],
    intro: {
      image: "/images/soins/bodysculpt-homme/intro.jpg",
      imageAlt: "BodySculpt homme : sculptez votre silhouette sans chirurgie",
      headline: "L'entrainement ultime sans effort pour l'homme",
      description: "Le BodySculpt (technologie HIFEM) génère 20 000 contractions musculaires supramaximales en 30 minutes — l'équivalent de 5 heures d'entraînement intensif. Parfait pour les hommes souhaitant définir leurs abdominaux, éliminer la graisse abdominale et sculpter leur silhouette. Associé à une alimentation adaptée, les résultats sont spectaculaires.",
      listItems: [
        "Abdominaux : ceinture abdominale sculptée",
        "Fessiers : volume et lift naturel",
        "Bras : biceps et triceps définis",
        "Cuisses et mollets",
        "Réduction simultanée des graisses localisées",
      ],
    },
    benefits: [
      { title: "Muscles définis", description: "Augmentation moyenne de la masse musculaire de 16% sur la zone traitée." },
      { title: "Abdos visibles", description: "Les contractions forcées développent les abdominaux en profondeur pour un ventre plat et défini." },
      { title: "Graisses réduites", description: "Réduction de 19% des graisses localisées sur la zone traitée." },
      { title: "Résultats prouvés", description: "Des études cliniques confirment l'efficacité après une cure de 4 séances." },
    ],
    pricing: {
      headline: "Tarifs BodySculpt homme à Cotonou",
      note: "Bilan morphologique gratuit. Résultats mesurables garantis après cure complète.",
      items: [
        { label: "Séance abdos (30 min)", price: "50 000 FCFA" },
        { label: "Séance abdos + flancs", price: "85 000 FCFA" },
        { label: "Cure 4 séances abdos", price: "180 000 FCFA" },
        { label: "Cure complète 8 séances", price: "340 000 FCFA" },
      ],
    },
    faq: [
      { question: "Le BodySculpt remplace-t-il la salle de sport ?", answer: "Non, c'est un complément. Il cible et définit les muscles, mais une activité physique régulière optimise et maintient les résultats." },
      { question: "Peut-on faire du BodySculpt si on a déjà du muscle ?", answer: "Absolument. Plus vous êtes musclé, plus la définition et le galbe seront impressionnants." },
      { question: "Combien de séances pour des abdos visibles ?", answer: "4 séances espacées de 2 à 3 jours constituent la cure de base. Les résultats sont mesurables 4 semaines après." },
      { question: "Le BodySculpt est-il sûr pour les hommes sportifs ?", answer: "Oui, mais évitez les séances 48 heures avant ou après un entrainement intense sur les mêmes groupes musculaires." },
    ],
    cta: {
      headline: "Un physique sculpté sans compromis",
      description: "Consultez nos experts BodySculpt à Academy Beauty Gate, Cotonou.",
    },
  },
  {
    slug: "detatouage-laser-homme-cotonou",
    title: "Détatouage Laser Homme à Cotonou — Academy Beauty Gate",
    metaDescription: "Détatouage laser pour homme à Cotonou : effacement des tatouages par laser Q-Switch. Résultats sécurisés sur tous phototypes à Academy Beauty Gate.",
    category: "corps",
    hero: {
      image: "/images/soins/detatouage-laser-homme/hero.png",
      imageAlt: "Détatouage laser homme à Cotonou",
      eyebrow: "Effacement de tatouage homme",
      headline: "Détatouage laser homme à Cotonou : effacez sans traces",
      subheadline: "Le laser Q-Switch efface progressivement vos tatouages, sans cicatrices, adapté à tous les types de peau et toutes les encres.",
    },
    badges: [
      { icon: "✦", text: "Toutes couleurs d'encre" },
      { icon: "✦", text: "Peaux mates & noires" },
      { icon: "✦", text: "Sans cicatrices" },
    ],
    intro: {
      image: "/images/soins/detatouage-laser-homme/intro.jpg",
      imageAlt: "Détatouage laser homme : dites adieu à votre tatouage",
      headline: "Effacer un tatouage sans laisser de traces",
      description: "Le détatouage laser est la seule technique permettant d'effacer un tatouage sans chirurgie. Le laser Q-Switch cible spécifiquement les particules d'encre et les fragmente sans endommager la peau environnante. Ces fragments sont progressivement éliminés par le système lymphatique, effaçant le tatouage séance après séance.",
      listItems: [
        "Tatouages professionnels et amateurs",
        "Toutes couleurs (noir, rouge, bleu, vert)",
        "Maquillage permanent et microblading",
        "Cicatrices de tatouage existantes",
        "Effacement partiel pour cover-up",
      ],
    },
    benefits: [
      { title: "Efficace sur peau foncée", description: "Nos protocoles sont adaptés aux phototypes foncés pour un effacement sécurisé et sans risque." },
      { title: "Toutes encres", description: "Le laser Q-Switch traite efficacement les encres noires, colorées et les encres d'amateur." },
      { title: "Sans cicatrices", description: "La technique préserve l'intégrité de la peau lorsque le protocole post-soins est respecté." },
      { title: "Cover-up possible", description: "Un effacement partiel permet de préparer la peau pour un nouveau tatouage de cover-up." },
    ],
    pricing: {
      headline: "Tarifs détatouage laser homme à Cotonou",
      note: "Estimation du nombre de séances lors de la consultation initiale gratuite.",
      items: [
        { label: "Petit tatouage (< 5 cm)", price: "30 000 FCFA / séance" },
        { label: "Moyen (5 à 15 cm)", price: "55 000 FCFA / séance" },
        { label: "Grand tatouage (> 15 cm)", price: "Devis personnalisé" },
        { label: "Maquillage permanent", price: "25 000 FCFA / séance" },
      ],
    },
    faq: [
      { question: "Les tatouages anciens sont-ils plus faciles à effacer ?", answer: "En général oui, les encres se sont légèrement dégradées avec le temps. Mais cela dépend aussi du type d'encre utilisé." },
      { question: "Combien de séances pour un tatouage sur peau noire ?", answer: "Entre 8 et 15 séances espacées de 6 à 8 semaines, en utilisant des paramètres adaptés au phototype." },
      { question: "Peut-on détatouer un tatouage en couleur ?", answer: "Oui, mais certaines couleurs (jaune, blanc) sont plus résistantes au laser. Notre équipement multi-longueurs d'onde permet de traiter la plupart des encres colorées." },
      { question: "Y a-t-il des suites après la séance ?", answer: "Rougeurs, légère enflure et croûtes pendant 7 à 10 jours. Un soin post-laser rigoureux est indispensable." },
    ],
    cta: {
      headline: "Tournez la page sur ce tatouage",
      description: "Consultation gratuite à Academy Beauty Gate, Cadjehoun, Cotonou.",
    },
  },

  // ─── BATCH MERGE ───
  {
    slug: "manucure-simple-cotonou",
    title: "Manucure Simple à Cotonou — Academy Beauty Gate",
    metaDescription: "Manucure simple à Cotonou : mise en forme, soin et finition des ongles en 30 minutes. Prestation soignée à Academy Beauty Gate, Cadjehoun.",
    category: "mains-pieds",
    hero: {
      imageAlt: "Manucure simple à Cotonou",
      eyebrow: "Beauté des mains",
      headline: "Manucure simple à Cotonou : des ongles impeccables en 30 min",
      subheadline: "Mise en forme, limage et soin de base pour des mains soignées au quotidien. Rapide, efficace, abordable.",
    },
    badges: [
      { icon: "✦", text: "Résultat net et soigné" },
      { icon: "✦", text: "30 minutes chrono" },
      { icon: "✦", text: "À partir de 3 000 FCFA" },
    ],
    intro: {
      imageAlt: "Soin manucure simple au salon Academy Beauty Gate",
      headline: "La manucure simple : l'essentiel pour des mains propres et nettes",
      description: "La manucure simple est la base de tout entretien des mains. En 30 minutes, nos prothésistes remettent vos ongles en forme, éliminent les peaux mortes et subliment votre naturel.",
      listItems: [
        "Mise en forme et limage des ongles",
        "Repousse des cuticules et soin des peaux mortes",
        "Bain de mains relaxant",
        "Polissage pour un fini naturel brillant",
        "Hydratation légère des mains",
      ],
    },
    benefits: [
      { title: "Rapidité", description: "Séance de 30 minutes, idéale entre deux rendez-vous." },
      { title: "Accessibilité", description: "Tarif à 3 000 FCFA pour un résultat professionnel." },
      { title: "Hygiène garantie", description: "Matériel stérilisé et renouvelé à chaque cliente." },
      { title: "Naturel sublimé", description: "Valorise la forme naturelle de vos ongles sans artifice." },
    ],
    pricing: {
      headline: "Tarif Manucure Simple à Cotonou",
      note: "Tarifs affichés à Academy Beauty Gate, Cadjehoun. Première consultation offerte.",
      items: [
        { label: "Manucure simple (30 min)", price: "3 000 FCFA" },
      ],
    },
    faq: [
      { question: "Que comprend la manucure simple ?", answer: "Mise en forme, limage, repousse des cuticules, bain de mains et hydratation légère." },
      { question: "Combien de temps dure la séance ?", answer: "Environ 30 minutes." },
      { question: "Faut-il prendre rendez-vous ?", answer: "Recommandé pour éviter l'attente, mais nous acceptons les clientes sans rendez-vous selon disponibilité." },
      { question: "Peut-on ajouter un vernis après ?", answer: "Oui, un vernis classique ou semi-permanent peut être ajouté en supplément." },
    ],
    cta: {
      headline: "Des mains impeccables en 30 minutes ?",
      description: "Réservez votre manucure simple à Cotonou dès aujourd'hui à Academy Beauty Gate, Cadjehoun.",
    },
  },
  {
    slug: "manucure-vernis-classique-cotonou",
    title: "Manucure avec Vernis Classique à Cotonou — Academy Beauty Gate",
    metaDescription: "Manucure avec vernis classique à Cotonou : soin des mains et pose de vernis en 45 min. Large choix de couleurs à Academy Beauty Gate, Cadjehoun.",
    category: "mains-pieds",
    hero: {
      imageAlt: "Manucure vernis classique à Cotonou",
      eyebrow: "Beauté des mains",
      headline: "Manucure vernis classique à Cotonou : couleur et soin en 45 min",
      subheadline: "Soin complet des mains avec pose d'un vernis classique de votre choix. Large palette de couleurs tendance.",
    },
    badges: [
      { icon: "✦", text: "Large choix de couleurs" },
      { icon: "✦", text: "Séchage rapide" },
      { icon: "✦", text: "6 000 FCFA" },
    ],
    intro: {
      imageAlt: "Pose vernis classique manucure Cotonou",
      headline: "Le classique indémodable pour des ongles colorés",
      description: "La manucure avec vernis classique allie soin des mains et touche de couleur. Nos esthéticiennes appliquent votre vernis avec précision pour un résultat uniforme et élégant.",
      listItems: [
        "Mise en forme et limage des ongles",
        "Soin des cuticules et bain de mains",
        "Application d'une base protectrice",
        "Pose du vernis couleur au choix (2 couches)",
        "Top coat pour un fini brillant durable",
      ],
    },
    benefits: [
      { title: "Pose précise", description: "Application soignée pour un résultat sans bavure ni débordement." },
      { title: "Large palette", description: "Choix parmi des dizaines de teintes tendance." },
      { title: "Accessible", description: "Tarif tout compris à 6 000 FCFA." },
      { title: "Changement facile", description: "Le vernis classique se retire aisément quand vous souhaitez changer de couleur." },
    ],
    pricing: {
      headline: "Tarif Manucure Vernis Classique à Cotonou",
      note: "Tarifs à Academy Beauty Gate, Cadjehoun. Devis gratuit.",
      items: [
        { label: "Manucure avec vernis classique (45 min)", price: "6 000 FCFA" },
      ],
    },
    faq: [
      { question: "Combien de temps tient un vernis classique ?", answer: "En général 5 à 7 jours avec un entretien soigné des mains." },
      { question: "Puis-je choisir ma couleur sur place ?", answer: "Oui, notre nuancier est disponible en salon." },
      { question: "La séance inclut-elle le soin des mains ?", answer: "Oui, la manucure complète est incluse avant la pose du vernis." },
      { question: "Peut-on ajouter un nail art ?", answer: "Oui, le nail art est disponible en supplément à 500 FCFA par ongle." },
    ],
    cta: {
      headline: "Envie de couleur sur vos ongles ?",
      description: "Réservez votre manucure vernis classique à Academy Beauty Gate, Cotonou.",
    },
  },
  {
    slug: "manucure-semi-permanent-cotonou",
    title: "Manucure Semi-Permanent à Cotonou — Academy Beauty Gate",
    metaDescription: "Manucure semi-permanent à Cotonou : couleur longue durée jusqu'à 3 semaines. Pose professionnelle à Academy Beauty Gate, Cadjehoun, Bénin.",
    category: "mains-pieds",
    hero: {
      imageAlt: "Manucure semi-permanent Cotonou",
      eyebrow: "Beauté des mains",
      headline: "Manucure semi-permanent à Cotonou : jusqu'à 3 semaines de couleur",
      subheadline: "Vernis semi-permanent longue tenue, séchage immédiat sous lampe UV/LED. Résultat impeccable semaine après semaine.",
    },
    badges: [
      { icon: "✦", text: "Tenue jusqu'à 3 semaines" },
      { icon: "✦", text: "Séchage immédiat" },
      { icon: "✦", text: "8 000 FCFA" },
    ],
    intro: {
      imageAlt: "Vernis semi-permanent pose Cotonou",
      headline: "Le semi-permanent : la liberté de ne plus y penser",
      description: "Le vernis semi-permanent offre la durabilité d'un gel avec la finesse d'un vernis classique. Posé sous lampe UV/LED, il résiste aux chocs, à l'eau et aux activités quotidiennes.",
      listItems: [
        "Préparation et dégraissage des ongles",
        "Application d'une base adhésive",
        "Pose du semi-permanent couleur (2 couches)",
        "Polymérisation sous lampe UV/LED",
        "Top coat brillant ou mat selon votre préférence",
      ],
    },
    benefits: [
      { title: "Longue tenue", description: "Jusqu'à 3 semaines sans écaillement ni perte d'éclat." },
      { title: "Séchage instantané", description: "Aucune attente après la séance, vous repartez immédiatement." },
      { title: "Résistant", description: "Supporte l'eau, le savon et les activités du quotidien." },
      { title: "Dépose propre", description: "Retrait professionnel sans abîmer l'ongle naturel." },
    ],
    pricing: {
      headline: "Tarif Manucure Semi-Permanent à Cotonou",
      note: "Tarifs à Academy Beauty Gate, Cadjehoun. La dépose est facturée séparément.",
      items: [
        { label: "Manucure semi-permanent (1h)", price: "8 000 FCFA" },
        { label: "Dépose semi-permanent", price: "1 500 FCFA" },
      ],
    },
    faq: [
      { question: "Combien de temps tient le semi-permanent ?", answer: "Entre 2 et 3 semaines selon la croissance de vos ongles et votre mode de vie." },
      { question: "La dépose abîme-t-elle les ongles ?", answer: "Non, si elle est réalisée par un professionnel avec les produits adaptés." },
      { question: "Peut-on mettre du nail art sur semi-permanent ?", answer: "Oui, le nail art est disponible en complément à 500 FCFA par ongle." },
      { question: "Combien de temps dure la pose ?", answer: "Environ 1 heure pour une pose soignée." },
    ],
    cta: {
      headline: "Prête pour 3 semaines d'ongles parfaits ?",
      description: "Réservez votre manucure semi-permanent à Cotonou à Academy Beauty Gate.",
    },
  },
  {
    slug: "complement-french-mains-cotonou",
    title: "Complément French Mains à Cotonou — Academy Beauty Gate",
    metaDescription: "Complément French sur manucure à Cotonou : ajout d'un sourire français élégant sur vos ongles. À partir de 3 000 FCFA à Academy Beauty Gate, Cadjehoun.",
    category: "mains-pieds",
    hero: {
      imageAlt: "French manucure Cotonou",
      eyebrow: "Nail art & finitions",
      headline: "Complément French à Cotonou : l'élégance classique du sourire blanc",
      subheadline: "Ajoutez une touche French à votre manucure pour un rendu soigné, naturel et chic. L'indémodable revisité.",
    },
    badges: [
      { icon: "✦", text: "Finition élégante et classique" },
      { icon: "✦", text: "À partir de 3 000 FCFA" },
      { icon: "✦", text: "+15 min seulement" },
    ],
    intro: {
      imageAlt: "French ongles complément salon Cotonou",
      headline: "Le French : une élégance intemporelle pour vos ongles",
      description: "Le complément French s'ajoute à votre manucure en cours pour créer le fameux sourire blanc à l'extrémité des ongles. Discret et raffiné, il s'adapte à toutes les occasions.",
      listItems: [
        "Tracé précis du sourire blanc sur chaque ongle",
        "Base naturelle ou rose pâle en fond",
        "Finition glossy ou mate selon vos préférences",
        "Adapté sur vernis classique, semi-permanent ou gel",
        "Résultat symétrique et professionnel",
      ],
    },
    benefits: [
      { title: "Élégance universelle", description: "Le French convient à toutes les occasions, du bureau à la soirée." },
      { title: "Ajout rapide", description: "Seulement +15 minutes à votre séance habituelle." },
      { title: "Discrétion", description: "Rendu naturel qui valorise la longueur des ongles." },
      { title: "Personnalisable", description: "Sourire fin ou épais, blanc cassé ou brillant selon vos goûts." },
    ],
    pricing: {
      headline: "Tarif Complément French Mains à Cotonou",
      note: "Tarifs à Academy Beauty Gate, Cadjehoun. En complément d'une manucure.",
      items: [
        { label: "Complément French mains (+15 min)", price: "À partir de 3 000 FCFA" },
      ],
    },
    faq: [
      { question: "Le French est-il inclus dans la manucure ?", answer: "Non, c'est un complément facturé en supplément de votre manucure." },
      { question: "Sur quels supports peut-on poser le French ?", answer: "Sur vernis classique, semi-permanent, gel ou résine." },
      { question: "Le French tient-il aussi longtemps que le vernis ?", answer: "Oui, la durée de tenue dépend du support choisi." },
      { question: "Peut-on faire un French sur ongles courts ?", answer: "Oui, un sourire fin s'adapte même aux ongles courts." },
    ],
    cta: {
      headline: "Sublimez vos ongles avec un French élégant",
      description: "Ajoutez le complément French à votre manucure à Academy Beauty Gate, Cotonou.",
    },
  },
  {
    slug: "nail-art-mains-cotonou",
    title: "Nail Art Mains à Cotonou — Academy Beauty Gate",
    metaDescription: "Nail art sur ongles à Cotonou : motifs, pierres, dégradés à 500 FCFA par ongle. Créations personnalisées à Academy Beauty Gate, Cadjehoun, Bénin.",
    category: "mains-pieds",
    hero: {
      imageAlt: "Nail art ongles Cotonou",
      eyebrow: "Nail art & créations",
      headline: "Nail Art à Cotonou : exprimez votre personnalité ongle par ongle",
      subheadline: "Motifs tendance, pierres, dégradés, lignes géométriques… Chaque ongle devient une œuvre d'art à 500 FCFA l'unité.",
    },
    badges: [
      { icon: "✦", text: "500 FCFA par ongle" },
      { icon: "✦", text: "Designs sur mesure" },
      { icon: "✦", text: "Motifs tendance 2025" },
    ],
    intro: {
      imageAlt: "Nail art créations ongles salon Cotonou",
      headline: "Le nail art : chaque ongle raconte votre histoire",
      description: "Nos nail artists maîtrisent toutes les techniques : stamping, dégradé, pierres Swarovski, fleurs, géométrie, French coloré… Vous apportez votre inspiration, on la réalise.",
      listItems: [
        "Motifs floraux, géométriques ou abstraits",
        "Dégradés et ombré nails",
        "Pose de pierres et strass",
        "French coloré et nail art minimaliste",
        "Réalisation sur vernis classique, semi-permanent ou gel",
      ],
    },
    benefits: [
      { title: "Tarif à l'unité", description: "Payez uniquement les ongles décorés : 500 FCFA par ongle." },
      { title: "Sur mesure", description: "Chaque design est créé selon votre demande et votre personnalité." },
      { title: "Compatible tous supports", description: "Applicable sur vernis classique, semi-permanent, gel ou résine." },
      { title: "Inspiration fournie", description: "Nos artistes s'adaptent à vos références Pinterest ou Instagram." },
    ],
    pricing: {
      headline: "Tarif Nail Art Mains à Cotonou",
      note: "Tarifs à Academy Beauty Gate, Cadjehoun. En complément d'une manucure.",
      items: [
        { label: "Nail art (par ongle)", price: "500 FCFA" },
        { label: "Nail art 5 ongles", price: "2 500 FCFA" },
        { label: "Nail art 10 ongles", price: "5 000 FCFA" },
      ],
    },
    faq: [
      { question: "Peut-on mélanger nail art et French ?", answer: "Oui, les deux se combinent parfaitement." },
      { question: "Combien de temps prend un nail art complet ?", answer: "Variable selon la complexité du design, comptez entre 30 min et 1h30 supplémentaires." },
      { question: "Apportez-vous vos propres designs ?", answer: "Oui, envoyez vos inspirations par WhatsApp avant le rendez-vous." },
      { question: "Le nail art tient-il longtemps ?", answer: "Autant que le support choisi : jusqu'à 3 semaines sur semi-permanent." },
    ],
    cta: {
      headline: "Prête à avoir les ongles les plus créatifs de Cotonou ?",
      description: "Réservez votre session nail art à Academy Beauty Gate, Cadjehoun.",
    },
  },
  {
    slug: "capsules-ongles-cotonou",
    title: "Capsules Ongles à Cotonou — Academy Beauty Gate",
    metaDescription: "Pose de capsules ongles à Cotonou : extension naturelle et élégante à partir de 7 000 FCFA. Résultat longue durée à Academy Beauty Gate, Cadjehoun.",
    category: "mains-pieds",
    hero: {
      imageAlt: "Capsules ongles pose Cotonou",
      eyebrow: "Extensions ongles",
      headline: "Capsules ongles à Cotonou : des ongles longs et naturels",
      subheadline: "Extension par capsules pour un résultat immédiat, naturel et durable. À partir de 7 000 FCFA à Academy Beauty Gate.",
    },
    badges: [
      { icon: "✦", text: "Résultat immédiat" },
      { icon: "✦", text: "À partir de 7 000 FCFA" },
      { icon: "✦", text: "Longue durée" },
    ],
    intro: {
      imageAlt: "Extensions capsules ongles Cadjehoun Cotonou",
      headline: "Les capsules : l'extension ongle la plus naturelle",
      description: "Les capsules sont des embouts prêts à poser, collés sur l'ongle naturel. Elles permettent d'allonger et remodeler immédiatement l'ongle sans temps de séchage UV.",
      listItems: [
        "Choix de la forme : amande, carré, stiletto, ballerine",
        "Sélection de la longueur adaptée",
        "Collage et ajustement de chaque capsule",
        "Limage et finition de la surface",
        "Application d'un gel ou vernis de finition",
      ],
    },
    benefits: [
      { title: "Immédiat", description: "Résultat visible dès la fin de la séance d'1h30." },
      { title: "Naturel", description: "Rendu proche de l'ongle naturel pour un look discret ou glamour." },
      { title: "Choix des formes", description: "Amande, carré, stiletto ou ballerine selon votre style." },
      { title: "Accessible", description: "À partir de 7 000 FCFA pour des ongles allongés professionnels." },
    ],
    pricing: {
      headline: "Tarif Capsules Ongles à Cotonou",
      note: "Tarifs à Academy Beauty Gate, Cadjehoun. Prix variable selon la longueur et la finition.",
      items: [
        { label: "Pose capsules ongles (1h30)", price: "À partir de 7 000 FCFA" },
      ],
    },
    faq: [
      { question: "Quelle est la différence entre capsules et gel ?", answer: "Les capsules sont des embouts préfabriqués collés, le gel est sculpté directement sur l'ongle." },
      { question: "Combien de temps tiennent les capsules ?", answer: "2 à 4 semaines selon l'entretien et la croissance des ongles." },
      { question: "Peut-on mettre du vernis sur les capsules ?", answer: "Oui, vernis classique, semi-permanent ou nail art sont possibles." },
      { question: "Les capsules abîment-elles l'ongle naturel ?", answer: "Non si la pose et la dépose sont réalisées par un professionnel." },
    ],
    cta: {
      headline: "Envie d'ongles longs dès aujourd'hui ?",
      description: "Réservez votre pose de capsules à Academy Beauty Gate, Cotonou.",
    },
  },
  {
    slug: "gel-ongles-naturels-cotonou",
    title: "Gel sur Ongles Naturels à Cotonou — Academy Beauty Gate",
    metaDescription: "Pose de gel sur ongles naturels à Cotonou : renforcement et brillance longue durée à partir de 10 000 FCFA. Academy Beauty Gate, Cadjehoun.",
    category: "mains-pieds",
    hero: {
      imageAlt: "Gel sur ongles naturels Cotonou",
      eyebrow: "Renforcement ongles",
      headline: "Gel sur ongles naturels à Cotonou : solidité et brillance durables",
      subheadline: "Renforcez et embellissez vos ongles naturels grâce à une pose de gel UV. Résistant, brillant, longue tenue.",
    },
    badges: [
      { icon: "✦", text: "Renforce l'ongle naturel" },
      { icon: "✦", text: "À partir de 10 000 FCFA" },
      { icon: "✦", text: "Tenue 3 à 4 semaines" },
    ],
    intro: {
      imageAlt: "Pose gel ongles naturels salon Cotonou",
      headline: "Le gel : la meilleure protection pour vos ongles naturels",
      description: "Le gel sur ongles naturels crée une couche protectrice solide qui empêche la casse, renforce les ongles fragiles et offre un fini miroir incomparable.",
      listItems: [
        "Préparation et dégraissage de la surface de l'ongle",
        "Application du gel de base (primer)",
        "Sculpture du gel de construction couche par couche",
        "Polymérisation sous lampe UV/LED",
        "Limage et polissage pour un fini parfait",
      ],
    },
    benefits: [
      { title: "Solidité", description: "Protège les ongles cassants et favorise leur croissance." },
      { title: "Brillance miroir", description: "Fini ultra-brillant ou mat selon vos préférences." },
      { title: "Longue tenue", description: "3 à 4 semaines sans remplissage nécessaire." },
      { title: "Naturel préservé", description: "L'ongle naturel reste intact sous le gel." },
    ],
    pricing: {
      headline: "Tarif Gel sur Ongles Naturels à Cotonou",
      note: "Tarifs à Academy Beauty Gate, Cadjehoun. Prix variable selon la longueur.",
      items: [
        { label: "Gel sur ongles naturels (1h30)", price: "À partir de 10 000 FCFA" },
        { label: "Remplissage gel", price: "8 000 FCFA" },
      ],
    },
    faq: [
      { question: "Le gel convient-il aux ongles très courts ?", answer: "Oui, le gel peut être posé sur des ongles courts pour les renforcer et les allonger légèrement." },
      { question: "Faut-il revenir pour un remplissage ?", answer: "Oui, un remplissage est recommandé toutes les 3 à 4 semaines." },
      { question: "La dépose est-elle douloureuse ?", answer: "Non, réalisée professionnellement avec les produits adaptés." },
      { question: "Peut-on mettre du nail art sur le gel ?", answer: "Oui, toutes les techniques de nail art sont compatibles." },
    ],
    cta: {
      headline: "Des ongles solides et brillants vous attendent",
      description: "Réservez votre pose de gel à Academy Beauty Gate, Cotonou.",
    },
  },
  {
    slug: "capsules-gel-resine-cotonou",
    title: "Capsules + Gel ou Résine à Cotonou — Academy Beauty Gate",
    metaDescription: "Pose capsules avec gel ou résine à Cotonou : extension renforcée longue durée à partir de 12 000 FCFA. Academy Beauty Gate, Cadjehoun, Bénin.",
    category: "mains-pieds",
    hero: {
      imageAlt: "Capsules gel résine ongles Cotonou",
      eyebrow: "Extensions renforcées",
      headline: "Capsules + Gel ou Résine à Cotonou : l'extension longue durée",
      subheadline: "La combinaison capsules et gel ou résine offre une tenue maximale avec un rendu impeccable. La solution premium pour des ongles longs et solides.",
    },
    badges: [
      { icon: "✦", text: "Tenue maximale" },
      { icon: "✦", text: "À partir de 12 000 FCFA" },
      { icon: "✦", text: "Pose en 2 heures" },
    ],
    intro: {
      imageAlt: "Capsules gel résine extensions ongles Cotonou",
      headline: "Le duo gagnant : capsules et gel ou résine",
      description: "En associant la structure des capsules au renforcement du gel ou de la résine acrylique, on obtient une extension solide, résistante aux chocs et parfaitement lisse.",
      listItems: [
        "Pose et collage des capsules sur l'ongle naturel",
        "Application du gel ou de la résine pour le renforcement",
        "Sculpture et modelage de la forme désirée",
        "Polymérisation et limage pour un fini homogène",
        "Finition vernis, gel couleur ou nail art",
      ],
    },
    benefits: [
      { title: "Double résistance", description: "Capsule + gel ou résine = tenue optimale contre les chocs." },
      { title: "Finition parfaite", description: "Surface lisse et brillante pour un rendu ultra-professionnel." },
      { title: "Longue durée", description: "Jusqu'à 4 semaines avant remplissage." },
      { title: "Personnalisable", description: "Forme, longueur, couleur et nail art selon vos envies." },
    ],
    pricing: {
      headline: "Tarif Capsules + Gel ou Résine à Cotonou",
      note: "Tarifs à Academy Beauty Gate, Cadjehoun. Prix variable selon longueur et finition.",
      items: [
        { label: "Capsules + gel ou résine (2h)", price: "À partir de 12 000 FCFA" },
        { label: "Remplissage gel ou résine", price: "8 000 FCFA" },
      ],
    },
    faq: [
      { question: "Quelle différence entre gel et résine ?", answer: "Le gel polymérise sous UV/LED et offre plus de flexibilité. La résine acrylique est plus dure et très résistante." },
      { question: "Combien de temps dure la pose ?", answer: "Environ 2 heures pour un résultat soigné." },
      { question: "Faut-il un remplissage régulier ?", answer: "Oui, toutes les 3 à 4 semaines pour maintenir l'aspect impeccable." },
      { question: "Peut-on choisir la forme des ongles ?", answer: "Oui : amande, carré, coffin, stiletto ou ballerine selon votre style." },
    ],
    cta: {
      headline: "L'extension longue durée qui tient dans le temps",
      description: "Réservez votre pose capsules + gel/résine à Academy Beauty Gate, Cotonou.",
    },
  },
  {
    slug: "remplissage-gel-resine-cotonou",
    title: "Remplissage Gel ou Résine à Cotonou — Academy Beauty Gate",
    metaDescription: "Remplissage gel ou résine à Cotonou : entretien de vos extensions toutes les 3-4 semaines pour 8 000 FCFA. Academy Beauty Gate, Cadjehoun.",
    category: "mains-pieds",
    hero: {
      imageAlt: "Remplissage gel résine ongles Cotonou",
      eyebrow: "Entretien extensions",
      headline: "Remplissage gel ou résine à Cotonou : prolongez vos ongles parfaits",
      subheadline: "Le remplissage comble la repousse et redonne à vos extensions toute leur superbe en 1h15. 8 000 FCFA à Academy Beauty Gate.",
    },
    badges: [
      { icon: "✦", text: "Résultat comme neuf" },
      { icon: "✦", text: "8 000 FCFA" },
      { icon: "✦", text: "1h15 en salon" },
    ],
    intro: {
      imageAlt: "Remplissage entretien gel ongles Cotonou",
      headline: "Le remplissage : l'entretien indispensable de vos extensions",
      description: "Toutes les 3 à 4 semaines, la repousse de l'ongle naturel crée un espace entre la base et l'extension. Le remplissage comble cet espace et restaure l'uniformité.",
      listItems: [
        "Limage et préparation de la zone de repousse",
        "Application du gel ou de la résine sur la zone découverte",
        "Remodelage de la surface pour homogénéité",
        "Polymérisation et finition",
        "Retouche de la couleur ou du nail art si nécessaire",
      ],
    },
    benefits: [
      { title: "Économique", description: "Moins coûteux qu'une pose complète, pour un résultat identique." },
      { title: "Rapide", description: "1h15 en salon pour des ongles entièrement rafraîchis." },
      { title: "Ongles préservés", description: "Entretien régulier = ongles naturels en bonne santé sous l'extension." },
      { title: "Durabilité", description: "Prolonge la vie de vos extensions de plusieurs semaines." },
    ],
    pricing: {
      headline: "Tarif Remplissage Gel ou Résine à Cotonou",
      note: "Tarifs à Academy Beauty Gate, Cadjehoun. Recommandé toutes les 3-4 semaines.",
      items: [
        { label: "Remplissage gel ou résine (1h15)", price: "8 000 FCFA" },
      ],
    },
    faq: [
      { question: "À quelle fréquence faire un remplissage ?", answer: "Toutes les 3 à 4 semaines selon la vitesse de pousse de vos ongles." },
      { question: "Peut-on changer de couleur lors du remplissage ?", answer: "Oui, nous pouvons appliquer une nouvelle couleur ou un nail art." },
      { question: "Que se passe-t-il si on tarde trop à faire le remplissage ?", answer: "L'espace de repousse s'agrandit et fragilise l'extension. Mieux vaut ne pas dépasser 5 semaines." },
      { question: "Le remplissage inclut-il la dépose ?", answer: "Non, il s'agit d'un entretien sans dépose complète." },
    ],
    cta: {
      headline: "Vos ongles méritent un entretien régulier",
      description: "Prenez rendez-vous pour votre remplissage à Academy Beauty Gate, Cotonou.",
    },
  },
  {
    slug: "soin-mains-spa-cotonou",
    title: "Soin Complet des Mains SPA à Cotonou — Academy Beauty Gate",
    metaDescription: "Soin complet des mains SPA à Cotonou : exfoliation, masque et hydratation intensive en 45 min. 6 000 FCFA à Academy Beauty Gate, Cadjehoun.",
    category: "mains-pieds",
    hero: {
      imageAlt: "Soin mains SPA Cotonou",
      eyebrow: "Soin des mains",
      headline: "Soin mains SPA à Cotonou : le rituel complet pour des mains douces",
      subheadline: "Exfoliation, masque nourrissant et massage hydratant en 45 minutes. Vos mains retrouvent douceur et jeunesse.",
    },
    badges: [
      { icon: "✦", text: "Exfoliation + masque + massage" },
      { icon: "✦", text: "6 000 FCFA" },
      { icon: "✦", text: "45 minutes de bien-être" },
    ],
    intro: {
      imageAlt: "Rituel soin mains SPA salon Cotonou",
      headline: "Le soin SPA : parce que vos mains méritent autant d'attention que votre visage",
      description: "Le soin complet des mains SPA est un rituel de beauté et de bien-être qui associe soin esthétique et relaxation. Idéal pour des mains abîmées par la chaleur béninoise.",
      listItems: [
        "Bain de mains aux sels minéraux relaxant",
        "Exfoliation au gommage doux",
        "Application d'un masque nourrissant",
        "Massage des mains et des poignets",
        "Hydratation avec crème riche et wrap chauffant",
      ],
    },
    benefits: [
      { title: "Hydratation intense", description: "Restaure le film hydrolipidique des mains desséchées." },
      { title: "Relaxation", description: "Le massage des mains et poignets libère les tensions." },
      { title: "Peau transformée", description: "Vos mains ressortent douces, lumineuses et rajeunies." },
      { title: "Accessible", description: "Un vrai rituel SPA à 6 000 FCFA." },
    ],
    pricing: {
      headline: "Tarif Soin Mains SPA à Cotonou",
      note: "Tarifs à Academy Beauty Gate, Cadjehoun. Peut se combiner avec une manucure.",
      items: [
        { label: "Soin complet mains SPA (45 min)", price: "6 000 FCFA" },
      ],
    },
    faq: [
      { question: "Le soin SPA inclut-il une manucure ?", answer: "Le soin SPA se concentre sur le traitement des mains. La manucure peut être ajoutée en supplément." },
      { question: "À quelle fréquence faire ce soin ?", answer: "1 fois par mois pour maintenir des mains douces et bien hydratées." },
      { question: "Convient-il aux peaux sensibles ?", answer: "Oui, nos produits sont sélectionnés pour leur douceur et leur tolérance." },
      { question: "Peut-on associer soin SPA et vernis ?", answer: "Oui, nous appliquons le vernis après le soin pour un résultat complet." },
    ],
    cta: {
      headline: "Offrez à vos mains le traitement qu'elles méritent",
      description: "Réservez votre soin mains SPA à Academy Beauty Gate, Cotonou.",
    },
  },
  {
    slug: "soin-mains-hydra-boost-cotonou",
    title: "Soin Mains Hydra Boost à Cotonou — Academy Beauty Gate",
    metaDescription: "Soin mains hydra boost à Cotonou : hydratation intensive et anti-âge en 1 heure. 8 000 FCFA à Academy Beauty Gate, Cadjehoun, Bénin.",
    category: "mains-pieds",
    hero: {
      imageAlt: "Soin mains hydra boost Cotonou",
      eyebrow: "Soin intensif des mains",
      headline: "Soin Mains Hydra Boost à Cotonou : hydratation maximale en 1 heure",
      subheadline: "Notre soin haute intensité pour des mains sèches, abîmées ou vieillissantes. Actifs hydratants concentrés, résultats visibles immédiatement.",
    },
    badges: [
      { icon: "✦", text: "Hydratation maximale" },
      { icon: "✦", text: "8 000 FCFA" },
      { icon: "✦", text: "Résultats immédiats" },
    ],
    intro: {
      imageAlt: "Hydra boost soin intensif mains Cotonou",
      headline: "L'Hydra Boost : la cure intensive pour des mains transformées",
      description: "Le soin Hydra Boost va au-delà du SPA classique avec des actifs concentrés en acide hyaluronique, vitamines et huiles précieuses pour une réhydratation en profondeur.",
      listItems: [
        "Double exfoliation (enzymatique + mécanique)",
        "Sérum concentré en acide hyaluronique",
        "Masque occlusif chauffant pour pénétration maximale",
        "Massage drainant et modelant",
        "Crème ultra-riche et protection solaire",
      ],
    },
    benefits: [
      { title: "Hydratation profonde", description: "L'acide hyaluronique cible les couches profondes de la peau." },
      { title: "Anti-âge", description: "Atténue les taches, ridules et signes de vieillissement." },
      { title: "Pénétration optimisée", description: "Le wrap chauffant décuple l'absorption des actifs." },
      { title: "Durabilité", description: "Effets hydratants qui se prolongent plusieurs jours après le soin." },
    ],
    pricing: {
      headline: "Tarif Soin Mains Hydra Boost à Cotonou",
      note: "Tarifs à Academy Beauty Gate, Cadjehoun. Cure de 3 séances recommandée.",
      items: [
        { label: "Soin mains Hydra Boost (1h)", price: "8 000 FCFA" },
        { label: "Cure 3 séances", price: "21 000 FCFA", note: "Économisez 3 000 FCFA" },
      ],
    },
    faq: [
      { question: "Quelle différence avec le soin SPA ?", answer: "Le Hydra Boost utilise des actifs plus concentrés et une technique de pénétration optimisée pour un effet anti-âge plus marqué." },
      { question: "Combien de séances pour des résultats durables ?", answer: "Une cure de 3 séances mensuelles est recommandée pour des résultats durables." },
      { question: "Convient-il aux peaux très sèches ?", answer: "C'est justement pour les peaux très sèches ou abîmées que ce soin est le plus indiqué." },
      { question: "Peut-on faire un vernis après ?", answer: "Oui, nous vous conseillons d'attendre 30 minutes après le soin avant la pose d'un vernis." },
    ],
    cta: {
      headline: "Transformez vos mains avec l'Hydra Boost",
      description: "Réservez votre soin intensif mains à Academy Beauty Gate, Cotonou.",
    },
  },
  {
    slug: "depose-semi-permanent-mains-cotonou",
    title: "Dépose Semi-Permanent Mains à Cotonou — Academy Beauty Gate",
    metaDescription: "Dépose semi-permanent mains à Cotonou : retrait propre et sans dommage en 20 min pour 1 500 FCFA. Academy Beauty Gate, Cadjehoun.",
    category: "mains-pieds",
    hero: {
      imageAlt: "Dépose semi-permanent ongles Cotonou",
      eyebrow: "Dépose & entretien",
      headline: "Dépose Semi-Permanent Mains à Cotonou : retrait propre en 20 min",
      subheadline: "Dépose professionnelle du vernis semi-permanent sans abîmer l'ongle naturel. 1 500 FCFA seulement.",
    },
    badges: [
      { icon: "✦", text: "Sans dommage pour l'ongle" },
      { icon: "✦", text: "1 500 FCFA" },
      { icon: "✦", text: "20 minutes" },
    ],
    intro: {
      imageAlt: "Retrait vernis semi-permanent ongles Cotonou",
      headline: "La dépose professionnelle : protégez l'intégrité de vos ongles",
      description: "Retirer un vernis semi-permanent nécessite une technique appropriée pour ne pas fragiliser l'ongle naturel. Nos prothésistes utilisent la méthode du wrapping avec produits professionnels.",
      listItems: [
        "Limage léger de la couche de finition",
        "Application du produit de dépose sur chaque ongle",
        "Wrapping en aluminium pour une action optimale",
        "Retrait délicat du semi-permanent ramolli",
        "Hydratation de l'ongle et des cuticules",
      ],
    },
    benefits: [
      { title: "Ongles protégés", description: "Technique douce qui préserve l'ongle naturel." },
      { title: "Rapide", description: "20 minutes pour une dépose complète des 10 ongles." },
      { title: "Economique", description: "1 500 FCFA pour un retrait professionnel." },
      { title: "Prête pour une nouvelle pose", description: "Vos ongles sont prêts pour une nouvelle couleur dès la séance suivante." },
    ],
    pricing: {
      headline: "Tarif Dépose Semi-Permanent Mains à Cotonou",
      note: "Tarifs à Academy Beauty Gate, Cadjehoun.",
      items: [
        { label: "Dépose semi-permanent mains (20 min)", price: "1 500 FCFA" },
      ],
    },
    faq: [
      { question: "Peut-on retirer le semi-permanent soi-même ?", answer: "Déconseillé : le grattage abîme l'ongle naturel. La dépose professionnelle est indispensable." },
      { question: "Peut-on faire une nouvelle pose le même jour ?", answer: "Oui, immédiatement après la dépose si vos ongles sont en bonne santé." },
      { question: "La dépose est-elle douloureuse ?", answer: "Non, la technique du wrapping est totalement indolore." },
      { question: "Pourquoi payer pour la dépose si on refait une pose ?", answer: "La dépose est un service séparé, mais nous proposons des forfaits dépose + pose." },
    ],
    cta: {
      headline: "Changez de couleur sans abîmer vos ongles",
      description: "Réservez votre dépose semi-permanent à Academy Beauty Gate, Cotonou.",
    },
  },
  {
    slug: "depose-gel-resine-mains-cotonou",
    title: "Dépose Gel ou Résine Mains à Cotonou — Academy Beauty Gate",
    metaDescription: "Dépose gel ou résine mains à Cotonou : retrait professionnel en 30 min pour 2 500 FCFA. Ongles préservés à Academy Beauty Gate, Cadjehoun.",
    category: "mains-pieds",
    hero: {
      imageAlt: "Dépose gel résine ongles mains Cotonou",
      eyebrow: "Dépose & entretien",
      headline: "Dépose Gel ou Résine Mains à Cotonou : retrait sécurisé en 30 min",
      subheadline: "Dépose professionnelle du gel ou de la résine acrylique sans fragiliser l'ongle. 2 500 FCFA à Academy Beauty Gate.",
    },
    badges: [
      { icon: "✦", text: "Retrait sécurisé" },
      { icon: "✦", text: "2 500 FCFA" },
      { icon: "✦", text: "30 minutes" },
    ],
    intro: {
      imageAlt: "Retrait gel résine ongles mains salon Cotonou",
      headline: "La dépose gel ou résine : une étape clé pour la santé de vos ongles",
      description: "Le gel et la résine nécessitent une dépose avec limage électrique ou acétone selon la méthode choisie. Nos techniciennes maîtrisent les deux techniques pour un résultat sans dommage.",
      listItems: [
        "Évaluation de l'état de l'extension",
        "Limage de la couche supérieure au fichier électrique",
        "Application de l'acétone et wrapping",
        "Retrait délicat de l'extension ramollie",
        "Soin et hydratation de l'ongle naturel",
      ],
    },
    benefits: [
      { title: "Technique adaptée", description: "Méthode choisie selon l'épaisseur et l'état de l'extension." },
      { title: "Ongles préservés", description: "Aucune casse ni délamination de l'ongle naturel." },
      { title: "Rapide", description: "30 minutes pour une dépose complète et soignée." },
      { title: "Prête à repartir", description: "Nouvelle pose possible directement après si souhaité." },
    ],
    pricing: {
      headline: "Tarif Dépose Gel ou Résine Mains à Cotonou",
      note: "Tarifs à Academy Beauty Gate, Cadjehoun.",
      items: [
        { label: "Dépose gel ou résine mains (30 min)", price: "2 500 FCFA" },
      ],
    },
    faq: [
      { question: "Peut-on retirer le gel chez soi ?", answer: "Fortement déconseillé : le gel mal retiré arrache des couches de l'ongle naturel." },
      { question: "La dépose gel prend-elle plus de temps que le semi-permanent ?", answer: "Oui, le gel est plus épais : 30 minutes contre 20 pour le semi-permanent." },
      { question: "Peut-on refaire une pose le jour de la dépose ?", answer: "Oui, si l'ongle naturel est en bonne santé." },
      { question: "Y a-t-il un soin inclus dans la dépose ?", answer: "Oui, une hydratation de l'ongle et des cuticules est incluse." },
    ],
    cta: {
      headline: "Retirez votre gel ou résine en toute sécurité",
      description: "Réservez votre dépose à Academy Beauty Gate, Cotonou.",
    },
  },
  {
    slug: "pedicure-simple-cotonou",
    title: "Pédicure Simple à Cotonou — Academy Beauty Gate",
    metaDescription: "Pédicure simple à Cotonou : soin et mise en forme des ongles de pieds en 30 min. 3 000 FCFA à Academy Beauty Gate, Cadjehoun, Bénin.",
    category: "mains-pieds",
    hero: {
      imageAlt: "Pédicure simple Cotonou",
      eyebrow: "Beauté des pieds",
      headline: "Pédicure simple à Cotonou : des pieds soignés en 30 minutes",
      subheadline: "Mise en forme, soin et finition des ongles de pieds. L'essentiel pour des pieds impeccables au quotidien.",
    },
    badges: [
      { icon: "✦", text: "Rapide et soigné" },
      { icon: "✦", text: "3 000 FCFA" },
      { icon: "✦", text: "30 minutes" },
    ],
    intro: {
      imageAlt: "Soin pédicure simple pieds Cotonou",
      headline: "La pédicure simple : l'entretien essentiel de vos pieds",
      description: "La pédicure simple s'occupe de l'essentiel : limage, cuticules, élimination des callosités légères et soin de base. Parfaite pour un entretien régulier à petit prix.",
      listItems: [
        "Bain de pieds relaxant aux sels",
        "Mise en forme et limage des ongles",
        "Repousse et soin des cuticules",
        "Élimination légère des callosités",
        "Hydratation des pieds",
      ],
    },
    benefits: [
      { title: "Hygiène", description: "Élimine les impuretés et prévient les problèmes d'ongles incarnés." },
      { title: "Rapidité", description: "30 minutes suffisent pour des pieds propres et soignés." },
      { title: "Accessibilité", description: "3 000 FCFA pour un entretien professionnel régulier." },
      { title: "Confort", description: "Le bain de pieds et le massage léger procurent une vraie détente." },
    ],
    pricing: {
      headline: "Tarif Pédicure Simple à Cotonou",
      note: "Tarifs à Academy Beauty Gate, Cadjehoun.",
      items: [
        { label: "Pédicure simple (30 min)", price: "3 000 FCFA" },
      ],
    },
    faq: [
      { question: "La pédicure simple inclut-elle un vernis ?", answer: "Non, le vernis est en supplément. Optez pour la pédicure avec vernis classique ou semi-permanent." },
      { question: "À quelle fréquence faire une pédicure ?", answer: "Toutes les 4 à 6 semaines pour un entretien optimal." },
      { question: "Peut-on traiter les durillons avec la pédicure simple ?", answer: "Pour les callosités importantes, nous recommandons le soin complet des pieds SPA." },
      { question: "Peut-on ajouter un vernis en option ?", answer: "Oui, le vernis classique ou semi-permanent peut être ajouté en supplément." },
    ],
    cta: {
      headline: "Des pieds impeccables en 30 minutes",
      description: "Réservez votre pédicure simple à Academy Beauty Gate, Cotonou.",
    },
  },
  {
    slug: "pedicure-vernis-classique-cotonou",
    title: "Pédicure avec Vernis Classique à Cotonou — Academy Beauty Gate",
    metaDescription: "Pédicure avec vernis classique à Cotonou : soin complet des pieds et pose de vernis en 45 min. 6 000 FCFA à Academy Beauty Gate, Cadjehoun.",
    category: "mains-pieds",
    hero: {
      imageAlt: "Pédicure vernis classique Cotonou",
      eyebrow: "Beauté des pieds",
      headline: "Pédicure vernis classique à Cotonou : pieds soignés et colorés",
      subheadline: "Soin complet des pieds avec application d'un vernis classique de votre choix. 45 minutes pour des pieds sublimés.",
    },
    badges: [
      { icon: "✦", text: "Soin + couleur" },
      { icon: "✦", text: "6 000 FCFA" },
      { icon: "✦", text: "Large choix de teintes" },
    ],
    intro: {
      imageAlt: "Pose vernis classique pieds salon Cotonou",
      headline: "Des pieds soignés et colorés pour toutes les occasions",
      description: "La pédicure avec vernis classique associe soin complet des pieds et touche de couleur. Idéal avant une sortie, un voyage ou simplement pour se sentir bien.",
      listItems: [
        "Bain de pieds aux sels minéraux",
        "Mise en forme et limage des ongles de pieds",
        "Soin des cuticules et élimination des callosités",
        "Application d'une base protectrice",
        "Pose du vernis couleur au choix (2 couches) + top coat",
      ],
    },
    benefits: [
      { title: "Tout compris", description: "Soin complet des pieds et vernis dans une seule séance de 45 min." },
      { title: "Longue tenue", description: "Le vernis classique sur pieds tient jusqu'à 2 semaines." },
      { title: "Choix varié", description: "Large palette de couleurs pour s'adapter à votre style." },
      { title: "Accessible", description: "6 000 FCFA pour un résultat professionnel." },
    ],
    pricing: {
      headline: "Tarif Pédicure Vernis Classique à Cotonou",
      note: "Tarifs à Academy Beauty Gate, Cadjehoun.",
      items: [
        { label: "Pédicure avec vernis classique (45 min)", price: "6 000 FCFA" },
      ],
    },
    faq: [
      { question: "Combien de temps tient le vernis classique sur les pieds ?", answer: "En général 1 à 2 semaines selon l'activité physique et le port de chaussures." },
      { question: "Peut-on ajouter un nail art ?", answer: "Oui, le nail art est disponible en complément à 500 FCFA par ongle." },
      { question: "La séance inclut-elle le soin des callosités ?", answer: "Oui, une exfoliation et soin léger des callosités sont inclus." },
      { question: "Peut-on choisir sa couleur à l'avance ?", answer: "Oui, contactez-nous ou consultez notre nuancier sur place." },
    ],
    cta: {
      headline: "Des pieds colorés et soignés vous attendent",
      description: "Réservez votre pédicure vernis classique à Academy Beauty Gate, Cotonou.",
    },
  },
  {
    slug: "pedicure-semi-permanent-cotonou",
    title: "Pédicure Semi-Permanent à Cotonou — Academy Beauty Gate",
    metaDescription: "Pédicure semi-permanent à Cotonou : couleur longue durée jusqu'à 4 semaines sur les pieds. 8 000 FCFA à Academy Beauty Gate, Cadjehoun.",
    category: "mains-pieds",
    hero: {
      imageAlt: "Pédicure semi-permanent pieds Cotonou",
      eyebrow: "Beauté des pieds",
      headline: "Pédicure semi-permanent à Cotonou : jusqu'à 4 semaines de couleur",
      subheadline: "Vernis semi-permanent longue tenue pour les ongles de pieds. Idéal pour les vacances et la saison de sandales.",
    },
    badges: [
      { icon: "✦", text: "Tenue jusqu'à 4 semaines" },
      { icon: "✦", text: "8 000 FCFA" },
      { icon: "✦", text: "Séchage immédiat" },
    ],
    intro: {
      imageAlt: "Semi-permanent pédicure pieds Cotonou",
      headline: "Le semi-permanent sur pieds : l'idéal pour la saison des sandales",
      description: "Sur les ongles de pieds, le vernis semi-permanent tient encore plus longtemps que sur les mains grâce à une croissance plus lente. Parfait pour l'été et les voyages.",
      listItems: [
        "Bain de pieds et soin des cuticules",
        "Mise en forme et limage",
        "Application de la base adhésive",
        "Pose du semi-permanent couleur",
        "Finition top coat brillant ou mat sous lampe",
      ],
    },
    benefits: [
      { title: "Longévité maximale", description: "Jusqu'à 4 semaines de tenue sur les ongles de pieds." },
      { title: "Résistant", description: "Supporte la mer, la piscine et les chaussures fermées." },
      { title: "Séchage instantané", description: "Repartez immédiatement après la séance." },
      { title: "Économique", description: "Moins de retouches nécessaires qu'avec un vernis classique." },
    ],
    pricing: {
      headline: "Tarif Pédicure Semi-Permanent à Cotonou",
      note: "Tarifs à Academy Beauty Gate, Cadjehoun.",
      items: [
        { label: "Pédicure semi-permanent (1h)", price: "8 000 FCFA" },
        { label: "Dépose semi-permanent pieds", price: "1 500 FCFA" },
      ],
    },
    faq: [
      { question: "Le semi-permanent tient-il vraiment plus longtemps sur les pieds ?", answer: "Oui, car les ongles de pieds poussent plus lentement et subissent moins de contraintes." },
      { question: "Peut-on aller à la plage avec ?", answer: "Oui, le semi-permanent résiste à l'eau salée et chlorée." },
      { question: "Comment retirer le semi-permanent des pieds ?", answer: "Par dépose professionnelle en salon à 1 500 FCFA." },
      { question: "La séance inclut-elle le soin complet des pieds ?", answer: "Oui, bain, cuticules et mise en forme sont inclus." },
    ],
    cta: {
      headline: "Des ongles de pieds parfaits pour toute la saison",
      description: "Réservez votre pédicure semi-permanent à Academy Beauty Gate, Cotonou.",
    },
  },
  {
    slug: "complement-french-pieds-cotonou",
    title: "Complément French Pieds à Cotonou — Academy Beauty Gate",
    metaDescription: "Complément French ongles de pieds à Cotonou : élégance intemporelle à partir de 2 000 FCFA. Academy Beauty Gate, Cadjehoun, Bénin.",
    category: "mains-pieds",
    hero: {
      imageAlt: "French pédicure pieds Cotonou",
      eyebrow: "Nail art pieds",
      headline: "Complément French Pieds à Cotonou : le chic discret pour vos orteils",
      subheadline: "Ajoutez un sourire French à votre pédicure pour un rendu élégant et soigné, parfait pour les sandales.",
    },
    badges: [
      { icon: "✦", text: "Élégant et discret" },
      { icon: "✦", text: "À partir de 2 000 FCFA" },
      { icon: "✦", text: "+15 min" },
    ],
    intro: {
      imageAlt: "French ongles pieds Cotonou",
      headline: "Le French sur les pieds : une touche chic pour vos sandales",
      description: "Le French sur les ongles de pieds est particulièrement apprécié en période estivale. Il donne un aspect soigné et discret qui met en valeur les orteils dans toutes les chaussures ouvertes.",
      listItems: [
        "Tracé précis du sourire blanc sur chaque orteil",
        "Base naturelle ou rose pâle",
        "Finition glossy pour un éclat lumineux",
        "Adapté sur vernis classique ou semi-permanent",
        "Durée de tenue identique au support choisi",
      ],
    },
    benefits: [
      { title: "Discrétion", description: "Le French reste élégant sans attirer l'attention." },
      { title: "Polyvalent", description: "S'adapte à toutes les tenues, du casual au formel." },
      { title: "Économique", description: "À partir de 2 000 FCFA pour une finition premium." },
      { title: "Rapide", description: "Seulement +15 min à votre séance de pédicure." },
    ],
    pricing: {
      headline: "Tarif Complément French Pieds à Cotonou",
      note: "Tarifs à Academy Beauty Gate, Cadjehoun. En complément d'une pédicure.",
      items: [
        { label: "Complément French pieds (+15 min)", price: "À partir de 2 000 FCFA" },
      ],
    },
    faq: [
      { question: "Le French pieds est-il différent du French mains ?", answer: "Légèrement : le sourire est adapté à la forme des ongles de pieds, généralement plus court." },
      { question: "Sur quel support peut-on faire un French pieds ?", answer: "Sur vernis classique, semi-permanent ou gel." },
      { question: "Combien de temps tient-il ?", answer: "Autant que le support choisi, jusqu'à 4 semaines sur semi-permanent." },
      { question: "Peut-on combiner French et nail art ?", answer: "Oui, des ornements peuvent être ajoutés sur le French." },
    ],
    cta: {
      headline: "Des pieds élégants pour toutes vos sorties",
      description: "Ajoutez le French à votre pédicure à Academy Beauty Gate, Cotonou.",
    },
  },
  {
    slug: "nail-art-pieds-cotonou",
    title: "Nail Art Pieds à Cotonou — Academy Beauty Gate",
    metaDescription: "Nail art ongles de pieds à Cotonou : motifs et décorations à 500 FCFA par ongle. Créations sur mesure à Academy Beauty Gate, Cadjehoun.",
    category: "mains-pieds",
    hero: {
      imageAlt: "Nail art pieds ongles Cotonou",
      eyebrow: "Nail art pieds",
      headline: "Nail Art Pieds à Cotonou : décorez vos orteils avec style",
      subheadline: "Fleurs, pierres, dégradés, motifs ethniques… Exprimez votre créativité sur vos ongles de pieds à 500 FCFA l'unité.",
    },
    badges: [
      { icon: "✦", text: "500 FCFA par ongle" },
      { icon: "✦", text: "Designs sur mesure" },
      { icon: "✦", text: "Idéal pour les vacances" },
    ],
    intro: {
      imageAlt: "Décoration ongles pieds salon Cotonou",
      headline: "Le nail art sur pieds : parfait pour la saison des sandales",
      description: "En Afrique de l'Ouest, les pieds sont souvent mis en valeur avec des sandales. Le nail art sur pieds est un moyen expressif de célébrer votre style et votre culture.",
      listItems: [
        "Motifs floraux, ethniques ou géométriques",
        "Pierres, strass et décorations 3D",
        "Dégradés et ombré nails",
        "Motifs personnalisés selon vos envies",
        "Compatible vernis classique, semi-permanent ou gel",
      ],
    },
    benefits: [
      { title: "Créativité sans limite", description: "Des designs uniques adaptés à votre personnalité." },
      { title: "Tarif accessible", description: "500 FCFA par ongle pour personnaliser selon votre budget." },
      { title: "Durable", description: "Sur semi-permanent, le nail art tient jusqu'à 4 semaines." },
      { title: "Inspiration fournie", description: "Montrez-nous vos références, nous les reproduisons." },
    ],
    pricing: {
      headline: "Tarif Nail Art Pieds à Cotonou",
      note: "Tarifs à Academy Beauty Gate, Cadjehoun. En complément d'une pédicure.",
      items: [
        { label: "Nail art pieds (par ongle)", price: "500 FCFA" },
        { label: "Nail art 5 ongles pieds", price: "2 500 FCFA" },
        { label: "Nail art 10 ongles pieds", price: "5 000 FCFA" },
      ],
    },
    faq: [
      { question: "Peut-on faire du nail art sur le gros orteil uniquement ?", answer: "Oui, c'est une option très populaire pour un accent discret." },
      { question: "Les pierres tiennent-elles longtemps sur les pieds ?", answer: "Oui, fixées au gel, elles tiennent aussi longtemps que l'extension." },
      { question: "Peut-on combiner French et nail art sur les pieds ?", answer: "Oui, une combinaison French + accent nail art est très tendance." },
      { question: "Faut-il apporter son inspiration ?", answer: "Pas obligatoire, nos artistes peuvent proposer des designs selon vos couleurs et préférences." },
    ],
    cta: {
      headline: "Montrez vos pieds avec fierté",
      description: "Réservez votre session nail art pieds à Academy Beauty Gate, Cotonou.",
    },
  },
  {
    slug: "capsules-pieds-cotonou",
    title: "Capsules Pieds à Cotonou — Academy Beauty Gate",
    metaDescription: "Pose de capsules ongles de pieds à Cotonou à partir de 7 000 FCFA. Extension naturelle et durable à Academy Beauty Gate, Cadjehoun.",
    category: "mains-pieds",
    hero: {
      imageAlt: "Capsules ongles pieds Cotonou",
      eyebrow: "Extensions pieds",
      headline: "Capsules Pieds à Cotonou : des ongles allongés et naturels",
      subheadline: "Extension par capsules sur les ongles de pieds pour un résultat impeccable et durable. À partir de 7 000 FCFA.",
    },
    badges: [
      { icon: "✦", text: "Résultat immédiat" },
      { icon: "✦", text: "À partir de 7 000 FCFA" },
      { icon: "✦", text: "Pose en 1h30" },
    ],
    intro: {
      imageAlt: "Extensions capsules ongles pieds salon Cotonou",
      headline: "Les capsules pieds : allongez et embellissez vos orteils",
      description: "Idéales pour les personnes aux ongles de pieds courts ou cassants, les capsules permettent de retrouver des ongles longs et bien formés immédiatement.",
      listItems: [
        "Soin et préparation des ongles de pieds",
        "Sélection des capsules adaptées à chaque orteil",
        "Collage précis et ajustement de la forme",
        "Limage et polissage de la surface",
        "Application d'une finition gel ou vernis",
      ],
    },
    benefits: [
      { title: "Immédiat", description: "Des ongles longs dès la fin de la séance d'1h30." },
      { title: "Confortable", description: "Capsules légères qui ne gênent pas dans les chaussures." },
      { title: "Naturel", description: "Rendu proche de l'ongle naturel pour un look soigné." },
      { title: "Accessible", description: "À partir de 7 000 FCFA pour une transformation complète." },
    ],
    pricing: {
      headline: "Tarif Capsules Pieds à Cotonou",
      note: "Tarifs à Academy Beauty Gate, Cadjehoun.",
      items: [
        { label: "Pose capsules pieds (1h30)", price: "À partir de 7 000 FCFA" },
      ],
    },
    faq: [
      { question: "Les capsules sur pieds sont-elles confortables dans les chaussures ?", answer: "Oui, nous sélectionnons la longueur adaptée à votre morphologie et vos habitudes." },
      { question: "Combien de temps tiennent les capsules sur pieds ?", answer: "3 à 5 semaines selon la croissance et l'activité physique." },
      { question: "Peut-on mettre du nail art sur les capsules ?", answer: "Oui, toutes les décorations sont possibles après la pose." },
      { question: "Comment se déroule la dépose ?", answer: "Par trempage dans l'acétone ou limage progressif selon le type de colle utilisée." },
    ],
    cta: {
      headline: "Des ongles de pieds parfaits vous attendent",
      description: "Réservez votre pose de capsules pieds à Academy Beauty Gate, Cotonou.",
    },
  },
  {
    slug: "gel-ongles-naturels-pieds-cotonou",
    title: "Gel sur Ongles Naturels Pieds à Cotonou — Academy Beauty Gate",
    metaDescription: "Gel sur ongles naturels pieds à Cotonou : renforcement et brillance à partir de 10 000 FCFA. Academy Beauty Gate, Cadjehoun, Bénin.",
    category: "mains-pieds",
    hero: {
      imageAlt: "Gel ongles naturels pieds Cotonou",
      eyebrow: "Renforcement pieds",
      headline: "Gel sur Ongles Naturels Pieds à Cotonou : solidité et brillance",
      subheadline: "Renforcez et embellissez vos ongles de pieds naturels grâce à une pose de gel UV professionnelle.",
    },
    badges: [
      { icon: "✦", text: "Renforce les ongles fragiles" },
      { icon: "✦", text: "À partir de 10 000 FCFA" },
      { icon: "✦", text: "Tenue 4 à 5 semaines" },
    ],
    intro: {
      imageAlt: "Pose gel ongles pieds salon Cotonou",
      headline: "Le gel sur pieds : la protection longue durée pour vos ongles naturels",
      description: "Le gel appliqué sur les ongles naturels des pieds crée une couche protectrice qui prévient la casse, renforce les ongles mous et offre un fini brillant durable.",
      listItems: [
        "Préparation et brossage des ongles de pieds",
        "Application du primer adhésif",
        "Sculpture du gel couche par couche",
        "Polymérisation sous lampe UV/LED",
        "Finition et polissage miroir",
      ],
    },
    benefits: [
      { title: "Protection", description: "Évite la casse et renforce les ongles de pieds fragiles." },
      { title: "Longue tenue", description: "4 à 5 semaines de tenue sans remplissage nécessaire." },
      { title: "Hygiénique", description: "Surface lisse qui ne favorise pas le développement de champignons." },
      { title: "Brillance durable", description: "Fini miroir qui résiste à l'eau et aux frottements." },
    ],
    pricing: {
      headline: "Tarif Gel sur Ongles Naturels Pieds à Cotonou",
      note: "Tarifs à Academy Beauty Gate, Cadjehoun.",
      items: [
        { label: "Gel sur ongles naturels pieds (1h30)", price: "À partir de 10 000 FCFA" },
        { label: "Remplissage gel pieds", price: "8 000 FCFA" },
      ],
    },
    faq: [
      { question: "Le gel est-il adapté aux ongles de pieds incarnés ?", answer: "Pour les ongles incarnés, consultez d'abord un podologue. Le gel peut ensuite être posé sur un ongle sain." },
      { question: "Peut-on marcher normalement avec du gel sur les pieds ?", answer: "Oui, le gel durci est très résistant et ne gêne pas la marche." },
      { question: "La pose de gel est-elle douloureuse ?", answer: "Non, la pose est indolore." },
      { question: "Faut-il faire un remplissage régulier ?", answer: "Toutes les 4 à 5 semaines pour maintenir un résultat impeccable." },
    ],
    cta: {
      headline: "Des ongles de pieds solides et brillants",
      description: "Réservez votre pose de gel pieds à Academy Beauty Gate, Cotonou.",
    },
  },
  {
    slug: "capsules-gel-resine-pieds-cotonou",
    title: "Capsules + Gel ou Résine Pieds à Cotonou — Academy Beauty Gate",
    metaDescription: "Capsules + gel ou résine ongles de pieds à Cotonou : extension renforcée à partir de 12 000 FCFA. Academy Beauty Gate, Cadjehoun.",
    category: "mains-pieds",
    hero: {
      imageAlt: "Capsules gel résine pieds Cotonou",
      eyebrow: "Extensions renforcées pieds",
      headline: "Capsules + Gel ou Résine Pieds à Cotonou : l'extension premium",
      subheadline: "La combinaison capsules et gel ou résine pour des ongles de pieds longs, solides et parfaitement lisses.",
    },
    badges: [
      { icon: "✦", text: "Solidité maximale" },
      { icon: "✦", text: "À partir de 12 000 FCFA" },
      { icon: "✦", text: "Pose en 2 heures" },
    ],
    intro: {
      imageAlt: "Extensions capsules gel pieds salon Cotonou",
      headline: "L'extension renforcée pour des pieds impeccables en toutes circonstances",
      description: "L'association capsules + gel ou résine offre la meilleure durabilité possible pour les ongles de pieds, même pour les personnes très actives ou pratiquant des sports.",
      listItems: [
        "Soin et préparation des ongles de pieds",
        "Pose et collage des capsules",
        "Application du gel ou résine de renforcement",
        "Modelage de la forme et polymérisation",
        "Finition et application de la couleur ou nail art",
      ],
    },
    benefits: [
      { title: "Ultra-résistant", description: "Double protection capsule + gel contre les chocs et frottements." },
      { title: "Longévité", description: "Jusqu'à 5 semaines de tenue avant remplissage." },
      { title: "Confort", description: "Extension légère et confortable même dans les chaussures fermées." },
      { title: "Résultat professionnel", description: "Finition lisse et brillante digne des plus grands salons." },
    ],
    pricing: {
      headline: "Tarif Capsules + Gel ou Résine Pieds à Cotonou",
      note: "Tarifs à Academy Beauty Gate, Cadjehoun.",
      items: [
        { label: "Capsules + gel ou résine pieds (2h)", price: "À partir de 12 000 FCFA" },
        { label: "Remplissage gel ou résine pieds", price: "8 000 FCFA" },
      ],
    },
    faq: [
      { question: "Cette pose convient-elle pour les personnes sportives ?", answer: "Oui, c'est la solution la plus résistante pour les personnes actives." },
      { question: "Peut-on choisir la longueur des capsules ?", answer: "Oui, nous adaptons la longueur à votre demande et à vos activités." },
      { question: "La pose dure-t-elle vraiment 2 heures ?", answer: "Oui, pour une pose soignée et durable sur les 10 orteils." },
      { question: "Comment se déroule le remplissage ?", answer: "Le remplissage comble la zone de repousse toutes les 4 à 5 semaines." },
    ],
    cta: {
      headline: "L'extension pieds la plus solide de Cotonou",
      description: "Réservez votre pose à Academy Beauty Gate, Cadjehoun.",
    },
  },
  {
    slug: "remplissage-gel-resine-pieds-cotonou",
    title: "Remplissage Gel ou Résine Pieds à Cotonou — Academy Beauty Gate",
    metaDescription: "Remplissage gel ou résine pieds à Cotonou : entretien de vos extensions de pieds en 1h15 pour 8 000 FCFA. Academy Beauty Gate, Cadjehoun.",
    category: "mains-pieds",
    hero: {
      imageAlt: "Remplissage gel résine pieds Cotonou",
      eyebrow: "Entretien pieds",
      headline: "Remplissage Gel ou Résine Pieds à Cotonou : prolongez vos extensions",
      subheadline: "Remplissage professionnel pour maintenir des ongles de pieds impeccables semaine après semaine. 8 000 FCFA.",
    },
    badges: [
      { icon: "✦", text: "Résultat comme neuf" },
      { icon: "✦", text: "8 000 FCFA" },
      { icon: "✦", text: "1h15 en salon" },
    ],
    intro: {
      imageAlt: "Entretien remplissage gel pieds Cotonou",
      headline: "Le remplissage pieds : l'entretien qui fait durer vos extensions",
      description: "Toutes les 4 à 5 semaines, un remplissage professionnel comble la repousse et redonne uniformité et brillance à vos extensions de pieds.",
      listItems: [
        "Évaluation et préparation de la zone de repousse",
        "Application du gel ou résine sur la zone découverte",
        "Remodelage et limage pour homogénéité",
        "Polymérisation et polissage",
        "Retouche de couleur ou nail art si souhaité",
      ],
    },
    benefits: [
      { title: "Économique", description: "Bien moins coûteux qu'une nouvelle pose complète." },
      { title: "Rapide", description: "1h15 pour des ongles de pieds entièrement rafraîchis." },
      { title: "Ongles préservés", description: "Entretien régulier = ongles naturels sains sous l'extension." },
      { title: "Durabilité", description: "Prolonge vos extensions de 4 à 5 semaines supplémentaires." },
    ],
    pricing: {
      headline: "Tarif Remplissage Gel ou Résine Pieds à Cotonou",
      note: "Tarifs à Academy Beauty Gate, Cadjehoun. Recommandé toutes les 4-5 semaines.",
      items: [
        { label: "Remplissage gel ou résine pieds (1h15)", price: "8 000 FCFA" },
      ],
    },
    faq: [
      { question: "À quelle fréquence faire le remplissage sur les pieds ?", answer: "Toutes les 4 à 5 semaines, car les ongles de pieds poussent plus lentement." },
      { question: "Peut-on changer de couleur lors du remplissage pieds ?", answer: "Oui, nous appliquons une nouvelle couleur ou un nail art selon vos envies." },
      { question: "Que se passe-t-il si on dépasse le délai de remplissage ?", answer: "L'espace de repousse fragilise l'extension. Au-delà de 6 semaines, une nouvelle pose peut s'avérer nécessaire." },
      { question: "Le remplissage inclut-il un soin des pieds ?", answer: "Un soin basique des cuticules est inclus." },
    ],
    cta: {
      headline: "Maintenez vos ongles de pieds impeccables",
      description: "Réservez votre remplissage pieds à Academy Beauty Gate, Cotonou.",
    },
  },
  {
    slug: "soin-pieds-spa-cotonou",
    title: "Soin Complet des Pieds SPA à Cotonou — Academy Beauty Gate",
    metaDescription: "Soin complet des pieds SPA à Cotonou : gommage, masque et massage en 45 min. 7 000 FCFA à Academy Beauty Gate, Cadjehoun, Bénin.",
    category: "mains-pieds",
    hero: {
      imageAlt: "Soin pieds SPA Cotonou",
      eyebrow: "Soin des pieds",
      headline: "Soin Pieds SPA à Cotonou : le rituel complet pour des pieds doux",
      subheadline: "Gommage, masque, massage et hydratation intensive en 45 minutes. Vos pieds retrouvent douceur et confort.",
    },
    badges: [
      { icon: "✦", text: "Gommage + masque + massage" },
      { icon: "✦", text: "7 000 FCFA" },
      { icon: "✦", text: "45 minutes de détente" },
    ],
    intro: {
      imageAlt: "Rituel soin pieds SPA salon Cotonou",
      headline: "Le soin SPA des pieds : un rituel complet de beauté et bien-être",
      description: "Nos pieds supportent tout le poids du corps et souffrent souvent de la chaleur béninoise. Le soin SPA leur offre une cure complète de beauté et de bien-être.",
      listItems: [
        "Bain de pieds aux sels minéraux et huiles essentielles",
        "Gommage exfoliant pour éliminer les cellules mortes",
        "Traitement des callosités et durillons",
        "Masque nourrissant et régénérant",
        "Massage des pieds et des jambes + hydratation",
      ],
    },
    benefits: [
      { title: "Pieds transformés", description: "Callosités, peaux sèches et rugosités éliminées en une séance." },
      { title: "Relaxation profonde", description: "Le massage des pieds stimule les points de réflexologie." },
      { title: "Hydratation durable", description: "Le masque + wrap chauffant hydrate en profondeur." },
      { title: "Accessible", description: "Un vrai rituel SPA à 7 000 FCFA seulement." },
    ],
    pricing: {
      headline: "Tarif Soin Pieds SPA à Cotonou",
      note: "Tarifs à Academy Beauty Gate, Cadjehoun. Peut se combiner avec une pédicure.",
      items: [
        { label: "Soin complet pieds SPA (45 min)", price: "7 000 FCFA" },
      ],
    },
    faq: [
      { question: "Le soin SPA traite-t-il les cors et durillons ?", answer: "Oui, les callosités légères à modérées sont traitées. Pour les cas sévères, une consultation podologique est recommandée." },
      { question: "Peut-on faire un vernis après le soin SPA ?", answer: "Oui, nous recommandons d'attendre 30 min avant la pose d'un vernis." },
      { question: "À quelle fréquence faire ce soin ?", answer: "Idéalement toutes les 4 à 6 semaines." },
      { question: "Le soin SPA inclut-il une pédicure ?", answer: "Non, la pédicure est un service séparé que l'on peut ajouter en complément." },
    ],
    cta: {
      headline: "Offrez à vos pieds le traitement qu'ils méritent",
      description: "Réservez votre soin pieds SPA à Academy Beauty Gate, Cotonou.",
    },
  },
  {
    slug: "soin-pieds-hydra-boost-cotonou",
    title: "Soin Pieds Hydra Boost à Cotonou — Academy Beauty Gate",
    metaDescription: "Soin pieds hydra boost à Cotonou : hydratation intensive et anti-âge en 1 heure. 9 000 FCFA à Academy Beauty Gate, Cadjehoun, Bénin.",
    category: "mains-pieds",
    hero: {
      imageAlt: "Soin pieds hydra boost Cotonou",
      eyebrow: "Soin intensif des pieds",
      headline: "Soin Pieds Hydra Boost à Cotonou : hydratation maximale en 1 heure",
      subheadline: "Notre soin haute intensité pour des pieds secs et abîmés. Actifs concentrés pour une transformation visible dès la première séance.",
    },
    badges: [
      { icon: "✦", text: "Hydratation maximale" },
      { icon: "✦", text: "9 000 FCFA" },
      { icon: "✦", text: "Transformation visible" },
    ],
    intro: {
      imageAlt: "Hydra boost soin intensif pieds Cotonou",
      headline: "L'Hydra Boost pieds : la cure intensive pour une peau transformée",
      description: "Le soin Hydra Boost va plus loin que le SPA classique grâce à des actifs haute concentration : acide hyaluronique, urée, beurre de karité et complexes régénérants.",
      listItems: [
        "Double exfoliation chimique et mécanique",
        "Sérum concentré en urée et acide hyaluronique",
        "Masque occlusif ultra-nourrissant",
        "Wrap chauffant pour pénétration maximale des actifs",
        "Massage modelant et crème barrière protectrice",
      ],
    },
    benefits: [
      { title: "Hydratation en profondeur", description: "Les actifs pénètrent jusqu'aux couches profondes de la peau des pieds." },
      { title: "Anti-callosités", description: "L'urée ramollit et élimine progressivement les callosités." },
      { title: "Effet immédiat", description: "Peau visiblement plus douce dès la sortie du soin." },
      { title: "Effets prolongés", description: "L'hydratation se prolonge plusieurs jours après le soin." },
    ],
    pricing: {
      headline: "Tarif Soin Pieds Hydra Boost à Cotonou",
      note: "Tarifs à Academy Beauty Gate, Cadjehoun. Cure de 3 séances recommandée.",
      items: [
        { label: "Soin pieds Hydra Boost (1h)", price: "9 000 FCFA" },
        { label: "Cure 3 séances", price: "24 000 FCFA", note: "Économisez 3 000 FCFA" },
      ],
    },
    faq: [
      { question: "Quelle différence avec le soin pieds SPA ?", answer: "L'Hydra Boost utilise des actifs plus concentrés et une technique d'occlusivité pour une hydratation 3 fois plus intense." },
      { question: "Combien de séances pour des pieds durablement doux ?", answer: "Une cure de 3 séances mensuelles donne les meilleurs résultats durables." },
      { question: "Convient-il aux pieds très crevassés ?", answer: "Oui, c'est le soin idéal pour les pieds très secs et crevassés." },
      { question: "Peut-on faire une pédicure ou un vernis après ?", answer: "Oui, après 30 minutes de repos pour les pieds." },
    ],
    cta: {
      headline: "Transformez vos pieds avec l'Hydra Boost",
      description: "Réservez votre soin intensif pieds à Academy Beauty Gate, Cotonou.",
    },
  },
  {
    slug: "depose-semi-permanent-pieds-cotonou",
    title: "Dépose Semi-Permanent Pieds à Cotonou — Academy Beauty Gate",
    metaDescription: "Dépose semi-permanent pieds à Cotonou : retrait propre et sans dommage en 20 min pour 1 500 FCFA. Academy Beauty Gate, Cadjehoun.",
    category: "mains-pieds",
    hero: {
      imageAlt: "Dépose semi-permanent pieds Cotonou",
      eyebrow: "Dépose & entretien pieds",
      headline: "Dépose Semi-Permanent Pieds à Cotonou : retrait propre en 20 min",
      subheadline: "Retrait professionnel du vernis semi-permanent des pieds sans abîmer l'ongle. 1 500 FCFA à Academy Beauty Gate.",
    },
    badges: [
      { icon: "✦", text: "Sans dommage" },
      { icon: "✦", text: "1 500 FCFA" },
      { icon: "✦", text: "20 minutes" },
    ],
    intro: {
      imageAlt: "Retrait semi-permanent ongles pieds Cotonou",
      headline: "La dépose professionnelle : la clé pour des ongles de pieds sains",
      description: "Le vernis semi-permanent sur les pieds nécessite une dépose professionnelle pour préserver l'intégrité de l'ongle. Nos techniciennes utilisent la technique douce du wrapping.",
      listItems: [
        "Limage léger de la couche de top coat",
        "Application du produit de dépose",
        "Wrapping aluminium pour action optimale",
        "Retrait délicat et complet du semi-permanent",
        "Hydratation des ongles et cuticules",
      ],
    },
    benefits: [
      { title: "Ongles protégés", description: "Technique douce qui n'abîme pas l'ongle naturel." },
      { title: "Rapide", description: "20 minutes pour les 10 orteils." },
      { title: "Économique", description: "1 500 FCFA pour un retrait professionnel." },
      { title: "Prête pour la suite", description: "Nouvelle couleur ou soin possible immédiatement après." },
    ],
    pricing: {
      headline: "Tarif Dépose Semi-Permanent Pieds à Cotonou",
      note: "Tarifs à Academy Beauty Gate, Cadjehoun.",
      items: [
        { label: "Dépose semi-permanent pieds (20 min)", price: "1 500 FCFA" },
      ],
    },
    faq: [
      { question: "Peut-on gratter soi-même le semi-permanent des pieds ?", answer: "Non, cela arrache des couches de l'ongle. La dépose professionnelle est indispensable." },
      { question: "Peut-on faire une nouvelle pose le même jour ?", answer: "Oui, si les ongles sont en bonne santé après la dépose." },
      { question: "La dépose est-elle douloureuse ?", answer: "Non, la technique du wrapping est totalement indolore." },
      { question: "La dépose pieds est-elle la même que pour les mains ?", answer: "Même technique, même tarif, même durée." },
    ],
    cta: {
      headline: "Changez de couleur sans abîmer vos ongles de pieds",
      description: "Réservez votre dépose semi-permanent pieds à Academy Beauty Gate, Cotonou.",
    },
  },
  {
    slug: "depose-gel-resine-pieds-cotonou",
    title: "Dépose Gel ou Résine Pieds à Cotonou — Academy Beauty Gate",
    metaDescription: "Dépose gel ou résine ongles de pieds à Cotonou : retrait professionnel en 30 min pour 2 500 FCFA. Academy Beauty Gate, Cadjehoun.",
    category: "mains-pieds",
    hero: {
      imageAlt: "Dépose gel résine pieds Cotonou",
      eyebrow: "Dépose & entretien pieds",
      headline: "Dépose Gel ou Résine Pieds à Cotonou : retrait sécurisé en 30 min",
      subheadline: "Dépose professionnelle du gel ou de la résine des ongles de pieds. 2 500 FCFA à Academy Beauty Gate.",
    },
    badges: [
      { icon: "✦", text: "Retrait sécurisé" },
      { icon: "✦", text: "2 500 FCFA" },
      { icon: "✦", text: "30 minutes" },
    ],
    intro: {
      imageAlt: "Retrait gel résine ongles pieds salon Cotonou",
      headline: "La dépose gel pieds : technique professionnelle pour ongles sains",
      description: "Le gel et la résine sur les ongles de pieds nécessitent une dépose soigneuse. Nos prothésistes maîtrisent les techniques de limage et d'acétone pour un résultat sans dommage.",
      listItems: [
        "Évaluation de l'état de l'extension",
        "Limage de la couche supérieure du gel ou résine",
        "Application de l'acétone et wrapping",
        "Retrait délicieux de l'extension ramollie",
        "Soin et hydratation de l'ongle naturel",
      ],
    },
    benefits: [
      { title: "Technique adaptée", description: "Méthode choisie selon la nature et l'épaisseur de l'extension." },
      { title: "Ongles préservés", description: "Aucune détérioration de l'ongle naturel avec notre technique." },
      { title: "Rapide", description: "30 minutes pour une dépose complète." },
      { title: "Prête à repartir", description: "Nouvelle pose ou soin possible dès la fin de la dépose." },
    ],
    pricing: {
      headline: "Tarif Dépose Gel ou Résine Pieds à Cotonou",
      note: "Tarifs à Academy Beauty Gate, Cadjehoun.",
      items: [
        { label: "Dépose gel ou résine pieds (30 min)", price: "2 500 FCFA" },
      ],
    },
    faq: [
      { question: "La dépose gel sur pieds est-elle douloureuse ?", answer: "Non, réalisée correctement elle est totalement indolore." },
      { question: "Peut-on faire une nouvelle pose dans la foulée ?", answer: "Oui, si vos ongles naturels sont en bonne santé." },
      { question: "Y a-t-il un soin après la dépose ?", answer: "Oui, une hydratation des ongles et cuticules est incluse." },
      { question: "Le tarif est-il le même que pour les mains ?", answer: "Oui, même tarif de 2 500 FCFA." },
    ],
    cta: {
      headline: "Retirez votre gel ou résine de pieds en toute sécurité",
      description: "Réservez votre dépose à Academy Beauty Gate, Cotonou.",
    },
  },
  {
    slug: "manucure-pedicure-completes-cotonou",
    title: "Manucure + Pédicure Complètes à Cotonou — Academy Beauty Gate",
    metaDescription: "Forfait manucure + pédicure complètes à Cotonou : mains et pieds sublimés en 1h30 à partir de 12 000 FCFA. Academy Beauty Gate, Cadjehoun.",
    category: "mains-pieds",
    hero: {
      imageAlt: "Manucure pédicure complètes Cotonou",
      eyebrow: "Forfait mains & pieds",
      headline: "Manucure + Pédicure Complètes à Cotonou : mains et pieds sublimés",
      subheadline: "Le forfait complet pour des mains et des pieds impeccables en une seule séance de 1h30. À partir de 12 000 FCFA.",
    },
    badges: [
      { icon: "✦", text: "Mains + pieds en une séance" },
      { icon: "✦", text: "À partir de 12 000 FCFA" },
      { icon: "✦", text: "1h30 tout compris" },
    ],
    intro: {
      imageAlt: "Forfait manucure pédicure salon Cotonou",
      headline: "Le forfait mains + pieds : l'excellence de la tête aux pieds",
      description: "Notre forfait combiné manucure + pédicure vous permet de prendre soin de vos mains et pieds en une seule visite. Économisez du temps et bénéficiez d'un tarif préférentiel.",
      listItems: [
        "Bain et soin des mains et des pieds",
        "Mise en forme des ongles de mains et de pieds",
        "Soin des cuticules et exfoliation",
        "Hydratation intensive mains et pieds",
        "Pose vernis ou finition au choix",
      ],
    },
    benefits: [
      { title: "Gain de temps", description: "Mains et pieds traités en une seule séance de 1h30." },
      { title: "Économique", description: "Tarif forfaitaire avantageux par rapport aux prestations séparées." },
      { title: "Cohérence", description: "Mains et pieds assortis pour un look harmonieux." },
      { title: "Relaxation totale", description: "Une heure et demie de soin et de bien-être." },
    ],
    pricing: {
      headline: "Tarif Manucure + Pédicure Complètes à Cotonou",
      note: "Tarifs à Academy Beauty Gate, Cadjehoun. Prix variable selon les finitions choisies.",
      items: [
        { label: "Manucure + Pédicure simples (1h30)", price: "À partir de 12 000 FCFA" },
        { label: "Avec vernis classique mains + pieds", price: "À partir de 15 000 FCFA" },
        { label: "Avec semi-permanent mains + pieds", price: "À partir de 18 000 FCFA" },
      ],
    },
    faq: [
      { question: "Peut-on choisir des couleurs différentes pour les mains et les pieds ?", answer: "Bien sûr, chaque main et pied peut avoir sa propre couleur." },
      { question: "Combien de temps dure le forfait ?", answer: "Environ 1h30 pour la combinaison complète mains + pieds." },
      { question: "Peut-on ajouter du nail art ?", answer: "Oui, le nail art est disponible en complément à 500 FCFA par ongle." },
      { question: "Faut-il réserver à l'avance ?", answer: "Fortement recommandé pour ce forfait, qui mobilise deux esthéticiennes simultanément." },
    ],
    cta: {
      headline: "Offrez-vous le forfait mains et pieds complet",
      description: "Réservez votre séance manucure + pédicure à Academy Beauty Gate, Cotonou.",
    },
  },
  // ─── MASSAGES ───────────────────────────────────────────────────────────────
  {
    slug: "gommage-corps-cotonou",
    title: "Gommage Corps au Sucre ou Sel Marin à Cotonou — Academy Beauty Gate",
    metaDescription: "Gommage corps au sucre ou sel marin à Cotonou : exfoliation douce et éclat de peau en 45 min. 15 000 FCFA à Academy Beauty Gate, Cadjehoun.",
    category: "massages",
    hero: {
      imageAlt: "Gommage corps sucre sel marin Cotonou",
      eyebrow: "Soin corps",
      headline: "Gommage Corps à Cotonou : peau lisse et lumineuse en 45 min",
      subheadline: "Exfoliation au sucre de canne ou sel marin pour éliminer les cellules mortes et révéler l'éclat naturel de votre peau.",
    },
    badges: [
      { icon: "✦", text: "Peau lisse et lumineuse" },
      { icon: "✦", text: "15 000 FCFA" },
      { icon: "✦", text: "45 minutes" },
    ],
    intro: {
      imageAlt: "Gommage corps exfoliation salon Cotonou",
      headline: "Le gommage corps : le premier pas vers une peau parfaite",
      description: "Le gommage corps au sucre de canne ou sel marin est une exfoliation naturelle qui élimine les cellules mortes, stimule le renouvellement cellulaire et prépare la peau à absorber les soins suivants.",
      listItems: [
        "Application du gommage sucre ou sel sur corps entier",
        "Massage circulaire pour une exfoliation optimale",
        "Focus sur les zones rugueuses (coudes, genoux, talons)",
        "Rinçage et élimination complète des résidus",
        "Peau douce, lisse et prête à recevoir un hydratant",
      ],
    },
    benefits: [
      { title: "Éclat immédiat", description: "La peau révèle sa luminosité naturelle dès la première séance." },
      { title: "Renouvellement cellulaire", description: "Stimule la production de nouvelles cellules pour une peau plus jeune." },
      { title: "Préparation optimale", description: "La peau gommée absorbe 3 fois mieux les soins hydratants." },
      { title: "Naturel", description: "Sucre de canne ou sel marin : des actifs naturels respectueux de la peau." },
    ],
    pricing: {
      headline: "Tarif Gommage Corps à Cotonou",
      note: "Tarifs à Academy Beauty Gate, Cadjehoun. Peut se combiner avec un massage.",
      items: [
        { label: "Gommage corps au sucre ou sel marin (45 min)", price: "15 000 FCFA" },
      ],
    },
    faq: [
      { question: "Quelle différence entre gommage au sucre et au sel marin ?", answer: "Le sucre est plus doux, idéal pour les peaux sensibles. Le sel marin est plus abrasif, parfait pour les peaux à tendance grasse ou très rugueuses." },
      { question: "À quelle fréquence faire un gommage ?", answer: "1 à 2 fois par mois pour maintenir une peau éclatante sans sur-exfolier." },
      { question: "Le gommage est-il douloureux ?", answer: "Non, le gommage est agréable. Une légère sensation de chaleur est normale." },
      { question: "Peut-on associer gommage et massage ?", answer: "Oui, notre forfait gommage + enveloppement combine les deux en 1h." },
    ],
    cta: {
      headline: "Révélez l'éclat de votre peau",
      description: "Réservez votre gommage corps à Academy Beauty Gate, Cotonou.",
    },
  },
  {
    slug: "gommage-enveloppement-cotonou",
    title: "Gommage + Enveloppement Hydratant à Cotonou — Academy Beauty Gate",
    metaDescription: "Gommage + enveloppement hydratant corps à Cotonou : rituel complet peau lisse et nourrie en 1h. 20 000 FCFA à Academy Beauty Gate, Cadjehoun.",
    category: "massages",
    hero: {
      imageAlt: "Gommage enveloppement hydratant corps Cotonou",
      eyebrow: "Rituel corps",
      headline: "Gommage + Enveloppement Hydratant à Cotonou : le duo gagnant",
      subheadline: "Exfoliez et nourrissez votre peau en un seul rituel d'une heure. Résultat : peau soyeuse, lumineuse et intensément hydratée.",
    },
    badges: [
      { icon: "✦", text: "Gommage + hydratation" },
      { icon: "✦", text: "20 000 FCFA" },
      { icon: "✦", text: "1 heure de rituel" },
    ],
    intro: {
      imageAlt: "Rituel gommage enveloppement corps salon Cotonou",
      headline: "Le rituel complet : exfoliation et hydratation en une heure",
      description: "Après le gommage qui prépare la peau, l'enveloppement hydratant diffuse des actifs nourrissants en profondeur grâce à la chaleur du wrap. Une transformation de peau en une séance.",
      listItems: [
        "Gommage corps complet au sucre ou sel marin",
        "Application d'un baume ou masque corps riche",
        "Enveloppement dans un film chauffant (30 min)",
        "Rinçage et élimination du masque",
        "Massage d'intégration avec huile nourrissante",
      ],
    },
    benefits: [
      { title: "Double action", description: "Exfoliation + hydratation profonde en une seule séance." },
      { title: "Absorption optimale", description: "Le gommage décuple l'absorption du baume hydratant." },
      { title: "Peau transformée", description: "Résultat visible immédiatement : peau soyeuse et lumineuse." },
      { title: "Durabilité", description: "L'hydratation se maintient plusieurs jours après le rituel." },
    ],
    pricing: {
      headline: "Tarif Gommage + Enveloppement à Cotonou",
      note: "Tarifs à Academy Beauty Gate, Cadjehoun. Cure de 3 rituels recommandée.",
      items: [
        { label: "Gommage + enveloppement hydratant (1h)", price: "20 000 FCFA" },
        { label: "Cure 3 rituels", price: "54 000 FCFA", note: "Économisez 6 000 FCFA" },
      ],
    },
    faq: [
      { question: "Quelle différence avec le gommage seul ?", answer: "L'enveloppement ajoute une phase de nutrition intensive que le gommage seul ne fournit pas." },
      { question: "Peut-on choisir le type de masque ?", answer: "Oui, nous proposons différents baumes selon votre type de peau (hydratant, raffermissant, drainant)." },
      { question: "Le rituel est-il adapté à toutes les peaux ?", answer: "Oui, nous adaptons les produits à votre type et sensibilité de peau." },
      { question: "Peut-on faire un massage après ?", answer: "Oui, le rituel se combine parfaitement avec un massage relaxant." },
    ],
    cta: {
      headline: "Offrez à votre peau un rituel de transformation",
      description: "Réservez votre gommage + enveloppement à Academy Beauty Gate, Cotonou.",
    },
  },
  {
    slug: "soin-dos-purifiant-cotonou",
    title: "Soin Dos Purifiant à Cotonou — Academy Beauty Gate",
    metaDescription: "Soin dos purifiant à Cotonou : nettoyage profond, exfoliation et hydratation du dos en 1h. 20 000 FCFA à Academy Beauty Gate, Cadjehoun.",
    category: "massages",
    hero: {
      imageAlt: "Soin dos purifiant Cotonou",
      eyebrow: "Soin du dos",
      headline: "Soin Dos Purifiant à Cotonou : un dos net, lisse et hydraté",
      subheadline: "Nettoyage profond, exfoliation et soin ciblé pour le dos. Élimine impuretés, points noirs et irrégularités en une séance d'une heure.",
    },
    badges: [
      { icon: "✦", text: "Nettoyage en profondeur" },
      { icon: "✦", text: "20 000 FCFA" },
      { icon: "✦", text: "1 heure" },
    ],
    intro: {
      imageAlt: "Soin dos purifiant traitement salon Cotonou",
      headline: "Le soin dos : parce que votre dos mérite autant d'attention que votre visage",
      description: "Le dos est souvent négligé malgré sa surface importante. Notre soin dos purifiant traite les imperfections (points noirs, boutons, pores dilatés) et hydrate cette zone difficile d'accès.",
      listItems: [
        "Nettoyage et démaquillage du dos",
        "Vapeur pour ouvrir les pores",
        "Gommage enzymatique doux",
        "Extraction des impuretés et purification",
        "Masque purifiant + hydratation finale",
      ],
    },
    benefits: [
      { title: "Purification", description: "Élimine points noirs, impuretés et excès de sébum." },
      { title: "Pores resserrés", description: "Le masque astringent minimise l'apparence des pores." },
      { title: "Peau lisse", description: "Exfoliation qui révèle une peau de dos lisse et unifiée." },
      { title: "Idéal avant un événement", description: "Parfait avant un mariage, une soirée ou un voyage à la plage." },
    ],
    pricing: {
      headline: "Tarif Soin Dos Purifiant à Cotonou",
      note: "Tarifs à Academy Beauty Gate, Cadjehoun.",
      items: [
        { label: "Soin dos purifiant (1h)", price: "20 000 FCFA" },
      ],
    },
    faq: [
      { question: "Le soin dos convient-il à l'acné du dos ?", answer: "Oui, notre soin est adapté aux peaux à tendance acnéique. Pour l'acné sévère, une consultation dermatologique est recommandée." },
      { question: "À quelle fréquence faire ce soin ?", answer: "1 fois par mois pour maintenir un dos net et hydraté." },
      { question: "La séance inclut-elle un massage ?", answer: "Un massage effleurage léger est inclus dans le soin. Pour un massage complet, optez pour le massage dos et nuque." },
      { question: "Peut-on combiner soin dos et massage ?", answer: "Oui, nous pouvons créer un forfait sur mesure selon votre demande." },
    ],
    cta: {
      headline: "Un dos impeccable pour vos tenues décolletées",
      description: "Réservez votre soin dos purifiant à Academy Beauty Gate, Cotonou.",
    },
  },
  {
    slug: "massage-dos-nuque-cotonou",
    title: "Massage Dos et Nuque à Cotonou — Academy Beauty Gate",
    metaDescription: "Massage dos et nuque à Cotonou : détente profonde des zones de tension en 30 min. 10 000 FCFA à Academy Beauty Gate, Cadjehoun, Bénin.",
    category: "massages",
    hero: {
      imageAlt: "Massage dos nuque Cotonou",
      eyebrow: "Massage ciblé",
      headline: "Massage Dos et Nuque à Cotonou : libérez vos tensions en 30 min",
      subheadline: "Massage ciblé sur les zones les plus sollicitées : dos, épaules et nuque. 30 minutes de détente intense pour 10 000 FCFA.",
    },
    badges: [
      { icon: "✦", text: "Anti-tensions efficace" },
      { icon: "✦", text: "10 000 FCFA" },
      { icon: "✦", text: "30 minutes" },
    ],
    intro: {
      imageAlt: "Massage dos nuque détente salon Cotonou",
      headline: "Le massage dos et nuque : la solution rapide contre les tensions",
      description: "Dos, épaules, nuque : ces zones concentrent la majorité des tensions musculaires liées au stress et à la sédentarité. Notre massage ciblé les libère en 30 minutes.",
      listItems: [
        "Effleurage général pour réchauffer les muscles",
        "Pétrissage profond des muscles paravertébraux",
        "Points de pression sur les nœuds de tension",
        "Travail spécifique de la nuque et des trapèzes",
        "Effleurage de clôture pour une détente totale",
      ],
    },
    benefits: [
      { title: "Soulagement rapide", description: "30 minutes suffisent pour une détente musculaire significative." },
      { title: "Anti-stress", description: "Réduit les tensions liées au travail et au stress quotidien." },
      { title: "Accessible", description: "10 000 FCFA pour un massage professionnel ciblé." },
      { title: "Cumulable", description: "La cure de 5 séances offre des résultats durables sur les tensions chroniques." },
    ],
    pricing: {
      headline: "Tarif Massage Dos et Nuque à Cotonou",
      note: "Tarifs à Academy Beauty Gate, Cadjehoun.",
      items: [
        { label: "Massage dos et nuque (30 min)", price: "10 000 FCFA" },
        { label: "Cure 5 séances", price: "40 000 FCFA", note: "Économisez 10 000 FCFA" },
      ],
    },
    faq: [
      { question: "Le massage dos et nuque est-il douloureux ?", answer: "Non, mais une légère sensibilité est normale sur les zones très tendues. Communiquez avec votre thérapeute sur l'intensité souhaitée." },
      { question: "Combien de fois par semaine peut-on faire ce massage ?", answer: "1 à 2 fois par semaine en cas de tensions chroniques, 1 fois par mois en entretien." },
      { question: "Peut-on faire un massage corps entier à la place ?", answer: "Oui, notre massage relaxant corps entier dure 1h pour 20 000 FCFA." },
      { question: "La cure de 5 séances est-elle utilisable par 2 personnes ?", answer: "Non, la cure est nominative." },
    ],
    cta: {
      headline: "Dites adieu aux tensions dorsales",
      description: "Réservez votre massage dos et nuque à Academy Beauty Gate, Cotonou.",
    },
  },
  {
    slug: "massage-relaxant-corps-entier-cotonou",
    title: "Massage Relaxant Corps Entier à Cotonou — Academy Beauty Gate",
    metaDescription: "Massage relaxant corps entier à Cotonou : détente profonde de la tête aux pieds en 1h. 20 000 FCFA à Academy Beauty Gate, Cadjehoun.",
    category: "massages",
    hero: {
      imageAlt: "Massage relaxant corps entier Cotonou",
      eyebrow: "Massage corps entier",
      headline: "Massage Relaxant Corps Entier à Cotonou : 1 heure de détente totale",
      subheadline: "Un voyage de relaxation de la tête aux pieds. Techniques suédoises douces pour un relâchement musculaire et nerveux complet.",
    },
    badges: [
      { icon: "✦", text: "Corps entier tête aux pieds" },
      { icon: "✦", text: "20 000 FCFA" },
      { icon: "✦", text: "1 heure" },
    ],
    intro: {
      imageAlt: "Massage relaxant corps entier salon Cotonou",
      headline: "Le massage relaxant : un voyage de bien-être pour tout le corps",
      description: "Notre massage relaxant corps entier utilise des techniques suédoises douces pour libérer les tensions musculaires, améliorer la circulation et induire un état de détente profonde.",
      listItems: [
        "Accueil et bilan des zones de tension",
        "Effleurage long et enveloppant sur tout le corps",
        "Pétrissage doux des groupes musculaires",
        "Travail des jambes, dos, bras et décolleté",
        "Massage du crâne et du visage en finition",
      ],
    },
    benefits: [
      { title: "Détente totale", description: "Corps et esprit relâchés pour un bien-être profond et durable." },
      { title: "Circulation améliorée", description: "Les manœuvres stimulent la circulation sanguine et lymphatique." },
      { title: "Anti-stress", description: "Réduit le cortisol et libère les endorphines naturelles du bien-être." },
      { title: "Sommeil amélioré", description: "Une séance régulière améliore significativement la qualité du sommeil." },
    ],
    pricing: {
      headline: "Tarif Massage Relaxant Corps Entier à Cotonou",
      note: "Tarifs à Academy Beauty Gate, Cadjehoun.",
      items: [
        { label: "Massage relaxant corps entier (1h)", price: "20 000 FCFA" },
        { label: "Forfait 3 massages relaxants", price: "50 000 FCFA", note: "Économisez 10 000 FCFA" },
      ],
    },
    faq: [
      { question: "Quels sont les bienfaits du massage relaxant ?", answer: "Réduction du stress, amélioration du sommeil, soulagement des tensions musculaires et sensation de bien-être général." },
      { question: "La séance inclut-elle un massage du visage ?", answer: "Oui, le massage du crâne et du visage est inclus en finition." },
      { question: "Doit-on rester nu pendant le massage ?", answer: "Vous restez toujours pudiquement couvert. Seule la zone massée est découverte." },
      { question: "À quelle fréquence faire ce massage ?", answer: "Une fois par semaine pour un stress intense, une fois par mois en entretien bien-être." },
    ],
    cta: {
      headline: "Offrez-vous une heure de bien-être absolu",
      description: "Réservez votre massage relaxant corps entier à Academy Beauty Gate, Cotonou.",
    },
  },
  {
    slug: "massage-tonique-cotonou",
    title: "Massage Tonique à Cotonou — Academy Beauty Gate",
    metaDescription: "Massage tonique corps entier à Cotonou : stimulation musculaire et drainage en 1h. 25 000 FCFA à Academy Beauty Gate, Cadjehoun, Bénin.",
    category: "massages",
    hero: {
      imageAlt: "Massage tonique corps Cotonou",
      eyebrow: "Massage dynamique",
      headline: "Massage Tonique à Cotonou : réveillez et tonifiez votre corps",
      subheadline: "Un massage dynamique aux techniques stimulantes pour tonifier les tissus, activer la circulation et revitaliser votre énergie.",
    },
    badges: [
      { icon: "✦", text: "Tonifiant et revitalisant" },
      { icon: "✦", text: "25 000 FCFA" },
      { icon: "✦", text: "1 heure" },
    ],
    intro: {
      imageAlt: "Massage tonique revitalisant corps Cotonou",
      headline: "Le massage tonique : énergisez votre corps et raffermissez votre peau",
      description: "Contrairement au massage relaxant, le massage tonique utilise des techniques plus dynamiques (palper-rouler, percussions, effleurages rapides) pour stimuler et tonifier les tissus.",
      listItems: [
        "Effleurages et frictions énergisantes",
        "Palper-rouler pour stimuler les tissus profonds",
        "Percussions musculaires et tapotements",
        "Drainage lymphatique léger",
        "Compression et relâchement pour revitaliser",
      ],
    },
    benefits: [
      { title: "Tonus amélioré", description: "Raffermit et tonifie les tissus cutanés et sous-cutanés." },
      { title: "Circulation boostée", description: "Active la microcirculation pour une meilleure oxygénation." },
      { title: "Anti-cellulite", description: "Le palper-rouler aide à réduire l'apparence de la cellulite." },
      { title: "Énergie retrouvée", description: "Ressortez dynamisée et revitalisée de la séance." },
    ],
    pricing: {
      headline: "Tarif Massage Tonique à Cotonou",
      note: "Tarifs à Academy Beauty Gate, Cadjehoun.",
      items: [
        { label: "Massage tonique (1h)", price: "25 000 FCFA" },
      ],
    },
    faq: [
      { question: "Le massage tonique est-il douloureux ?", answer: "Certaines techniques (palper-rouler) peuvent être intenses. Communiquez votre seuil de tolérance à la thérapeute." },
      { question: "Quelle est la différence avec le massage relaxant ?", answer: "Le tonique est plus dynamique et stimulant, le relaxant est doux et apaisant. Ils ont des objectifs différents." },
      { question: "Combien de séances pour voir des résultats anti-cellulite ?", answer: "Un minimum de 5 à 10 séances est recommandé pour un effet visible sur la cellulite." },
      { question: "Le massage tonique convient-il en cas de varices ?", answer: "En cas de varices, signalez-le : certaines zones seront évitées ou traitées plus doucement." },
    ],
    cta: {
      headline: "Réveillez votre corps avec le massage tonique",
      description: "Réservez votre séance à Academy Beauty Gate, Cotonou.",
    },
  },
  {
    slug: "massage-pierres-chaudes-cotonou",
    title: "Massage aux Pierres Chaudes à Cotonou — Academy Beauty Gate",
    metaDescription: "Massage aux pierres chaudes à Cotonou : détente profonde par la chaleur des basaltes en 1h. 30 000 FCFA à Academy Beauty Gate, Cadjehoun.",
    category: "massages",
    hero: {
      imageAlt: "Massage pierres chaudes basaltes Cotonou",
      eyebrow: "Massage premium",
      headline: "Massage Pierres Chaudes à Cotonou : la chaleur libératrice des basaltes",
      subheadline: "Les pierres de basalte chauffées pénètrent la chaleur en profondeur pour une détente musculaire incomparable. L'expérience SPA ultime.",
    },
    badges: [
      { icon: "✦", text: "Chaleur thérapeutique" },
      { icon: "✦", text: "30 000 FCFA" },
      { icon: "✦", text: "1 heure d'exception" },
    ],
    intro: {
      imageAlt: "Massage hot stones pierres chaudes salon Cotonou",
      headline: "Le massage aux pierres chaudes : une expérience sensorielle unique",
      description: "Les pierres de basalte volcanique, chauffées à 55-60°C, sont posées sur les points d'énergie du corps et utilisées comme outil de massage. La chaleur pénètre 3 fois plus profondément qu'un massage manuel.",
      listItems: [
        "Sélection et chauffage des pierres de basalte",
        "Placement des pierres sur les chakras et méridiens",
        "Massage avec les pierres sur dos et membres",
        "Alternance chaud et froid pour stimuler la circulation",
        "Enveloppement final et relaxation complète",
      ],
    },
    benefits: [
      { title: "Chaleur thérapeutique", description: "Pénètre 3 fois plus profondément qu'un massage à mains nues." },
      { title: "Tensions libérées", description: "La chaleur fond les nœuds de tension les plus tenaces." },
      { title: "Circulation boostée", description: "L'alternance chaud/froid active puissamment la microcirculation." },
      { title: "Bien-être durable", description: "Les effets relaxants se prolongent plusieurs jours après la séance." },
    ],
    pricing: {
      headline: "Tarif Massage Pierres Chaudes à Cotonou",
      note: "Tarifs à Academy Beauty Gate, Cadjehoun. Séance premium sur réservation.",
      items: [
        { label: "Massage aux pierres chaudes (1h)", price: "30 000 FCFA" },
      ],
    },
    faq: [
      { question: "Les pierres sont-elles trop chaudes ?", answer: "Non, nous contrôlons rigoureusement la température. En cas d'inconfort, les pierres sont retirées immédiatement." },
      { question: "Ce massage convient-il aux personnes sensibles à la chaleur ?", answer: "Les personnes avec problèmes cardiaques, fièvre ou grossesse avancée ne doivent pas pratiquer ce massage." },
      { question: "Les pierres sont-elles hygiéniques ?", answer: "Les pierres sont stérilisées entre chaque utilisation." },
      { question: "Peut-on combiner avec un gommage ?", answer: "Oui, le rituel corps complet (gommage + massage) est disponible à 30 000 FCFA." },
    ],
    cta: {
      headline: "Vivez une expérience de détente hors du commun",
      description: "Réservez votre massage aux pierres chaudes à Academy Beauty Gate, Cotonou.",
    },
  },
  {
    slug: "massage-jambes-legeres-cotonou",
    title: "Massage Jambes Légères à Cotonou — Academy Beauty Gate",
    metaDescription: "Massage jambes légères à Cotonou : drainage et soulagement des jambes lourdes en 30 min. 10 000 FCFA à Academy Beauty Gate, Cadjehoun.",
    category: "massages",
    hero: {
      imageAlt: "Massage jambes légères drainage Cotonou",
      eyebrow: "Massage ciblé jambes",
      headline: "Massage Jambes Légères à Cotonou : des jambes libérées en 30 min",
      subheadline: "Drainage lymphatique doux et massage circulatoire pour soulager les jambes lourdes, gonflées ou fatiguées.",
    },
    badges: [
      { icon: "✦", text: "Jambes soulagées immédiatement" },
      { icon: "✦", text: "10 000 FCFA" },
      { icon: "✦", text: "30 minutes" },
    ],
    intro: {
      imageAlt: "Drainage massage jambes légères salon Cotonou",
      headline: "Les jambes légères : un soulagement immédiat et durable",
      description: "La chaleur de Cotonou favorise la rétention d'eau et la sensation de jambes lourdes. Notre massage jambes légères cible la circulation veineuse et lymphatique pour un soulagement rapide.",
      listItems: [
        "Effleurages ascendants pour activer le retour veineux",
        "Drainage lymphatique manuel léger",
        "Massage des mollets et des chevilles",
        "Points de pression sur les zones de rétention",
        "Application d'un gel frais jambes légères",
      ],
    },
    benefits: [
      { title: "Soulagement immédiat", description: "Les jambes se sentent plus légères dès la fin de la séance." },
      { title: "Drainage", description: "Réduit la rétention d'eau et les gonflements." },
      { title: "Circulation améliorée", description: "Stimule le retour veineux, souvent insuffisant par la chaleur." },
      { title: "Prévention", description: "Pratiqué régulièrement, prévient la lourdeur chronique des jambes." },
    ],
    pricing: {
      headline: "Tarif Massage Jambes Légères à Cotonou",
      note: "Tarifs à Academy Beauty Gate, Cadjehoun.",
      items: [
        { label: "Massage jambes légères (30 min)", price: "10 000 FCFA" },
      ],
    },
    faq: [
      { question: "Ce massage convient-il aux personnes souffrant de varices ?", answer: "Il est adapté aux varices légères. Pour les cas sévères, consultez un médecin avant toute prestation." },
      { question: "Peut-on faire ce massage pendant la grossesse ?", answer: "Un massage doux des jambes est possible en grossesse. Signalez votre état à la thérapeute." },
      { question: "À quelle fréquence faire ce massage ?", answer: "1 à 2 fois par semaine en cas de jambes très lourdes, 2 fois par mois en entretien." },
      { question: "Le gel frais est-il inclus ?", answer: "Oui, l'application du gel jambes légères est incluse dans le prix." },
    ],
    cta: {
      headline: "Dites adieu aux jambes lourdes",
      description: "Réservez votre massage jambes légères à Academy Beauty Gate, Cotonou.",
    },
  },
  {
    slug: "massage-signature-cotonou",
    title: "Massage Signature à Cotonou — Academy Beauty Gate",
    metaDescription: "Massage signature Academy Beauty Gate à Cotonou : l'expérience unique de notre salon en 1h15. 35 000 FCFA à Cadjehoun, Bénin.",
    category: "massages",
    hero: {
      imageAlt: "Massage signature Academy Beauty Gate Cotonou",
      eyebrow: "L'exclusif Academy Beauty Gate",
      headline: "Massage Signature à Cotonou : l'expérience unique d'Academy Beauty Gate",
      subheadline: "Notre création exclusive qui combine les meilleures techniques du monde pour une expérience sensorielle et thérapeutique inégalée en 1h15.",
    },
    badges: [
      { icon: "✦", text: "Exclusif Academy Beauty Gate" },
      { icon: "✦", text: "35 000 FCFA" },
      { icon: "✦", text: "1h15 d'expérience unique" },
    ],
    intro: {
      imageAlt: "Massage signature exclusif salon Cotonou",
      headline: "Le massage signature : notre chef-d'œuvre sensoriel",
      description: "Le massage signature d'Academy Beauty Gate combine techniques suédoises, touches de massage balinais et points de pression shiatsu pour une expérience holistique unique. Une création exclusive qui vous transporte.",
      listItems: [
        "Rituel de bienvenue avec application d'huiles parfumées",
        "Effleurages suédois longs et enveloppants",
        "Pétrissage balinais sur les zones de tension",
        "Points de pression shiatsu sur les méridiens",
        "Massage du visage, cuir chevelu et finition aux bols tibétains",
      ],
    },
    benefits: [
      { title: "Expérience unique", description: "Une création exclusive que vous ne trouverez nulle part ailleurs à Cotonou." },
      { title: "Holistique", description: "Corps, esprit et énergie traités simultanément." },
      { title: "Profondeur inégalée", description: "La combinaison de techniques décuple les bienfaits." },
      { title: "Mémorable", description: "Une expérience que vous recommanderez à vos proches." },
    ],
    pricing: {
      headline: "Tarif Massage Signature à Cotonou",
      note: "Tarifs à Academy Beauty Gate, Cadjehoun. Sur réservation uniquement.",
      items: [
        { label: "Massage signature (1h15)", price: "35 000 FCFA" },
      ],
    },
    faq: [
      { question: "En quoi le massage signature est-il différent des autres ?", answer: "C'est une création exclusive qui combine trois disciplines de massage pour une expérience thérapeutique et sensorielle unique, impossible à trouver ailleurs." },
      { question: "Faut-il réserver à l'avance ?", answer: "Oui, le massage signature nécessite une réservation au moins 24h à l'avance." },
      { question: "Quelles huiles sont utilisées ?", answer: "Nous utilisons des huiles végétales bio (jojoba, argan, coco) enrichies d'huiles essentielles sélectionnées selon votre profil." },
      { question: "Peut-on offrir ce massage en cadeau ?", answer: "Oui, nous proposons des bons cadeaux pour le massage signature." },
    ],
    cta: {
      headline: "Vivez l'expérience unique du massage signature",
      description: "Réservez votre séance exclusive à Academy Beauty Gate, Cotonou.",
    },
  },
  {
    slug: "forfait-3-massages-relaxants-cotonou",
    title: "Forfait 3 Massages Relaxants Corps Entier à Cotonou — Academy Beauty Gate",
    metaDescription: "Forfait 3 massages relaxants corps entier à Cotonou : cure bien-être complète à 50 000 FCFA. Économisez 10 000 FCFA à Academy Beauty Gate, Cadjehoun.",
    category: "massages",
    hero: {
      imageAlt: "Forfait massages relaxants corps entier Cotonou",
      eyebrow: "Cure bien-être",
      headline: "Forfait 3 Massages Relaxants à Cotonou : la cure qui transforme",
      subheadline: "3 séances de massage relaxant corps entier pour des résultats durables sur le stress et les tensions. 50 000 FCFA — économisez 10 000 FCFA.",
    },
    badges: [
      { icon: "✦", text: "Économisez 10 000 FCFA" },
      { icon: "✦", text: "50 000 FCFA" },
      { icon: "✦", text: "3 × 1 heure" },
    ],
    intro: {
      imageAlt: "Cure massages bien-être salon Cotonou",
      headline: "La cure de 3 massages : des bienfaits qui se cumulent et durent",
      description: "Un massage ponctuel détend, mais une cure de 3 séances espacées d'une semaine à deux semaines produit des effets durables sur la gestion du stress, la qualité du sommeil et le tonus musculaire.",
      listItems: [
        "3 séances de massage relaxant corps entier d'1 heure",
        "Bilan des tensions à chaque séance",
        "Adaptation des techniques à votre évolution",
        "Conseils entre les séances pour prolonger les bienfaits",
        "Économie de 10 000 FCFA par rapport aux séances séparées",
      ],
    },
    benefits: [
      { title: "Économique", description: "50 000 FCFA au lieu de 60 000 FCFA : 10 000 FCFA d'économie." },
      { title: "Résultats durables", description: "3 séances créent des changements physiologiques durables dans le système nerveux." },
      { title: "Progression", description: "Chaque séance s'appuie sur la précédente pour approfondir les résultats." },
      { title: "Engagement bien-être", description: "Structurer sa routine bien-être avec une cure améliore l'adhérence." },
    ],
    pricing: {
      headline: "Tarif Forfait 3 Massages Relaxants à Cotonou",
      note: "Tarifs à Academy Beauty Gate, Cadjehoun. Valable 3 mois.",
      items: [
        { label: "Forfait 3 massages relaxants corps entier (3 × 1h)", price: "50 000 FCFA", note: "Économisez 10 000 FCFA" },
        { label: "Séance individuelle", price: "20 000 FCFA" },
      ],
    },
    faq: [
      { question: "Les 3 séances doivent-elles être prises à quelle fréquence ?", answer: "Idéalement 1 séance par semaine ou toutes les 2 semaines pour des résultats optimaux." },
      { question: "Le forfait est-il transférable ?", answer: "Non, le forfait est nominatif et ne peut être transféré." },
      { question: "Quelle est la durée de validité du forfait ?", answer: "3 mois à compter de la date d'achat." },
      { question: "Peut-on offrir ce forfait en cadeau ?", answer: "Oui, des bons cadeaux sont disponibles pour ce forfait." },
    ],
    cta: {
      headline: "Investissez dans votre bien-être avec la cure de 3 massages",
      description: "Réservez votre forfait à Academy Beauty Gate, Cotonou.",
    },
  },
  {
    slug: "cure-5-massages-dos-nuque-cotonou",
    title: "Cure 5 Massages Dos et Nuque à Cotonou — Academy Beauty Gate",
    metaDescription: "Cure 5 massages dos et nuque à Cotonou : traitement des tensions chroniques à 40 000 FCFA. Économisez 10 000 FCFA à Academy Beauty Gate, Cadjehoun.",
    category: "massages",
    hero: {
      imageAlt: "Cure massages dos nuque Cotonou",
      eyebrow: "Cure anti-tensions",
      headline: "Cure 5 Massages Dos et Nuque à Cotonou : victoire sur les tensions",
      subheadline: "5 séances ciblées dos et nuque pour traiter les tensions chroniques en profondeur. 40 000 FCFA — économisez 10 000 FCFA.",
    },
    badges: [
      { icon: "✦", text: "Économisez 10 000 FCFA" },
      { icon: "✦", text: "40 000 FCFA" },
      { icon: "✦", text: "5 × 30 minutes" },
    ],
    intro: {
      imageAlt: "Cure anti-tensions dos nuque salon Cotonou",
      headline: "La cure dos et nuque : le traitement complet des tensions chroniques",
      description: "Les tensions dorsales et cervicales chroniques nécessitent un traitement suivi. Notre cure de 5 séances agit en profondeur sur les muscles contracturés pour un soulagement durable.",
      listItems: [
        "5 séances de massage dos et nuque de 30 minutes",
        "Protocole progressif adapté à vos tensions",
        "Travail en profondeur des nœuds musculaires",
        "Conseils posturaux entre les séances",
        "Économie de 10 000 FCFA sur le prix à l'unité",
      ],
    },
    benefits: [
      { title: "Traitement ciblé", description: "5 séances pour traiter les tensions cervicales et dorsales à la racine." },
      { title: "Progression", description: "Chaque séance approfondit le relâchement des séances précédentes." },
      { title: "Économique", description: "40 000 FCFA au lieu de 50 000 FCFA pour 5 séances séparées." },
      { title: "Posture améliorée", description: "Des muscles détendus favorisent une meilleure posture au quotidien." },
    ],
    pricing: {
      headline: "Tarif Cure 5 Massages Dos et Nuque à Cotonou",
      note: "Tarifs à Academy Beauty Gate, Cadjehoun. Valable 3 mois.",
      items: [
        { label: "Cure 5 massages dos et nuque (5 × 30 min)", price: "40 000 FCFA", note: "Économisez 10 000 FCFA" },
        { label: "Séance individuelle dos et nuque", price: "10 000 FCFA" },
      ],
    },
    faq: [
      { question: "La cure est-elle adaptée aux douleurs chroniques ?", answer: "Oui, c'est l'indication principale. Pour des douleurs très intenses, consultez un médecin en parallèle." },
      { question: "À quelle fréquence prendre les séances ?", answer: "2 à 3 fois par semaine en phase intensive, puis 1 fois par semaine en entretien." },
      { question: "La cure est-elle nominative ?", answer: "Oui, elle ne peut être partagée ni transférée." },
      { question: "Quelle est la durée de validité de la cure ?", answer: "3 mois à compter de la première séance." },
    ],
    cta: {
      headline: "Traitez vos tensions chroniques avec la cure dos et nuque",
      description: "Réservez votre cure à Academy Beauty Gate, Cotonou.",
    },
  },
  {
    slug: "rituel-corps-complet-cotonou",
    title: "Rituel Corps Complet à Cotonou — Academy Beauty Gate",
    metaDescription: "Rituel corps complet (gommage + massage) à Cotonou : transformation totale en 1h. 30 000 FCFA à Academy Beauty Gate, Cadjehoun, Bénin.",
    category: "massages",
    hero: {
      imageAlt: "Rituel corps complet gommage massage Cotonou",
      eyebrow: "Rituel corps signature",
      headline: "Rituel Corps Complet à Cotonou : gommage + massage en 1 heure",
      subheadline: "Le duo parfait : exfoliez et détendez-vous dans un seul rituel luxueux. Peau lisse, corps détendu, esprit apaisé.",
    },
    badges: [
      { icon: "✦", text: "Gommage + massage inclus" },
      { icon: "✦", text: "30 000 FCFA" },
      { icon: "✦", text: "1 heure de luxe" },
    ],
    intro: {
      imageAlt: "Rituel complet corps gommage massage salon Cotonou",
      headline: "Le rituel corps complet : exfoliation et détente en une seule séance",
      description: "Notre rituel corps complet associe un gommage exfoliant et un massage relaxant pour une transformation globale. La peau est d'abord purifiée, puis les muscles sont libérés de toutes leurs tensions.",
      listItems: [
        "Gommage corps complet au sucre ou sel marin (20 min)",
        "Rinçage et préparation pour le massage",
        "Massage relaxant corps entier aux huiles précieuses (40 min)",
        "Absorption optimale des huiles sur peau exfoliée",
        "Finition et moment de relaxation complète",
      ],
    },
    benefits: [
      { title: "Rituel tout-en-un", description: "Gommage et massage en une seule séance pour un maximum d'efficacité." },
      { title: "Synergie des effets", description: "La peau gommée absorbe 3x mieux les huiles de massage." },
      { title: "Complet", description: "Corps entièrement traité : peau, muscles et circulation." },
      { title: "Avantageux", description: "30 000 FCFA au lieu de 35 000 FCFA pour les deux prestations séparées." },
    ],
    pricing: {
      headline: "Tarif Rituel Corps Complet à Cotonou",
      note: "Tarifs à Academy Beauty Gate, Cadjehoun. Sur réservation recommandée.",
      items: [
        { label: "Rituel corps complet gommage + massage (1h)", price: "30 000 FCFA" },
      ],
    },
    faq: [
      { question: "Quel type de massage est inclus dans le rituel ?", answer: "Un massage relaxant corps entier de 40 minutes aux huiles précieuses." },
      { question: "Peut-on choisir le type de gommage ?", answer: "Oui, sucre de canne (doux) ou sel marin (plus exfoliant) selon votre type de peau." },
      { question: "Ce rituel est-il disponible en duo pour deux personnes ?", answer: "Contactez-nous : nous proposons des formules duo sur demande." },
      { question: "Faut-il réserver à l'avance ?", answer: "Oui, le rituel corps complet nécessite une réservation au moins 24h à l'avance." },
    ],
    cta: {
      headline: "Offrez-vous le rituel corps complet d'Academy Beauty Gate",
      description: "Réservez votre rituel à Cotonou — Academy Beauty Gate, Cadjehoun.",
    },
  },
  {
    slug: "nettoyage-express-visage-cotonou",
    title: "Nettoyage Express Visage — Cotonou",
    metaDescription: "Nettoyage express du visage à Cotonou Cadjehoun. Soin rapide 30 min pour une peau nette et purifiée. Academy Beauty Gate — 10 000 FCFA.",
    category: "visage",
    hero: {
      imageAlt: "Nettoyage express visage à Cotonou",
      eyebrow: "Soin Visage Express",
      headline: "Nettoyage Express du Visage à Cotonou",
      subheadline: "Un soin rapide et efficace pour éliminer impuretés et excès de sébum en seulement 30 minutes.",
    },
    badges: [
      { icon: "✦", text: "30 minutes" },
      { icon: "✦", text: "10 000 FCFA" },
      { icon: "✦", text: "Cadjehoun, Cotonou" },
      { icon: "✦", text: "Peau nette instantanément" },
    ],
    intro: {
      imageAlt: "Soin nettoyage express visage Cotonou",
      headline: "Un coup de frais pour votre peau en 30 min",
      description: "Le nettoyage express est le soin idéal pour les peaux qui ont besoin d'un coup d'éclat rapide. En 30 minutes, notre esthéticienne réalise un nettoyage en profondeur adapté à votre type de peau, sans prise de tête.",
      listItems: [
        "Démaquillage et nettoyage de la peau",
        "Exfoliation douce pour éliminer les cellules mortes",
        "Extraction des comédons si nécessaire",
        "Application d'un masque purifiant express",
        "Soin hydratant de finition",
      ],
    },
    benefits: [
      { title: "Résultat immédiat", description: "Votre peau ressort nette, lumineuse et fraîche dès la première séance." },
      { title: "Rapide et accessible", description: "En seulement 30 minutes, profitez d'un soin professionnel sans bloquer votre journée." },
      { title: "Protocole adapté", description: "Chaque soin est personnalisé selon votre type de peau pour un résultat optimal." },
      { title: "Tarif abordable à Cotonou", description: "Un soin de qualité à 10 000 FCFA, accessible à toutes à Academy Beauty Gate Cadjehoun." },
    ],
    pricing: {
      headline: "Tarif Nettoyage Express",
      note: "Séance individuelle, sans engagement.",
      items: [
        { label: "Nettoyage Express Visage", price: "10 000 FCFA", note: "30 min" },
      ],
    },
    faq: [
      { question: "Le nettoyage express convient-il à tous les types de peau ?", answer: "Oui, le protocole est adapté à chaque type de peau — sèche, mixte, grasse ou sensible." },
      { question: "À quelle fréquence faire un nettoyage express ?", answer: "Idéalement toutes les 2 à 4 semaines pour maintenir une peau propre et lumineuse." },
      { question: "Faut-il prendre rendez-vous à l'avance ?", answer: "Oui, nous recommandons de réserver votre créneau en avance, surtout en fin de semaine." },
      { question: "Où se trouve Academy Beauty Gate à Cotonou ?", answer: "Le salon est situé à Cadjehoun, Cotonou. Contactez-nous pour l'adresse exacte et les horaires." },
    ],
    cta: { headline: "Réservez votre Nettoyage Express", description: "Prenez rendez-vous dès aujourd'hui à Academy Beauty Gate Cadjehoun et offrez à votre peau un soin express professionnel." },
  },
  {
    slug: "nettoyage-purifiant-visage-cotonou",
    title: "Nettoyage Purifiant Visage — Cotonou",
    metaDescription: "Nettoyage purifiant du visage à Cotonou Cadjehoun. Soin 45 min pour peaux mixtes à grasses. Academy Beauty Gate — 15 000 FCFA.",
    category: "visage",
    hero: {
      image: "/image.png",
      imageAlt: "Nettoyage purifiant visage Cotonou",
      eyebrow: "Soin Visage Purifiant",
      headline: "Nettoyage Purifiant Visage à Cotonou",
      subheadline: "Un soin ciblé de 45 minutes pour purifier en profondeur les peaux à tendance grasse et mixte.",
    },
    badges: [
      { icon: "✦", text: "45 minutes" },
      { icon: "✦", text: "15 000 FCFA" },
      { icon: "✦", text: "Cadjehoun, Cotonou" },
      { icon: "✦", text: "Peaux mixtes à grasses" },
    ],
    intro: {
      image: "/image.png",
      imageAlt: "Nettoyage purifiant visage Cadjehoun",
      headline: "Purifiez votre peau en profondeur",
      description: "Le nettoyage purifiant va plus loin que le simple nettoyage express. Ce soin de 45 minutes cible les pores dilatés, les points noirs et les excès de sébum pour une peau nette, mattifiée et équilibrée.",
      listItems: [
        "Nettoyage et démaquillage en douceur",
        "Vapeur pour ouvrir les pores",
        "Extraction minutieuse des comédons",
        "Masque purifiant et séborégulateur",
        "Soin de finition matifiant et apaisant",
      ],
    },
    benefits: [
      { title: "Pores désencombrés", description: "Les impuretés et points noirs sont extraits avec précision pour des pores visiblement réduits." },
      { title: "Effet matifiant durable", description: "La production de sébum est régulée pour un teint mat et homogène qui dure." },
      { title: "Peau assainie", description: "Le protocole élimine les bactéries responsables des imperfections pour une peau saine." },
      { title: "Soin professionnel à Cotonou", description: "Un nettoyage digne des meilleurs instituts, réalisé par nos esthéticiennes diplômées à Cadjehoun." },
    ],
    pricing: {
      headline: "Tarif Nettoyage Purifiant",
      note: "Séance individuelle, sans engagement.",
      items: [
        { label: "Nettoyage Purifiant Visage", price: "15 000 FCFA", note: "45 min" },
      ],
    },
    faq: [
      { question: "Ce soin est-il adapté aux peaux acnéiques ?", answer: "Oui, le nettoyage purifiant est particulièrement recommandé pour les peaux acnéiques ou à tendance grasse." },
      { question: "La peau est-elle rouge après le soin ?", answer: "Une légère rougeur peut apparaître après l'extraction, elle disparaît en quelques heures." },
      { question: "Peut-on se maquiller après un nettoyage purifiant ?", answer: "Nous recommandons d'attendre 24h avant d'appliquer du maquillage pour laisser la peau respirer." },
      { question: "Combien de séances faut-il pour voir des résultats durables ?", answer: "Un nettoyage mensuel régulier suffit à maintenir une peau purifiée et équilibrée." },
    ],
    cta: { headline: "Réservez votre Nettoyage Purifiant", description: "Dites adieu aux pores bouchés. Prenez rendez-vous à Academy Beauty Gate Cadjehoun, Cotonou." },
  },
  {
    slug: "soin-peaux-imperfections-cotonou",
    title: "Soin Peaux à Imperfections — Cotonou",
    metaDescription: "Soin ciblé peaux à imperfections à Cotonou. Protocole anti-acné et anti-taches 1h. Academy Beauty Gate Cadjehoun — 20 000 FCFA.",
    category: "visage",
    hero: {
      imageAlt: "Soin peaux à imperfections Cotonou",
      eyebrow: "Soin Anti-Imperfections",
      headline: "Soin Peaux à Imperfections à Cotonou",
      subheadline: "Un protocole professionnel d'1 heure pour traiter les boutons, taches et irrégularités de la peau au Bénin.",
    },
    badges: [
      { icon: "✦", text: "1 heure" },
      { icon: "✦", text: "20 000 FCFA" },
      { icon: "✦", text: "Cadjehoun, Cotonou" },
      { icon: "✦", text: "Anti-acné & anti-taches" },
    ],
    intro: {
      imageAlt: "Soin anti-imperfections visage Bénin",
      headline: "Traitement ciblé contre les imperfections cutanées",
      description: "Ce soin d'une heure est formulé pour les peaux sujettes aux boutons, comédons, taches et irrégularités. Grâce à des actifs purifiants et régulateurs, il rééquilibre la peau et réduit visiblement les imperfections.",
      listItems: [
        "Diagnostic cutané personnalisé",
        "Nettoyage profond et vapeur",
        "Exfoliation chimique douce aux AHA/BHA",
        "Soins actifs anti-bactériens et anti-inflammatoires",
        "Masque ciblé et sérum anti-taches en finition",
      ],
    },
    benefits: [
      { title: "Réduction visible des imperfections", description: "Les boutons et comédons sont traités dès la première séance pour une peau plus nette." },
      { title: "Atténuation des taches", description: "Les actifs dépigmentants ciblent les taches post-acnéiques pour un teint plus homogène." },
      { title: "Peau rééquilibrée", description: "Le protocole restaure l'équilibre hydrolipidique pour limiter les récidives." },
      { title: "Expertise locale à Cotonou", description: "Nos esthéticiennes connaissent les problématiques des peaux africaines et métissées à Cadjehoun." },
    ],
    pricing: {
      headline: "Tarif Soin Peaux à Imperfections",
      note: "Séance individuelle. Cure possible pour un suivi optimal.",
      items: [
        { label: "Soin Peaux à Imperfections", price: "20 000 FCFA", note: "1h" },
      ],
    },
    faq: [
      { question: "Ce soin remplace-t-il un traitement dermatologique ?", answer: "Non, il complète le suivi médical. Pour une acné sévère, consultez un dermatologue en parallèle." },
      { question: "Combien de séances pour voir une vraie différence ?", answer: "3 à 5 séances espacées d'une semaine permettent d'observer une amélioration significative." },
      { question: "Ce soin est-il douloureux ?", answer: "L'exfoliation et l'extraction peuvent être légèrement inconfortables, mais le soin reste tolérable." },
      { question: "Peut-on faire ce soin en plein soleil beninois ?", answer: "Oui, mais nous recommandons une protection solaire SPF 50 après chaque séance." },
    ],
    cta: { headline: "Traitez vos imperfections à Cotonou", description: "Prenez rendez-vous à Academy Beauty Gate Cadjehoun pour un soin adapté à votre peau." },
  },
  {
    slug: "glow-fresh-soin-visage-cotonou",
    title: "Soin Glow & Fresh Visage — Cotonou",
    metaDescription: "Soin Glow & Fresh visage à Cotonou Cadjehoun. Retrouvez éclat et fraîcheur en 1h. Academy Beauty Gate Bénin — 25 000 FCFA.",
    category: "visage",
    hero: {
      imageAlt: "Soin Glow Fresh visage Cotonou",
      eyebrow: "Soin Éclat & Fraîcheur",
      headline: "Soin Glow & Fresh à Cotonou",
      subheadline: "Un soin luminosité d'une heure pour redonner éclat, fraîcheur et bonne mine à votre visage.",
    },
    badges: [
      { icon: "✦", text: "1 heure" },
      { icon: "✦", text: "25 000 FCFA" },
      { icon: "✦", text: "Cadjehoun, Cotonou" },
      { icon: "✦", text: "Effet glow immédiat" },
    ],
    intro: {
      imageAlt: "Soin éclat visage Cotonou Bénin",
      headline: "Le soin qui réveille votre éclat naturel",
      description: "Le Glow & Fresh est le soin signature pour toutes celles qui veulent retrouver une peau lumineuse, fraîche et rayonnante. Formulé avec des actifs vitaminés et éclaircissants, il unifie le teint et booste la luminosité.",
      listItems: [
        "Nettoyage doux et préparation de la peau",
        "Exfoliation éclat aux enzymes de fruits",
        "Massage drainage et relax facial",
        "Masque vitaminé et glow",
        "Sérum éclaircissant et crème lumière en finition",
      ],
    },
    benefits: [
      { title: "Glow instantané", description: "Votre peau est lumineuse et rayonnante dès la sortie du salon, sans filtre." },
      { title: "Teint unifié", description: "Les taches légères et les irrégularités de teint s'atténuent pour un teint homogène." },
      { title: "Effet fraîcheur longue durée", description: "La peau est hydratée en profondeur pour un effet frais qui dure plusieurs jours." },
      { title: "Le soin préféré à Cadjehoun", description: "Un des soins les plus demandés à Academy Beauty Gate pour son résultat spectaculaire." },
    ],
    pricing: {
      headline: "Tarif Soin Glow & Fresh",
      note: "Séance individuelle. Idéal avant un événement.",
      items: [
        { label: "Glow & Fresh", price: "25 000 FCFA", note: "1h" },
      ],
    },
    faq: [
      { question: "Puis-je faire ce soin avant un mariage ou événement ?", answer: "Absolument, c'est même le soin idéal la veille d'un grand événement pour un éclat naturel." },
      { question: "Ce soin convient-il aux peaux mates et foncées ?", answer: "Oui, les actifs sont sélectionnés pour sublimer toutes les carnations, y compris les teints foncés." },
      { question: "À quelle fréquence faire le Glow & Fresh ?", answer: "Une fois par mois suffit pour maintenir un éclat permanent tout au long de l'année." },
      { question: "Y a-t-il des effets secondaires ?", answer: "Aucun. Le soin est doux et sans irritation, adapté même aux peaux sensibles." },
    ],
    cta: { headline: "Rayonnez avec le soin Glow & Fresh", description: "Réservez votre séance à Academy Beauty Gate Cadjehoun, Cotonou et repartez avec un éclat naturel." },
  },
  {
    slug: "hydra-boost-visage-cotonou",
    title: "Soin Hydra Boost Visage — Cotonou",
    metaDescription: "Soin Hydra Boost visage à Cotonou. Hydratation intense 1h15 pour peaux déshydratées. Academy Beauty Gate Cadjehoun — 30 000 FCFA.",
    category: "visage",
    hero: {
      imageAlt: "Soin Hydra Boost visage Cotonou",
      eyebrow: "Soin Hydratation Intense",
      headline: "Soin Hydra Boost Visage à Cotonou",
      subheadline: "Un soin hydratant haute concentration d'1h15 pour restaurer le confort et l'élasticité des peaux déshydratées au Bénin.",
    },
    badges: [
      { icon: "✦", text: "1h15" },
      { icon: "✦", text: "30 000 FCFA" },
      { icon: "✦", text: "Cadjehoun, Cotonou" },
      { icon: "✦", text: "Peaux déshydratées" },
    ],
    intro: {
      imageAlt: "Hydratation intense visage Bénin",
      headline: "Rechargez l'hydratation de votre peau",
      description: "Sous le soleil et la chaleur de Cotonou, les peaux se déshydratent rapidement. Le soin Hydra Boost apporte une hydratation intense en profondeur grâce à un protocole concentré en acide hyaluronique, aloé vera et actifs repulpants.",
      listItems: [
        "Diagnostic hydratation et bilan cutané",
        "Nettoyage doux et exfoliation hydratante",
        "Application d'un sérum acide hyaluronique haute concentration",
        "Masque tissu hydratant et repulpant",
        "Crème barrière et SPF de finition",
      ],
    },
    benefits: [
      { title: "Hydratation profonde 72h", description: "Les actifs pénètrent dans les couches profondes pour une hydratation qui dure jusqu'à 72 heures." },
      { title: "Peau repulpée et lissée", description: "Les ridules de déshydratation s'atténuent pour une peau visiblement plus jeune et lisse." },
      { title: "Confort cutané restauré", description: "Les tiraillements, démangeaisons et inconforts liés à la sécheresse disparaissent." },
      { title: "Adapté au climat béninois", description: "Formulé pour contrer les effets de la chaleur et de l'air climatisé sur la peau à Cotonou." },
    ],
    pricing: {
      headline: "Tarif Hydra Boost",
      note: "Séance individuelle. Recommandé en cure de 3 séances.",
      items: [
        { label: "Hydra Boost Visage", price: "30 000 FCFA", note: "1h15" },
      ],
    },
    faq: [
      { question: "Mon visage est tiraillé malgré une bonne crème hydratante, ce soin peut-il aider ?", answer: "Oui, le soin Hydra Boost agit en profondeur là où les crèmes topiques ne pénètrent pas." },
      { question: "Combien de temps dure l'effet de ce soin ?", answer: "L'effet hydratant se ressent jusqu'à 72h, avec un bénéfice cumulatif si vous faites des séances régulières." },
      { question: "Ce soin convient-il aux peaux grasses déshydratées ?", answer: "Absolument. Une peau peut être grasse ET déshydratée, le Hydra Boost rééquilibre les deux." },
      { question: "Où réserver ce soin à Cotonou ?", answer: "À Academy Beauty Gate, quartier Cadjehoun, Cotonou. Réservez par téléphone ou WhatsApp." },
    ],
    cta: { headline: "Offrez à votre peau l'hydratation qu'elle mérite", description: "Réservez votre Hydra Boost à Academy Beauty Gate Cadjehoun, Cotonou." },
  },
  {
    slug: "soin-anti-age-regenerant-visage-cotonou",
    title: "Soin Anti-Âge Régénérant Visage — Cotonou",
    metaDescription: "Soin anti-âge régénérant visage à Cotonou Cadjehoun. Protocole raffermissant 1h15. Academy Beauty Gate Bénin — 35 000 FCFA.",
    category: "visage",
    hero: {
      imageAlt: "Soin anti-âge visage Cotonou",
      eyebrow: "Soin Anti-Âge",
      headline: "Soin Anti-Âge Régénérant à Cotonou",
      subheadline: "Un protocole intensif d'1h15 pour régénérer, raffermir et lutter activement contre les signes du vieillissement cutané.",
    },
    badges: [
      { icon: "✦", text: "1h15" },
      { icon: "✦", text: "35 000 FCFA" },
      { icon: "✦", text: "Cadjehoun, Cotonou" },
      { icon: "✦", text: "Raffermissant & régénérant" },
    ],
    intro: {
      imageAlt: "Soin anti-âge régénérant Bénin",
      headline: "Combattez les signes du temps avec efficacité",
      description: "Le soin Anti-Âge Régénérant est notre protocole le plus complet pour lutter contre les rides, le relâchement et le manque d'éclat. Formulé avec des actifs de haute performance — rétinol, peptides, vitamines C et E — il stimule la régénération cellulaire.",
      listItems: [
        "Bilan cutané et diagnostic vieillissement",
        "Nettoyage et préparation de la peau",
        "Peeling doux et exfoliation régénérante",
        "Massage techniques lifting et drainage lymphatique",
        "Masque anti-âge et sérum peptides en finition",
      ],
    },
    benefits: [
      { title: "Rides atténuées visiblement", description: "Les rides d'expression et ridules sont lissées grâce aux actifs régénérants et tenseurs." },
      { title: "Fermeté retrouvée", description: "La peau est raffermie et les contours du visage redéfinis pour un effet lift naturel." },
      { title: "Régénération cellulaire stimulée", description: "Le renouvellement cellulaire est accéléré pour une peau plus jeune, lisse et lumineuse." },
      { title: "Résultats progressifs et durables", description: "En cure de séances régulières, les résultats sont cumulatifs et visibles sur le long terme." },
    ],
    pricing: {
      headline: "Tarif Soin Anti-Âge Régénérant",
      note: "Séance individuelle. Cure recommandée pour des résultats durables.",
      items: [
        { label: "Anti-Âge Régénérant", price: "35 000 FCFA", note: "1h15" },
      ],
    },
    faq: [
      { question: "À partir de quel âge peut-on faire ce soin anti-âge ?", answer: "Dès 30 ans en prévention, et à tout âge pour traiter les signes du vieillissement déjà installés." },
      { question: "Combien de séances pour voir une réelle différence ?", answer: "Dès la 2e séance, les résultats sont visibles. Une cure de 5 séances offre un effet durable." },
      { question: "Ce soin est-il compatible avec d'autres traitements ?", answer: "Oui, il se combine très bien avec des injections ou des soins complémentaires. Signalez tout traitement en cours." },
      { question: "Est-ce que ce soin convient aux peaux pigmentées ?", answer: "Absolument. Nos protocoles sont adaptés aux peaux africaines et métissées pour un résultat optimal." },
    ],
    cta: { headline: "Révélez une peau plus jeune à Cotonou", description: "Réservez votre soin Anti-Âge Régénérant à Academy Beauty Gate, Cadjehoun." },
  },
  {
    slug: "bb-glow-visage-cotonou",
    title: "BB Glow Visage — Cotonou",
    metaDescription: "BB Glow visage à Cotonou Cadjehoun. Traitement semi-permanent pour un teint parfait naturel. Academy Beauty Gate Bénin — 35 000 FCFA.",
    category: "visage",
    hero: {
      imageAlt: "BB Glow visage Cotonou",
      eyebrow: "Traitement BB Glow",
      headline: "BB Glow Visage à Cotonou",
      subheadline: "Le traitement semi-permanent qui donne l'illusion d'un fond de teint naturel pour un teint parfait sans maquillage.",
    },
    badges: [
      { icon: "✦", text: "1 heure" },
      { icon: "✦", text: "35 000 FCFA" },
      { icon: "✦", text: "Cadjehoun, Cotonou" },
      { icon: "✦", text: "Teint parfait semi-permanent" },
    ],
    intro: {
      imageAlt: "BB Glow traitement Bénin",
      headline: "Le teint parfait naturel sans fond de teint",
      description: "Le BB Glow est une technique de micro-infusion qui incorpore dans la peau des pigments naturels et des actifs soins pour un effet fond de teint naturel semi-permanent. Idéal pour les peaux avec des irrégularités de teint, des taches ou des rougeurs.",
      listItems: [
        "Application d'une crème anesthésiante (confort optimal)",
        "Nettoyage et préparation de la peau",
        "Micro-infusion du sérum BB Glow adapté à votre carnation",
        "Activation des actifs soins par micro-needling doux",
        "Soin apaisant et protecteur de finition",
      ],
    },
    benefits: [
      { title: "Teint unifié semi-permanent", description: "Taches, rougeurs et irrégularités sont camouflées pour un teint uniforme qui dure plusieurs semaines." },
      { title: "Hydratation et soins simultanés", description: "Au-delà de l'effet cosmétique, les actifs soins améliorent la qualité et la texture de la peau." },
      { title: "Résultat naturel", description: "L'effet est subtil et naturel — votre peau semble parfaite sans paraître maquillée." },
      { title: "Technique maîtrisée à Cotonou", description: "Academy Beauty Gate propose le BB Glow avec des protocoles rigoureux d'hygiène et de sécurité." },
    ],
    pricing: {
      headline: "Tarif BB Glow",
      note: "Résultat visible 4 à 8 semaines. Retouche recommandée.",
      items: [
        { label: "BB Glow Visage", price: "35 000 FCFA", note: "1h" },
      ],
    },
    faq: [
      { question: "Le BB Glow est-il douloureux ?", answer: "Non, une crème anesthésiante est appliquée avant le soin pour garantir votre confort tout au long du traitement." },
      { question: "Combien de temps dure le résultat du BB Glow ?", answer: "Le résultat dure en général de 4 à 8 semaines selon votre type de peau et votre routine." },
      { question: "Faut-il plusieurs séances ?", answer: "Une séance suffit pour un résultat visible. 2 séances espacées de 2 semaines optimisent l'effet." },
      { question: "Y a-t-il une période d'éviction sociale ?", answer: "La peau peut être légèrement rosée pendant 24h. Vous pouvez reprendre vos activités normalement." },
    ],
    cta: { headline: "Obtenez un teint parfait avec le BB Glow", description: "Réservez votre séance BB Glow à Academy Beauty Gate Cadjehoun, Cotonou." },
  },
  {
    slug: "dermaplaning-visage-cotonou",
    title: "Dermaplaning Visage — Cotonou",
    metaDescription: "Dermaplaning visage à Cotonou Cadjehoun. Exfoliation mécanique et duvet facial 1h. Academy Beauty Gate Bénin — 30 000 FCFA.",
    category: "visage",
    hero: {
      imageAlt: "Dermaplaning visage Cotonou",
      eyebrow: "Dermaplaning",
      headline: "Dermaplaning Visage à Cotonou",
      subheadline: "Une exfoliation mécanique de précision pour éliminer duvet et cellules mortes et révéler une peau ultra-lisse.",
    },
    badges: [
      { icon: "✦", text: "1 heure" },
      { icon: "✦", text: "30 000 FCFA" },
      { icon: "✦", text: "Cadjehoun, Cotonou" },
      { icon: "✦", text: "Peau ultra-lisse" },
    ],
    intro: {
      imageAlt: "Dermaplaning Cotonou Bénin",
      headline: "Révélez une peau incroyablement lisse",
      description: "Le dermaplaning utilise un scalpel stérile à 45° pour éliminer en douceur le duvet facial et les cellules mortes en surface. Résultat : une peau d'une douceur soyeuse, un teint lumineux et une meilleure absorption des produits de soin.",
      listItems: [
        "Nettoyage et dégraissage complet de la peau",
        "Dermaplaning professionnel au scalpel stérile",
        "Exfoliation complémentaire enzymatique",
        "Masque calmant et apaisant post-geste",
        "Sérum hydratant et crème protectrice de finition",
      ],
    },
    benefits: [
      { title: "Peau incroyablement lisse", description: "La texture de la peau est transformée — lisse comme de la soie, le résultat est immédiat." },
      { title: "Teint lumineux et unifié", description: "Sans cellules mortes ni duvet, le teint paraît lumineux et les produits pénètrent mieux." },
      { title: "Maquillage sublimé", description: "Le fond de teint s'applique de manière fluide et uniforme sur une peau parfaitement exfoliée." },
      { title: "Geste technique et sécurisé", description: "Réalisé par nos esthéticiennes formées spécifiquement au dermaplaning à Academy Beauty Gate." },
    ],
    pricing: {
      headline: "Tarif Dermaplaning",
      note: "Séance individuelle. Éviter soleil direct 48h après.",
      items: [
        { label: "Dermaplaning Visage", price: "30 000 FCFA", note: "1h" },
      ],
    },
    faq: [
      { question: "Le duvet repoussera-t-il plus épais après le dermaplaning ?", answer: "Non, c'est un mythe. Le duvet repousse exactement de la même manière, sans devenir plus épais ni plus foncé." },
      { question: "Ce soin convient-il à tous les types de peau ?", answer: "Il est déconseillé sur les peaux acnéiques actives, irritées ou avec des lésions ouvertes." },
      { question: "À quelle fréquence peut-on faire un dermaplaning ?", answer: "Toutes les 3 à 4 semaines, selon la pousse du duvet et votre objectif de soin." },
      { question: "Peut-on combiner le dermaplaning avec d'autres soins ?", answer: "Oui, il se combine très bien avec un soin hydratant ou un peeling léger lors de la même séance." },
    ],
    cta: { headline: "Découvrez le dermaplaning à Cotonou", description: "Prenez rendez-vous à Academy Beauty Gate Cadjehoun pour une peau d'une douceur incomparable." },
  },
  {
    slug: "cure-soins-eclat-anti-age-3-seances-cotonou",
    title: "Cure Soins Éclat & Anti-Âge 3 Séances — Cotonou",
    metaDescription: "Cure soins éclat et anti-âge 3 séances à Cotonou. Protocole complet pour un résultat durable. Academy Beauty Gate — 80 000 FCFA.",
    category: "visage",
    hero: {
      imageAlt: "Cure soins éclat anti-âge Cotonou",
      eyebrow: "Cure 3 Séances",
      headline: "Cure Éclat & Anti-Âge 3 Séances à Cotonou",
      subheadline: "Un programme de 3 séances combinées pour un éclat retrouvé et une action anti-âge profonde et durable.",
    },
    badges: [
      { icon: "✦", text: "3 séances" },
      { icon: "✦", text: "80 000 FCFA" },
      { icon: "✦", text: "Cadjehoun, Cotonou" },
      { icon: "✦", text: "Résultats durables" },
    ],
    intro: {
      imageAlt: "Cure éclat anti-âge Bénin",
      headline: "Un vrai programme pour transformer votre peau",
      description: "La cure Éclat & Anti-Âge en 3 séances est conçue pour les femmes qui veulent des résultats visibles et durables. Chaque séance s'appuie sur la précédente pour amplifier les effets : luminosité, fermeté, réduction des rides.",
      listItems: [
        "Bilan initial personnalisé et programme adapté",
        "Séance 1 : nettoyage profond et boost éclat",
        "Séance 2 : exfoliation régénérante et actifs anti-âge",
        "Séance 3 : masque liftant et soin régénérant intensif",
        "Conseils personnalisés routine à domicile",
      ],
    },
    benefits: [
      { title: "Résultats amplifiés par la cure", description: "Les effets se cumulent d'une séance à l'autre pour un résultat bien supérieur à une séance unique." },
      { title: "Économie par rapport aux séances individuelles", description: "La cure offre un tarif avantageux par rapport à 3 séances réservées séparément." },
      { title: "Suivi personnalisé", description: "Nos esthéticiennes ajustent le protocole entre chaque séance en fonction de l'évolution de votre peau." },
      { title: "Transformation visible en 3 semaines", description: "En 3 séances espacées d'une semaine, la transformation est notable et appréciée par votre entourage." },
    ],
    pricing: {
      headline: "Tarif Cure 3 Séances",
      note: "Séances à planifier sur 3 semaines consécutives.",
      items: [
        { label: "Cure Éclat & Anti-Âge — 3 séances", price: "80 000 FCFA", note: "3 séances" },
      ],
    },
    faq: [
      { question: "Les séances de la cure sont-elles identiques ?", answer: "Non, chaque séance est progressive et complémentaire pour maximiser les résultats." },
      { question: "Peut-on étaler les séances sur plus de 3 semaines ?", answer: "Oui, les séances peuvent être espacées de 1 à 2 semaines selon votre disponibilité." },
      { question: "La cure est-elle utilisable comme cadeau ?", answer: "Absolument, nous proposons des cartes cadeaux. Idéal pour offrir à une proche à Cotonou." },
      { question: "Faut-il continuer avec une cure de 5 séances après ?", answer: "Si vous souhaitez prolonger les résultats, la cure 5 séances est le prolongement idéal." },
    ],
    cta: { headline: "Commencez votre cure Éclat & Anti-Âge", description: "Réservez votre programme 3 séances à Academy Beauty Gate Cadjehoun, Cotonou." },
  },
  {
    slug: "cure-soins-eclat-anti-age-5-seances-cotonou",
    title: "Cure Soins Éclat & Anti-Âge 5 Séances — Cotonou",
    metaDescription: "Cure soins éclat et anti-âge 5 séances à Cotonou. Programme intensif pour une transformation profonde. Academy Beauty Gate — 140 000 FCFA.",
    category: "visage",
    hero: {
      imageAlt: "Cure 5 séances éclat anti-âge Cotonou",
      eyebrow: "Cure 5 Séances",
      headline: "Cure Éclat & Anti-Âge 5 Séances à Cotonou",
      subheadline: "Le programme intensif de 5 séances pour une transformation profonde, un éclat maximal et une action anti-âge durable.",
    },
    badges: [
      { icon: "✦", text: "5 séances" },
      { icon: "✦", text: "140 000 FCFA" },
      { icon: "✦", text: "Cadjehoun, Cotonou" },
      { icon: "✦", text: "Transformation maximale" },
    ],
    intro: {
      imageAlt: "Cure 5 séances anti-âge Bénin",
      headline: "Le programme le plus complet pour votre peau",
      description: "La cure Éclat & Anti-Âge 5 séances est notre programme phare pour celles qui veulent une vraie transformation. Cinq séances progressives et complémentaires, entièrement personnalisées pour votre peau, avec un suivi rigoureux à chaque étape.",
      listItems: [
        "Bilan cutané approfondi et programme personnalisé",
        "Séances alternant soins éclat et actifs anti-âge",
        "Protocoles progressifs adaptés à l'évolution de la peau",
        "Soins à domicile recommandés entre les séances",
        "Bilan final et programme d'entretien personnalisé",
      ],
    },
    benefits: [
      { title: "Transformation profonde et durable", description: "5 séances pour une amélioration en profondeur de la texture, du teint et de la fermeté." },
      { title: "Meilleure économie de la gamme", description: "Le coût par séance est le plus avantageux de nos cures, pour un résultat maximum." },
      { title: "Protocole évolutif", description: "Chaque séance est ajustée selon les résultats obtenus pour un programme 100% personnalisé." },
      { title: "Confiance en soi retrouvée", description: "Nos clientes témoignent d'une vraie transformation visible et d'un regain de confiance après la cure." },
    ],
    pricing: {
      headline: "Tarif Cure 5 Séances",
      note: "Cure à planifier sur 5 à 8 semaines selon disponibilité.",
      items: [
        { label: "Cure Éclat & Anti-Âge — 5 séances", price: "140 000 FCFA", note: "5 séances" },
      ],
    },
    faq: [
      { question: "Quelle différence entre la cure 3 séances et la cure 5 séances ?", answer: "La cure 5 séances est plus complète, avec des protocoles plus variés et un résultat plus profond et durable." },
      { question: "Peut-on payer en plusieurs fois ?", answer: "Contactez-nous, nous sommes ouverts à discuter des modalités de paiement selon votre situation." },
      { question: "Ces séances sont-elles transférables à quelqu'un d'autre ?", answer: "Non, les séances d'une cure sont nominatives car le protocole est personnalisé à votre peau." },
      { question: "Y a-t-il un délai de validité pour utiliser les séances ?", answer: "Les séances doivent être utilisées dans les 3 mois suivant l'achat de la cure." },
    ],
    cta: { headline: "Transformez votre peau avec la cure 5 séances", description: "Réservez votre programme intensif à Academy Beauty Gate Cadjehoun, Cotonou." },
  },
  {
    slug: "cure-soins-dermo-esthetiques-3-seances-cotonou",
    title: "Cure Soins Dermo-Esthétiques 3 Séances — Cotonou",
    metaDescription: "Cure soins dermo-esthétiques 3 séances à Cotonou. Protocole médico-esthétique pour peaux à problèmes. Academy Beauty Gate — 100 000 FCFA.",
    category: "visage",
    hero: {
      imageAlt: "Cure dermo-esthétique 3 séances Cotonou",
      eyebrow: "Cure Dermo-Esthétique",
      headline: "Cure Dermo-Esthétique 3 Séances à Cotonou",
      subheadline: "Un programme de 3 séances dermo-esthétiques pour traiter en profondeur les problématiques cutanées complexes.",
    },
    badges: [
      { icon: "✦", text: "3 séances" },
      { icon: "✦", text: "100 000 FCFA" },
      { icon: "✦", text: "Cadjehoun, Cotonou" },
      { icon: "✦", text: "Soins médico-esthétiques" },
    ],
    intro: {
      imageAlt: "Soins dermo-esthétiques Cotonou Bénin",
      headline: "L'alliance du soin et de la dermatologie esthétique",
      description: "Les soins dermo-esthétiques combinent expertise esthétique et actifs dermo-cosmétiques de haute concentration pour traiter les problématiques cutanées complexes : hyperpigmentation, acné persistante, vieillissement avancé. La cure 3 séances initie une transformation profonde.",
      listItems: [
        "Consultation et diagnostic dermo-esthétique",
        "Séances avec actifs dermo-cosmétiques haute performance",
        "Peelings chimiques doux adaptés à votre peau",
        "Traitements ciblés imperfections, taches ou rides",
        "Protocole à domicile complémentaire personnalisé",
      ],
    },
    benefits: [
      { title: "Actifs de haute efficacité", description: "Les formules dermo-esthétiques contiennent des concentrations supérieures aux soins classiques." },
      { title: "Traitement des problématiques complexes", description: "Hyperpigmentation, mélasma, acné kystique — ce programme traite ce que les soins standards ne peuvent résoudre." },
      { title: "Résultats mesurables", description: "Chaque séance est documentée pour suivre objectivement les progrès de votre peau." },
      { title: "Expertise dermo-esthétique à Cotonou", description: "Academy Beauty Gate dispose des équipements et formations pour des soins dermo-esthétiques de qualité au Bénin." },
    ],
    pricing: {
      headline: "Tarif Cure Dermo-Esthétique 3 Séances",
      note: "Programme sur 3 à 6 semaines. Eviction solaire obligatoire.",
      items: [
        { label: "Cure Dermo-Esthétique — 3 séances", price: "100 000 FCFA", note: "3 séances" },
      ],
    },
    faq: [
      { question: "Quelle différence avec la cure Éclat & Anti-Âge ?", answer: "La cure dermo-esthétique utilise des actifs plus puissants, adaptés aux problématiques cutanées plus sévères." },
      { question: "Y a-t-il une période de récupération ?", answer: "Selon le protocole, une légère desquamation de 2 à 5 jours peut survenir après les séances." },
      { question: "Faut-il une protection solaire obligatoire ?", answer: "Oui, une protection SPF 50 est impérative après chaque séance et pendant toute la durée de la cure." },
      { question: "Ce programme convient-il pour traiter le mélasma au Bénin ?", answer: "Oui, nous avons des protocoles spécifiques pour traiter le mélasma et l'hyperpigmentation fréquents en zone tropicale." },
    ],
    cta: { headline: "Traitez vos problèmes cutanés en profondeur", description: "Réservez votre cure dermo-esthétique 3 séances à Academy Beauty Gate Cadjehoun, Cotonou." },
  },
  {
    slug: "cure-soins-dermo-esthetiques-5-seances-cotonou",
    title: "Cure Soins Dermo-Esthétiques 5 Séances — Cotonou",
    metaDescription: "Cure soins dermo-esthétiques 5 séances à Cotonou. Programme intensif médico-esthétique. Academy Beauty Gate — 170 000 FCFA.",
    category: "visage",
    hero: {
      imageAlt: "Cure dermo-esthétique 5 séances Cotonou",
      eyebrow: "Cure Dermo-Esthétique Intensive",
      headline: "Cure Dermo-Esthétique 5 Séances à Cotonou",
      subheadline: "Le programme dermo-esthétique intensif de 5 séances pour une transformation cutanée profonde et des résultats exceptionnels.",
    },
    badges: [
      { icon: "✦", text: "5 séances" },
      { icon: "✦", text: "170 000 FCFA" },
      { icon: "✦", text: "Cadjehoun, Cotonou" },
      { icon: "✦", text: "Résultats exceptionnels" },
    ],
    intro: {
      imageAlt: "Cure dermo-esthétique intensive Bénin",
      headline: "Le programme dermo-esthétique le plus complet",
      description: "La cure dermo-esthétique 5 séances représente notre engagement le plus abouti envers la transformation cutanée. Conçu pour les cas les plus complexes, ce programme intensif combine plusieurs technologies et actifs pour des résultats dépassant ce que tout autre traitement peut offrir.",
      listItems: [
        "Consultation approfondie et plan de traitement sur mesure",
        "5 séances progressives avec protocoles évolutifs",
        "Combinaison de peelings, soins actifs et techniques avancées",
        "Suivi photo de l'évolution entre chaque séance",
        "Kit de soins à domicile et programme post-cure",
      ],
    },
    benefits: [
      { title: "Transformation exceptionnelle", description: "5 séances intensives pour une amélioration radicale des problématiques cutanées les plus sévères." },
      { title: "Technologie et expertise combinées", description: "Plusieurs techniques et actifs sont combinés pour une efficacité maximale." },
      { title: "Résultats photographiés et mesurés", description: "Le suivi photo permet d'apprécier objectivement et de quantifier les progrès réalisés." },
      { title: "Programme post-cure inclus", description: "Un programme d'entretien à domicile est fourni pour prolonger et maintenir les résultats obtenus." },
    ],
    pricing: {
      headline: "Tarif Cure Dermo-Esthétique 5 Séances",
      note: "Programme sur 6 à 10 semaines. Protection solaire obligatoire.",
      items: [
        { label: "Cure Dermo-Esthétique — 5 séances", price: "170 000 FCFA", note: "5 séances" },
      ],
    },
    faq: [
      { question: "Pour quelles problématiques ce programme est-il le plus adapté ?", answer: "Hyperpigmentation sévère, acné kystique persistante, vieillissement avancé, mélasma — toutes les problématiques complexes." },
      { question: "Doit-on arrêter ce programme si des effets indésirables apparaissent ?", answer: "En cas d'irritation inhabituelle, nous adaptons le protocole. La communication avec votre esthéticienne est essentielle." },
      { question: "Ce programme est-il disponible avec paiement échelonné ?", answer: "Nous étudions les demandes au cas par cas. Contactez-nous pour en discuter." },
      { question: "Après la cure, faut-il continuer avec des soins d'entretien ?", answer: "Oui, un soin mensuel d'entretien est recommandé pour préserver les résultats de la cure." },
    ],
    cta: { headline: "Le meilleur pour votre peau à Cotonou", description: "Réservez votre cure dermo-esthétique 5 séances à Academy Beauty Gate Cadjehoun." },
  },
  {
    slug: "abonnement-mensuel-soins-visage-cotonou",
    title: "Abonnement Mensuel Soins Visage — Cotonou",
    metaDescription: "Abonnement mensuel soins visage à Cotonou. 2 soins par mois pour une peau toujours parfaite. Academy Beauty Gate Cadjehoun — 30 000 FCFA/mois.",
    category: "visage",
    hero: {
      imageAlt: "Abonnement soins visage Cotonou",
      eyebrow: "Abonnement Mensuel",
      headline: "Abonnement Mensuel Soins Visage à Cotonou",
      subheadline: "Profitez de 2 soins visage par mois pour maintenir une peau toujours impeccable à un tarif préférentiel.",
    },
    badges: [
      { icon: "✦", text: "2 soins/mois" },
      { icon: "✦", text: "30 000 FCFA/mois" },
      { icon: "✦", text: "Cadjehoun, Cotonou" },
      { icon: "✦", text: "Tarif membre exclusif" },
    ],
    intro: {
      imageAlt: "Abonnement beauté visage Bénin",
      headline: "Votre rituel beauté mensuel à prix membre",
      description: "L'abonnement mensuel soins visage est la solution idéale pour les femmes qui veulent une peau toujours parfaite sans se soucier du budget. Pour 30 000 FCFA par mois, vous bénéficiez de 2 soins visage personnalisés réalisés par nos esthéticiennes.",
      listItems: [
        "2 soins visage par mois au choix dans la gamme",
        "Accès prioritaire aux créneaux de réservation",
        "Suivi personnalisé de l'évolution de votre peau",
        "Remise de 10% sur les produits vendus en salon",
        "Accès aux soins découverte en avant-première",
      ],
    },
    benefits: [
      { title: "Économie sur le long terme", description: "2 soins mensuels pour 30 000 FCFA représentent une économie significative par rapport aux séances individuelles." },
      { title: "Peau toujours impeccable", description: "Un entretien régulier tous les 15 jours maintient votre peau nette, hydratée et lumineuse en permanence." },
      { title: "Suivi personnalisé continu", description: "Votre esthéticienne connaît votre peau et adapte chaque séance à son évolution." },
      { title: "Avantages membres exclusifs", description: "En tant que membre, vous bénéficiez de tarifs préférentiels et d'accès prioritaire à nos nouveautés." },
    ],
    pricing: {
      headline: "Tarif Abonnement Mensuel",
      note: "Engagement mensuel renouvelable. Résiliation possible.",
      items: [
        { label: "Abonnement Mensuel Soins Visage (2 soins/mois)", price: "30 000 FCFA/mois" },
      ],
    },
    faq: [
      { question: "Puis-je choisir les soins inclus dans mon abonnement ?", answer: "Oui, vous choisissez parmi les soins de la gamme standard. Certains soins premium nécessitent un supplément." },
      { question: "Les soins non utilisés un mois peuvent-ils être reportés ?", answer: "Non, les séances non utilisées dans le mois ne sont pas reportables. Planifiez bien vos créneaux." },
      { question: "Comment résilier l'abonnement ?", answer: "L'abonnement est sans engagement long terme. Un préavis de 15 jours avant le renouvellement suffit." },
      { question: "Y a-t-il un abonnement similaire pour d'autres soins ?", answer: "Contactez-nous pour connaître nos formules abonnement disponibles pour d'autres catégories de soins." },
    ],
    cta: { headline: "Rejoignez le club beauté Academy Beauty Gate", description: "Souscrivez à votre abonnement mensuel soins visage à Cadjehoun, Cotonou." },
  },
  // ─── MAQUILLAGE ────────────────────────────────────────────────────────────────
  {
    slug: "pose-faux-cils-cotonou",
    title: "Pose de Faux Cils — Cotonou",
    metaDescription: "Pose de faux cils à Cotonou Cadjehoun. Résultat naturel ou intense en 15 min. Academy Beauty Gate Bénin — 3 000 FCFA.",
    category: "maquillage",
    hero: {
      imageAlt: "Pose faux cils Cotonou",
      eyebrow: "Maquillage Yeux",
      headline: "Pose de Faux Cils à Cotonou",
      subheadline: "Un regard intensifié en 15 minutes grâce à une pose de faux cils précise et professionnelle à Cadjehoun.",
    },
    badges: [
      { icon: "✦", text: "15 minutes" },
      { icon: "✦", text: "3 000 FCFA" },
      { icon: "✦", text: "Cadjehoun, Cotonou" },
      { icon: "✦", text: "Regard magnifié" },
    ],
    intro: {
      imageAlt: "Faux cils pose professionnelle Cotonou",
      headline: "Un regard de star en 15 minutes",
      description: "La pose de faux cils est l'accessoire maquillage incontournable pour intensifier le regard sans effort. En 15 minutes, nos maquilleuses posent des faux cils adaptés à la forme de vos yeux et à l'effet souhaité — naturel ou glamour.",
      listItems: [
        "Choix du modèle de faux cils selon vos yeux",
        "Préparation et nettoyage de la zone des cils",
        "Application précise à la colle hypoallergénique",
        "Ajustement et finition pour un rendu parfait",
        "Conseil sur l'entretien et le retrait",
      ],
    },
    benefits: [
      { title: "Résultat immédiat", description: "Votre regard est transformé en 15 minutes chrono, idéal avant un événement ou une sortie." },
      { title: "Larges choix de modèles", description: "Naturel, dramatique, cat eye, demi-cils — nous avons le modèle pour chaque forme d'yeux." },
      { title: "Pose professionnelle", description: "Nos maquilleuses assurent une pose parfaitement symétrique et confortable." },
      { title: "Tarif accessible à Cotonou", description: "Sublimez votre regard pour seulement 3 000 FCFA à Academy Beauty Gate Cadjehoun." },
    ],
    pricing: {
      headline: "Tarif Pose de Faux Cils",
      note: "Tarif hors maquillage complet.",
      items: [
        { label: "Pose de Faux Cils", price: "3 000 FCFA", note: "15 min" },
      ],
    },
    faq: [
      { question: "Les faux cils posés peuvent-ils endommager mes vrais cils ?", answer: "Non, avec une colle de qualité et une pose professionnelle, vos cils naturels ne sont pas abîmés." },
      { question: "Combien de temps tiennent les faux cils ?", answer: "Les faux cils bande tiennent une journée. Pour un résultat qui dure, optez pour des extensions de cils." },
      { question: "Puis-je avoir une pose de faux cils avec mes lunettes ?", answer: "Oui, nous sélectionnons des modèles adaptés à la forme de votre monture." },
      { question: "Ce service est-il disponible sans rendez-vous ?", answer: "Oui, pour une pose express, vous pouvez parfois venir sans rendez-vous selon la disponibilité." },
    ],
    cta: { headline: "Magnifiez votre regard à Cotonou", description: "Réservez votre pose de faux cils à Academy Beauty Gate Cadjehoun, Bénin." },
  },
  {
    slug: "makeup-nude-cotonou",
    title: "Make-up NUDE — Cotonou",
    metaDescription: "Make-up NUDE naturel à Cotonou Cadjehoun. Maquillage discret et élégant 30 min. Academy Beauty Gate Bénin — 6 000 FCFA.",
    category: "maquillage",
    hero: {
      imageAlt: "Make-up nude naturel Cotonou",
      eyebrow: "Maquillage Naturel",
      headline: "Make-up NUDE à Cotonou",
      subheadline: "Un maquillage naturel et lumineux en 30 minutes pour sublimer votre beauté naturelle sans en faire trop.",
    },
    badges: [
      { icon: "✦", text: "30 minutes" },
      { icon: "✦", text: "6 000 FCFA" },
      { icon: "✦", text: "Cadjehoun, Cotonou" },
      { icon: "✦", text: "Beauté naturelle" },
    ],
    intro: {
      imageAlt: "Maquillage nude professionnel Bénin",
      headline: "Le maquillage « no-makeup makeup »",
      description: "Le make-up NUDE est l'art de paraître naturellement belle. Teint unifié, yeux discrets mais définis, lèvres légèrement colorées — ce maquillage donne l'impression que vous ne portez rien tout en magnifiant vos traits.",
      listItems: [
        "Préparation et hydratation de la peau",
        "Fond de teint léger et correcteur ciblé",
        "Contouring discret et blush naturel",
        "Maquillage yeux subtil et mascara",
        "Rouge à lèvres ou gloss nude assorti",
      ],
    },
    benefits: [
      { title: "Rendu naturel et élégant", description: "Le make-up nude met en valeur votre beauté naturelle sans effet masque ni artifice excessif." },
      { title: "Adapté à toutes les carnations", description: "Nos maquilleuses maîtrisent les nuances pour toutes les teintes de peau, des plus claires aux plus foncées." },
      { title: "Parfait pour le quotidien", description: "Idéal pour le bureau, un déjeuner ou une occasion semi-formelle à Cotonou." },
      { title: "Rapid et accessible", description: "30 minutes pour un résultat professionnel à seulement 6 000 FCFA à Cadjehoun." },
    ],
    pricing: {
      headline: "Tarif Make-up NUDE",
      note: "Retouches et accessoires non inclus.",
      items: [
        { label: "Make-up NUDE", price: "6 000 FCFA", note: "30 min" },
      ],
    },
    faq: [
      { question: "Ce maquillage est-il adapté aux grandes occasions ?", answer: "Il convient aux occasions semi-formelles. Pour un mariage ou un gala, préférez le make-up SOIR." },
      { question: "Puis-je demander un résultat plus couvrant en restant dans le style nude ?", answer: "Oui, le maquillage peut être plus ou moins couvrant selon votre préférence tout en restant naturel." },
      { question: "Les produits utilisés sont-ils adaptés aux peaux noires et métissées ?", answer: "Absolument. Nous disposons d'une gamme inclusive adaptée à toutes les carnations." },
      { question: "Puis-je prendre un cours de make-up nude pour le faire moi-même ?", answer: "Nous proposons des cours particuliers de maquillage. Demandez-nous lors de votre visite." },
    ],
    cta: { headline: "Votre maquillage naturel à Cotonou", description: "Réservez votre make-up NUDE à Academy Beauty Gate Cadjehoun, Bénin." },
  },
  {
    slug: "makeup-jour-cotonou",
    title: "Make-up JOUR — Cotonou",
    metaDescription: "Make-up JOUR à Cotonou Cadjehoun. Maquillage journée élégant et tenu 45 min. Academy Beauty Gate Bénin — 8 000 FCFA.",
    category: "maquillage",
    hero: {
      imageAlt: "Make-up jour Cotonou",
      eyebrow: "Maquillage Journée",
      headline: "Make-up JOUR à Cotonou",
      subheadline: "Un maquillage élégant et tenu pour la journée, réalisé en 45 minutes par nos maquilleuses professionnelles.",
    },
    badges: [
      { icon: "✦", text: "45 minutes" },
      { icon: "✦", text: "8 000 FCFA" },
      { icon: "✦", text: "Cadjehoun, Cotonou" },
      { icon: "✦", text: "Tenu toute la journée" },
    ],
    intro: {
      imageAlt: "Maquillage journée professionnel Cotonou",
      headline: "Beau du matin au soir sous le soleil de Cotonou",
      description: "Le make-up JOUR est un maquillage complet, élégant et tenu conçu pour résister à la chaleur et à l'humidité du Bénin. Plus élaboré que le NUDE, il offre une couverture complète et une finition soignée pour les journées chargées.",
      listItems: [
        "Base de maquillage longue tenue et primer",
        "Fond de teint couvrant et setting powder",
        "Contouring, blush et illuminateur structurants",
        "Yeux définis avec fard, eyeliner et mascara waterproof",
        "Rouge à lèvres longue tenue au choix",
      ],
    },
    benefits: [
      { title: "Tenue optimale face à la chaleur", description: "Nos produits sélectionnés résistent à la chaleur et à la transpiration du climat béninois." },
      { title: "Couverture et fini soigné", description: "Un maquillage complet qui couvre et uniformise parfaitement tout en restant naturel." },
      { title: "Polyvalent et adaptatif", description: "Ce make-up convient au bureau, aux réunions, aux sorties shopping ou aux déjeuners d'affaires." },
      { title: "Maquilleuses professionnelles à Cotonou", description: "Nos maquilleuses formées aux techniques modernes réalisent un maquillage impeccable à Cadjehoun." },
    ],
    pricing: {
      headline: "Tarif Make-up JOUR",
      note: "Faux cils en supplément si souhaité.",
      items: [
        { label: "Make-up JOUR", price: "8 000 FCFA", note: "45 min" },
      ],
    },
    faq: [
      { question: "Ce maquillage convient-il pour une réunion professionnelle importante ?", answer: "Absolument. Le make-up JOUR est idéal pour un look professionnel élégant et soigné." },
      { question: "Comment le make-up JOUR diffère-t-il du NUDE ?", answer: "Plus complet et couvrant, le JOUR inclut contouring, yeux définis et rouge à lèvres pour un résultat plus affirmé." },
      { question: "Les produits tiennent-ils bien en pleine chaleur de Cotonou ?", answer: "Oui, nous sélectionnons des produits longue tenue adaptés aux conditions climatiques du Bénin." },
      { question: "Puis-je apporter mes propres produits de maquillage ?", answer: "Nous préférons utiliser nos produits professionnels pour garantir la qualité, mais vous pouvez le mentionner." },
    ],
    cta: { headline: "Un maquillage parfait pour votre journée", description: "Réservez votre make-up JOUR à Academy Beauty Gate Cadjehoun, Cotonou." },
  },
  {
    slug: "makeup-soir-cotonou",
    title: "Make-up SOIR — Cotonou",
    metaDescription: "Make-up SOIR glamour à Cotonou Cadjehoun. Maquillage de soirée intense et spectaculaire 1h. Academy Beauty Gate — 10 000 FCFA.",
    category: "maquillage",
    hero: {
      imageAlt: "Make-up soir glamour Cotonou",
      eyebrow: "Maquillage de Soirée",
      headline: "Make-up SOIR à Cotonou",
      subheadline: "Un maquillage de soirée glamour et spectaculaire en 1 heure pour briller lors de vos grandes occasions à Cotonou.",
    },
    badges: [
      { icon: "✦", text: "1 heure" },
      { icon: "✦", text: "10 000 FCFA" },
      { icon: "✦", text: "Cadjehoun, Cotonou" },
      { icon: "✦", text: "Soirée & événements" },
    ],
    intro: {
      imageAlt: "Maquillage soirée professionnel Bénin",
      headline: "Brillez à toutes vos soirées et événements",
      description: "Le make-up SOIR est notre maquillage signature pour les grandes occasions : mariages, baptêmes, galas, soirées privées. En une heure, nos maquilleuses créent un look intense, structuré et spectaculaire qui vous fera briller toute la nuit.",
      listItems: [
        "Préparation et primer longue tenue",
        "Fond de teint HD et fixation professionnelle",
        "Contouring sculptant et illuminateur statement",
        "Yeux : fards pigmentés, eyeliner graphic ou smoky, faux cils",
        "Lèvres affirmées — rouge statement ou gloss intense",
      ],
    },
    benefits: [
      { title: "Look spectaculaire et mémorable", description: "Un maquillage qui se voit, qui se remarque et dont vous vous souviendrez longtemps." },
      { title: "Tenue exceptionnelle toute la nuit", description: "Le protocole de fixation garantit une tenue impeccable de la cérémonie jusqu'à l'aube." },
      { title: "Personnalisé selon votre tenue", description: "Votre maquilleuse adapte les couleurs et l'intensité à votre tenue et à votre type d'événement." },
      { title: "Pour toutes les grandes occasions à Cotonou", description: "Mariages, anniversaires, galas — nous habillons votre visage pour vos plus beaux moments au Bénin." },
    ],
    pricing: {
      headline: "Tarif Make-up SOIR",
      note: "Faux cils inclus dans la prestation.",
      items: [
        { label: "Make-up SOIR", price: "10 000 FCFA", note: "1h — faux cils inclus" },
      ],
    },
    faq: [
      { question: "Faut-il réserver longtemps à l'avance pour un maquillage de mariage ?", answer: "Oui, pour les mariages et grandes occasions, réservez au moins 2 semaines à l'avance." },
      { question: "Faites-vous des essais maquillage avant le jour J ?", answer: "Nous proposons des séances d'essai. Contactez-nous pour planifier un essai avant votre événement." },
      { question: "Puis-je avoir une mise en beauté à domicile à Cotonou ?", answer: "Oui, nous proposons des prestations à domicile pour les mariées et les groupes. Tarif sur devis." },
      { question: "Le maquillage SOIR convient-il aussi pour un photoshoot ?", answer: "Absolument, le make-up SOIR est idéal pour les shootings photo grâce à son rendu intense et photogénique." },
    ],
    cta: { headline: "Brillez à vos plus belles soirées à Cotonou", description: "Réservez votre make-up SOIR à Academy Beauty Gate Cadjehoun, Bénin." },
  },
  {
    slug: "microblading-sourcils-cotonou",
    title: "Microblading Sourcils — Cotonou",
    metaDescription: "Microblading sourcils à Cotonou Cadjehoun. Sourcils parfaits semi-permanents 2h. Academy Beauty Gate Bénin — 40 000 FCFA.",
    category: "maquillage",
    hero: {
      imageAlt: "Microblading sourcils Cotonou",
      eyebrow: "Maquillage Semi-Permanent",
      headline: "Microblading Sourcils à Cotonou",
      subheadline: "Des sourcils parfaitement dessinés et semi-permanents grâce à la technique du microblading, réalisé en 2 heures.",
    },
    badges: [
      { icon: "✦", text: "2 heures" },
      { icon: "✦", text: "40 000 FCFA" },
      { icon: "✦", text: "Cadjehoun, Cotonou" },
      { icon: "✦", text: "Sourcils semi-permanents" },
    ],
    intro: {
      imageAlt: "Microblading sourcils semi-permanent Bénin",
      headline: "Des sourcils parfaits au réveil, chaque jour",
      description: "Le microblading est une technique de maquillage semi-permanent qui dessine des poils virtuels au tracé millimétrique pour recréer des sourcils naturels et parfaits. Le résultat dure de 12 à 18 mois. Fini les sourcils dessinés au crayon chaque matin.",
      listItems: [
        "Consultation et dessin de la forme idéale selon votre visage",
        "Application de crème anesthésiante",
        "Microblading au stylet avec pigments naturels",
        "Ajustement et vérification de la symétrie",
        "Instructions de cicatrisation et soins post-traitement",
      ],
    },
    benefits: [
      { title: "Résultat naturel et ultra-réaliste", description: "Les poils virtuels sont dessinés un par un pour un rendu indiscernable de vrais sourcils." },
      { title: "Gain de temps quotidien", description: "Plus besoin de dessiner vos sourcils chaque matin — vous vous réveillez avec des sourcils parfaits." },
      { title: "Durable 12 à 18 mois", description: "Le résultat du microblading dure entre 12 et 18 mois selon votre type de peau et votre routine." },
      { title: "Technique maîtrisée à Cotonou", description: "Nos praticiennes formées au microblading réalisent des tracés précis et des designs personnalisés à Cadjehoun." },
    ],
    pricing: {
      headline: "Tarif Microblading Sourcils",
      note: "Retouche incluse dans les 6 semaines suivant la pose.",
      items: [
        { label: "Microblading Sourcils", price: "40 000 FCFA", note: "2h — retouche incluse" },
      ],
    },
    faq: [
      { question: "Le microblading est-il douloureux ?", answer: "La crème anesthésiante rend le soin très tolérable. Un léger inconfort peut être ressenti, jamais de douleur intense." },
      { question: "Combien de temps dure le résultat ?", answer: "En général de 12 à 18 mois. Les peaux grasses retouchent plus vite, les peaux sèches gardent le pigment plus longtemps." },
      { question: "Faut-il une retouche après la cicatrisation ?", answer: "Oui, une retouche entre 4 et 6 semaines après est recommandée pour parfaire le résultat. Elle est incluse dans le tarif." },
      { question: "Le microblading est-il adapté aux sourcils très clairs ou clairsemés ?", answer: "C'est justement là que le microblading est le plus efficace — il recrée de la densité et de la profondeur." },
    ],
    cta: { headline: "Des sourcils parfaits à Cotonou", description: "Réservez votre microblading sourcils à Academy Beauty Gate Cadjehoun, Bénin." },
  },
  {
    slug: "retouche-microblading-sourcils-cotonou",
    title: "Retouche Microblading Sourcils — Cotonou",
    metaDescription: "Retouche microblading sourcils à Cotonou Cadjehoun. Rafraîchissement du résultat semi-permanent 1h15. Academy Beauty Gate — 15 000 FCFA.",
    category: "maquillage",
    hero: {
      imageAlt: "Retouche microblading sourcils Cotonou",
      eyebrow: "Retouche Semi-Permanente",
      headline: "Retouche Microblading Sourcils à Cotonou",
      subheadline: "Rafraîchissez et prolongez votre microblading sourcils en 1h15 pour retrouver un résultat comme au premier jour.",
    },
    badges: [
      { icon: "✦", text: "1h15" },
      { icon: "✦", text: "15 000 FCFA" },
      { icon: "✦", text: "Cadjehoun, Cotonou" },
      { icon: "✦", text: "Prolonge le résultat" },
    ],
    intro: {
      imageAlt: "Retouche microblading Bénin",
      headline: "Prolongez la durée de votre microblading",
      description: "Après 12 à 18 mois, le pigment de votre microblading s'estompe naturellement. La retouche permet de raviver les tracés, de corriger d'éventuels effets du temps et de prolonger le résultat pour une nouvelle période de 12 à 18 mois.",
      listItems: [
        "Évaluation de l'état du microblading existant",
        "Redessin et ajustement de la forme si nécessaire",
        "Application de crème anesthésiante",
        "Retouche des tracés estompés avec les mêmes pigments",
        "Instructions de soins post-retouche",
      ],
    },
    benefits: [
      { title: "Résultat rafraîchi comme au premier jour", description: "La retouche remet vos sourcils à neuf pour une nouvelle période de port optimal." },
      { title: "Tarif retouche avantageux", description: "À 15 000 FCFA, la retouche est bien plus économique qu'une nouvelle pose complète." },
      { title: "Correction et amélioration possibles", description: "La retouche est l'occasion d'affiner la forme ou l'intensité selon vos préférences actuelles." },
      { title: "Continuité de suivi à Cadjehoun", description: "Votre praticienne à Academy Beauty Gate connaît vos sourcils et assure la continuité de votre traitement." },
    ],
    pricing: {
      headline: "Tarif Retouche Microblading",
      note: "Pour les poses réalisées à Academy Beauty Gate ou ailleurs.",
      items: [
        { label: "Retouche Microblading Sourcils", price: "15 000 FCFA", note: "1h15" },
      ],
    },
    faq: [
      { question: "À quelle fréquence faut-il faire une retouche ?", answer: "En général tous les 12 à 18 mois selon la vitesse à laquelle votre peau estompe le pigment." },
      { question: "Puis-je venir en retouche même si mon microblading n'a pas été fait ici ?", answer: "Oui, nous acceptons les retouches de microblading réalisés dans d'autres établissements." },
      { question: "La retouche prend-elle autant de temps que la pose initiale ?", answer: "Non, la retouche est plus rapide — environ 1h15 contre 2h pour une pose complète." },
      { question: "Que se passe-t-il si j'attends trop longtemps avant la retouche ?", answer: "Si le pigment a complètement disparu, nous retraitons comme une nouvelle pose et facturons le tarif complet." },
    ],
    cta: { headline: "Rafraîchissez votre microblading à Cotonou", description: "Réservez votre retouche microblading à Academy Beauty Gate Cadjehoun, Bénin." },
  },
  // ─── BARBER SHOP ──────────────────────────────────────────────────────────────
  {
    slug: "coupe-classique-homme-cotonou",
    title: "Coupe Classique Homme — Cotonou",
    metaDescription: "Coupe classique homme à Cotonou Cadjehoun. Coupe propre et soignée 30 min. Academy Beauty Gate Barber Shop — 2 000 FCFA.",
    category: "barber",
    hero: {
      imageAlt: "Coupe classique homme Cotonou",
      eyebrow: "Barber Shop",
      headline: "Coupe Classique Homme à Cotonou",
      subheadline: "Une coupe propre, nette et bien entretenue en 30 minutes dans notre barber shop à Cadjehoun, Cotonou.",
    },
    badges: [
      { icon: "✦", text: "30 minutes" },
      { icon: "✦", text: "2 000 FCFA" },
      { icon: "✦", text: "Cadjehoun, Cotonou" },
      { icon: "✦", text: "Coupe soignée" },
    ],
    intro: {
      imageAlt: "Coupe homme classique barber Cotonou",
      headline: "Le classique qui ne se démode jamais",
      description: "La coupe classique homme est intemporelle. Propre sur les côtés, structurée sur le dessus — c'est la coupe de base qui convient à tous les hommes, à tous les âges, pour toutes les occasions à Cotonou.",
      listItems: [
        "Consultation et choix du style avec le barbier",
        "Lavage des cheveux si nécessaire",
        "Coupe ciseau et/ou tondeuse selon le style",
        "Dégradé et finitions des contours",
        "Coiffage et produit de finition",
      ],
    },
    benefits: [
      { title: "Look soigné en 30 minutes", description: "Un aller-retour rapide chez le barbier pour repartir propre et présentable." },
      { title: "Adapté à tous les types de cheveux", description: "Cheveux crépus, bouclés, raides ou fins — notre barbier adapte la coupe à votre texture." },
      { title: "Tarif imbattable à Cotonou", description: "La coupe classique à 2 000 FCFA est parmi les meilleurs rapports qualité/prix de Cadjehoun." },
      { title: "Barbier professionnel", description: "Nos barbiers formés réalisent chaque coupe avec précision, propreté et attention au détail." },
    ],
    pricing: {
      headline: "Tarif Coupe Classique Homme",
      note: "Barbe en supplément si souhaitée.",
      items: [
        { label: "Coupe Classique Homme", price: "2 000 FCFA", note: "30 min" },
      ],
    },
    faq: [
      { question: "La coupe inclut-elle le shampoing ?", answer: "Le shampoing est inclus sur demande. Pour un shampoing suivi d'une coupe, optez pour les forfaits correspondants." },
      { question: "Puis-je venir sans rendez-vous ?", answer: "Oui, notre barber shop accepte les clients sans rendez-vous selon disponibilité, surtout en semaine." },
      { question: "Faites-vous des coupes pour enfants ?", answer: "Oui, nous coiffons les garçons dès l'âge de 3 ans. Tarif identique pour les plus jeunes." },
      { question: "Où se trouve votre barber shop à Cotonou ?", answer: "Academy Beauty Gate est situé à Cadjehoun, Cotonou. Contactez-nous pour l'adresse précise." },
    ],
    cta: { headline: "Votre coupe classique à Cadjehoun", description: "Passez chez Academy Beauty Gate Barber Shop à Cotonou pour une coupe soignée et rapide." },
  },
  {
    slug: "coupe-stylee-exclusive-curly-cotonou",
    title: "Coupe Stylée Exclusive Curly — Cotonou",
    metaDescription: "Coupe stylée exclusive curly à Cotonou Cadjehoun. Coupe tendance pour cheveux bouclés 45 min. Academy Beauty Gate — 8 000 FCFA.",
    category: "barber",
    hero: {
      imageAlt: "Coupe curly homme Cotonou",
      eyebrow: "Barber Shop Tendance",
      headline: "Coupe Stylée Exclusive Curly à Cotonou",
      subheadline: "Une coupe exclusive pour cheveux bouclés et crépus, tendance et structurée, réalisée en 45 minutes à Cadjehoun.",
    },
    badges: [
      { icon: "✦", text: "45 minutes" },
      { icon: "✦", text: "8 000 FCFA" },
      { icon: "✦", text: "Cadjehoun, Cotonou" },
      { icon: "✦", text: "Cheveux bouclés" },
    ],
    intro: {
      imageAlt: "Coupe curly tendance barber Bénin",
      headline: "La coupe qui met en valeur vos boucles",
      description: "La coupe Curly Exclusive est spécialement conçue pour les hommes à cheveux bouclés ou crépus qui veulent un style structuré et moderne. Notre barbier travaille la texture naturelle pour un résultat tendance et personnalisé.",
      listItems: [
        "Consultation stylistique selon la texture de vos boucles",
        "Shampoing et conditionnement pour boucles",
        "Coupe structurée respectant le pattern de vos boucles",
        "Dégradé et contours précis",
        "Application de produits curl-enhancing pour finition",
      ],
    },
    benefits: [
      { title: "Coupe respectueuse de votre texture", description: "Le barbier travaille avec votre texture naturelle pour un résultat harmonieux et durable." },
      { title: "Style moderne et exclusif", description: "Une coupe tendance qui se démarque et qui affirme votre personnalité à Cotonou." },
      { title: "Technique spécialisée cheveux bouclés", description: "Nos barbiers connaissent les spécificités des cheveux bouclés et crépus pour une coupe parfaite." },
      { title: "Résultat longue durée", description: "Une coupe bien réalisée sur cheveux bouclés reste belle plus longtemps entre deux visites." },
    ],
    pricing: {
      headline: "Tarif Coupe Curly Exclusive",
      note: "Produits pour boucles inclus dans la prestation.",
      items: [
        { label: "Coupe Stylée Exclusive Curly", price: "8 000 FCFA", note: "45 min" },
      ],
    },
    faq: [
      { question: "Ce service est-il adapté aux cheveux crépus très serrés ?", answer: "Oui, nos barbiers travaillent avec tous les types de cheveux afro, de la boucle souple au crépu serré." },
      { question: "Faut-il venir les cheveux lavés ?", answer: "Non, nous lavons les cheveux en salon. Arrivez avec vos cheveux naturels pour que le barbier évalue la texture." },
      { question: "Puis-je voir des exemples de coupes curly avant de choisir ?", answer: "Oui, nous avons un book de photos. Vous pouvez aussi apporter une photo de référence sur votre téléphone." },
      { question: "À quelle fréquence renouveler cette coupe ?", answer: "Toutes les 3 à 6 semaines selon la vitesse de pousse et le style souhaité." },
    ],
    cta: { headline: "Sublimez vos boucles à Cotonou", description: "Réservez votre coupe Curly Exclusive à Academy Beauty Gate Barber Shop, Cadjehoun." },
  },
  {
    slug: "coupe-stylee-exclusive-twist-cotonou",
    title: "Coupe Stylée Exclusive Twist — Cotonou",
    metaDescription: "Coupe stylée exclusive twist à Cotonou Cadjehoun. Style twist tendance 1h. Academy Beauty Gate Barber Shop — 10 000 FCFA.",
    category: "barber",
    hero: {
      imageAlt: "Coupe twist homme Cotonou",
      eyebrow: "Barber Shop Tendance",
      headline: "Coupe Stylée Exclusive Twist à Cotonou",
      subheadline: "Un style twist exclusif et tendance réalisé en 1 heure par nos barbiers experts à Cadjehoun, Cotonou.",
    },
    badges: [
      { icon: "✦", text: "1 heure" },
      { icon: "✦", text: "10 000 FCFA" },
      { icon: "✦", text: "Cadjehoun, Cotonou" },
      { icon: "✦", text: "Style twist exclusif" },
    ],
    intro: {
      imageAlt: "Coupe twist tendance barber Bénin",
      headline: "Le style twist qui fait tourner les têtes",
      description: "La coupe Twist Exclusive combine technique de coupe et twist pour un résultat unique, structuré et affirmé. Idéal pour les hommes qui veulent un style distinctif qui les démarque à Cotonou et partout au Bénin.",
      listItems: [
        "Consultation stylistique et choix du rendu twist",
        "Shampoing et soins préparatoires",
        "Coupe de base structurée",
        "Réalisation des twists selon le style choisi",
        "Finition et produits de définition des twists",
      ],
    },
    benefits: [
      { title: "Style unique et exclusif", description: "Le twist est une coiffure distinctive qui affirme votre identité et votre style à Cotonou." },
      { title: "Technique professionnelle", description: "Nos barbiers maîtrisent la technique twist pour un résultat propre, régulier et durable." },
      { title: "Polyvalent et tendance", description: "Le twist s'adapte à de nombreuses occasions — casual, soirée ou événement professionnel." },
      { title: "Résultat qui dure", description: "Avec un bon entretien, les twists réalisés professionnellement tiennent plusieurs semaines." },
    ],
    pricing: {
      headline: "Tarif Coupe Twist Exclusive",
      note: "Produits de définition twist inclus.",
      items: [
        { label: "Coupe Stylée Exclusive Twist", price: "10 000 FCFA", note: "1h" },
      ],
    },
    faq: [
      { question: "Quelle longueur de cheveux est nécessaire pour les twists ?", answer: "En général au moins 5 cm pour un twist bien formé, idéalement 8-10 cm pour un résultat optimal." },
      { question: "Les twists abîment-ils les cheveux ?", answer: "Non, au contraire — les twists sont une coiffure protectrice qui limite les manipulations quotidiennes." },
      { question: "Combien de temps faut-il pour entretenir les twists ?", answer: "Un réajustement toutes les 3 à 4 semaines permet de garder les twists propres et définis." },
      { question: "Peut-on combiner la coupe twist avec une barbe taillée ?", answer: "Oui, nous recommandons d'ajouter le service barbe pour un look complet et harmonieux." },
    ],
    cta: { headline: "Adoptez le style twist à Cotonou", description: "Réservez votre coupe Twist Exclusive à Academy Beauty Gate Barber Shop, Cadjehoun." },
  },
  {
    slug: "shampoing-coupe-teinte-noire-cotonou",
    title: "Shampoing + Coupe + Teinte Noire — Cotonou",
    metaDescription: "Forfait shampoing coupe teinte noire à Cotonou Cadjehoun. Cheveux noirs naturels renforcés 1h15. Academy Beauty Gate — 5 000 FCFA.",
    category: "barber",
    hero: {
      imageAlt: "Shampoing coupe teinte noire Cotonou",
      eyebrow: "Forfait Barber",
      headline: "Shampoing + Coupe + Teinte Noire à Cotonou",
      subheadline: "Le forfait complet pour des cheveux noirs intenses et une coupe impeccable en 1h15 à Academy Beauty Gate.",
    },
    badges: [
      { icon: "✦", text: "1h15" },
      { icon: "✦", text: "5 000 FCFA" },
      { icon: "✦", text: "Cadjehoun, Cotonou" },
      { icon: "✦", text: "Cheveux noirs intenses" },
    ],
    intro: {
      imageAlt: "Forfait coupe teinte noire Bénin",
      headline: "Cheveux noirs intenses et coupe impeccable",
      description: "Ce forfait combine shampoing professionnel, coupe et teinte noire pour raviver l'intensité naturelle de vos cheveux foncés tout en bénéficiant d'une coupe soignée. Idéal pour couvrir les premiers cheveux blancs ou raviver un noir terne.",
      listItems: [
        "Shampoing professionnel préparatoire",
        "Application de la teinte noire naturelle",
        "Temps de pose et rinçage soigneux",
        "Coupe et mise en forme",
        "Finition et coiffage avec produit",
      ],
    },
    benefits: [
      { title: "Couleur noire profonde et intense", description: "La teinte renforce et ravive la couleur noire naturelle pour un résultat unifié et brillant." },
      { title: "Couverture des cheveux blancs", description: "Couvrez efficacement les premiers signes de blanchissement à un tarif très accessible." },
      { title: "Forfait tout compris avantageux", description: "Shampoing + Teinte + Coupe pour seulement 5 000 FCFA — un excellent rapport qualité/prix à Cotonou." },
      { title: "Résultat longue durée", description: "La teinte professionnelle tient 4 à 6 semaines pour un look soigné qui dure." },
    ],
    pricing: {
      headline: "Tarif Forfait Teinte Noire",
      note: "Teinte naturelle sans ammoniaque disponible sur demande.",
      items: [
        { label: "Shampoing + Coupe + Teinte Noire", price: "5 000 FCFA", note: "1h15" },
      ],
    },
    faq: [
      { question: "La teinte noire couvre-t-elle bien les cheveux blancs ?", answer: "Oui, la teinte noire offre une couverture optimale des cheveux blancs dès la première application." },
      { question: "La teinte abîme-t-elle les cheveux ?", answer: "Nous utilisons des teintes professionnelles de qualité qui respectent le cheveu. Un soin est intégré au forfait." },
      { question: "Combien de temps dure la couleur après l'application ?", answer: "Environ 4 à 6 semaines, selon votre vitesse de pousse et votre routine d'entretien." },
      { question: "Peut-on choisir une teinte noire avec reflets pour plus de brillance ?", answer: "Oui, demandez à votre barbier une teinte noir brillance pour un résultat encore plus lumineux." },
    ],
    cta: { headline: "Cheveux noirs intenses à Cotonou", description: "Réservez votre forfait teinte noire à Academy Beauty Gate Barber Shop, Cadjehoun." },
  },
  {
    slug: "shampoing-coupe-teinte-coloree-cotonou",
    title: "Shampoing + Coupe + Teinte Colorée — Cotonou",
    metaDescription: "Forfait shampoing coupe teinte colorée à Cotonou Cadjehoun. Changez de couleur avec style 1h30. Academy Beauty Gate — 9 000 FCFA.",
    category: "barber",
    hero: {
      imageAlt: "Shampoing coupe teinte colorée Cotonou",
      eyebrow: "Forfait Barber Couleur",
      headline: "Shampoing + Coupe + Teinte Colorée à Cotonou",
      subheadline: "Changez de style avec une teinte colorée tendance associée à une coupe soignée, le tout en 1h30 à Cadjehoun.",
    },
    badges: [
      { icon: "✦", text: "1h30" },
      { icon: "✦", text: "9 000 FCFA" },
      { icon: "✦", text: "Cadjehoun, Cotonou" },
      { icon: "✦", text: "Large choix de couleurs" },
    ],
    intro: {
      imageAlt: "Forfait teinte colorée homme Bénin",
      headline: "Osez la couleur avec notre barber shop",
      description: "La teinte colorée homme, c'est la tendance barber qui monte à Cotonou et partout au Bénin. Bordeaux, châtain, acajou, caramel — notre barbier vous guide dans le choix de la teinte idéale et la réalise avec précision.",
      listItems: [
        "Conseil couleur et test d'allergie préalable",
        "Shampoing professionnel préparatoire",
        "Application de la teinte colorée choisie",
        "Rinçage et soin couleur",
        "Coupe et coiffage finition",
      ],
    },
    benefits: [
      { title: "Large palette de couleurs disponibles", description: "De l'auburn au blond naturel en passant par les colorations tendance — le choix est vaste." },
      { title: "Résultat professionnel et uniforme", description: "La teinte est appliquée uniformément par le barbier pour un résultat sans ratés ni zones inégales." },
      { title: "Transformation assurée", description: "Un changement de couleur transforme immédiatement votre look et rajeunit votre apparence." },
      { title: "Forfait complet à prix raisonnable", description: "Shampoing + Teinte colorée + Coupe pour 9 000 FCFA — un vrai forfait salon à Cotonou." },
    ],
    pricing: {
      headline: "Tarif Forfait Teinte Colorée",
      note: "Test d'allergie obligatoire 48h avant la première teinte.",
      items: [
        { label: "Shampoing + Coupe + Teinte Colorée", price: "9 000 FCFA", note: "1h30" },
      ],
    },
    faq: [
      { question: "Faut-il un test d'allergie avant la teinte colorée ?", answer: "Oui, pour toute première teinte, un test d'allergie 48h avant est obligatoire pour votre sécurité." },
      { question: "Ma teinte colorée tiendra-t-elle sur des cheveux très foncés ?", answer: "Sur cheveux très foncés, certaines teintes claires nécessitent une décoloration préalable. Nous vous conseillerons." },
      { question: "Combien de temps dure la couleur ?", answer: "Selon la teinte et votre type de cheveux, de 3 à 6 semaines avant que la couleur commence à ternir." },
      { question: "Proposez-vous la décoloration pour les teintes très claires ?", answer: "Oui, contactez-nous pour un devis personnalisé si vous souhaitez une teinte claire ou platine." },
    ],
    cta: { headline: "Changez de couleur à Cotonou", description: "Réservez votre forfait teinte colorée à Academy Beauty Gate Barber Shop, Cadjehoun." },
  },
  {
    slug: "coupe-head-massage-cotonou",
    title: "Coupe + Head Massage — Cotonou",
    metaDescription: "Coupe et massage crânien à Cotonou Cadjehoun. Relaxation et style en 45 min. Academy Beauty Gate Barber Shop — 6 000 FCFA.",
    category: "barber",
    hero: {
      imageAlt: "Coupe head massage Cotonou",
      eyebrow: "Barber Relax",
      headline: "Coupe + Head Massage à Cotonou",
      subheadline: "L'expérience barber complète : une coupe impeccable et un massage crânien relaxant en 45 minutes à Cadjehoun.",
    },
    badges: [
      { icon: "✦", text: "45 minutes" },
      { icon: "✦", text: "6 000 FCFA" },
      { icon: "✦", text: "Cadjehoun, Cotonou" },
      { icon: "✦", text: "Relaxation incluse" },
    ],
    intro: {
      imageAlt: "Coupe massage crânien barber Bénin",
      headline: "La coupe qui fait aussi du bien au moral",
      description: "Le forfait Coupe + Head Massage est l'expérience barber premium pour les hommes qui veulent repartir détendu autant que stylé. Le massage crânien stimule la circulation, réduit le stress et laisse les cheveux plus sains.",
      listItems: [
        "Shampoing avec massage du cuir chevelu",
        "Massage crânien professionnel aux huiles essentielles",
        "Coupe et dégradé selon vos préférences",
        "Finition des contours et massage des tempes",
        "Coiffage et produit de finition",
      ],
    },
    benefits: [
      { title: "Relaxation profonde du cuir chevelu", description: "Le massage stimule la circulation sanguine, réduit les tensions et procure une vraie détente." },
      { title: "Cheveux plus sains", description: "La stimulation régulière du cuir chevelu favorise la croissance des cheveux et réduit la chute." },
      { title: "Expérience barber premium", description: "Un moment de bien-être masculin complet — coiffure et relaxation réunis en une seule séance." },
      { title: "Pause obligatoire à Cotonou", description: "Dans l'agitation de Cotonou, offrez-vous 45 minutes de détente complète chez votre barbier." },
    ],
    pricing: {
      headline: "Tarif Coupe + Head Massage",
      note: "Huiles essentielles naturelles utilisées pour le massage.",
      items: [
        { label: "Coupe + Head Massage", price: "6 000 FCFA", note: "45 min" },
      ],
    },
    faq: [
      { question: "Le massage crânien aide-t-il contre la chute de cheveux ?", answer: "La stimulation régulière du cuir chevelu améliore la circulation et peut ralentir une chute légère." },
      { question: "Puis-je choisir les huiles essentielles utilisées ?", answer: "Oui, nous avons plusieurs huiles disponibles. Signalez toute allergie lors de votre réservation." },
      { question: "Ce forfait est-il disponible en formule cadeau ?", answer: "Oui, nous proposons ce forfait en carte cadeau — idéal pour offrir une expérience à un ami ou père." },
      { question: "Peut-on ajouter la barbe à ce forfait ?", answer: "Oui, la taille de barbe est disponible en supplément pour un look complet." },
    ],
    cta: { headline: "Détendez-vous et repartez stylé", description: "Réservez votre Coupe + Head Massage à Academy Beauty Gate Barber Shop, Cadjehoun." },
  },
  {
    slug: "soin-visage-express-homme-cotonou",
    title: "Soin Visage Express Homme — Cotonou",
    metaDescription: "Soin visage express homme à Cotonou Cadjehoun. Nettoyage et hydratation masculine 30 min. Academy Beauty Gate Barber Shop — 6 000 FCFA.",
    category: "barber",
    hero: {
      imageAlt: "Soin visage homme Cotonou",
      eyebrow: "Barber Soin Visage",
      headline: "Soin Visage Express Homme à Cotonou",
      subheadline: "Un soin du visage express adapté aux hommes — nettoyage, hydratation et confort en 30 minutes à Cadjehoun.",
    },
    badges: [
      { icon: "✦", text: "30 minutes" },
      { icon: "✦", text: "6 000 FCFA" },
      { icon: "✦", text: "Cadjehoun, Cotonou" },
      { icon: "✦", text: "Soin masculin" },
    ],
    intro: {
      imageAlt: "Soin visage masculin barber Bénin",
      headline: "Le soin visage pensé pour les hommes",
      description: "Les hommes aussi méritent un soin du visage adapté à leur peau. Le soin visage express homme cible les problématiques masculines : pores dilatés après le rasage, irritations, peau brillante ou déshydratée. Un soin efficace en 30 minutes.",
      listItems: [
        "Nettoyage adapté peau masculine",
        "Exfoliation pour désincruster et lisser",
        "Soin ciblé selon problématique (post-rasage, acné, déshydratation)",
        "Masque homme express",
        "Hydratant homme matifiant ou confort en finition",
      ],
    },
    benefits: [
      { title: "Peau purifiée et fraîche", description: "Nettoyage en profondeur des pores souvent dilatés et encombrés chez l'homme." },
      { title: "Apaisant post-rasage", description: "Les irritations, rougeurs et inconforts liés au rasage sont traités et calmés en profondeur." },
      { title: "Résultat visible en 30 minutes", description: "Efficace et rapide, ce soin s'intègre facilement entre deux activités à Cotonou." },
      { title: "Sans complexes, sans tabou", description: "Chez Academy Beauty Gate, les hommes sont les bienvenus pour prendre soin d'eux naturellement." },
    ],
    pricing: {
      headline: "Tarif Soin Visage Homme",
      note: "Peut être combiné avec une coupe ou une barbe.",
      items: [
        { label: "Soin Visage Express Homme", price: "6 000 FCFA", note: "30 min" },
      ],
    },
    faq: [
      { question: "Ce soin est-il réservé aux hommes uniquement ?", answer: "Il est formulé pour la peau masculine mais toute personne peut bénéficier de ce soin express." },
      { question: "Peut-on combiner ce soin avec une coupe le même jour ?", answer: "Absolument, c'est une combinaison très populaire. Réservez les deux créneaux à la suite." },
      { question: "Ce soin convient-il pour les peaux après rasage fréquent ?", answer: "Oui, c'est même le contexte idéal — le soin apaise les irritations et prépare la peau entre deux rasages." },
      { question: "À quelle fréquence recommandez-vous ce soin homme ?", answer: "Une fois par mois suffit pour maintenir une peau masculine saine et bien entretenue." },
    ],
    cta: { headline: "Prenez soin de vous à Cotonou", description: "Réservez votre soin visage express homme à Academy Beauty Gate, Cadjehoun." },
  },
  {
    slug: "barbe-cotonou",
    title: "Barbe — Cotonou",
    metaDescription: "Taille et entretien de barbe à Cotonou Cadjehoun. Barbe soignée et nette en 15 min. Academy Beauty Gate Barber Shop — 1 000 FCFA.",
    category: "barber",
    hero: {
      imageAlt: "Taille barbe Cotonou",
      eyebrow: "Barber Shop",
      headline: "Barbe à Cotonou",
      subheadline: "Une barbe propre, nette et bien définie en 15 minutes dans notre barber shop à Cadjehoun, Cotonou.",
    },
    badges: [
      { icon: "✦", text: "15 minutes" },
      { icon: "✦", text: "1 000 FCFA" },
      { icon: "✦", text: "Cadjehoun, Cotonou" },
      { icon: "✦", text: "Barbe soignée" },
    ],
    intro: {
      imageAlt: "Entretien barbe barber Bénin",
      headline: "Une barbe impeccable en 15 minutes",
      description: "L'entretien de la barbe est un art que nos barbiers maîtrisent à la perfection. Contours nets, longueur maîtrisée, finitions au rasoir — votre barbe repartira parfaitement soignée en seulement 15 minutes.",
      listItems: [
        "Évaluation de la forme et longueur de barbe souhaitée",
        "Taille et égalisation de la barbe à la tondeuse",
        "Définition des contours au rasoir droit",
        "Dessin de la ligne de cou et des joues",
        "Huile de barbe hydratante et baume de finition",
      ],
    },
    benefits: [
      { title: "Contours nets et précis", description: "Le rasoir droit définit des lignes parfaites pour une barbe aux contours impeccables." },
      { title: "Tarif imbattable", description: "1 000 FCFA pour une barbe professionnelle — le meilleur prix de Cadjehoun, Cotonou." },
      { title: "Rapide et efficace", description: "15 minutes suffisent pour une barbe transformée. Idéal pour un entretien régulier." },
      { title: "Expertise du barbier", description: "Chaque barbier d'Academy Beauty Gate maîtrise les techniques de rasage traditionnel." },
    ],
    pricing: {
      headline: "Tarif Barbe",
      note: "Peut être ajoutée à n'importe quel forfait coupe.",
      items: [
        { label: "Barbe", price: "1 000 FCFA", note: "15 min" },
      ],
    },
    faq: [
      { question: "La taille de barbe inclut-elle un soin ou huile ?", answer: "Oui, nous appliquons une huile de barbe hydratante en finition pour nourrir et adoucir le poil." },
      { question: "Faites-vous le rasage à blanc (visage entier) ?", answer: "Oui, le rasage intégral au rasoir droit est disponible. Demandez lors de votre venue." },
      { question: "À quelle fréquence entretenir sa barbe chez le barbier ?", answer: "Toutes les 2 à 3 semaines pour maintenir des contours nets et une barbe bien proportionnée." },
      { question: "Peut-on ajouter le traitement barbe pour plus de résultats ?", answer: "Oui, combinez la taille barbe avec le traitement barbe pour un soin complet et des poils plus doux." },
    ],
    cta: { headline: "Une barbe soignée à Cotonou", description: "Passez à Academy Beauty Gate Barber Shop, Cadjehoun pour une barbe impeccable." },
  },
  {
    slug: "coupe-nattes-sans-meche-cotonou",
    title: "Coupe + Nattes sans Mèche — Cotonou",
    metaDescription: "Coupe et nattes sans mèche à Cotonou Cadjehoun. Style afro protecteur homme 1h. Academy Beauty Gate — 3 000 FCFA.",
    category: "barber",
    hero: {
      imageAlt: "Coupe nattes sans mèche homme Cotonou",
      eyebrow: "Barber Coiffure Afro",
      headline: "Coupe + Nattes sans Mèche à Cotonou",
      subheadline: "Une coupe propre et des nattes naturelles sans mèche en 1 heure — style afro authentique à Cadjehoun.",
    },
    badges: [
      { icon: "✦", text: "1 heure" },
      { icon: "✦", text: "3 000 FCFA" },
      { icon: "✦", text: "Cadjehoun, Cotonou" },
      { icon: "✦", text: "Nattes naturelles" },
    ],
    intro: {
      imageAlt: "Nattes naturelles homme Bénin",
      headline: "Nattes naturelles et style authentique",
      description: "Le service Coupe + Nattes sans mèche est la combinaison idéale pour les hommes qui veulent un style afro authentique et protecteur. Les nattes sans mèche s'appuient uniquement sur vos cheveux naturels pour un look clean et propre.",
      listItems: [
        "Shampoing et conditionnement des cheveux naturels",
        "Coupe et structuration de la base",
        "Section et préparation pour les nattes",
        "Réalisation des nattes sans mèche ajoutée",
        "Finition et produits de maintien naturels",
      ],
    },
    benefits: [
      { title: "Coiffure protectrice naturelle", description: "Les nattes sans mèche protègent les cheveux des manipulations excessives et favorisent la pousse." },
      { title: "Style authentiquement afro", description: "Un look qui valorise la beauté naturelle des cheveux africains sans ajout artificiel." },
      { title: "Tarif accessible", description: "Coupe + nattes naturelles pour seulement 3 000 FCFA — un excellent rapport qualité/prix à Cotonou." },
      { title: "Résultat propre et soigné", description: "Nos barbiers réalisent des nattes régulières et bien tracées pour un résultat net et esthétique." },
    ],
    pricing: {
      headline: "Tarif Coupe + Nattes sans Mèche",
      note: "Nattes avec mèche disponibles à tarif différent.",
      items: [
        { label: "Coupe + Nattes sans Mèche", price: "3 000 FCFA", note: "1h" },
      ],
    },
    faq: [
      { question: "Quelle longueur de cheveux pour les nattes sans mèche ?", answer: "Il faut au minimum 4 à 5 cm de longueur pour réaliser des nattes sans mèche correctement définies." },
      { question: "Les nattes sans mèche peuvent-elles abîmer les cheveux ?", answer: "Non, c'est une coiffure protectrice douce pour les cheveux naturels. Évitez les nattes trop serrées." },
      { question: "Combien de temps les nattes tiennent-elles ?", answer: "Avec un bon entretien du cuir chevelu, les nattes tiennent 2 à 4 semaines." },
      { question: "Proposez-vous aussi les nattes avec mèche pour hommes ?", answer: "Oui, contactez-nous pour un tarif personnalisé selon la longueur des mèches et le style souhaité." },
    ],
    cta: { headline: "Nattes naturelles à Cotonou", description: "Réservez votre Coupe + Nattes sans mèche à Academy Beauty Gate, Cadjehoun." },
  },
  {
    slug: "traitement-barbe-cotonou",
    title: "Traitement Barbe — Cotonou",
    metaDescription: "Traitement barbe à Cotonou Cadjehoun. Soin nourrissant et adoucissant pour barbe 20 min. Academy Beauty Gate — 2 000 FCFA.",
    category: "barber",
    hero: {
      imageAlt: "Traitement barbe soin Cotonou",
      eyebrow: "Barber Soin Barbe",
      headline: "Traitement Barbe à Cotonou",
      subheadline: "Un soin nourrissant et adoucissant pour votre barbe en 20 minutes — poils plus doux, peau apaisée.",
    },
    badges: [
      { icon: "✦", text: "20 minutes" },
      { icon: "✦", text: "2 000 FCFA" },
      { icon: "✦", text: "Cadjehoun, Cotonou" },
      { icon: "✦", text: "Barbe nourrie" },
    ],
    intro: {
      imageAlt: "Soin traitement barbe Bénin",
      headline: "Nourrissez et adoucissez votre barbe",
      description: "Le traitement barbe est le complément indispensable de la taille barbe. Il hydrate la peau sous le poil, nourrit les follicules et adoucit les poils pour une barbe plus douce, plus brillante et moins sujette aux irritations.",
      listItems: [
        "Nettoyage et préparation de la barbe",
        "Application du masque nourrissant barbe",
        "Temps de pose pour absorption des actifs",
        "Massage du cuir pileux de la barbe",
        "Huile de barbe et baume de coiffage de finition",
      ],
    },
    benefits: [
      { title: "Poils de barbe adoucis", description: "Le traitement nourrit et assouplit les poils rêches pour une barbe agréable au toucher." },
      { title: "Peau sous la barbe hydratée", description: "Les démangeaisons, les irritations et la sécheresse sous la barbe disparaissent." },
      { title: "Barbe plus brillante et saine", description: "Des poils nourris reflètent mieux la lumière pour une barbe d'aspect sain et soigné." },
      { title: "Entretien accessible", description: "2 000 FCFA seulement pour un traitement barbe professionnel à Academy Beauty Gate Cadjehoun." },
    ],
    pricing: {
      headline: "Tarif Traitement Barbe",
      note: "Idéal en complément de la taille barbe.",
      items: [
        { label: "Traitement Barbe", price: "2 000 FCFA", note: "20 min" },
      ],
    },
    faq: [
      { question: "Ce traitement est-il adapté aux barbes courtes ?", answer: "Oui, même une barbe courte bénéficie du traitement — la peau sous les poils est particulièrement nourrie." },
      { question: "À quelle fréquence faire un traitement barbe ?", answer: "Une fois par mois en entretien régulier. Plus fréquemment pour les barbes très sèches ou irritées." },
      { question: "Peut-on combiner le traitement barbe avec la taille barbe ?", answer: "C'est même recommandé — taille + traitement barbe en une seule visite pour un résultat optimal." },
      { question: "Les produits utilisés sont-ils naturels ?", answer: "Nous utilisons des produits de qualité professionnelle riches en huiles naturelles adaptées à la barbe." },
    ],
    cta: { headline: "Soignez votre barbe à Cotonou", description: "Réservez votre traitement barbe à Academy Beauty Gate Barber Shop, Cadjehoun." },
  },
  {
    slug: "traitement-cheveux-homme-cotonou",
    title: "Traitement Cheveux Homme — Cotonou",
    metaDescription: "Traitement cheveux homme à Cotonou Cadjehoun. Soin reconstituant pour cheveux masculins 45 min. Academy Beauty Gate — 5 000 FCFA.",
    category: "barber",
    hero: {
      imageAlt: "Traitement cheveux homme Cotonou",
      eyebrow: "Barber Soin Capillaire",
      headline: "Traitement Cheveux Homme à Cotonou",
      subheadline: "Un soin capillaire reconstituant adapté aux cheveux masculins en 45 minutes — force, brillance et vitalité.",
    },
    badges: [
      { icon: "✦", text: "45 minutes" },
      { icon: "✦", text: "5 000 FCFA" },
      { icon: "✦", text: "Cadjehoun, Cotonou" },
      { icon: "✦", text: "Cheveux revitalisés" },
    ],
    intro: {
      imageAlt: "Soin capillaire homme Bénin",
      headline: "Des cheveux forts et sains grâce au soin professionnel",
      description: "Le traitement cheveux homme est un soin capillaire professionnel qui nourrit, renforce et revitalise les cheveux fragilisés. Idéal après des traitements colorants, pour lutter contre la chute ou simplement revitaliser des cheveux ternes.",
      listItems: [
        "Diagnostic capillaire et choix du traitement adapté",
        "Shampoing clarifiant préparatoire",
        "Application du masque reconstituant haute nutrition",
        "Massage du cuir chevelu avec actifs fortifiants",
        "Rinçage et coiffage de finition",
      ],
    },
    benefits: [
      { title: "Cheveux fortifiés et résistants", description: "Les actifs reconstituants renforcent la fibre capillaire pour des cheveux moins cassants." },
      { title: "Cuir chevelu sain", description: "Le traitement nourrit et équilibre le cuir chevelu, réduisant les squames et irritations." },
      { title: "Brillance et vitalité retrouvées", description: "Des cheveux nourris reflètent mieux la lumière — ils paraissent plus sains et plus beaux." },
      { title: "Soin capillaire masculin à Cotonou", description: "Un soin professionnellement adapté aux spécificités des cheveux masculins afro et crépus." },
    ],
    pricing: {
      headline: "Tarif Traitement Cheveux Homme",
      note: "Peut être combiné avec une coupe le même jour.",
      items: [
        { label: "Traitement Cheveux Homme", price: "5 000 FCFA", note: "45 min" },
      ],
    },
    faq: [
      { question: "Ce traitement aide-t-il contre la chute de cheveux ?", answer: "Il renforce les cheveux et nourrit le cuir chevelu, ce qui peut réduire une chute liée à la fragilité. Pour une alopécie, consultez un dermatologue." },
      { question: "Peut-on faire ce soin après une teinte ou une décoloration ?", answer: "Oui, c'est même idéal — le soin reconstituant répare les cheveux fragilisés par les traitements chimiques." },
      { question: "À quelle fréquence faire un traitement capillaire ?", answer: "Une fois par mois pour un entretien optimal, ou après chaque traitement colorant." },
      { question: "Ce soin est-il disponible en formule coupe + traitement ?", answer: "Oui, combinez coupe + traitement pour un résultat complet — demandez le forfait lors de votre réservation." },
    ],
    cta: { headline: "Des cheveux forts et brillants à Cotonou", description: "Réservez votre traitement cheveux homme à Academy Beauty Gate Barber Shop, Cadjehoun." },
  },
  {
    slug: "epilation-demi-jambes-femme-cotonou",
    title: "Épilation Demi-Jambes Femme à Cotonou | Academy Beauty Gate",
    metaDescription: "Épilation à la cire des demi-jambes pour femme à Cotonou, quartier Cadjehoun. Peau douce et lisse dès 8 000 FCFA. Résultats durables au salon Academy Beauty Gate.",
    category: "epilation-cire",
    hero: {
      imageAlt: "Épilation demi-jambes femme à la cire au salon Academy Beauty Gate Cotonou",
      eyebrow: "Épilation à la Cire — Femme",
      headline: "Épilation Demi-Jambes Femme à Cotonou",
      subheadline: "Une peau lisse et soyeuse dès la première séance. Technique à la cire chaude ou tiède pour un résultat impeccable, durable jusqu'à 4 semaines.",
    },
    badges: [
      { icon: "✦", text: "Cire professionnelle" },
      { icon: "✦", text: "Résultat durable 3–4 semaines" },
      { icon: "✦", text: "Peau douce immédiatement" },
      { icon: "✦", text: "30 min chrono" },
    ],
    intro: {
      imageAlt: "Soin épilation demi-jambes à la cire pour femme Cotonou Cadjehoun",
      headline: "L'épilation à la cire, la référence pour des jambes parfaites",
      description: "À Academy Beauty Gate, l'épilation des demi-jambes est réalisée avec une cire de qualité professionnelle adaptée à votre type de peau. Notre esthéticienne expérimentée retire les poils à la racine pour une pousse plus fine et plus lente, séance après séance.",
      listItems: [
        "Cire chaude ou tiède selon la sensibilité de votre peau",
        "Retrait des poils à la racine pour un résultat durable 3 à 4 semaines",
        "Application d'un soin apaisant post-épilation inclus",
        "Technique rapide et précise : séance de 30 minutes",
        "Disponible sur rendez-vous à Cadjehoun, Cotonou",
      ],
    },
    benefits: [
      {
        title: "Peau lisse immédiatement",
        description: "Dès la fin de la séance, vos demi-jambes sont parfaitement lisses, sans repousse visible pendant plusieurs semaines.",
      },
      {
        title: "Repousse plus fine à chaque séance",
        description: "L'arrachage répété du poil à la racine affaiblit progressivement le follicule, rendant la repousse plus fine et clairsemée.",
      },
      {
        title: "Soin apaisant inclus",
        description: "Un lait ou gel apaisant est appliqué après l'épilation pour calmer la peau, éviter les rougeurs et hydrater durablement.",
      },
      {
        title: "Rapport qualité-prix imbattable",
        description: "À 8 000 FCFA pour 30 minutes, c'est le meilleur rapport qualité-prix de Cotonou pour une épilation professionnelle à la cire.",
      },
    ],
    pricing: {
      headline: "Tarifs Épilation Demi-Jambes Femme",
      note: "Tarifs en FCFA, toutes taxes incluses. Cure dégressives disponibles pour maximiser votre budget.",
      items: [
        { label: "Épilation demi-jambes femme", price: "8 000 FCFA", note: "Séance unique — 30 min" },
        { label: "Cure 4 séances", price: "28 000 FCFA", note: "Économisez 4 000 FCFA" },
        { label: "Cure 6 séances", price: "40 000 FCFA", note: "Économisez 8 000 FCFA" },
      ],
    },
    faq: [
      {
        question: "Combien de temps dure l'épilation des demi-jambes ?",
        answer: "La séance dure environ 30 minutes. Le résultat est visible immédiatement et la peau reste lisse pendant 3 à 4 semaines selon votre rythme de repousse.",
      },
      {
        question: "Faut-il laisser pousser les poils avant la séance ?",
        answer: "Oui, il est recommandé que les poils mesurent au moins 3 à 5 mm pour que la cire adhère correctement. Évitez de raser dans les 2 à 3 semaines précédant votre rendez-vous.",
      },
      {
        question: "L'épilation à la cire est-elle douloureuse ?",
        answer: "La douleur est relative et s'atténue séance après séance. Notre esthéticienne utilise une technique rapide et une cire de qualité pour minimiser l'inconfort.",
      },
      {
        question: "Puis-je faire une épilation des demi-jambes si j'ai la peau sensible ?",
        answer: "Oui, nous utilisons une cire adaptée aux peaux sensibles. Informez notre esthéticienne lors de la prise de rendez-vous pour qu'elle prépare les produits adéquats.",
      },
    ],
    cta: {
      headline: "Réservez votre épilation demi-jambes à Cotonou",
      description: "Prenez rendez-vous à Academy Beauty Gate, quartier Cadjehoun, Cotonou. Peau lisse garantie dès la première séance.",
    },
  },
  {
    slug: "epilation-jambes-completes-femme-cotonou",
    title: "Épilation Jambes Complètes Femme à Cotonou | Academy Beauty Gate",
    metaDescription: "Épilation à la cire jambes complètes pour femme à Cotonou, Cadjehoun. Des jambes parfaitement lisses de la cheville à la cuisse — 12 000 FCFA, 45 min.",
    category: "epilation-cire",
    hero: {
      imageAlt: "Épilation jambes complètes femme à la cire salon de beauté Cotonou",
      eyebrow: "Épilation à la Cire — Femme",
      headline: "Épilation Jambes Complètes Femme à Cotonou",
      subheadline: "Des jambes impeccables de la cheville à la cuisse. Une épilation à la cire professionnelle pour un résultat lisse et durable jusqu'à 4 semaines.",
    },
    badges: [
      { icon: "✦", text: "Jambes entières traitées" },
      { icon: "✦", text: "Cire professionnelle" },
      { icon: "✦", text: "Résultat 3–4 semaines" },
      { icon: "✦", text: "45 min seulement" },
    ],
    intro: {
      imageAlt: "Épilation jambes complètes femme cire chaude salon Cadjehoun Cotonou Bénin",
      headline: "Des jambes lisses de la cheville à la cuisse",
      description: "L'épilation des jambes complètes couvre la totalité du membre inférieur : mollets, genoux et cuisses. Réalisée à la cire chaude ou tiède selon votre sensibilité, cette prestation garantit un résultat uniforme et durable pour toutes les femmes à Cotonou.",
      listItems: [
        "Traitement complet : cheville, mollet, genou et cuisse",
        "Cire adaptée aux zones sensibles comme le genou et la cuisse interne",
        "Retrait des poils incarnés et des petites aspérités",
        "Soin hydratant et apaisant offert en fin de séance",
        "Résultat visible immédiatement, durée 3 à 4 semaines",
      ],
    },
    benefits: [
      {
        title: "Traitement uniforme de toute la jambe",
        description: "Chaque zone est épilée avec la même précision, y compris les zones difficiles comme le genou et la cuisse interne.",
      },
      {
        title: "Peau plus douce à chaque séance",
        description: "La cire exfolie légèrement la surface cutanée en retirant les cellules mortes, révélant une peau plus lisse et plus éclairante.",
      },
      {
        title: "Gain de temps sur le long terme",
        description: "Avec 3 à 4 semaines sans repousse, vous divisez par 3 votre fréquence d'épilation comparée au rasage quotidien.",
      },
      {
        title: "Technique maîtrisée par nos expertes",
        description: "Nos esthéticiennes formées maîtrisent la direction de la pose et du retrait de la cire pour minimiser la douleur et éviter les irritations.",
      },
    ],
    pricing: {
      headline: "Tarifs Épilation Jambes Complètes Femme",
      note: "Tarifs en FCFA, toutes taxes incluses. Profitez des cures pour des économies significatives.",
      items: [
        { label: "Épilation jambes complètes femme", price: "12 000 FCFA", note: "Séance unique — 45 min" },
        { label: "Cure 4 séances", price: "42 000 FCFA", note: "Économisez 6 000 FCFA" },
        { label: "Cure 6 séances", price: "60 000 FCFA", note: "Économisez 12 000 FCFA" },
      ],
    },
    faq: [
      {
        question: "Quelle est la différence entre l'épilation demi-jambes et jambes complètes ?",
        answer: "L'épilation demi-jambes traite uniquement les mollets (jusqu'au genou), tandis que les jambes complètes incluent également les cuisses. La séance dure 45 min au lieu de 30 min.",
      },
      {
        question: "Puis-je épiler jambes complètes et maillot lors de la même visite ?",
        answer: "Oui, c'est même recommandé pour un résultat harmonieux. Prévenez-nous lors de votre prise de rendez-vous pour réserver le créneau adéquat.",
      },
      {
        question: "À quelle fréquence dois-je revenir pour l'épilation des jambes ?",
        answer: "En général, toutes les 3 à 4 semaines en début de parcours. Avec régularité, la repousse s'affaiblit et l'intervalle entre les séances peut s'allonger.",
      },
      {
        question: "L'épilation à la cire convient-elle aux peaux foncées comme celles des femmes béninoises ?",
        answer: "Absolument. La cire n'a aucun effet sur la pigmentation de la peau. Nos produits sont sélectionnés pour convenir à toutes les carnations, y compris les peaux mates et foncées.",
      },
    ],
    cta: {
      headline: "Réservez votre épilation jambes complètes à Cotonou",
      description: "Academy Beauty Gate, quartier Cadjehoun, Cotonou. Épilation professionnelle, résultats durables.",
    },
  },
  {
    slug: "epilation-bras-femme-cotonou",
    title: "Épilation Bras Femme à Cotonou | Academy Beauty Gate",
    metaDescription: "Épilation à la cire des bras pour femme à Cotonou, Cadjehoun. Bras lisses et soyeux dès 8 000 FCFA en 30 minutes. Salon Academy Beauty Gate.",
    category: "epilation-cire",
    hero: {
      imageAlt: "Épilation bras femme à la cire salon Academy Beauty Gate Cotonou Bénin",
      eyebrow: "Épilation à la Cire — Femme",
      headline: "Épilation Bras Femme à Cotonou",
      subheadline: "Des bras parfaitement lisses, du poignet à l'épaule. Une épilation professionnelle à la cire pour oser robes et hauts sans complexe.",
    },
    badges: [
      { icon: "✦", text: "Bras entiers ou avant-bras" },
      { icon: "✦", text: "Cire douce peaux sensibles" },
      { icon: "✦", text: "30 min chrono" },
      { icon: "✦", text: "Résultat immédiat" },
    ],
    intro: {
      imageAlt: "Épilation à la cire bras femme Cotonou Cadjehoun salon beauté",
      headline: "Des bras lisses pour toutes les occasions",
      description: "L'épilation des bras à la cire couvre l'ensemble du membre supérieur : avant-bras et bras jusqu'à l'épaule. Idéale pour les femmes à peau foncée qui souhaitent des bras parfaitement nets pour les sorties, les robes ou simplement au quotidien à Cotonou.",
      listItems: [
        "Traitement complet : avant-bras et bras jusqu'à l'épaule",
        "Cire adaptée aux peaux foncées et sensibles",
        "Résultat lisse et uniforme sur toute la surface",
        "Soin apaisant appliqué après l'épilation",
        "Séance rapide de 30 minutes, disponible à Cadjehoun",
      ],
    },
    benefits: [
      {
        title: "Liberté de porter ce que vous aimez",
        description: "Robes sans manches, hauts, tenues de fête — des bras lisses vous permettent d'assumer toutes vos tenues avec confiance.",
      },
      {
        title: "Peau exfoliée et lumineuse",
        description: "La cire retire non seulement les poils mais aussi les cellules mortes, laissant la peau des bras plus douce et plus homogène.",
      },
      {
        title: "Repousse progressive plus fine",
        description: "À chaque séance, le poil repousse plus fin. Après quelques mois de régularité, la pilosité des bras devient quasi imperceptible.",
      },
      {
        title: "Service disponible en combiné",
        description: "Combinez l'épilation des bras avec les aisselles ou le visage lors du même rendez-vous pour un résultat global optimal.",
      },
    ],
    pricing: {
      headline: "Tarifs Épilation Bras Femme",
      note: "Tarifs en FCFA, toutes taxes incluses.",
      items: [
        { label: "Épilation bras femme (bras complets)", price: "8 000 FCFA", note: "Séance unique — 30 min" },
        { label: "Cure 4 séances", price: "28 000 FCFA", note: "Économisez 4 000 FCFA" },
        { label: "Cure 6 séances", price: "40 000 FCFA", note: "Économisez 8 000 FCFA" },
      ],
    },
    faq: [
      {
        question: "L'épilation des bras à la cire inclut-elle les avant-bras et les bras ?",
        answer: "Oui, notre prestation couvre l'intégralité des bras, du poignet jusqu'à l'épaule. Si vous souhaitez uniquement les avant-bras, précisez-le lors de la réservation.",
      },
      {
        question: "La peau des bras est-elle plus sensible que les jambes ?",
        answer: "La peau du bras, notamment à l'intérieur, peut être plus fine. Nos esthéticiennes adaptent la technique et la température de la cire pour minimiser l'inconfort.",
      },
      {
        question: "Combien de temps durent les résultats sur les bras ?",
        answer: "En général 3 à 4 semaines. La pilosité des bras a tendance à repousser plus fine que celle des jambes, ce qui rend les résultats encore plus satisfaisants avec le temps.",
      },
      {
        question: "Puis-je faire une épilation bras + aisselles le même jour ?",
        answer: "Oui, et c'est une combinaison très populaire. Prévoyez un créneau d'environ 45 minutes pour les deux zones ensemble.",
      },
    ],
    cta: {
      headline: "Réservez votre épilation bras à Cotonou",
      description: "Academy Beauty Gate, quartier Cadjehoun, Cotonou. Des bras lisses et soyeux vous attendent.",
    },
  },
  {
    slug: "epilation-aisselles-femme-cotonou",
    title: "Épilation Aisselles Femme à Cotonou | Academy Beauty Gate",
    metaDescription: "Épilation aisselles femme à la cire à Cotonou, Cadjehoun — 5 000 FCFA en 15 min. Résultat net et durable. Salon Academy Beauty Gate.",
    category: "epilation-cire",
    hero: {
      imageAlt: "Épilation aisselles femme à la cire Cotonou salon Academy Beauty Gate",
      eyebrow: "Épilation à la Cire — Femme",
      headline: "Épilation Aisselles Femme à Cotonou",
      subheadline: "Des aisselles impeccables en 15 minutes à peine. La cire arrache le poil à la racine pour un résultat net, sans repousse pendant 3 semaines.",
    },
    badges: [
      { icon: "✦", text: "15 min express" },
      { icon: "✦", text: "Résultat net immédiat" },
      { icon: "✦", text: "5 000 FCFA seulement" },
      { icon: "✦", text: "Peau adoucie post-soin" },
    ],
    intro: {
      imageAlt: "Épilation aisselles cire femme salon beauté Cadjehoun Cotonou Bénin",
      headline: "L'essentiel de l'épilation féminine en un geste",
      description: "L'épilation des aisselles à la cire est l'une des prestations les plus demandées au salon Academy Beauty Gate. Rapide, efficace et abordable, elle offre un résultat impeccable dès la première séance. Idéale avant une sortie, un voyage ou simplement pour le confort quotidien.",
      listItems: [
        "Zone entièrement épilée en 15 minutes chrono",
        "Cire chaude qui dilate le pore pour un retrait plus facile",
        "Résultat lisse visible immédiatement après la séance",
        "Soin apaisant post-épilation pour calmer les rougeurs",
        "Service disponible sans rendez-vous selon disponibilité",
      ],
    },
    benefits: [
      {
        title: "Express et accessible",
        description: "En 15 minutes et pour 5 000 FCFA, vous repartez avec des aisselles parfaitement nettes — idéal même en pause déjeuner.",
      },
      {
        title: "Moins d'odeurs et plus de confort",
        description: "Sans poils, la transpiration s'évapore plus facilement et les bactéries responsables des odeurs se fixent moins bien sur la peau.",
      },
      {
        title: "Peau plus lisse à chaque séance",
        description: "Avec la régularité, les poils d'aisselle repoussent de plus en plus fins et rares, rendant l'épilation de moins en moins douloureuse.",
      },
      {
        title: "Adapté à toutes les carnations",
        description: "Nos produits sont formulés pour convenir aux peaux africaines, évitant les irritations et les taches post-épilation.",
      },
    ],
    pricing: {
      headline: "Tarifs Épilation Aisselles Femme",
      note: "Tarifs en FCFA, toutes taxes incluses.",
      items: [
        { label: "Épilation aisselles femme", price: "5 000 FCFA", note: "Séance unique — 15 min" },
        { label: "Cure 4 séances", price: "17 500 FCFA", note: "Économisez 2 500 FCFA" },
        { label: "Cure 6 séances", price: "25 000 FCFA", note: "Économisez 5 000 FCFA" },
      ],
    },
    faq: [
      {
        question: "L'épilation des aisselles à la cire est-elle très douloureuse ?",
        answer: "La zone des aisselles est sensible, mais la séance ne dure que 15 minutes. La douleur est brève et s'atténue nettement après quelques séances régulières.",
      },
      {
        question: "Puis-je mettre du déodorant après une épilation des aisselles ?",
        answer: "Attendez au moins 24 heures avant d'appliquer un déodorant ou un parfum sur la zone. Évitez également les produits alcoolisés pour ne pas irriter la peau.",
      },
      {
        question: "Quelle longueur de poil est nécessaire avant la séance ?",
        answer: "Les poils doivent mesurer au minimum 3 mm (environ 2 à 3 semaines de repousse après rasage). S'ils sont trop courts, la cire n'adhère pas correctement.",
      },
      {
        question: "Peut-on faire l'épilation aisselles en combiné avec d'autres zones ?",
        answer: "Oui, les aisselles se combinent souvent avec les bras, le maillot ou le visage. Informez-nous lors de la réservation pour anticiper la durée totale.",
      },
    ],
    cta: {
      headline: "Réservez votre épilation aisselles à Cotonou",
      description: "Academy Beauty Gate, quartier Cadjehoun, Cotonou. 15 minutes et vous repartez impeccable.",
    },
  },
  {
    slug: "epilation-maillot-simple-cotonou",
    title: "Épilation Maillot Simple à Cotonou | Academy Beauty Gate",
    metaDescription: "Épilation maillot simple à la cire à Cotonou, Cadjehoun — 8 000 FCFA en 20 min. Résultat net sur les côtés du maillot. Salon Academy Beauty Gate.",
    category: "epilation-cire",
    hero: {
      imageAlt: "Épilation maillot simple à la cire salon Academy Beauty Gate Cotonou Bénin",
      eyebrow: "Épilation à la Cire — Maillot",
      headline: "Épilation Maillot Simple à Cotonou",
      subheadline: "Un maillot net et soigné en 20 minutes. L'épilation maillot simple retire les poils dépassant des bords du maillot de bain pour un résultat propre et discret.",
    },
    badges: [
      { icon: "✦", text: "Zone bikini nettoyée" },
      { icon: "✦", text: "20 min express" },
      { icon: "✦", text: "Discret et efficace" },
      { icon: "✦", text: "Cire douce zones intimes" },
    ],
    intro: {
      imageAlt: "Épilation maillot simple cire femme salon Cadjehoun Cotonou",
      headline: "L'indispensable avant la plage ou la piscine",
      description: "L'épilation maillot simple concerne uniquement les parties dépassant du maillot de bain : les côtés de l'aine et le dessus du pubis. C'est la prestation idéale pour les femmes qui souhaitent un résultat net sans aller plus loin. Réalisée en 20 minutes avec une cire adaptée aux zones sensibles.",
      listItems: [
        "Épilation des côtés de l'aine et du haut du maillot",
        "Cire spéciale zones intimes, basse température",
        "Peau protégée grâce à un soin apaisant post-séance",
        "Résultat net et discret, visible immédiatement",
        "Rendez-vous dans un cadre intime et professionnel",
      ],
    },
    benefits: [
      {
        title: "Discret et ciblé",
        description: "Le maillot simple ne touche que les zones visibles. C'est la solution idéale pour les femmes qui ne souhaitent pas une épilation plus extensive.",
      },
      {
        title: "Cire adaptée aux zones sensibles",
        description: "La zone de l'aine nécessite une cire douce basse température. Nos esthéticiennes utilisent des produits formulés spécifiquement pour ces zones délicates.",
      },
      {
        title: "Confort et hygiène améliorés",
        description: "Une zone maillot bien épilée améliore nettement le confort quotidien, notamment par temps chaud comme à Cotonou.",
      },
      {
        title: "Option évolutive vers le brésilien",
        description: "Le maillot simple est une excellente porte d'entrée. Si vous souhaitez aller plus loin, nous proposons le maillot brésilien et l'intégral.",
      },
    ],
    pricing: {
      headline: "Tarifs Épilation Maillot Simple",
      note: "Tarifs en FCFA, toutes taxes incluses.",
      items: [
        { label: "Épilation maillot simple", price: "8 000 FCFA", note: "Séance unique — 20 min" },
        { label: "Cure 4 séances", price: "28 000 FCFA", note: "Économisez 4 000 FCFA" },
        { label: "Cure 6 séances", price: "40 000 FCFA", note: "Économisez 8 000 FCFA" },
      ],
    },
    faq: [
      {
        question: "Quelle est la différence entre maillot simple, brésilien et intégral ?",
        answer: "Le maillot simple retire uniquement les poils visibles sur les côtés du maillot. Le brésilien va plus loin sur les lèvres et l'arrière. L'intégral couvre toute la zone pubienne.",
      },
      {
        question: "Dois-je enlever mes sous-vêtements pour cette épilation ?",
        answer: "Votre esthéticienne vous guidera. Un string ou un culotte de papier jetable peut être fourni pour votre confort et votre hygiène.",
      },
      {
        question: "La zone du maillot est-elle plus douloureuse à épiler ?",
        answer: "La peau de l'aine est fine et sensible, donc la sensation est plus intense qu'aux jambes. Cela reste supportable et la séance est courte (20 min).",
      },
      {
        question: "Puis-je faire l'épilation maillot simple si j'ai mes règles ?",
        answer: "Nous vous déconseillons de venir pendant vos règles car la peau est plus sensible. Planifiez idéalement votre rendez-vous quelques jours avant ou après.",
      },
    ],
    cta: {
      headline: "Réservez votre épilation maillot à Cotonou",
      description: "Academy Beauty Gate, quartier Cadjehoun, Cotonou. Un maillot impeccable pour la plage ou la piscine.",
    },
  },
  {
    slug: "epilation-maillot-bresilien-cotonou",
    title: "Épilation Maillot Brésilien à Cotonou | Academy Beauty Gate",
    metaDescription: "Épilation maillot brésilien à la cire à Cotonou — 12 000 FCFA en 30 min. Laisse une bande. Salon Academy Beauty Gate, Cadjehoun.",
    category: "epilation-cire",
    hero: {
      imageAlt: "Épilation maillot brésilien à la cire Cotonou salon de beauté Cadjehoun",
      eyebrow: "Épilation à la Cire — Maillot",
      headline: "Épilation Maillot Brésilien à Cotonou",
      subheadline: "La finesse du brésilien en 30 minutes. Technique précise qui conserve une bande tout en épilant les lèvres et les zones arrière pour un résultat net et moderne.",
    },
    badges: [
      { icon: "✦", text: "Bande conservée" },
      { icon: "✦", text: "Lèvres et arrière épilés" },
      { icon: "✦", text: "Cire zones intimes" },
      { icon: "✦", text: "30 min, résultat précis" },
    ],
    intro: {
      imageAlt: "Épilation maillot brésilien cire femme salon Cotonou Bénin Cadjehoun",
      headline: "Le maillot brésilien : précision et élégance",
      description: "Le maillot brésilien va plus loin que le simple en épilant les lèvres et la partie arrière (entre les fesses), tout en conservant une bande de pilosité sur le devant. C'est la prestation la plus populaire pour les femmes souhaitant un résultat soigné sans aller jusqu'à l'intégral.",
      listItems: [
        "Épilation des lèvres, de l'aine et de la zone arrière",
        "Conservation d'une bande modulable selon vos préférences",
        "Cire basse température pour les zones les plus sensibles",
        "Soin apaisant et hydratant après la séance",
        "Réalisé dans un espace intime et sécurisé",
      ],
    },
    benefits: [
      {
        title: "Résultat net et esthétique",
        description: "Le brésilien offre un rendu soigné et élégant, très apprécié des femmes actives qui tiennent à leur apparence dans toutes les situations.",
      },
      {
        title: "Confort thermique optimal",
        description: "Dans le contexte climatique chaud de Cotonou, une zone intime bien épilée apporte un confort quotidien nettement amélioré.",
      },
      {
        title: "Technique maîtrisée en zones délicates",
        description: "Nos esthéticiennes sont formées pour travailler avec précision sur les zones les plus sensibles, en assurant à la fois efficacité et douceur.",
      },
      {
        title: "Personnalisable selon vos envies",
        description: "La largeur et la forme de la bande conservée sont modulables selon vos préférences. Dites-le à votre esthéticienne en début de séance.",
      },
    ],
    pricing: {
      headline: "Tarifs Épilation Maillot Brésilien",
      note: "Tarifs en FCFA, toutes taxes incluses.",
      items: [
        { label: "Épilation maillot brésilien", price: "12 000 FCFA", note: "Séance unique — 30 min" },
        { label: "Cure 4 séances", price: "42 000 FCFA", note: "Économisez 6 000 FCFA" },
        { label: "Cure 6 séances", price: "60 000 FCFA", note: "Économisez 12 000 FCFA" },
      ],
    },
    faq: [
      {
        question: "Le maillot brésilien laisse-t-il vraiment une bande ?",
        answer: "Oui, c'est la définition du brésilien. La bande peut être plus ou moins large selon vos préférences. Précisez-le à votre esthéticienne avant la séance.",
      },
      {
        question: "Est-ce que le brésilien inclut la zone arrière ?",
        answer: "Oui, le maillot brésilien inclut l'épilation entre les fesses (zone arrière / périnée). C'est ce qui le différencie du maillot simple.",
      },
      {
        question: "Quelle est la différence entre brésilien et intégral ?",
        answer: "Le brésilien conserve une bande sur le devant. L'intégral retire tout. Si vous hésitez, commencez par le brésilien.",
      },
      {
        question: "Comment me préparer avant mon épilation maillot brésilien ?",
        answer: "Assurez-vous d'avoir une repousse d'au moins 3 à 5 mm. Exfoliez doucement la veille et évitez les crèmes grasses le jour J pour favoriser l'adhérence de la cire.",
      },
    ],
    cta: {
      headline: "Réservez votre maillot brésilien à Cotonou",
      description: "Academy Beauty Gate, Cadjehoun, Cotonou. Précision, douceur et discrétion garanties.",
    },
  },
  {
    slug: "epilation-maillot-integral-cotonou",
    title: "Épilation Maillot Intégral à Cotonou | Academy Beauty Gate",
    metaDescription: "Épilation maillot intégral à la cire à Cotonou — 15 000 FCFA en 40 min. Zone entière traitée. Salon Academy Beauty Gate, Cadjehoun.",
    category: "epilation-cire",
    hero: {
      imageAlt: "Épilation maillot intégral cire femme Cotonou salon Academy Beauty Gate",
      eyebrow: "Épilation à la Cire — Maillot",
      headline: "Épilation Maillot Intégral à Cotonou",
      subheadline: "Une épilation totale et sans compromis en 40 minutes. Le maillot intégral retire l'intégralité des poils de la zone pubienne pour un confort et une propreté maximaux.",
    },
    badges: [
      { icon: "✦", text: "Zone entière traitée" },
      { icon: "✦", text: "Aucun résidu" },
      { icon: "✦", text: "Hygiène optimale" },
      { icon: "✦", text: "40 min, résultat total" },
    ],
    intro: {
      imageAlt: "Maillot intégral épilation cire femme salon beauté Cadjehoun Cotonou Bénin",
      headline: "La solution la plus complète pour la zone intime",
      description: "Le maillot intégral est l'épilation la plus complète : tout est retiré, du pubis aux lèvres en passant par la zone arrière. Idéale pour les femmes qui souhaitent une hygiène irréprochable, un confort total par temps chaud ou simplement une peau nette dans l'intimité.",
      listItems: [
        "Épilation totale de la zone pubienne, lèvres et zone arrière",
        "Cire basse température spéciale zones intimes sensibles",
        "Aucun résidu de poil grâce à une technique méticuleuse",
        "Soin apaisant inclus en fin de séance",
        "Réalisé dans un cadre intime, professionnel et discret",
      ],
    },
    benefits: [
      {
        title: "Hygiène irréprochable",
        description: "Sans pilosité, la zone intime est plus facile à nettoyer et l'accumulation de bactéries est réduite — un vrai confort au quotidien en climat tropical.",
      },
      {
        title: "Peau lisse pendant 3 à 4 semaines",
        description: "L'intégral à la cire offre la durée de résultat la plus longue parmi toutes les méthodes d'épilation intime disponibles.",
      },
      {
        title: "Geste précis sur toute la zone",
        description: "Nos esthéticiennes maîtrisent le travail en zones délicates et procèdent avec minutie pour un résultat complet et sans irritation.",
      },
      {
        title: "Repousse plus fine avec le temps",
        description: "Avec la régularité des séances, les poils repoussent progressivement plus fins et moins denses, rendant chaque séance plus confortable.",
      },
    ],
    pricing: {
      headline: "Tarifs Épilation Maillot Intégral",
      note: "Tarifs en FCFA, toutes taxes incluses.",
      items: [
        { label: "Épilation maillot intégral", price: "15 000 FCFA", note: "Séance unique — 40 min" },
        { label: "Cure 4 séances", price: "52 500 FCFA", note: "Économisez 7 500 FCFA" },
        { label: "Cure 6 séances", price: "75 000 FCFA", note: "Économisez 15 000 FCFA" },
      ],
    },
    faq: [
      {
        question: "L'intégral est-il plus douloureux que le brésilien ?",
        answer: "Il peut l'être légèrement plus car toute la zone est traitée. Cependant, avec une bonne préparation de la peau et une esthéticienne expérimentée, l'inconfort reste très gérable.",
      },
      {
        question: "Faut-il une préparation particulière avant un maillot intégral ?",
        answer: "Exfoliez la veille pour un meilleur retrait des poils. Repousse minimale de 3 à 5 mm requise. Évitez les activités sportives intenses le jour même.",
      },
      {
        question: "Puis-je faire un intégral si je n'ai jamais fait d'épilation intime avant ?",
        answer: "Oui, mais sachez que la première séance est toujours la plus intense. Les séances suivantes sont nettement plus confortables car les poils s'affaiblissent.",
      },
      {
        question: "Après l'épilation intégrale, que faut-il éviter ?",
        answer: "Pendant 24 à 48h, évitez les bains chauds, la piscine, les rapports sexuels et les vêtements synthétiques serrés pour laisser la peau récupérer.",
      },
    ],
    cta: {
      headline: "Réservez votre maillot intégral à Cotonou",
      description: "Academy Beauty Gate, quartier Cadjehoun, Cotonou. Discrétion, expertise et confort total.",
    },
  },
  {
    slug: "epilation-fessier-femme-cotonou",
    title: "Épilation Fessier Femme à Cotonou | Academy Beauty Gate",
    metaDescription: "Épilation fessier femme à la cire à Cotonou, Cadjehoun — 12 000 FCFA en 20 min. Peau lisse et nette. Salon Academy Beauty Gate.",
    category: "epilation-cire",
    hero: {
      imageAlt: "Épilation fessier femme cire salon Academy Beauty Gate Cotonou Bénin",
      eyebrow: "Épilation à la Cire — Femme",
      headline: "Épilation Fessier Femme à Cotonou",
      subheadline: "Une zone souvent oubliée, toujours appréciée. L'épilation du fessier à la cire offre une peau nette et lisse sur toute la partie arrière en 20 minutes.",
    },
    badges: [
      { icon: "✦", text: "Fessier complet traité" },
      { icon: "✦", text: "Cire zones délicates" },
      { icon: "✦", text: "20 min express" },
      { icon: "✦", text: "Souvent combiné au maillot" },
    ],
    intro: {
      imageAlt: "Épilation fessier cire femme Cotonou Cadjehoun salon de beauté",
      headline: "Une attention particulière pour chaque zone",
      description: "L'épilation du fessier couvre les fesses et la zone interfessière. Discrète mais essentielle pour un résultat global harmonieux, cette prestation est souvent associée à l'épilation maillot brésilien ou intégral. À Academy Beauty Gate, elle est réalisée avec soin dans le respect de votre intimité.",
      listItems: [
        "Traitement du fessier et de la zone interfessière",
        "Cire adaptée pour une adhérence optimale sur cette zone",
        "Résultat lisse visible immédiatement après la séance",
        "Souvent associée au maillot brésilien ou intégral",
        "Séance courte de 20 minutes dans un espace privatisé",
      ],
    },
    benefits: [
      {
        title: "Résultat harmonieux et complet",
        description: "Associée au maillot, l'épilation du fessier complète le traitement pour un résultat intégral et cohérent sur toute la zone intime.",
      },
      {
        title: "Hygiène et confort améliorés",
        description: "Une zone arrière épilée facilite l'hygiène quotidienne et améliore le confort, surtout par la chaleur tropicale de Cotonou.",
      },
      {
        title: "Peau exfoliée et douce",
        description: "La cire traite aussi les petites imperfections cutanées du fessier, révélant une peau plus lisse et plus homogène.",
      },
      {
        title: "Discrétion assurée",
        description: "Nos esthéticiennes travaillent dans un espace fermé, dans le plus grand respect de votre intimité et de votre confort.",
      },
    ],
    pricing: {
      headline: "Tarifs Épilation Fessier Femme",
      note: "Tarifs en FCFA, toutes taxes incluses.",
      items: [
        { label: "Épilation fessier femme", price: "12 000 FCFA", note: "Séance unique — 20 min" },
        { label: "Cure 4 séances", price: "42 000 FCFA", note: "Économisez 6 000 FCFA" },
        { label: "Cure 6 séances", price: "60 000 FCFA", note: "Économisez 12 000 FCFA" },
      ],
    },
    faq: [
      {
        question: "L'épilation du fessier est-elle douloureuse ?",
        answer: "La zone est généralement moins sensible que le maillot avant. La plupart des clientes la trouvent supportable, surtout avec une esthéticienne expérimentée.",
      },
      {
        question: "Peut-on combiner fessier et maillot lors de la même séance ?",
        answer: "Oui, c'est même recommandé. Le maillot brésilien et intégral incluent souvent la zone arrière, mais si vous souhaitez traiter uniquement le fessier, c'est tout à fait possible.",
      },
      {
        question: "Quelle longueur de poil faut-il pour le fessier ?",
        answer: "Comme pour toutes les zones : au moins 3 mm. Évitez d'avoir rasé dans les 2 à 3 semaines avant la séance.",
      },
      {
        question: "Le fessier est-il compris dans le maillot intégral ?",
        answer: "La zone interfessière est généralement incluse dans l'intégral. Si vous souhaitez également les fesses en surface, précisez-le à votre esthéticienne.",
      },
    ],
    cta: {
      headline: "Réservez votre épilation fessier à Cotonou",
      description: "Academy Beauty Gate, Cadjehoun, Cotonou. Intimité respectée, résultat irréprochable.",
    },
  },
  {
    slug: "vajacial-cotonou",
    title: "Vajacial à Cotonou | Academy Beauty Gate",
    metaDescription: "Vajacial à Cotonou, Cadjehoun — 30 000 FCFA, 1 heure. Soin complet post-épilation pour la zone intime. Hydratation, éclat et douceur. Salon Academy Beauty Gate.",
    category: "epilation-cire",
    hero: {
      imageAlt: "Vajacial soin intime femme salon Academy Beauty Gate Cotonou Bénin",
      eyebrow: "Soin Intime — Femme",
      headline: "Vajacial à Cotonou",
      subheadline: "Le facial de la zone intime. Un soin complet qui exfolie, hydrate et illumine la peau du pubis et de l'aine — idéal après une épilation ou pour traiter les poils incarnés.",
    },
    badges: [
      { icon: "✦", text: "Exfoliation profonde" },
      { icon: "✦", text: "Hydratation intensive" },
      { icon: "✦", text: "Anti-poils incarnés" },
      { icon: "✦", text: "1 heure de soin dédié" },
    ],
    intro: {
      imageAlt: "Vajacial soin exfoliant hydratant zone intime femme Cotonou Cadjehoun",
      headline: "Le vajacial : le soin intime qui révèle votre peau",
      description: "Le vajacial est un soin esthétique complet dédié à la zone pubienne. Inspiré du facial visage, il combine exfoliation, masque purifiant, sérum anti-taches et hydratation intensive. Parfait pour les femmes souffrant de poils incarnés, d'hyperpigmentation ou souhaitant simplement chouchouter leur zone intime.",
      listItems: [
        "Nettoyage et démaquillage doux de la zone",
        "Exfoliation pour éliminer cellules mortes et prévenir les poils incarnés",
        "Masque purifiant et apaisant sur la zone pubienne",
        "Sérum anti-taches et anti-hyperpigmentation",
        "Hydratation finale pour une peau douce et lumineuse",
      ],
    },
    benefits: [
      {
        title: "Combat les poils incarnés",
        description: "L'exfoliation régulière libère les poils piégés sous la peau, réduit l'inflammation et prévient les récidives post-épilation.",
      },
      {
        title: "Réduit l'hyperpigmentation",
        description: "Les actifs éclaircissants du vajacial atténuent les taches sombres souvent présentes dans la zone de l'aine, fréquentes sur les peaux foncées.",
      },
      {
        title: "Prépare la peau pour l'épilation suivante",
        description: "Une peau exfoliée et bien hydratée réagit mieux à la cire : moins de rougeurs, meilleure adhérence, résultat plus net.",
      },
      {
        title: "Soin de bien-être complet",
        description: "Au-delà des résultats visibles, le vajacial est un moment dédié à votre corps et à votre féminité, à vivre sans complexe.",
      },
    ],
    pricing: {
      headline: "Tarifs Vajacial",
      note: "Tarifs en FCFA, toutes taxes incluses.",
      items: [
        { label: "Vajacial", price: "30 000 FCFA", note: "Séance unique — 1 heure" },
        { label: "Vajacial + soin fessier", price: "45 000 FCFA", note: "Combo — 1h30" },
      ],
    },
    faq: [
      {
        question: "C'est quoi exactement un vajacial ?",
        answer: "C'est un soin esthétique de la zone pubienne inspiré du facial visage : nettoyage, exfoliation, masque, sérum et hydratation. Il ne touche pas les parties internes génitales.",
      },
      {
        question: "Faut-il avoir fait une épilation avant le vajacial ?",
        answer: "Il est recommandé de réaliser le vajacial 24 à 48h après une épilation, une fois les rougeurs calmées. Il peut aussi être réalisé sans épilation préalable.",
      },
      {
        question: "Le vajacial convient-il aux peaux foncées ?",
        answer: "Absolument. Les actifs choisis sont adaptés aux peaux africaines et ciblent spécifiquement l'hyperpigmentation de l'aine fréquente sur les peaux mates et foncées.",
      },
      {
        question: "À quelle fréquence faire un vajacial ?",
        answer: "Une fois par mois est idéal, en alternance avec vos séances d'épilation. Il peut aussi être réalisé en cure de 3 à 4 séances pour traiter une hyperpigmentation marquée.",
      },
    ],
    cta: {
      headline: "Réservez votre vajacial à Cotonou",
      description: "Academy Beauty Gate, quartier Cadjehoun, Cotonou. Offrez à votre peau intime le soin qu'elle mérite.",
    },
  },
  {
    slug: "vajacial-soin-fessier-cotonou",
    title: "Vajacial + Soin Fessier à Cotonou | Academy Beauty Gate",
    metaDescription: "Vajacial et soin fessier en combo à Cotonou — 45 000 FCFA, 1h30. Soin complet zone intime et fessier. Salon Academy Beauty Gate, Cadjehoun.",
    category: "epilation-cire",
    hero: {
      imageAlt: "Vajacial et soin fessier combo femme salon Academy Beauty Gate Cotonou",
      eyebrow: "Soin Intime — Femme",
      headline: "Vajacial + Soin Fessier à Cotonou",
      subheadline: "Le soin intime intégral en 1h30. Vajacial pour la zone pubienne et soin exfoliant-hydratant pour le fessier — une combinaison unique pour une peau impeccable de la tête aux pieds.",
    },
    badges: [
      { icon: "✦", text: "Soin zone pubienne + fessier" },
      { icon: "✦", text: "Exfoliation double zone" },
      { icon: "✦", text: "Anti-taches et poils incarnés" },
      { icon: "✦", text: "1h30 de soin dédié" },
    ],
    intro: {
      imageAlt: "Soin vajacial fessier exfoliant hydratant femme Cotonou Bénin",
      headline: "Le duo soin intime le plus complet du salon",
      description: "La combinaison vajacial + soin fessier est la prestation la plus complète de notre menu intime. Le vajacial prend soin de la zone pubienne (exfoliation, masque, anti-taches) tandis que le soin fessier traite les imperfections du bas du dos et des fesses : pores dilatés, petits boutons, peau rugueuse et inégale de teint.",
      listItems: [
        "Vajacial complet : nettoyage, exfoliation, masque et hydratation de la zone pubienne",
        "Soin fessier : exfoliation et masque nourrissant sur les fesses",
        "Actifs anti-taches et anti-hyperpigmentation sur les deux zones",
        "Hydratation finale intensive pour une peau lisse et unifiée",
        "Séance de 1h30 dans un espace privatisé et confortable",
      ],
    },
    benefits: [
      {
        title: "Traitement global de la zone intime",
        description: "Devant et arrière traités lors d'une seule visite pour un résultat harmonieux et complet sur toute la zone.",
      },
      {
        title: "Peau du fessier transformée",
        description: "Le soin fessier élimine la kératose pilaire, les taches et la rugosité, révélant une peau douce et homogène souvent négligée.",
      },
      {
        title: "Économie par rapport aux soins séparés",
        description: "À 45 000 FCFA, le combo représente une économie significative par rapport à la réservation séparée du vajacial (30 000 FCFA) et d'un soin dédié.",
      },
      {
        title: "Soin de luxe accessible à Cotonou",
        description: "Ce type de soin intime premium était jusqu'ici réservé aux grandes capitales. Academy Beauty Gate le propose au cœur de Cadjehoun.",
      },
    ],
    pricing: {
      headline: "Tarifs Vajacial + Soin Fessier",
      note: "Tarifs en FCFA, toutes taxes incluses.",
      items: [
        { label: "Vajacial seul", price: "30 000 FCFA", note: "1 heure" },
        { label: "Vajacial + Soin Fessier", price: "45 000 FCFA", note: "Combo — 1h30" },
      ],
    },
    faq: [
      {
        question: "En quoi consiste le soin fessier dans ce combo ?",
        answer: "Le soin fessier inclut une exfoliation douce, un masque nourrissant et une application d'actifs anti-taches sur les fesses. Il cible la kératose pilaire, les pores dilatés et les inégalités de teint.",
      },
      {
        question: "Ce soin convient-il après une épilation fessier ?",
        answer: "Idéalement, attendez 48h après l'épilation avant de réaliser ce soin. La peau est alors calmée et prête à recevoir les actifs exfoliants et hydratants.",
      },
      {
        question: "À quelle fréquence recommandez-vous ce combo ?",
        answer: "Une fois par mois est parfait. Vous pouvez l'intégrer dans votre routine mensuelle : épilation + combo vajacial/fessier quelques jours après.",
      },
      {
        question: "Est-ce disponible en cure pour économiser ?",
        answer: "Oui, renseignez-vous à l'accueil du salon pour les offres de cure sur ce combo. Des tarifs préférentiels sont disponibles pour les clientes régulières.",
      },
    ],
    cta: {
      headline: "Réservez votre combo vajacial + fessier à Cotonou",
      description: "Academy Beauty Gate, Cadjehoun, Cotonou. Le soin intime le plus complet du salon vous attend.",
    },
  },
  {
    slug: "epilation-sourcils-femme-cotonou",
    title: "Épilation Sourcils Femme à Cotonou | Academy Beauty Gate",
    metaDescription: "Épilation sourcils femme à la cire à Cotonou, Cadjehoun — 2 000 FCFA en 15 min. Sourcils mis en forme et définis. Salon Academy Beauty Gate.",
    category: "epilation-cire",
    hero: {
      imageAlt: "Épilation sourcils femme à la cire salon Academy Beauty Gate Cotonou",
      eyebrow: "Épilation Visage — Femme",
      headline: "Épilation Sourcils Femme à Cotonou",
      subheadline: "Des sourcils parfaitement dessinés en 15 minutes. La cire permet une mise en forme précise pour des sourcils nets, définis et harmonieux avec votre visage.",
    },
    badges: [
      { icon: "✦", text: "Mise en forme précise" },
      { icon: "✦", text: "15 min chrono" },
      { icon: "✦", text: "2 000 FCFA seulement" },
      { icon: "✦", text: "Résultat immédiat" },
    ],
    intro: {
      imageAlt: "Mise en forme sourcils cire femme salon beauté Cadjehoun Cotonou Bénin",
      headline: "Des sourcils qui subliment votre regard",
      description: "L'épilation des sourcils à la cire est l'un des gestes beauté les plus transformateurs. Une bonne mise en forme ouvre le regard, structure le visage et donne un coup d'éclat instantané. À Academy Beauty Gate, nos esthéticiennes dessinent vos sourcils en respectant la forme naturelle de votre visage.",
      listItems: [
        "Analyse de la forme du visage avant la mise en forme",
        "Retrait à la cire des poils entre et sous les sourcils",
        "Finitions au fil ou à la pince selon les besoins",
        "Soin apaisant appliqué après pour éviter les rougeurs",
        "Résultat immédiat, sourcils nets et définis",
      ],
    },
    benefits: [
      {
        title: "Regard ouvert et lumineux",
        description: "Des sourcils bien dessinés ouvrent visuellement les yeux et illuminent le visage, même sans maquillage.",
      },
      {
        title: "Mise en forme adaptée à votre visage",
        description: "Nos esthéticiennes tiennent compte de la forme de votre visage (ovale, rond, carré) pour créer une arche harmonieuse et flatteuse.",
      },
      {
        title: "Geste beauté essentiel et abordable",
        description: "À seulement 2 000 FCFA, l'épilation des sourcils est le meilleur investissement beauté pour un rendu soigné au quotidien.",
      },
      {
        title: "Résultat durable 2 à 3 semaines",
        description: "La cire retire les poils à la racine pour un résultat plus durable que le fil ou la pince seuls.",
      },
    ],
    pricing: {
      headline: "Tarifs Épilation Sourcils Femme",
      note: "Tarifs en FCFA, toutes taxes incluses.",
      items: [
        { label: "Épilation sourcils femme", price: "2 000 FCFA", note: "Séance unique — 15 min" },
        { label: "Cure 4 séances", price: "7 000 FCFA", note: "Économisez 1 000 FCFA" },
        { label: "Cure 6 séances", price: "10 000 FCFA", note: "Économisez 2 000 FCFA" },
      ],
    },
    faq: [
      {
        question: "Peut-on choisir la forme de ses sourcils ?",
        answer: "Oui, vous pouvez indiquer vos préférences (sourcils droits, arqués, épais, fins). Notre esthéticienne vous conseillera en fonction de la forme de votre visage.",
      },
      {
        question: "L'épilation des sourcils à la cire abîme-t-elle les poils ?",
        answer: "Non, à condition de ne pas en faire trop souvent. Une épilation toutes les 2 à 4 semaines permet aux poils de repousser normalement.",
      },
      {
        question: "Puis-je associer l'épilation des sourcils à d'autres zones du visage ?",
        answer: "Oui, sourcils + lèvres + menton est une combinaison très populaire. Prévenez-nous lors de la réservation pour bloquer le bon créneau.",
      },
      {
        question: "Est-ce douloureux d'épiler les sourcils à la cire ?",
        answer: "La zone des sourcils est sensible mais la douleur est très brève. La plupart des clientes s'y habituent très rapidement dès la deuxième séance.",
      },
    ],
    cta: {
      headline: "Réservez votre mise en forme de sourcils à Cotonou",
      description: "Academy Beauty Gate, quartier Cadjehoun, Cotonou. Des sourcils parfaits pour sublimer votre regard.",
    },
  },
  {
    slug: "epilation-levres-femme-cotonou",
    title: "Épilation Lèvres Femme à Cotonou | Academy Beauty Gate",
    metaDescription: "Épilation lèvres (duvet) femme à la cire à Cotonou — 3 000 FCFA en 10 min. Duvet retiré proprement. Salon Academy Beauty Gate, Cadjehoun.",
    category: "epilation-cire",
    hero: {
      imageAlt: "Épilation lèvres duvet femme cire salon Academy Beauty Gate Cotonou",
      eyebrow: "Épilation Visage — Femme",
      headline: "Épilation Lèvres Femme à Cotonou",
      subheadline: "Un geste discret pour un résultat immédiat. L'épilation des lèvres à la cire retire le duvet en 10 minutes pour un visage lisse et soigné.",
    },
    badges: [
      { icon: "✦", text: "10 min express" },
      { icon: "✦", text: "Duvet retiré à la racine" },
      { icon: "✦", text: "3 000 FCFA" },
      { icon: "✦", text: "Visage net et soigné" },
    ],
    intro: {
      imageAlt: "Épilation duvet lèvres femme cire visage salon Cadjehoun Cotonou Bénin",
      headline: "Le détail qui fait toute la différence",
      description: "L'épilation des lèvres (lèvre supérieure) retire le duvet ou les poils plus foncés qui peuvent apparaître au-dessus de la bouche. Un geste discret en 10 minutes qui améliore nettement la netteté du visage et facilite l'application du maquillage.",
      listItems: [
        "Retrait du duvet ou poils foncés au-dessus de la lèvre supérieure",
        "Cire adaptée aux zones fines et sensibles du visage",
        "Résultat lisse immédiat pour un visage plus net",
        "Application d'un soin apaisant post-épilation",
        "Facilite l'application du rouge à lèvres et du maquillage",
      ],
    },
    benefits: [
      {
        title: "Visage plus soigné et lumineux",
        description: "Sans duvet visible, le teint paraît plus homogène et le visage plus frais — même sans fond de teint.",
      },
      {
        title: "Maquillage qui tient mieux",
        description: "La cire exfolie légèrement la peau des lèvres, permettant une meilleure adhérence du fond de teint et du rouge à lèvres.",
      },
      {
        title: "Geste rapide et abordable",
        description: "En 10 minutes et pour 3 000 FCFA, c'est l'un des gestes beauté les plus efficaces pour le résultat obtenu.",
      },
      {
        title: "Repousse progressivement plus fine",
        description: "Contrairement aux idées reçues, la cire n'épaissit pas les poils. Au contraire, la repousse devient plus fine séance après séance.",
      },
    ],
    pricing: {
      headline: "Tarifs Épilation Lèvres Femme",
      note: "Tarifs en FCFA, toutes taxes incluses.",
      items: [
        { label: "Épilation lèvres femme", price: "3 000 FCFA", note: "Séance unique — 10 min" },
        { label: "Cure 4 séances", price: "10 500 FCFA", note: "Économisez 1 500 FCFA" },
        { label: "Cure 6 séances", price: "15 000 FCFA", note: "Économisez 3 000 FCFA" },
      ],
    },
    faq: [
      {
        question: "L'épilation des lèvres ne risque-t-elle pas de faire pousser les poils plus forts ?",
        answer: "Non, c'est un mythe. La cire retire le poil à la racine et n'influence pas l'épaisseur ni la densité de la repousse. Bien au contraire, elle s'affine avec le temps.",
      },
      {
        question: "Puis-je épiler les lèvres si j'utilise du rétinol ou des acides ?",
        answer: "Si vous utilisez des actifs exfoliants (rétinol, AHA/BHA), arrêtez-les 3 à 5 jours avant la séance. La peau est plus fine et réagit davantage à la cire.",
      },
      {
        question: "Combien de temps sans duvet après l'épilation des lèvres ?",
        answer: "En général 2 à 3 semaines. La zone des lèvres repousse relativement vite, c'est pourquoi beaucoup de clientes reviennent toutes les 2 à 3 semaines.",
      },
      {
        question: "Peut-on combiner lèvres + menton + sourcils en une seule visite ?",
        answer: "Oui, absolument. Ce trio est notre combinaison visage la plus populaire. Comptez environ 30 à 40 minutes pour les trois zones ensemble.",
      },
    ],
    cta: {
      headline: "Réservez votre épilation lèvres à Cotonou",
      description: "Academy Beauty Gate, quartier Cadjehoun, Cotonou. Un visage impeccable en 10 minutes.",
    },
  },
  {
    slug: "epilation-menton-femme-cotonou",
    title: "Épilation Menton Femme à Cotonou | Academy Beauty Gate",
    metaDescription: "Épilation menton femme à la cire à Cotonou, Cadjehoun — 3 000 FCFA en 10 min. Menton lisse et net. Salon Academy Beauty Gate.",
    category: "epilation-cire",
    hero: {
      imageAlt: "Épilation menton femme cire salon Academy Beauty Gate Cotonou Bénin",
      eyebrow: "Épilation Visage — Femme",
      headline: "Épilation Menton Femme à Cotonou",
      subheadline: "Un menton lisse et net en 10 minutes. La cire retire les poils ou le duvet du menton pour un visage parfaitement soigné, à tout âge.",
    },
    badges: [
      { icon: "✦", text: "10 min express" },
      { icon: "✦", text: "Poils et duvet retirés" },
      { icon: "✦", text: "3 000 FCFA" },
      { icon: "✦", text: "Zone sensible maîtrisée" },
    ],
    intro: {
      imageAlt: "Épilation menton femme cire visage Cotonou Cadjehoun salon beauté",
      headline: "Un menton impeccable pour un visage soigné",
      description: "L'épilation du menton à la cire traite les poils isolés ou le duvet qui peuvent apparaître sur cette zone, souvent liés à des variations hormonales. Discrète mais essentielle, cette prestation s'intègre idéalement dans une routine d'épilation visage complète.",
      listItems: [
        "Retrait des poils et du duvet sur toute la zone du menton",
        "Cire douce adaptée à la peau fine du visage",
        "Résultat net et lisse visible immédiatement",
        "Soin apaisant pour calmer la réaction de la peau",
        "Peut être associée à lèvres, joues et cou en une seule visite",
      ],
    },
    benefits: [
      {
        title: "Visage propre et soigné",
        description: "Des poils visibles au menton peuvent nuire à l'apparence soignée du visage. La cire règle ce problème discrètement en 10 minutes.",
      },
      {
        title: "Solution pour les variations hormonales",
        description: "Les poils du menton chez la femme sont souvent liés aux variations hormonales. L'épilation régulière à la cire est la méthode la plus efficace pour les gérer.",
      },
      {
        title: "Résultat plus propre que la pince",
        description: "La cire retire plusieurs poils à la fois à la racine, pour un résultat plus net et plus durable que l'épilation à la pince poil par poil.",
      },
      {
        title: "Intégrable dans un soin visage complet",
        description: "Associez l'épilation du menton au soin visage de votre choix pour une expérience beauté complète en une seule visite.",
      },
    ],
    pricing: {
      headline: "Tarifs Épilation Menton Femme",
      note: "Tarifs en FCFA, toutes taxes incluses.",
      items: [
        { label: "Épilation menton femme", price: "3 000 FCFA", note: "Séance unique — 10 min" },
        { label: "Cure 4 séances", price: "10 500 FCFA", note: "Économisez 1 500 FCFA" },
        { label: "Cure 6 séances", price: "15 000 FCFA", note: "Économisez 3 000 FCFA" },
      ],
    },
    faq: [
      {
        question: "Les poils du menton chez la femme, c'est normal ?",
        answer: "Oui, c'est très fréquent, souvent lié à des variations hormonales (ménopause, contraception, syndrome des ovaires polykystiques). L'épilation à la cire est la solution la plus efficace.",
      },
      {
        question: "À quelle fréquence épiler le menton ?",
        answer: "Toutes les 2 à 4 semaines selon votre rythme de repousse. Les poils du menton ont tendance à repousser assez rapidement.",
      },
      {
        question: "La cire convient-elle aux peaux sensibles ou réactives du visage ?",
        answer: "Oui, nous utilisons une cire douce basse température adaptée au visage. Informez votre esthéticienne si vous avez une peau réactive ou utilisez des traitements cutanés.",
      },
      {
        question: "Puis-je épiler menton + lèvres + joues en une seule visite ?",
        answer: "Oui, et c'est très efficace. Cette combinaison est notre forfait visage entier à 10 000 FCFA, disponible en une séance de 30 minutes.",
      },
    ],
    cta: {
      headline: "Réservez votre épilation menton à Cotonou",
      description: "Academy Beauty Gate, quartier Cadjehoun, Cotonou. Un menton lisse en 10 minutes.",
    },
  },
  {
    slug: "epilation-joues-femme-cotonou",
    title: "Épilation Joues Femme à Cotonou | Academy Beauty Gate",
    metaDescription: "Épilation joues femme à la cire à Cotonou — 3 000 FCFA en 10 min. Duvet des joues retiré. Teint unifié. Salon Academy Beauty Gate, Cadjehoun.",
    category: "epilation-cire",
    hero: {
      imageAlt: "Épilation joues femme cire visage salon Academy Beauty Gate Cotonou",
      eyebrow: "Épilation Visage — Femme",
      headline: "Épilation Joues Femme à Cotonou",
      subheadline: "Des joues lisses et veloutées en 10 minutes. L'épilation du duvet des joues unifie le teint et donne un fini peau de pêche naturel.",
    },
    badges: [
      { icon: "✦", text: "Duvet joues retiré" },
      { icon: "✦", text: "Teint unifié" },
      { icon: "✦", text: "10 min express" },
      { icon: "✦", text: "Peau de pêche garantie" },
    ],
    intro: {
      imageAlt: "Épilation duvet joues femme cire visage Cotonou salon Cadjehoun Bénin",
      headline: "Des joues nettes pour un visage radieux",
      description: "Le duvet des joues peut alourdir visuellement le teint et gêner l'application du fond de teint. L'épilation des joues à la cire retire ce voile de duvet en 10 minutes, révélant une peau plus nette, plus lumineuse et mieux préparée pour le maquillage.",
      listItems: [
        "Retrait du duvet sur toute la surface des joues",
        "Cire douce adaptée à la peau sensible du visage",
        "Teint plus unifié et lumineux après la séance",
        "Maquillage qui adhère et tient mieux sur peau épilée",
        "Séance de 10 minutes, résultat visible immédiatement",
      ],
    },
    benefits: [
      {
        title: "Effet peau nette immédiat",
        description: "Sans duvet, le teint paraît plus propre, les pores semblent plus resserrés et le visage rayonne d'un éclat naturel.",
      },
      {
        title: "Base maquillage optimisée",
        description: "Le fond de teint et le blush adhèrent mieux sur une peau épilée, offrant un rendu plus lisse et une meilleure tenue.",
      },
      {
        title: "Geste beauté discret et efficace",
        description: "L'épilation des joues est l'un des gestes les plus transformateurs pour peu visible à l'œil nu mais dont l'effet sur le rendu global est spectaculaire.",
      },
      {
        title: "Combinable avec le reste du visage",
        description: "Joues + lèvres + menton + sourcils : le visage entier peut être épilé en une seule visite pour un résultat global harmonieux.",
      },
    ],
    pricing: {
      headline: "Tarifs Épilation Joues Femme",
      note: "Tarifs en FCFA, toutes taxes incluses.",
      items: [
        { label: "Épilation joues femme", price: "3 000 FCFA", note: "Séance unique — 10 min" },
        { label: "Cure 4 séances", price: "10 500 FCFA", note: "Économisez 1 500 FCFA" },
        { label: "Cure 6 séances", price: "15 000 FCFA", note: "Économisez 3 000 FCFA" },
      ],
    },
    faq: [
      {
        question: "L'épilation du duvet des joues ne risque-t-elle pas de faire pousser des poils plus foncés ?",
        answer: "Non, c'est un mythe courant. La cire n'influe pas sur la couleur ni l'épaisseur des poils. Le duvet repousse de la même façon, voire plus fin avec le temps.",
      },
      {
        question: "Faut-il préparer la peau des joues avant la séance ?",
        answer: "Venez avec le visage propre, sans crème ni fond de teint. Si vous utilisez du rétinol ou des AHA, arrêtez 3 à 5 jours avant la séance.",
      },
      {
        question: "La cire convient-elle aux joues avec acné ou boutons ?",
        answer: "Évitez l'épilation sur des zones avec acné active ou lésions. Informez votre esthéticienne qui adaptera la technique ou vous redirigera vers un soin adapté.",
      },
      {
        question: "Peut-on épiler les joues en même temps que le reste du visage ?",
        answer: "Oui, et c'est même recommandé. Notre forfait visage entier à 10 000 FCFA couvre toutes les zones du visage en 30 minutes.",
      },
    ],
    cta: {
      headline: "Réservez votre épilation joues à Cotonou",
      description: "Academy Beauty Gate, quartier Cadjehoun, Cotonou. Des joues veloutées et un teint radieux.",
    },
  },
  {
    slug: "epilation-cou-femme-cotonou",
    title: "Épilation Cou Femme à Cotonou | Academy Beauty Gate",
    metaDescription: "Épilation cou femme à la cire à Cotonou — 4 000 FCFA en 15 min. Cou lisse et net. Salon Academy Beauty Gate, Cadjehoun.",
    category: "epilation-cire",
    hero: {
      imageAlt: "Épilation cou femme cire salon Academy Beauty Gate Cotonou Bénin",
      eyebrow: "Épilation Visage — Femme",
      headline: "Épilation Cou Femme à Cotonou",
      subheadline: "Un cou parfaitement lisse en 15 minutes. L'épilation du cou à la cire retire les poils indésirables pour un décolleté et un cou nets, visibles de toutes les tenues.",
    },
    badges: [
      { icon: "✦", text: "Cou entier traité" },
      { icon: "✦", text: "15 min seulement" },
      { icon: "✦", text: "4 000 FCFA" },
      { icon: "✦", text: "Parfait sous les chignons" },
    ],
    intro: {
      imageAlt: "Épilation cou femme cire Cotonou Cadjehoun salon de beauté Bénin",
      headline: "Un cou impeccable pour toutes les tenues",
      description: "Les poils du cou, qu'ils soient dans la nuque, sur les côtés ou devant, peuvent gêner l'apparence d'une tenue dégagée. L'épilation du cou à la cire offre un résultat net et durable, idéal pour les femmes qui portent des chignons, des robes décolletées ou des coiffures relevées.",
      listItems: [
        "Traitement du cou : nuque, côtés et avant si nécessaire",
        "Cire adaptée à la peau plus épaisse de cette zone",
        "Résultat net et lisse visible immédiatement",
        "Soin apaisant post-épilation pour éviter les rougeurs",
        "Idéal avant un événement ou pour le quotidien",
      ],
    },
    benefits: [
      {
        title: "Tenues dégagées assumées",
        description: "Robes dos nu, chignons, cols en V : avec un cou épilé, vous portez toutes vos tenues avec assurance et élégance.",
      },
      {
        title: "Hygiène et fraîcheur améliorées",
        description: "Par la chaleur de Cotonou, un cou épilé est plus facile à nettoyer et reste plus frais, surtout si vous portez souvent les cheveux relevés.",
      },
      {
        title: "Zone souvent négligée",
        description: "Le cou est une des zones les plus oubliées dans les routines beauté. L'intégrer à votre programme d'épilation change l'ensemble de votre silhouette.",
      },
      {
        title: "Résultat durable",
        description: "La cire maintient un résultat propre pendant 3 à 4 semaines, vous évitant de gérer cette zone au quotidien.",
      },
    ],
    pricing: {
      headline: "Tarifs Épilation Cou Femme",
      note: "Tarifs en FCFA, toutes taxes incluses.",
      items: [
        { label: "Épilation cou femme", price: "4 000 FCFA", note: "Séance unique — 15 min" },
        { label: "Cure 4 séances", price: "14 000 FCFA", note: "Économisez 2 000 FCFA" },
        { label: "Cure 6 séances", price: "20 000 FCFA", note: "Économisez 4 000 FCFA" },
      ],
    },
    faq: [
      {
        question: "L'épilation du cou inclut-elle la nuque ?",
        answer: "Oui, nous traitons l'ensemble du cou : la nuque, les côtés et la zone avant si nécessaire. Précisez les zones souhaitées à votre esthéticienne.",
      },
      {
        question: "Est-ce douloureux d'épiler le cou à la cire ?",
        answer: "La peau du cou est relativement fine mais la zone est souvent moins sensible que le visage ou le maillot. La plupart des clientes le trouvent très supportable.",
      },
      {
        question: "Puis-je épiler cou et visage lors de la même séance ?",
        answer: "Oui, c'est même idéal. Le cou et le visage se font facilement en combiné. Notre forfait visage entier peut inclure le cou à la demande.",
      },
      {
        question: "L'épilation du cou convient-elle si j'ai les cheveux courts ?",
        answer: "Oui, c'est même particulièrement recommandé pour les femmes aux cheveux courts ou portant des coiffures courtes qui laissent la nuque visible.",
      },
    ],
    cta: {
      headline: "Réservez votre épilation cou à Cotonou",
      description: "Academy Beauty Gate, quartier Cadjehoun, Cotonou. Un cou lisse pour toutes vos tenues.",
    },
  },
  {
    slug: "epilation-visage-entier-femme-cotonou",
    title: "Épilation Visage Entier Femme à Cotonou | Academy Beauty Gate",
    metaDescription: "Épilation visage entier femme à la cire à Cotonou — 10 000 FCFA en 30 min. Sourcils, lèvres, menton, joues, cou. Salon Academy Beauty Gate, Cadjehoun.",
    category: "epilation-cire",
    hero: {
      imageAlt: "Épilation visage entier femme cire salon Academy Beauty Gate Cotonou",
      eyebrow: "Épilation Visage — Femme",
      headline: "Épilation Visage Entier Femme à Cotonou",
      subheadline: "Toutes les zones du visage traitées en une seule séance de 30 minutes. Le forfait complet pour un visage parfaitement lisse, soigné et lumineux.",
    },
    badges: [
      { icon: "✦", text: "5 zones en 1 séance" },
      { icon: "✦", text: "30 min seulement" },
      { icon: "✦", text: "10 000 FCFA" },
      { icon: "✦", text: "Visage lumineux garanti" },
    ],
    intro: {
      imageAlt: "Épilation visage entier femme cire Cotonou Cadjehoun salon beauté Bénin",
      headline: "Le forfait visage le plus complet du salon",
      description: "Le forfait épilation visage entier regroupe toutes les zones du visage : sourcils, lèvres, menton, joues et cou. En 30 minutes et pour 10 000 FCFA, vous repartez avec un visage entièrement épilé, lisse et lumineux. La solution idéale pour un entretien complet en une seule visite.",
      listItems: [
        "Sourcils mis en forme selon la morphologie du visage",
        "Lèvres, menton et joues épilés à la cire douce",
        "Cou traité pour un rendu net sous toutes les tenues",
        "Soin apaisant post-épilation sur l'ensemble du visage",
        "30 minutes pour un résultat complet et harmonieux",
      ],
    },
    benefits: [
      {
        title: "Gain de temps maximum",
        description: "Toutes les zones du visage en une seule visite de 30 minutes. Plus besoin de revenir plusieurs fois pour traiter chaque zone séparément.",
      },
      {
        title: "Résultat harmonieux et unifié",
        description: "Un visage entièrement épilé en une seule séance assure un résultat cohérent et esthétiquement harmonieux sur l'ensemble du visage.",
      },
      {
        title: "Tarif le plus avantageux",
        description: "À 10 000 FCFA pour les 5 zones, le forfait visage entier est bien plus économique que la somme des prestations séparées (14 000 FCFA).",
      },
      {
        title: "Base beauté parfaite",
        description: "Un visage épilé est la meilleure base pour le maquillage. Fond de teint, blush et contour adherent mieux et durent plus longtemps.",
      },
    ],
    pricing: {
      headline: "Tarifs Épilation Visage Entier Femme",
      note: "Tarifs en FCFA, toutes taxes incluses.",
      items: [
        { label: "Épilation visage entier femme", price: "10 000 FCFA", note: "Sourcils + lèvres + menton + joues + cou — 30 min" },
        { label: "Cure 4 séances", price: "35 000 FCFA", note: "Économisez 5 000 FCFA" },
        { label: "Cure 6 séances", price: "50 000 FCFA", note: "Économisez 10 000 FCFA" },
      ],
    },
    faq: [
      {
        question: "Quelles zones sont incluses dans le forfait visage entier ?",
        answer: "Le forfait comprend : sourcils, lèvre supérieure, menton, joues et cou. C'est l'intégralité des zones habituellement épilées sur le visage féminin.",
      },
      {
        question: "La peau peut-elle être rouge après une épilation du visage entier ?",
        answer: "Quelques rougeurs légères sont normales et disparaissent en 1 à 2 heures. Nous appliquons un soin apaisant en fin de séance pour accélérer la récupération.",
      },
      {
        question: "À quelle fréquence faire le visage entier ?",
        answer: "En général toutes les 3 à 4 semaines, selon les zones. Les sourcils peuvent nécessiter un entretien plus fréquent (toutes les 2 à 3 semaines).",
      },
      {
        question: "Peut-on appliquer du maquillage juste après ?",
        answer: "Attendez au moins 2 heures avant d'appliquer du maquillage ou des produits de soin sur les zones épilées pour laisser les pores se refermer.",
      },
    ],
    cta: {
      headline: "Réservez votre forfait visage entier à Cotonou",
      description: "Academy Beauty Gate, quartier Cadjehoun, Cotonou. 30 minutes pour un visage impeccable.",
    },
  },
  {
    slug: "epilation-demi-jambes-homme-cotonou",
    title: "Épilation Demi-Jambes Homme à Cotonou | Academy Beauty Gate",
    metaDescription: "Épilation demi-jambes homme à la cire à Cotonou — 12 000 FCFA en 45 min. Résultat lisse et net. Salon Academy Beauty Gate, Cadjehoun.",
    category: "epilation-cire",
    hero: {
      imageAlt: "Épilation demi-jambes homme cire salon Academy Beauty Gate Cotonou Bénin",
      eyebrow: "Épilation à la Cire — Homme",
      headline: "Épilation Demi-Jambes Homme à Cotonou",
      subheadline: "Une pilosité maîtrisée pour plus de confort et d'élégance. L'épilation des demi-jambes à la cire s'adresse aux hommes souhaitant une peau plus lisse sur les mollets.",
    },
    badges: [
      { icon: "✦", text: "Spécial homme" },
      { icon: "✦", text: "Cire adaptée pilosité dense" },
      { icon: "✦", text: "45 min" },
      { icon: "✦", text: "Résultat 3–4 semaines" },
    ],
    intro: {
      imageAlt: "Épilation demi-jambes homme cire Cotonou Cadjehoun salon de beauté",
      headline: "L'épilation masculine, une tendance assumée",
      description: "De plus en plus d'hommes font appel à l'épilation à la cire pour gérer leur pilosité corporelle. L'épilation des demi-jambes (mollets) est l'une des prestations masculines les plus demandées à Academy Beauty Gate. Confort, hygiène et esthétique sont les trois raisons principales qui poussent les hommes à franchir le pas.",
      listItems: [
        "Épilation des mollets jusqu'au genou, cire adaptée pilosité masculine dense",
        "Retrait efficace des poils à la racine pour 3 à 4 semaines de tranquillité",
        "Technique adaptée pour minimiser l'inconfort sur une peau masculine",
        "Soin apaisant post-épilation inclus",
        "Prestation 100% masculine dans un cadre professionnel",
      ],
    },
    benefits: [
      {
        title: "Confort optimal pour les sportifs",
        description: "Cyclistes, nageurs, footballeurs : une pilosité réduite améliore le confort sous les équipements et facilite le massage de récupération.",
      },
      {
        title: "Peau plus douce et tonique",
        description: "La cire retire les poils et les cellules mortes, révélant une peau plus lisse qui réagit mieux aux soins hydratants.",
      },
      {
        title: "Résultat plus durable que le rasage",
        description: "3 à 4 semaines sans repousse contre 2 à 3 jours avec le rasoir — l'épilation à la cire est bien plus pratique sur le long terme.",
      },
      {
        title: "Spécialiste pilosité masculine",
        description: "Nos esthéticiennes sont formées pour travailler avec la pilosité masculine, plus dense et plus rigide que la pilosité féminine.",
      },
    ],
    pricing: {
      headline: "Tarifs Épilation Demi-Jambes Homme",
      note: "Tarifs en FCFA, toutes taxes incluses.",
      items: [
        { label: "Épilation demi-jambes homme", price: "12 000 FCFA", note: "Séance unique — 45 min" },
        { label: "Cure 4 séances", price: "42 000 FCFA", note: "Économisez 6 000 FCFA" },
        { label: "Cure 6 séances", price: "60 000 FCFA", note: "Économisez 12 000 FCFA" },
      ],
    },
    faq: [
      {
        question: "L'épilation à la cire est-elle adaptée aux hommes ?",
        answer: "Absolument. L'épilation masculine est une tendance de fond. La cire est efficace sur la pilosité dense masculine et offre des résultats durables.",
      },
      {
        question: "Pourquoi les demi-jambes homme coûtent plus cher qu'en version femme ?",
        answer: "La pilosité masculine est plus dense et plus rigide, ce qui nécessite plus de produit et un temps légèrement plus long pour un résultat équivalent.",
      },
      {
        question: "Peut-on faire demi-jambes + jambes complètes en une visite ?",
        answer: "Vous pouvez directement opter pour le forfait jambes complètes homme (16 000 FCFA) si vous souhaitez traiter l'intégralité des membres inférieurs.",
      },
      {
        question: "Faut-il laisser pousser les poils avant de venir ?",
        answer: "Oui, une repousse de 3 à 5 mm minimum est nécessaire pour que la cire adhère correctement. Évitez de raser dans les 2 à 3 semaines précédant la séance.",
      },
    ],
    cta: {
      headline: "Réservez votre épilation demi-jambes à Cotonou",
      description: "Academy Beauty Gate, quartier Cadjehoun, Cotonou. L'épilation masculine par des expertes.",
    },
  },
  {
    slug: "epilation-jambes-completes-homme-cotonou",
    title: "Épilation Jambes Complètes Homme à Cotonou | Academy Beauty Gate",
    metaDescription: "Épilation jambes complètes homme à la cire à Cotonou — 16 000 FCFA en 1h. De la cheville à la cuisse. Salon Academy Beauty Gate, Cadjehoun.",
    category: "epilation-cire",
    hero: {
      imageAlt: "Épilation jambes complètes homme cire salon Academy Beauty Gate Cotonou",
      eyebrow: "Épilation à la Cire — Homme",
      headline: "Épilation Jambes Complètes Homme à Cotonou",
      subheadline: "Des jambes entièrement lisses en une heure. L'épilation jambes complètes homme traite mollets et cuisses pour un résultat net, sport-ready et durable.",
    },
    badges: [
      { icon: "✦", text: "Jambes entières traitées" },
      { icon: "✦", text: "Pilosité dense maîtrisée" },
      { icon: "✦", text: "1 heure" },
      { icon: "✦", text: "Sport + quotidien" },
    ],
    intro: {
      imageAlt: "Épilation jambes complètes homme cire Cotonou Cadjehoun salon beauté",
      headline: "Des jambes nettes de la cheville à la cuisse",
      description: "L'épilation jambes complètes homme est la prestation la plus complète pour les membres inférieurs masculins. Elle couvre mollets, genoux et cuisses en une seule heure. Populaire chez les sportifs, les hommes soucieux de leur apparence et les professionnels qui souhaitent une pilosité maîtrisée.",
      listItems: [
        "Traitement complet : mollets, genoux et cuisses",
        "Cire à haute performance pour pilosité masculine dense",
        "Résultat lisse et uniforme sur toute la surface",
        "Soin hydratant post-épilation inclus",
        "Résultat durable 3 à 4 semaines",
      ],
    },
    benefits: [
      {
        title: "Idéal pour les sportifs de Cotonou",
        description: "Cyclistes, footballeurs, nageurs, triathlètes : des jambes épilées améliorent le confort des équipements et optimisent les soins de récupération.",
      },
      {
        title: "Aspect soigné et entretenu",
        description: "Des jambes masculines bien épilées donnent une apparence soignée et moderne, appréciée dans les milieux professionnels et les sorties.",
      },
      {
        title: "Peau exfoliée et revitalisée",
        description: "La cire retire les cellules mortes en même temps que les poils, laissant une peau plus douce et mieux hydratée.",
      },
      {
        title: "Moins de frottements et d'irritations",
        description: "Sans pilosité, les vêtements de sport glissent mieux sur la peau, réduisant les frottements et les irritations lors de l'effort.",
      },
    ],
    pricing: {
      headline: "Tarifs Épilation Jambes Complètes Homme",
      note: "Tarifs en FCFA, toutes taxes incluses.",
      items: [
        { label: "Épilation jambes complètes homme", price: "16 000 FCFA", note: "Séance unique — 1 heure" },
        { label: "Cure 4 séances", price: "56 000 FCFA", note: "Économisez 8 000 FCFA" },
        { label: "Cure 6 séances", price: "80 000 FCFA", note: "Économisez 16 000 FCFA" },
      ],
    },
    faq: [
      {
        question: "Combien de temps dure l'épilation jambes complètes homme ?",
        answer: "La séance dure environ 1 heure. La pilosité masculine étant plus dense, elle nécessite plus de temps et de produit que pour une femme.",
      },
      {
        question: "L'épilation est-elle conseillée pour les hommes qui font du vélo ?",
        answer: "Oui, c'est même recommandé par beaucoup de cyclistes professionnels. Les jambes épilées facilitent l'application de la crème de récupération et évitent les poils incarnés liés au cuissard.",
      },
      {
        question: "Peut-on combiner jambes complètes et torse lors de la même visite ?",
        answer: "Oui, mais prévoyez alors 2 à 2h30 de séance. Informez-nous lors de la réservation pour organiser correctement le créneau.",
      },
      {
        question: "Les jambes épilées peuvent-elles bronzer normalement ?",
        answer: "Oui, l'épilation n'affecte pas la pigmentation de la peau. Évitez simplement l'exposition solaire directe dans les 24h suivant la séance.",
      },
    ],
    cta: {
      headline: "Réservez votre épilation jambes complètes homme à Cotonou",
      description: "Academy Beauty Gate, Cadjehoun, Cotonou. L'épilation masculine par des expertes.",
    },
  },
  {
    slug: "epilation-dos-homme-cotonou",
    title: "Épilation Dos Homme à Cotonou | Academy Beauty Gate",
    metaDescription: "Épilation dos homme à la cire à Cotonou — 12 000 FCFA en 30 min. Dos lisse et net. Salon Academy Beauty Gate, Cadjehoun.",
    category: "epilation-cire",
    hero: {
      imageAlt: "Épilation dos homme cire salon Academy Beauty Gate Cotonou Bénin",
      eyebrow: "Épilation à la Cire — Homme",
      headline: "Épilation Dos Homme à Cotonou",
      subheadline: "Un dos parfaitement lisse en 30 minutes. L'épilation du dos à la cire est l'une des prestations masculines les plus demandées pour un résultat propre et durable.",
    },
    badges: [
      { icon: "✦", text: "Dos entier traité" },
      { icon: "✦", text: "30 min seulement" },
      { icon: "✦", text: "Cire haute performance" },
      { icon: "✦", text: "Résultat 3–4 semaines" },
    ],
    intro: {
      imageAlt: "Épilation dos homme cire Cotonou Cadjehoun salon de beauté Bénin",
      headline: "Le dos épilé : symbole de soin et de modernité masculine",
      description: "L'épilation du dos est l'une des demandes les plus fréquentes en épilation masculine. Que ce soit pour des raisons esthétiques, de confort ou de confiance en soi, un dos lisse est de plus en plus recherché. À Academy Beauty Gate, nous traitons la totalité du dos en 30 minutes avec une cire haute performance adaptée à la pilosité masculine.",
      listItems: [
        "Épilation complète du dos : haut, milieu et bas du dos",
        "Cire haute performance pour pilosité masculine dense",
        "Résultat lisse et net sur toute la surface",
        "Soin apaisant et hydratant post-épilation inclus",
        "Durée 3 à 4 semaines, repousse progressivement plus fine",
      ],
    },
    benefits: [
      {
        title: "Confiance en soi à la plage et en toutes circonstances",
        description: "Un dos épilé vous permet de vous sentir à l'aise en toutes situations : plage, piscine, sport, intimité.",
      },
      {
        title: "Confort thermique en climat chaud",
        description: "À Cotonou, un dos sans pilosité excessive est plus frais, transpire moins et sèche plus vite — un vrai confort au quotidien.",
      },
      {
        title: "Zone difficile à traiter seul",
        description: "Le dos est l'une des zones les plus inaccessibles pour une auto-épilation. Le salon vous offre un résultat professionnel et uniforme impossible à atteindre seul.",
      },
      {
        title: "Peau exfoliée et revitalisée",
        description: "La cire retire aussi les cellules mortes du dos, zone souvent négligée, révélant une peau plus nette et plus homogène.",
      },
    ],
    pricing: {
      headline: "Tarifs Épilation Dos Homme",
      note: "Tarifs en FCFA, toutes taxes incluses.",
      items: [
        { label: "Épilation dos homme", price: "12 000 FCFA", note: "Séance unique — 30 min" },
        { label: "Cure 4 séances", price: "42 000 FCFA", note: "Économisez 6 000 FCFA" },
        { label: "Cure 6 séances", price: "60 000 FCFA", note: "Économisez 12 000 FCFA" },
      ],
    },
    faq: [
      {
        question: "L'épilation du dos à la cire est-elle très douloureuse ?",
        answer: "La peau du dos est généralement moins sensible que le torse ou les cuisses. La plupart des clients hommes trouvent la séance tout à fait supportable.",
      },
      {
        question: "Peut-on combiner dos + torse lors de la même séance ?",
        answer: "Oui, et c'est une combinaison très populaire. Prévoyez alors 1 heure de séance. Renseignez-vous pour un tarif combiné.",
      },
      {
        question: "Quelle longueur de poil faut-il pour le dos ?",
        answer: "Une repousse de 3 à 5 mm est idéale. Si vos poils sont trop longs (plus de 1 cm), votre esthéticienne les raccourcira avant d'appliquer la cire.",
      },
      {
        question: "Puis-je aller à la plage après une épilation du dos ?",
        answer: "Attendez au moins 24h avant l'exposition solaire et évitez la mer ou la piscine dans les premières heures après la séance pour prévenir les irritations.",
      },
    ],
    cta: {
      headline: "Réservez votre épilation dos à Cotonou",
      description: "Academy Beauty Gate, quartier Cadjehoun, Cotonou. Un dos impeccable en 30 minutes.",
    },
  },
  {
    slug: "epilation-ventre-homme-cotonou",
    title: "Épilation Ventre Homme à Cotonou | Academy Beauty Gate",
    metaDescription: "Épilation ventre homme à la cire à Cotonou — 12 000 FCFA en 30 min. Abdomen lisse et défini. Salon Academy Beauty Gate, Cadjehoun.",
    category: "epilation-cire",
    hero: {
      imageAlt: "Épilation ventre homme cire salon Academy Beauty Gate Cotonou Bénin",
      eyebrow: "Épilation à la Cire — Homme",
      headline: "Épilation Ventre Homme à Cotonou",
      subheadline: "Un abdomen lisse et défini en 30 minutes. L'épilation du ventre à la cire fait ressortir la musculature et soigne l'apparence pour une silhouette masculine affirmée.",
    },
    badges: [
      { icon: "✦", text: "Abdomen entier traité" },
      { icon: "✦", text: "Muscles mis en valeur" },
      { icon: "✦", text: "30 min chrono" },
      { icon: "✦", text: "Résultat immédiat" },
    ],
    intro: {
      imageAlt: "Épilation ventre abdomen homme cire Cotonou Cadjehoun salon beauté",
      headline: "Un ventre épilé pour valoriser votre silhouette",
      description: "L'épilation du ventre masculin à la cire couvre l'ensemble de l'abdomen, de la ligne des pectoraux jusqu'au bas-ventre. Appréciée des hommes sportifs et soucieux de leur apparence, elle met en valeur la musculature et donne un aspect soigné et entretenu.",
      listItems: [
        "Traitement complet de l'abdomen : haut, milieu et bas-ventre",
        "Cire haute performance adaptée à la pilosité masculine",
        "Muscles abdominaux mis en valeur par l'absence de pilosité",
        "Soin apaisant post-épilation pour éviter les rougeurs",
        "Résultat lisse et net visible immédiatement",
      ],
    },
    benefits: [
      {
        title: "Silhouette masculine mise en valeur",
        description: "Sans pilosité, les muscles abdominaux sont bien plus visibles. L'épilation du ventre est un complément naturel pour les hommes qui travaillent leur corps.",
      },
      {
        title: "Confort sous les vêtements de sport",
        description: "Les maillots de sport et les t-shirts ajustés sont bien plus confortables sans pilosité excessive qui peut provoquer des irritations.",
      },
      {
        title: "Hygiène améliorée",
        description: "Un ventre épilé est plus facile à nettoyer, transpire moins et reste plus frais par la chaleur de Cotonou.",
      },
      {
        title: "Tendance masculine affirmée",
        description: "De plus en plus d'hommes adoptent l'épilation corporelle. À Academy Beauty Gate, nous accueillons cette clientèle avec des protocoles adaptés.",
      },
    ],
    pricing: {
      headline: "Tarifs Épilation Ventre Homme",
      note: "Tarifs en FCFA, toutes taxes incluses.",
      items: [
        { label: "Épilation ventre homme", price: "12 000 FCFA", note: "Séance unique — 30 min" },
        { label: "Cure 4 séances", price: "42 000 FCFA", note: "Économisez 6 000 FCFA" },
        { label: "Cure 6 séances", price: "60 000 FCFA", note: "Économisez 12 000 FCFA" },
      ],
    },
    faq: [
      {
        question: "L'épilation du ventre fait-elle mal chez l'homme ?",
        answer: "La zone abdominale est généralement supportable. La peau est moins sensible que le torse. La douleur est brève et s'atténue aux séances suivantes.",
      },
      {
        question: "Puis-je combiner ventre + torse en une séance ?",
        answer: "Oui, ventre et torse ensemble durent environ 1 heure. C'est une combinaison très courante pour un buste entièrement épilé.",
      },
      {
        question: "Peut-on épiler le ventre si on a des tatouages ?",
        answer: "Oui, la cire peut être appliquée sur les tatouages sans problème. Assurez-vous que le tatouage est complètement cicatrisé (au moins 3 semaines après la réalisation).",
      },
      {
        question: "Combien de temps durent les résultats sur le ventre ?",
        answer: "En général 3 à 4 semaines. Avec la régularité, les poils abdominaux repoussent progressivement plus fins et moins denses.",
      },
    ],
    cta: {
      headline: "Réservez votre épilation ventre à Cotonou",
      description: "Academy Beauty Gate, quartier Cadjehoun, Cotonou. Valorisez votre silhouette masculine.",
    },
  },
  {
    slug: "epilation-bras-homme-cotonou",
    title: "Épilation Bras Homme à Cotonou | Academy Beauty Gate",
    metaDescription: "Épilation bras homme à la cire à Cotonou — 10 000 FCFA en 30 min. Bras lisses et soignés. Salon Academy Beauty Gate, Cadjehoun.",
    category: "epilation-cire",
    hero: {
      imageAlt: "Épilation bras homme cire salon Academy Beauty Gate Cotonou Bénin",
      eyebrow: "Épilation à la Cire — Homme",
      headline: "Épilation Bras Homme à Cotonou",
      subheadline: "Des bras masculins épilés pour plus de confort et d'élégance. L'épilation des bras à la cire est idéale pour les sportifs et les hommes qui soignent leur apparence.",
    },
    badges: [
      { icon: "✦", text: "Bras complets traités" },
      { icon: "✦", text: "Sport et quotidien" },
      { icon: "✦", text: "30 min" },
      { icon: "✦", text: "Cire adaptée homme" },
    ],
    intro: {
      imageAlt: "Épilation bras homme cire Cotonou Cadjehoun salon de beauté Bénin",
      headline: "Des bras nets pour le sport et la vie quotidienne",
      description: "L'épilation des bras masculins couvre les avant-bras et les bras jusqu'aux épaules. Très populaire chez les nageurs, cyclistes et hommes soucieux de leur apparence, elle offre un résultat lisse durable qui facilite le port des équipements sportifs et des tenues à manches courtes.",
      listItems: [
        "Traitement complet des deux bras : avant-bras et bras",
        "Cire adaptée pour une pilosité masculine souvent dense",
        "Résultat lisse et uniforme visible immédiatement",
        "Soin apaisant post-épilation inclus",
        "Idéal pour les sportifs et les hommes en milieu professionnel",
      ],
    },
    benefits: [
      {
        title: "Performance sportive améliorée",
        description: "Pour les nageurs et cyclistes, des bras épilés réduisent la résistance et facilitent l'application des soins de récupération.",
      },
      {
        title: "Confort avec les équipements",
        description: "Combinaisons, manchons de compression, brassards : tout glisse mieux sur des bras sans pilosité, évitant les frottements douloureux.",
      },
      {
        title: "Apparence soignée",
        description: "Des bras lisses donnent une apparence nette et moderne, appréciée lors des sorties, en milieu professionnel ou simplement au quotidien.",
      },
      {
        title: "Repousse plus fine avec le temps",
        description: "La régularité des séances affaiblit progressivement le follicule pileux, rendant la repousse plus fine et la maintenance plus facile.",
      },
    ],
    pricing: {
      headline: "Tarifs Épilation Bras Homme",
      note: "Tarifs en FCFA, toutes taxes incluses.",
      items: [
        { label: "Épilation bras homme", price: "10 000 FCFA", note: "Séance unique — 30 min" },
        { label: "Cure 4 séances", price: "35 000 FCFA", note: "Économisez 5 000 FCFA" },
        { label: "Cure 6 séances", price: "50 000 FCFA", note: "Économisez 10 000 FCFA" },
      ],
    },
    faq: [
      {
        question: "L'épilation des bras est-elle adaptée aux hommes à forte pilosité ?",
        answer: "Oui, nous utilisons une cire haute performance spécialement adaptée à la pilosité masculine dense. Si vos poils sont très longs, ils seront raccourcis avant la séance.",
      },
      {
        question: "Dois-je épiler avant-bras et bras séparément ?",
        answer: "Non, notre prestation couvre l'intégralité des deux bras en une seule séance de 30 minutes.",
      },
      {
        question: "Puis-je combiner bras + aisselles lors de la même visite ?",
        answer: "Oui, c'est une combinaison populaire. Prévoyez environ 45 minutes pour les deux zones ensemble.",
      },
      {
        question: "L'épilation des bras convient-elle aux hommes qui font de la musculation ?",
        answer: "Absolument. Beaucoup de pratiquants de musculation épilent leurs bras pour mettre en valeur leur musculature. Évitez simplement la séance juste avant un entraînement intense.",
      },
    ],
    cta: {
      headline: "Réservez votre épilation bras homme à Cotonou",
      description: "Academy Beauty Gate, Cadjehoun, Cotonou. Des bras masculins impeccables.",
    },
  },
  {
    slug: "epilation-torse-homme-cotonou",
    title: "Épilation Torse Homme à Cotonou | Academy Beauty Gate",
    metaDescription: "Épilation torse homme à la cire à Cotonou — 10 000 FCFA en 30 min. Poitrine lisse et musclée. Salon Academy Beauty Gate, Cadjehoun.",
    category: "epilation-cire",
    hero: {
      imageAlt: "Épilation torse pectoraux homme cire salon Academy Beauty Gate Cotonou",
      eyebrow: "Épilation à la Cire — Homme",
      headline: "Épilation Torse Homme à Cotonou",
      subheadline: "Un torse lisse qui met en valeur votre silhouette. L'épilation du torse à la cire est la prestation phare de l'épilation masculine pour un rendu net et musclé.",
    },
    badges: [
      { icon: "✦", text: "Pectoraux et sternum" },
      { icon: "✦", text: "Muscles mis en valeur" },
      { icon: "✦", text: "30 min" },
      { icon: "✦", text: "Résultat 3–4 semaines" },
    ],
    intro: {
      imageAlt: "Épilation torse homme cire pectoraux Cotonou Cadjehoun salon beauté Bénin",
      headline: "Un torse épilé pour une silhouette affirmée",
      description: "L'épilation du torse masculin à la cire couvre les pectoraux, le sternum et la partie haute de l'abdomen. Elle est particulièrement appréciée des hommes sportifs qui souhaitent mettre en valeur leur musculature et des hommes qui soignent leur apparence au quotidien.",
      listItems: [
        "Traitement des pectoraux, sternum et haut de l'abdomen",
        "Cire haute performance pour pilosité thoracique dense",
        "Muscles pectoraux mis en valeur immédiatement",
        "Soin apaisant post-épilation pour calmer la peau",
        "Résultat net durable 3 à 4 semaines",
      ],
    },
    benefits: [
      {
        title: "Muscles visibles et définis",
        description: "Sans la couverture des poils, les pectoraux et les abdominaux ressortent nettement, valorisant tout le travail fourni à la salle de sport.",
      },
      {
        title: "Confort sport et vie quotidienne",
        description: "Sous les maillots de sport, les t-shirts ajustés ou torse nu à la plage, un torse épilé apporte un confort et une liberté de mouvement supérieurs.",
      },
      {
        title: "Zone difficile à gérer seul",
        description: "Le torse est une zone incommode à épiler soi-même. Le salon garantit un résultat uniforme et sans zones oubliées.",
      },
      {
        title: "Associable avec le ventre et le dos",
        description: "Torse + ventre + dos : le buste entier peut être traité lors d'une même visite pour un résultat cohérent et global.",
      },
    ],
    pricing: {
      headline: "Tarifs Épilation Torse Homme",
      note: "Tarifs en FCFA, toutes taxes incluses.",
      items: [
        { label: "Épilation torse homme", price: "10 000 FCFA", note: "Séance unique — 30 min" },
        { label: "Cure 4 séances", price: "35 000 FCFA", note: "Économisez 5 000 FCFA" },
        { label: "Cure 6 séances", price: "50 000 FCFA", note: "Économisez 10 000 FCFA" },
      ],
    },
    faq: [
      {
        question: "L'épilation du torse est-elle douloureuse pour les hommes ?",
        answer: "Le torse, notamment le sternum, peut être sensible. La douleur est néanmoins supportable et diminue significativement aux séances suivantes.",
      },
      {
        question: "Peut-on combiner torse et ventre en une séance ?",
        answer: "Oui, torse + ventre = environ 1 heure de séance. Avec le dos, comptez 1h30. Informez-nous lors de la réservation.",
      },
      {
        question: "L'épilation du torse convient-elle aux hommes poilés ?",
        answer: "Oui, c'est même notre cœur de cible. Nous utilisons une cire spécialement formulée pour les pilosités denses et rigides des hommes.",
      },
      {
        question: "Après combien de temps puis-je reprendre le sport ?",
        answer: "Attendez au moins 24 heures avant une séance de sport intense pour laisser la peau récupérer et éviter les irritations liées à la transpiration.",
      },
    ],
    cta: {
      headline: "Réservez votre épilation torse à Cotonou",
      description: "Academy Beauty Gate, quartier Cadjehoun, Cotonou. Un torse masculin impeccable.",
    },
  },
  {
    slug: "epilation-epaules-homme-cotonou",
    title: "Épilation Épaules Homme à Cotonou | Academy Beauty Gate",
    metaDescription: "Épilation épaules homme à la cire à Cotonou — 8 000 FCFA en 20 min. Épaules lisses et nettes. Salon Academy Beauty Gate, Cadjehoun.",
    category: "epilation-cire",
    hero: {
      imageAlt: "Épilation épaules homme cire salon Academy Beauty Gate Cotonou Bénin",
      eyebrow: "Épilation à la Cire — Homme",
      headline: "Épilation Épaules Homme à Cotonou",
      subheadline: "Des épaules impeccables en 20 minutes. L'épilation des épaules à la cire complète idéalement l'épilation du dos ou du torse pour un résultat global harmonieux.",
    },
    badges: [
      { icon: "✦", text: "20 min express" },
      { icon: "✦", text: "8 000 FCFA" },
      { icon: "✦", text: "Complète dos et torse" },
      { icon: "✦", text: "Résultat immédiat" },
    ],
    intro: {
      imageAlt: "Épilation épaules homme cire Cotonou Cadjehoun salon de beauté Bénin",
      headline: "Des épaules lisses pour un buste homogène",
      description: "Les épaules sont souvent une zone de transition entre le dos et les bras, avec une pilosité qui peut être dense et inesthétique. L'épilation des épaules à la cire, en 20 minutes seulement, complète parfaitement une épilation du torse ou du dos pour un résultat cohérent sur l'ensemble du buste.",
      listItems: [
        "Traitement des deux épaules et zones de transition",
        "Cire adaptée à la pilosité masculine",
        "Résultat net et homogène avec le dos et le torse",
        "Soin apaisant appliqué après la séance",
        "Séance courte de 20 minutes, facile à intégrer",
      ],
    },
    benefits: [
      {
        title: "Cohérence visuelle du buste",
        description: "Des épaules épilées assurent une continuité esthétique entre le dos et les bras, évitant les contrastes inharmonieux.",
      },
      {
        title: "Confort sous tous les vêtements",
        description: "T-shirts, polos, maillots de sport : sans pilosité aux épaules, les vêtements tombent et glissent mieux sur l'ensemble du buste.",
      },
      {
        title: "Zone rapide à traiter",
        description: "En seulement 20 minutes, les deux épaules sont entièrement épilées — une des prestations les plus rapides de notre menu masculin.",
      },
      {
        title: "Facilement intégrable en combo",
        description: "Les épaules s'ajoutent facilement à une séance dos ou torse avec seulement 20 minutes supplémentaires.",
      },
    ],
    pricing: {
      headline: "Tarifs Épilation Épaules Homme",
      note: "Tarifs en FCFA, toutes taxes incluses.",
      items: [
        { label: "Épilation épaules homme", price: "8 000 FCFA", note: "Séance unique — 20 min" },
        { label: "Cure 4 séances", price: "28 000 FCFA", note: "Économisez 4 000 FCFA" },
        { label: "Cure 6 séances", price: "40 000 FCFA", note: "Économisez 8 000 FCFA" },
      ],
    },
    faq: [
      {
        question: "Les épaules sont-elles douloureuses à épiler ?",
        answer: "La zone des épaules est généralement bien supportée. La peau est moins fine qu'au visage et les hommes qui ont déjà épilé le dos ou le torse trouvent les épaules faciles.",
      },
      {
        question: "Peut-on faire épaules + dos en une séance ?",
        answer: "Oui, c'est même la combinaison idéale. Prévoyez 50 minutes pour dos + épaules en une seule visite.",
      },
      {
        question: "Est-ce que les épaules sont comprises dans l'épilation du dos ?",
        answer: "Pas systématiquement. Si vous souhaitez inclure les épaules dans votre séance dos, précisez-le à votre esthéticienne en début de séance.",
      },
      {
        question: "À quelle fréquence épiler les épaules ?",
        answer: "Toutes les 3 à 4 semaines, en synchronisant avec votre épilation du dos ou du torse pour maintenir un rendu homogène sur l'ensemble du buste.",
      },
    ],
    cta: {
      headline: "Réservez votre épilation épaules à Cotonou",
      description: "Academy Beauty Gate, quartier Cadjehoun, Cotonou. Un buste harmonieux de la tête aux épaules.",
    },
  },
  {
    slug: "epilation-nuque-homme-cotonou",
    title: "Épilation Nuque Homme à Cotonou | Academy Beauty Gate",
    metaDescription: "Épilation nuque homme à la cire à Cotonou — 8 000 FCFA en 15 min. Nuque nette entre deux coupes. Salon Academy Beauty Gate, Cadjehoun.",
    category: "epilation-cire",
    hero: {
      imageAlt: "Épilation nuque homme cire salon Academy Beauty Gate Cotonou Bénin",
      eyebrow: "Épilation à la Cire — Homme",
      headline: "Épilation Nuque Homme à Cotonou",
      subheadline: "Une nuque impeccable en 15 minutes. L'épilation de la nuque à la cire maintient un rendu net entre deux passages chez le coiffeur ou le barbier.",
    },
    badges: [
      { icon: "✦", text: "15 min express" },
      { icon: "✦", text: "Nuque nette" },
      { icon: "✦", text: "8 000 FCFA" },
      { icon: "✦", text: "Entre deux coupes" },
    ],
    intro: {
      imageAlt: "Épilation nuque homme cire Cotonou Cadjehoun salon de beauté",
      headline: "La nuque, le détail qui fait toute la différence",
      description: "La nuque est une zone visible en permanence, surtout pour les hommes aux cheveux courts. L'épilation à la cire permet de maintenir un contour net et soigné entre deux coupes, pour un rendu professionnel en toutes circonstances. En 15 minutes, la nuque est parfaitement délimitée.",
      listItems: [
        "Retrait de la pilosité dans la nuque et le bas de la coupe",
        "Cire adaptée pour les zones fines et visibles",
        "Contour net et défini comme après une coupe",
        "Résultat durable 2 à 3 semaines",
        "Idéal en complément d'une prestation barber ou coiffure",
      ],
    },
    benefits: [
      {
        title: "Apparence soignée entre les coupes",
        description: "Même à mi-parcours entre deux rendez-vous chez le coiffeur, une nuque épilée maintient un rendu professionnel et propre.",
      },
      {
        title: "Précision de finition",
        description: "La cire permet un contour plus précis que le rasoir et sans risque de coupure, même sur les zones avec des petits poils fins.",
      },
      {
        title: "Geste rapide et abordable",
        description: "En 15 minutes et pour 8 000 FCFA, c'est l'un des gestes les plus efficaces pour entretenir son style masculin à Cotonou.",
      },
      {
        title: "Compatible avec tous les styles",
        description: "Coupe courte, dégradé, rasé : l'épilation de la nuque s'adapte à tous les styles de coiffure pour un rendu net et défini.",
      },
    ],
    pricing: {
      headline: "Tarifs Épilation Nuque Homme",
      note: "Tarifs en FCFA, toutes taxes incluses.",
      items: [
        { label: "Épilation nuque homme", price: "8 000 FCFA", note: "Séance unique — 15 min" },
        { label: "Cure 4 séances", price: "28 000 FCFA", note: "Économisez 4 000 FCFA" },
        { label: "Cure 6 séances", price: "40 000 FCFA", note: "Économisez 8 000 FCFA" },
      ],
    },
    faq: [
      {
        question: "Peut-on faire nuque + cou en même temps ?",
        answer: "Oui, nuque et cou se traitent facilement ensemble. Prévoyez environ 30 minutes pour les deux zones. Notre offre cou homme à 7 000 FCFA peut être combinée.",
      },
      {
        question: "La cire abîme-t-elle la peau dans la nuque ?",
        answer: "Non, à condition d'utiliser une cire douce adaptée. Nos esthéticiennes s'assurent que la peau est propre et protégée avant l'application.",
      },
      {
        question: "À quelle fréquence épiler la nuque ?",
        answer: "Toutes les 2 à 3 semaines est idéal pour maintenir un contour net. Vous pouvez synchroniser avec vos coupes de cheveux.",
      },
      {
        question: "L'épilation de la nuque convient-elle aux hommes qui ont des démangeaisons après la coupe ?",
        answer: "Oui, la cire retire les petits poils coupés qui causent les démangeaisons post-coupe, offrant une finition plus propre que le rasoir.",
      },
    ],
    cta: {
      headline: "Réservez votre épilation nuque à Cotonou",
      description: "Academy Beauty Gate, Cadjehoun, Cotonou. Une nuque nette entre chaque coupe.",
    },
  },
  {
    slug: "epilation-aisselles-homme-cotonou",
    title: "Épilation Aisselles Homme à Cotonou | Academy Beauty Gate",
    metaDescription: "Épilation aisselles homme à la cire à Cotonou — 7 000 FCFA en 15 min. Résultat net et hygiénique. Salon Academy Beauty Gate, Cadjehoun.",
    category: "epilation-cire",
    hero: {
      imageAlt: "Épilation aisselles homme cire salon Academy Beauty Gate Cotonou Bénin",
      eyebrow: "Épilation à la Cire — Homme",
      headline: "Épilation Aisselles Homme à Cotonou",
      subheadline: "Des aisselles nettes et confortables en 15 minutes. L'épilation masculine des aisselles à la cire améliore l'hygiène, réduit les odeurs et augmente le confort quotidien.",
    },
    badges: [
      { icon: "✦", text: "15 min express" },
      { icon: "✦", text: "Hygiène optimale" },
      { icon: "✦", text: "Moins d'odeurs" },
      { icon: "✦", text: "7 000 FCFA" },
    ],
    intro: {
      imageAlt: "Épilation aisselles homme cire Cotonou Cadjehoun salon beauté Bénin",
      headline: "L'épilation aisselles homme : hygiène et confort",
      description: "L'épilation des aisselles masculines à la cire est une prestation en plein essor à Cotonou. Par la chaleur tropicale béninoise, des aisselles épilées offrent un confort thermique supérieur et améliorent considérablement l'hygiène au quotidien. En 15 minutes, le résultat est immédiat.",
      listItems: [
        "Épilation complète des deux aisselles en 15 minutes",
        "Cire adaptée à la pilosité masculine dense",
        "Résultat net immédiat, confort amélioré dès la séance",
        "Réduction significative des odeurs et de la transpiration",
        "Soin apaisant post-épilation pour éviter les irritations",
      ],
    },
    benefits: [
      {
        title: "Hygiène améliorée par chaleur tropicale",
        description: "À Cotonou, où il fait chaud toute l'année, des aisselles épilées sont plus faciles à nettoyer et les odeurs sont significativement réduites.",
      },
      {
        title: "Confort accru pour les sportifs",
        description: "Nageurs, cyclistes, joueurs de football : des aisselles épilées évitent les irritations liées au frottement des vêtements de sport.",
      },
      {
        title: "Déodorant plus efficace",
        description: "Sur une peau épilée, le déodorant adhère mieux et offre une protection plus longue — un avantage non négligeable par la chaleur.",
      },
      {
        title: "Tendance masculine moderne",
        description: "L'épilation des aisselles est désormais courante chez les hommes soucieux de leur hygiène et de leur image, à Cotonou comme ailleurs.",
      },
    ],
    pricing: {
      headline: "Tarifs Épilation Aisselles Homme",
      note: "Tarifs en FCFA, toutes taxes incluses.",
      items: [
        { label: "Épilation aisselles homme", price: "7 000 FCFA", note: "Séance unique — 15 min" },
        { label: "Cure 4 séances", price: "24 500 FCFA", note: "Économisez 3 500 FCFA" },
        { label: "Cure 6 séances", price: "35 000 FCFA", note: "Économisez 7 000 FCFA" },
      ],
    },
    faq: [
      {
        question: "L'épilation des aisselles à la cire est-elle douloureuse pour les hommes ?",
        answer: "La zone est sensible mais la séance est courte (15 min). La douleur est brève et s'atténue nettement aux séances suivantes.",
      },
      {
        question: "Quand puis-je mettre du déodorant après l'épilation ?",
        answer: "Attendez 24 heures avant d'appliquer un déodorant ou un parfum. Évitez les produits alcoolisés dans les premiers jours.",
      },
      {
        question: "À quelle fréquence épiler les aisselles ?",
        answer: "Toutes les 3 à 4 semaines. La pilosité des aisselles repousse assez vite, mais avec la régularité elle devient progressivement plus fine.",
      },
      {
        question: "Peut-on combiner aisselles + dos ou torse ?",
        answer: "Oui, les aisselles s'ajoutent facilement à toute séance d'épilation corporelle masculine. Prévoyez 15 minutes supplémentaires.",
      },
    ],
    cta: {
      headline: "Réservez votre épilation aisselles homme à Cotonou",
      description: "Academy Beauty Gate, quartier Cadjehoun, Cotonou. Confort et hygiène optimaux.",
    },
  },
  {
    slug: "epilation-sourcils-homme-cotonou",
    title: "Épilation Sourcils Homme à Cotonou | Academy Beauty Gate",
    metaDescription: "Épilation sourcils homme à la cire à Cotonou — 2 000 FCFA en 15 min. Sourcils nets et dessinés. Salon Academy Beauty Gate, Cadjehoun.",
    category: "epilation-cire",
    hero: {
      imageAlt: "Épilation sourcils homme cire salon Academy Beauty Gate Cotonou Bénin",
      eyebrow: "Épilation Visage — Homme",
      headline: "Épilation Sourcils Homme à Cotonou",
      subheadline: "Des sourcils masculins impeccables en 15 minutes. Retrait des poils entre les sourcils et mise en forme discrète pour un regard net et soigné.",
    },
    badges: [
      { icon: "✦", text: "15 min express" },
      { icon: "✦", text: "2 000 FCFA" },
      { icon: "✦", text: "Naturel et masculin" },
      { icon: "✦", text: "Regard affirmé" },
    ],
    intro: {
      imageAlt: "Mise en forme sourcils homme cire Cotonou Cadjehoun salon beauté Bénin",
      headline: "Des sourcils d'homme bien entretenus",
      description: "L'épilation des sourcils masculins ne cherche pas à féminiser mais à ordonner : retrait de la barre (poils entre les deux sourcils), nettoyage des poils disgracieux sous et au-dessus, tout en conservant l'aspect naturel et masculin. Un geste discret qui change la totalité du visage.",
      listItems: [
        "Retrait des poils entre les deux sourcils (barre)",
        "Nettoyage des poils sous les sourcils pour un regard ouvert",
        "Conservation du volume et de l'aspect naturel masculin",
        "Résultat discret mais transformateur",
        "15 minutes pour un visage plus soigné",
      ],
    },
    benefits: [
      {
        title: "Regard plus ouvert sans féminiser",
        description: "Une mise en forme discrète des sourcils ouvre le regard et soigne l'apparence sans donner un effet trop travaillé ou féminin.",
      },
      {
        title: "Visage plus soigné au quotidien",
        description: "Des sourcils ordonnés contribuent à une apparence globale soignée qui joue un rôle important dans les impressions professionnelles et sociales.",
      },
      {
        title: "Geste rapide et accessible",
        description: "2 000 FCFA pour 15 minutes — c'est le geste beauté masculin le plus rentable pour améliorer son apparence globale.",
      },
      {
        title: "Adapté aux hommes qui n'ont jamais épilé",
        description: "Notre esthéticienne adapte son approche aux clients hommes qui découvrent l'épilation pour la première fois : résultat naturel garanti.",
      },
    ],
    pricing: {
      headline: "Tarifs Épilation Sourcils Homme",
      note: "Tarifs en FCFA, toutes taxes incluses.",
      items: [
        { label: "Épilation sourcils homme", price: "2 000 FCFA", note: "Séance unique — 15 min" },
        { label: "Cure 4 séances", price: "7 000 FCFA", note: "Économisez 1 000 FCFA" },
        { label: "Cure 6 séances", price: "10 000 FCFA", note: "Économisez 2 000 FCFA" },
      ],
    },
    faq: [
      {
        question: "L'épilation des sourcils va-t-elle féminiser mon visage ?",
        answer: "Non, notre approche masculine est différente. Nous retirons uniquement les poils disgracieux (barre, excès sous les sourcils) en conservant l'épaisseur et l'aspect naturel de vos sourcils.",
      },
      {
        question: "Est-ce douloureux d'épiler les sourcils à la cire ?",
        answer: "La zone est sensible mais la durée est très courte. La plupart des clients hommes s'y habituent rapidement et reviennent régulièrement.",
      },
      {
        question: "Peut-on faire sourcils + barbe lors de la même visite ?",
        answer: "Oui, les sourcils peuvent se combiner avec les autres prestations visage homme comme le menton, les lèvres ou le cou.",
      },
      {
        question: "À quelle fréquence épiler les sourcils masculins ?",
        answer: "Toutes les 3 à 4 semaines est habituel. Les poils entre les sourcils (barre) repoussent souvent plus vite et peuvent nécessiter un entretien toutes les 2 à 3 semaines.",
      },
    ],
    cta: {
      headline: "Réservez votre épilation sourcils homme à Cotonou",
      description: "Academy Beauty Gate, Cadjehoun, Cotonou. Un regard masculin soigné et affirmé.",
    },
  },
  {
    slug: "epilation-menton-homme-cotonou",
    title: "Épilation Menton Homme à Cotonou | Academy Beauty Gate",
    metaDescription: "Épilation menton homme à la cire à Cotonou — 4 000 FCFA en 15 min. Zone du menton nettoyée et lissée. Salon Academy Beauty Gate, Cadjehoun.",
    category: "epilation-cire",
    hero: {
      imageAlt: "Épilation menton homme cire salon Academy Beauty Gate Cotonou Bénin",
      eyebrow: "Épilation Visage — Homme",
      headline: "Épilation Menton Homme à Cotonou",
      subheadline: "Un menton lisse ou une contour de barbe précis en 15 minutes. L'épilation du menton à la cire permet de définir les contours et de retirer les poils isolés.",
    },
    badges: [
      { icon: "✦", text: "15 min express" },
      { icon: "✦", text: "4 000 FCFA" },
      { icon: "✦", text: "Contours nets" },
      { icon: "✦", text: "Alternative au rasoir" },
    ],
    intro: {
      imageAlt: "Épilation menton homme cire visage Cotonou Cadjehoun salon beauté",
      headline: "Un menton propre pour une apparence soignée",
      description: "L'épilation du menton chez l'homme peut servir deux objectifs : retirer les poils isolés pour un visage net, ou délimiter précisément le contour d'une barbe pour un rendu plus soigné. La cire offre une précision et une durabilité supérieures au rasoir.",
      listItems: [
        "Retrait des poils isolés ou duvet sur la zone du menton",
        "Définition nette du contour inférieur de la barbe si portée",
        "Cire adaptée aux zones fines du visage masculin",
        "Résultat durable 2 à 3 semaines sans repousse",
        "Alternative propre et précise au rasoir",
      ],
    },
    benefits: [
      {
        title: "Contours de barbe ultra-précis",
        description: "Pour les hommes portant la barbe, la cire délimite les contours inférieurs avec une précision que le rasoir ne peut pas toujours atteindre.",
      },
      {
        title: "Visage soigné sans barbe",
        description: "Pour les hommes rasés, l'épilation du menton retire les poils persistants ou le duvet qui résistent au rasoir habituel.",
      },
      {
        title: "Résultat plus durable",
        description: "La cire maintient un résultat net pendant 2 à 3 semaines, bien plus longtemps que le rasoir qui nécessite un entretien quotidien.",
      },
      {
        title: "Peau sans irritation",
        description: "Contrairement au rasoir, la cire n'irrite pas la peau du menton et n'entraîne pas de poils incarnés ni de boutons de rasage.",
      },
    ],
    pricing: {
      headline: "Tarifs Épilation Menton Homme",
      note: "Tarifs en FCFA, toutes taxes incluses.",
      items: [
        { label: "Épilation menton homme", price: "4 000 FCFA", note: "Séance unique — 15 min" },
        { label: "Cure 4 séances", price: "14 000 FCFA", note: "Économisez 2 000 FCFA" },
        { label: "Cure 6 séances", price: "20 000 FCFA", note: "Économisez 4 000 FCFA" },
      ],
    },
    faq: [
      {
        question: "L'épilation du menton convient-elle aux hommes qui portent la barbe ?",
        answer: "Oui, elle permet de définir les contours inférieurs de la barbe avec précision. Précisez à votre esthéticienne les zones que vous souhaitez conserver.",
      },
      {
        question: "Est-ce que la cire sur le menton provoque des boutons ?",
        answer: "Non, à condition que la peau soit propre avant la séance. Nous nettoyons la zone avant l'application. Évitez de toucher la zone après la séance.",
      },
      {
        question: "Puis-je raser le menton entre deux séances d'épilation ?",
        answer: "Idéalement non, car cela perturbe le cycle de repousse. Si vous devez le faire, optez pour une crème dépilatoire plutôt qu'un rasoir.",
      },
      {
        question: "Peut-on combiner menton + cou + sourcils en une visite ?",
        answer: "Oui, notre forfait visage entier homme à 12 000 FCFA inclut l'ensemble des zones du visage en 40 minutes.",
      },
    ],
    cta: {
      headline: "Réservez votre épilation menton homme à Cotonou",
      description: "Academy Beauty Gate, quartier Cadjehoun, Cotonou. Des contours nets pour un visage soigné.",
    },
  },
  {
    slug: "epilation-levres-homme-cotonou",
    title: "Épilation Lèvres Homme à Cotonou | Academy Beauty Gate",
    metaDescription: "Épilation lèvres homme à la cire à Cotonou — 4 000 FCFA en 15 min. Duvet ou poils retirés. Salon Academy Beauty Gate, Cadjehoun.",
    category: "epilation-cire",
    hero: {
      imageAlt: "Épilation lèvres homme cire salon Academy Beauty Gate Cotonou Bénin",
      eyebrow: "Épilation Visage — Homme",
      headline: "Épilation Lèvres Homme à Cotonou",
      subheadline: "Des lèvres impeccables en 15 minutes. L'épilation de la lèvre supérieure chez l'homme retire le duvet ou la moustache légère pour un visage net et soigné.",
    },
    badges: [
      { icon: "✦", text: "15 min express" },
      { icon: "✦", text: "4 000 FCFA" },
      { icon: "✦", text: "Duvet et moustache" },
      { icon: "✦", text: "Visage parfaitement lisse" },
    ],
    intro: {
      imageAlt: "Épilation lèvres duvet moustache homme cire Cotonou Cadjehoun salon",
      headline: "Un visage soigné du front au menton",
      description: "L'épilation de la lèvre supérieure chez l'homme répond à deux besoins : retirer un duvet fin qui donne un aspect négligé, ou éliminer une légère moustache pour les hommes qui souhaitent un visage entièrement glabre. La cire offre un résultat net et durable.",
      listItems: [
        "Retrait du duvet ou de la légère moustache au-dessus des lèvres",
        "Cire douce adaptée aux zones sensibles du visage",
        "Résultat lisse et net, visible immédiatement",
        "Alternative durable au rasoir (2 à 3 semaines)",
        "Idéal pour les hommes qui ne portent pas de moustache",
      ],
    },
    benefits: [
      {
        title: "Visage entièrement glabre",
        description: "Pour les hommes qui préfèrent un visage lisse, l'épilation des lèvres complète le rasage pour éliminer les derniers poils résistants.",
      },
      {
        title: "Moins d'irritations que le rasoir",
        description: "La cire ne frictionne pas la peau et n'entraîne pas les rougeurs ou brûlures liées au rasage quotidien sur cette zone sensible.",
      },
      {
        title: "Résultat plus durable",
        description: "2 à 3 semaines sans avoir à gérer cette zone, contre un entretien quotidien ou bi-quotidien avec le rasoir.",
      },
      {
        title: "Intégrable dans un entretien visage",
        description: "Les lèvres s'intègrent naturellement dans une séance d'épilation visage complète avec menton, sourcils et cou.",
      },
    ],
    pricing: {
      headline: "Tarifs Épilation Lèvres Homme",
      note: "Tarifs en FCFA, toutes taxes incluses.",
      items: [
        { label: "Épilation lèvres homme", price: "4 000 FCFA", note: "Séance unique — 15 min" },
        { label: "Cure 4 séances", price: "14 000 FCFA", note: "Économisez 2 000 FCFA" },
        { label: "Cure 6 séances", price: "20 000 FCFA", note: "Économisez 4 000 FCFA" },
      ],
    },
    faq: [
      {
        question: "L'épilation des lèvres chez l'homme va-t-elle épaissir les poils ?",
        answer: "Non, c'est un mythe. La cire n'épaissit pas les poils. La repousse est identique ou plus fine avec la régularité des séances.",
      },
      {
        question: "Puis-je garder ma barbe et épiler uniquement les lèvres ?",
        answer: "Oui, il suffit de préciser à votre esthéticienne les zones à épiler et celles à conserver. C'est une demande courante.",
      },
      {
        question: "Y a-t-il des rougeurs après l'épilation des lèvres chez l'homme ?",
        answer: "Quelques légères rougeurs peuvent apparaître dans l'heure suivant la séance. Elles disparaissent rapidement. Le soin apaisant post-épilation accélère la récupération.",
      },
      {
        question: "Combien de temps durent les résultats ?",
        answer: "En général 2 à 3 semaines. La lèvre supérieure repousse assez vite mais les poils s'affinent progressivement avec des séances régulières.",
      },
    ],
    cta: {
      headline: "Réservez votre épilation lèvres homme à Cotonou",
      description: "Academy Beauty Gate, quartier Cadjehoun, Cotonou. Un visage masculin parfaitement soigné.",
    },
  },
  {
    slug: "epilation-pommettes-homme-cotonou",
    title: "Épilation Pommettes Homme à Cotonou | Academy Beauty Gate",
    metaDescription: "Épilation pommettes homme à la cire à Cotonou — 5 000 FCFA en 15 min. Contours de barbe précis. Salon Academy Beauty Gate, Cadjehoun.",
    category: "epilation-cire",
    hero: {
      imageAlt: "Épilation pommettes homme cire contours barbe salon Academy Beauty Gate Cotonou",
      eyebrow: "Épilation Visage — Homme",
      headline: "Épilation Pommettes Homme à Cotonou",
      subheadline: "Des contours de barbe parfaitement définis en 15 minutes. L'épilation des pommettes à la cire retire les poils parasites sur les joues pour une barbe nette et structurée.",
    },
    badges: [
      { icon: "✦", text: "Contours barbe précis" },
      { icon: "✦", text: "15 min seulement" },
      { icon: "✦", text: "5 000 FCFA" },
      { icon: "✦", text: "Barbe structurée" },
    ],
    intro: {
      imageAlt: "Épilation pommettes joues homme cire contours barbe Cotonou Cadjehoun",
      headline: "Des pommettes nettes pour une barbe impeccable",
      description: "L'épilation des pommettes retire les poils isolés ou le duvet qui poussent au-dessus de la ligne de la barbe, sur les joues. Ce geste de finition permet de définir proprement le contour supérieur de la barbe pour un rendu net, précis et professionnel.",
      listItems: [
        "Retrait des poils parasites sur les pommettes et joues hautes",
        "Définition précise du contour supérieur de la barbe",
        "Cire adaptée pour une application précise sur le visage",
        "Résultat net et structuré visible immédiatement",
        "Finition complémentaire au rasoir pour un rendu professionnel",
      ],
    },
    benefits: [
      {
        title: "Barbe mieux définie et plus soignée",
        description: "En supprimant les poils parasites au-dessus de la ligne de barbe, vous obtenez un contour précis et une barbe visuellement plus structurée.",
      },
      {
        title: "Résultat plus durable que le rasoir",
        description: "La cire retire à la racine les poils des pommettes pour 2 à 3 semaines de résultat, contre quelques jours avec le rasoir.",
      },
      {
        title: "Finesse et précision incomparables",
        description: "La cire permet une ligne de démarcation plus nette que le rasoir sur les zones courbes des pommettes.",
      },
      {
        title: "Idéal en complément d'une séance barber",
        description: "Associez l'épilation des pommettes à une coupe ou une mise en forme de barbe pour un résultat global parfaitement soigné.",
      },
    ],
    pricing: {
      headline: "Tarifs Épilation Pommettes Homme",
      note: "Tarifs en FCFA, toutes taxes incluses.",
      items: [
        { label: "Épilation pommettes homme", price: "5 000 FCFA", note: "Séance unique — 15 min" },
        { label: "Cure 4 séances", price: "17 500 FCFA", note: "Économisez 2 500 FCFA" },
        { label: "Cure 6 séances", price: "25 000 FCFA", note: "Économisez 5 000 FCFA" },
      ],
    },
    faq: [
      {
        question: "L'épilation des pommettes est-elle réservée aux hommes à barbe ?",
        answer: "Principalement oui, car elle sert à définir les contours de la barbe. Mais les hommes qui souhaitent un visage lisse peuvent aussi l'utiliser pour retirer le duvet des joues hautes.",
      },
      {
        question: "Puis-je choisir exactement la ligne de délimitation de ma barbe ?",
        answer: "Absolument. Vous indiquez à votre esthéticienne la ligne souhaitée et elle s'assure de respecter précisément vos consignes.",
      },
      {
        question: "L'épilation des pommettes peut-elle être faite en même temps qu'une barbe ?",
        answer: "Oui, idéalement après une mise en forme de barbe pour que l'esthéticienne voie clairement les zones à traiter.",
      },
      {
        question: "À quelle fréquence revenir pour les pommettes ?",
        answer: "Toutes les 2 à 3 semaines selon votre rythme de repousse. C'est une prestation d'entretien régulier pour les hommes à barbe soignés.",
      },
    ],
    cta: {
      headline: "Réservez votre épilation pommettes à Cotonou",
      description: "Academy Beauty Gate, quartier Cadjehoun, Cotonou. Une barbe parfaitement structurée.",
    },
  },
  {
    slug: "epilation-cou-homme-cotonou",
    title: "Épilation Cou Homme à Cotonou | Academy Beauty Gate",
    metaDescription: "Épilation cou homme à la cire à Cotonou — 7 000 FCFA en 20 min. Cou net et barbe délimitée. Salon Academy Beauty Gate, Cadjehoun.",
    category: "epilation-cire",
    hero: {
      imageAlt: "Épilation cou homme cire salon Academy Beauty Gate Cotonou Bénin",
      eyebrow: "Épilation Visage — Homme",
      headline: "Épilation Cou Homme à Cotonou",
      subheadline: "Un cou impeccable en 20 minutes. L'épilation du cou à la cire retire les poils entre la barbe et le décolleté pour un rendu net et professionnel.",
    },
    badges: [
      { icon: "✦", text: "20 min seulement" },
      { icon: "✦", text: "7 000 FCFA" },
      { icon: "✦", text: "Barbe délimitée en bas" },
      { icon: "✦", text: "Professionnel et soigné" },
    ],
    intro: {
      imageAlt: "Épilation cou homme cire Cotonou Cadjehoun salon de beauté Bénin",
      headline: "Le cou : la finition ultime de la barbe masculine",
      description: "Le cou est la zone la plus visible de la barbe masculine et souvent la plus négligée. L'épilation du cou à la cire retire proprement les poils entre le bas de la barbe et le décolleté, offrant une délimitation nette et un rendu professionnel durable — bien plus longtemps qu'un rasage.",
      listItems: [
        "Retrait des poils sur tout le cou : avant, côtés et nuque",
        "Délimitation nette du contour inférieur de la barbe",
        "Cire adaptée pour zones avec pilosité masculine dense",
        "Résultat propre et durable 2 à 3 semaines",
        "Idéal entre deux passages chez le barbier",
      ],
    },
    benefits: [
      {
        title: "Barbe délimitée et structurée",
        description: "Un cou épilé donne immédiatement l'impression d'une barbe entretenue et d'un homme soucieux de son apparence.",
      },
      {
        title: "Apparence professionnelle maintenue",
        description: "Entre deux coupes chez le barbier, l'épilation du cou maintient un rendu propre et professionnel au quotidien.",
      },
      {
        title: "Confort thermique",
        description: "Un cou sans pilosité excessive est plus frais et plus facile à nettoyer par la chaleur de Cotonou.",
      },
      {
        title: "Plus propre que le rasoir sur la durée",
        description: "La cire offre 2 à 3 semaines de résultat sans irritation, contre quelques jours et souvent des boutons de rasage avec le rasoir.",
      },
    ],
    pricing: {
      headline: "Tarifs Épilation Cou Homme",
      note: "Tarifs en FCFA, toutes taxes incluses.",
      items: [
        { label: "Épilation cou homme", price: "7 000 FCFA", note: "Séance unique — 20 min" },
        { label: "Cure 4 séances", price: "24 500 FCFA", note: "Économisez 3 500 FCFA" },
        { label: "Cure 6 séances", price: "35 000 FCFA", note: "Économisez 7 000 FCFA" },
      ],
    },
    faq: [
      {
        question: "L'épilation du cou inclut-elle la nuque ?",
        answer: "Vous pouvez choisir de traiter le cou avant uniquement, ou d'inclure la nuque. Précisez votre souhait à l'esthéticienne. La nuque seule est une prestation distincte à 8 000 FCFA.",
      },
      {
        question: "Peut-on épiler le cou si on porte la barbe ?",
        answer: "Oui, c'est même l'usage principal. On délimite le bas de la barbe et on retire les poils du cou pour un rendu net et structuré.",
      },
      {
        question: "Est-ce douloureux d'épiler le cou à la cire ?",
        answer: "La peau du cou est relativement épaisse. La sensation est supportable et la séance est courte. La plupart des hommes trouvent ça moins douloureux que le visage.",
      },
      {
        question: "Puis-je combiner cou + nuque + sourcils en une seule visite ?",
        answer: "Oui, notre forfait visage entier homme à 12 000 FCFA inclut toutes les zones du visage, nuque et cou en 40 minutes.",
      },
    ],
    cta: {
      headline: "Réservez votre épilation cou homme à Cotonou",
      description: "Academy Beauty Gate, quartier Cadjehoun, Cotonou. Une barbe parfaitement délimitée.",
    },
  },
  {
    slug: "epilation-visage-entier-homme-cotonou",
    title: "Épilation Visage Entier Homme à Cotonou | Academy Beauty Gate",
    metaDescription: "Épilation visage entier homme à la cire à Cotonou — 12 000 FCFA en 40 min. Sourcils, lèvres, menton, pommettes, cou. Salon Academy Beauty Gate, Cadjehoun.",
    category: "epilation-cire",
    hero: {
      imageAlt: "Épilation visage entier homme cire salon Academy Beauty Gate Cotonou Bénin",
      eyebrow: "Épilation Visage — Homme",
      headline: "Épilation Visage Entier Homme à Cotonou",
      subheadline: "Toutes les zones du visage masculin en une seule séance de 40 minutes. Le forfait complet pour un visage impeccable et des contours de barbe parfaitement définis.",
    },
    badges: [
      { icon: "✦", text: "5 zones en 1 séance" },
      { icon: "✦", text: "40 min seulement" },
      { icon: "✦", text: "12 000 FCFA" },
      { icon: "✦", text: "Visage masculin parfait" },
    ],
    intro: {
      imageAlt: "Forfait épilation visage entier homme cire Cotonou Cadjehoun Bénin",
      headline: "Le forfait visage homme le plus complet",
      description: "Le forfait épilation visage entier homme regroupe toutes les zones d'entretien du visage masculin : sourcils, lèvres, menton, pommettes et cou. En 40 minutes et 12 000 FCFA, vous repartez avec un visage impeccable et des contours de barbe parfaitement structurés.",
      listItems: [
        "Sourcils mis en ordre, barre retirée",
        "Lèvres supérieures et menton épilés",
        "Pommettes : contours de barbe définis",
        "Cou épilé pour une délimitation nette",
        "40 minutes pour un résultat global harmonieux",
      ],
    },
    benefits: [
      {
        title: "Gain de temps maximal",
        description: "Toutes les zones du visage traitées en une visite de 40 minutes. Idéal pour les hommes actifs qui gèrent leur apparence efficacement.",
      },
      {
        title: "Résultat professionnel complet",
        description: "Un visage entièrement entretenu en une seule séance offre un rendu cohérent et professionnel sur toutes les zones.",
      },
      {
        title: "Le plus avantageux financièrement",
        description: "À 12 000 FCFA pour les 5 zones, le forfait représente une économie significative par rapport aux prestations séparées.",
      },
      {
        title: "Adapté barbu et non-barbu",
        description: "Le forfait s'adapte à votre style : si vous portez la barbe, l'esthéticienne préserve les zones choisies et travaille uniquement les contours.",
      },
    ],
    pricing: {
      headline: "Tarifs Épilation Visage Entier Homme",
      note: "Tarifs en FCFA, toutes taxes incluses.",
      items: [
        { label: "Épilation visage entier homme", price: "12 000 FCFA", note: "Sourcils + lèvres + menton + pommettes + cou — 40 min" },
        { label: "Cure 4 séances", price: "42 000 FCFA", note: "Économisez 6 000 FCFA" },
        { label: "Cure 6 séances", price: "60 000 FCFA", note: "Économisez 12 000 FCFA" },
      ],
    },
    faq: [
      {
        question: "Quelles zones sont incluses dans le forfait visage entier homme ?",
        answer: "Le forfait comprend : sourcils (mise en forme), lèvre supérieure, menton, pommettes (contours barbe) et cou. Si vous ne souhaitez pas certaines zones, nous les adaptons.",
      },
      {
        question: "Le forfait convient-il aux hommes qui portent la barbe ?",
        answer: "Oui, nous adaptons le forfait selon votre style. Nous préservons la barbe et épilons uniquement les zones de contours et les zones sans barbe.",
      },
      {
        question: "Peut-on ajouter la nuque au forfait ?",
        answer: "Oui, la nuque peut être ajoutée pour 8 000 FCFA supplémentaires. Précisez-le lors de la réservation pour réserver un créneau de 55 minutes.",
      },
      {
        question: "Y a-t-il des rougeurs après un forfait visage entier ?",
        answer: "Quelques légères rougeurs peuvent apparaître sur certaines zones sensibles. Elles disparaissent en 1 à 2 heures. Évitez le soleil direct et le maquillage dans les 2 heures suivant la séance.",
      },
    ],
    cta: {
      headline: "Réservez votre forfait visage entier homme à Cotonou",
      description: "Academy Beauty Gate, quartier Cadjehoun, Cotonou. 40 minutes pour un visage masculin impeccable.",
    },
  },
  {
    slug: "cornrows-nattes-collees-simples-cotonou",
    title: "Cornrows / Nattes collées simples à Cotonou",
    metaDescription: "Cornrows et nattes collées simples à Cotonou, quartier Cadjehoun. Service professionnel dès 3 000 FCFA à l'Academy Beauty Gate. Résultat soigné en 1h.",
    category: "coiffure",
    hero: {
      imageAlt: "Cornrows nattes collées simples au salon Academy Beauty Gate à Cotonou",
      eyebrow: "Coiffure · Cadjehoun, Cotonou",
      headline: "Cornrows & Nattes collées simples",
      subheadline: "Une base classique, un style affirmé — réalisé avec précision à partir de 3 000 FCFA en seulement 1h.",
    },
    badges: [
      { icon: "✦", text: "À partir de 3 000 FCFA" },
      { icon: "✦", text: "Durée : 1h" },
      { icon: "✦", text: "Coiffure africaine experte" },
      { icon: "✦", text: "Cadjehoun, Cotonou" },
    ],
    intro: {
      imageAlt: "Coiffeuse réalisant des cornrows dans le salon Beauty Gate Cotonou",
      headline: "La natte collée, art et précision",
      description: "Les cornrows sont bien plus qu'une coiffure : c'est un héritage culturel porté avec fierté. À l'Academy Beauty Gate de Cadjehoun, nos coiffeuses tracent chaque rangée avec soin, pour un résultat net, propre et durable, même sur cheveux denses.",
      listItems: [
        "Tracé régulier et symétrique garanti",
        "Technique douce, sans tension excessive sur le cuir chevelu",
        "Adaptée aux cheveux naturels, texturés et crépus",
        "Finition soignée, tenue sur plusieurs jours",
        "Service rapide : prestation complète en 1h",
      ],
    },
    benefits: [
      {
        title: "Style intemporel",
        description: "Les cornrows s'adaptent à toutes les occasions, du quotidien aux cérémonies. Un classique qui ne se démode jamais au Bénin et dans toute l'Afrique de l'Ouest.",
      },
      {
        title: "Protection des cheveux",
        description: "En maintenant les cheveux bien structurés, les nattes collées réduisent la casse et favorisent une meilleure rétention de longueur.",
      },
      {
        title: "Entretien minimal",
        description: "Une fois posées, les cornrows demandent peu de manipulation quotidienne. Idéal pour les femmes actives de Cotonou.",
      },
      {
        title: "Prix accessible",
        description: "À partir de 3 000 FCFA seulement, profitez d'un service de qualité salon dans le quartier Cadjehoun, sans compromis.",
      },
    ],
    pricing: {
      headline: "Tarif Cornrows / Nattes collées simples",
      note: "Prix indicatifs. Le tarif final peut varier selon la densité et la longueur des cheveux. Consultez-nous au salon.",
      items: [
        { label: "Cornrows / Nattes collées simples", price: "À partir de 3 000 FCFA", note: "Durée : 1h" },
      ],
    },
    faq: [
      {
        question: "Combien de temps tiennent les cornrows simples ?",
        answer: "En moyenne 1 à 2 semaines selon votre routine capillaire. Pour prolonger la durée, dormez avec un foulard en satin et hydratez régulièrement votre cuir chevelu.",
      },
      {
        question: "Faut-il des mèches pour les nattes collées simples ?",
        answer: "Non, les cornrows simples sont réalisées avec vos propres cheveux naturels, sans ajout de mèches. C'est la version la plus légère et naturelle de la natte collée.",
      },
      {
        question: "Est-ce douloureux ?",
        answer: "Nos coiffeuses utilisent une technique douce qui évite les tensions excessives. Si vous avez un cuir chevelu sensible, n'hésitez pas à le signaler avant la prestation.",
      },
      {
        question: "Comment réserver une prestation cornrows à Cotonou ?",
        answer: "Contactez-nous directement sur WhatsApp ou passez au salon Academy Beauty Gate à Cadjehoun. Nous vous proposons un créneau adapté à votre agenda.",
      },
    ],
    cta: {
      headline: "Réservez vos cornrows à Cotonou",
      description: "Passez au salon Academy Beauty Gate à Cadjehoun ou contactez-nous sur WhatsApp pour fixer votre rendez-vous. Prestation dès 3 000 FCFA.",
    },
  },
  {
    slug: "braids-knotless-courts-cotonou",
    title: "Braids Knotless courts à Cotonou",
    metaDescription: "Braids knotless courts à Cotonou, quartier Cadjehoun. Pose légère et sans nœuds dès 6 000 FCFA à l'Academy Beauty Gate. Résultat naturel en 3 à 5h.",
    category: "coiffure",
    hero: {
      imageAlt: "Braids knotless courts réalisés au salon Academy Beauty Gate à Cotonou",
      eyebrow: "Coiffure · Cadjehoun, Cotonou",
      headline: "Braids Knotless Courts",
      subheadline: "Des tresses sans nœuds pour un rendu ultra-naturel et confortable — dès 6 000 FCFA à Cadjehoun.",
    },
    badges: [
      { icon: "✦", text: "À partir de 6 000 FCFA" },
      { icon: "✦", text: "Durée : 3–5h" },
      { icon: "✦", text: "Technique knotless" },
      { icon: "✦", text: "Cadjehoun, Cotonou" },
    ],
    intro: {
      imageAlt: "Pose de braids knotless courts dans le salon Beauty Gate Cadjehoun",
      headline: "La liberté du knotless, version courte",
      description: "Les braids knotless courts offrent le meilleur des deux mondes : l'esthétique des braids classiques avec la légèreté et le confort du knotless. Sans nœud à la racine, la coiffure paraît plus naturelle, moins tendue, et préserve mieux votre cuir chevelu.",
      listItems: [
        "Pose sans nœud visible à la racine pour un effet naturel",
        "Moins de tension sur le cuir chevelu comparé aux braids classiques",
        "Longueur courte, style moderne et dynamique",
        "Mèches intégrées progressivement pour une finition propre",
        "Réalisable en 3 à 5h par nos expertes à Cadjehoun",
      ],
    },
    benefits: [
      {
        title: "Confort optimal",
        description: "L'absence de nœud à la racine réduit considérablement la tension sur le cuir chevelu, idéal pour les peaux sensibles ou les premières poses.",
      },
      {
        title: "Rendu naturel",
        description: "Le knotless imite la pousse naturelle des cheveux. Résultat : une coiffure qui semble sortir de votre propre chevelure, sans transition visible.",
      },
      {
        title: "Durabilité",
        description: "Bien entretenues, les braids knotless courts tiennent 4 à 6 semaines, un investissement beauté rentable pour les femmes actives de Cotonou.",
      },
      {
        title: "Style polyvalent",
        description: "La longueur courte se prête à mille coiffures : chignon, demi-queue, port libre. Adaptable à toutes les occasions, du bureau à la soirée.",
      },
    ],
    pricing: {
      headline: "Tarif Braids Knotless Courts",
      note: "Prix indicatifs. Le tarif final dépend de la densité des cheveux et du nombre de tresses souhaité. Devis sur place.",
      items: [
        { label: "Braids Knotless courts", price: "À partir de 6 000 FCFA", note: "Durée : 3–5h" },
      ],
    },
    faq: [
      {
        question: "Quelle est la différence entre knotless et braids classiques ?",
        answer: "Dans les braids classiques, un nœud est formé à la racine pour fixer la mèche. En knotless, la mèche est intégrée progressivement, ce qui évite le nœud, réduit la tension et donne un aspect plus naturel.",
      },
      {
        question: "Combien de temps durent les braids knotless courts ?",
        answer: "En moyenne 4 à 6 semaines avec un bon entretien. Hydratez votre cuir chevelu régulièrement et protégez vos tresses la nuit avec un bonnet satin.",
      },
      {
        question: "Faut-il acheter ses mèches avant de venir au salon ?",
        answer: "Vous pouvez apporter vos propres mèches ou nous demander conseil sur les meilleures références disponibles à Cotonou. Nous vous guiderons selon la longueur et l'épaisseur souhaitées.",
      },
      {
        question: "Les braids knotless conviennent-elles aux cheveux courts ?",
        answer: "Oui, dès que vos cheveux font environ 5 cm, la pose knotless est réalisable. Nos coiffeuses évalueront votre longueur lors de la consultation.",
      },
    ],
    cta: {
      headline: "Réservez vos braids knotless à Cotonou",
      description: "Prenez rendez-vous au salon Academy Beauty Gate à Cadjehoun. Technique knotless experte dès 6 000 FCFA.",
    },
  },
  {
    slug: "braids-knotless-moyens-cotonou",
    title: "Braids Knotless moyens à Cotonou",
    metaDescription: "Braids knotless moyens à Cotonou, Cadjehoun. Tresses sans nœuds de longueur moyenne dès 10 000 FCFA à l'Academy Beauty Gate. Prestation en 5 à 8h.",
    category: "coiffure",
    hero: {
      imageAlt: "Braids knotless moyens réalisés au salon Academy Beauty Gate à Cotonou",
      eyebrow: "Coiffure · Cadjehoun, Cotonou",
      headline: "Braids Knotless Moyens",
      subheadline: "La longueur idéale, la technique parfaite — tresses knotless moyennes dès 10 000 FCFA à Cadjehoun.",
    },
    badges: [
      { icon: "✦", text: "À partir de 10 000 FCFA" },
      { icon: "✦", text: "Durée : 5–8h" },
      { icon: "✦", text: "Longueur moyenne" },
      { icon: "✦", text: "Cadjehoun, Cotonou" },
    ],
    intro: {
      imageAlt: "Coiffeuse posant des braids knotless moyens au salon Beauty Gate Cotonou",
      headline: "Longueur médiane, impact maximal",
      description: "Les braids knotless de longueur moyenne représentent le choix le plus populaire de nos clientes à Cotonou. Polyvalentes, élégantes et confortables, elles se portent aussi bien au quotidien que pour les grandes occasions. Posées sans nœud, elles protègent et embellissent simultanément votre chevelure.",
      listItems: [
        "Longueur médiane versatile, adaptée à toutes les morphologies de visage",
        "Technique knotless sans nœud à la racine, pose confortable",
        "Résultat soigné, finitions propres garanties",
        "Durée de tenue prolongée grâce à la méthode sans tension",
        "Prestation complète réalisée en 5 à 8h par nos spécialistes",
      ],
    },
    benefits: [
      {
        title: "Polyvalence maximale",
        description: "La longueur moyenne se coiffe facilement en chignon, tresses relevées, demi-queue ou portée libre. Le format idéal pour s'adapter à chaque situation à Cotonou.",
      },
      {
        title: "Protection capillaire",
        description: "Les braids knotless protègent vos pointes et réduisent la manipulation quotidienne, favorisant la croissance et la santé de vos cheveux naturels.",
      },
      {
        title: "Tenue longue durée",
        description: "Avec un entretien adapté, vos braids knotless moyens tiennent 6 à 8 semaines, pour un rapport qualité/prix excellent.",
      },
      {
        title: "Technique experte",
        description: "Nos coiffeuses formées à la méthode knotless vous garantissent un résultat uniforme, élégant et sans dommage pour votre cuir chevelu.",
      },
    ],
    pricing: {
      headline: "Tarif Braids Knotless Moyens",
      note: "Prix indicatifs, variables selon la densité et la quantité de mèches. Consultation gratuite au salon.",
      items: [
        { label: "Braids Knotless moyens", price: "À partir de 10 000 FCFA", note: "Durée : 5–8h" },
      ],
    },
    faq: [
      {
        question: "Quelle longueur exacte correspond aux knotless moyens ?",
        answer: "En général, la longueur moyenne correspond à des braids tombant entre les épaules et le milieu du dos. La longueur finale dépend de vos cheveux naturels et de la taille des mèches ajoutées.",
      },
      {
        question: "Combien de paquets de mèches faut-il pour des knotless moyens ?",
        answer: "En moyenne 4 à 6 paquets selon la densité souhaitée. Nos coiffeuses peuvent vous conseiller avant la prestation pour éviter tout achat inutile.",
      },
      {
        question: "Peut-on faire des braids knotless moyens sur cheveux traités ?",
        answer: "Oui, sous réserve que les cheveux soient en bonne santé. Nous vous déconseillons la pose sur des cheveux fraîchement défrisés ou colorés, pour éviter la casse.",
      },
      {
        question: "Comment entretenir des braids knotless moyens à Cotonou ?",
        answer: "Hydratez votre cuir chevelu 2 à 3 fois par semaine, dormez avec un bonnet satin et évitez l'eau stagnante. En cas de démangeaisons, appliquez une huile légère entre les tresses.",
      },
    ],
    cta: {
      headline: "Posez vos braids knotless moyens à Cotonou",
      description: "Prenez rendez-vous à l'Academy Beauty Gate, Cadjehoun. Tresses knotless expertes dès 10 000 FCFA.",
    },
  },
  {
    slug: "braids-knotless-petits-cotonou",
    title: "Braids Knotless petits à Cotonou",
    metaDescription: "Braids knotless petits à Cotonou, Cadjehoun. Micro-tresses sans nœuds fines et précises dès 13 000 FCFA à l'Academy Beauty Gate. Prestation en 8 à 12h.",
    category: "coiffure",
    hero: {
      imageAlt: "Braids knotless petits réalisés au salon Academy Beauty Gate à Cotonou",
      eyebrow: "Coiffure · Cadjehoun, Cotonou",
      headline: "Braids Knotless Petits",
      subheadline: "La finesse à son apogée — micro-tresses knotless sans nœuds posées par des expertes à partir de 13 000 FCFA.",
    },
    badges: [
      { icon: "✦", text: "À partir de 13 000 FCFA" },
      { icon: "✦", text: "Durée : 8–12h" },
      { icon: "✦", text: "Micro-tresses fines" },
      { icon: "✦", text: "Cadjehoun, Cotonou" },
    ],
    intro: {
      imageAlt: "Micro-braids knotless posées avec précision au salon Beauty Gate Cotonou",
      headline: "La perfection est dans les détails",
      description: "Les braids knotless petits sont le summum du savoir-faire capillaire. Chaque tresse, fine comme un fil, est posée avec une précision extrême. Un travail long et minutieux que nos coiffeuses de l'Academy Beauty Gate réalisent avec patience et expertise pour un résultat spectaculaire.",
      listItems: [
        "Tresses très fines pour un rendu ultra-détaillé et raffiné",
        "Technique knotless : racine propre, sans nœud apparent",
        "Tenue exceptionnelle pouvant aller jusqu'à 10 semaines",
        "Protection capillaire maximale pour les cheveux fragiles",
        "Chaque tresse posée à la main par nos expertes en 8 à 12h",
      ],
    },
    benefits: [
      {
        title: "Esthétique haut de gamme",
        description: "Les petites tresses knotless offrent un niveau de détail incomparable. Elles sont perçues comme une coiffure de luxe et de prestige à Cotonou et au Bénin.",
      },
      {
        title: "Durabilité record",
        description: "Bien entretenues, les micro-braids knotless peuvent tenir jusqu'à 10 semaines, offrant le meilleur rapport durée/prix de toutes nos coiffures.",
      },
      {
        title: "Légèreté et fluidité",
        description: "La finesse des tresses leur confère une légèreté et un mouvement naturel qui rappelle des cheveux libres. Un confort au quotidien exceptionnel.",
      },
      {
        title: "Expertise confirmée",
        description: "Seules des coiffeuses expérimentées maîtrisent la technique des petites knotless. Notre équipe est formée pour ce service exigeant et méticuleux.",
      },
    ],
    pricing: {
      headline: "Tarif Braids Knotless Petits",
      note: "Prestation longue et minutieuse. Tarif variable selon la densité et la longueur finale. Devis personnalisé au salon.",
      items: [
        { label: "Braids Knotless petits", price: "À partir de 13 000 FCFA", note: "Durée : 8–12h" },
      ],
    },
    faq: [
      {
        question: "Pourquoi les petites braids knotless prennent-elles autant de temps ?",
        answer: "La finesse des tresses nécessite une précision et une patience extrêmes. Chaque tresse est posée individuellement avec une technique sans nœud, ce qui multiplie le nombre de tresses et donc la durée de réalisation.",
      },
      {
        question: "Sont-elles douloureuses à porter ?",
        answer: "La technique knotless est l'une des moins tensives. Cependant, avec de petites tresses nombreuses, certaines clientes peuvent ressentir une légère sensibilité les premiers jours. Cela disparaît rapidement.",
      },
      {
        question: "Comment prendre soin de micro-braids à Cotonou ?",
        answer: "Hydratez quotidiennement avec un spray à base d'eau et d'aloe vera, massez le cuir chevelu avec une huile légère et dormez avec un bonnet satin pour préserver la finition.",
      },
      {
        question: "Peut-on teindre les mèches pour des petites braids colorées ?",
        answer: "Oui, nous pouvons intégrer des mèches colorées selon votre souhait. Signalez-le lors de la prise de rendez-vous pour que nous préparions le matériel adapté.",
      },
    ],
    cta: {
      headline: "Réservez vos micro-braids knotless à Cotonou",
      description: "Contactez l'Academy Beauty Gate à Cadjehoun pour planifier votre journée beauté. Micro-braids knotless dès 13 000 FCFA.",
    },
  },
  {
    slug: "nattes-collees-moyennes-meches-cotonou",
    title: "Nattes collées moyennes avec mèches à Cotonou",
    metaDescription: "Nattes collées moyennes avec mèches à Cotonou, Cadjehoun. Coiffure africaine élégante dès 10 000 FCFA à l'Academy Beauty Gate. Prestation en 3 à 4h.",
    category: "coiffure",
    hero: {
      imageAlt: "Nattes collées moyennes avec mèches au salon Academy Beauty Gate Cotonou",
      eyebrow: "Coiffure · Cadjehoun, Cotonou",
      headline: "Nattes collées moyennes avec mèches",
      subheadline: "Volume, longueur et style — les nattes collées moyennes avec mèches posées à la perfection dès 10 000 FCFA.",
    },
    badges: [
      { icon: "✦", text: "À partir de 10 000 FCFA" },
      { icon: "✦", text: "Durée : 3–4h" },
      { icon: "✦", text: "Avec extension mèches" },
      { icon: "✦", text: "Cadjehoun, Cotonou" },
    ],
    intro: {
      imageAlt: "Coiffeuse posant des nattes collées moyennes avec mèches à Cotonou",
      headline: "Les nattes collées rehaussées par les mèches",
      description: "L'ajout de mèches aux nattes collées moyennes apporte du volume, de la longueur et une belle définition au résultat final. À l'Academy Beauty Gate de Cadjehoun, nous sélectionnons les mèches adaptées à votre couleur et texture pour une intégration parfaite et un rendu naturel.",
      listItems: [
        "Mèches intégrées pour plus de volume et de longueur",
        "Tracé régulier et précis, digne d'un salon professionnel",
        "Couleur des mèches harmonisée avec vos cheveux naturels",
        "Coiffure robuste et tenue sur 2 à 4 semaines",
        "Prestation réalisée en 3 à 4h par nos coiffeuses expertes",
      ],
    },
    benefits: [
      {
        title: "Volume et présence",
        description: "Les mèches ajoutent une densité et un volume que les cheveux naturels seuls ne peuvent pas toujours atteindre. Résultat : une coiffure impressionnante et remarquée.",
      },
      {
        title: "Polyvalence stylistique",
        description: "Les nattes collées moyennes avec mèches se portent de nombreuses façons : libres, relevées en chignon ou en demi-queue, pour toutes les occasions à Cotonou.",
      },
      {
        title: "Rapport qualité-prix",
        description: "Dès 10 000 FCFA, vous bénéficiez d'une coiffure structurée et soignée qui durera plusieurs semaines, réalisée par des professionnelles en 3 à 4h.",
      },
      {
        title: "Protection des pointes",
        description: "En enfermant vos pointes dans les nattes, cette coiffure protège vos cheveux des agressions extérieures, de la chaleur et de la sécheresse du climat béninois.",
      },
    ],
    pricing: {
      headline: "Tarif Nattes collées moyennes avec mèches",
      note: "Prix indicatifs selon la densité et la longueur des mèches utilisées. Consultez-nous pour un devis personnalisé.",
      items: [
        { label: "Nattes collées moyennes avec mèches", price: "À partir de 10 000 FCFA", note: "Durée : 3–4h" },
      ],
    },
    faq: [
      {
        question: "Dois-je apporter mes propres mèches ?",
        answer: "Vous pouvez apporter vos mèches ou nous demander conseil. Nous vous recommandons des références disponibles à Cotonou et adaptées à votre type de cheveux.",
      },
      {
        question: "Combien de temps durent les nattes collées moyennes avec mèches ?",
        answer: "Environ 2 à 4 semaines selon votre entretien. Un hydratant hebdomadaire et un bonnet satin la nuit prolongeront significativement la durée.",
      },
      {
        question: "Les mèches abîment-elles les cheveux naturels ?",
        answer: "Lorsqu'elles sont bien posées avec une tension adaptée, les mèches ne détériorent pas les cheveux. Notre équipe veille à ne jamais surcharger la racine.",
      },
      {
        question: "Peut-on faire un shampoing avec les nattes collées ?",
        answer: "Oui, avec précaution. Utilisez un shampoing dilué, massez le cuir chevelu doucement et séchez bien avec un sèche-cheveux pour éviter les odeurs.",
      },
    ],
    cta: {
      headline: "Posez vos nattes collées moyennes à Cotonou",
      description: "Prenez rendez-vous à l'Academy Beauty Gate, Cadjehoun. Nattes moyennes avec mèches dès 10 000 FCFA.",
    },
  },
  {
    slug: "nattes-collees-petites-meches-cotonou",
    title: "Nattes collées petites avec mèches à Cotonou",
    metaDescription: "Nattes collées petites avec mèches à Cotonou, Cadjehoun. Petites tresses fines et précises dès 12 000 FCFA à l'Academy Beauty Gate. Prestation en 5 à 6h.",
    category: "coiffure",
    hero: {
      imageAlt: "Nattes collées petites avec mèches au salon Academy Beauty Gate Cotonou",
      eyebrow: "Coiffure · Cadjehoun, Cotonou",
      headline: "Nattes collées petites avec mèches",
      subheadline: "Finesse et précision — les petites nattes collées avec mèches posées par nos expertes dès 12 000 FCFA.",
    },
    badges: [
      { icon: "✦", text: "À partir de 12 000 FCFA" },
      { icon: "✦", text: "Durée : 5–6h" },
      { icon: "✦", text: "Petites nattes fines" },
      { icon: "✦", text: "Cadjehoun, Cotonou" },
    ],
    intro: {
      imageAlt: "Petites nattes collées avec mèches réalisées au salon Beauty Gate Cotonou",
      headline: "La précision des petites nattes",
      description: "Les petites nattes collées avec mèches allient finesse et résistance. Chaque tresse fine est posée avec soin par nos coiffeuses de l'Academy Beauty Gate, intégrant les mèches progressivement pour un résultat net, uniforme et particulièrement esthétique.",
      listItems: [
        "Petites tresses fines pour un résultat délicat et raffiné",
        "Mèches intégrées pour allonger et densifier la chevelure",
        "Tracé millimétré sur l'ensemble du crâne",
        "Coiffure longue durée : 3 à 5 semaines avec bon entretien",
        "Réalisée en 5 à 6h par nos coiffeuses à Cadjehoun",
      ],
    },
    benefits: [
      {
        title: "Esthétique travaillée",
        description: "Les petites nattes collées avec mèches sont une coiffure soignée qui témoigne du savoir-faire de nos coiffeuses. Elles attirent les compliments et valorisent votre apparence.",
      },
      {
        title: "Durée de port étendue",
        description: "Grâce à leur petite taille, ces nattes tiennent plus longtemps que les nattes larges, offrant un meilleur retour sur investissement.",
      },
      {
        title: "Adaptées à toutes les occasions",
        description: "Aussi bien portées au bureau, lors d'un événement familial ou en soirée, les petites nattes collées avec mèches conviennent à toutes les circonstances.",
      },
      {
        title: "Protection capillaire renforcée",
        description: "La structure serrée des petites nattes offre une protection optimale contre la casse, la chaleur et la déshydratation des cheveux naturels.",
      },
    ],
    pricing: {
      headline: "Tarif Nattes collées petites avec mèches",
      note: "Tarif variable selon la finesse souhaitée et la longueur des mèches. Devis personnalisé au salon Beauty Gate.",
      items: [
        { label: "Nattes collées petites avec mèches", price: "À partir de 12 000 FCFA", note: "Durée : 5–6h" },
      ],
    },
    faq: [
      {
        question: "Quelle est la différence entre petites et moyennes nattes collées ?",
        answer: "La taille de chaque natte individuelle. Les petites nattes sont plus fines, plus nombreuses et demandent plus de temps à poser, mais offrent un rendu plus raffiné et une durée de port plus longue.",
      },
      {
        question: "Les petites nattes sont-elles adaptées aux cheveux fins ?",
        answer: "Oui, avec des mèches légères adaptées. Nos coiffeuses évaluent la résistance de vos cheveux avant de recommander la finesse optimale pour éviter toute tension excessive.",
      },
      {
        question: "Comment savoir combien de mèches acheter pour des petites nattes ?",
        answer: "Comptez généralement 5 à 7 paquets de mèches pour des nattes petites sur l'ensemble du crâne. Nous vous conseillons lors de la prise de rendez-vous.",
      },
      {
        question: "Combien de temps dure la prestation au salon ?",
        answer: "Entre 5 et 6 heures pour les petites nattes collées avec mèches. Nous vous recommandons de prévoir votre journée pour profiter pleinement du service sans stress.",
      },
    ],
    cta: {
      headline: "Réservez vos petites nattes collées à Cotonou",
      description: "Prenez rendez-vous à l'Academy Beauty Gate, Cadjehoun. Petites nattes avec mèches dès 12 000 FCFA.",
    },
  },
  {
    slug: "ponytail-cotonou",
    title: "Ponytail à Cotonou",
    metaDescription: "Ponytail professionnel à Cotonou, quartier Cadjehoun. Queue de cheval stylisée dès 5 000 FCFA à l'Academy Beauty Gate. Prestation rapide en 1h.",
    category: "coiffure",
    hero: {
      imageAlt: "Ponytail réalisé au salon Academy Beauty Gate à Cotonou",
      eyebrow: "Coiffure · Cadjehoun, Cotonou",
      headline: "Ponytail",
      subheadline: "Simple, élégant, efficace — un ponytail impeccable posé en 1h seulement, dès 5 000 FCFA à Cadjehoun.",
    },
    badges: [
      { icon: "✦", text: "À partir de 5 000 FCFA" },
      { icon: "✦", text: "Durée : 1h" },
      { icon: "✦", text: "Queue de cheval stylisée" },
      { icon: "✦", text: "Cadjehoun, Cotonou" },
    ],
    intro: {
      imageAlt: "Ponytail élégant réalisé par une coiffeuse au salon Beauty Gate Cotonou",
      headline: "Le ponytail, classique revisité",
      description: "Le ponytail professionnel va bien au-delà de la simple queue de cheval. À l'Academy Beauty Gate de Cadjehoun, nos coiffeuses créent des ponytails structurés, lisses et élégants qui mettent en valeur vos traits et s'adaptent à toutes les occasions, du quotidien aux cérémonies.",
      listItems: [
        "Queue de cheval lissée et structurée par des mains expertes",
        "Adaptable en ponytail haut, bas ou latéral selon votre style",
        "Finition impeccable : pas un cheveu ne dépasse",
        "Option avec extension pour plus de volume ou de longueur",
        "Prestation rapide réalisée en 1h à Cadjehoun",
      ],
    },
    benefits: [
      {
        title: "Élégance rapide",
        description: "En seulement 1h, transformez votre look avec un ponytail professionnel, parfait pour un événement, une réunion ou une sortie improvisée à Cotonou.",
      },
      {
        title: "Coiffure protectrice",
        description: "Le ponytail regroupe les cheveux et limite leur exposition aux éléments, idéal pour protéger vos longueurs dans le climat chaud et humide de Cotonou.",
      },
      {
        title: "Adaptable à tous types de cheveux",
        description: "Qu'ils soient naturels, défrisés, texturisés ou portés avec extension, le ponytail s'adapte à tous les profils capillaires.",
      },
      {
        title: "Prix compétitif",
        description: "Dès 5 000 FCFA, bénéficiez d'un service de salon professionnel dans le quartier Cadjehoun pour une coiffure qui fait son effet.",
      },
    ],
    pricing: {
      headline: "Tarif Ponytail",
      note: "Prix selon le type de ponytail et l'utilisation ou non d'extensions. Consultez-nous au salon pour plus de détails.",
      items: [
        { label: "Ponytail", price: "À partir de 5 000 FCFA", note: "Durée : 1h" },
      ],
    },
    faq: [
      {
        question: "Peut-on faire un ponytail sur cheveux très courts ?",
        answer: "Pour les cheveux très courts, nous pouvons ajouter des extensions pour créer un ponytail volumeux et long. Nos coiffeuses vous conseilleront sur la meilleure option.",
      },
      {
        question: "Le ponytail abîme-t-il les cheveux ?",
        answer: "Un ponytail trop serré peut causer des tensions à la racine. Nos coiffeuses dosent la traction pour préserver vos cheveux et votre cuir chevelu tout en maintenant un résultat soigné.",
      },
      {
        question: "Combien de temps tient un ponytail professionnel ?",
        answer: "Un ponytail bien réalisé peut tenir 1 à 3 jours selon votre activité. Protégez-le avec un bonnet satin la nuit pour prolonger sa tenue.",
      },
      {
        question: "Peut-on ajouter des accessoires au ponytail ?",
        answer: "Oui, scrunchies, rubans, épingles ornementales — nous travaillons avec vos accessoires ou vous proposons des options pour personnaliser votre coiffure.",
      },
    ],
    cta: {
      headline: "Réservez votre ponytail à Cotonou",
      description: "Passez à l'Academy Beauty Gate, Cadjehoun, pour un ponytail impeccable en 1h dès 5 000 FCFA.",
    },
  },
  {
    slug: "tissage-cotonou",
    title: "Tissage à Cotonou",
    metaDescription: "Tissage professionnel à Cotonou, quartier Cadjehoun. Pose de tissage soignée dès 8 000 FCFA à l'Academy Beauty Gate. Service complet en 2 à 3h.",
    category: "coiffure",
    hero: {
      imageAlt: "Tissage réalisé au salon Academy Beauty Gate à Cotonou",
      eyebrow: "Coiffure · Cadjehoun, Cotonou",
      headline: "Tissage",
      subheadline: "Volume, longueur et naturel — votre tissage posé par des expertes dès 8 000 FCFA à Cadjehoun.",
    },
    badges: [
      { icon: "✦", text: "À partir de 8 000 FCFA" },
      { icon: "✦", text: "Durée : 2–3h" },
      { icon: "✦", text: "Pose tissage professionnelle" },
      { icon: "✦", text: "Cadjehoun, Cotonou" },
    ],
    intro: {
      imageAlt: "Coiffeuse réalisant une pose de tissage au salon Beauty Gate Cotonou",
      headline: "Le tissage, pour un rendu naturel et volumineux",
      description: "Le tissage est une technique de pose de cheveux sur des nattes plates (cornrows) permettant d'obtenir instantanément volume, longueur et épaisseur. À l'Academy Beauty Gate de Cadjehoun, nos coiffeuses maîtrisent la pose de tissage pour un résultat fondu et naturel, quelle que soit votre texture de base.",
      listItems: [
        "Préparation du crâne par des nattes plates solides et durables",
        "Pose des wefts cousues sur les cornrows avec précision",
        "Adaptation de la texture des cheveux à votre souhait",
        "Finition naturelle, le tissage se fond dans vos cheveux",
        "Prestation complète en 2 à 3h au salon de Cadjehoun",
      ],
    },
    benefits: [
      {
        title: "Transformation instantanée",
        description: "Le tissage permet de changer radicalement de look en quelques heures — longueur, volume, texture. Idéal avant une cérémonie ou un événement à Cotonou.",
      },
      {
        title: "Protection de vos cheveux naturels",
        description: "Vos cheveux naturels sont protégés sous les cornrows pendant toute la durée du port du tissage, ce qui favorise leur croissance.",
      },
      {
        title: "Large choix de textures",
        description: "Lisse, ondulé, bouclé, crépu — nous adaptons le tissage à la texture de votre choix pour un résultat en accord avec votre personnalité.",
      },
      {
        title: "Durabilité",
        description: "Bien entretenu, un tissage cousu peut tenir 4 à 8 semaines. Un investissement capillaire rentable pour les femmes actives de Cotonou.",
      },
    ],
    pricing: {
      headline: "Tarif Tissage",
      note: "Le prix de la pose n'inclut pas les cheveux. Apportez vos extensions ou consultez-nous pour des recommandations d'achat à Cotonou.",
      items: [
        { label: "Pose de tissage", price: "À partir de 8 000 FCFA", note: "Durée : 2–3h (pose seule, hors achat cheveux)" },
      ],
    },
    faq: [
      {
        question: "Dois-je apporter les cheveux pour mon tissage ?",
        answer: "Oui, le tarif de 8 000 FCFA correspond à la pose uniquement. Vous devez apporter vos wefts (bandeaux de cheveux). Nous pouvons vous guider sur les quantités et qualités adaptées à Cotonou.",
      },
      {
        question: "Combien de temps dure un tissage cousu ?",
        answer: "Entre 4 et 8 semaines selon votre entretien et la vitesse de repousse de vos cheveux naturels. Au-delà, nous recommandons une dépose pour éviter les nœuds.",
      },
      {
        question: "Le tissage endommage-t-il les cheveux naturels ?",
        answer: "Une pose professionnelle avec une tension adaptée ne nuit pas aux cheveux. Nos coiffeuses veillent à la santé de vos cheveux avant, pendant et après la pose.",
      },
      {
        question: "Comment entretenir son tissage en climat chaud comme à Cotonou ?",
        answer: "Hydratez régulièrement le cuir chevelu, évitez l'excès de sueur accumulé sans séchage, et nettoyez le tissage toutes les 2 semaines avec un shampoing doux.",
      },
    ],
    cta: {
      headline: "Réservez votre tissage à Cotonou",
      description: "L'Academy Beauty Gate à Cadjehoun vous accueille pour une pose de tissage professionnelle dès 8 000 FCFA.",
    },
  },
  {
    slug: "rajout-cotonou",
    title: "Rajout à Cotonou",
    metaDescription: "Rajout de cheveux à Cotonou, quartier Cadjehoun. Pose de rajouts professionnelle dès 5 000 FCFA à l'Academy Beauty Gate. Prestation en 1 à 2h.",
    category: "coiffure",
    hero: {
      imageAlt: "Rajout de cheveux posé au salon Academy Beauty Gate à Cotonou",
      eyebrow: "Coiffure · Cadjehoun, Cotonou",
      headline: "Rajout",
      subheadline: "Ajoutez du volume et de la longueur à vos cheveux — pose de rajouts dès 5 000 FCFA à l'Academy Beauty Gate.",
    },
    badges: [
      { icon: "✦", text: "À partir de 5 000 FCFA" },
      { icon: "✦", text: "Durée : 1–2h" },
      { icon: "✦", text: "Pose professionnelle" },
      { icon: "✦", text: "Cadjehoun, Cotonou" },
    ],
    intro: {
      imageAlt: "Coiffeuse posant des rajouts au salon Beauty Gate Cotonou",
      headline: "Le rajout, pour des cheveux transformés",
      description: "La pose de rajouts est une technique permettant d'ajouter instantanément de la longueur, du volume ou de la densité à votre chevelure. À l'Academy Beauty Gate de Cadjehoun, nous maîtrisons différentes méthodes de pose adaptées à votre type de cheveux et à l'effet désiré.",
      listItems: [
        "Pose adaptée à votre type de cheveux et à votre objectif",
        "Résultat naturel grâce à une intégration soignée des rajouts",
        "Choix de longueur, volume et texture selon vos préférences",
        "Technique respectueuse de vos cheveux naturels",
        "Prestation complète en 1 à 2h à Cadjehoun, Cotonou",
      ],
    },
    benefits: [
      {
        title: "Longueur immédiate",
        description: "Les rajouts permettent d'obtenir en quelques heures la longueur que vos cheveux naturels mettraient des années à atteindre. Un gain de temps précieux.",
      },
      {
        title: "Volume amplifié",
        description: "Idéaux pour les cheveux fins ou clairsemés, les rajouts ajoutent la densité nécessaire pour des coiffures volumineuses et pleines de vie.",
      },
      {
        title: "Flexibilité créative",
        description: "Avec des rajouts, testez de nouvelles longueurs, nouvelles textures ou nouvelles couleurs sans engager vos cheveux naturels.",
      },
      {
        title: "Prix abordable",
        description: "Dès 5 000 FCFA pour la pose, les rajouts représentent une solution économique pour transformer son look à Cotonou.",
      },
    ],
    pricing: {
      headline: "Tarif Rajout",
      note: "Prix de la pose uniquement. Les cheveux ou mèches sont à apporter ou peuvent être conseillés par nos coiffeuses.",
      items: [
        { label: "Pose de rajout", price: "À partir de 5 000 FCFA", note: "Durée : 1–2h" },
      ],
    },
    faq: [
      {
        question: "Quelle est la différence entre rajout et tissage ?",
        answer: "Le tissage est cousu sur des nattes plates et couvre une grande partie du crâne. Le rajout est intégré directement dans vos propres cheveux pour ajouter de la longueur ou du volume de manière plus ciblée.",
      },
      {
        question: "Combien de temps durent les rajouts ?",
        answer: "Cela dépend de la méthode de pose. En général, comptez 2 à 4 semaines avant de nécessiter un retouche ou une dépose pour l'entretien des cheveux naturels.",
      },
      {
        question: "Les rajouts abîment-ils les cheveux ?",
        answer: "Une pose correctement réalisée avec la bonne tension n'abîme pas les cheveux. Nos coiffeuses veillent à adapter la méthode à l'état de votre chevelure.",
      },
      {
        question: "Faut-il un rendez-vous pour une pose de rajout ?",
        answer: "Nous recommandons de prendre rendez-vous pour garantir la disponibilité d'une coiffeuse et prévoir le temps nécessaire. Contactez-nous sur WhatsApp ou passez au salon à Cadjehoun.",
      },
    ],
    cta: {
      headline: "Posez vos rajouts à Cotonou",
      description: "Rendez-vous à l'Academy Beauty Gate, Cadjehoun. Pose de rajouts professionnelle dès 5 000 FCFA.",
    },
  },
  {
    slug: "twist-classique-sans-meches-cotonou",
    title: "Twist classique sans mèches à Cotonou",
    metaDescription: "Twist classique sans mèches à Cotonou, Cadjehoun. Coiffure twist naturelle dès 3 000 FCFA à l'Academy Beauty Gate. Prestation en 1 à 2h.",
    category: "coiffure",
    hero: {
      imageAlt: "Twist classique sans mèches réalisé au salon Academy Beauty Gate à Cotonou",
      eyebrow: "Coiffure · Cadjehoun, Cotonou",
      headline: "Twist classique sans mèches",
      subheadline: "Retour à l'essentiel — twist naturel réalisé sur vos propres cheveux dès 3 000 FCFA à Cadjehoun.",
    },
    badges: [
      { icon: "✦", text: "À partir de 3 000 FCFA" },
      { icon: "✦", text: "Durée : 1–2h" },
      { icon: "✦", text: "100% cheveux naturels" },
      { icon: "✦", text: "Cadjehoun, Cotonou" },
    ],
    intro: {
      imageAlt: "Twist naturels sans mèches posés au salon Beauty Gate Cotonou",
      headline: "Le twist, hommage aux cheveux naturels",
      description: "Le twist classique sans mèches est une coiffure protectrice réalisée uniquement avec vos cheveux naturels. Deux brins enroulés ensemble forment une torsade élégante et légère. À l'Academy Beauty Gate de Cadjehoun, nous réalisons vos twists sur cheveux propres et hydratés pour un résultat durable et beau.",
      listItems: [
        "Coiffure 100% naturelle, sans aucun ajout de mèches",
        "Technique deux brins, résultat torsadé élégant",
        "Hydratation préalable des cheveux pour une meilleure tenue",
        "Coiffure protectrice qui favorise la rétention de longueur",
        "Prestation réalisée en 1 à 2h au salon de Cadjehoun",
      ],
    },
    benefits: [
      {
        title: "Coiffure naturelle et pure",
        description: "Le twist sans mèches met en valeur la beauté et la texture de vos cheveux naturels sans aucun ajout artificiel. Un choix authentique et fier.",
      },
      {
        title: "Légèreté et confort",
        description: "Sans le poids des mèches, les twists naturels sont extrêmement légers et confortables à porter, même dans la chaleur de Cotonou.",
      },
      {
        title: "Option économique",
        description: "À partir de 3 000 FCFA, le twist classique est l'une des coiffures les plus accessibles de notre salon, sans compromis sur la qualité.",
      },
      {
        title: "Transition capillaire facilitée",
        description: "Idéal pour les femmes en transition capillaire, le twist protège les cheveux nouvellement naturels tout en proposant une coiffure soignée.",
      },
    ],
    pricing: {
      headline: "Tarif Twist classique sans mèches",
      note: "Prix selon la densité et la longueur des cheveux. Cheveux propres et démêlés appréciés avant la prestation.",
      items: [
        { label: "Twist classique sans mèches", price: "À partir de 3 000 FCFA", note: "Durée : 1–2h" },
      ],
    },
    faq: [
      {
        question: "Mes cheveux sont-ils assez longs pour des twists ?",
        answer: "En général, 5 à 7 cm de longueur suffisent pour réaliser des twists. En dessous, la torsade risque de glisser. Nos coiffeuses évalueront vos cheveux au préalable.",
      },
      {
        question: "Les twists sans mèches tiennent-ils bien ?",
        answer: "Avec la bonne technique et des cheveux bien hydratés, les twists tiennent 1 à 2 semaines. L'application d'un gel ou d'une crème fixante améliore la durée de tenue.",
      },
      {
        question: "Peut-on démêler et défaire les twists sans les casser ?",
        answer: "Oui, les twists sans mèches se défont facilement en les humidifiant légèrement. Le résultat après dépose est souvent de beaux cheveux légèrement ondulés.",
      },
      {
        question: "Faut-il préparer ses cheveux avant de venir pour un twist ?",
        answer: "Nous recommandons de venir avec des cheveux propres et légèrement humides ou de réaliser un shampoing au salon avant la pose. Signalez-le lors de la prise de rendez-vous.",
      },
    ],
    cta: {
      headline: "Réservez votre twist naturel à Cotonou",
      description: "Passez à l'Academy Beauty Gate, Cadjehoun. Twist classique sur cheveux naturels dès 3 000 FCFA.",
    },
  },
  {
    slug: "twist-avec-meches-cotonou",
    title: "Twist avec mèches à Cotonou",
    metaDescription: "Twist avec mèches à Cotonou, Cadjehoun. Torsades amplifiées aux extensions dès 10 000 FCFA à l'Academy Beauty Gate. Prestation en 4 à 6h.",
    category: "coiffure",
    hero: {
      imageAlt: "Twist avec mèches réalisé au salon Academy Beauty Gate à Cotonou",
      eyebrow: "Coiffure · Cadjehoun, Cotonou",
      headline: "Twist avec mèches",
      subheadline: "Volume, longueur, impact — des twists amplifiés par les mèches, posés dès 10 000 FCFA à Cadjehoun.",
    },
    badges: [
      { icon: "✦", text: "À partir de 10 000 FCFA" },
      { icon: "✦", text: "Durée : 4–6h" },
      { icon: "✦", text: "Twists aux extensions" },
      { icon: "✦", text: "Cadjehoun, Cotonou" },
    ],
    intro: {
      imageAlt: "Twists longs avec mèches posés par une experte au salon Beauty Gate Cotonou",
      headline: "Des twists spectaculaires grâce aux mèches",
      description: "Le twist avec mèches amplifie la coiffure twist classique grâce à l'ajout d'extensions qui donnent volume, longueur et définition. À l'Academy Beauty Gate de Cadjehoun, nos coiffeuses intègrent les mèches de façon naturelle pour des twists fournis, réguliers et longue tenue.",
      listItems: [
        "Mèches intégrées pour amplifier le volume et la longueur",
        "Twists uniformes du crâne à la pointe",
        "Technique soignée pour une intégration naturelle des extensions",
        "Coiffure protectrice et élégante adaptée au climat béninois",
        "Réalisé en 4 à 6h par nos coiffeuses expertes de Cadjehoun",
      ],
    },
    benefits: [
      {
        title: "Impact visuel fort",
        description: "Les twists avec mèches créent une présence capillaire remarquable. Une coiffure qui attire les regards et valorise votre personnalité.",
      },
      {
        title: "Longueur personnalisable",
        description: "Grâce aux mèches, vous choisissez la longueur exacte de vos twists : courts, mi-longs ou très longs. Le résultat correspond à votre vision.",
      },
      {
        title: "Protection longue durée",
        description: "Les twists avec mèches protègent vos pointes et réduisent la manipulation quotidienne, favorisant la croissance de vos cheveux naturels.",
      },
      {
        title: "Polyvalence de port",
        description: "Portez vos twists libres, en chignon, en demi-queue ou relevés. La longueur des mèches offre de nombreuses options de coiffage.",
      },
    ],
    pricing: {
      headline: "Tarif Twist avec mèches",
      note: "Prix de la pose. Mèches à apporter ou à acheter avec nos conseils. Tarif variable selon la longueur et la densité.",
      items: [
        { label: "Twist avec mèches", price: "À partir de 10 000 FCFA", note: "Durée : 4–6h" },
      ],
    },
    faq: [
      {
        question: "Quels types de mèches utiliser pour les twists ?",
        answer: "Les mèches en fibre synthétique type Marley hair ou les mèches Faux locs sont idéales pour les twists. Nos coiffeuses peuvent vous orienter vers les meilleures références disponibles à Cotonou.",
      },
      {
        question: "Les twists avec mèches conviennent-ils aux cheveux courts ?",
        answer: "Oui, les mèches compensent la courte longueur de vos cheveux naturels. Dès 3 cm de cheveux naturels, la pose est réalisable selon la méthode utilisée.",
      },
      {
        question: "Combien de temps durent les twists avec mèches ?",
        answer: "En moyenne 4 à 6 semaines avec un bon entretien. Hydratez régulièrement le cuir chevelu et protégez vos twists la nuit avec un bonnet ou un foulard satin.",
      },
      {
        question: "Peut-on mouiller des twists avec mèches ?",
        answer: "Il vaut mieux éviter de les mouiller excessivement, surtout avec certains types de mèches synthétiques. En cas de lavage, séchez bien avec un sèche-cheveux pour éviter les odeurs et les nœuds.",
      },
    ],
    cta: {
      headline: "Réservez vos twists avec mèches à Cotonou",
      description: "Prenez rendez-vous à l'Academy Beauty Gate, Cadjehoun. Twists avec extensions dès 10 000 FCFA.",
    },
  },
  {
    slug: "pose-perruque-closure-cotonou",
    title: "Pose de perruque closure à Cotonou",
    metaDescription: "Pose de perruque closure à Cotonou, Cadjehoun. Installation professionnelle à 6 000 FCFA à l'Academy Beauty Gate. Résultat naturel en 1h30.",
    category: "coiffure",
    hero: {
      imageAlt: "Pose de perruque closure au salon Academy Beauty Gate à Cotonou",
      eyebrow: "Coiffure · Cadjehoun, Cotonou",
      headline: "Pose de perruque closure",
      subheadline: "Un rendu naturel impeccable — votre perruque closure posée par des expertes à 6 000 FCFA en 1h30.",
    },
    badges: [
      { icon: "✦", text: "6 000 FCFA" },
      { icon: "✦", text: "Durée : 1h30" },
      { icon: "✦", text: "Perruque closure" },
      { icon: "✦", text: "Cadjehoun, Cotonou" },
    ],
    intro: {
      imageAlt: "Installation d'une perruque closure par une coiffeuse au salon Beauty Gate Cotonou",
      headline: "La perruque closure, discrétion et naturel",
      description: "La perruque closure permet de couvrir entièrement le crâne avec un rabat en lace au niveau de la raie pour un rendu naturel. À l'Academy Beauty Gate de Cadjehoun, nos coiffeuses préparent votre base, sécurisent la perruque et ajustent la lace pour un résultat indétectable.",
      listItems: [
        "Préparation de la base par des petites nattes plates",
        "Fixation sécurisée de la perruque avec colle ou crochets",
        "Ajustement et découpe de la lace pour une raie naturelle",
        "Coiffage et finalisation de la perruque selon vos souhaits",
        "Prestation complète en 1h30 au salon de Cadjehoun",
      ],
    },
    benefits: [
      {
        title: "Protection totale",
        description: "La perruque closure protège l'intégralité de vos cheveux naturels, leur permettant de se reposer et de pousser librement sous la perruque.",
      },
      {
        title: "Rendu naturel avec la closure",
        description: "Le panel closure imite le cuir chevelu au niveau de la raie, créant l'illusion que les cheveux poussent naturellement de votre crâne.",
      },
      {
        title: "Changement de look facile",
        description: "Avec une perruque closure, changez de longueur, de couleur ou de texture en quelques minutes. Un atout beauté incontournable à Cotonou.",
      },
      {
        title: "Prix abordable",
        description: "À 6 000 FCFA pour la pose professionnelle, nos clientes de Cadjehoun bénéficient d'un service de qualité sans se ruiner.",
      },
    ],
    pricing: {
      headline: "Tarif Pose de perruque closure",
      note: "Prix de la pose uniquement. Apportez votre perruque closure. Nous pouvons vous conseiller sur les meilleures références disponibles à Cotonou.",
      items: [
        { label: "Pose de perruque closure", price: "6 000 FCFA", note: "Durée : 1h30 (perruque non fournie)" },
      ],
    },
    faq: [
      {
        question: "Qu'est-ce qu'une perruque closure ?",
        answer: "Une perruque closure possède un panel de lace (4×4 ou 5×5 cm) au niveau de la raie qui imite le cuir chevelu. Elle couvre plus discrètement que la frontale mais offre un rendu très naturel.",
      },
      {
        question: "Faut-il de la colle pour poser une closure ?",
        answer: "Différentes méthodes existent : colle, ruban adhésif, crochets ou gel. Nos coiffeuses choisissent la méthode la plus adaptée selon votre perruque et votre mode de vie.",
      },
      {
        question: "Comment enlever une perruque closure sans abîmer ses cheveux ?",
        answer: "Utilisez un dissolvant de colle spécifique (comme le Got2b dissolvant) et décolllez doucement en vous aidant d'un peigne à queue fine. Ne tirez jamais brutalement.",
      },
      {
        question: "Combien de temps peut-on garder une perruque closure posée ?",
        answer: "En moyenne 2 à 4 semaines selon la méthode de fixation. Nous recommandons de la déposer régulièrement pour nettoyer le cuir chevelu et vos cheveux naturels.",
      },
    ],
    cta: {
      headline: "Posez votre perruque closure à Cotonou",
      description: "Rendez-vous à l'Academy Beauty Gate, Cadjehoun. Pose de perruque closure à 6 000 FCFA, résultat impeccable.",
    },
  },
  {
    slug: "pose-perruque-frontale-cotonou",
    title: "Pose de perruque frontale à Cotonou",
    metaDescription: "Pose de perruque frontale à Cotonou, Cadjehoun. Installation lace front professionnelle à 10 000 FCFA à l'Academy Beauty Gate. Résultat naturel en 2h.",
    category: "coiffure",
    hero: {
      imageAlt: "Pose de perruque frontale au salon Academy Beauty Gate à Cotonou",
      eyebrow: "Coiffure · Cadjehoun, Cotonou",
      headline: "Pose de perruque frontale",
      subheadline: "La lace frontale pour un rendu ultra-naturel — posée par des expertes à 10 000 FCFA en 2h à Cadjehoun.",
    },
    badges: [
      { icon: "✦", text: "10 000 FCFA" },
      { icon: "✦", text: "Durée : 2h" },
      { icon: "✦", text: "Lace frontale" },
      { icon: "✦", text: "Cadjehoun, Cotonou" },
    ],
    intro: {
      imageAlt: "Coiffeuse posant une perruque frontale au salon Beauty Gate Cotonou",
      headline: "La frontale, le haut de gamme de la perruque",
      description: "La perruque frontale dispose d'un grand panel de lace qui s'étend d'une oreille à l'autre sur toute la ligne du front. Ce type de perruque offre une liberté de coiffage maximale et le rendu le plus naturel possible. Chez Academy Beauty Gate à Cadjehoun, la pose frontale est un art que nos coiffeuses maîtrisent parfaitement.",
      listItems: [
        "Lace frontale s'étendant d'une oreille à l'autre",
        "Liberté totale de coiffage : raie partout, cheveux en arrière",
        "Préparation minutieuse de la base capillaire",
        "Découpe et ajustement de la lace par des mains expertes",
        "Maquillage de la lace pour un résultat indétectable en 2h",
      ],
    },
    benefits: [
      {
        title: "Liberté de coiffage totale",
        description: "La lace frontale vous permet de dégager votre front, de changer la raie à gauche, à droite ou au centre, ou même de faire des chignons hauts sans montrer la base.",
      },
      {
        title: "Rendu le plus naturel",
        description: "Avec une lace bien ajustée et maquillée, personne ne peut deviner que vous portez une perruque. Le rendu est indissociable de vrais cheveux.",
      },
      {
        title: "Protection capillaire optimale",
        description: "Sous la frontale, vos cheveux naturels sont complètement protégés et mis au repos, idéal pour favoriser leur croissance en douceur.",
      },
      {
        title: "Investissement rentable",
        description: "À 10 000 FCFA pour une pose professionnelle à Cotonou, vous bénéficiez d'un résultat digne des plus grandes capitales de la mode africaine.",
      },
    ],
    pricing: {
      headline: "Tarif Pose de perruque frontale",
      note: "Tarif de la pose uniquement. Apportez votre perruque frontale. Consultez-nous pour des recommandations d'achat à Cotonou.",
      items: [
        { label: "Pose de perruque frontale", price: "10 000 FCFA", note: "Durée : 2h (perruque non fournie)" },
      ],
    },
    faq: [
      {
        question: "Quelle est la différence entre closure et frontale ?",
        answer: "La closure a un petit panel de lace (4×4 cm) au niveau de la raie seulement. La frontale a un grand panel de lace (13×4 ou 13×6 cm) qui court d'une oreille à l'autre, offrant plus de liberté de coiffage.",
      },
      {
        question: "Peut-on mettre la frontale en queue de cheval ?",
        answer: "Oui, c'est l'un des avantages majeurs de la frontale. La lace couvrant toute la périphérie du front, vous pouvez dégager les cheveux sans montrer de bord visible.",
      },
      {
        question: "Comment maintenir une perruque frontale bien posée ?",
        answer: "Dormez avec un bonnet satin, évitez la transpiration excessive, et retouchez la colle ou le gel de maintien selon les besoins. Venez nous voir pour les retouches.",
      },
      {
        question: "La lace peut-elle irriter la peau en climat tropical comme au Bénin ?",
        answer: "Certaines personnes peuvent avoir une réaction à la colle. Nous utilisons des produits doux et proposons des alternatives sans colle pour les peaux sensibles.",
      },
    ],
    cta: {
      headline: "Posez votre frontale à Cotonou",
      description: "Réservez chez l'Academy Beauty Gate, Cadjehoun. Pose de perruque frontale professionnelle à 10 000 FCFA.",
    },
  },
  {
    slug: "confection-perruque-cotonou",
    title: "Confection de perruque à Cotonou",
    metaDescription: "Confection de perruque sur mesure à Cotonou, Cadjehoun. Création artisanale de perruque à 14 000 FCFA à l'Academy Beauty Gate. Livraison en 3 à 4h.",
    category: "coiffure",
    hero: {
      imageAlt: "Confection de perruque artisanale au salon Academy Beauty Gate à Cotonou",
      eyebrow: "Coiffure · Cadjehoun, Cotonou",
      headline: "Confection de perruque",
      subheadline: "Votre perruque créée sur mesure par nos artisanes à 14 000 FCFA — un savoir-faire unique à Cadjehoun.",
    },
    badges: [
      { icon: "✦", text: "14 000 FCFA" },
      { icon: "✦", text: "Durée : 3–4h" },
      { icon: "✦", text: "Perruque sur mesure" },
      { icon: "✦", text: "Cadjehoun, Cotonou" },
    ],
    intro: {
      imageAlt: "Coiffeuse confectionnant une perruque artisanale au salon Beauty Gate Cotonou",
      headline: "L'art de la perruque artisanale",
      description: "La confection de perruque est un service premium qui vous permet d'obtenir une perruque créée spécialement pour vous. À l'Academy Beauty Gate de Cadjehoun, nos artisanes coiffent les cheveux ou mèches sur un bonnet ou une base lace, selon vos spécifications exactes de longueur, densité et style.",
      listItems: [
        "Confection sur mesure selon vos specifications exactes",
        "Choix du type de base : bonnet, lace closure ou lace frontale",
        "Adaptation à votre tour de tête pour un ajustement parfait",
        "Cheveux ou mèches de votre choix intégrés à la main",
        "Perruque prête en 3 à 4h dans notre atelier de Cadjehoun",
      ],
    },
    benefits: [
      {
        title: "Perruque unique",
        description: "Contrairement à une perruque achetée en magasin, votre perruque confectionnée par nos artisanes est unique, faite exactement selon vos mesures et désirs.",
      },
      {
        title: "Qualité maîtrisée",
        description: "Vous choisissez vous-même les cheveux ou mèches utilisés. La qualité du résultat final est directement liée à la qualité des matériaux que vous apportez.",
      },
      {
        title: "Ajustement parfait",
        description: "Une perruque confectionnée sur mesure s'adapte parfaitement à la forme de votre crâne, offrant un confort et une sécurité que les perruques standard ne peuvent égaler.",
      },
      {
        title: "Économie à long terme",
        description: "Investir dans une perruque de qualité faite sur mesure revient moins cher que d'en acheter plusieurs de mauvaise qualité. À 14 000 FCFA, c'est un choix avisé.",
      },
    ],
    pricing: {
      headline: "Tarif Confection de perruque",
      note: "Tarif de confection uniquement. Apportez vos cheveux ou mèches. Le tarif peut varier selon la complexité et la densité souhaitée.",
      items: [
        { label: "Confection de perruque", price: "14 000 FCFA", note: "Durée : 3–4h (matériaux non fournis)" },
      ],
    },
    faq: [
      {
        question: "Quels matériaux dois-je apporter pour la confection ?",
        answer: "Vous devez apporter les cheveux (wefts, mèches en vrac ou tout autre type) et préciser le type de base souhaité (bonnet ou lace). Nous pouvons vous conseiller sur les quantités nécessaires.",
      },
      {
        question: "Peut-on confectionner une perruque frontale sur mesure ?",
        answer: "Oui, nous confectionnons des perruques sur base closure, frontale ou bonnet simple selon votre demande. Précisez votre souhait lors de la prise de rendez-vous.",
      },
      {
        question: "Combien de temps dure une perruque bien confectionnée ?",
        answer: "Avec un bon entretien, une perruque artisanale peut durer 6 à 18 mois. La durée dépend surtout de la qualité des cheveux utilisés et du soin apporté à l'entretien.",
      },
      {
        question: "Peut-on modifier une perruque déjà confectionnée ?",
        answer: "Dans certains cas, oui. Nous pouvons couper, retailler ou restructurer une perruque existante. Apportez-la au salon pour une évaluation gratuite.",
      },
    ],
    cta: {
      headline: "Faites confectionner votre perruque à Cotonou",
      description: "Prenez rendez-vous à l'Academy Beauty Gate, Cadjehoun. Confection artisanale dès 14 000 FCFA.",
    },
  },
  {
    slug: "entretien-perruque-cotonou",
    title: "Entretien de perruque à Cotonou",
    metaDescription: "Entretien de perruque à Cotonou, Cadjehoun. Nettoyage, soin et remise en forme de votre perruque dès 8 000 FCFA à l'Academy Beauty Gate. Service en 2h.",
    category: "coiffure",
    hero: {
      imageAlt: "Entretien de perruque au salon Academy Beauty Gate à Cotonou",
      eyebrow: "Coiffure · Cadjehoun, Cotonou",
      headline: "Entretien de perruque",
      subheadline: "Redonnez vie à votre perruque — service d'entretien professionnel dès 8 000 FCFA à l'Academy Beauty Gate.",
    },
    badges: [
      { icon: "✦", text: "À partir de 8 000 FCFA" },
      { icon: "✦", text: "Durée : 2h" },
      { icon: "✦", text: "Nettoyage & remise en forme" },
      { icon: "✦", text: "Cadjehoun, Cotonou" },
    ],
    intro: {
      imageAlt: "Coiffeuse entretenant une perruque au salon Beauty Gate Cotonou",
      headline: "Prolongez la vie de votre perruque",
      description: "Une perruque bien entretenue dure bien plus longtemps et conserve son aspect naturel. À l'Academy Beauty Gate de Cadjehoun, nous proposons un service complet d'entretien incluant nettoyage, démêlage, soin profond et remise en forme. Apportez-nous votre perruque et repartez avec une pièce comme neuve.",
      listItems: [
        "Nettoyage en profondeur avec des produits adaptés aux extensions",
        "Démêlage minutieux sans casse des fibres ou cheveux",
        "Soin hydratant pour restaurer la brillance et la souplesse",
        "Remise en forme : brushing, lissage ou coiffage selon le style original",
        "Service complet en 2h à Cadjehoun, Cotonou",
      ],
    },
    benefits: [
      {
        title: "Durée de vie prolongée",
        description: "Un entretien régulier peut tripler la durée de vie de votre perruque. C'est un investissement minime pour préserver un achat souvent coûteux.",
      },
      {
        title: "Hygiène irréprochable",
        description: "Les perruques accumulent sébum, sueur et poussière. Un nettoyage professionnel garantit une hygiène optimale, essentielle dans le climat tropical béninois.",
      },
      {
        title: "Retrouver l'éclat d'origine",
        description: "Nos soins hydratants et nos techniques de remise en forme redonnent à votre perruque l'aspect brillant et naturel qu'elle avait lors de votre premier port.",
      },
      {
        title: "Expertise professionnelle",
        description: "Nos coiffeuses connaissent les spécificités de chaque type de fibre et de cheveux. Elles adaptent les produits et techniques pour ne pas endommager votre perruque.",
      },
    ],
    pricing: {
      headline: "Tarif Entretien de perruque",
      note: "Prix variable selon l'état de la perruque, sa longueur et la prestation nécessaire. Diagnostic gratuit au salon.",
      items: [
        { label: "Entretien de perruque", price: "À partir de 8 000 FCFA", note: "Durée : 2h" },
      ],
    },
    faq: [
      {
        question: "À quelle fréquence faut-il entretenir sa perruque ?",
        answer: "En usage régulier (port quotidien), un entretien professionnel toutes les 4 à 6 semaines est recommandé. Pour un port occasionnel, tous les 2 à 3 mois suffisent.",
      },
      {
        question: "Peut-on entretenir une perruque en fibre synthétique ?",
        answer: "Oui, mais avec des produits spécifiques aux fibres synthétiques. Contrairement aux vrais cheveux, la fibre ne supporte pas la chaleur intense ni les produits trop riches.",
      },
      {
        question: "Votre salon peut-il réparer une perruque abîmée ?",
        answer: "Dans de nombreux cas oui : recoudre des wefts lâches, reparer la lace, ajouter de la densité dans les zones clairsemées. Apportez votre perruque pour évaluation.",
      },
      {
        question: "Combien de temps faut-il pour l'entretien au salon ?",
        answer: "Comptez en moyenne 2 heures pour un entretien complet incluant lavage, soin, séchage et remise en forme. Certaines perruques très longues ou très denses peuvent nécessiter plus de temps.",
      },
    ],
    cta: {
      headline: "Apportez votre perruque à Cotonou",
      description: "L'Academy Beauty Gate à Cadjehoun prend soin de votre perruque. Service d'entretien dès 8 000 FCFA.",
    },
  },
  {
    slug: "shampoing-cotonou",
    title: "Shampoing à Cotonou",
    metaDescription: "Shampoing professionnel à Cotonou, quartier Cadjehoun. Lavage et soin du cuir chevelu à 2 000 FCFA à l'Academy Beauty Gate. Prestation rapide en 20 min.",
    category: "coiffure",
    hero: {
      imageAlt: "Shampoing professionnel au salon Academy Beauty Gate à Cotonou",
      eyebrow: "Coiffure · Cadjehoun, Cotonou",
      headline: "Shampoing",
      subheadline: "Un lavage professionnel pour des cheveux sains et propres — service shampoing à 2 000 FCFA en 20 min à Cadjehoun.",
    },
    badges: [
      { icon: "✦", text: "2 000 FCFA" },
      { icon: "✦", text: "Durée : 20 min" },
      { icon: "✦", text: "Lavage professionnel" },
      { icon: "✦", text: "Cadjehoun, Cotonou" },
    ],
    intro: {
      imageAlt: "Lavage shampoing professionnel au salon Beauty Gate Cotonou",
      headline: "La base d'une belle chevelure",
      description: "Un bon shampoing professionnel, c'est la fondation de tout soin capillaire efficace. À l'Academy Beauty Gate de Cadjehoun, nous utilisons des shampoings adaptés à chaque type de cheveux — gras, secs, colorés ou traités — et réalisons un massage crânien relaxant pour stimuler la circulation sanguine.",
      listItems: [
        "Shampoing sélectionné selon votre type de cheveux spécifique",
        "Massage crânien inclus pour détendre et stimuler le cuir chevelu",
        "Rinçage soigneux pour éviter tout résidu de produit",
        "Séchage à la serviette doux, respectueux de la fibre capillaire",
        "Prestation rapide et efficace en seulement 20 min",
      ],
    },
    benefits: [
      {
        title: "Base propre pour tout soin",
        description: "Un shampoing professionnel prépare idéalement les cheveux pour tout soin ou coiffure suivant. Les produits pénètrent mieux sur cheveux propres.",
      },
      {
        title: "Cuir chevelu sain",
        description: "Le massage crânien stimule la microcirculation, aide à éliminer les cellules mortes et favorise un cuir chevelu sain, essentiel dans le climat chaud du Bénin.",
      },
      {
        title: "Hygiène impeccable",
        description: "Un lavage régulier élimine les accumulations de sébum, sueur et pollution, évitant démangeaisons, pellicules et odeurs désagréables.",
      },
      {
        title: "Prix mini, impact maxi",
        description: "À seulement 2 000 FCFA, le shampoing professionnel à l'Academy Beauty Gate est le soin le plus accessible et le plus fondamental pour des cheveux en bonne santé.",
      },
    ],
    pricing: {
      headline: "Tarif Shampoing",
      note: "Le shampoing seul peut être combiné avec d'autres prestations (brushing, teinte, soin). Prix fixes, sans surprise.",
      items: [
        { label: "Shampoing seul", price: "2 000 FCFA", note: "Durée : 20 min" },
      ],
    },
    faq: [
      {
        question: "À quelle fréquence faut-il faire un shampoing professionnel ?",
        answer: "En général une fois par semaine à deux semaines selon votre type de cheveux et votre activité. Dans le climat chaud et humide de Cotonou, un lavage hebdomadaire est souvent conseillé.",
      },
      {
        question: "Utilisez-vous des produits naturels pour le shampoing ?",
        answer: "Nous utilisons des shampoings professionnels adaptés à chaque type de cheveux. Signalez-nous toute allergie ou préférence (produits sulfate-free, naturels) avant la prestation.",
      },
      {
        question: "Peut-on faire un shampoing avant une coiffure comme les tresses ?",
        answer: "Oui, c'est même recommandé. Des cheveux propres se coiffent mieux, les coiffures tiennent plus longtemps et le cuir chevelu est mieux préparé à la pose.",
      },
      {
        question: "Le shampoing inclut-il le séchage ?",
        answer: "Le séchage à la serviette est inclus. Pour un brushing ou un séchage au sèche-cheveux, optez pour notre formule Shampoing + Brushing à 5 000 FCFA.",
      },
    ],
    cta: {
      headline: "Lavez vos cheveux à Cotonou",
      description: "Passez à l'Academy Beauty Gate, Cadjehoun. Shampoing professionnel à 2 000 FCFA, sans rendez-vous sur disponibilités.",
    },
  },
  {
    slug: "shampoing-brushing-cotonou",
    title: "Shampoing + Brushing à Cotonou",
    metaDescription: "Shampoing et brushing professionnel à Cotonou, Cadjehoun. Lavage + mise en forme lissée à 5 000 FCFA à l'Academy Beauty Gate. Prestation en 1h.",
    category: "coiffure",
    hero: {
      imageAlt: "Shampoing et brushing réalisés au salon Academy Beauty Gate à Cotonou",
      eyebrow: "Coiffure · Cadjehoun, Cotonou",
      headline: "Shampoing + Brushing",
      subheadline: "Cheveux lavés, lissés et brillants — la formule complète shampoing + brushing à 5 000 FCFA en 1h à Cadjehoun.",
    },
    badges: [
      { icon: "✦", text: "5 000 FCFA" },
      { icon: "✦", text: "Durée : 1h" },
      { icon: "✦", text: "Lavage + mise en forme" },
      { icon: "✦", text: "Cadjehoun, Cotonou" },
    ],
    intro: {
      imageAlt: "Brushing professionnel après shampoing au salon Beauty Gate Cotonou",
      headline: "Le duo incontournable pour des cheveux impeccables",
      description: "La formule Shampoing + Brushing est la prestation capillaire la plus demandée au salon. À l'Academy Beauty Gate de Cadjehoun, après un lavage soigneux, nos coiffeuses réalisent un brushing professionnel au sèche-cheveux et à la brosse ronde pour un résultat lisse, brillant et plein de volume.",
      listItems: [
        "Shampoing adapté à votre type de cheveux avec massage crânien",
        "Application d'un après-shampoing ou masque nourrissant",
        "Brushing à la brosse ronde pour du volume et de la brillance",
        "Lissage progressif au sèche-cheveux professionnel",
        "Finition impeccable : cheveux lisses, brillants et coiffés en 1h",
      ],
    },
    benefits: [
      {
        title: "Résultat salon professionnel",
        description: "Un brushing réalisé par une professionnelle donne un résultat incomparable avec ce qu'on peut faire chez soi. Volume, brillance et lissé parfait.",
      },
      {
        title: "Cheveux préparés pour toute occasion",
        description: "Après un shampoing + brushing, vos cheveux sont prêts pour une réunion, une cérémonie ou une sortie à Cotonou. Un boost beauté express en 1h.",
      },
      {
        title: "Soin et coiffage combinés",
        description: "Le combo lavage + brushing nettoie, nourrit et met en forme en une seule visite. Efficacité et gain de temps pour les femmes actives.",
      },
      {
        title: "Prix accessible",
        description: "À 5 000 FCFA à Cadjehoun, la formule shampoing + brushing est le meilleur rapport qualité-prix de la gamme coiffure de l'Academy Beauty Gate.",
      },
    ],
    pricing: {
      headline: "Tarif Shampoing + Brushing",
      note: "Prix fixe. Pour l'ajout d'une teinte, voir nos formules combinées avec teinte noire ou teinte colorée.",
      items: [
        { label: "Shampoing + Brushing", price: "5 000 FCFA", note: "Durée : 1h" },
      ],
    },
    faq: [
      {
        question: "Le brushing est-il adapté aux cheveux très bouclés ou crépus ?",
        answer: "Le brushing lisse temporairement les cheveux bouclés et crépus. Sur des cheveux très crépus, le résultat sera moins durable qu'un défrisage mais offre un rendu lissé pour quelques jours.",
      },
      {
        question: "Combien de temps tient un brushing ?",
        answer: "En règle générale 2 à 5 jours selon votre activité, la chaleur et l'humidité ambiante. À Cotonou, la chaleur peut réduire la tenue. Dormez avec un bonnet satin pour prolonger.",
      },
      {
        question: "Utilisez-vous de la chaleur excessive qui pourrait abîmer les cheveux ?",
        answer: "Nos coiffeuses adaptent la température du sèche-cheveux selon votre type de cheveux et appliquent un protecteur thermique avant tout brushing.",
      },
      {
        question: "Peut-on ajouter un soin kératine ou lissant au brushing ?",
        answer: "Oui, nous proposons des soins lissants optionnels. Renseignez-vous sur les tarifs lors de la prise de rendez-vous à l'Academy Beauty Gate.",
      },
    ],
    cta: {
      headline: "Réservez votre shampoing + brushing à Cotonou",
      description: "L'Academy Beauty Gate à Cadjehoun vous attend pour un brushing impeccable à 5 000 FCFA.",
    },
  },
  {
    slug: "shampoing-teinte-noire-brushing-cotonou",
    title: "Shampoing + teinte noire + Brushing à Cotonou",
    metaDescription: "Shampoing, teinte noire et brushing à Cotonou, Cadjehoun. Ravivez la couleur noire de vos cheveux à 8 000 FCFA à l'Academy Beauty Gate en 1h30.",
    category: "coiffure",
    hero: {
      imageAlt: "Shampoing, teinte noire et brushing au salon Academy Beauty Gate Cotonou",
      eyebrow: "Coiffure · Cadjehoun, Cotonou",
      headline: "Shampoing + teinte noire + Brushing",
      subheadline: "Un noir profond et brillant retrouvé — la formule complète avec teinte noire à 8 000 FCFA à Cadjehoun.",
    },
    badges: [
      { icon: "✦", text: "8 000 FCFA" },
      { icon: "✦", text: "Durée : 1h30" },
      { icon: "✦", text: "Teinte noire + brushing" },
      { icon: "✦", text: "Cadjehoun, Cotonou" },
    ],
    intro: {
      imageAlt: "Application de teinte noire sur cheveux au salon Beauty Gate Cotonou",
      headline: "Le noir retrouvé, plus intense que jamais",
      description: "La formule shampoing + teinte noire + brushing est idéale pour raviver la couleur de cheveux qui ont perdu de leur intensité, blanchis ou roussis sous le soleil béninois. À l'Academy Beauty Gate de Cadjehoun, nous utilisons des colorants professionnels pour un noir profond, brillant et durable.",
      listItems: [
        "Shampoing préliminaire pour ouvrir les écailles et préparer la prise de couleur",
        "Application d'une teinte noire professionnelle uniforme",
        "Temps de pose respecté pour une couleur profonde et longue durée",
        "Rinçage et application d'un soin fixateur de couleur",
        "Brushing final pour un résultat lisse et brillant en 1h30",
      ],
    },
    benefits: [
      {
        title: "Couleur ravivée et intensifiée",
        description: "La teinte noire professionnelle redonne à vos cheveux un noir profond et homogène, couvrant les premières mèches blanches et effaçant les reflets roux du soleil.",
      },
      {
        title: "Éclat et brillance",
        description: "Après teinte et brushing, vos cheveux affichent une brillance remarquable. Le noir est rendu plus lumineux par le brushing professionnel.",
      },
      {
        title: "Formule tout-en-un",
        description: "En une seule visite d'1h30, lavage, couleur et coiffage sont réalisés. Pratique et économique pour les femmes actives de Cotonou.",
      },
      {
        title: "Résultat longue durée",
        description: "Une teinte professionnelle tient 4 à 6 semaines selon votre rythme de lavage. Un entretien régulier maintient la couleur vive et uniforme.",
      },
    ],
    pricing: {
      headline: "Tarif Shampoing + teinte noire + Brushing",
      note: "Tarif fixe incluant le produit colorant. La teinte noire est incluse dans le prix. Pour une teinte colorée, voir la formule dédiée.",
      items: [
        { label: "Shampoing + teinte noire + Brushing", price: "8 000 FCFA", note: "Durée : 1h30" },
      ],
    },
    faq: [
      {
        question: "La teinte noire couvre-t-elle les cheveux blancs ?",
        answer: "Oui, notre teinte noire professionnelle couvre efficacement les cheveux blancs et gris. Pour une couverture totale sur beaucoup de blanc, nous adaptons le temps de pose.",
      },
      {
        question: "La teinte noire abîme-t-elle les cheveux ?",
        answer: "Nos colorants professionnels contiennent des agents conditionneurs qui limitent la détérioration. Toutefois, toute coloration chimique a un impact minimal sur la fibre. Nous recommandons un soin après chaque teinte.",
      },
      {
        question: "Combien de temps dure la teinte noire ?",
        answer: "La teinte noire tient généralement 4 à 6 semaines. Un shampoing fréquent ou l'exposition au soleil peuvent l'estomper plus rapidement.",
      },
      {
        question: "Cette formule est-elle adaptée aux cheveux défrisés ?",
        answer: "Oui, mais avec un intervalle recommandé de 2 semaines entre le défrisage et la teinte pour limiter la superposition de traitements chimiques.",
      },
    ],
    cta: {
      headline: "Réservez votre teinte noire à Cotonou",
      description: "Rendez-vous à l'Academy Beauty Gate, Cadjehoun. Shampoing + teinte noire + brushing à 8 000 FCFA.",
    },
  },
  {
    slug: "shampoing-teinte-coloree-brushing-cotonou",
    title: "Shampoing + teinte colorée + Brushing à Cotonou",
    metaDescription: "Shampoing, teinte colorée et brushing à Cotonou, Cadjehoun. Coloration audacieuse professionnelle à 12 000 FCFA à l'Academy Beauty Gate en 2h.",
    category: "coiffure",
    hero: {
      imageAlt: "Teinte colorée et brushing au salon Academy Beauty Gate Cotonou",
      eyebrow: "Coiffure · Cadjehoun, Cotonou",
      headline: "Shampoing + teinte colorée + Brushing",
      subheadline: "Osez la couleur — teinte colorée professionnelle et brushing dès 12 000 FCFA à l'Academy Beauty Gate.",
    },
    badges: [
      { icon: "✦", text: "12 000 FCFA" },
      { icon: "✦", text: "Durée : 2h" },
      { icon: "✦", text: "Coloration & brushing" },
      { icon: "✦", text: "Cadjehoun, Cotonou" },
    ],
    intro: {
      imageAlt: "Application de coloration colorée au salon Beauty Gate Cotonou",
      headline: "Exprimez-vous avec la couleur",
      description: "La coloration colorée ouvre un champ de possibilités infini. Châtain, bordeaux, brun doré, auburn, acajou — à l'Academy Beauty Gate de Cadjehoun, nos coloristes sélectionnent la teinte parfaite pour votre carnation et réalisent une application professionnelle suivie d'un brushing soigné.",
      listItems: [
        "Conseil colorimétrique adapté à votre teint et à vos envies",
        "Application uniforme sur l'ensemble de la chevelure",
        "Produits professionnels pour une couleur intense et durable",
        "Soin post-coloration pour fermer les écailles et fixer la couleur",
        "Brushing final brillant en 2h chez nos expertes de Cadjehoun",
      ],
    },
    benefits: [
      {
        title: "Personnalisation totale",
        description: "Des dizaines de nuances disponibles : châtain clair, acajou, cuivré, bordeaux, brun naturel… Nous trouvons la teinte qui mettra le mieux en valeur vos traits.",
      },
      {
        title: "Technique professionnelle",
        description: "Nos coloristes maîtrisent l'application pour une couverture homogène sans zones ratées ni traces. Un résultat digne d'un grand salon.",
      },
      {
        title: "Combinaison efficace",
        description: "La formule tout-en-un (lavage, couleur, coiffage) en 2h vous fait gagner du temps et optimise votre journée beauté à Cotonou.",
      },
      {
        title: "Boost de confiance",
        description: "Un changement de couleur transforme votre image. Repartez du salon avec une nouvelle allure et une confiance renouvelée.",
      },
    ],
    pricing: {
      headline: "Tarif Shampoing + teinte colorée + Brushing",
      note: "Prix incluant le produit colorant pour une coloration uniforme. Tarif susceptible de varier pour des techniques spéciales (balayage, mèches). Renseignez-vous au salon.",
      items: [
        { label: "Shampoing + teinte colorée + Brushing", price: "12 000 FCFA", note: "Durée : 2h" },
      ],
    },
    faq: [
      {
        question: "Quelles couleurs sont disponibles à l'Academy Beauty Gate ?",
        answer: "Nous proposons une large gamme de teintes professionnelles : nuances de brun, châtain, acajou, cuivré, bordeaux, auburn. Consultez-nous pour voir notre nuancier complet.",
      },
      {
        question: "Faut-il décolorer ses cheveux avant une teinte colorée ?",
        answer: "Sur des cheveux foncés, certaines teintes claires nécessitent une pré-décoloration. Nos coloristes évaluent votre couleur de base et vous conseillent lors du bilan.",
      },
      {
        question: "Combien de temps dure la teinte colorée ?",
        answer: "En moyenne 4 à 6 semaines avant un estompage visible. Les teintes foncées durent généralement plus longtemps que les teintes claires.",
      },
      {
        question: "La teinte colorée est-elle compatible avec les cheveux défrisés ?",
        answer: "Oui, mais respectez un délai de 2 à 3 semaines entre défrisage et coloration pour ne pas fragiliser excessivement vos cheveux.",
      },
    ],
    cta: {
      headline: "Changez de couleur à Cotonou",
      description: "Prenez rendez-vous à l'Academy Beauty Gate, Cadjehoun. Teinte colorée + brushing à 12 000 FCFA.",
    },
  },
  {
    slug: "soin-vapeur-massage-cranien-cotonou",
    title: "Soin vapeur + massage crânien à Cotonou",
    metaDescription: "Soin vapeur et massage crânien à Cotonou, Cadjehoun. Traitement capillaire profond à 15 000 FCFA à l'Academy Beauty Gate. Expérience relaxante en 1h.",
    category: "coiffure",
    hero: {
      imageAlt: "Soin vapeur et massage crânien au salon Academy Beauty Gate Cotonou",
      eyebrow: "Coiffure · Cadjehoun, Cotonou",
      headline: "Soin vapeur + massage crânien",
      subheadline: "Le soin capillaire premium de Cotonou — hydratation en profondeur et relaxation totale à 15 000 FCFA.",
    },
    badges: [
      { icon: "✦", text: "15 000 FCFA" },
      { icon: "✦", text: "Durée : 1h" },
      { icon: "✦", text: "Soin profond + relaxation" },
      { icon: "✦", text: "Cadjehoun, Cotonou" },
    ],
    intro: {
      imageAlt: "Soin vapeur appliqué sur cheveux au salon Beauty Gate Cotonou",
      headline: "La thérapie capillaire ultime",
      description: "Le soin vapeur est le traitement capillaire le plus complet et le plus efficace. La chaleur de la vapeur ouvre les écailles capillaires, permettant aux actifs du masque de pénétrer en profondeur. Combiné à un massage crânien expert, ce soin à l'Academy Beauty Gate de Cadjehoun est une véritable expérience de bien-être.",
      listItems: [
        "Application d'un masque nourrissant professionnel adapté à votre besoin",
        "Enveloppement sous vapeur pour une pénétration optimale des actifs",
        "Massage crânien relaxant pour stimuler la circulation et détendre",
        "Rinçage soigneux suivi d'un soin démêlant léger",
        "Résultat immédiat : cheveux souples, brillants et nourris en 1h",
      ],
    },
    benefits: [
      {
        title: "Hydratation en profondeur",
        description: "La vapeur ouvre les cuticules capillaires, permettant aux ingrédients actifs du masque de pénétrer jusqu'au cœur de la fibre pour une hydratation incomparable.",
      },
      {
        title: "Réparation et renforcement",
        description: "Les protéines et huiles du masque réparent les cheveux abîmés, fragilisés par les traitements chimiques, la chaleur ou le soleil béninois.",
      },
      {
        title: "Relaxation profonde",
        description: "Le massage crânien procure une détente profonde du cuir chevelu et des épaules, libérant les tensions accumulées et favorisant un sommeil de qualité.",
      },
      {
        title: "Effet longue durée",
        description: "Contrairement aux soins en sachet, le soin vapeur professionnel laisse une hydratation et une souplesse qui durent plusieurs semaines.",
      },
    ],
    pricing: {
      headline: "Tarif Soin vapeur + massage crânien",
      note: "Tarif fixe tout compris incluant masque, vapeur et massage crânien. Aucun supplément.",
      items: [
        { label: "Soin vapeur + massage crânien", price: "15 000 FCFA", note: "Durée : 1h" },
      ],
    },
    faq: [
      {
        question: "À quelle fréquence réaliser un soin vapeur ?",
        answer: "Pour des cheveux très secs ou abîmés, un soin vapeur toutes les 3 à 4 semaines est idéal. Pour un entretien préventif, une fois par mois suffit.",
      },
      {
        question: "Le soin vapeur convient-il aux cheveux colorés ou défrisés ?",
        answer: "Absolument, c'est même recommandé. Les traitements chimiques fragilisent les cheveux et le soin vapeur répare et renforce la fibre fragilisée.",
      },
      {
        question: "Peut-on faire le soin vapeur avec des nattes ou tresses ?",
        answer: "Non, le soin vapeur est réalisé sur cheveux dénoués. Si vous portez des tresses, nous vous conseillons de déposer votre coiffure avant la séance.",
      },
      {
        question: "Le massage crânien est-il douloureux ?",
        answer: "Non, le massage crânien est une technique douce et relaxante. Signalez toute sensibilité particulière et nos coiffeuses adapteront la pression.",
      },
    ],
    cta: {
      headline: "Offrez-vous un soin vapeur à Cotonou",
      description: "Réservez votre séance à l'Academy Beauty Gate, Cadjehoun. Soin vapeur + massage crânien à 15 000 FCFA.",
    },
  },
  {
    slug: "defrisage-defrisant-non-fourni-cotonou",
    title: "Défrisage (défrisant non fourni) à Cotonou",
    metaDescription: "Défrisage cheveux à Cotonou, Cadjehoun. Lissage chimique avec votre propre défrisant à 3 000 FCFA à l'Academy Beauty Gate. Prestation en 1h15.",
    category: "coiffure",
    hero: {
      imageAlt: "Défrisage professionnel au salon Academy Beauty Gate Cotonou",
      eyebrow: "Coiffure · Cadjehoun, Cotonou",
      headline: "Défrisage (défrisant non fourni)",
      subheadline: "Un lissage chimique professionnel avec votre propre défrisant — à 3 000 FCFA en 1h15 à Cadjehoun.",
    },
    badges: [
      { icon: "✦", text: "3 000 FCFA" },
      { icon: "✦", text: "Durée : 1h15" },
      { icon: "✦", text: "Défrisant à apporter" },
      { icon: "✦", text: "Cadjehoun, Cotonou" },
    ],
    intro: {
      imageAlt: "Application de défrisant par une coiffeuse au salon Beauty Gate Cotonou",
      headline: "Le défrisage, precision et sécurité",
      description: "Le défrisage est un traitement chimique qui lisse les cheveux de façon durable. Réalisé par une professionnelle, il est beaucoup plus sûr qu'un auto-défrisage à domicile. À l'Academy Beauty Gate de Cadjehoun, nos coiffeuses maîtrisent la technique : application précise, respect des temps de pose et neutralisation correcte.",
      listItems: [
        "Application précise sur nouvelles racines uniquement (retouche)",
        "Respect strict du temps de pose selon votre type de cheveux",
        "Test de lissage régulier pour stopper au bon moment",
        "Neutralisation et rinçage en profondeur pour arrêter l'action chimique",
        "Prestation sécurisée en 1h15 par nos coiffeuses expertes",
      ],
    },
    benefits: [
      {
        title: "Pose professionnelle sécurisée",
        description: "Un défrisage mal réalisé à domicile peut provoquer brûlures, casse et chute de cheveux. Nos professionnelles garantissent un résultat sûr et contrôlé.",
      },
      {
        title: "Résultat homogène",
        description: "L'application précise par une coiffeuse garantit un lissage uniforme sur l'ensemble des cheveux, sans zones ratées ni surapplication.",
      },
      {
        title: "Économique",
        description: "En apportant votre propre défrisant, vous contrôlez votre budget. La prestation à 3 000 FCFA couvre uniquement le service professionnel d'application.",
      },
      {
        title: "Suivi personnalisé",
        description: "Nos coiffeuses évaluent l'état de vos cheveux avant chaque séance et vous conseillent sur la fréquence optimale et les soins post-défrisage.",
      },
    ],
    pricing: {
      headline: "Tarif Défrisage (défrisant non fourni)",
      note: "Apportez votre défrisant. Le tarif de 3 000 FCFA couvre la prestation d'application professionnelle uniquement.",
      items: [
        { label: "Défrisage (défrisant à apporter)", price: "3 000 FCFA", note: "Durée : 1h15" },
      ],
    },
    faq: [
      {
        question: "À quelle fréquence peut-on se faire défriser les cheveux ?",
        answer: "En général toutes les 8 à 12 semaines, en appliquant le défrisant uniquement sur les nouvelles racines (retouche). Défriser plus souvent fragilise excessivement les cheveux.",
      },
      {
        question: "Quel défrisant apporter au salon ?",
        answer: "Apportez un défrisant adapté à votre type de cheveux (doux, normal, fort selon votre texture). Si vous ne savez pas lequel choisir, contactez-nous avant votre visite.",
      },
      {
        question: "Peut-on faire une teinte juste après un défrisage ?",
        answer: "Non, il est recommandé d'attendre au moins 2 semaines entre un défrisage et une coloration pour ne pas cumuler les agressions chimiques sur vos cheveux.",
      },
      {
        question: "Mon cuir chevelu est très sensible. Peut-on quand même défriser ?",
        answer: "Oui, avec des précautions supplémentaires. Nos coiffeuses appliquent une base protectrice sur le cuir chevelu et surveillent attentivement votre réaction. Signalez toute allergie avant la prestation.",
      },
    ],
    cta: {
      headline: "Défrisez vos cheveux à Cotonou",
      description: "Prenez rendez-vous à l'Academy Beauty Gate, Cadjehoun. Défrisage professionnel à 3 000 FCFA (défrisant à apporter).",
    },
  },
  {
    slug: "defrisage-defrisant-fourni-cotonou",
    title: "Défrisage (défrisant fourni) à Cotonou",
    metaDescription: "Défrisage complet avec défrisant fourni à Cotonou, Cadjehoun. Lissage chimique tout inclus à 7 000 FCFA à l'Academy Beauty Gate. Prestation en 1h30.",
    category: "coiffure",
    hero: {
      imageAlt: "Défrisage avec défrisant fourni au salon Academy Beauty Gate Cotonou",
      eyebrow: "Coiffure · Cadjehoun, Cotonou",
      headline: "Défrisage (défrisant fourni)",
      subheadline: "La formule tout inclus pour un lissage sans stress — défrisant professionnel fourni à 7 000 FCFA en 1h30.",
    },
    badges: [
      { icon: "✦", text: "7 000 FCFA" },
      { icon: "✦", text: "Durée : 1h30" },
      { icon: "✦", text: "Tout inclus" },
      { icon: "✦", text: "Cadjehoun, Cotonou" },
    ],
    intro: {
      imageAlt: "Application de défrisant professionnel fourni au salon Beauty Gate Cotonou",
      headline: "Tout inclus, zéro tracas",
      description: "La formule défrisage avec défrisant fourni simplifie votre visite au salon. Pas besoin d'acheter ou d'apporter votre défrisant — nous utilisons des produits professionnels sélectionnés pour leur efficacité et leur douceur. À l'Academy Beauty Gate de Cadjehoun, vous arrivez les mains vides et repartez avec des cheveux lisses.",
      listItems: [
        "Défrisant professionnel de qualité salonprofessionnelle fourni",
        "Sélection du produit adapté à votre type et texture de cheveux",
        "Application précise et sécurisée par nos coiffeuses expertes",
        "Neutralisation et rinçage en profondeur compris dans la prestation",
        "Résultat lisse et homogène en 1h30 à Cadjehoun",
      ],
    },
    benefits: [
      {
        title: "Simplicité totale",
        description: "Tout est pris en charge : produit, application, neutralisation, rinçage. Une visite sans préparation préalable, idéale pour les femmes occupées à Cotonou.",
      },
      {
        title: "Produits professionnels",
        description: "Nos défrisants professionnels sont plus doux et plus efficaces que beaucoup de produits grand public. Résultat de qualité supérieure pour vos cheveux.",
      },
      {
        title: "Sécurité garantie",
        description: "Nos coiffeuses choisissent le produit adapté à votre type capillaire et à l'état de vos cheveux, réduisant les risques de surdéfrisage ou d'allergie.",
      },
      {
        title: "Gain de temps",
        description: "Plus besoin de chercher votre défrisant en ville. Venez directement au salon, tout est prêt. Une heure trente et votre style est transformé.",
      },
    ],
    pricing: {
      headline: "Tarif Défrisage (défrisant fourni)",
      note: "Tarif tout inclus : produit défrisant + application professionnelle + neutralisation + rinçage. Aucun supplément.",
      items: [
        { label: "Défrisage (défrisant fourni)", price: "7 000 FCFA", note: "Durée : 1h30" },
      ],
    },
    faq: [
      {
        question: "Quel type de défrisant utilisez-vous au salon ?",
        answer: "Nous utilisons des défrisants professionnels de marques reconnues, disponibles en formules douce, normale et forte selon la nature de vos cheveux. Nos coiffeuses choisissent la formule adaptée.",
      },
      {
        question: "La formule avec défrisant fourni est-elle vraiment tout inclus ?",
        answer: "Oui, tout est inclus : le défrisant, l'application, la base protectrice pour le cuir chevelu, le neutralisant et le rinçage final. Aucun supplément à prévoir.",
      },
      {
        question: "Quelle est la différence entre défrisant doux, normal et fort ?",
        answer: "La différence réside dans la puissance du produit. Les cheveux fins et fragiles nécessitent un défrisant doux, les cheveux normaux une formule normale, les cheveux très résistants ou très crépus une formule forte.",
      },
      {
        question: "Peut-on défriser des cheveux déjà colorés ?",
        answer: "Oui, mais avec précaution. Nous recommandons d'attendre 3 à 4 semaines après une coloration avant de défriser et d'utiliser un produit très doux pour ne pas fragiliser davantage les cheveux.",
      },
    ],
    cta: {
      headline: "Défrisage tout inclus à Cotonou",
      description: "Réservez à l'Academy Beauty Gate, Cadjehoun. Défrisage professionnel avec défrisant fourni à 7 000 FCFA.",
    },
  },
  {
    slug: "shampoing-brushing-enfant-cotonou",
    title: "Shampoing et Brushing Enfant à Cotonou",
    metaDescription: "Shampoing et brushing pour enfant à Cadjehoun, Cotonou. Un soin doux et adapté aux petites têtes au salon Academy Beauty Gate. À partir de 1 500 FCFA.",
    category: "duo-enfants",
    hero: {
      imageAlt: "Shampoing et brushing enfant au salon Academy Beauty Gate Cotonou",
      eyebrow: "Espace Enfants",
      headline: "Shampoing & Brushing Enfant",
      subheadline: "Un moment doux et ludique pour prendre soin des cheveux de votre enfant à Cotonou.",
    },
    badges: [
      { icon: "✦", text: "30 min" },
      { icon: "✦", text: "1 500 FCFA" },
      { icon: "✦", text: "Dès 2 ans" },
    ],
    intro: {
      imageAlt: "Coiffeuse qui fait un brushing à un enfant à Cadjehoun Cotonou",
      headline: "Un soin cheveux pensé pour les enfants",
      description: "Chez Academy Beauty Gate à Cadjehoun, nous proposons un shampoing et brushing spécialement adapté aux enfants. Nos coiffeuses utilisent des produits doux, sans sulfates agressifs, pour un résultat brillant et soyeux en toute sécurité.",
      listItems: [
        "Produits doux adaptés aux cheveux d'enfants",
        "Rinçage soigneux pour éviter les irritations",
        "Brushing léger pour un résultat net et brillant",
        "Ambiance bienveillante et rassurante pour les petits",
        "Prestation rapide en 30 minutes",
      ],
    },
    benefits: [
      {
        title: "Produits certifiés doux",
        description: "Nous sélectionnons des shampoings et après-shampoings adaptés aux cheveux fins et sensibles des enfants.",
      },
      {
        title: "Gestes experts et doux",
        description: "Nos coiffeuses savent mettre les enfants à l'aise et réalisent chaque geste avec douceur et patience.",
      },
      {
        title: "Résultat impeccable",
        description: "Un brushing léger pour des cheveux propres, brillants et faciles à coiffer après la séance.",
      },
      {
        title: "Tarif accessible",
        description: "À seulement 1 500 FCFA, offrez à votre enfant un soin cheveux professionnel dans un cadre chaleureux à Cotonou.",
      },
    ],
    pricing: {
      headline: "Tarif Shampoing & Brushing Enfant",
      note: "Tarif fixe, sans supplément caché.",
      items: [
        { label: "Shampoing et Brushing enfant", price: "1 500 FCFA", note: "30 min" },
      ],
    },
    faq: [
      {
        question: "À partir de quel âge peut-on faire un brushing enfant ?",
        answer: "Dès 2–3 ans, dès que l'enfant peut rester assis quelques minutes. Nos coiffeuses s'adaptent au tempérament de chaque petit.",
      },
      {
        question: "Les produits utilisés sont-ils sans danger pour les enfants ?",
        answer: "Oui, nous utilisons exclusivement des shampoings doux, sans sulfates ni parfums agressifs, adaptés aux cheveux et au cuir chevelu des enfants.",
      },
      {
        question: "Mon enfant a les cheveux très bouclés, est-ce inclus ?",
        answer: "Le brushing enfant s'adapte à tous les types de cheveux. Pour les cheveux très bouclés ou crépus, un démêlant adapté est utilisé pour éviter la casse.",
      },
      {
        question: "Peut-on combiner avec d'autres soins enfant lors de la même visite ?",
        answer: "Absolument ! Vous pouvez combiner le shampoing brushing avec une coupe ou une coiffure. Parlez-en à notre équipe à l'accueil pour organiser le passage.",
      },
    ],
    cta: {
      headline: "Prenez soin des cheveux de votre enfant à Cotonou",
      description: "Réservez une séance de shampoing et brushing enfant à Academy Beauty Gate, Cadjehoun. Un moment doux et professionnel pour toute la famille.",
    },
  },
  
  {
    slug: "chignon-enfant-cotonou",
    title: "Chignon Enfant à Cotonou",
    metaDescription: "Chignon enfant à Cadjehoun, Cotonou. Coiffure élégante et adaptée pour les petites filles au salon Academy Beauty Gate. 2 500 FCFA — 30 min.",
    category: "duo-enfants",
    hero: {
      imageAlt: "Chignon élégant réalisé sur une petite fille au salon Academy Beauty Gate Cotonou",
      eyebrow: "Espace Enfants",
      headline: "Chignon Enfant",
      subheadline: "Une coiffure soignée et élégante pour les grandes occasions ou le quotidien de votre petite fille à Cotonou.",
    },
    badges: [
      { icon: "✦", text: "30 min" },
      { icon: "✦", text: "2 500 FCFA" },
      { icon: "✦", text: "Occasion spéciale" },
    ],
    intro: {
      imageAlt: "Coiffeuse réalisant un chignon sur une enfant à Cadjehoun Cotonou",
      headline: "Le chignon parfait pour votre petite princesse",
      description: "Au salon Academy Beauty Gate à Cadjehoun, nos coiffeuses créent des chignons adaptés aux enfants : discrets pour l'école, élaborés pour les cérémonies. Chaque coiffure est réalisée avec soin pour tenir toute la journée.",
      listItems: [
        "Chignon adapté à tous les types de cheveux d'enfants",
        "Style personnalisé selon l'occasion (école, fête, cérémonie)",
        "Finitions soignées pour une tenue longue durée",
        "Produits coiffants doux et adaptés aux enfants",
        "Réalisation en 30 minutes chrono",
      ],
    },
    benefits: [
      {
        title: "Coiffure sur mesure",
        description: "Nos coiffeuses s'adaptent au type de cheveux et à l'occasion pour créer le chignon idéal.",
      },
      {
        title: "Tenue optimale",
        description: "Grâce à nos techniques et produits fixants doux, le chignon tient toute la journée sans abîmer les cheveux.",
      },
      {
        title: "Enfant mis à l'aise",
        description: "Nos professionnelles savent créer un climat de confiance pour que le passage au salon soit un moment agréable.",
      },
      {
        title: "Prix accessible à Cotonou",
        description: "Un chignon professionnel pour enfant à seulement 2 500 FCFA, idéal pour les occasions spéciales sans se ruiner.",
      },
    ],
    pricing: {
      headline: "Tarif Chignon Enfant",
      note: "Tarif fixe. Pour des coiffures plus élaborées avec accessoires, un supplément peut s'appliquer.",
      items: [
        { label: "Chignon enfant", price: "2 500 FCFA", note: "30 min" },
      ],
    },
    faq: [
      {
        question: "Le chignon enfant convient-il à tous les types de cheveux ?",
        answer: "Oui, nos coiffeuses maîtrisent les chignons sur cheveux lisses, bouclés, crépus et défrisés. Chaque coiffure est adaptée à la texture.",
      },
      {
        question: "Peut-on ajouter des accessoires comme des épingles ou rubans ?",
        answer: "Tout à fait ! Vous pouvez apporter vos accessoires ou en choisir parmi ceux proposés au salon pour personnaliser le chignon.",
      },
      {
        question: "Le chignon tiendra-t-il toute la journée d'école ?",
        answer: "Nos chignons sont réalisés pour tenir au quotidien. Nous utilisons des techniques de fixation adaptées aux activités des enfants.",
      },
      {
        question: "Comment réserver un chignon enfant pour une cérémonie ?",
        answer: "Appelez-nous ou venez directement à Cadjehoun. Pour les cérémonies, nous recommandons de réserver à l'avance pour garantir votre créneau.",
      },
    ],
    cta: {
      headline: "Réservez le chignon parfait pour votre enfant",
      description: "Faites confiance à Academy Beauty Gate à Cotonou pour coiffer votre petite fille avec élégance et douceur.",
    },
  },
  
  {
    slug: "pompom-enfant-cotonou",
    title: "Pompom Enfant à Cotonou",
    metaDescription: "Coiffure pompom enfant à Cadjehoun, Cotonou. Une coiffure tendance et mignonne pour les petites filles au salon Academy Beauty Gate. 1 500 FCFA.",
    category: "duo-enfants",
    hero: {
      imageAlt: "Coiffure pompom sur une petite fille au salon Academy Beauty Gate Cotonou",
      eyebrow: "Espace Enfants",
      headline: "Pompom Enfant",
      subheadline: "Une coiffure adorable et tendance pour votre petite fille, réalisée en 20 minutes à Cadjehoun.",
    },
    badges: [
      { icon: "✦", text: "20 min" },
      { icon: "✦", text: "1 500 FCFA" },
      { icon: "✦", text: "Adorable" },
    ],
    intro: {
      imageAlt: "Petite fille avec une coiffure pompom réalisée à Cotonou",
      headline: "La coiffure pompom, un classique adoré des enfants",
      description: "Le pompom est une coiffure intemporelle pour les petites filles. Chez Academy Beauty Gate à Cadjehoun, nos coiffeuses réalisent cette coiffure mignonne et fonctionnelle, parfaite pour l'école ou les sorties du week-end.",
      listItems: [
        "Coiffure rapide en 20 minutes seulement",
        "Adapté aux cheveux naturels, crépus et bouclés",
        "Très pratique pour les activités du quotidien",
        "Réalisation soignée sans traction excessive",
        "Idéal pour l'école, les sorties et les occasions",
      ],
    },
    benefits: [
      {
        title: "Rapidité d'exécution",
        description: "En seulement 20 minutes, votre enfant repart avec une coiffure nette et soignée, sans attente interminable.",
      },
      {
        title: "Confort pour l'enfant",
        description: "Nos coiffeuses évitent toute traction douloureuse. Le pompom est réalisé avec douceur pour le confort du cuir chevelu.",
      },
      {
        title: "Polyvalent au quotidien",
        description: "Le pompom convient aussi bien pour l'école que pour les sorties. Une coiffure pratique qui tient bien.",
      },
      {
        title: "Très abordable",
        description: "À 1 500 FCFA, c'est la coiffure parfaite pour entretenir les cheveux de votre enfant régulièrement sans contrainte budgétaire.",
      },
    ],
    pricing: {
      headline: "Tarif Pompom Enfant",
      note: "Tarif fixe et accessible.",
      items: [
        { label: "Pompom enfant", price: "1 500 FCFA", note: "20 min" },
      ],
    },
    faq: [
      {
        question: "Le pompom convient-il à tous les types de cheveux d'enfants ?",
        answer: "Oui, le pompom s'adapte parfaitement aux cheveux crépus, bouclés et naturels. C'est d'ailleurs une coiffure traditionnellement réalisée sur ces textures.",
      },
      {
        question: "Mon enfant a des cheveux très courts, peut-on quand même faire un pompom ?",
        answer: "Le pompom nécessite une longueur minimale. Si les cheveux sont très courts, nos coiffeuses vous proposeront une alternative adaptée.",
      },
      {
        question: "Combien de temps dure cette coiffure ?",
        answer: "Un pompom bien réalisé peut tenir 2 à 3 jours. Pour prolonger sa durée de vie, il suffit de le refaire légèrement chaque matin.",
      },
      {
        question: "Peut-on ajouter des barrettes ou élastiques colorés ?",
        answer: "Bien sûr ! Vous pouvez apporter vos accessoires préférés. Nous disposons aussi de quelques accessoires basiques au salon.",
      },
    ],
    cta: {
      headline: "Offrez à votre enfant une coiffure adorable",
      description: "Venez à Academy Beauty Gate à Cadjehoun, Cotonou pour un pompom soigné et rapide à petit prix.",
    },
  },
  
  {
    slug: "nattes-simples-enfant-cotonou",
    title: "Nattes Simples Enfant à Cotonou",
    metaDescription: "Nattes simples pour enfant à Cadjehoun, Cotonou. Une coiffure protectrice et pratique au salon Academy Beauty Gate. À partir de 1 000 FCFA.",
    category: "duo-enfants",
    hero: {
      imageAlt: "Nattes simples réalisées sur une enfant au salon Academy Beauty Gate Cotonou",
      eyebrow: "Espace Enfants",
      headline: "Nattes Simples Enfant",
      subheadline: "Une coiffure protectrice et pratique pour votre enfant, réalisée avec soin à Cotonou.",
    },
    badges: [
      { icon: "✦", text: "30 min" },
      { icon: "✦", text: "1 000 FCFA" },
      { icon: "✦", text: "Coiffure protectrice" },
    ],
    intro: {
      imageAlt: "Coiffeuse tressant les cheveux d'une enfant à Cadjehoun Cotonou",
      headline: "Les nattes simples, coiffure protectrice par excellence",
      description: "Les nattes simples sont une valeur sûre pour les enfants : pratiques, durables et protectrices pour les cheveux naturels. Chez Academy Beauty Gate à Cadjehoun, nos tresseuses réalisent chaque natte avec soin et douceur.",
      listItems: [
        "Coiffure protectrice qui préserve les cheveux naturels",
        "Tressage soigné, sans traction excessive sur le cuir chevelu",
        "Idéal pour l'école et les activités sportives",
        "Tenue de plusieurs jours sans entretien quotidien",
        "Accessible dès 1 000 FCFA à Cotonou",
      ],
    },
    benefits: [
      {
        title: "Protection des cheveux",
        description: "Les nattes protègent les pointes des cheveux et réduisent la casse, idéal pour favoriser la pousse des cheveux d'enfants.",
      },
      {
        title: "Durabilité",
        description: "Des nattes bien réalisées tiennent une semaine ou plus, limitant les retouches et les passages fréquents au salon.",
      },
      {
        title: "Confort total",
        description: "Nos tresseuses veillent à ne pas tirer sur le cuir chevelu des enfants pour éviter tout inconfort ou douleur.",
      },
      {
        title: "Tarif imbattable",
        description: "À 1 000 FCFA seulement, les nattes simples représentent la solution coiffure la plus économique et durable pour votre enfant.",
      },
    ],
    pricing: {
      headline: "Tarif Nattes Simples Enfant",
      note: "Tarif de base. Peut varier selon la longueur et la densité des cheveux.",
      items: [
        { label: "Nattes simples enfant", price: "1 000 FCFA", note: "30 min" },
      ],
    },
    faq: [
      {
        question: "À partir de quel âge peut-on faire des nattes à un enfant ?",
        answer: "Dès 2–3 ans, quand les cheveux ont une longueur suffisante. Nos tresseuses adaptent le nombre et l'épaisseur des nattes à l'âge et au confort de l'enfant.",
      },
      {
        question: "Les nattes simples abîment-elles les cheveux ?",
        answer: "Non, si elles sont réalisées correctement. Nous veillons à ne pas serrer excessivement pour préserver le cuir chevelu et éviter la traction alopecia.",
      },
      {
        question: "Combien de temps durent les nattes simples ?",
        answer: "En moyenne 5 à 7 jours. Avec un bonnet la nuit et un peu d'huile sur les nattes, elles peuvent durer jusqu'à 10 jours.",
      },
      {
        question: "Peut-on faire des nattes avec des motifs ou dessins ?",
        answer: "Les nattes simples sont des tresses basiques. Pour des motifs, nous proposons des services de nattes avec mèches ou knotless qui offrent plus de créativité.",
      },
    ],
    cta: {
      headline: "La coiffure pratique et protectrice pour votre enfant",
      description: "Réservez dès maintenant les nattes simples enfant à Academy Beauty Gate, Cadjehoun, Cotonou.",
    },
  },
  
  {
    slug: "nattes-meches-enfant-cotonou",
    title: "Nattes avec Mèches Enfant à Cotonou",
    metaDescription: "Nattes avec mèches pour enfant à Cadjehoun, Cotonou. Coiffure tendance et durable au salon Academy Beauty Gate. 3 000 FCFA — 1h30.",
    category: "duo-enfants",
    hero: {
      imageAlt: "Nattes avec mèches réalisées sur une petite fille à Cotonou",
      eyebrow: "Espace Enfants",
      headline: "Nattes avec Mèches Enfant",
      subheadline: "Des nattes longues et tendance avec mèches pour votre enfant, réalisées par nos tresseuses expertes à Cotonou.",
    },
    badges: [
      { icon: "✦", text: "1h30" },
      { icon: "✦", text: "3 000 FCFA" },
      { icon: "✦", text: "Longue durée" },
    ],
    intro: {
      imageAlt: "Petite fille avec des nattes colorées avec mèches à Cadjehoun Cotonou",
      headline: "Des nattes avec mèches pour un style affirmé",
      description: "Les nattes avec mèches offrent du volume, de la longueur et du style à la coiffure de votre enfant. Chez Academy Beauty Gate à Cadjehoun, nos spécialistes sélectionnent des mèches adaptées pour un résultat naturel et durable.",
      listItems: [
        "Ajout de mèches pour plus de volume et de longueur",
        "Couleurs variées disponibles selon les souhaits",
        "Technique protectrice qui préserve les cheveux naturels",
        "Tenue de 2 à 4 semaines pour un confort au quotidien",
        "Réalisées avec douceur pour le confort de l'enfant",
      ],
    },
    benefits: [
      {
        title: "Style et personnalité",
        description: "Les mèches permettent de varier les couleurs et les longueurs pour une coiffure unique qui reflète la personnalité de votre enfant.",
      },
      {
        title: "Durabilité supérieure",
        description: "Avec des mèches, les nattes tiennent 2 à 4 semaines, réduisant considérablement les visites au salon.",
      },
      {
        title: "Protection des cheveux naturels",
        description: "Les mèches protègent les cheveux naturels de l'enfant des agressions extérieures tout en favorisant leur pousse.",
      },
      {
        title: "Mèches de qualité",
        description: "Nous utilisons des mèches douces et légères adaptées aux cheveux fins des enfants pour éviter tout inconfort.",
      },
    ],
    pricing: {
      headline: "Tarif Nattes avec Mèches Enfant",
      note: "Le prix inclut les mèches de base. Des mèches premium ou colorées peuvent entraîner un léger supplément.",
      items: [
        { label: "Nattes avec mèches enfant", price: "3 000 FCFA", note: "1h30" },
      ],
    },
    faq: [
      {
        question: "Les mèches utilisées sont-elles adaptées aux enfants ?",
        answer: "Oui, nous utilisons des mèches légères et douces spécifiquement choisies pour être confortables sur les petites têtes et éviter les tiraillements.",
      },
      {
        question: "Peut-on choisir la couleur des mèches ?",
        answer: "Bien sûr ! Nous proposons différentes couleurs. Vous pouvez aussi demander des mèches naturelles qui se fondent parfaitement avec la couleur des cheveux.",
      },
      {
        question: "Combien de temps durent les nattes avec mèches ?",
        answer: "En moyenne 2 à 4 semaines selon l'entretien. Avec un bonnet la nuit et un peu d'huile, elles peuvent durer encore plus longtemps.",
      },
      {
        question: "Comment enlever les mèches sans abîmer les cheveux ?",
        answer: "Le défrisage se fait en douceur en coupant les mèches et en démêlant progressivement. Nous pouvons réaliser le défrisage au salon sur rendez-vous.",
      },
    ],
    cta: {
      headline: "Offrez à votre enfant des nattes tendance à Cotonou",
      description: "Prenez rendez-vous à Academy Beauty Gate, Cadjehoun pour des nattes avec mèches durables et stylées.",
    },
  },
  
  {
    slug: "nattes-perles-enfant-cotonou",
    title: "Nattes avec Perles Enfant à Cotonou",
    metaDescription: "Nattes avec perles pour enfant à Cadjehoun, Cotonou. Coiffure festive et tendance au salon Academy Beauty Gate. 2 500 FCFA — 1h.",
    category: "duo-enfants",
    hero: {
      imageAlt: "Nattes avec perles colorées sur une petite fille au salon Academy Beauty Gate Cotonou",
      eyebrow: "Espace Enfants",
      headline: "Nattes avec Perles Enfant",
      subheadline: "Une coiffure festive et colorée avec des perles pour votre petite fille, réalisée en 1h à Cotonou.",
    },
    badges: [
      { icon: "✦", text: "1h" },
      { icon: "✦", text: "2 500 FCFA" },
      { icon: "✦", text: "Festif & coloré" },
    ],
    intro: {
      imageAlt: "Enfant souriante avec des nattes ornées de perles colorées à Cotonou",
      headline: "Les perles, l'accessoire qui fait toute la différence",
      description: "Les nattes avec perles sont une coiffure tendance que les enfants adorent. Chez Academy Beauty Gate à Cadjehoun, nos coiffeuses créent des coiffures enjouées avec des perles colorées ou naturelles pour les grandes occasions comme le quotidien.",
      listItems: [
        "Perles colorées ou naturelles selon les préférences",
        "Coiffure idéale pour les fêtes, anniversaires et cérémonies",
        "Nattes protectrices qui préservent les cheveux naturels",
        "Perles soigneusement fixées pour éviter qu'elles tombent",
        "Réalisation complète en 1 heure seulement",
      ],
    },
    benefits: [
      {
        title: "Une touche festive unique",
        description: "Les perles transforment une simple coiffure en un vrai accessoire de mode pour votre enfant.",
      },
      {
        title: "Large choix de perles",
        description: "Perles colorées, transparentes, dorées ou naturelles — nous avons de quoi personnaliser la coiffure selon les goûts de votre enfant.",
      },
      {
        title: "Fixation sécurisée",
        description: "Les perles sont fixées solidement pour ne pas tomber pendant les activités, tout en restant faciles à retirer.",
      },
      {
        title: "Tarif festif accessible",
        description: "À 2 500 FCFA, offrez à votre enfant une coiffure digne d'une princesse pour les occasions spéciales à Cotonou.",
      },
    ],
    pricing: {
      headline: "Tarif Nattes avec Perles Enfant",
      note: "Tarif de base incluant les perles standards. Des perles premium peuvent occasionner un supplément.",
      items: [
        { label: "Nattes avec perles enfant", price: "2 500 FCFA", note: "1h" },
      ],
    },
    faq: [
      {
        question: "Les perles risquent-elles de tomber ?",
        answer: "Non, nos coiffeuses fixent les perles avec soin à l'aide de techniques adaptées. Elles tiennent bien même lors des activités.",
      },
      {
        question: "Peut-on choisir les couleurs des perles ?",
        answer: "Absolument ! Votre enfant peut choisir parmi nos couleurs disponibles. N'hésitez pas à apporter aussi vos propres perles si vous avez un modèle spécifique en tête.",
      },
      {
        question: "Est-ce que les perles abîment les cheveux ?",
        answer: "Non, si elles sont correctement fixées. Nous utilisons des attaches souples et ne serrons jamais trop pour préserver le cuir chevelu.",
      },
      {
        question: "Cette coiffure convient-elle à une cérémonie ou baptême ?",
        answer: "Parfaitement ! Les nattes avec perles sont très appréciées pour les cérémonies, baptêmes, anniversaires et autres occasions festives à Cotonou.",
      },
    ],
    cta: {
      headline: "Une coiffure festive pour votre petite princesse",
      description: "Réservez les nattes avec perles à Academy Beauty Gate à Cadjehoun, Cotonou. Un moment magique pour votre enfant.",
    },
  },
  
  {
    slug: "twist-sans-meches-enfant-cotonou",
    title: "Twist sans Mèches Enfant à Cotonou",
    metaDescription: "Twist sans mèches pour enfant à Cadjehoun, Cotonou. Coiffure protectrice et naturelle au salon Academy Beauty Gate. 2 000 FCFA — 1h.",
    category: "duo-enfants",
    hero: {
      imageAlt: "Twist sans mèches réalisés sur un enfant au salon Academy Beauty Gate Cotonou",
      eyebrow: "Espace Enfants",
      headline: "Twist sans Mèches Enfant",
      subheadline: "Une coiffure naturelle et protectrice pour les cheveux de votre enfant, réalisée à Cadjehoun.",
    },
    badges: [
      { icon: "✦", text: "1h" },
      { icon: "✦", text: "2 000 FCFA" },
      { icon: "✦", text: "100% naturel" },
    ],
    intro: {
      imageAlt: "Enfant avec des twists naturels réalisés à Cotonou",
      headline: "Le twist, la coiffure protectrice naturelle",
      description: "Les twists sans mèches utilisent uniquement les cheveux naturels de l'enfant pour créer une coiffure protectrice, légère et tendance. Idéal pour préserver les cheveux bouclés et crépus des enfants à Cotonou.",
      listItems: [
        "Réalisés uniquement avec les cheveux naturels de l'enfant",
        "Coiffure protectrice qui favorise la pousse des cheveux",
        "Légère et confortable pour les activités quotidiennes",
        "Aucun produit chimique, 100% naturel",
        "Idéal pour les cheveux bouclés, coilés et crépus",
      ],
    },
    benefits: [
      {
        title: "Respect du cheveu naturel",
        description: "Le twist sans mèches respecte la texture naturelle des cheveux de l'enfant et favorise une belle pousse.",
      },
      {
        title: "Légèreté maximale",
        description: "Sans mèches, la coiffure est très légère sur la tête de l'enfant, idéale pour les enfants sensibles aux tiraillements.",
      },
      {
        title: "Entretien simplifié",
        description: "Un twist bien réalisé nécessite peu d'entretien quotidien. Un peu d'eau et d'huile suffisent pour le maintenir.",
      },
      {
        title: "Solution économique",
        description: "À 2 000 FCFA, le twist sans mèches est une option économique qui protège les cheveux tout en restant stylé.",
      },
    ],
    pricing: {
      headline: "Tarif Twist sans Mèches Enfant",
      note: "Tarif fixe. Peut varier légèrement selon la densité et la longueur des cheveux.",
      items: [
        { label: "Twist sans mèches enfant", price: "2 000 FCFA", note: "1h" },
      ],
    },
    faq: [
      {
        question: "Le twist sans mèches convient-il à tous les types de cheveux ?",
        answer: "Il convient particulièrement aux cheveux bouclés, coilés et crépus. Pour les cheveux lisses, il peut être difficile à maintenir.",
      },
      {
        question: "Combien de temps tient un twist sans mèches ?",
        answer: "En moyenne 1 à 2 semaines selon l'entretien. Des nuits avec un bonnet en satin prolongent la durée de tenue.",
      },
      {
        question: "Les twists peuvent-ils être défaits facilement ?",
        answer: "Oui, les twists se défont facilement et sans douleur. C'est l'un des avantages de cette coiffure par rapport aux nattes.",
      },
      {
        question: "Faut-il venir avec les cheveux lavés ?",
        answer: "De préférence oui, ou nous pouvons commencer par un shampoing au salon (en supplément). Des cheveux propres facilitent la réalisation et améliorent la tenue.",
      },
    ],
    cta: {
      headline: "Protégez les cheveux naturels de votre enfant",
      description: "Prenez rendez-vous à Academy Beauty Gate, Cadjehoun, Cotonou pour des twists naturels soignés.",
    },
  },
  
  {
    slug: "twist-avec-meches-enfant-cotonou",
    title: "Twist avec Mèches Enfant à Cotonou",
    metaDescription: "Twist avec mèches pour enfant à Cadjehoun, Cotonou. Coiffure tendance et volumineuse au salon Academy Beauty Gate. 3 000 FCFA — 1h30.",
    category: "duo-enfants",
    hero: {
      imageAlt: "Twist avec mèches réalisés sur une enfant au salon Academy Beauty Gate Cotonou",
      eyebrow: "Espace Enfants",
      headline: "Twist avec Mèches Enfant",
      subheadline: "Des twists volumineux et tendance avec mèches pour votre enfant à Cotonou, pour un style affirmé.",
    },
    badges: [
      { icon: "✦", text: "1h30" },
      { icon: "✦", text: "3 000 FCFA" },
      { icon: "✦", text: "Volume & style" },
    ],
    intro: {
      imageAlt: "Petite fille avec des twists volumineux avec mèches à Cotonou",
      headline: "Plus de volume et de longueur avec les mèches",
      description: "Les twists avec mèches offrent du volume, de la longueur et un style plus affirmé. Chez Academy Beauty Gate à Cadjehoun, nos expertes ajoutent des mèches de qualité pour sublimer la coiffure de votre enfant.",
      listItems: [
        "Mèches légères pour plus de volume et de longueur",
        "Style tendance apprécié des enfants et adolescents",
        "Coiffure protectrice longue durée",
        "Choix de couleurs et longueurs de mèches",
        "Réalisation professionnelle en 1h30",
      ],
    },
    benefits: [
      {
        title: "Volume impressionnant",
        description: "Les mèches donnent du volume et de la présence à la coiffure, créant un résultat spectaculaire.",
      },
      {
        title: "Longue durée",
        description: "Avec des mèches, les twists tiennent 3 à 5 semaines selon l'entretien, offrant un excellent rapport qualité-durée.",
      },
      {
        title: "Variété infinie",
        description: "Différentes longueurs et couleurs de mèches permettent de créer une coiffure unique à chaque fois.",
      },
      {
        title: "Protection optimale",
        description: "Les mèches protègent les cheveux naturels des agressions extérieures tout en permettant une bonne hydratation.",
      },
    ],
    pricing: {
      headline: "Tarif Twist avec Mèches Enfant",
      note: "Prix incluant les mèches standards. Des mèches premium ou colorées peuvent entraîner un supplément.",
      items: [
        { label: "Twist avec mèches enfant", price: "3 000 FCFA", note: "1h30" },
      ],
    },
    faq: [
      {
        question: "Les mèches utilisées sont-elles adaptées aux enfants ?",
        answer: "Oui, nous choisissons des mèches légères et douces spécifiquement adaptées aux cheveux et au confort des enfants.",
      },
      {
        question: "Combien de temps tiennent les twists avec mèches ?",
        answer: "Entre 3 et 5 semaines selon l'entretien. Avec un bonnet la nuit et une huile légère, ils peuvent tenir encore plus longtemps.",
      },
      {
        question: "Peut-on faire des twists avec mèches sur des cheveux courts ?",
        answer: "Une longueur minimale d'environ 5 cm est nécessaire pour bien accrocher les mèches. Nos coiffeuses évalueront la longueur à la prise de rendez-vous.",
      },
      {
        question: "Comment enlever les mèches sans abîmer les cheveux ?",
        answer: "Le défrisage se fait progressivement avec de l'huile et un démêlant. Nous proposons aussi cette prestation au salon sur rendez-vous.",
      },
    ],
    cta: {
      headline: "Des twists tendance pour votre enfant à Cotonou",
      description: "Réservez à Academy Beauty Gate à Cadjehoun pour des twists avec mèches soignés et durables.",
    },
  },
  
  {
    slug: "knotless-enfant-cotonou",
    title: "Knotless Enfant à Cotonou",
    metaDescription: "Knotless pour enfant à Cadjehoun, Cotonou. La coiffure la plus confortable et tendance au salon Academy Beauty Gate. 5 000 FCFA — 2 à 3h.",
    category: "duo-enfants",
    hero: {
      imageAlt: "Knotless réalisés sur une enfant au salon Academy Beauty Gate Cotonou",
      eyebrow: "Espace Enfants",
      headline: "Knotless Enfant",
      subheadline: "La coiffure sans nœud la plus confortable pour les enfants, réalisée par nos tresseuses expertes à Cotonou.",
    },
    badges: [
      { icon: "✦", text: "2–3h" },
      { icon: "✦", text: "5 000 FCFA" },
      { icon: "✦", text: "Ultra confort" },
    ],
    intro: {
      imageAlt: "Petite fille avec des knotless parfaits réalisés à Cadjehoun Cotonou",
      headline: "Le knotless : confort et style réunis",
      description: "Le knotless (nattes sans nœud) est la technique de tressage la plus respectueuse du cuir chevelu. Chez Academy Beauty Gate à Cadjehoun, nos tresseuses maîtrisent parfaitement cette technique pour offrir à votre enfant la coiffure la plus confortable qui soit.",
      listItems: [
        "Technique sans nœud à la racine pour zéro tension",
        "Idéal pour les enfants sensibles aux tiraillements",
        "Aspect naturel et léger grâce à l'ajout progressif de mèches",
        "Coiffure protectrice longue durée (4 à 8 semaines)",
        "Résultat professionnel par des tresseuses expérimentées",
      ],
    },
    benefits: [
      {
        title: "Zéro tension sur le cuir chevelu",
        description: "La technique knotless commence sans nœud à la racine, éliminant toute tension et douleur sur le cuir chevelu de l'enfant.",
      },
      {
        title: "Aspect ultra naturel",
        description: "L'ajout progressif de mèches crée une coiffure qui ressemble à des cheveux naturels sortant directement du cuir chevelu.",
      },
      {
        title: "Durabilité exceptionnelle",
        description: "Un knotless bien réalisé peut tenir 4 à 8 semaines, ce qui en fait la coiffure la plus durable du salon.",
      },
      {
        title: "Protection maximale",
        description: "Cette technique protège au maximum les cheveux naturels de l'enfant tout en favorisant la pousse.",
      },
    ],
    pricing: {
      headline: "Tarif Knotless Enfant",
      note: "Le prix peut varier selon la longueur des mèches et la densité du tressage. Comptez 2 à 3 heures pour la réalisation.",
      items: [
        { label: "Knotless enfant", price: "5 000 FCFA", note: "2–3h" },
      ],
    },
    faq: [
      {
        question: "Quelle est la différence entre knotless et nattes classiques ?",
        answer: "Le knotless commence sans nœud à la racine, ce qui réduit considérablement la tension sur le cuir chevelu. Les nattes classiques démarrent avec un nœud qui peut créer des tiraillements.",
      },
      {
        question: "Le knotless est-il adapté aux jeunes enfants ?",
        answer: "Oui, c'est même la technique recommandée pour les enfants car elle est la moins traumatisante pour leur cuir chevelu sensible.",
      },
      {
        question: "Combien de temps dure un knotless enfant ?",
        answer: "Entre 4 et 8 semaines selon l'entretien et la texture des cheveux. C'est la coiffure la plus durable que nous proposons.",
      },
      {
        question: "Pourquoi le knotless est plus cher que les nattes classiques ?",
        answer: "La technique knotless est plus longue à réaliser (2 à 3 heures) et demande plus de mèches. Ce temps supplémentaire justifie la différence de prix.",
      },
    ],
    cta: {
      headline: "La coiffure la plus confortable pour votre enfant",
      description: "Offrez à votre enfant des knotless réalisés par les expertes d'Academy Beauty Gate à Cadjehoun, Cotonou.",
    },
  },
  
  {
    slug: "coupe-enfant-cotonou",
    title: "Coupe Fille et Garçon Enfant à Cotonou",
    metaDescription: "Coupe de cheveux enfant fille et garçon à Cadjehoun, Cotonou. Une coupe propre et adaptée au salon Academy Beauty Gate. 1 000 FCFA — 20 min.",
    category: "duo-enfants",
    hero: {
      imageAlt: "Coupe de cheveux enfant réalisée au salon Academy Beauty Gate Cotonou",
      eyebrow: "Espace Enfants",
      headline: "Coupe Fille / Garçon Enfant",
      subheadline: "Une coupe propre et adaptée pour votre enfant, fille ou garçon, réalisée en 20 minutes à Cotonou.",
    },
    badges: [
      { icon: "✦", text: "20 min" },
      { icon: "✦", text: "1 000 FCFA" },
      { icon: "✦", text: "Fille & Garçon" },
    ],
    intro: {
      imageAlt: "Coiffeuse réalisant une coupe sur un enfant à Cadjehoun Cotonou",
      headline: "Une coupe nette pour chaque enfant",
      description: "Que ce soit pour une remise en forme ou une vraie coupe, notre équipe à Academy Beauty Gate à Cadjehoun s'occupe de vos enfants avec professionnalisme et bienveillance. Coupes adaptées à tous les styles et types de cheveux.",
      listItems: [
        "Coupe adaptée garçon et fille selon le style souhaité",
        "Matériel désinfecté entre chaque client",
        "Coiffeuses patient·e·s et habituées aux enfants",
        "Finitions soignées aux ciseaux ou à la tondeuse",
        "Résultat rapide en seulement 20 minutes",
      ],
    },
    benefits: [
      {
        title: "Service adapté aux enfants",
        description: "Nos coiffeuses savent mettre les enfants à l'aise et travailler rapidement pour leur confort.",
      },
      {
        title: "Hygiène irréprochable",
        description: "Tout le matériel est désinfecté entre chaque passage pour la sécurité de votre enfant.",
      },
      {
        title: "Style personnalisé",
        description: "Courte, dégradée, effilée — nous adaptons la coupe au style de vie et aux préférences de votre enfant.",
      },
      {
        title: "Tarif mini",
        description: "À seulement 1 000 FCFA, offrez régulièrement à votre enfant une coupe propre et professionnelle à Cotonou.",
      },
    ],
    pricing: {
      headline: "Tarif Coupe Enfant",
      note: "Tarif fixe. Coupe simple aux ciseaux ou à la tondeuse.",
      items: [
        { label: "Coupe fille / garçon enfant", price: "1 000 FCFA", note: "20 min" },
      ],
    },
    faq: [
      {
        question: "À partir de quel âge acceptez-vous les enfants pour une coupe ?",
        answer: "Dès 12–18 mois, quand l'enfant peut tenir la tête. Nos coiffeuses ont l'habitude des tout-petits et savent travailler rapidement.",
      },
      {
        question: "Faites-vous des coupes avec design ou motifs pour garçons ?",
        answer: "Les coupes basiques sont à 1 000 FCFA. Les coupes avec design ou motifs relèvent du service barber et sont tarifées séparément.",
      },
      {
        question: "Mon enfant bouge beaucoup, est-ce un problème ?",
        answer: "Nos coiffeuses sont habituées ! Elles travaillent vite et avec douceur. Un jouet ou un dessin animé sur téléphone peut aussi aider à maintenir l'attention.",
      },
      {
        question: "Dois-je prendre rendez-vous ou puis-je venir spontanément ?",
        answer: "Pour les coupes enfants, vous pouvez venir directement au salon à Cadjehoun. En période chargée (week-end), un rendez-vous est conseillé.",
      },
    ],
    cta: {
      headline: "Une coupe nette pour votre enfant à Cotonou",
      description: "Venez à Academy Beauty Gate à Cadjehoun pour une coupe enfant professionnelle, rapide et abordable.",
    },
  },
  
  {
    slug: "manucure-enfant-cotonou",
    title: "Manucure Enfant à Cotonou — Petits Doigts de Fée",
    metaDescription: "Manucure enfant à Cadjehoun, Cotonou. Soin des mains et vernis doux pour les petites filles au salon Academy Beauty Gate. 2 000 FCFA — 20 min.",
    category: "duo-enfants",
    hero: {
      imageAlt: "Manucure enfant avec vernis coloré au salon Academy Beauty Gate Cotonou",
      eyebrow: "Espace Enfants",
      headline: "Petits Doigts de Fée — Manucure Enfant",
      subheadline: "Une manucure douce et colorée pour les petites mains de votre enfant, à Cadjehoun, Cotonou.",
    },
    badges: [
      { icon: "✦", text: "20 min" },
      { icon: "✦", text: "2 000 FCFA" },
      { icon: "✦", text: "Vernis doux" },
    ],
    intro: {
      imageAlt: "Petite fille qui se fait faire les ongles au salon Academy Beauty Gate Cotonou",
      headline: "De jolies petites mains dignes d'une princesse",
      description: "La manucure enfant chez Academy Beauty Gate à Cadjehoun est un moment magique pour votre petite fille. Lime, soin des cuticules et vernis coloré ou nacré — tout est pensé pour la sécurité et le plaisir des enfants.",
      listItems: [
        "Lime et mise en forme des ongles douce et sécurisée",
        "Soin léger des cuticules adapté aux enfants",
        "Vernis à formule douce, sans produits toxiques",
        "Large choix de couleurs amusantes et tendance",
        "Prestation en 20 minutes pour ne pas lasser les petits",
      ],
    },
    benefits: [
      {
        title: "Produits sans danger",
        description: "Nous utilisons des vernis à formule douce, sans formaldéhyde ni toluène, adaptés aux enfants.",
      },
      {
        title: "Moment de plaisir",
        description: "La manucure enfant est un moment de complicité et de plaisir que les petites filles adorent partager avec leur maman.",
      },
      {
        title: "Gestes doux et sécurisés",
        description: "Nos esthéticiennes travaillent avec la plus grande douceur pour éviter tout risque de coupure ou d'irritation.",
      },
      {
        title: "Tarif mini, plaisir maxi",
        description: "À 2 000 FCFA, offrez à votre enfant un vrai moment de salon professionnel pour un souvenir inoubliable.",
      },
    ],
    pricing: {
      headline: "Tarif Manucure Enfant",
      note: "Inclut lime, soin cuticules et vernis simple. Nail art en supplément.",
      items: [
        { label: "Petits doigts de fée (manucure enfant)", price: "2 000 FCFA", note: "20 min" },
      ],
    },
    faq: [
      {
        question: "À partir de quel âge peut-on faire une manucure à un enfant ?",
        answer: "Dès 4–5 ans, quand les ongles ont une taille suffisante et que l'enfant peut coopérer. Nous adaptons la prestation selon l'âge.",
      },
      {
        question: "Les vernis utilisés sont-ils sans danger pour les enfants ?",
        answer: "Oui, nous sélectionnons des vernis à formule douce, sans les 5 substances les plus nocives, adaptés aux enfants.",
      },
      {
        question: "Peut-on ajouter du nail art sur la manucure enfant ?",
        answer: "Oui ! Nous proposons l'atelier nail art enfant séparément à 3 000 FCFA pour 30 min, avec motifs et décorations sympas.",
      },
      {
        question: "Le vernis tiendra-t-il longtemps ?",
        answer: "En général 3 à 5 jours selon les activités. Les enfants ayant les mains très actives, le vernis peut s'abîmer plus vite que sur les adultes.",
      },
    ],
    cta: {
      headline: "Offrez à votre enfant des petits doigts de fée",
      description: "Prenez rendez-vous à Academy Beauty Gate, Cadjehoun, Cotonou pour une manucure enfant douce et colorée.",
    },
  },
  
  {
    slug: "pedicure-enfant-cotonou",
    title: "Pédicure Enfant à Cotonou",
    metaDescription: "Pédicure pour enfant à Cadjehoun, Cotonou. Soin des pieds et vernis doux pour les enfants au salon Academy Beauty Gate. 2 000 FCFA — 20 min.",
    category: "duo-enfants",
    hero: {
      imageAlt: "Pédicure enfant avec vernis coloré au salon Academy Beauty Gate Cotonou",
      eyebrow: "Espace Enfants",
      headline: "Pédicure Enfant",
      subheadline: "Des petits pieds soignés et colorés pour votre enfant, en 20 minutes à Cotonou.",
    },
    badges: [
      { icon: "✦", text: "20 min" },
      { icon: "✦", text: "2 000 FCFA" },
      { icon: "✦", text: "Pieds doux" },
    ],
    intro: {
      imageAlt: "Petite fille qui se fait faire une pédicure au salon Academy Beauty Gate à Cadjehoun",
      headline: "Des petits pieds bien soignés",
      description: "La pédicure enfant chez Academy Beauty Gate à Cadjehoun prend soin des petits pieds avec douceur. Lime des ongles, soin léger et vernis coloré pour des orteils impeccables et de jolis souvenirs.",
      listItems: [
        "Lime et mise en forme des ongles des pieds",
        "Soin léger adapté aux enfants",
        "Vernis à formule douce sans produits nocifs",
        "Choix parmi de nombreuses couleurs tendance",
        "Réalisation rapide en seulement 20 minutes",
      ],
    },
    benefits: [
      {
        title: "Soins doux et sécurisés",
        description: "Nos esthéticiennes utilisent des gestes doux et du matériel adapté pour un soin pédicure sans risque pour les enfants.",
      },
      {
        title: "Produits sans danger",
        description: "Vernis et soins à formule douce, adaptés aux peaux et ongles délicats des enfants.",
      },
      {
        title: "Moment complice",
        description: "La pédicure enfant est souvent réalisée en duo avec maman — un moment de complicité et de partage unique.",
      },
      {
        title: "Accessible et rapide",
        description: "À 2 000 FCFA en 20 minutes, c'est le petit plaisir beauté parfait pour votre enfant à Cotonou.",
      },
    ],
    pricing: {
      headline: "Tarif Pédicure Enfant",
      note: "Inclut lime, soin léger et vernis simple.",
      items: [
        { label: "Pédicure enfant", price: "2 000 FCFA", note: "20 min" },
      ],
    },
    faq: [
      {
        question: "La pédicure enfant inclut-elle un bain de pieds ?",
        answer: "Pour les enfants, nous réalisons une version adaptée sans bain prolongé — un nettoyage soigné suivi de la mise en forme et du vernis.",
      },
      {
        question: "Peut-on combiner manucure et pédicure enfant ?",
        answer: "Oui ! Vous pouvez cumuler les deux prestations pour 4 000 FCFA. Un forfait idéal pour une petite princesse.",
      },
      {
        question: "Les vernis utilisés sont-ils sans danger ?",
        answer: "Absolument. Nous utilisons des vernis à formule douce, sans substances nocives, spécifiquement compatibles avec les enfants.",
      },
      {
        question: "À partir de quel âge puis-je amener mon enfant pour une pédicure ?",
        answer: "Dès 4 ans, quand l'enfant peut coopérer pendant 20 minutes. Nos esthéticiennes savent mettre les petits à l'aise.",
      },
    ],
    cta: {
      headline: "Des petits pieds colorés pour votre enfant à Cotonou",
      description: "Venez à Academy Beauty Gate à Cadjehoun pour une pédicure enfant douce et ludique.",
    },
  },
  
  {
    slug: "vernis-simple-enfant-cotonou",
    title: "Vernis Simple Mains ou Pieds Enfant à Cotonou",
    metaDescription: "Vernis simple mains ou pieds pour enfant à Cadjehoun, Cotonou. Application rapide et colorée au salon Academy Beauty Gate. 1 500 FCFA — 15 min.",
    category: "duo-enfants",
    hero: {
      imageAlt: "Application de vernis coloré sur les ongles d'un enfant au salon Academy Beauty Gate Cotonou",
      eyebrow: "Espace Enfants",
      headline: "Vernis Simple Mains ou Pieds Enfant",
      subheadline: "Une touche de couleur sur les ongles de votre enfant en 15 minutes à Cadjehoun, Cotonou.",
    },
    badges: [
      { icon: "✦", text: "15 min" },
      { icon: "✦", text: "1 500 FCFA" },
      { icon: "✦", text: "Mains ou pieds" },
    ],
    intro: {
      imageAlt: "Enfant avec du vernis coloré sur les ongles à Cotonou",
      headline: "Une couleur festive en un instant",
      description: "Un simple vernis peut faire toute la différence ! Chez Academy Beauty Gate à Cadjehoun, nous appliquons un vernis coloré ou nacré sur les petits ongles de votre enfant, pour un résultat joyeux et soigné en un minimum de temps.",
      listItems: [
        "Application sur mains ou pieds au choix",
        "Large palette de couleurs adaptées aux enfants",
        "Vernis à formule douce sans produits nocifs",
        "Application soignée pour un résultat net",
        "Service ultra rapide en 15 minutes seulement",
      ],
    },
    benefits: [
      {
        title: "Rapidité idéale pour les enfants",
        description: "En 15 minutes, votre enfant repart avec de beaux ongles colorés sans avoir eu le temps de s'impatienter.",
      },
      {
        title: "Formule sans danger",
        description: "Nos vernis sont sélectionnés pour leur formule douce, sans substances allergisantes, adaptée aux enfants.",
      },
      {
        title: "Grande variété de couleurs",
        description: "Votre enfant peut choisir sa couleur préférée parmi notre large palette : rose, rouge, violet, pailleté et bien plus.",
      },
      {
        title: "Tarif mini",
        description: "À 1 500 FCFA, c'est le plaisir beauté le plus accessible du salon pour les enfants à Cotonou.",
      },
    ],
    pricing: {
      headline: "Tarif Vernis Simple Enfant",
      note: "Tarif par zone (mains OU pieds). Pour les deux zones, comptez 3 000 FCFA.",
      items: [
        { label: "Vernis simple mains ou pieds enfant", price: "1 500 FCFA", note: "15 min — par zone" },
      ],
    },
    faq: [
      {
        question: "Le vernis inclut-il une préparation des ongles ?",
        answer: "Le vernis simple est une application directe. Pour une préparation complète (lime, cuticules, vernis), optez pour la manucure ou pédicure enfant.",
      },
      {
        question: "Quelles couleurs sont disponibles ?",
        answer: "Nous proposons une large palette : tons pastels, vifs, pailletés et nacrés. Votre enfant choisit sa couleur préférée à son arrivée.",
      },
      {
        question: "Combien de temps tient le vernis sur les ongles d'enfant ?",
        answer: "En général 3 à 5 jours. Les enfants très actifs verront le vernis s'user plus rapidement sur les mains que sur les pieds.",
      },
      {
        question: "Peut-on faire les mains ET les pieds en même temps ?",
        answer: "Oui, compter 3 000 FCFA et environ 25–30 minutes pour les deux zones.",
      },
    ],
    cta: {
      headline: "Une touche de couleur pour égayer les ongles de votre enfant",
      description: "Venez à Academy Beauty Gate à Cadjehoun, Cotonou pour un vernis enfant rapide et joyeux.",
    },
  },
  
  {
    slug: "massage-enfant-cotonou",
    title: "Massage Enfant à Cotonou",
    metaDescription: "Massage relaxant pour enfant à Cadjehoun, Cotonou. Un soin doux et bienveillant au salon Academy Beauty Gate. 6 000 FCFA — 30 min.",
    category: "duo-enfants",
    hero: {
      imageAlt: "Massage doux sur un enfant au salon Academy Beauty Gate Cotonou",
      eyebrow: "Espace Enfants",
      headline: "Massage Enfant",
      subheadline: "Un massage doux et relaxant adapté aux enfants, pour un moment de bien-être à Cotonou.",
    },
    badges: [
      { icon: "✦", text: "30 min" },
      { icon: "✦", text: "6 000 FCFA" },
      { icon: "✦", text: "Bien-être enfant" },
    ],
    intro: {
      imageAlt: "Masseuse réalisant un massage doux sur un enfant à Cadjehoun Cotonou",
      headline: "Le bien-être, ça commence dès l'enfance",
      description: "Le massage enfant chez Academy Beauty Gate à Cadjehoun est une parenthèse de douceur adaptée aux plus jeunes. Des manœuvres douces et bienveillantes pour détendre les muscles, calmer l'anxiété et favoriser un sommeil de qualité.",
      listItems: [
        "Manœuvres douces adaptées à la morphologie des enfants",
        "Huiles végétales douces sans parfums allergisants",
        "Bénéfique pour la détente, le sommeil et la concentration",
        "Atmosphère calme et rassurante pour les enfants",
        "Réalisé par des praticiens expérimentés et bienveillants",
      ],
    },
    benefits: [
      {
        title: "Détente profonde",
        description: "Le massage aide les enfants à relâcher les tensions accumulées et favorise un état de calme et de sérénité.",
      },
      {
        title: "Meilleur sommeil",
        description: "Régulièrement, le massage améliore la qualité du sommeil des enfants, particulièrement ceux souffrant d'hyperactivité.",
      },
      {
        title: "Connexion émotionnelle",
        description: "Un massage est aussi un moment de connexion et de confiance entre l'enfant et le praticien ou le parent.",
      },
      {
        title: "Adapté à chaque enfant",
        description: "Nos praticiens adaptent la pression et les manœuvres à l'âge, la taille et la sensibilité de chaque enfant.",
      },
    ],
    pricing: {
      headline: "Tarif Massage Enfant",
      note: "Séance de 30 minutes. Un parent peut être présent pendant le massage si l'enfant le souhaite.",
      items: [
        { label: "Massage enfant", price: "6 000 FCFA", note: "30 min" },
      ],
    },
    faq: [
      {
        question: "À partir de quel âge peut-on faire un massage à un enfant ?",
        answer: "Dès 3 ans pour les massages relaxants classiques. Pour les tout-petits, nous recommandons le massage parent-bébé.",
      },
      {
        question: "Un parent peut-il rester présent pendant le massage ?",
        answer: "Absolument, et nous l'encourageons ! La présence d'un parent rassure l'enfant et améliore la qualité de la séance.",
      },
      {
        question: "Quelles huiles sont utilisées pour le massage enfant ?",
        answer: "Nous utilisons des huiles végétales douces (jojoba, amande douce) sans parfums ni huiles essentielles irritantes, adaptées aux peaux sensibles.",
      },
      {
        question: "Y a-t-il des contre-indications pour le massage enfant ?",
        answer: "En cas de fièvre, infection cutanée ou fracture récente, le massage est contre-indiqué. En cas de doute, consultez votre pédiatre.",
      },
    ],
    cta: {
      headline: "Offrez le bien-être à votre enfant à Cotonou",
      description: "Réservez une séance de massage enfant à Academy Beauty Gate, Cadjehoun. Un moment de pure douceur.",
    },
  },
  
  {
    slug: "soin-visage-enfant-cotonou",
    title: "Soin Visage Enfant à Cotonou — Masque Miel ou Chocolat",
    metaDescription: "Soin visage enfant au masque miel ou chocolat à Cadjehoun, Cotonou. Un soin naturel et gourmand au salon Academy Beauty Gate. 4 000 FCFA — 30 min.",
    category: "duo-enfants",
    hero: {
      imageAlt: "Soin visage enfant avec masque miel au salon Academy Beauty Gate Cotonou",
      eyebrow: "Espace Enfants",
      headline: "Soin Visage Enfant — Masque Miel ou Chocolat",
      subheadline: "Un soin visage naturel et gourmand pour le bonheur de votre enfant à Cadjehoun, Cotonou.",
    },
    badges: [
      { icon: "✦", text: "30 min" },
      { icon: "✦", text: "4 000 FCFA" },
      { icon: "✦", text: "Miel ou chocolat" },
    ],
    intro: {
      imageAlt: "Esthéticienne appliquant un masque visage naturel sur un enfant à Cotonou",
      headline: "Un soin visage ludique et bienfaisant pour les enfants",
      description: "Le soin visage enfant chez Academy Beauty Gate à Cadjehoun est un moment magique alliant soins beauté et plaisir. Avec des ingrédients naturels comme le miel ou le chocolat, la peau de votre enfant est douce et rayonnante.",
      listItems: [
        "Nettoyage doux adapté à la peau sensible des enfants",
        "Masque au miel (nourrissant) ou chocolat (antioxydant) au choix",
        "Ingrédients 100% naturels et doux pour la peau",
        "Moment ludique et odorant que les enfants adorent",
        "Durée idéale de 30 minutes sans s'ennuyer",
      ],
    },
    benefits: [
      {
        title: "Ingrédients naturels",
        description: "Le miel et le chocolat sont des ingrédients naturels aux propriétés nourrissantes et antioxydantes, sans risque pour la peau des enfants.",
      },
      {
        title: "Peau douce et lumineuse",
        description: "Après le soin, la peau de l'enfant est visiblement plus douce, nettoyée et lumineuse.",
      },
      {
        title: "Expérience sensorielle unique",
        description: "Les odeurs gourmandes du miel et du chocolat rendent ce soin particulièrement apprécié et mémorable pour les enfants.",
      },
      {
        title: "Introduction aux soins beauté",
        description: "Ce soin ludique initie les enfants aux rituels beauté dans un cadre bienveillant et professionnel.",
      },
    ],
    pricing: {
      headline: "Tarif Soin Visage Enfant",
      note: "Choix entre le masque miel ou le masque chocolat. Même tarif pour les deux options.",
      items: [
        { label: "Soin visage enfant — masque miel", price: "4 000 FCFA", note: "30 min" },
        { label: "Soin visage enfant — masque chocolat", price: "4 000 FCFA", note: "30 min" },
      ],
    },
    faq: [
      {
        question: "Quelle est la différence entre le masque miel et le masque chocolat ?",
        answer: "Le masque au miel est plus nourrissant et adapté aux peaux sèches. Le masque chocolat est riche en antioxydants, idéal pour toutes les peaux. Les deux sont délicieusement odorants !",
      },
      {
        question: "Le soin est-il adapté aux peaux sensibles ou à tendance allergique ?",
        answer: "En cas d'allergie connue au miel ou au cacao, prévenez-nous à la réservation. Nous pourrons adapter ou vous déconseiller selon le cas.",
      },
      {
        question: "À partir de quel âge peut-on faire ce soin ?",
        answer: "Dès 4–5 ans. Les enfants plus jeunes peuvent avoir du mal à rester allongés le temps du masque.",
      },
      {
        question: "Ce soin peut-il être combiné avec d'autres prestations ?",
        answer: "Oui ! Il s'intègre parfaitement dans notre formule Sosie de Maman ou les forfaits duo. Demandez à notre équipe les combinaisons possibles.",
      },
    ],
    cta: {
      headline: "Un soin visage gourmand pour votre enfant à Cotonou",
      description: "Réservez le soin visage masque miel ou chocolat à Academy Beauty Gate, Cadjehoun. Un moment inoubliable !",
    },
  },
  
  {
    slug: "sosie-de-maman-cotonou",
    title: "Sosie de Maman à Cotonou",
    metaDescription: "Forfait Sosie de Maman à Cadjehoun, Cotonou. Coiffure + soin + vernis pour partager un moment beauté mère-enfant. 10 000 FCFA — 1h au salon Academy Beauty Gate.",
    category: "duo-enfants",
    hero: {
      imageAlt: "Mère et fille partageant un moment beauté au salon Academy Beauty Gate Cotonou",
      eyebrow: "Espace Duo Enfants",
      headline: "Sosie de Maman",
      subheadline: "Un forfait beauté magique pour la mère et l'enfant : partagez un moment de complicité inoubliable à Cotonou.",
    },
    badges: [
      { icon: "✦", text: "1h" },
      { icon: "✦", text: "10 000 FCFA" },
      { icon: "✦", text: "Mère & Enfant" },
    ],
    intro: {
      imageAlt: "Maman et petite fille avec la même coiffure et les mêmes soins au salon Academy Beauty Gate",
      headline: "Le forfait complicité mère-fille",
      description: "Le Sosie de Maman est notre forfait duo signature : pendant 1 heure, la petite fille reçoit une mini version des soins de sa maman — coiffure assortie, vernis, soin du visage. Un moment de bonheur pur à Cadjehoun.",
      listItems: [
        "Coiffure enfant assortie à celle de la maman",
        "Mini manucure ou vernis coloré pour l'enfant",
        "Soin visage ou rituel beauté adapté à l'enfant",
        "Photos souvenir du duo mère-enfant au salon",
        "1h de complicité dans un cadre chaleureux",
      ],
    },
    benefits: [
      {
        title: "Moment de complicité rare",
        description: "Le Sosie de Maman crée un souvenir inoubliable entre mère et enfant, dans la douceur et le plaisir des soins beauté.",
      },
      {
        title: "Forfait tout inclus",
        description: "Coiffure, vernis, soin visage — tout est inclus dans un seul forfait pensé pour maximiser le plaisir de l'enfant.",
      },
      {
        title: "Expérience sur mesure",
        description: "Nous adaptons les soins de l'enfant à son âge et ses préférences pour un résultat qui lui ressemble.",
      },
      {
        title: "Cadeau idéal",
        description: "Le Sosie de Maman est le cadeau d'anniversaire ou de fête des mères le plus original et touchant à Cotonou.",
      },
    ],
    pricing: {
      headline: "Tarif Sosie de Maman",
      note: "Forfait incluant les soins pour l'enfant uniquement. Les soins de la maman sont en supplément selon ses prestations choisies.",
      items: [
        { label: "Forfait Sosie de Maman (enfant)", price: "10 000 FCFA", note: "1h" },
      ],
    },
    faq: [
      {
        question: "Qu'est-ce qui est exactement inclus dans le forfait Sosie de Maman ?",
        answer: "Le forfait comprend une coiffure enfant, un vernis simple, et un mini soin visage (masque miel ou chocolat). Exactement ce que vous pouvez personnaliser selon les envies de votre enfant.",
      },
      {
        question: "La maman paie-t-elle en plus ses propres soins ?",
        answer: "Oui, les 10 000 FCFA couvrent uniquement les soins de l'enfant. Les prestations de la maman sont facturées selon le tarif normal du salon.",
      },
      {
        question: "Ce forfait convient-il aussi aux pères et fils ?",
        answer: "Absolument ! Nous adaptons le forfait pour des duos papa-fils ou toute autre combinaison famille. Contactez-nous pour personnaliser.",
      },
      {
        question: "Faut-il réserver à l'avance ?",
        answer: "Oui, nous recommandons une réservation 48h à l'avance pour garantir deux places disponibles au même créneau.",
      },
    ],
    cta: {
      headline: "Le forfait beauté mère-enfant à Cotonou",
      description: "Réservez le Sosie de Maman à Academy Beauty Gate, Cadjehoun. Le cadeau le plus précieux : un moment ensemble.",
    },
  },
  
  {
    slug: "rituel-duo-cotonou",
    title: "Rituel Duo Gommage et Massage à Cotonou",
    metaDescription: "Rituel Duo gommage + massage pour deux à Cadjehoun, Cotonou. Un moment de bien-être partagé au salon Academy Beauty Gate. Sur devis — 2h.",
    category: "duo-enfants",
    hero: {
      imageAlt: "Duo de personnes profitant d'un rituel gommage et massage au salon Academy Beauty Gate Cotonou",
      eyebrow: "Espace Duo",
      headline: "Rituel Duo — Gommage & Massage",
      subheadline: "Un rituel de bien-être complet pour deux personnes : gommage et massage en duo à Cotonou.",
    },
    badges: [
      { icon: "✦", text: "2h" },
      { icon: "✦", text: "Sur devis" },
      { icon: "✦", text: "Pour deux" },
    ],
    intro: {
      imageAlt: "Deux personnes bénéficiant d'un rituel bien-être en duo à Cadjehoun Cotonou",
      headline: "Le bien-être partagé, une expérience unique",
      description: "Le Rituel Duo chez Academy Beauty Gate à Cadjehoun est une expérience de bien-être complète pour deux personnes simultanément. Gommage corps suivi d'un massage relaxant, réalisés en parallèle par deux praticiens.",
      listItems: [
        "Gommage corps complet suivi d'un massage pour chaque personne",
        "Deux praticiens expérimentés pour une expérience simultanée",
        "Durée totale de 2 heures dans une atmosphère apaisante",
        "Soins adaptés aux deux participants",
        "Idéal pour les couples, amies ou duos mère-enfant adulte",
      ],
    },
    benefits: [
      {
        title: "Expérience simultanée",
        description: "Les deux participants profitent des soins en même temps, partageant ce moment de bien-être côte à côte.",
      },
      {
        title: "Rituel complet",
        description: "Le gommage prépare et purifie la peau, le massage détend les muscles — une combinaison parfaite pour un bien-être total.",
      },
      {
        title: "Soins personnalisés",
        description: "Chaque soin est adapté aux besoins individuels de chaque participant pour un résultat optimal.",
      },
      {
        title: "Cadeau idéal pour deux",
        description: "Le Rituel Duo est le cadeau parfait pour un anniversaire, une Saint-Valentin ou un événement à célébrer à deux.",
      },
    ],
    pricing: {
      headline: "Tarif Rituel Duo",
      note: "Le tarif est calculé selon les soins choisis par chaque participant et la disponibilité des praticiens. Contactez-nous pour un devis personnalisé.",
      items: [
        { label: "Rituel Duo (gommage + massage x2)", price: "Sur devis", note: "2h — pour 2 personnes" },
      ],
    },
    faq: [
      {
        question: "Qu'est-ce qui est inclus dans le Rituel Duo ?",
        answer: "Le rituel comprend un gommage corps complet suivi d'un massage relaxant pour chacun des deux participants, réalisés simultanément.",
      },
      {
        question: "Peut-on choisir différents types de massage pour chaque personne ?",
        answer: "Oui, chaque participant peut choisir son massage selon ses préférences (relaxant, drainant, etc.). Le tarif sera ajusté en conséquence.",
      },
      {
        question: "Ce rituel convient-il aux couples non mariés ?",
        answer: "Absolument ! Le Rituel Duo est ouvert à tous : couples, amies, mère et fille adulte, sœurs… Toute paire souhaitant partager ce moment.",
      },
      {
        question: "Comment obtenir un devis pour le Rituel Duo ?",
        answer: "Contactez-nous par téléphone ou en vous présentant à Cadjehoun. Nous établirons un devis selon les soins choisis et nos disponibilités.",
      },
    ],
    cta: {
      headline: "Offrez un moment de bien-être à deux à Cotonou",
      description: "Contactez Academy Beauty Gate à Cadjehoun pour réserver votre Rituel Duo et obtenir votre devis personnalisé.",
    },
  },
  
  {
    slug: "forfait-evjf-baby-shower-cotonou",
    title: "Forfait EVJF et Baby Shower à Cotonou",
    metaDescription: "Forfait EVJF et baby shower beauté à Cadjehoun, Cotonou. Célébrez en beauté avec votre groupe au salon Academy Beauty Gate. Sur devis.",
    category: "duo-enfants",
    hero: {
      imageAlt: "Groupe de femmes profitant d'un forfait EVJF beauté au salon Academy Beauty Gate Cotonou",
      eyebrow: "Espace Événements",
      headline: "Forfait EVJF & Baby Shower",
      subheadline: "Célébrez les grands moments de vie avec un forfait beauté sur mesure pour votre groupe à Cotonou.",
    },
    badges: [
      { icon: "✦", text: "Sur devis" },
      { icon: "✦", text: "Durée variable" },
      { icon: "✦", text: "Groupe" },
    ],
    intro: {
      imageAlt: "Groupe de femmes en forfait EVJF beauté à Cadjehoun Cotonou",
      headline: "EVJF et Baby Shower : des souvenirs beauté inoubliables",
      description: "Chez Academy Beauty Gate à Cadjehoun, nous organisons des forfaits beauté sur mesure pour vos EVJF et baby showers. Soins, coiffures, maquillage et bien-être pour tout le groupe, dans une ambiance festive et bienveillante.",
      listItems: [
        "Forfait 100% personnalisable selon les envies du groupe",
        "Soins visage, massages, maquillage, coiffure au programme",
        "Ambiance festive et décoration possible sur demande",
        "Toute l'équipe mobilisée pour servir le groupe",
        "Durée et prestations adaptées à chaque événement",
      ],
    },
    benefits: [
      {
        title: "Organisation clé en main",
        description: "Nous prenons en charge l'organisation complète de votre EVJF ou baby shower beauté, de la planification à l'exécution.",
      },
      {
        title: "Expérience unique",
        description: "Chaque forfait est unique et sur mesure pour correspondre parfaitement à vos envies et à votre budget.",
      },
      {
        title: "Équipe dédiée",
        description: "Toute notre équipe se mobilise pour votre événement, garantissant que chaque membre du groupe soit choyé.",
      },
      {
        title: "Souvenirs inoubliables",
        description: "Photos, décorations, ambiance festive — nous créons les conditions pour des souvenirs beauté qui durent toute une vie.",
      },
    ],
    pricing: {
      headline: "Tarif Forfait EVJF & Baby Shower",
      note: "Le tarif est calculé selon le nombre de personnes et les prestations choisies. Contactez-nous pour un devis personnalisé adapté à votre groupe.",
      items: [
        { label: "Forfait EVJF / Baby shower beauté", price: "Sur devis", note: "Durée variable selon le programme" },
      ],
    },
    faq: [
      {
        question: "Combien de personnes peut accueillir le salon pour un EVJF ?",
        answer: "Notre salon peut accueillir jusqu'à 8–10 personnes simultanément selon les soins. Pour les groupes plus importants, nous pouvons organiser des rotations.",
      },
      {
        question: "Peut-on apporter de la nourriture et des boissons pour le groupe ?",
        answer: "Oui, vous êtes libres d'apporter vos propres gâteaux et boissons pour rendre l'événement encore plus festif. Nous mettons à disposition les espaces nécessaires.",
      },
      {
        question: "Combien de temps à l'avance faut-il réserver ?",
        answer: "Nous recommandons de réserver minimum 2 à 3 semaines à l'avance pour les EVJF et baby showers, afin de s'assurer la disponibilité de toute l'équipe.",
      },
      {
        question: "Peut-on personnaliser les prestations pour chaque invitée ?",
        answer: "Absolument ! Chaque personne du groupe peut choisir ses soins selon ses préférences. Nous établissons le programme ensemble lors du devis.",
      },
    ],
    cta: {
      headline: "Célébrez en beauté avec votre groupe à Cotonou",
      description: "Contactez Academy Beauty Gate à Cadjehoun pour organiser votre EVJF ou baby shower beauté sur mesure.",
    },
  },
  
  {
    slug: "atelier-nail-art-enfant-cotonou",
    title: "Atelier Nail Art Enfant à Cotonou",
    metaDescription: "Atelier nail art pour enfant à Cadjehoun, Cotonou. Créez vos propres motifs d'ongles dans un atelier ludique au salon Academy Beauty Gate. 3 000 FCFA — 30 min.",
    category: "duo-enfants",
    hero: {
      imageAlt: "Enfant créant des motifs nail art lors d'un atelier au salon Academy Beauty Gate Cotonou",
      eyebrow: "Espace Enfants",
      headline: "Atelier Nail Art Enfant",
      subheadline: "Un atelier créatif et ludique pour que votre enfant crée ses propres motifs d'ongles à Cotonou.",
    },
    badges: [
      { icon: "✦", text: "30 min" },
      { icon: "✦", text: "3 000 FCFA" },
      { icon: "✦", text: "Créatif & ludique" },
    ],
    intro: {
      imageAlt: "Petite fille participant à un atelier nail art au salon Academy Beauty Gate à Cadjehoun",
      headline: "L'art des ongles à la portée des enfants",
      description: "L'atelier nail art enfant chez Academy Beauty Gate à Cadjehoun est un moment créatif et éducatif où les enfants apprennent à décorer leurs ongles avec des motifs colorés et amusants. Encadré par nos esthéticiennes, cet atelier développe la créativité.",
      listItems: [
        "Initiation aux techniques de base du nail art",
        "Motifs amusants : fleurs, étoiles, cœurs, personnages",
        "Matériel professionnel adapté aux petites mains",
        "Produits sans danger pour les ongles des enfants",
        "Animation encadrée par nos esthéticiennes expérimentées",
      ],
    },
    benefits: [
      {
        title: "Stimulation créative",
        description: "Le nail art développe la créativité, la motricité fine et la concentration chez les enfants.",
      },
      {
        title: "Moment d'apprentissage",
        description: "L'enfant repart avec de nouvelles compétences qu'il peut réutiliser à la maison avec ses propres vernis.",
      },
      {
        title: "Produits sécurisés",
        description: "Tous les vernis et outils utilisés lors de l'atelier sont adaptés aux enfants et sans substances nocives.",
      },
      {
        title: "Animation idéale anniversaire",
        description: "L'atelier nail art est une animation parfaite pour les anniversaires. Contactez-nous pour organiser un groupe.",
      },
    ],
    pricing: {
      headline: "Tarif Atelier Nail Art Enfant",
      note: "Tarif par enfant. Pour les groupes (anniversaires, goûters beauté), contactez-nous pour un tarif adapté.",
      items: [
        { label: "Atelier nail art enfant", price: "3 000 FCFA", note: "30 min par enfant" },
      ],
    },
    faq: [
      {
        question: "À partir de quel âge peut-on participer à l'atelier nail art ?",
        answer: "Dès 5–6 ans, quand la motricité fine est suffisamment développée pour tenir le pinceau. Nos esthéticiennes aident et guident les plus petits.",
      },
      {
        question: "L'enfant repart-il avec ses propres créations sur les ongles ?",
        answer: "Oui ! À la fin de l'atelier, l'enfant repart avec ses créations nail art sur les ongles, réalisées avec l'aide de notre esthéticienne.",
      },
      {
        question: "Peut-on organiser un atelier nail art pour un anniversaire ?",
        answer: "Absolument ! Nous pouvons organiser un atelier nail art en groupe pour les anniversaires. Contactez-nous pour un programme sur mesure et un tarif groupe.",
      },
      {
        question: "L'enfant peut-il créer n'importe quel motif ?",
        answer: "Nous proposons des modèles adaptés à l'âge et au niveau. Pour les premières fois, des motifs simples (points, rayures, fleurs) sont recommandés.",
      },
    ],
    cta: {
      headline: "Un atelier nail art créatif pour votre enfant à Cotonou",
      description: "Réservez l'atelier nail art enfant à Academy Beauty Gate, Cadjehoun. Créativité et beauté au rendez-vous !",
    },
  },
  
  // ─── PRIVATISATION ──────────────────────────────────────────────────────────
  
  {
    slug: "privatisation-evjf-cotonou",
    title: "Privatisation Salon EVJF à Cotonou",
    metaDescription: "Privatisation salon pour EVJF à Cadjehoun, Cotonou. Célébrez la future mariée avec un moment beauté exclusif au salon Academy Beauty Gate. Sur devis — 3 à 5h.",
    category: "privatisation",
    hero: {
      imageAlt: "Groupe de femmes profitant d'une privatisation EVJF au salon Academy Beauty Gate Cotonou",
      eyebrow: "Privatisation",
      headline: "Privatisation EVJF",
      subheadline: "Privatisez Academy Beauty Gate pour un EVJF inoubliable à Cotonou, entre amies et en toute exclusivité.",
    },
    badges: [
      { icon: "✦", text: "3–5h" },
      { icon: "✦", text: "Sur devis" },
      { icon: "✦", text: "2–4 personnes" },
    ],
    intro: {
      imageAlt: "Future mariée et ses amies lors d'un EVJF privé au salon Academy Beauty Gate Cotonou",
      headline: "L'EVJF beauté parfait à Cotonou",
      description: "Pour l'enterrement de vie de jeune fille de votre amie, offrez-lui une expérience beauté exclusive dans un salon privatisé. Chez Academy Beauty Gate à Cadjehoun, nous transformons le salon en espace privé pour célébrer la future mariée.",
      listItems: [
        "Salon entièrement privatisé pour votre groupe de 2 à 4 personnes",
        "Programme personnalisé : soins, coiffures, maquillage",
        "Ambiance festive avec décorations EVJF sur demande",
        "Toute l'équipe dédiée exclusivement à votre groupe",
        "Durée de 3 à 5 heures selon le programme choisi",
      ],
    },
    benefits: [
      {
        title: "Exclusivité totale",
        description: "Le salon est entièrement pour vous. Pas d'autres clients, toute l'attention et l'équipe dédiées à votre groupe.",
      },
      {
        title: "Programme 100% personnalisé",
        description: "Vous choisissez chaque prestation selon les envies de la future mariée et de ses invitées.",
      },
      {
        title: "Ambiance festive",
        description: "Décorations EVJF, musique de votre choix, apport de champagne ou jus — nous créons le cadre de votre événement.",
      },
      {
        title: "Souvenir beauté unique",
        description: "Un EVJF dans un salon est un souvenir original et élégant, différent des formules classiques.",
      },
    ],
    pricing: {
      headline: "Tarif Privatisation EVJF",
      note: "Le tarif est calculé selon le nombre de personnes (2 à 4) et les prestations choisies pour chacune. Contactez-nous pour un devis détaillé.",
      items: [
        { label: "Privatisation EVJF (2–4 personnes)", price: "Sur devis", note: "3 à 5h selon le programme" },
      ],
    },
    faq: [
      {
        question: "Combien de personnes peut accueillir la privatisation EVJF ?",
        answer: "La formule EVJF est prévue pour 2 à 4 personnes. Pour des groupes plus importants, consultez notre offre de privatisation anniversaire ou événementielle.",
      },
      {
        question: "Peut-on apporter des décorations EVJF ou des boissons ?",
        answer: "Absolument ! Vous pouvez apporter vos décorations, ballons, écharpes EVJF et vos boissons préférées. Nous mettons à disposition un espace pour l'installation.",
      },
      {
        question: "Combien de temps à l'avance faut-il réserver ?",
        answer: "Minimum 2 semaines à l'avance pour garantir la disponibilité complète de l'équipe. Pour les week-ends, 3 à 4 semaines sont recommandées.",
      },
      {
        question: "Un acompte est-il demandé à la réservation ?",
        answer: "Oui, un acompte de 30% est demandé pour confirmer la réservation. Il sera déduit du montant total le jour J.",
      },
    ],
    cta: {
      headline: "Un EVJF beauté inoubliable à Cotonou",
      description: "Contactez Academy Beauty Gate à Cadjehoun pour privatiser le salon et créer un EVJF sur mesure pour la future mariée.",
    },
  },
  
  {
    slug: "privatisation-mariage-cotonou",
    title: "Privatisation Mariage et Préparation Mariée à Cotonou",
    metaDescription: "Privatisation salon pour la préparation de la mariée à Cadjehoun, Cotonou. Coiffure, maquillage et soins pour le grand jour au salon Academy Beauty Gate. Sur devis.",
    category: "privatisation",
    hero: {
      imageAlt: "Mariée en cours de préparation au salon Academy Beauty Gate Cotonou",
      eyebrow: "Privatisation",
      headline: "Privatisation Mariage — Préparation Mariée",
      subheadline: "Préparez-vous pour le plus beau jour de votre vie dans un salon privatisé à Cotonou.",
    },
    badges: [
      { icon: "✦", text: "Sur devis" },
      { icon: "✦", text: "Durée variable" },
      { icon: "✦", text: "Mariée & Témoins" },
    ],
    intro: {
      imageAlt: "Équipe du salon Academy Beauty Gate préparant une mariée à Cadjehoun Cotonou",
      headline: "La préparation beauté du plus beau jour",
      description: "Le jour de votre mariage mérite la perfection. Academy Beauty Gate à Cadjehoun vous ouvre ses portes en exclusivité pour la préparation complète de la mariée et de ses témoins : coiffure, maquillage, soins, manucure — tout pour être éblouissante.",
      listItems: [
        "Salon privatisé pour la mariée et ses témoins",
        "Coiffure de mariée réalisée par nos expertes",
        "Maquillage longue durée pour résister à l'émotion",
        "Manucure et pédicure pour des mains et pieds impeccables",
        "Atmosphère sereine pour commencer la journée en beauté",
      ],
    },
    benefits: [
      {
        title: "Sérénité le jour J",
        description: "Un salon privatisé vous offre la tranquillité et le calme nécessaires pour une préparation sereine et sans stress.",
      },
      {
        title: "Équipe entièrement dédiée",
        description: "Toutes nos expertes sont mobilisées pour vous : coiffeuse, maquilleuse, esthéticienne — tout le talent du salon pour vous seule.",
      },
      {
        title: "Résultat longue durée",
        description: "Nous utilisons des techniques et produits professionnels pour garantir que votre beauté tienne toute la journée et la nuit.",
      },
      {
        title: "Coordination parfaite",
        description: "Nous coordonnons les passages de chaque membre du cortège pour que tout le monde soit prêt à l'heure.",
      },
    ],
    pricing: {
      headline: "Tarif Privatisation Mariage",
      note: "Le tarif est établi selon le nombre de personnes à préparer et les prestations souhaitées. Un devis détaillé est réalisé lors d'une consultation préalable.",
      items: [
        { label: "Privatisation mariage (préparation mariée)", price: "Sur devis", note: "Durée variable selon le programme" },
      ],
    },
    faq: [
      {
        question: "Proposez-vous une consultation avant le jour du mariage ?",
        answer: "Oui, nous recommandons vivement une consultation préalable pour essayer la coiffure et le maquillage, et s'assurer que tout correspond à vos attentes.",
      },
      {
        question: "Pouvez-vous aussi préparer les demoiselles d'honneur ?",
        answer: "Absolument ! Nous établissons un programme global pour la mariée et ses demoiselles d'honneur, avec des tarifs et horaires adaptés.",
      },
      {
        question: "Pouvez-vous vous déplacer au lieu de la cérémonie ?",
        answer: "Nous proposons principalement nos services au salon. Pour un déplacement à domicile ou au lieu de cérémonie, contactez-nous pour discuter de la faisabilité.",
      },
      {
        question: "Combien de temps à l'avance faut-il réserver ?",
        answer: "Pour les mariages, nous recommandons de réserver minimum 1 à 2 mois à l'avance, surtout en saison des mariages (octobre à janvier à Cotonou).",
      },
    ],
    cta: {
      headline: "Soyez éblouissante le jour de votre mariage",
      description: "Contactez Academy Beauty Gate à Cadjehoun, Cotonou pour organiser la privatisation de votre préparation mariée.",
    },
  },
  
  {
    slug: "privatisation-anniversaire-cotonou",
    title: "Privatisation Anniversaire Beauté à Cotonou",
    metaDescription: "Privatisation salon pour anniversaire beauté à Cadjehoun, Cotonou. Célébrez votre anniversaire en mode VIP au salon Academy Beauty Gate. Sur devis — 2 à 4h.",
    category: "privatisation",
    hero: {
      imageAlt: "Groupe de femmes célébrant un anniversaire dans un salon privatisé à Cotonou",
      eyebrow: "Privatisation",
      headline: "Privatisation Anniversaire Beauté",
      subheadline: "Célébrez votre anniversaire en mode VIP dans un salon privatisé à Cadjehoun, Cotonou.",
    },
    badges: [
      { icon: "✦", text: "2–4h" },
      { icon: "✦", text: "Sur devis" },
      { icon: "✦", text: "Mode VIP" },
    ],
    intro: {
      imageAlt: "Femmes profitant d'une privatisation anniversaire beauté au salon Academy Beauty Gate",
      headline: "Fêtez votre anniversaire en beauté",
      description: "Offrez-vous ou offrez à votre proche un anniversaire beauté inoubliable. Chez Academy Beauty Gate à Cadjehoun, nous privatisons le salon pour créer une expérience VIP unique : soins, coiffures, maquillage et festif, tout dans votre espace privé.",
      listItems: [
        "Salon entièrement privatisé pour votre groupe",
        "Programme beauté personnalisé selon vos envies",
        "Décoration anniversaire sur demande",
        "Ambiance festive et intime garantie",
        "Durée de 2 à 4 heures selon le programme",
      ],
    },
    benefits: [
      {
        title: "Anniversaire original",
        description: "Une privatisation beauté est une alternative originale et mémorable aux anniversaires traditionnels.",
      },
      {
        title: "Expérience VIP",
        description: "Le salon est entièrement pour vous. Un accueil personnalisé, des soins sur mesure, un moment de luxe accessible.",
      },
      {
        title: "Programme flexible",
        description: "Soins visage, massages, coiffures, maquillage — vous composez l'anniversaire beauté de vos rêves.",
      },
      {
        title: "Photos souvenirs",
        description: "Nous créons le cadre idéal pour des photos souvenirs magnifiques qui immortaliseront ce moment unique.",
      },
    ],
    pricing: {
      headline: "Tarif Privatisation Anniversaire Beauté",
      note: "Le tarif est calculé selon le nombre de personnes et les prestations choisies. Contactez-nous pour un devis sur mesure.",
      items: [
        { label: "Privatisation anniversaire beauté", price: "Sur devis", note: "2 à 4h selon le programme" },
      ],
    },
    faq: [
      {
        question: "Pour combien de personnes peut-on privatiser le salon ?",
        answer: "Le salon peut accueillir jusqu'à 8–10 personnes selon les soins. Pour des groupes plus importants, contactez-nous pour organiser une rotation.",
      },
      {
        question: "Peut-on apporter un gâteau d'anniversaire ?",
        answer: "Bien sûr ! Apportez votre gâteau et vos décorations. Nous vous accueillons dans la joie et participons à la fête !",
      },
      {
        question: "Peut-on combiner avec une animation nail art ou atelier beauté ?",
        answer: "Absolument ! Un atelier nail art ou un atelier maquillage peut être intégré dans la privatisation anniversaire pour une animation originale.",
      },
      {
        question: "Un acompte est-il nécessaire à la réservation ?",
        answer: "Oui, un acompte de 30% est demandé pour confirmer la réservation et organiser les équipes disponibles.",
      },
    ],
    cta: {
      headline: "Un anniversaire beauté VIP à Cotonou",
      description: "Contactez Academy Beauty Gate à Cadjehoun pour organiser votre privatisation anniversaire beauté sur mesure.",
    },
  },
  
  {
    slug: "team-building-bien-etre-cotonou",
    title: "Team Building Entreprise Bien-Être à Cotonou",
    metaDescription: "Team building bien-être entreprise à Cadjehoun, Cotonou. Offrez un moment de détente collectif à vos équipes au salon Academy Beauty Gate. Sur devis.",
    category: "privatisation",
    hero: {
      imageAlt: "Employés d'une entreprise profitant d'un team building bien-être au salon Academy Beauty Gate Cotonou",
      eyebrow: "Privatisation Entreprise",
      headline: "Team Building Bien-Être Entreprise",
      subheadline: "Récompensez et ressourcez vos équipes avec un team building bien-être unique à Cotonou.",
    },
    badges: [
      { icon: "✦", text: "Sur devis" },
      { icon: "✦", text: "Durée variable" },
      { icon: "✦", text: "Groupes entreprise" },
    ],
    intro: {
      imageAlt: "Groupe de collègues en séance de bien-être team building à Cadjehoun Cotonou",
      headline: "Le bien-être comme outil de cohésion d'équipe",
      description: "Un team building bien-être chez Academy Beauty Gate à Cadjehoun est une façon originale et efficace de renforcer la cohésion de vos équipes. Massages, soins visage, ateliers beauté — vos collaborateurs repartent ressourcés et motivés.",
      listItems: [
        "Activités bien-être adaptées à la mixité des équipes",
        "Massages, soins visage, ateliers nail art au programme",
        "Salon privatisé pour votre groupe d'entreprise",
        "Animé par nos professionnels expérimentés",
        "Programme flexible selon votre budget et vos objectifs",
      ],
    },
    benefits: [
      {
        title: "Cohésion renforcée",
        description: "Un moment de détente partagé renforce les liens entre collègues et améliore l'ambiance de travail.",
      },
      {
        title: "Réduction du stress",
        description: "Les soins bien-être réduisent le stress et l'anxiété de vos équipes, améliorant leur productivité et leur bien-être.",
      },
      {
        title: "Image employeur positive",
        description: "Proposer un team building bien-être renforce votre attractivité en tant qu'employeur et fidélise vos talents.",
      },
      {
        title: "Organisation clé en main",
        description: "Nous gérons tout : planning, soins, ambiance. Vous n'avez qu'à amener vos équipes et profiter.",
      },
    ],
    pricing: {
      headline: "Tarif Team Building Bien-Être",
      note: "Le tarif est calculé selon le nombre de participants et les activités choisies. Nous proposons des devis adaptés aux budgets entreprise.",
      items: [
        { label: "Team building entreprise bien-être", price: "Sur devis", note: "Durée variable selon le programme" },
      ],
    },
    faq: [
      {
        question: "Le team building est-il adapté aux équipes mixtes hommes-femmes ?",
        answer: "Oui, nous proposons des soins et activités adaptés aux hommes et aux femmes : massages, soins visage, ateliers bien-être inclusifs.",
      },
      {
        question: "Peut-on obtenir une facture pour l'entreprise ?",
        answer: "Absolument. Nous établissons une facture professionnelle pour les entreprises, facilitant le remboursement ou la déduction fiscale.",
      },
      {
        question: "Combien de personnes peut-on accueillir pour un team building ?",
        answer: "Nous pouvons accueillir des groupes de 5 à 20 personnes selon la formule. Pour les grands groupes, nous organisons des sessions par rotation.",
      },
      {
        question: "Peut-on intégrer une formation ou atelier beauté professionnel ?",
        answer: "Oui, nous proposons des ateliers beauté formatifs (auto-massage, soins naturels, nail art) qui combinent détente et apprentissage.",
      },
    ],
    cta: {
      headline: "Offrez le bien-être à vos équipes à Cotonou",
      description: "Contactez Academy Beauty Gate à Cadjehoun pour organiser un team building bien-être sur mesure pour votre entreprise.",
    },
  },
  
  {
    slug: "atelier-beaute-prive-cotonou",
    title: "Atelier Beauté Privé Groupe à Cotonou",
    metaDescription: "Atelier beauté privé groupe à Cadjehoun, Cotonou. Apprenez les gestes beauté essentiels dans un atelier exclusif au salon Academy Beauty Gate. Sur devis — 2h.",
    category: "privatisation",
    hero: {
      imageAlt: "Groupe participant à un atelier beauté privé au salon Academy Beauty Gate Cotonou",
      eyebrow: "Privatisation",
      headline: "Atelier Beauté Privé Groupe",
      subheadline: "Apprenez les secrets de beauté professionnels dans un atelier privé et exclusif à Cotonou.",
    },
    badges: [
      { icon: "✦", text: "2h" },
      { icon: "✦", text: "Sur devis" },
      { icon: "✦", text: "Formatif & ludique" },
    ],
    intro: {
      imageAlt: "Esthéticienne animant un atelier beauté privé à Cadjehoun Cotonou",
      headline: "Apprendre la beauté en groupe, dans votre espace privé",
      description: "L'atelier beauté privé chez Academy Beauty Gate à Cadjehoun est une expérience unique alliant formation et détente. Nos expertes partagent leurs techniques professionnelles : maquillage, soin de la peau, nail art — dans un cadre exclusif pour votre groupe.",
      listItems: [
        "Atelier encadré par nos expertes en beauté",
        "Techniques de maquillage, soin peau ou nail art au choix",
        "Chaque participante repart avec de nouvelles compétences",
        "Matériel professionnel fourni pendant l'atelier",
        "Ambiance détendue et conviviale en groupe privé",
      ],
    },
    benefits: [
      {
        title: "Compétences durables",
        description: "Contrairement à un simple soin, l'atelier vous donne des techniques réutilisables au quotidien.",
      },
      {
        title: "Expérience collective",
        description: "Partager un atelier en groupe crée une dynamique joyeuse et des souvenirs communs forts.",
      },
      {
        title: "Expertise professionnelle",
        description: "Vous bénéficiez des conseils et techniques de nos professionnelles formées aux meilleures méthodes.",
      },
      {
        title: "Programme personnalisable",
        description: "Maquillage naturel, soins anti-âge, nail art, auto-massage — vous choisissez le thème de votre atelier.",
      },
    ],
    pricing: {
      headline: "Tarif Atelier Beauté Privé Groupe",
      note: "Le tarif est calculé selon le thème de l'atelier et le nombre de participantes. Contactez-nous pour un devis personnalisé.",
      items: [
        { label: "Atelier beauté privé groupe", price: "Sur devis", note: "2h — tarif selon groupe et thème" },
      ],
    },
    faq: [
      {
        question: "Quels types d'ateliers beauté proposez-vous ?",
        answer: "Nous proposons des ateliers maquillage (débutant à confirmé), soin de la peau, nail art, auto-massage et soins naturels. Chaque thème est animé par une experte.",
      },
      {
        question: "Doit-on apporter son propre matériel ?",
        answer: "Non, tout le matériel professionnel est fourni pendant l'atelier. Si vous souhaitez apporter votre trousse pour personnaliser, c'est possible.",
      },
      {
        question: "Pour combien de personnes est adapté l'atelier ?",
        answer: "L'atelier fonctionne optimalement pour des groupes de 4 à 10 personnes pour que chaque participante reçoive une attention individuelle.",
      },
      {
        question: "Peut-on organiser un atelier beauté pour un event d'association ou ONG ?",
        answer: "Absolument ! Nous collaborons avec des associations et ONG pour des ateliers beauté à impact social. Contactez-nous pour discuter d'un partenariat.",
      },
    ],
    cta: {
      headline: "Organisez votre atelier beauté privé à Cotonou",
      description: "Contactez Academy Beauty Gate à Cadjehoun pour réserver votre atelier beauté privé et obtenir un devis personnalisé.",
    },
  },
  
  {
    slug: "journee-vip-cotonou",
    title: "Journée VIP Tout Inclus à Cotonou",
    metaDescription: "Journée VIP tout inclus au salon Academy Beauty Gate à Cadjehoun, Cotonou. La plus complète des expériences beauté et bien-être. Sur devis — journée complète.",
    category: "privatisation",
    hero: {
      imageAlt: "Cliente profitant d'une journée VIP tout inclus au salon Academy Beauty Gate Cotonou",
      eyebrow: "Privatisation VIP",
      headline: "Journée VIP Tout Inclus",
      subheadline: "L'expérience beauté et bien-être ultime à Cotonou — une journée entière rien que pour vous.",
    },
    badges: [
      { icon: "✦", text: "Journée complète" },
      { icon: "✦", text: "Sur devis" },
      { icon: "✦", text: "Tout inclus" },
    ],
    intro: {
      imageAlt: "Salon privatisé pour une journée VIP à Academy Beauty Gate Cadjehoun Cotonou",
      headline: "Une journée entière dédiée à votre beauté",
      description: "La Journée VIP Tout Inclus chez Academy Beauty Gate à Cadjehoun est notre offre la plus exclusive : salon privatisé pour la journée, programme beauté et bien-être complet, équipe entièrement dédiée. L'expérience luxe à Cotonou.",
      listItems: [
        "Salon privatisé pour la journée entière",
        "Programme complet : soins visage, massage, coiffure, maquillage, manucure",
        "Équipe entièrement dédiée à votre service",
        "Accueil VIP avec boissons et collations",
        "Photos souvenirs et cadeaux surprises inclus",
      ],
    },
    benefits: [
      {
        title: "L'expérience ultime",
        description: "La Journée VIP est l'expérience beauté la plus complète et luxueuse que nous proposons à Cotonou.",
      },
      {
        title: "Privatisation totale",
        description: "Le salon est entièrement fermé au public pour vous. Confidentialité, tranquillité et attention exclusive garanties.",
      },
      {
        title: "Tous les soins en un",
        description: "Visage, corps, cheveux, ongles, maquillage — tout est couvert dans cette journée pour une transformation complète.",
      },
      {
        title: "Souvenir inoubliable",
        description: "Que ce soit pour un anniversaire marquant, un cadeau d'exception ou simplement se chouchouter — la journée VIP crée des souvenirs à vie.",
      },
    ],
    pricing: {
      headline: "Tarif Journée VIP Tout Inclus",
      note: "Le tarif est établi sur devis selon les prestations exactes souhaitées et le nombre de personnes. Contactez-nous pour construire votre journée parfaite.",
      items: [
        { label: "Journée VIP tout inclus", price: "Sur devis", note: "Journée complète — programme personnalisé" },
      ],
    },
    faq: [
      {
        question: "Qu'est-ce qui est exactement inclus dans la Journée VIP ?",
        answer: "La journée VIP inclut une sélection de soins visage, massage corps, coiffure, maquillage et soins mains/pieds, établis lors d'une consultation. Tout est personnalisable.",
      },
      {
        question: "Peut-on être plusieurs personnes pour la Journée VIP ?",
        answer: "La formule de base est conçue pour une personne en exclusivité. Pour un duo ou un petit groupe, nous adaptons le programme et le tarif en conséquence.",
      },
      {
        question: "Un repas ou des collations sont-ils inclus ?",
        answer: "Nous prévoyons des boissons fraîches et collations légères. Pour un repas complet, nous pouvons recommander des options de livraison à Cadjehoun.",
      },
      {
        question: "Comment réserver la Journée VIP ?",
        answer: "Contactez-nous par téléphone ou en personne à Cadjehoun pour une consultation préalable. Un acompte de 40% est demandé pour confirmer la réservation.",
      },
    ],
    cta: {
      headline: "Vivez l'expérience beauté ultime à Cotonou",
      description: "Contactez Academy Beauty Gate à Cadjehoun pour réserver votre Journée VIP Tout Inclus et vivre la beauté à son summum.",
    },
  },
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return services.find((s) => s.slug === slug);
}

export function getServicesByCategory(category: ServiceData["category"]): ServiceData[] {
  return services.filter((s) => s.category === category);
}

const RELATED_CATEGORIES: Partial<Record<ServiceData["category"], ServiceData["category"][]>> = {
  visage:        ["massages", "injections", "diagnostic", "maquillage", "corps"],
  corps:         ["massages", "visage", "epilation", "epilation-cire"],
  epilation:     ["epilation-cire", "corps", "visage"],
  "epilation-cire": ["epilation", "corps", "mains-pieds"],
  injections:    ["visage", "diagnostic", "corps"],
  diagnostic:    ["visage", "injections", "massages"],
  "mains-pieds": ["maquillage", "duo-enfants", "epilation-cire", "massages"],
  massages:      ["visage", "corps", "duo-enfants", "privatisation"],
  maquillage:    ["visage", "mains-pieds", "coiffure"],
  coiffure:      ["barber", "duo-enfants", "mains-pieds"],
  barber:        ["coiffure", "visage", "massages"],
  "duo-enfants": ["coiffure", "mains-pieds", "massages", "privatisation"],
  privatisation: ["massages", "coiffure", "mains-pieds", "maquillage"],
};

export function getRelatedServices(current: ServiceData, count = 4): ServiceData[] {
  const related: ServiceData[] = [];
  const seen = new Set<string>([current.slug]);

  // 1. Same category first (up to 2)
  const sameCat = services.filter((s) => s.category === current.category && s.slug !== current.slug);
  for (const s of sameCat.slice(0, 2)) {
    related.push(s);
    seen.add(s.slug);
  }

  // 2. Fill with complementary categories
  const compCats = RELATED_CATEGORIES[current.category] ?? [];
  for (const cat of compCats) {
    if (related.length >= count) break;
    const candidates = services.filter((s) => s.category === cat && !seen.has(s.slug));
    if (candidates.length) {
      related.push(candidates[0]);
      seen.add(candidates[0].slug);
    }
  }

  // 3. Fallback: any other service
  if (related.length < count) {
    for (const s of services) {
      if (related.length >= count) break;
      if (!seen.has(s.slug)) {
        related.push(s);
        seen.add(s.slug);
      }
    }
  }

  return related.slice(0, count);
}
