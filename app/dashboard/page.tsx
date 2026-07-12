import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import StatCard from "./components/StatCard";
import Schedule from "./components/Schedule";
import AssignmentList from "./components/AssignmentList";

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-slate-100">

      <Sidebar />

      <div className="flex-1 ml-64">

        <Topbar />

        <main className="p-10 space-y-8">

          {/* Welcome Banner */}
          <div className="rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 p-8 text-white shadow-xl">
            <h1 className="text-4xl font-bold">
              👋 Welcome back, Hriday!
            </h1>

            <p className="mt-3 text-lg">
              You have 2 assignments due this week and your attendance is 92%.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            <StatCard
              title="Attendance"
              value="92%"
              icon="📅"
            />

            <StatCard
              title="Assignments"
              value="5"
              icon="📚"
            />

            <StatCard
              title="Hackathons"
              value="2"
              icon="🏆"
            />

          </div>

          {/* Schedule + Assignments */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

            <Schedule />

            <AssignmentList />

          </div>

          {/* Bottom Row */}
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

            {/* Notifications */}
            <div className="bg-white rounded-2xl shadow-lg p-6 transition duration-300 hover:-translate-y-1 hover:shadow-2xl">

              <h2 className="text-2xl font-bold text-slate-800 mb-5">
                🔔 Notifications
              </h2>

              <ul className="space-y-3 text-slate-700">
                <li>📢 DBMS assignment uploaded</li>
                <li>✅ Attendance updated</li>
                <li>🏆 New hackathon announced</li>
              </ul>

            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-2xl shadow-lg p-6 transition duration-300 hover:-translate-y-1 hover:shadow-2xl">

              <h2 className="text-2xl font-bold text-slate-800 mb-5">
                ⚡ Quick Actions
              </h2>

              <div className="space-y-3">

                <button className="w-full rounded-lg bg-cyan-500 py-3 text-white font-semibold hover:bg-cyan-600 transition">
                  Add Assignment
                </button>

                <button className="w-full rounded-lg bg-slate-800 py-3 text-white font-semibold hover:bg-slate-700 transition">
                  View Timetable
                </button>

                <button className="w-full rounded-lg bg-green-600 py-3 text-white font-semibold hover:bg-green-700 transition">
                  Check Attendance
                </button>

              </div>

            </div>

            {/* Upcoming Events */}
            <div className="bg-white rounded-2xl shadow-lg p-6 transition duration-300 hover:-translate-y-1 hover:shadow-2xl">

              <h2 className="text-2xl font-bold text-slate-800 mb-5">
                📅 Upcoming Events
              </h2>

              <div className="space-y-4">

                <div className="flex justify-between border-b pb-2">
                  <span className="text-slate-700">Hackathon</span>
                  <span className="text-cyan-600 font-semibold">15 Jul</span>
                </div>

                <div className="flex justify-between border-b pb-2">
                  <span className="text-slate-700">Placement Drive</span>
                  <span className="text-green-600 font-semibold">20 Jul</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-slate-700">React Workshop</span>
                  <span className="text-purple-600 font-semibold">23 Jul</span>
                </div>

              </div>

            </div>

          </div>


            

          

        </main>

      </div>

    </div>
  );
}