import Image from "next/image";
import Link from "next/link";

export function CTASection() {
  return (
    <section className="relative py-[100px] overflow-hidden">
      {/* Image de fond */}
      <Image
        src="/beautygate/gallery/LcDicyh6kKAgltJo5xF1UTp44idBu5GgBPTvf3Eh.jpg"
        alt="BeautyGate Paris"
        fill
        sizes="100vw"
        className="object-cover object-center"
        priority={false}
      />
      {/* Overlay bordeaux */}
      <div className="absolute inset-0 bg-[#96000F]/85" />

      {/* Contenu */}
      <div className="relative z-10 max-w-[1300px] mx-auto px-6 md:px-10 text-center">
        <p className="text-[12px] font-bold uppercase tracking-[4px] text-white/60 mb-5">
          Prendre soin de soi
        </p>
        <h2 className="font-sans text-[32px] md:text-[52px] font-bold text-white leading-[1.15] mb-6 max-w-[700px] mx-auto">
          Révélez votre beauté naturelle à Cotonou
        </h2>
        <p className="text-[16px] leading-[28px] text-white/80 max-w-[520px] mx-auto mb-10">
          Prenez rendez-vous dès aujourd'hui et bénéficiez d'un diagnostic de peau offert avec votre première séance.
        </p>
        <Link
          href="#contact"
          className="group relative overflow-hidden inline-block bg-white border-2 border-white text-[13px] font-medium uppercase rounded-[3px] px-8 py-[16px]"
        >
          <span className="absolute inset-0 bg-[#96000F] translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out" />
          <span className="relative z-10 text-[#96000F] group-hover:text-white transition-colors duration-500">
            Prendre rendez-vous
          </span>
        </Link>
      </div>
    </section>
  );
}
