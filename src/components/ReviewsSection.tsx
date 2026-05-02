const REVIEWS = [
  {
    name: "Alban OKE",
    time: "il y a 2 mois",
    text: "Je ressors de ma séance de massage complètement détendue. Mon mal de dos que je traînais depuis 3 jours s'est considérablement atténué. Le personnel est accueillant, qualifié et professionnel.",
    rating: 5,
  },
  {
    name: "Christophe Piscart",
    time: "il y a 2 mois",
    text: "Rien à redire, produits de marques, clim, personnes aimables, douces et très pro. Fabienne a été aux petits soins pour moi. Rapport qualité prix super, ne pas hésiter.",
    rating: 5,
  },
  {
    name: "Seraphine MEKUI NDONG",
    time: "il y a 2 mois",
    text: "Très belle expérience chez Académie Beauty Gate ! J'ai fait un soin des pieds avec pose de vernis et j'ai beaucoup aimé. Le résultat est impeccable et l'accueil est chaleureux. Je recommande 🥰",
    rating: 5,
  },
  {
    name: "Renaud Martins",
    time: "il y a 6 mois",
    text: "Très belle expérience. Ne peut que recommander. Ce sont des professionnels avec un accompagnement client exceptionnel. Équipements de pointe, bref tout ce qu'il faut pour vous redonner le sourire.",
    rating: 5,
  },
  {
    name: "Candi Licious",
    time: "il y a 8 mois",
    text: "Super expérience dans ce salon ! J'étais en visite à Cotonou et j'ai pu profiter d'un soin Hydra Facial ! Led, laser, ultra son, et hydra facial, soins et masque : c'était impeccable !",
    rating: 5,
  },
  {
    name: "Gloria Zocli",
    time: "il y a un an",
    text: "J'ai passé un moment exceptionnel à Academy Beauty Gate ! Dès mon arrivée, j'ai été accueillie très chaleureusement. Le personnel est très professionnel et attentif, et les soins sont d'une grande qualité.",
    rating: 5,
  },
  {
    name: "Edwige Djidonou",
    time: "il y a 3 mois",
    text: "Ça a été un très bon moment de relaxation, soins impeccable, un très bon accueil, la masseuse a vraiment été gentille et douce avec moi. Je vous le recommande vivement ♥️",
    rating: 5,
  },
  {
    name: "Vivi Agbonifo",
    time: "il y a 10 mois",
    text: "À l'académie Beauty Gate, je me sens comme à la maison. Les soins y sont administrés avec grand soin, professionnalisme et douceur. Merci tata Sofia. 🥰❤️",
    rating: 5,
  },
  {
    name: "Luca Paties Montagner",
    time: "il y a un an",
    text: "A top relaxing massage. Cozy place, very kind staff. 5 stars are too few.",
    rating: 5,
  },
  {
    name: "Linda YOBODE",
    time: "il y a 4 ans",
    text: "J'ai vécu une expérience esthétique mémorable à BEAUTY GATE. Dès l'accueil, c'est une atmosphère calme et feutrée qui nous enveloppe. Mes visites répétées témoignent de ma satisfaction.",
    rating: 5,
  },
  {
    name: "Komlan DEGBE",
    time: "il y a 3 ans",
    text: "Un cadre très professionnel et agréable avec l'accueil qu'il faut pour un personnel au top piloté de main de maîtresse par la patronne Sofia.",
    rating: 5,
  },
  {
    name: "David IG",
    time: "il y a 2 ans",
    text: "Professionnalisme, sympathie et compétence. Trois mots qui résument mon retour d'expérience chez Beauty Gate. Il y a eu un bon suivi aussi après les soins. Je recommande.",
    rating: 5,
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5 mb-3">
      {[...Array(5)].map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" fill="#F59E0B" className="w-4 h-4">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
        </svg>
      ))}
    </div>
  );
}

function Avatar({ name }: { name: string }) {
  const initials = name.split(" ").map((w) => w[0]).slice(0, 2).join("").toUpperCase();
  const colors = ["bg-[#96000F]", "bg-[#2D6A4F]", "bg-[#1D4E89]", "bg-[#7B2D8B]", "bg-[#C9620A]"];
  const color = colors[name.charCodeAt(0) % colors.length];
  return (
    <div className={`w-10 h-10 rounded-full ${color} flex items-center justify-center shrink-0`}>
      <span className="text-white text-[13px] font-bold">{initials}</span>
    </div>
  );
}

function ReviewCard({ review }: { review: typeof REVIEWS[0] }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-[#f0f0f0] p-5 w-[300px] shrink-0 hover:shadow-xl hover:-translate-y-1 hover:border-[#96000F]/20 transition-all duration-300 cursor-default">
      <div className="flex items-center gap-3 mb-3">
        <Avatar name={review.name} />
        <div>
          <p className="text-[13px] font-bold text-black leading-tight">{review.name}</p>
          <p className="text-[11px] text-[#999]">{review.time}</p>
        </div>
        {/* Google G */}
        <svg viewBox="0 0 24 24" className="w-5 h-5 ml-auto shrink-0" xmlns="http://www.w3.org/2000/svg">
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
        </svg>
      </div>
      <Stars />
      <p className="text-[13px] leading-[22px] text-[#444] line-clamp-4">{review.text}</p>
    </div>
  );
}

const ROW1 = REVIEWS.slice(0, 6);
const ROW2 = REVIEWS.slice(6);

export function ReviewsSection() {
  return (
    <section className="py-[60px] bg-[#fafafa] overflow-hidden">
      <div className="max-w-[1300px] mx-auto px-6 md:px-10 mb-10 text-center">
        <p className="text-[12px] font-bold uppercase tracking-[3px] text-[#96000F] mb-3">
          Avis clients
        </p>
        <h2 className="font-sans text-[30px] md:text-[42px] font-bold text-black mb-3">
          Ce que disent nos clients
        </h2>
        <div className="flex items-center justify-center gap-2 mt-2">
          <div className="flex gap-0.5">
            {[0,1,2,3].map((i) => (
              <svg key={i} viewBox="0 0 20 20" fill="#F59E0B" className="w-5 h-5">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
            ))}
            {/* Demi-étoile pour 4,8 */}
            <svg viewBox="0 0 20 20" className="w-5 h-5">
              <defs>
                <linearGradient id="half">
                  <stop offset="80%" stopColor="#F59E0B"/>
                  <stop offset="80%" stopColor="#D1D5DB"/>
                </linearGradient>
              </defs>
              <path fill="url(#half)" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
            </svg>
          </div>
          <span className="text-[15px] font-bold text-black">4,8</span>
          <span className="text-[13px] text-[#888]">· 175+ avis Google</span>
        </div>
      </div>

      {/* Pistes de défilement */}
      <div className="flex flex-col gap-4 relative">

        {/* Dégradés latéraux */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 z-10 bg-gradient-to-r from-[#fafafa] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 z-10 bg-gradient-to-l from-[#fafafa] to-transparent" />

        {/* Rangée 1 — gauche, pause indépendante */}
        <div className="marquee-row-1 overflow-hidden">
          <div className="marquee-left flex gap-4 w-max">
            {[...ROW1, ...ROW1].map((r, i) => <ReviewCard key={i} review={r} />)}
          </div>
        </div>

        {/* Rangée 2 — droite, pause indépendante */}
        <div className="marquee-row-2 overflow-hidden">
          <div className="marquee-right flex gap-4 w-max">
            {[...ROW2, ...ROW2].map((r, i) => <ReviewCard key={i} review={r} />)}
          </div>
        </div>

      </div>
    </section>
  );
}
