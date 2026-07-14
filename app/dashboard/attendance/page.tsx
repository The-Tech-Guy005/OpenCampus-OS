export default function AttendancePage() {
  const subjects = [
    { subject: "DBMS", attendance: "94%" },
    { subject: "DSA", attendance: "90%" },
    { subject: "Operating Systems", attendance: "88%" },
    { subject: "Web Development", attendance: "96%" },
  ];

  return (
    <main className="min-h-screen bg-slate-100 p-10">
      <h1 className="mb-8 text-4xl font-bold text-slate-800">
        Attendance
      </h1>

      <div className="rounded-2xl bg-white p-8 shadow-lg">
        <div className="space-y-6">
          {subjects.map((item, index) => (
            <div key={index}>
              <div className="mb-2 flex justify-between">
                <span className="font-semibold text-slate-800">
                  {item.subject}
                </span>

                <span className="font-bold text-cyan-600">
                  {item.attendance}
                </span>
              </div>

              <div className="h-3 w-full rounded-full bg-slate-200">
                <div
                  className="h-3 rounded-full bg-cyan-500"
                  style={{ width: item.attendance }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}