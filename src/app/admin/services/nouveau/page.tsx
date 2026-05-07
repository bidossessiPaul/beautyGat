import Link from "next/link";
import { AdminShell } from "@/components/admin/AdminShell";
import { ServiceForm } from "@/components/admin/ServiceForm";

export default function NewServicePage() {
  return (
    <AdminShell>
      <div className="px-8 py-8 max-w-[900px]">
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
          <h1 className="text-[22px] font-bold text-[#1a1a1a]">Nouveau service</h1>
        </div>
        <ServiceForm />
      </div>
    </AdminShell>
  );
}
