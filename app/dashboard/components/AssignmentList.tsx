"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import {
  Database,
  Code2,
  FileText,
  AlertCircle,
} from "lucide-react";



export default function AssignmentList() {
  const [assignments, setAssignments] = useState<any[]>([]);

useEffect(() => {
  async function fetchAssignments() {
    const { data, error, count } = await supabase
      .from("assignments")
      .select("*", { count: "exact" });

    console.log("COUNT:", count);
    console.log("DATA:", data);
    console.log("ERROR:", error);

    console.log("DATA:", data);
    console.log("ERROR:", error);

    if (data) {
      setAssignments(data);
      console.log("Assignments state:", data);
    }
  }

  fetchAssignments();
}, []);
console.log("Rendering assignments:", assignments);
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
          const Icon = FileText;

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
                      {assignment.course}
                    </p>
                  </div>

                </div>

                <span
                  className={`rounded-full bg-cyan-100 px-3 py-1 text-xs font-semibold text-cyan-700`}
                >
                  {assignment.status}
                </span>

              </div>

              <div className="mt-4 flex items-center justify-between">

                <span className="flex items-center gap-2 text-sm text-slate-500">
                  <AlertCircle size={15} />
                  Due: {assignment.due_date}
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