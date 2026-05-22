import Link from "next/link";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { AdminShell } from "@/components/admin/AdminShell";
import { ServiceForm } from "@/components/admin/ServiceForm";

export const dynamic = "force-dynamic";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function EditServicePage({ params }: Props) {
  const { id } = await params;

  let service;
  try {
    service = await prisma.service.findUnique({ where: { id } });
  } catch {
    // DB error — show form with empty state rather than crashing
  }

  if (service === null) notFound();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const initial = service ? { ...service, hero: service.hero as any, badges: service.badges as any, intro: service.intro as any, benefits: service.benefits as any, pricing: service.pricing as any, faq: service.faq as any, cta: service.cta as any, gallery: service.gallery as any, forWho: service.forWho as any, steps: service.steps as any, boosters: service.boosters as any } : undefined;

  return (
    <AdminShell>
      <div className="px-4 py-5 sm:px-6 sm:py-6 md:px-8 md:py-8 max-w-[900px]">
        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <Link
            href="/admin/services"
            className="text-[13px] text-[#999] hover:text-[#1a1a1a] transition-colors flex items-center gap-1"
          >
            <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 0 1-1.414 0l-6-6a1 1 0 0 1 0-1.414l6-6a1 1 0 0 1 1.414 1.414L5.414 9H17a1 1 0 1 1 0 2H5.414l4.293 4.293a1 1 0 0 1 0 1.414z" clipRule="evenodd" />
            </svg>
            Services
          </Link>
          <span className="text-[#ddd]">/</span>
          <h1 className="text-[22px] font-bold text-[#1a1a1a]">
            {service ? service.title : "Modifier le service"}
          </h1>
        </div>
        {service ? (
          <ServiceForm initial={initial} />
        ) : (
          <div className="bg-red-50 border border-red-200 text-red-700 px-5 py-4 text-[13px]">
            Impossible de charger le service. Vérifiez la connexion à la base de données.
          </div>
        )}
      </div>
    </AdminShell>
  );
}
