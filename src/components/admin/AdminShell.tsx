"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV = [
  {
    href: "/admin/dashboard",
    label: "Dashboard",
    icon: (
      <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
        <path d="M2 10a8 8 0 1 1 16 0A8 8 0 0 1 2 10zm8-3a1 1 0 0 1 1 1v2h2a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1z" />
      </svg>
    ),
  },
  {
    href: "/admin/services",
    label: "Services",
    icon: (
      <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
        <path fillRule="evenodd" d="M3 4a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1zm0 4a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1zm0 4a1 1 0 0 1 1-1h7a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    href: "/admin/produits",
    label: "Produits",
    icon: (
      <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
        <path d="M3 1a1 1 0 0 0 0 2h1.22l.305 1.222a.997.997 0 0 0 .01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 0 0 0-2H6.414l1-1H14a1 1 0 0 0 .894-.553l3-6A1 1 0 0 0 17 3H6.28l-.31-1.243A1 1 0 0 0 5 1H3z" />
      </svg>
    ),
  },
  {
    href: "/admin/commandes",
    label: "Commandes",
    icon: (
      <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
        <path fillRule="evenodd" d="M5 4v3H4a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h1v2a1 1 0 1 0 2 0v-2h6v2a1 1 0 1 0 2 0v-2h1a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-1V4a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3zm8 0v3H7V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1zm-4 7a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm6 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0z" clipRule="evenodd" />
      </svg>
    ),
  },
];

function SidebarContent({ pathname, onClose }: { pathname: string; onClose?: () => void }) {
  return (
    <div className="flex flex-col h-full">
      {/* Logo */}
      <div className="px-5 py-5 border-b border-white/8">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-white font-bold text-[15px] tracking-tight">Beauty Gate</span>
              <span className="text-[9px] uppercase tracking-widest bg-[#6D071A] text-white px-1.5 py-0.5 font-bold rounded-[2px]">
                Admin
              </span>
            </div>
            <Link
              href="/"
              target="_blank"
              onClick={onClose}
              className="text-white/35 text-[11px] hover:text-white/60 transition-colors flex items-center gap-1"
            >
              <svg viewBox="0 0 16 16" fill="currentColor" className="w-3 h-3">
                <path fillRule="evenodd" d="M8 1a.75.75 0 0 1 .75.75v5.5a.75.75 0 0 1-1.5 0V1.75A.75.75 0 0 1 8 1zM4.96 3.46a.75.75 0 0 1 0 1.061A5.25 5.25 0 1 0 11.04 4.52a.75.75 0 1 1 1.06-1.06 6.75 6.75 0 1 1-9.2-.001.75.75 0 0 1 1.06 0z" clipRule="evenodd" />
              </svg>
              Voir le site
            </Link>
          </div>
          {/* Close button — mobile only */}
          {onClose && (
            <button onClick={onClose} className="md:hidden text-white/40 hover:text-white p-1">
              <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 0 1 1.414 0L10 8.586l4.293-4.293a1 1 0 1 1 1.414 1.414L11.414 10l4.293 4.293a1 1 0 0 1-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 0 1-1.414-1.414L8.586 10 4.293 5.707a1 1 0 0 1 0-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          )}
        </div>
      </div>

      {/* Section label */}
      <div className="px-5 pt-5 pb-2">
        <p className="text-[10px] font-bold uppercase tracking-[2px] text-white/25">Navigation</p>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 space-y-0.5">
        {NAV.map((item) => {
          const active =
            item.href === "/admin/dashboard"
              ? pathname === "/admin/dashboard" || pathname === "/admin"
              : pathname.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className={`flex items-center gap-3 px-3 py-2.5 text-[13px] font-medium rounded-[4px] transition-all ${
                active
                  ? "bg-[#6D071A] text-white shadow-sm"
                  : "text-white/55 hover:text-white hover:bg-white/7"
              }`}
            >
              <span className={active ? "text-white" : "text-white/40"}>{item.icon}</span>
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* Bottom */}
      <div className="px-3 pb-4 border-t border-white/8 pt-3">
        <form action="/api/admin/logout" method="POST">
          <button
            type="submit"
            className="w-full flex items-center gap-3 px-3 py-2.5 text-[13px] text-white/40 hover:text-red-400 hover:bg-white/5 rounded-[4px] transition-all"
          >
            <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
              <path fillRule="evenodd" d="M3 3a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h7a1 1 0 1 0 0-2H4V5h6a1 1 0 1 0 0-2H3zm11.707 4.293a1 1 0 0 1 0 1.414L13.414 10l1.293 1.293a1 1 0 0 1-1.414 1.414l-2-2a1 1 0 0 1 0-1.414l2-2a1 1 0 0 1 1.414 0z" clipRule="evenodd" />
              <path d="M13 10a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1z" />
            </svg>
            Déconnexion
          </button>
        </form>
      </div>
    </div>
  );
}

export function AdminShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#f4f5f7] flex">

      {/* ── Sidebar desktop (fixed) ─────────────────────────── */}
      <aside className="hidden md:flex w-[220px] bg-[#1a1a1a] flex-col shrink-0 fixed top-0 left-0 h-screen z-40">
        <SidebarContent pathname={pathname} />
      </aside>

      {/* ── Drawer mobile ───────────────────────────────────── */}
      {drawerOpen && (
        <div
          className="fixed inset-0 z-50 md:hidden"
          onClick={() => setDrawerOpen(false)}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/50" />
          {/* Panel */}
          <aside
            className="absolute top-0 left-0 w-[260px] h-full bg-[#1a1a1a] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <SidebarContent pathname={pathname} onClose={() => setDrawerOpen(false)} />
          </aside>
        </div>
      )}

      {/* ── Main ────────────────────────────────────────────── */}
      <div className="flex-1 min-w-0 md:ml-[220px] flex flex-col">

        {/* Top bar — mobile only */}
        <header className="md:hidden sticky top-0 z-50 bg-[#1a1a1a] flex items-center justify-between px-4 h-14 shrink-0">
          <div className="flex items-center gap-2">
            <span className="text-white font-bold text-[14px]">Beauty Gate</span>
            <span className="text-[9px] uppercase tracking-widest bg-[#6D071A] text-white px-1.5 py-0.5 font-bold rounded-[2px]">
              Admin
            </span>
          </div>
          <button
            onClick={() => setDrawerOpen(true)}
            className="text-white/60 hover:text-white p-1"
            aria-label="Menu"
          >
            <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
              <path fillRule="evenodd" d="M3 5a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1zm0 5a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1zm0 5a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1z" clipRule="evenodd" />
            </svg>
          </button>
        </header>

        {/* Page content */}
        <main className="flex-1 min-w-0">{children}</main>
      </div>
    </div>
  );
}
