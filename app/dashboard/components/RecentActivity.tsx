import {
  CheckCircle,
  FileText,
  Trophy,
  Calendar,
} from "lucide-react";

const activities = [
  {
    icon: CheckCircle,
    color: "text-green-500",
    title: "Attendance Updated",
    description: "Your attendance reached 92%.",
    time: "2 min ago",
  },
  {
    icon: FileText,
    color: "text-blue-500",
    title: "DBMS Assignment Submitted",
    description: "Database Management Systems Project uploaded.",
    time: "1 hour ago",
  },
  {
    icon: Trophy,
    color: "text-purple-500",
    title: "Hackathon Registration",
    description: "Successfully registered for Open Source Sprint 2026.",
    time: "Yesterday",
  },
  {
    icon: Calendar,
    color: "text-orange-500",
    title: "Timetable Updated",
    description: "Monday schedule has been updated.",
    time: "2 days ago",
  },
];

export default function RecentActivity() {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-lg">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-slate-800">
          Recent Activity
        </h2>

        <span className="text-sm text-cyan-600 font-medium cursor-pointer hover:underline">
          View All
        </span>
      </div>

      <div className="space-y-6">
        {activities.map((activity, index) => {
          const Icon = activity.icon;

          return (
            <div key={index} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 ${activity.color}`}
                >
                  <Icon size={20} />
                </div>

                {index !== activities.length - 1 && (
                  <div className="mt-2 h-full w-px bg-slate-200" />
                )}
              </div>

              <div className="flex-1 pb-2">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-slate-800">
                    {activity.title}
                  </h3>

                  <span className="text-xs text-slate-400">
                    {activity.time}
                  </span>
                </div>

                <p className="mt-1 text-sm text-slate-500">
                  {activity.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}