import RecentActivity from "./components/RecentActivity";
import StatCard from "./components/StatCard";
import Schedule from "./components/Schedule";
import AssignmentList from "./components/AssignmentList";

import {
  CalendarCheck,
  ClipboardList,
  Trophy,
  GraduationCap,
  BookOpen,
  Clock3,
} from "lucide-react";

export default function Dashboard() {
  return (
    <main className="space-y-8">

      {/* =========================
          HERO SECTION
      ========================== */}

      <section className="rounded-3xl bg-gradient-to-r from-cyan-500 to-blue-600 p-8 text-white shadow-lg">

        <div className="flex flex-col gap-8 xl:flex-row xl:items-center xl:justify-between">

          <div className="max-w-2xl">

            <h1 className="text-4xl font-bold">
              Welcome back, Hriday 👋
            </h1>

            <p className="mt-3 text-cyan-100 text-lg">
              Here's a quick overview of your academic journey today.
            </p>

          </div>

          <div className="grid grid-cols-3 gap-4">

            <div className="rounded-2xl bg-white/20 p-4 backdrop-blur-sm">

              <p className="text-sm text-cyan-100">
                Semester
              </p>

              <h3 className="mt-2 text-2xl font-bold">
                5th
              </h3>

            </div>

            <div className="rounded-2xl bg-white/20 p-4 backdrop-blur-sm">

              <p className="text-sm text-cyan-100">
                Branch
              </p>

              <h3 className="mt-2 text-2xl font-bold">
                CSE
              </h3>

            </div>

            <div className="rounded-2xl bg-white/20 p-4 backdrop-blur-sm">

              <p className="text-sm text-cyan-100">
                CGPA
              </p>

              <h3 className="mt-2 text-2xl font-bold">
                8.9
              </h3>

            </div>

          </div>

        </div>

      </section>

      {/* =========================
          STATISTICS
      ========================== */}

      <section className="grid gap-6 md:grid-cols-3">

        <StatCard
          title="Attendance"
          value="92%"
          icon={CalendarCheck}
          color="bg-emerald-500"
        />

        <StatCard
          title="Assignments"
          value="5"
          icon={ClipboardList}
          color="bg-orange-500"
        />

        <StatCard
          title="Hackathons"
          value="2"
          icon={Trophy}
          color="bg-violet-500"
        />

      </section>

      {/* =========================
          TWO COLUMN SECTION
      ========================== */}

      <section className="grid gap-6 xl:grid-cols-3">

        <div className="xl:col-span-2">

          <Schedule />

        </div>

        <AssignmentList />

      </section>

      {/* =========================
          ACADEMIC PROGRESS
          (NEW FEATURE)
      ========================== */}

      <section className="grid gap-6 lg:grid-cols-2">

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

          <div className="mb-6 flex items-center gap-3">

            <GraduationCap className="text-cyan-500" />

            <h2 className="text-2xl font-bold">
              Academic Progress
            </h2>

          </div>

          <div className="space-y-6">

          
                      <div>

              <div className="mb-2 flex justify-between">
                <span className="text-sm font-medium text-slate-600">
                  Semester Completion
                </span>

                <span className="text-sm font-semibold text-cyan-600">
                  78%
                </span>
              </div>

              <div className="h-3 rounded-full bg-slate-200">
                <div className="h-3 w-[78%] rounded-full bg-cyan-500"></div>
              </div>

            </div>

            <div>

              <div className="mb-2 flex justify-between">
                <span className="text-sm font-medium text-slate-600">
                  Attendance Goal
                </span>

                <span className="text-sm font-semibold text-emerald-600">
                  92%
                </span>
              </div>

              <div className="h-3 rounded-full bg-slate-200">
                <div className="h-3 w-[92%] rounded-full bg-emerald-500"></div>
              </div>

            </div>

            <div>

              <div className="mb-2 flex justify-between">
                <span className="text-sm font-medium text-slate-600">
                  Placement Readiness
                </span>

                <span className="text-sm font-semibold text-violet-600">
                  65%
                </span>
              </div>

              <div className="h-3 rounded-full bg-slate-200">
                <div className="h-3 w-[65%] rounded-full bg-violet-500"></div>
              </div>

            </div>

          </div>

        </div>

        {/* Today's Focus */}

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

          <div className="mb-6 flex items-center gap-3">

            <BookOpen className="text-orange-500" />

            <h2 className="text-2xl font-bold">
              Today's Focus
            </h2>

          </div>

          <div className="space-y-4">

            <div className="rounded-xl bg-cyan-50 p-4">
              <p className="font-semibold text-slate-800">
                📘 Complete DBMS Assignment
              </p>
              <p className="mt-1 text-sm text-slate-500">
                Due tomorrow
              </p>
            </div>

            <div className="rounded-xl bg-emerald-50 p-4">
              <p className="font-semibold text-slate-800">
                💻 Practice DSA (45 min)
              </p>
              <p className="mt-1 text-sm text-slate-500">
                Arrays & Sorting
              </p>
            </div>

            <div className="rounded-xl bg-violet-50 p-4">
              <p className="font-semibold text-slate-800">
                🚀 Work on OpenCampus OS
              </p>
              <p className="mt-1 text-sm text-slate-500">
                Polish UI & Deployment
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* =========================
          LOWER GRID
      ========================== */}

      <section className="grid gap-6 lg:grid-cols-3">

        {/* Quick Stats */}

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

          <div className="mb-5 flex items-center gap-3">

            <Clock3 className="text-cyan-500" />

            <h2 className="text-xl font-bold">
              This Week
            </h2>

          </div>

          <div className="space-y-4">

            <div className="flex items-center justify-between py-2">
              <span className="text-slate-600 font-medium">
                Classes
              </span>

              <span className="font-bold text-slate-800">
                18
              </span>
            </div>

            <div className="flex items-center justify-between py-2">
              <span className="text-slate-600 font-medium">
                Labs
              </span>

              <span className="font-bold text-slate-800">
                4
              </span>
            </div>

            <div className="flex items-center justify-between py-2">
              <span className="text-slate-600 font-medium">
                Assignments
              </span>

              <span className="font-bold text-slate-800">
                5
              </span>
            </div>

            <div className="flex items-center justify-between py-2">
              <span className="text-slate-600 font-medium">
                Attendance
              </span>

              <span className="font-bold text-emerald-600">
                92%
              </span>
            </div>

          </div>

        </div>

              {/* Notifications */}

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

          <h2 className="mb-5 text-xl font-bold">
            🔔 Notifications
          </h2>

          <div className="space-y-4">

            <div className="rounded-xl border border-slate-100 bg-slate-50 p-4">
              <p className="font-semibold text-slate-800">
                DBMS Assignment Uploaded
              </p>
              <p className="mt-1 text-sm text-slate-500">
                Database Management Systems • Today
              </p>
            </div>

            <div className="rounded-xl border border-slate-100 bg-slate-50 p-4">
              <p className="font-semibold text-slate-800">
                Attendance Updated
              </p>
              <p className="mt-1 text-sm text-slate-500">
                Current attendance: 92%
              </p>
            </div>

            <div className="rounded-xl border border-slate-100 bg-slate-50 p-4">
              <p className="font-semibold text-slate-800">
                New Hackathon Open
              </p>
              <p className="mt-1 text-sm text-slate-500">
                Registration closes in 3 days
              </p>
            </div>

          </div>

        </div>

        {/* Upcoming Events */}

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

          <h2 className="mb-5 text-xl font-bold">
            📅 Upcoming Events
          </h2>

          <div className="space-y-4">

            <div className="flex items-center justify-between rounded-xl bg-cyan-100 p-4">
              <span className="font-semibold text-slate-800">
                Hackathon
              </span>

              <span className="text-lg font-bold text-cyan-700">
                15 Jul
              </span>
            </div>

            <div className="flex items-center justify-between rounded-xl bg-emerald-100 p-4">
              <span className="font-semibold text-slate-800">
                Placement Drive
              </span>

              <span className="text-lg font-bold text-cyan-700">
                20 Jul
              </span>
            </div>

            <div className="flex items-center justify-between rounded-xl bg-violet-100 p-4">
              <span className="font-semibold text-slate-800">
                React Workshop
              </span>

              <span className="text-lg font-bold text-cyan-700">
                23 Jul
              </span>
            </div>

          </div>

        </div>

      </section>

      {/* Recent Activity */}

      <section>

        <RecentActivity />

      </section>

    </main>
  );
}