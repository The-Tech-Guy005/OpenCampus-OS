import { Bell, Search, UserCircle2 } from "lucide-react";

export default function Topbar() {
  return (
    <header className="sticky top-0 z-10 flex items-center justify-between bg-white px-8 py-5 shadow-md">

      <div>
        <h1 className="text-3xl font-bold text-slate-800">
          Dashboard
        </h1>

        <p className="text-sm text-slate-500">
          Welcome back to OpenCampus OS
        </p>
      </div>

      <div className="flex items-center gap-5">

        <div className="flex items-center rounded-xl bg-slate-100 px-4 py-2">
          <Search size={18} className="text-slate-500" />

          <input
            type="text"
            placeholder="Search..."
            className="ml-2 bg-transparent text-slate-800 placeholder:text-slate-500 outline-none"
          />
        </div>

        <Bell
          size={22}
          className="cursor-pointer text-slate-700 hover:text-cyan-500 transition"
        />

        <div className="flex items-center gap-2">
          <UserCircle2 size={38} className="text-cyan-600" />

          <div>
            <p className="font-semibold text-slate-800">
              Hriday
            </p>

            <p className="text-xs text-slate-600">
              Student
            </p>
          </div>
        </div>

      </div>

    </header>
  );
}