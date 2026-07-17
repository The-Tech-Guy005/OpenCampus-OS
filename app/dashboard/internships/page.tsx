import {
  Search,
  MapPin,
  Building2,
  Briefcase,
  ExternalLink,
} from "lucide-react";

export default function InternshipsPage() {
  const internships = [
    {
      company: "Google",
      role: "Software Engineering Intern",
      location: "Bangalore",
      type: "Hybrid",
    },
    {
      company: "Microsoft",
      role: "Frontend Developer Intern",
      location: "Hyderabad",
      type: "Remote",
    },
    {
      company: "Amazon",
      role: "Cloud Support Intern",
      location: "Chennai",
      type: "On-site",
    },
    {
      company: "Adobe",
      role: "UI/UX Intern",
      location: "Noida",
      type: "Hybrid",
    },
    {
      company: "Atlassian",
      role: "Full Stack Intern",
      location: "Remote",
      type: "Remote",
    },
    {
      company: "Oracle",
      role: "Backend Developer Intern",
      location: "Bangalore",
      type: "On-site",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-100 p-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-slate-800">
          💼 Internship Opportunities
        </h1>

        <p className="mt-2 text-slate-500">
          Discover internships and kickstart your career.
        </p>
      </div>

      <div className="mb-8 flex items-center rounded-xl bg-white px-4 shadow">
        <Search size={18} className="text-slate-400" />

        <input
          type="text"
          placeholder="Search companies..."
          className="w-full bg-transparent p-4 outline-none"
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {internships.map((job, index) => (
          <div
            key={index}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:shadow-lg"
          >
            <div className="mb-5 flex items-center gap-3">
              <div className="rounded-xl bg-cyan-100 p-3">
                <Building2 className="text-cyan-600" size={22} />
              </div>

              <div>
                <h2 className="text-xl font-bold text-slate-800">
                  {job.company}
                </h2>

                <p className="text-sm text-slate-500">
                  {job.type}
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2 text-slate-700">
                <Briefcase size={16} />
                <span>{job.role}</span>
              </div>

              <div className="flex items-center gap-2 text-slate-500">
                <MapPin size={16} />
                <span>{job.location}</span>
              </div>
            </div>

            <button className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-cyan-600 py-3 font-medium text-white transition hover:bg-cyan-700">
              <ExternalLink size={18} />
              Apply Now
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}