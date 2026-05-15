import { prisma } from "@/lib/prisma";
import { SERVICES, DATES } from "@/app/reservation-parakou/config";

export const dynamic = "force-dynamic";

export default async function EventLeadsPage() {
  const leads = await prisma.eventLead.findMany({
    orderBy: { createdAt: "desc" },
  });

  const total = leads.length;
  const paid = leads.filter(l => l.paid).length;
  const revenue = leads.filter(l => l.paid).reduce((sum, l) => sum + l.price, 0);

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="mb-6">
        <h1 className="text-[22px] font-black text-[#1C1C1C]">Réservations Parakou</h1>
        <p className="text-[13px] text-[#888] mt-1">Événement du 06 au 10 juillet 2026</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        {[
          { label: "Total leads", value: total },
          { label: "Réservations payées", value: paid, highlight: true },
          { label: "Chiffre d'affaires", value: `${revenue.toLocaleString("fr-FR")} FCFA`, highlight: true },
        ].map(s => (
          <div key={s.label} className={`border p-5 ${s.highlight ? "bg-[#6D071A] border-[#6D071A]" : "bg-white border-[#e8e8e8]"}`}>
            <p className={`text-[24px] font-black ${s.highlight ? "text-white" : "text-[#1C1C1C]"}`}>{s.value}</p>
            <p className={`text-[11px] uppercase tracking-wide mt-1 ${s.highlight ? "text-white/70" : "text-[#999]"}`}>{s.label}</p>
          </div>
        ))}
      </div>

      {/* Table */}
      {leads.length === 0 ? (
        <div className="bg-white border border-[#e8e8e8] px-6 py-12 text-center text-[13px] text-[#999]">
          Aucune réservation pour le moment.
        </div>
      ) : (
        <div className="bg-white border border-[#e8e8e8] overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-[13px]">
              <thead>
                <tr className="bg-[#faf8f6] border-b border-[#e8e8e8]">
                  {["Nom", "WhatsApp", "Soin", "Date choisie", "Montant", "Statut", "Reçu le"].map(h => (
                    <th key={h} className="px-4 py-3 text-left text-[11px] font-bold uppercase tracking-wide text-[#888]">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {leads.map(lead => {
                  const svc = SERVICES[lead.service as keyof typeof SERVICES];
                  const dateLabel = DATES.find(d => d.value === lead.date)?.label ?? lead.date ?? "—";
                  return (
                    <tr key={lead.id} className="border-b border-[#f0f0f0] hover:bg-[#faf8f6]">
                      <td className="px-4 py-3 font-semibold text-[#1C1C1C]">{lead.name}</td>
                      <td className="px-4 py-3 text-[#555]">{lead.phone}</td>
                      <td className="px-4 py-3">
                        <span className="text-[11px] font-bold uppercase tracking-wide text-[#6D071A]">
                          {svc?.label ?? lead.service}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-[#555]">{dateLabel}</td>
                      <td className="px-4 py-3 font-bold text-[#1C1C1C]">
                        {lead.price.toLocaleString("fr-FR")} FCFA
                      </td>
                      <td className="px-4 py-3">
                        <span className={`inline-block text-[10px] font-bold uppercase px-2 py-1 ${
                          lead.paid ? "bg-emerald-100 text-emerald-700" : "bg-amber-100 text-amber-700"
                        }`}>
                          {lead.paid ? "Payé" : `Étape ${lead.stepReached}`}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-[#999]">
                        {new Date(lead.createdAt).toLocaleDateString("fr-FR", {
                          day: "2-digit", month: "2-digit", hour: "2-digit", minute: "2-digit",
                        })}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
