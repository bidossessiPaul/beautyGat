import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { AdminShell } from "@/components/admin/AdminShell";
import { ServicesTable } from "./ServicesTable";

export const dynamic = "force-dynamic";

export default async function AdminServices() {
  let services: {
    id: string;
    slug: string;
    title: string;
    category: string;
    active: boolean;
    createdAt: Date;
  }[] = [];
  let dbError = false;

  try {
    services = await prisma.service.findMany({
      select: { id: true, slug: true, title: true, category: true, active: true, createdAt: true },
      orderBy: [{ sortOrder: "asc" }, { createdAt: "desc" }],
    });
  } catch (err) {
    console.error("[admin/services] DB error:", err);
    dbError = true;
  }

  const activeCount = services.filter((s) => s.active).length;

  return (
    <AdminShell>
      <div className="px-4 py-5 sm:px-6 sm:py-6 md:px-8 md:py-8">
        {/* Header */}
        <div className="flex items-start justify-between gap-3 mb-5">
          <div>
            <h1 className="text-[20px] md:text-[22px] font-bold text-[#1a1a1a]">Services</h1>
            <p className="text-[12px] md:text-[13px] text-[#999] mt-0.5">
              <span className="text-emerald-600 font-medium">{activeCount} actifs</span>
              {services.length - activeCount > 0 && (
                <span className="text-[#aaa]"> · {services.length - activeCount} inactifs</span>
              )}
              <span className="text-[#ccc]"> · {services.length} total</span>
            </p>
          </div>
          <Link
            href="/admin/services/nouveau"
            className="flex items-center gap-1.5 bg-[#6D071A] text-white text-[12px] md:text-[13px] font-semibold px-3 py-2 md:px-4 md:py-2.5 hover:bg-black transition-colors shrink-0"
          >
            <svg viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5">
              <path fillRule="evenodd" d="M10 3a1 1 0 0 1 1 1v5h5a1 1 0 1 1 0 2h-5v5a1 1 0 1 1-2 0v-5H4a1 1 0 1 1 0-2h5V4a1 1 0 0 1 1-1z" clipRule="evenodd" />
            </svg>
            <span className="hidden sm:inline">Nouveau service</span>
            <span className="sm:hidden">Nouveau</span>
          </Link>
        </div>

        {/* DB error */}
        {dbError && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 mb-4 text-[13px]">
            <strong>Erreur de connexion.</strong> Vérifiez <code className="bg-red-100 px-1 font-mono">DATABASE_URL</code>.
          </div>
        )}

        {/* Table avec recherche */}
        {services.length === 0 && !dbError ? (
          <div className="bg-white border border-[#e8e8e8] px-6 py-14 text-center">
            <p className="text-[#999] text-[14px] mb-4">Aucun service en base de données.</p>
            <Link
              href="/admin/services/nouveau"
              className="inline-flex items-center gap-2 bg-[#6D071A] text-white text-[13px] font-semibold px-5 py-2.5 hover:bg-black transition-colors"
            >
              Créer mon premier service
            </Link>
          </div>
        ) : (
          <ServicesTable services={services} />
        )}
      </div>
    </AdminShell>
  );
}
