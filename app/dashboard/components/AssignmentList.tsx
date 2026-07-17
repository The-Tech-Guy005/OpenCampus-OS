"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { FileText, AlertCircle } from "lucide-react";

type Assignment = {
  id: number;
  title: string;
  course: string;
  due_date: string;
  status: string;
};

export default function AssignmentList() {
  const [assignments, setAssignments] = useState<Assignment[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const statusColors = {
    Pending: "bg-red-100 text-red-700",
    "In Progress": "bg-yellow-100 text-yellow-700",
    Completed: "bg-green-100 text-green-700",
  };

  const pendingCount = assignments.filter(
    (assignment) => assignment.status === "Pending"
  ).length;

  useEffect(() => {
    async function fetchAssignments() {
      const { data, error } = await supabase
        .from("assignments")
        .select("*")
        .order("due_date", { ascending: true });

      if (error) {
        console.error(error);
        setError("Unable to load assignments.");
      } else {
        setAssignments(data || []);
      }

      setLoading(false);
    }

    fetchAssignments();
  }, []);

  if (loading) {
    return (
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <p className="text-center text-slate-500">
          Loading assignments...
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="rounded-2xl border border-red-200 bg-red-50 p-6 shadow-sm">
        <h2 className="mb-2 text-lg font-semibold text-red-700">
          Unable to load assignments
        </h2>

        <p className="text-sm text-red-600">
          Please check your internet connection or try again later.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-slate-800">
          📚 Upcoming Assignments
        </h2>

        <span className="text-sm font-medium text-cyan-600">
          {pendingCount} Pending
        </span>
      </div>

      <div className="space-y-4">
        {assignments.map((assignment) => (
          <div
            key={assignment.id}
            className="rounded-xl border border-slate-100 p-4 transition-all duration-300 hover:border-cyan-300 hover:shadow-md"
          >
            <div className="flex items-start justify-between">
              <div className="flex gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100">
                  <FileText size={20} className="text-slate-700" />
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
                className={`rounded-full px-3 py-1 text-xs font-semibold ${
                  statusColors[
                    assignment.status as keyof typeof statusColors
                  ] ?? "bg-gray-100 text-gray-700"
                }`}
              >
                {assignment.status}
              </span>
            </div>

            <div className="mt-4 flex items-center justify-between">
              <span className="flex items-center gap-2 text-sm text-slate-500">
                <AlertCircle size={15} />
                Due:{" "}
                {new Date(assignment.due_date).toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })}
              </span>

              <button className="rounded-lg bg-cyan-600 px-3 py-1.5 text-sm font-medium text-white transition hover:bg-cyan-700">
                View
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}