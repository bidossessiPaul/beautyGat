import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingContact } from "@/components/FloatingContact";
import { JsonLd } from "@/components/JsonLd";
import { buildMetadata, breadcrumbSchema } from "@/lib/seo";
import { blogArticles } from "@/data/blog";

export const metadata = buildMetadata({
  title: "Blog beauté & esthétique à Cotonou",
  description:
    "Conseils, guides et explications sur les soins esthétiques à Cotonou : choix d'institut, épilation, Hydrafacial, peaux africaines et métissées.",
  path: "/blog",
});

export default function BlogIndexPage() {
  return (
    <>
      <JsonLd schema={breadcrumbSchema([
        { name: "Accueil", href: "/" },
        { name: "Blog", href: "/blog" },
      ])} />
      <Header />
      <main className="min-h-screen bg-[#faf8f6]">
        <section className="relative bg-black pt-[90px] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
          <div className="relative z-10 max-w-[1300px] mx-auto px-6 md:px-10 py-24 md:py-28">
            <p className="text-[#f0b8b8] text-xs font-bold uppercase tracking-[0.25em] mb-4">
              Academy Beauty Gate · Cotonou, Bénin
            </p>
            <h1 className="text-white text-[38px] md:text-[54px] font-bold leading-[1.1] mb-5 max-w-[620px]">
              Blog beauté & esthétique
            </h1>
            <p className="text-white/70 text-[15px] md:text-[17px] leading-[28px] max-w-[560px]">
              Guides, explications et conseils d&apos;expert pour comprendre nos soins et prendre soin de votre peau à Cotonou.
            </p>
          </div>
        </section>

        <section className="max-w-[1300px] mx-auto px-6 md:px-10 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogArticles.map((article) => (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}`}
                className="group bg-white border border-[#e8e8e8] hover:border-[#6D071A]/40 hover:shadow-[0_8px_40px_rgba(109,7,26,0.12)] transition-all duration-300 overflow-hidden flex flex-col"
              >
                <div className="relative w-full h-[220px] overflow-hidden bg-[#ede9e9]">
                  <Image
                    src={article.heroImage}
                    alt={article.heroImageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-[1.05] transition-transform duration-500 ease-out"
                  />
                </div>
                <div className="flex-1 flex flex-col px-6 py-6">
                  <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#6D071A] mb-2">
                    {article.category} · {article.readingTime} de lecture
                  </span>
                  <h2 className="text-[19px] md:text-[21px] font-bold text-[#1a1a1a] group-hover:text-[#6D071A] transition-colors leading-tight mb-3">
                    {article.title}
                  </h2>
                  <p className="text-[14px] text-[#666] leading-[1.6] flex-1">
                    {article.excerpt}
                  </p>
                  <span className="mt-4 text-[#6D071A] font-bold text-sm inline-flex items-center gap-2">
                    Lire l&apos;article
                    <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="bg-[#6D071A] py-14">
          <div className="max-w-[1300px] mx-auto px-6 md:px-10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-white/50 mb-2">
                Une question sur un soin ?
              </p>
              <p className="text-white font-bold text-xl leading-tight">
                Prenez rendez-vous — consultation offerte
              </p>
            </div>
            <Link
              href="/contact"
              className="group relative overflow-hidden shrink-0 bg-white text-[#6D071A] px-8 py-3.5 text-[11px] font-bold uppercase tracking-[0.2em] inline-block"
            >
              <span className="absolute inset-0 bg-[#1C1C1C] translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out" />
              <span className="relative z-10 group-hover:text-white transition-colors duration-500">
                Nous contacter
              </span>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingContact />
    </>
  );
}
