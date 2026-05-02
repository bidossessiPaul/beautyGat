import Image from "next/image";
import Link from "next/link";

const CATEGORIES = [
  {
    title: "Épilation",
    description: "Des solutions permanentes adaptées à tous les phototypes pour une peau lisse et sans poils durablement.",
    image: "/images/dsc00744-1-scaled.jpg",
    href: "/epilation-laser-paris",
    services: ["Épilation laser", "Électrolyse", "Bleaching"],
    tag: "Laser & haute fréquence",
  },
  {
    title: "Soins du visage",
    description: "Des technologies médicales avancées pour révéler l'éclat naturel de votre peau.",
    image: "/images/img_4538.jpg",
    href: "/hydrafacial-paris",
    services: ["Hydrafacial®", "Peeling", "Baby Face", "Carbon Laser Peel"],
    tag: "Éclat & pureté",
  },
  {
    title: "Anti-âge",
    description: "Stimulez le collagène, atténuez les rides et retrouvez une peau visiblement rajeunie.",
    image: "/images/microneedling-appart-beaute.png",
    href: "/microneedling-paris",
    services: ["Microneedling", "Photomodulation LED", "Peeling chimique"],
    tag: "Régénération cellulaire",
  },
  {
    title: "Corps & silhouette",
    description: "Redessinez votre silhouette sans chirurgie grâce à nos traitements corps non-invasifs.",
    image: "/images/adobestock-316410994-jidarv-1-scaled.jpeg",
    href: "/cryolipolyse-paris",
    services: ["Cryolipolyse", "BodySculpt", "Détatouage laser", "Peeling intime"],
    tag: "Minceur & remodelage",
  },
];

export function ServicesByCategory() {
  return (
    <section className="py-[60px] bg-[#fafafa]">
      <div className="max-w-[1300px] mx-auto px-6 md:px-10">

        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-[12px] font-bold uppercase tracking-[3px] text-[#96000F] mb-3">
            Nos soins
          </p>
          <h2 className="font-sans text-[30px] md:text-[42px] font-bold text-black mb-4">
            Des soins d'exception pour vous
          </h2>
          <p className="text-[15px] leading-[28px] text-[#555] max-w-[600px] mx-auto">
            Chaque soin est réalisé avec expertise et des technologies de pointe, pour des résultats visibles et durables.
          </p>
        </div>

        {/* Grille 2×2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.title}
              href={cat.href}
              className="group relative overflow-hidden rounded-xl h-[380px] block"
            >
              {/* Image */}
              <Image
                src={cat.image}
                alt={cat.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Gradient permanent */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Overlay rouge au hover */}
              <div className="absolute inset-0 bg-[#96000F]/0 group-hover:bg-[#96000F]/40 transition-colors duration-500" />

              {/* Badge catégorie */}
              <div className="absolute top-5 left-5">
                <span className="text-[11px] uppercase tracking-[2px] bg-white/15 backdrop-blur-sm text-white px-3 py-1.5 rounded-full border border-white/20">
                  {cat.tag}
                </span>
              </div>

              {/* Contenu bas */}
              <div className="absolute bottom-0 left-0 right-0 p-7">
                <h3 className="font-sans text-[26px] font-bold text-white mb-2 leading-tight">
                  {cat.title}
                </h3>
                <p className="text-[13px] leading-[22px] text-white/80 mb-4 max-w-[380px]">
                  {cat.description}
                </p>

                {/* Tags services — visibles au hover */}
                <div className="flex flex-wrap gap-2 mb-4 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400">
                  {cat.services.map((s) => (
                    <span
                      key={s}
                      className="text-[10px] uppercase tracking-wide bg-white/20 text-white px-2.5 py-1 rounded-full"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                <span className="text-white text-[12px] font-semibold uppercase tracking-[2px] flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
                  Découvrir <span>→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
