import Image from "next/image";
import Link from "next/link";

export function PhilosophySection() {
  return (
    <section className="bg-[#F8F8F8] py-[90px] px-6">
      <div className="max-w-[1300px] mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center gap-12">
        {/* Image */}
        <div className="flex-1 relative min-h-[350px] w-full">
          <Image
            src="/images/Appart-beaute-accueil-philosophie-1-scaled.jpg"
            alt="Notre philosophie"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        {/* Texte */}
        <div className="flex-1">
          <h2 className="font-heading text-[30px] font-normal text-black mb-6">
            Notre philosophie
          </h2>
          <p className="text-[15px] leading-[28px] text-[#555] mb-8">
            BeautyGate, ce n&apos;est pas qu&apos;un centre de médecine
            esthétique à Cotonou : c&apos;est le petit coup de pouce qui vous
            redonne le sourire et un sentiment de bien-être. Notre équipe est
            constituée d&apos;un médecin, d&apos;un ingénieur et d&apos;experts
            en médecin esthétique dont le plaisir est de vous accompagner dans
            votre quotidien, grâce à des soins durables, aux résultats probants.
            Nous prenons soin d&apos;adapter chaque protocole aux besoins de
            votre peau et à vos attentes esthétiques. Beauté et sécurité
            s&apos;associent, dans le cadre chaleureux de notre centre, propice
            à votre détente.
          </p>
          <Link
            href="/a-propos"
            className="inline-block bg-black text-white text-[13px] font-medium uppercase border-2 border-[#373737] rounded-[3px] px-6 py-[19px] hover:bg-gray-900 transition-colors"
          >
            Découvrir le centre et nos équipes
          </Link>
        </div>
      </div>
    </section>
  );
}
