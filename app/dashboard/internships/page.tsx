export default function InternshipsPage() {
  const internships = [
    {
      company: "Google",
      role: "Software Engineering Intern",
      location: "Bangalore",
    },
    {
      company: "Microsoft",
      role: "Frontend Developer Intern",
      location: "Hyderabad",
    },
    {
      company: "Amazon",
      role: "Cloud Support Intern",
      location: "Chennai",
    },
    {
      company: "Adobe",
      role: "UI/UX Intern",
      location: "Noida",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-100 p-10">
      <h1 className="mb-8 text-4xl font-bold text-slate-800">
        Internships
      </h1>

      <div className="grid gap-6 md:grid-cols-2">
        {internships.map((job, index) => (
          <div
            key={index}
            className="rounded-2xl bg-white p-6 shadow-lg transition hover:-translate-y-1 hover:shadow-2xl"
          >
            <h2 className="text-2xl font-bold text-cyan-600">
              {job.company}
            </h2>

            <p className="mt-3 text-slate-700 font-medium">
              {job.role}
            </p>

            <p className="mt-1 text-slate-500">
              📍 {job.location}
            </p>

            <button className="mt-5 rounded-lg bg-cyan-500 px-5 py-2 text-white transition hover:bg-cyan-600">
              Apply Now
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}