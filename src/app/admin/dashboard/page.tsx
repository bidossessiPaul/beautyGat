import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { AdminShell } from "@/components/admin/AdminShell";

export const dynamic = "force-dynamic";

function formatPrice(n: number) {
  return n.toLocaleString("fr-FR") + " FCFA";
}

const statusStyle: Record<string, string> = {
  paid: "bg-emerald-50 text-emerald-700 border border-emerald-200",
  pending: "bg-amber-50 text-amber-700 border border-amber-200",
  failed: "bg-red-50 text-red-600 border border-red-200",
};
const statusLabel: Record<string, string> = {
  paid: "Payé",
  pending: "En attente",
  failed: "Échoué",
};

export default async function AdminDashboard() {
  let totalProducts = 0;
  let totalOrders = 0;
  let totalServices = 0;
  let paidOrders = 0;
  let revenueSum = 0;
  let recentOrders: {
    id: string;
    customerName: string;
    customerEmail: string;
    createdAt: Date;
    totalAmount: number;
    status: string;
  }[] = [];
  let dbError = false;

  try {
    [totalProducts, totalOrders, totalServices, recentOrders] = await Promise.all([
      prisma.product.count(),
      prisma.order.count(),
      prisma.service.count(),
      prisma.order.findMany({ orderBy: { createdAt: "desc" }, take: 8 }),
    ]);
    paidOrders = await prisma.order.count({ where: { status: "paid" } });
    const rev = await prisma.order.aggregate({
      where: { status: "paid" },
      _sum: { totalAmount: true },
    });
    revenueSum = rev._sum.totalAmount ?? 0;
  } catch (err) {
    console.error("[admin/dashboard] DB error:", err);
    dbError = true;
  }

  const today = new Date().toLocaleDateString("fr-FR", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <AdminShell>
      <div className="px-4 py-5 sm:px-6 sm:py-6 md:px-8 md:py-8">
        {/* Page header */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6 md:mb-8">
          <div>
            <h1 className="text-[20px] md:text-[22px] font-bold text-[#1a1a1a]">Tableau de bord</h1>
            <p className="text-[13px] text-[#999] mt-0.5 capitalize">{today}</p>
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
          <div className="bg-red-50 border border-red-200 text-red-700 px-5 py-4 mb-8 text-[13px] flex items-start gap-3">
            <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 shrink-0 mt-0.5">
              <path fillRule="evenodd" d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0zm-7 4a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-1-9a1 1 0 0 0-1 1v4a1 1 0 1 0 2 0V6a1 1 0 0 0-1-1z" clipRule="evenodd" />
            </svg>
            <div>
              <strong>Erreur de connexion à la base de données.</strong>{" "}
              Vérifiez que{" "}
              <code className="bg-red-100 px-1 font-mono">DATABASE_URL</code> est configurée dans vos variables d&apos;environnement.
            </div>
          </div>
        )}

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[
            {
              label: "Services actifs",
              value: totalServices,
              href: "/admin/services",
              color: "#6D071A",
              icon: (
                <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                  <path fillRule="evenodd" d="M3 4a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1zm0 4a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1zm0 4a1 1 0 0 1 1-1h7a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1z" clipRule="evenodd" />
                </svg>
              ),
            },
            {
              label: "Produits boutique",
              value: totalProducts,
              href: "/admin/produits",
              color: "#1a1a1a",
              icon: (
                <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                  <path d="M3 1a1 1 0 0 0 0 2h1.22l.305 1.222a.997.997 0 0 0 .01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 0 0 0-2H6.414l1-1H14a1 1 0 0 0 .894-.553l3-6A1 1 0 0 0 17 3H6.28l-.31-1.243A1 1 0 0 0 5 1H3z" />
                </svg>
              ),
            },
            {
              label: "Commandes totales",
              value: totalOrders,
              href: "/admin/commandes",
              color: "#374151",
              icon: (
                <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                  <path fillRule="evenodd" d="M5 4v3H4a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h1v2a1 1 0 1 0 2 0v-2h6v2a1 1 0 1 0 2 0v-2h1a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-1V4a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3zm8 0v3H7V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1z" clipRule="evenodd" />
                </svg>
              ),
            },
            {
              label: "Revenus (payés)",
              value: formatPrice(revenueSum),
              href: "/admin/commandes",
              color: "#059669",
              icon: (
                <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                  <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 0 1-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 0 1-.567.267z" />
                  <path fillRule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm1-13a1 1 0 1 0-2 0v.092a4.535 4.535 0 0 0-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 1 0-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 1 0 2 0v-.092a4.535 4.535 0 0 0 1.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0 0 11 9.092V7.151c.391.127.68.317.843.504a1 1 0 1 0 1.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                </svg>
              ),
            },
          ].map((stat) => (
            <Link
              key={stat.label}
              href={stat.href}
              className="bg-white border border-[#e8e8e8] p-5 hover:border-[#d0d0d0] hover:shadow-sm transition-all group"
            >
              <div
                className="w-9 h-9 rounded-[6px] flex items-center justify-center mb-4 text-white"
                style={{ backgroundColor: stat.color }}
              >
                {stat.icon}
              </div>
              <p className="text-[22px] font-bold text-[#1a1a1a] leading-none mb-1.5">
                {stat.value}
              </p>
              <p className="text-[12px] text-[#999] uppercase tracking-wide">{stat.label}</p>
            </Link>
          ))}
        </div>

        {/* Quick actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Link
            href="/admin/services/nouveau"
            className="bg-[#6D071A] text-white p-5 flex items-center gap-4 hover:bg-[#560616] transition-colors"
          >
            <div className="w-10 h-10 bg-white/15 rounded-[6px] flex items-center justify-center shrink-0">
              <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                <path fillRule="evenodd" d="M10 3a1 1 0 0 1 1 1v5h5a1 1 0 1 1 0 2h-5v5a1 1 0 1 1-2 0v-5H4a1 1 0 1 1 0-2h5V4a1 1 0 0 1 1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <p className="text-[14px] font-bold">Créer un service</p>
              <p className="text-[12px] opacity-65 mt-0.5">Page générée automatiquement</p>
            </div>
          </Link>

          <Link
            href="/admin/produits/nouveau"
            className="bg-white border border-[#e8e8e8] text-[#1a1a1a] p-5 flex items-center gap-4 hover:border-[#6D071A] hover:shadow-sm transition-all"
          >
            <div className="w-10 h-10 bg-[#fdf0f2] rounded-[6px] flex items-center justify-center shrink-0">
              <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-[#6D071A]">
                <path fillRule="evenodd" d="M10 3a1 1 0 0 1 1 1v5h5a1 1 0 1 1 0 2h-5v5a1 1 0 1 1-2 0v-5H4a1 1 0 1 1 0-2h5V4a1 1 0 0 1 1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <p className="text-[14px] font-bold">Ajouter un produit</p>
              <p className="text-[12px] text-[#999] mt-0.5">Nouvelle entrée boutique</p>
            </div>
          </Link>

          <Link
            href="/admin/commandes"
            className="bg-white border border-[#e8e8e8] text-[#1a1a1a] p-5 flex items-center gap-4 hover:border-[#6D071A] hover:shadow-sm transition-all"
          >
            <div className="w-10 h-10 bg-[#f0fdf4] rounded-[6px] flex items-center justify-center shrink-0">
              <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-emerald-600">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 1.414-1.414L8 12.586l7.293-7.293a1 1 0 0 1 1.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <p className="text-[14px] font-bold">Commandes payées</p>
              <p className="text-[12px] text-[#999] mt-0.5">{paidOrders} sur {totalOrders} au total</p>
            </div>
          </Link>
        </div>

        {/* Recent orders */}
        {recentOrders.length > 0 && (
          <div className="bg-white border border-[#e8e8e8]">
            <div className="px-4 sm:px-6 py-4 border-b border-[#f0f0f0] flex items-center justify-between">
              <h2 className="text-[14px] font-bold text-[#1a1a1a]">Commandes récentes</h2>
              <Link href="/admin/commandes" className="text-[12px] text-[#6D071A] hover:underline font-medium">
                Tout voir →
              </Link>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[360px]">
                <thead>
                  <tr className="border-b border-[#f0f0f0]">
                    <th className="text-left px-4 sm:px-6 py-3 text-[11px] font-bold uppercase tracking-wider text-[#999]">Client</th>
                    <th className="hidden sm:table-cell text-left px-4 sm:px-6 py-3 text-[11px] font-bold uppercase tracking-wider text-[#999]">Email</th>
                    <th className="text-left px-4 sm:px-6 py-3 text-[11px] font-bold uppercase tracking-wider text-[#999]">Montant</th>
                    <th className="text-left px-4 sm:px-6 py-3 text-[11px] font-bold uppercase tracking-wider text-[#999]">Statut</th>
                    <th className="hidden md:table-cell text-left px-4 sm:px-6 py-3 text-[11px] font-bold uppercase tracking-wider text-[#999]">Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#f9f9f9]">
                  {recentOrders.map((order) => (
                    <tr key={order.id} className="hover:bg-[#fafafa] transition-colors">
                      <td className="px-4 sm:px-6 py-3.5 text-[13px] font-semibold text-[#1a1a1a]">
                        {order.customerName}
                      </td>
                      <td className="hidden sm:table-cell px-4 sm:px-6 py-3.5 text-[13px] text-[#666]">
                        {order.customerEmail}
                      </td>
                      <td className="px-4 sm:px-6 py-3.5 text-[13px] font-bold text-[#1a1a1a] whitespace-nowrap">
                        {formatPrice(order.totalAmount)}
                      </td>
                      <td className="px-4 sm:px-6 py-3.5">
                        <span className={`text-[11px] font-semibold uppercase px-2 py-0.5 rounded-full ${statusStyle[order.status] ?? "bg-gray-100 text-gray-600 border border-gray-200"}`}>
                          {statusLabel[order.status] ?? order.status}
                        </span>
                      </td>
                      <td className="hidden md:table-cell px-4 sm:px-6 py-3.5 text-[13px] text-[#999]">
                        {new Date(order.createdAt).toLocaleDateString("fr-FR")}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {recentOrders.length === 0 && !dbError && (
          <div className="bg-white border border-[#e8e8e8] px-6 py-12 text-center">
            <p className="text-[#999] text-[14px]">Aucune commande pour le moment.</p>
          </div>
        )}
      </div>
    </AdminShell>
  );
}
