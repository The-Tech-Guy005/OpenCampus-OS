import Link from "next/link";
import Loader from "./Loader";
import Navbar from "./components/Navbar";

const GITHUB_URL = "https://github.com/The-Tech-Guy005/OpenCampus-OS";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#0F172A]">
      <div className="absolute inset-0 flex items-center justify-center scale-[4] opacity-30">
        <Loader />
      </div>

      <Navbar />

      <section className="relative z-10 flex min-h-screen flex-col items-center justify-center gap-6 px-6 pt-24 text-center sm:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
          OpenCampus OS
        </h1>

        <p className="max-w-xl text-base text-slate-300 sm:text-lg md:text-xl">
          The decentralized operating system for the future of education.
        </p>

        <div className="mt-4 flex w-full flex-col items-center gap-4 sm:w-auto sm:flex-row">
          <Link href="/dashboard" className="w-full sm:w-auto">
            <button className="w-full rounded-lg bg-cyan-400 px-8 py-3 font-semibold text-slate-900 transition duration-200 hover:scale-105 hover:bg-cyan-300 sm:w-auto">
              Get Started
            </button>
          </Link>

          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto"
          >
            <button className="w-full rounded-lg border border-white/20 bg-white/5 px-8 py-3 font-semibold text-white backdrop-blur-sm transition duration-200 hover:scale-105 hover:bg-white/10 sm:w-auto">
              GitHub
            </button>
          </a>
        </div>
      </section>
    </main>
  );
}
