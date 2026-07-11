export default function AssignmentList() {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
      <h2 className="text-2xl font-bold text-slate-800 mb-5">
        📚 Upcoming Assignments
      </h2>

      <div className="space-y-4">

        <div className="flex justify-between border-b pb-2">
          <span className="text-slate-700 font-medium">DBMS Project</span>
          <span className="text-red-500 font-semibold">Tomorrow</span>
        </div>

        <div className="flex justify-between border-b pb-2">
          <span className="text-slate-700 font-medium">React Assignment</span>
          <span className="text-yellow-600 font-semibold">2 Days</span>
        </div>

        <div className="flex justify-between">
          <span className="text-slate-700 font-medium">OS Lab Report</span>
          <span className="text-green-600 font-semibold">Friday</span>
        </div>

      </div>
    </div>
  );
}