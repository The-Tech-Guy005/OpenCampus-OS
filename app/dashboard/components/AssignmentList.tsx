import {
  Database,
  Code2,
  FileText,
  AlertCircle,
} from "lucide-react";

const assignments = [
  {
    title: "DBMS Project",
    subject: "Database Management Systems",
    due: "Tomorrow",
    status: "High Priority",
    color: "text-red-600 bg-red-100",
    icon: Database,
  },
  {
    title: "React Assignment",
    subject: "Web Development",
    due: "2 Days",
    status: "Medium",
    color: "text-yellow-700 bg-yellow-100",
    icon: Code2,
  },
  {
    title: "OS Lab Report",
    subject: "Operating Systems",
    due: "Friday",
    status: "On Track",
    color: "text-green-700 bg-green-100",
    icon: FileText,
  },
];

export default function AssignmentList() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-slate-800">
          📚 Upcoming Assignments
        </h2>

        <span className="text-sm font-medium text-cyan-600">
          {assignments.length} Pending
        </span>
      </div>

      <div className="space-y-4">

        {assignments.map((assignment, index) => {
          const Icon = assignment.icon;

          return (
            <div
              key={index}
              className="rounded-xl border border-slate-100 p-4 transition-all duration-300 hover:border-cyan-300 hover:shadow-md"
            >
              <div className="flex items-start justify-between">

                <div className="flex gap-3">

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100">
                    <Icon size={20} className="text-slate-700" />
                  </div>

                  <div>
                    <h3 className="font-semibold text-slate-800">
                      {assignment.title}
                    </h3>

                    <p className="text-sm text-slate-500">
                      {assignment.subject}
                    </p>
                  </div>

                </div>

                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${assignment.color}`}
                >
                  {assignment.status}
                </span>

              </div>

              <div className="mt-4 flex items-center justify-between">

                <span className="flex items-center gap-2 text-sm text-slate-500">
                  <AlertCircle size={15} />
                  Due: {assignment.due}
                </span>

                <button className="rounded-lg bg-cyan-600 px-3 py-1.5 text-sm font-medium text-white transition hover:bg-cyan-700">
                  View
                </button>

              </div>
            </div>
          );
        })}

      </div>

    </div>
  );
}