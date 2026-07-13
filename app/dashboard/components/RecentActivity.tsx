import {
  CheckCircle,
  FileText,
  Trophy,
  Calendar,
} from "lucide-react";

export default function RecentActivity() {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
      <h2 className="text-2xl font-bold text-slate-800 mb-6">
        Recent Activity
      </h2>

      <div className="space-y-5">

        <div className="flex items-center gap-3">
          <CheckCircle className="text-green-500" size={22} />
          <div>
            <p className="font-medium text-slate-800">
              Attendance Updated
            </p>
            <p className="text-sm text-slate-500">
              Your attendance is now 92%.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <FileText className="text-blue-500" size={22} />
          <div>
            <p className="font-medium text-slate-800">
              Assignment Submitted
            </p>
            <p className="text-sm text-slate-500">
              DBMS Project uploaded successfully.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Trophy className="text-purple-500" size={22} />
          <div>
            <p className="font-medium text-slate-800">
              Hackathon Registered
            </p>
            <p className="text-sm text-slate-500">
              Open Source Sprint 2026.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Calendar className="text-orange-500" size={22} />
          <div>
            <p className="font-medium text-slate-800">
              Timetable Updated
            </p>
            <p className="text-sm text-slate-500">
              Monday schedule changed.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}