import Link from "next/link";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export default async function AdminDashboard() {
  const [totalProducts, totalOrders, recentOrders] = await Promise.all([
    prisma.product.count(),
    prisma.order.count(),
    prisma.order.findMany({ orderBy: { createdAt: "desc" }, take: 5 }),
  ]);

  const paidOrders = await prisma.order.count({ where: { status: "paid" } });
  const totalRevenue = await prisma.order.aggregate({
    where: { status: "paid" },
    _sum: { totalAmount: true },
  });

  function formatPrice(n: number) {
    return n.toLocaleString("fr-FR") + " FCFA";
  }

  const statusColor: Record<string, string> = {
    paid: "bg-green-100 text-green-700",
    pending: "bg-yellow-100 text-yellow-700",
    failed: "bg-red-100 text-red-600",
  };
  const statusLabel: Record<string, string> = {
    paid: "Payé", pending: "En attente", failed: "Échoué",
  };

  return (
    <div className="min-h-screen bg-[#fafafa]">
      {/* Header admin */}
      <header className="bg-white border-b border-[#f0f0f0] px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-[18px] font-bold text-black">Beauty Gate</span>
          <span className="text-[11px] uppercase tracking-wider bg-[#6D071A] text-white px-2 py-0.5 font-semibold">Admin</span>
        </div>
        <nav className="flex items-center gap-6 text-[13px] font-medium">
          <Link href="/admin/dashboard" className="text-[#6D071A] font-semibold">Dashboard</Link>
          <Link href="/admin/produits" className="text-[#555] hover:text-black transition-colors">Produits</Link>
          <Link href="/admin/commandes" className="text-[#555] hover:text-black transition-colors">Commandes</Link>
          <Link href="/" target="_blank" className="text-[#555] hover:text-black transition-colors">← Site</Link>
          <LogoutButton />
        </nav>
      </header>

      <main className="max-w-[1100px] mx-auto px-6 py-10">
        <h1 className="text-[24px] font-bold text-black mb-8">Tableau de bord</h1>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {[
            { label: "Produits", value: totalProducts, icon: "📦" },
            { label: "Commandes", value: totalOrders, icon: "🛒" },
            { label: "Commandes payées", value: paidOrders, icon: "✅" },
            { label: "Revenus", value: formatPrice(totalRevenue._sum.totalAmount ?? 0), icon: "💰" },
          ].map((stat) => (
            <div key={stat.label} className="bg-white border border-[#f0f0f0] p-5">
              <p className="text-[24px] mb-1">{stat.icon}</p>
              <p className="text-[22px] font-bold text-black">{stat.value}</p>
              <p className="text-[12px] text-[#999] uppercase tracking-wide mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Accès rapides */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          <Link href="/admin/produits/nouveau" className="bg-[#6D071A] text-white p-6 flex items-center gap-4 hover:bg-black transition-colors group">
            <span className="text-[32px]">+</span>
            <div>
              <p className="text-[16px] font-bold">Ajouter un produit</p>
              <p className="text-[12px] opacity-75">Nouveau produit dans la boutique</p>
            </div>
          </Link>
          <Link href="/admin/commandes" className="bg-white border-2 border-[#6D071A] text-[#6D071A] p-6 flex items-center gap-4 hover:bg-[#6D071A] hover:text-white transition-colors group">
            <span className="text-[32px]">📋</span>
            <div>
              <p className="text-[16px] font-bold">Voir les commandes</p>
              <p className="text-[12px] opacity-75">{totalOrders} commandes au total</p>
            </div>
          </Link>
        </div>

        {/* Commandes récentes */}
        {recentOrders.length > 0 && (
          <div className="bg-white border border-[#f0f0f0]">
            <div className="px-6 py-4 border-b border-[#f0f0f0] flex items-center justify-between">
              <h2 className="text-[15px] font-bold text-black">Commandes récentes</h2>
              <Link href="/admin/commandes" className="text-[12px] text-[#6D071A] hover:underline">Tout voir →</Link>
            </div>
            <div className="divide-y divide-[#f0f0f0]">
              {recentOrders.map((order) => (
                <div key={order.id} className="px-6 py-4 flex items-center justify-between">
                  <div>
                    <p className="text-[14px] font-semibold text-black">{order.customerName}</p>
                    <p className="text-[12px] text-[#999]">{order.customerEmail} · {new Date(order.createdAt).toLocaleDateString("fr-FR")}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-[14px] font-bold text-black">{formatPrice(order.totalAmount)}</span>
                    <span className={`text-[11px] font-semibold uppercase px-2.5 py-1 rounded-full ${statusColor[order.status] ?? "bg-gray-100 text-gray-600"}`}>
                      {statusLabel[order.status] ?? order.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

function LogoutButton() {
  return (
    <form action="/api/admin/logout" method="POST">
      <button type="submit" className="text-[#555] hover:text-red-500 transition-colors">
        Déconnexion
      </button>
    </form>
  );
}
