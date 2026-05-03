import Link from "next/link";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

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

export default async function AdminCommandes() {
  const orders = await prisma.order.findMany({ orderBy: { createdAt: "desc" } });

  return (
    <div className="min-h-screen bg-[#fafafa]">
      <header className="bg-white border-b border-[#f0f0f0] px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-[18px] font-bold text-black">Beauty Gate</span>
          <span className="text-[11px] uppercase tracking-wider bg-[#6D071A] text-white px-2 py-0.5 font-semibold">Admin</span>
        </div>
        <nav className="flex items-center gap-6 text-[13px] font-medium">
          <Link href="/admin/dashboard" className="text-[#555] hover:text-black">Dashboard</Link>
          <Link href="/admin/produits" className="text-[#555] hover:text-black">Produits</Link>
          <Link href="/admin/commandes" className="text-[#6D071A] font-semibold">Commandes</Link>
          <Link href="/" target="_blank" className="text-[#555] hover:text-black">← Site</Link>
        </nav>
      </header>

      <main className="max-w-[1100px] mx-auto px-6 py-10">
        <h1 className="text-[24px] font-bold text-black mb-8">Commandes ({orders.length})</h1>

        {orders.length === 0 ? (
          <div className="bg-white border border-[#f0f0f0] p-16 text-center text-[#999]">
            Aucune commande pour le moment.
          </div>
        ) : (
          <div className="bg-white border border-[#f0f0f0]">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-[#f0f0f0] bg-[#fafafa]">
                    {["Client", "Email", "Téléphone", "Articles", "Total", "Statut", "Date"].map((h) => (
                      <th key={h} className="text-left px-5 py-3 text-[11px] font-bold uppercase tracking-wider text-[#999]">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#f0f0f0]">
                  {orders.map((order) => {
                    let items: { name: string; quantity: number }[] = [];
                    try { items = JSON.parse(order.items); } catch { /* noop */ }

                    return (
                      <tr key={order.id} className="hover:bg-[#fafafa] transition-colors">
                        <td className="px-5 py-4 text-[14px] font-semibold text-black whitespace-nowrap">{order.customerName}</td>
                        <td className="px-5 py-4 text-[13px] text-[#555]">{order.customerEmail}</td>
                        <td className="px-5 py-4 text-[13px] text-[#555]">{order.customerPhone}</td>
                        <td className="px-5 py-4">
                          <ul className="text-[12px] text-[#555] space-y-0.5">
                            {items.map((item, i) => (
                              <li key={i}>{item.name} × {item.quantity}</li>
                            ))}
                          </ul>
                        </td>
                        <td className="px-5 py-4 text-[14px] font-bold text-black whitespace-nowrap">{formatPrice(order.totalAmount)}</td>
                        <td className="px-5 py-4">
                          <span className={`text-[11px] font-bold uppercase px-2.5 py-1 rounded-full ${statusColor[order.status] ?? "bg-gray-100 text-gray-600"}`}>
                            {statusLabel[order.status] ?? order.status}
                          </span>
                        </td>
                        <td className="px-5 py-4 text-[12px] text-[#999] whitespace-nowrap">
                          {new Date(order.createdAt).toLocaleDateString("fr-FR", { day: "2-digit", month: "short", year: "numeric" })}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
