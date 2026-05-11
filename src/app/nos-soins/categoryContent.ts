export interface CategoryContent {
  intro: {
    description: string;
    highlights: { value: string; label: string }[];
  };
  benefits: {
    icon: string;
    title: string;
    description: string;
  }[];
}

export const CATEGORY_CONTENT: Record<string, CategoryContent> = {

  visage: {
    intro: {
      description:
        "Nos soins visage associent technologies de pointe et protocoles personnalisés pour traiter les problématiques les plus diverses : taches, rides, pores dilatés, teint terne ou peau déshydratée. Chaque soin débute par un diagnostic précis pour vous proposer exactement ce dont votre peau a besoin.",
      highlights: [
        { value: "100%", label: "Soins sur-mesure" },
        { value: "Dès 1 séance", label: "Résultats visibles" },
        { value: "Tous phototypes", label: "Peaux mates & noires" },
      ],
    },
    benefits: [
      { icon: "✦", title: "Résultats immédiats", description: "Dès la première séance, votre peau retrouve éclat, hydratation et uniformité." },
      { icon: "✦", title: "Protocoles avancés", description: "Hydrafacial, microneedling, peeling, LED — les meilleurs équipements disponibles à Cotonou." },
      { icon: "✦", title: "Adapté à la peau noire", description: "Nos esthéticiennes sont formées aux spécificités des peaux mates et foncées." },
      { icon: "✦", title: "Sans effets secondaires", description: "Des traitements doux, sécurisés et sans temps d'éviction prolongé." },
    ],
  },

  corps: {
    intro: {
      description:
        "Nos soins corps vont bien au-delà de la simple détente. Sculptez votre silhouette, éliminez les graisses localisées, gommez et hydratez en profondeur grâce à des techniques modernes et des actifs soigneusement sélectionnés. Un moment de soin intégral pour votre corps.",
      highlights: [
        { value: "Remodelage", label: "Silhouette & galbe" },
        { value: "Profonde", label: "Hydratation intense" },
        { value: "Bien-être", label: "Corps & esprit" },
      ],
    },
    benefits: [
      { icon: "✦", title: "Élimination des graisses", description: "Cryolipolyse et BodySculpt pour cibler et réduire les zones résistantes au sport." },
      { icon: "✦", title: "Peau soyeuse", description: "Gommages et enveloppements qui éliminent les cellules mortes et révèlent une peau neuve." },
      { icon: "✦", title: "Résultats durables", description: "Des soins qui agissent en profondeur pour des effets visibles plusieurs semaines." },
      { icon: "✦", title: "Relaxation totale", description: "Chaque soin corps est aussi un moment de détente profonde pour le corps et l'esprit." },
    ],
  },

  "epilation-cire": {
    intro: {
      description:
        "L'épilation à la cire reste la méthode de référence pour une peau lisse, nette et douce durablement. Nos esthéticiennes utilisent des cires de haute qualité adaptées à chaque zone et chaque type de peau, pour une épilation efficace et le moins douloureuse possible.",
      highlights: [
        { value: "3 à 5 sem.", label: "Peau lisse" },
        { value: "Toutes zones", label: "Corps & visage" },
        { value: "Peaux sensibles", label: "Cires adaptées" },
      ],
    },
    benefits: [
      { icon: "✦", title: "Efficacité immédiate", description: "Une peau parfaitement lisse dès la première séance, sans repousse pendant plusieurs semaines." },
      { icon: "✦", title: "Repousse plus fine", description: "Avec la régularité, les poils repoussent de plus en plus fins et clairsemés." },
      { icon: "✦", title: "Cires de qualité", description: "Cires tiède, froide ou orientale selon la zone et la sensibilité de votre peau." },
      { icon: "✦", title: "Toutes zones traitées", description: "Jambes, aisselles, maillot, visage, dos — toutes les zones sont prises en charge." },
    ],
  },

  massages: {
    intro: {
      description:
        "Nos massages sont bien plus qu'un moment de relaxation. Ils agissent en profondeur sur les tensions musculaires, améliorent la circulation sanguine et lymphatique, et procurent un bien-être durable. Choisissez parmi notre gamme de massages pour répondre exactement à vos besoins.",
      highlights: [
        { value: "Détente", label: "Totale & profonde" },
        { value: "Circulation", label: "Améliorée" },
        { value: "Signature", label: "L.A Beauty Gate" },
      ],
    },
    benefits: [
      { icon: "✦", title: "Libération des tensions", description: "Nuque, dos, épaules — nos massages ciblent les zones les plus tendues pour un soulagement immédiat." },
      { icon: "✦", title: "Meilleure circulation", description: "Les techniques manuelles stimulent le retour veineux et favorisent l'élimination des toxines." },
      { icon: "✦", title: "Anti-stress profond", description: "Une séance de massage réduit significativement le cortisol et favorise un sommeil de qualité." },
      { icon: "✦", title: "Huiles premium", description: "Des huiles végétales et essentielles soigneusement choisies pour nourrir la peau pendant le massage." },
    ],
  },

  "mains-pieds": {
    intro: {
      description:
        "Mains soignées, pieds impeccables et ongles parfaits — nos soins mains & pieds combinent technicité et esthétique. Du soin SPA complet au nail art créatif, en passant par la manucure semi-permanente et les capsules, nous prenons soin de chaque détail.",
      highlights: [
        { value: "Durée", label: "Jusqu'à 3 semaines" },
        { value: "Nail art", label: "Sur mesure" },
        { value: "Soin SPA", label: "Mains & pieds" },
      ],
    },
    benefits: [
      { icon: "✦", title: "Ongles parfaits", description: "Mise en forme, lima, soin cuticules et finition impeccable pour des mains soignées." },
      { icon: "✦", title: "Semi-permanent longue durée", description: "Une manucure qui tient 2 à 3 semaines sans écaillage ni perte d'éclat." },
      { icon: "✦", title: "Nail art créatif", description: "Des designs uniques et tendances réalisés par nos techniciennes formées aux dernières techniques." },
      { icon: "✦", title: "Soin SPA complet", description: "Exfoliation, masque, massage et hydratation intense pour des mains et pieds comme neufs." },
    ],
  },

  "duo-enfants": {
    intro: {
      description:
        "Vivez un moment unique et complice. Nos soins duo sont pensés pour partager un instant de beauté à deux — mère et fille, amies, sœurs — dans une ambiance chaleureuse et bienveillante. Des soins adaptés aux enfants dès 6 ans pour leur faire découvrir le soin de soi en toute douceur.",
      highlights: [
        { value: "Dès 6 ans", label: "Soins enfants" },
        { value: "Duo", label: "Mère & fille" },
        { value: "Souvenir", label: "Moment inoubliable" },
      ],
    },
    benefits: [
      { icon: "✦", title: "Moment de complicité", description: "Partagez une expérience beauté unique qui crée des souvenirs durables entre proches." },
      { icon: "✦", title: "Soins adaptés aux enfants", description: "Produits doux, hypoallergéniques et protocoles spécifiquement conçus pour les peaux jeunes." },
      { icon: "✦", title: "Ambiance bienveillante", description: "Un accueil chaleureux et attentionné pour mettre les plus jeunes à l'aise dès l'arrivée." },
      { icon: "✦", title: "Formules flexibles", description: "Choisissez parmi nos forfaits duo les soins qui vous conviennent le mieux." },
    ],
  },

  injections: {
    intro: {
      description:
        "Nos soins médicaux esthétiques sont réalisés par des praticiens qualifiés dans un cadre strict de sécurité. Acide hyaluronique, toxine botulique — chaque injection est précise, dosée et personnalisée pour un résultat naturel qui sublime sans dénaturer.",
      highlights: [
        { value: "Médical", label: "Praticiens qualifiés" },
        { value: "Naturel", label: "Résultat discret" },
        { value: "Durable", label: "6 à 18 mois" },
      ],
    },
    benefits: [
      { icon: "✦", title: "Résultat naturel", description: "Notre approche vise à sublimer vos traits sans modifier votre identité visuelle." },
      { icon: "✦", title: "Praticiens qualifiés", description: "Tous nos actes médicaux sont réalisés par des professionnels de santé diplômés." },
      { icon: "✦", title: "Consultation préalable", description: "Un bilan complet avant toute injection pour analyser vos besoins et définir le protocole optimal." },
      { icon: "✦", title: "Suivi post-soin", description: "Nous assurons un suivi personnalisé pour vérifier le résultat et ajuster si nécessaire." },
    ],
  },

  diagnostic: {
    intro: {
      description:
        "Avant tout soin, comprendre votre peau est essentiel. Nos consultations de diagnostic utilisent des outils d'analyse professionnels pour identifier précisément vos problématiques cutanées et vous orienter vers les traitements les plus adaptés. Un investissement qui optimise chaque soin.",
      highlights: [
        { value: "Analyse", label: "Professionnelle" },
        { value: "Sur-mesure", label: "Protocole personnalisé" },
        { value: "Offert", label: "En option" },
      ],
    },
    benefits: [
      { icon: "✦", title: "Diagnostic précis", description: "Analyse de l'hydratation, de la séborrhée, de la pigmentation et de la sensibilité de votre peau." },
      { icon: "✦", title: "Plan de traitement", description: "Un programme personnalisé avec les soins recommandés, la fréquence et les produits adaptés." },
      { icon: "✦", title: "Éviter les erreurs", description: "Un diagnostic évite les soins inadaptés qui peuvent aggraver certaines problématiques." },
      { icon: "✦", title: "Suivi dans le temps", description: "Mesurez les progrès de votre peau à chaque consultation pour ajuster le protocole." },
    ],
  },

  privatisation: {
    intro: {
      description:
        "Privatisez notre espace beauté pour vos événements les plus spéciaux. EVJF, anniversaires, team building beauté — nous mettons tout notre savoir-faire et notre cadre à votre disposition pour une expérience exclusive et mémorable, sur mesure selon vos envies.",
      highlights: [
        { value: "Exclusif", label: "Espace privatisé" },
        { value: "EVJF & events", label: "Sur mesure" },
        { value: "Groupe", label: "Jusqu'à 15 pers." },
      ],
    },
    benefits: [
      { icon: "✦", title: "Espace privatisé", description: "L'intégralité de notre institut rien que pour vous et vos invités, en toute intimité." },
      { icon: "✦", title: "Programme sur mesure", description: "Nous co-créons avec vous un programme de soins adapté au nombre de participants et à l'événement." },
      { icon: "✦", title: "Ambiance festive", description: "Décoration, musique et accueil personnalisé pour faire de ce moment un vrai événement." },
      { icon: "✦", title: "Tout inclus", description: "Soins, boissons de bienvenue et service attentionné — vous n'avez qu'à profiter." },
    ],
  },
};
