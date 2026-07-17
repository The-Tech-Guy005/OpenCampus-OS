import { Search, BookOpen, Eye, Download } from "lucide-react";

export default function NotesPage() {
  const notes = [
    {
      subject: "Database Management Systems",
      topic: "Normalization & SQL",
      updated: "2 days ago",
    },
    {
      subject: "Data Structures & Algorithms",
      topic: "Binary Trees",
      updated: "Yesterday",
    },
    {
      subject: "Operating Systems",
      topic: "Process Scheduling",
      updated: "Today",
    },
    {
      subject: "Web Development",
      topic: "Next.js Routing",
      updated: "Today",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-100 p-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-slate-800">
          📒 Notes
        </h1>

        <p className="mt-2 text-slate-500">
          Access all your study material in one place.
        </p>
      </div>

      <div className="mb-8 flex items-center rounded-xl bg-white px-4 shadow">
        <Search size={18} className="text-slate-400" />

        <input
          type="text"
          placeholder="Search notes..."
          className="w-full bg-transparent p-4 outline-none"
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {notes.map((note, index) => (
          <div
            key={index}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:shadow-lg"
          >
            <div className="mb-5 flex items-center gap-3">
              <div className="rounded-xl bg-cyan-100 p-3">
                <BookOpen className="text-cyan-600" size={22} />
              </div>

              <div>
                <h2 className="font-bold text-slate-800">
                  {note.subject}
                </h2>

                <p className="text-sm text-slate-500">
                  Updated {note.updated}
                </p>
              </div>
            </div>

            <p className="mb-6 text-slate-600">
              {note.topic}
            </p>

            <div className="flex gap-3">
              <button className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-cyan-600 py-2 text-white transition hover:bg-cyan-700">
                <Eye size={16} />
                View
              </button>

              <button className="flex items-center justify-center rounded-lg border border-slate-200 px-4 transition hover:bg-slate-100">
                <Download size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}