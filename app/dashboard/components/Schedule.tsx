export default function Schedule() {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
      <h2 className="text-2xl font-bold text-slate-800 mb-5">
        📅 Today's Classes
      </h2>

      <div className="space-y-4">

        <div className="flex justify-between border-b pb-2">
          <span className="text-slate-700 font-medium">📘 DBMS</span>
          <span className="text-slate-600 font-semibold">10:00 AM</span>
        </div>

        <div className="flex justify-between border-b pb-2">
          <span className="text-slate-700 font-medium">💻 DSA</span>
          <span className="text-slate-600 font-semibold">12:00 PM</span>
        </div>

        <div className="flex justify-between">
          <span className="text-slate-700 font-medium">🌐 Web Development</span>
          <span className="text-slate-600 font-semibold">2:00 PM</span>
        </div>

      </div>
    </div>
  );
}