import Navbar from "../components/Navbar";

export default function FeaturesPage() {
  return (
    <main className="min-h-screen bg-[#0F172A] text-white">
      <Navbar />

      <section className="mx-auto flex max-w-4xl flex-col items-center justify-center gap-6 px-6 pt-32 pb-20 text-center sm:px-8 sm:pt-40">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
          Features
        </h1>
        <p className="max-w-2xl text-base text-slate-300 sm:text-lg md:text-xl">
          Everything you need to run your campus life on a single,
          decentralized operating system — from courses to community, all in
          one place.
        </p>
      </section>
    </main>
  );
}