export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-slate-900 text-white p-6 shadow-xl">

      <h1 className="text-3xl font-bold mb-10">
        OpenCampus OS
      </h1>

      <ul className="space-y-3">

        <li className="bg-cyan-500 text-black rounded-lg p-3 font-semibold cursor-pointer">
          🏠 Dashboard
        </li>

        <li className="hover:bg-slate-800 rounded-lg p-3 transition cursor-pointer">
          📚 Assignments
        </li>

        <li className="hover:bg-slate-800 rounded-lg p-3 transition cursor-pointer">
          📅 Attendance
        </li>

        <li className="hover:bg-slate-800 rounded-lg p-3 transition cursor-pointer">
          📝 Notes
        </li>

        <li className="hover:bg-slate-800 rounded-lg p-3 transition cursor-pointer">
          💼 Internships
        </li>

        <li className="hover:bg-slate-800 rounded-lg p-3 transition cursor-pointer">
          ⚙️ Settings
        </li>

      </ul>

    </aside>
  );
}