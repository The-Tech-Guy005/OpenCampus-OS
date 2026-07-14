export default function AssignmentsPage() {
  const assignments = [
    {
      subject: "DBMS",
      assignment: "Database Project",
      dueDate: "15 Jul 2026",
      status: "Pending",
    },
    {
      subject: "DSA",
      assignment: "Sorting Algorithms",
      dueDate: "18 Jul 2026",
      status: "In Progress",
    },
    {
      subject: "Operating Systems",
      assignment: "Lab Report",
      dueDate: "20 Jul 2026",
      status: "Completed",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-100 p-10">
      <h1 className="mb-8 text-4xl font-bold text-slate-800">
        Assignments
      </h1>

      <div className="overflow-hidden rounded-2xl bg-white shadow-lg">
        <table className="w-full">
          <thead className="bg-slate-900 text-white">
            <tr>
              <th className="p-4 text-left">Subject</th>
              <th className="p-4 text-left">Assignment</th>
              <th className="p-4 text-left">Due Date</th>
              <th className="p-4 text-left">Status</th>
            </tr>
          </thead>

          <tbody>
            {assignments.map((item, index) => (
              <tr
                key={index}
                className="border-b hover:bg-slate-50 transition"
              >
                <td className="p-4 font-semibold text-slate-800">
                  {item.subject}
                </td>

                <td className="p-4 text-slate-700">
                  {item.assignment}
                </td>

                <td className="p-4 text-slate-700">
                  {item.dueDate}
                </td>

                <td
                  className={`p-4 font-semibold ${
                    item.status === "Completed"
                      ? "text-green-600"
                      : item.status === "In Progress"
                      ? "text-orange-500"
                      : "text-red-500"
                  }`}
                >
                  {item.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}