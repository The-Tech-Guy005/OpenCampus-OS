import { Search, Filter, Eye } from "lucide-react";

export default function AssignmentsPage() {
  const assignments = [
    {
      subject: "Database Management Systems",
      assignment: "Database Project",
      dueDate: "15 Jul 2026",
      status: "Pending",
    },
    {
      subject: "Data Structures & Algorithms",
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
    {
      subject: "Web Development",
      assignment: "OpenCampus UI",
      dueDate: "24 Jul 2026",
      status: "Pending",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-100 p-8">

      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold text-slate-800">
            📚 Assignments
          </h1>

          <p className="mt-2 text-slate-500">
            Track all your upcoming coursework in one place.
          </p>
        </div>

        <button className="rounded-xl bg-cyan-600 px-5 py-3 font-medium text-white transition hover:bg-cyan-700">
          + Add Assignment
        </button>
      </div>

      <div className="mb-6 flex gap-4">

        <div className="flex flex-1 items-center rounded-xl bg-white px-4 shadow">

          <Search size={18} className="text-slate-400" />

          <input
            type="text"
            placeholder="Search assignments..."
            className="w-full bg-transparent p-3 outline-none"
          />

        </div>

        <button className="flex items-center gap-2 rounded-xl bg-white px-5 shadow">
          <Filter size={18} />
          Filter
        </button>

      </div>

      <div className="overflow-hidden rounded-2xl bg-white shadow-lg">

        <table className="w-full">

          <thead className="bg-slate-900 text-white">
            <tr>
              <th className="p-5 text-left">Subject</th>
              <th className="p-5 text-left">Assignment</th>
              <th className="p-5 text-left">Due Date</th>
              <th className="p-5 text-left">Status</th>
              <th className="p-5 text-center">Action</th>
            </tr>
          </thead>

          <tbody>

            {assignments.map((item, index) => (
              <tr
                key={index}
                className="border-b transition hover:bg-slate-50"
              >
                <td className="p-5 font-semibold text-slate-800">
                  {item.subject}
                </td>

                <td className="p-5 text-slate-600">
                  {item.assignment}
                </td>

                <td className="p-5">
                  {item.dueDate}
                </td>

                <td className="p-5">
                  <span
                    className={`rounded-full px-3 py-1 text-sm font-semibold ${
                      item.status === "Completed"
                        ? "bg-green-100 text-green-700"
                        : item.status === "In Progress"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {item.status}
                  </span>
                </td>

                <td className="p-5 text-center">
                  <button className="rounded-lg p-2 transition hover:bg-slate-100">
                    <Eye size={18} />
                  </button>
                </td>
              </tr>
            ))}

          </tbody>

        </table>

      </div>

    </main>
  );
}