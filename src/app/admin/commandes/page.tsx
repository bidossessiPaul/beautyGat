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

export default async function AdminCommandes() {
  let orders: import("@prisma/client").Order[] = [];
  let dbError = false;
  try {
    orders = await prisma.order.findMany({ orderBy: { createdAt: "desc" } });
  } catch (err) {
    console.error("[admin/commandes] DB error:", err);
    dbError = true;
  }

  return (
    <AdminShell>
      <div className="px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-[22px] font-bold text-[#1a1a1a]">Commandes</h1>
          <p className="text-[13px] text-[#999] mt-0.5">
            {orders.length} commande{orders.length !== 1 ? "s" : ""} au total
          </p>
        </div>

        {dbError && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-5 py-4 mb-6 text-[13px]">
            <strong>Erreur de connexion.</strong> Vérifiez{" "}
            <code className="bg-red-100 px-1 font-mono">DATABASE_URL</code>.
          </div>
        )}

        {orders.length === 0 && !dbError ? (
          <div className="bg-white border border-[#e8e8e8] px-6 py-14 text-center text-[#999] text-[14px]">
            Aucune commande pour le moment.
          </div>
        ) : (
          <div className="bg-white border border-[#e8e8e8] overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#f0f0f0]">
                  {["Client", "Email", "Téléphone", "Articles", "Total", "Statut", "Date"].map((h) => (
                    <th key={h} className="text-left px-5 py-3 text-[11px] font-bold uppercase tracking-wider text-[#999]">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-[#f9f9f9]">
                {orders.map((order) => {
                  let items: { name: string; quantity: number }[] = [];
                  try {
                    items = JSON.parse(order.items);
                  } catch { /* noop */ }

                  return (
                    <tr key={order.id} className="hover:bg-[#fafafa] transition-colors">
                      <td className="px-5 py-3.5 text-[13px] font-semibold text-[#1a1a1a] whitespace-nowrap">
                        {order.customerName}
                      </td>
                      <td className="px-5 py-3.5 text-[13px] text-[#666]">{order.customerEmail}</td>
                      <td className="px-5 py-3.5 text-[13px] text-[#666] whitespace-nowrap">{order.customerPhone}</td>
                      <td className="px-5 py-3.5">
                        <ul className="text-[12px] text-[#666] space-y-0.5">
                          {items.map((item, i) => (
                            <li key={i}>{item.name} × {item.quantity}</li>
                          ))}
                        </ul>
                      </td>
                      <td className="px-5 py-3.5 text-[13px] font-bold text-[#1a1a1a] whitespace-nowrap">
                        {formatPrice(order.totalAmount)}
                      </td>
                      <td className="px-5 py-3.5">
                        <span
                          className={`text-[11px] font-semibold uppercase px-2.5 py-1 rounded-full ${
                            statusStyle[order.status] ?? "bg-gray-100 text-gray-600 border border-gray-200"
                          }`}
                        >
                          {statusLabel[order.status] ?? order.status}
                        </span>
                      </td>
                      <td className="px-5 py-3.5 text-[12px] text-[#999] whitespace-nowrap">
                        {new Date(order.createdAt).toLocaleDateString("fr-FR", {
                          day: "2-digit",
                          month: "short",
                          year: "numeric",
                        })}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </AdminShell>
  );
}
