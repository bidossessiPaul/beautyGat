import Image from "next/image";
import Link from "next/link";

const HOMME_CARDS = [
  {
    title: "HYDRAFACIAL®",
    description:
      "Le soin N°1 en France et aux états-unis pour une peau parfaite est disponible chez BeautyGate.",
    imageSrc: "/images/hero-hydra-homme.jpg",
    href: "/hydrafacial-homme-paris",
  },
  {
    title: "ÉPILATION LASER",
    subtitle: "avec Lutronic",
    description:
      "BeautyGate est équipé des machines les plus performantes pour l'épilation laser. Nous proposons des forfaits ou des traitements à la séance.",
    imageSrc: "/images/hero-laser-homme.jpg",
    href: "/epilation-laser-homme-paris",
  },
  {
    title: "PEELING",
    subtitle: "avec le laboratoire Novelskin & Mediderma",
    description:
      "Des peelings pour tous types de peaux, et sans éviction sociale, un traitement incontournable pour faire peau neuve !",
    imageSrc: "/images/hero-peeling-homme.jpg",
    href: "/peeling-visage-homme-paris",
  },
  {
    title: "BODY SCULPT",
    subtitle: "BY CRISTAL Fit®",
    description:
      "Sculptez votre silhouette, tonifiez vos muscles et éliminez vos graisses localisées sans effort et sans douleur.",
    imageSrc: "/images/bodysculpt-homme-accueil-appart-beaute.jpg",
    href: "/bodysculpt-homme",
  },
];

export function HommeSection() {
  return (
    <section className="bg-[#F8F8F8] py-[100px] pb-10 px-6">
      <div className="max-w-[1300px] mx-auto px-6 md:px-10">
        <h2 className="font-heading text-[30px] font-normal text-center text-black mb-12">
          Nos soins Homme
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {HOMME_CARDS.map((card) => (
            <div
              key={card.title}
              className="bg-white overflow-hidden relative"
            >
              {/* Image bannière */}
              <div className="relative h-[200px] w-full">
                <Image
                  src={card.imageSrc}
                  alt={card.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              {/* Contenu */}
              <div className="p-8">
                <h3 className="text-[20px] font-bold uppercase font-sans mb-1">
                  {card.title}
                </h3>
                {card.subtitle && (
                  <p className="text-[13px] font-light text-[#888] mb-3">
                    {card.subtitle}
                  </p>
                )}
                <p className="text-[14px] leading-[24px] text-[#333] mb-6">
                  {card.description}
                </p>
                <Link
                  href={card.href}
                  className="text-[12px] font-semibold uppercase text-black border-b border-black pb-1 hover:opacity-70 transition-opacity"
                >
                  EN SAVOIR PLUS
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
