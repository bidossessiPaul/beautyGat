import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { AdminShell } from "@/components/admin/AdminShell";
import { DeleteServiceButton } from "./DeleteServiceButton";

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

  return (
    <AdminShell>
      <div className="px-8 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-[22px] font-bold text-[#1a1a1a]">Services</h1>
            <p className="text-[13px] text-[#999] mt-0.5">
              {services.length} service{services.length !== 1 ? "s" : ""} en base de données
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

        {/* Info block — static services */}
        <div className="bg-blue-50 border border-blue-200 px-5 py-3.5 mb-6 flex items-start gap-3 text-[13px] text-blue-800">
          <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 shrink-0 mt-0.5 text-blue-500">
            <path fillRule="evenodd" d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0zm-7-4a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM9 9a1 1 0 0 0 0 2v3a1 1 0 0 0 1 1h1a1 1 0 1 0 0-2v-3a1 1 0 0 0-1-1H9z" clipRule="evenodd" />
          </svg>
          <span>
            Les services créés ici génèrent automatiquement une page <code className="bg-blue-100 px-1 font-mono">/soins/[slug]</code>.
            Les pages statiques existantes continuent de fonctionner en parallèle.
          </span>
        </div>

        {/* Table */}
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
          <div className="bg-white border border-[#e8e8e8]">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#f0f0f0]">
                  {["Titre", "Slug", "Catégorie", "Statut", "Créé le", ""].map((h) => (
                    <th key={h} className="text-left px-5 py-3 text-[11px] font-bold uppercase tracking-wider text-[#999]">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-[#f9f9f9]">
                {services.map((service) => (
                  <tr key={service.id} className="hover:bg-[#fafafa] transition-colors">
                    <td className="px-5 py-3.5">
                      <p className="text-[13px] font-semibold text-[#1a1a1a] leading-tight">
                        {service.title}
                      </p>
                    </td>
                    <td className="px-5 py-3.5">
                      <Link
                        href={`/soins/${service.slug}`}
                        target="_blank"
                        className="text-[12px] font-mono text-[#6D071A] hover:underline"
                      >
                        {service.slug}
                      </Link>
                    </td>
                    <td className="px-5 py-3.5">
                      <span className="text-[12px] text-[#666] capitalize">{service.category}</span>
                    </td>
                    <td className="px-5 py-3.5">
                      <span
                        className={`text-[11px] font-semibold uppercase px-2.5 py-1 rounded-full ${
                          service.active
                            ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                            : "bg-gray-100 text-gray-500 border border-gray-200"
                        }`}
                      >
                        {service.active ? "Actif" : "Inactif"}
                      </span>
                    </td>
                    <td className="px-5 py-3.5 text-[13px] text-[#999]">
                      {new Date(service.createdAt).toLocaleDateString("fr-FR")}
                    </td>
                    <td className="px-5 py-3.5">
                      <div className="flex items-center gap-2 justify-end">
                        <Link
                          href={`/admin/services/${service.id}`}
                          className="text-[12px] font-medium text-[#555] hover:text-[#6D071A] transition-colors px-3 py-1.5 border border-[#e8e8e8] hover:border-[#6D071A]"
                        >
                          Modifier
                        </Link>
                        <DeleteServiceButton id={service.id} title={service.title} />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </AdminShell>
  );
}
