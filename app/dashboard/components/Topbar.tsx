import {
  Bell,
  Search,
  UserCircle2,
  CalendarDays,
  Sparkles,
} from "lucide-react";

export default function Topbar() {
  const today = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });

  return (
    <header className="sticky top-0 z-30 flex items-center justify-between border-b border-slate-200 bg-white/90 px-8 py-5 backdrop-blur-md">

      {/* Left Section */}
      <div>
        <div className="flex items-center gap-2">
          <Sparkles className="text-cyan-500" size={20} />

          <h1 className="text-3xl font-bold text-slate-800">
            Dashboard
          </h1>
        </div>

        <div className="mt-1 flex items-center gap-2 text-sm text-slate-500">
          <CalendarDays size={15} />
          <span>{today}</span>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-6">

        {/* Search Box */}
        <div className="flex w-80 items-center rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 transition-all duration-300 focus-within:border-cyan-400 focus-within:bg-white focus-within:shadow-lg">

          <Search
            size={18}
            className="text-slate-500"
          />

          <input
            type="text"
            placeholder="Search assignments, notes..."
            className="ml-3 w-full bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
          />
        </div>

        {/* Notification */}
        <button className="relative rounded-full bg-slate-100 p-3 transition hover:bg-cyan-100">

          <Bell
            size={20}
            className="text-slate-700"
          />

          <span className="absolute right-2 top-2 h-2.5 w-2.5 rounded-full bg-red-500"></span>

        </button>

        {/* Profile */}
        <div className="flex cursor-pointer items-center gap-3 rounded-2xl border border-slate-200 bg-white px-3 py-2 transition duration-300 hover:shadow-lg">

          <UserCircle2
            size={42}
            className="text-cyan-600"
          />

          <div>
            <h3 className="font-semibold text-slate-800">
              Hriday
            </h3>

            <p className="text-xs text-slate-500">
              Computer Science Student
            </p>
          </div>

        </div>

      </div>

    </header>
  );
}