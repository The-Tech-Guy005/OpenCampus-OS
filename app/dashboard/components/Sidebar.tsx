"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "@/lib/AuthContext";
import {
  LayoutDashboard,
  BookOpen,
  Calendar,
  NotebookPen,
  BriefcaseBusiness,
  Settings,
  LogOut,
} from "lucide-react";

export default function Sidebar() {
  const pathname = usePathname();
  const { logout } = useAuth();

  const isActive = (href: string) => {
    if (href === "/dashboard" && pathname === "/dashboard") return true;
    if (href !== "/dashboard" && pathname.startsWith(href)) return true;
    return false;
  };

  const navLinks = [
    { href: "/dashboard", icon: LayoutDashboard, label: "Dashboard" },
    { href: "/dashboard/assignments", icon: BookOpen, label: "Assignments" },
    { href: "/dashboard/attendance", icon: Calendar, label: "Attendance" },
    { href: "/dashboard/notes", icon: NotebookPen, label: "Notes" },
    { href: "/dashboard/internships", icon: BriefcaseBusiness, label: "Internships" },
    { href: "/dashboard/settings", icon: Settings, label: "Settings" },
  ];

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-slate-900 text-white shadow-xl flex flex-col">
      <div className="p-6 flex-1">

        <h1 className="text-3xl font-bold mb-10">
          OpenCampus OS
        </h1>

        <nav className="space-y-3">

          {navLinks.map((link) => {
            const Icon = link.icon;
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center gap-3 rounded-xl p-3 font-semibold transition ${
                  active
                    ? "bg-cyan-500 text-black"
                    : "text-white hover:bg-slate-800"
                }`}
              >
                <Icon size={20} />
                {link.label}
              </Link>
            );
          })}

        </nav>

      </div>

      {/* Logout button at bottom */}
      <div className="p-6 border-t border-slate-700">
        <button
          onClick={logout}
          className="w-full flex items-center gap-3 rounded-xl p-3 font-semibold text-white hover:bg-slate-800 transition"
        >
          <LogOut size={20} />
          Logout
        </button>
      </div>
    </aside>
  );
}