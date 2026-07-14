"use client";

import Link from "next/link";
import {
  LayoutDashboard,
  BookOpen,
  Calendar,
  NotebookPen,
  BriefcaseBusiness,
  Settings,
} from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-slate-900 text-white shadow-xl">
      <div className="p-6">

        <h1 className="text-3xl font-bold mb-10">
          OpenCampus OS
        </h1>

        <nav className="space-y-3">

          <Link
            href="/dashboard"
            className="flex items-center gap-3 rounded-xl bg-cyan-500 p-3 font-semibold text-black"
          >
            <LayoutDashboard size={20} />
            Dashboard
          </Link>

          <Link
            href="/dashboard/assignments"
            className="flex items-center gap-3 rounded-xl p-3 hover:bg-slate-800 transition"
          >
            <BookOpen size={20} />
            Assignments
          </Link>

          <Link
            href="/dashboard/attendance"
            className="flex items-center gap-3 rounded-xl p-3 hover:bg-slate-800 transition"
          >
            <Calendar size={20} />
            Attendance
          </Link>

          <Link
            href="/dashboard/notes"
            className="flex items-center gap-3 rounded-xl p-3 hover:bg-slate-800 transition"
          >
            <NotebookPen size={20} />
            Notes
          </Link>

          <Link
            href="/dashboard/internships"
            className="flex items-center gap-3 rounded-xl p-3 hover:bg-slate-800 transition"
          >
            <BriefcaseBusiness size={20} />
            Internships
          </Link>

          <Link
            href="#"
            className="flex items-center gap-3 rounded-xl p-3 hover:bg-slate-800 transition"
          >
            <Settings size={20} />
            Settings
          </Link>

        </nav>

      </div>
    </aside>
  );
}