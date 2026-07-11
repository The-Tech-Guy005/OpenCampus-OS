import Loader from "./Loader";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0F172A]">
      
      {/* Animated Background */}
      <div className="absolute inset-0 flex items-center justify-center scale-[4] opacity-30">
        <Loader />
      </div>

      {/* Navbar */}
      <nav className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-8 md:px-16 py-6">
        <h1 className="text-2xl font-bold text-white">
          OpenCampus OS
        </h1>

        <div className="hidden md:flex items-center gap-8 text-white">
          <a href="#" className="hover:text-cyan-400 transition">
            Home
          </a>
          <a href="#" className="hover:text-cyan-400 transition">
            Features
          </a>
          <a href="#" className="hover:text-cyan-400 transition">
            About
          </a>
        </div>

        <button className="rounded-lg bg-cyan-400 px-5 py-2 font-semibold text-slate-900 hover:bg-cyan-300 hover:scale-105 transition">
          Get Started
        </button>
      </nav>

    </main>
  );
}