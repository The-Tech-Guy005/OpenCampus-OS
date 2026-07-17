import { CalendarCheck, TrendingUp, CircleCheck } from "lucide-react";

export default function AttendancePage() {
  const subjects = [
    { subject: "Database Management Systems", attendance: 94 },
    { subject: "Data Structures & Algorithms", attendance: 90 },
    { subject: "Operating Systems", attendance: 88 },
    { subject: "Web Development", attendance: 96 },
  ];

  const average =
    Math.round(
      subjects.reduce((sum, item) => sum + item.attendance, 0) /
        subjects.length
    );

  return (
    <main className="min-h-screen bg-slate-100 p-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-slate-800">
          📅 Attendance
        </h1>

        <p className="mt-2 text-slate-500">
          Track your attendance across all subjects.
        </p>
      </div>

      <div className="mb-8 grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <CalendarCheck className="mb-3 text-cyan-600" size={30} />
          <p className="text-sm text-slate-500">Overall Attendance</p>
          <h2 className="mt-2 text-3xl font-bold text-slate-800">
            {average}%
          </h2>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <TrendingUp className="mb-3 text-green-600" size={30} />
          <p className="text-sm text-slate-500">Highest Attendance</p>
          <h2 className="mt-2 text-3xl font-bold text-slate-800">
            96%
          </h2>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <CircleCheck className="mb-3 text-purple-600" size={30} />
          <p className="text-sm text-slate-500">Target</p>
          <h2 className="mt-2 text-3xl font-bold text-slate-800">
            90%
          </h2>
        </div>
      </div>

      <div className="rounded-2xl bg-white p-8 shadow-sm">
        <h2 className="mb-6 text-2xl font-bold text-slate-800">
          Subject-wise Attendance
        </h2>

        <div className="space-y-6">
          {subjects.map((item, index) => (
            <div key={index}>
              <div className="mb-2 flex items-center justify-between">
                <span className="font-semibold text-slate-800">
                  {item.subject}
                </span>

                <span className="font-bold text-cyan-600">
                  {item.attendance}%
                </span>
              </div>

              <div className="h-3 w-full rounded-full bg-slate-200">
                <div
                  className="h-3 rounded-full bg-cyan-500 transition-all"
                  style={{ width: `${item.attendance}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}