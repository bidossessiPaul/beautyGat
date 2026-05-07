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
      <div className="px-8 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-[22px] font-bold text-[#1a1a1a]">Services</h1>
            <p className="text-[13px] text-[#999] mt-0.5">
              {services.length} service{services.length !== 1 ? "s" : ""} —{" "}
              <span className="text-emerald-600 font-medium">{activeCount} actifs</span>
              {services.length - activeCount > 0 && (
                <span className="text-[#aaa]">, {services.length - activeCount} inactifs</span>
              )}
            </p>
          </div>
          <Link
            href="/admin/services/nouveau"
            className="flex items-center gap-2 bg-[#6D071A] text-white text-[13px] font-semibold px-4 py-2.5 hover:bg-black transition-colors"
          >
            <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
              <path fillRule="evenodd" d="M10 3a1 1 0 0 1 1 1v5h5a1 1 0 1 1 0 2h-5v5a1 1 0 1 1-2 0v-5H4a1 1 0 1 1 0-2h5V4a1 1 0 0 1 1-1z" clipRule="evenodd" />
            </svg>
            Nouveau service
          </Link>
        </div>

        {/* DB error */}
        {dbError && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-5 py-4 mb-6 text-[13px]">
            <strong>Erreur de connexion.</strong> Vérifiez{" "}
            <code className="bg-red-100 px-1 font-mono">DATABASE_URL</code>.
          </div>
        )}

        {/* Info block */}
        <div className="bg-blue-50 border border-blue-200 px-5 py-3.5 mb-6 flex items-start gap-3 text-[13px] text-blue-800">
          <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 shrink-0 mt-0.5 text-blue-500">
            <path fillRule="evenodd" d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0zm-7-4a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM9 9a1 1 0 0 0 0 2v3a1 1 0 0 0 1 1h1a1 1 0 1 0 0-2v-3a1 1 0 0 0-1-1H9z" clipRule="evenodd" />
          </svg>
          <span>
            Les services créés ici génèrent automatiquement une page <code className="bg-blue-100 px-1 font-mono">/soins/[slug]</code>.
            Un service <strong>inactif</strong> retourne une page 404.
          </span>
        </div>

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
