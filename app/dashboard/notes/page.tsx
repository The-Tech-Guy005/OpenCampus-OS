export default function NotesPage() {
  const notes = [
    {
      subject: "DBMS",
      topic: "Normalization & SQL",
    },
    {
      subject: "DSA",
      topic: "Binary Trees",
    },
    {
      subject: "Operating Systems",
      topic: "Process Scheduling",
    },
    {
      subject: "Web Development",
      topic: "Next.js Routing",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-100 p-10">
      <h1 className="mb-8 text-4xl font-bold text-slate-800">
        Notes
      </h1>

      <div className="grid gap-6 md:grid-cols-2">
        {notes.map((note, index) => (
          <div
            key={index}
            className="rounded-2xl bg-white p-6 shadow-lg transition hover:-translate-y-1 hover:shadow-2xl"
          >
            <h2 className="text-xl font-bold text-cyan-600">
              {note.subject}
            </h2>

            <p className="mt-3 text-slate-700">
              {note.topic}
            </p>

            <button className="mt-5 rounded-lg bg-slate-900 px-4 py-2 text-white hover:bg-slate-800">
              View Notes
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}