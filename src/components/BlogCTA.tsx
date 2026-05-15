import Image from "next/image";
import Link from "next/link";

export function BlogCTA() {
  return (
    <section className="flex flex-col md:flex-row">
      {/* Image */}
      <div className="flex-1 relative min-h-[350px] md:min-h-[640px]">
        <Image
          src="/images/dsc01439-1-scaled.jpg"
          alt=""
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />
      </div>

      {/* Texte */}
      <div className="flex-1 flex flex-col justify-center px-6 md:px-16 lg:px-20 py-16">
        <h3 className="font-heading text-[24px] md:text-[30px] font-normal leading-[1.33] text-black mb-6">
          LES CLÉS D&apos;UNE BONNE ROUTINE BEAUTÉ ?
        </h3>
        <p className="text-[15px] leading-[28px] text-[#555] mb-8">
          Retrouvez toutes les bonnes pratiques beauté de nos experts sur notre
          blog. Injections, Hydrafacial®, peeling, électrolyse, mais aussi astuces pour garder une peau en bonne santé et
          qui irradie au quotidien : nous vous dévoilons tout ce dont vous avez
          besoin pour rayonner jour après jour !
        </p>
        <Link
          href="/blog"
          className="inline-block bg-black text-white text-[13px] font-medium uppercase border-2 border-[#373737] rounded-[3px] px-6 py-[19px] hover:bg-gray-900 transition-colors self-start"
        >
          CONSULTER NOTRE BLOG SUR LA MEDECINE ESTHETIQUE
        </Link>
      </div>
    </section>
  );
}
