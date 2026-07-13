export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-100 px-8 py-20">
      <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-slate-900">
            About OpenCampus OS
          </h1>

          <p className="mt-6 text-lg text-slate-600 max-w-3xl mx-auto">
            OpenCampus OS is a modern student management platform designed to
            simplify campus life. From tracking attendance and assignments to
            managing notes and internships, everything is available in one
            unified dashboard.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-cyan-600 mb-4">
              Our Mission
            </h2>

            <p className="text-slate-600 leading-7">
              To build an all-in-one digital campus ecosystem that improves
              productivity, collaboration, and academic management for every
              student.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-cyan-600 mb-4">
              Our Vision
            </h2>

            <p className="text-slate-600 leading-7">
              We envision a smarter campus where students spend less time
              managing information and more time learning, building, and
              innovating.
            </p>
          </div>

        </div>

        {/* Features */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">

          <h2 className="text-3xl font-bold text-slate-900 mb-8">
            What OpenCampus OS Offers
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            <div className="rounded-xl bg-slate-50 p-6">
              <h3 className="font-semibold text-lg mb-2 text-black">
                📚 Assignments
              </h3>
              <p className="text-slate-600">
                Manage deadlines and submissions effortlessly.
              </p>
            </div>

            <div className="rounded-xl bg-slate-50 p-6">
              <h3 className="font-semibold text-lg mb-2 text-black">
                📅 Attendance
              </h3>
              <p className="text-slate-600">
                Track attendance with real-time statistics.
              </p>
            </div>

            <div className="rounded-xl bg-slate-50 p-6">
              <h3 className="font-semibold text-lg mb-2 text-black">
                📝 Notes
              </h3>
              <p className="text-slate-600">
                Organize study materials in one place.
              </p>
            </div>

            <div className="rounded-xl bg-slate-50 p-6">
              <h3 className="font-semibold text-lg mb-2 text-black">
                💼 Internships
              </h3>
              <p className="text-slate-600">
                Discover internship opportunities and placements.
              </p>
            </div>

            <div className="rounded-xl bg-slate-50 p-6">
              <h3 className="font-semibold text-lg mb-2 text-black">
                🏆 Hackathons
              </h3>
              <p className="text-slate-600">
                Stay updated with competitions and events.
              </p>
            </div>

            <div className="rounded-xl bg-slate-50 p-6">
              <h3 className="font-semibold text-lg mb-2 text-black">
                📊 Dashboard
              </h3>
              <p className="text-slate-600">
                Get a complete overview of your academic progress.
              </p>
            </div>

          </div>

        </div>

        {/* Footer */}
        <div className="text-center text-slate-500">
          <p>
            Built with ❤️ using Next.js, React, TypeScript and Tailwind CSS.
          </p>
        </div>

      </div>
    </main>
  );
}