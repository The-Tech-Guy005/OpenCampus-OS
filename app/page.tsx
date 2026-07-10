export default function Home() {
  return (
    <main className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center px-6">
      <h1 className="text-6xl font-bold mb-4">
        OpenCampus OS
      </h1>

      <p className="text-xl text-slate-300 text-center max-w-2xl">
        The open-source operating system for college students.
      </p>

      <button className="mt-8 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg text-lg font-semibold">
        Get Started
      </button>
    </main>
  );
}