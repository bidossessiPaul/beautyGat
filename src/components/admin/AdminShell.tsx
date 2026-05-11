"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Sparkles,
  ShoppingBag,
  FolderOpen,
  ClipboardList,
  CalendarCheck,
  LogOut,
  X,
  Menu,
  ExternalLink,
} from "lucide-react";

const NAV = [
  { href: "/admin/dashboard", label: "Dashboard",      icon: LayoutDashboard },
  { href: "/admin/rdv",       label: "Rendez-vous",    icon: CalendarCheck },
  { href: "/admin/services",  label: "Services",       icon: Sparkles },
  { href: "/admin/produits",  label: "Produits",       icon: ShoppingBag },
  { href: "/admin/categories",label: "Catégories",     icon: FolderOpen },
  { href: "/admin/commandes", label: "Commandes",      icon: ClipboardList },
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
              <ExternalLink className="w-3 h-3" />
              Voir le site
            </Link>
          </div>
          {onClose && (
            <button onClick={onClose} className="md:hidden text-white/40 hover:text-white p-1">
              <X className="w-5 h-5" />
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
          const Icon = item.icon;
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
              <Icon className={`w-4 h-4 shrink-0 ${active ? "text-white" : "text-white/40"}`} />
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
            <LogOut className="w-4 h-4 shrink-0" />
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
          <div className="absolute inset-0 bg-black/50" />
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
            <Menu className="w-5 h-5" />
          </button>
        </header>

        {/* Page content */}
        <main className="flex-1 min-w-0">{children}</main>
      </div>
    </div>
  );
}
