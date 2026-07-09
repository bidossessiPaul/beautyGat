import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingContact } from "@/components/FloatingContact";
import { JsonLd } from "@/components/JsonLd";
import { blogArticles, getBlogArticleBySlug } from "@/data/blog";
import { buildMetadata, breadcrumbSchema, articleSchema, faqSchema } from "@/lib/seo";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogArticles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const article = getBlogArticleBySlug(slug);
  if (!article) return {};
  return buildMetadata({
    title: article.title,
    description: article.metaDescription,
    path: `/blog/${article.slug}`,
    image: article.heroImage,
  });
}

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getBlogArticleBySlug(slug);
  if (!article) notFound();

  const schemas = [
    articleSchema({
      slug: article.slug,
      headline: article.title,
      description: article.metaDescription,
      image: article.heroImage,
      datePublished: article.publishedDate,
      dateModified: article.updatedDate,
    }),
    ...(article.faq.length > 0 ? [faqSchema(article.faq)] : []),
    breadcrumbSchema([
      { name: "Accueil", href: "/" },
      { name: "Blog", href: "/blog" },
      { name: article.title, href: `/blog/${article.slug}` },
    ]),
  ];

  const formattedDate = new Date(article.publishedDate).toLocaleDateString("fr-FR", {
    day: "numeric", month: "long", year: "numeric",
  });

  return (
    <>
      <JsonLd schema={schemas} />
      <Header />
      <main className="min-h-screen bg-white">
        <section className="relative bg-black pt-[90px] overflow-hidden">
          <div className="absolute inset-0 opacity-40">
            <Image
              src={article.heroImage}
              alt={article.heroImageAlt}
              fill
              sizes="100vw"
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30" />
          <div className="relative z-10 max-w-[860px] mx-auto px-6 md:px-10 py-24 md:py-28">
            <p className="text-[#f0b8b8] text-xs font-bold uppercase tracking-[0.25em] mb-4">
              {article.category} · {formattedDate} · {article.readingTime} de lecture
            </p>
            <h1 className="text-white text-[32px] md:text-[46px] font-bold leading-[1.15] mb-5">
              {article.title}
            </h1>
          </div>
        </section>

        <article className="max-w-[760px] mx-auto px-6 md:px-10 py-16">
          <p className="text-[17px] md:text-[19px] leading-[32px] text-[#333] font-medium mb-12 pb-8 border-b border-[#eee]">
            {article.intro}
          </p>

          {article.sections.map((section, i) => (
            <div key={i} className="mb-10">
              {section.heading && (
                <h2 className="text-[22px] md:text-[26px] font-bold text-[#1a1a1a] mb-4 leading-tight">
                  {section.heading}
                </h2>
              )}
              {section.paragraphs.map((p, j) => (
                <p key={j} className="text-[15px] leading-[28px] text-[#444] mb-4">
                  {p}
                </p>
              ))}
              {section.list && (
                <ul className="space-y-2 mt-2">
                  {section.list.map((item, k) => (
                    <li key={k} className="flex items-start gap-3">
                      <span className="mt-2 shrink-0 w-1.5 h-1.5 rounded-full bg-[#6D071A]" />
                      <span className="text-[15px] leading-[26px] text-[#444]">{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          {article.faq.length > 0 && (
            <div className="mt-14 pt-10 border-t border-[#eee]">
              <h2 className="text-[22px] md:text-[26px] font-bold text-[#1a1a1a] mb-6">
                Questions fréquentes
              </h2>
              <div className="space-y-3">
                {article.faq.map((item, i) => (
                  <details key={i} className="group bg-[#faf8f6] border border-[#eee] rounded-[3px] px-5 py-4">
                    <summary className="cursor-pointer font-bold text-[15px] text-[#1a1a1a] flex items-center justify-between gap-4 list-none">
                      {item.question}
                      <span className="shrink-0 text-[#6D071A] group-open:rotate-45 transition-transform duration-200 text-xl leading-none">+</span>
                    </summary>
                    <p className="text-[14px] leading-[24px] text-[#555] mt-3">{item.answer}</p>
                  </details>
                ))}
              </div>
            </div>
          )}

          <div className="mt-14 pt-10 border-t border-[#eee]">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#6D071A] mb-4">
              Pour aller plus loin
            </p>
            <div className="flex flex-wrap gap-3">
              {article.relatedLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[13px] font-bold text-[#1a1a1a] border border-[#ddd] hover:border-[#6D071A] hover:text-[#6D071A] transition-colors px-5 py-2.5 rounded-[3px]"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </article>

        <section className="bg-[#6D071A] py-14">
          <div className="max-w-[1300px] mx-auto px-6 md:px-10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-white/50 mb-2">
                Vous hésitez ?
              </p>
              <p className="text-white font-bold text-xl leading-tight">
                Prenez rendez-vous — consultation offerte
              </p>
            </div>
            <Link
              href="/rendez-vous"
              className="group relative overflow-hidden shrink-0 bg-white text-[#6D071A] px-8 py-3.5 text-[11px] font-bold uppercase tracking-[0.2em] inline-block"
            >
              <span className="absolute inset-0 bg-[#1C1C1C] translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out" />
              <span className="relative z-10 group-hover:text-white transition-colors duration-500">
                Prendre rendez-vous
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
