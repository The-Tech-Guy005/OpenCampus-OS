import {
  LayoutDashboard,
  ClipboardList,
  CalendarCheck,
  BookOpen,
  Briefcase,
  Trophy,
} from "lucide-react";

const features = [
  {
    title: "Dashboard",
    description:
      "View your academic progress, attendance, assignments and important updates in one place.",
    icon: LayoutDashboard,
    color: "text-cyan-600",
  },
  {
    title: "Assignments",
    description:
      "Track pending work, submission deadlines and completed assignments.",
    icon: ClipboardList,
    color: "text-orange-500",
  },
  {
    title: "Attendance",
    description:
      "Monitor subject-wise attendance with detailed statistics and progress.",
    icon: CalendarCheck,
    color: "text-green-600",
  },
  {
    title: "Notes",
    description:
      "Store and organize lecture notes and study material for quick access.",
    icon: BookOpen,
    color: "text-blue-600",
  },
  {
    title: "Internships",
    description:
      "Explore internship opportunities, placement drives and career updates.",
    icon: Briefcase,
    color: "text-purple-600",
  },
  {
    title: "Hackathons",
    description:
      "Stay informed about coding competitions, workshops and campus events.",
    icon: Trophy,
    color: "text-yellow-500",
  },
];

export default function FeaturesPage() {
  return (
    <main className="min-h-screen bg-slate-100 px-8 py-20">
      <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-slate-900">
            Features
          </h1>

          <p className="mt-5 text-lg text-slate-600 max-w-3xl mx-auto">
            Everything a student needs to manage academics efficiently,
            all in one modern platform.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="bg-white rounded-2xl shadow-lg p-8 transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <Icon size={40} className={`${feature.color} mb-5`} />

                <h2 className="text-2xl font-bold text-slate-900 mb-3">
                  {feature.title}
                </h2>

                <p className="text-slate-600 leading-7">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-20 rounded-3xl bg-gradient-to-r from-cyan-500 to-blue-600 p-10 text-center text-white shadow-xl">
          <h2 className="text-3xl font-bold mb-4">
            One Platform. Complete Campus Experience.
          </h2>

          <p className="text-lg max-w-3xl mx-auto">
            OpenCampus OS brings together academics, attendance,
            assignments, notes, internships and events into one seamless
            student portal.
          </p>
        </div>

      </div>
    </main>
  );
}