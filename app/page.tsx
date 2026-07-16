"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const GITHUB_URL = "https://github.com/The-Tech-Guy005/OpenCampus-OS";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#090909]">
      {/* Background effects */}
      <div className="absolute inset-0 noise-texture">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[#FF8C42] rounded-full blur-[150px] opacity-[0.08]" />
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-[#FF8C42] rounded-full blur-[120px] opacity-[0.04]" />
        <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] bg-[#FF8C42] rounded-full blur-[100px] opacity-[0.03]" />
      </div>

      <Navbar />

      <section className="relative z-10 flex min-h-screen flex-col items-center justify-center gap-8 px-6 pt-32 pb-20 text-center sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-4"
        >
          <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
            Build smarter.
            <br />
            <span className="text-[#9F9F9F]">Launch faster.</span>
          </h1>

          <p className="max-w-xl mx-auto text-base text-[#9F9F9F] sm:text-lg md:text-xl">
            The decentralized operating system for the future of education.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 flex w-full flex-col items-center gap-4 sm:w-auto sm:flex-row"
        >
          <Link href="/dashboard" className="w-full sm:w-auto">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="w-full rounded-3xl bg-[#FF8C42] px-10 py-4 font-semibold text-white transition-colors hover:bg-[#ff9d5c] sm:w-auto"
            >
              Get Started
            </motion.button>
          </Link>

          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="w-full rounded-3xl border border-white/10 bg-white/5 px-10 py-4 font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/10 sm:w-auto"
            >
              GitHub
            </motion.button>
          </a>
        </motion.div>

        {/* Floating Mockup Window */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 w-full max-w-5xl"
        >
          <div className="relative rounded-3xl border border-white/10 bg-[#111111] p-2 shadow-2xl shadow-black/50 glow-effect">
            {/* Browser window header */}
            <div className="flex items-center gap-2 rounded-2xl bg-[#151515] px-4 py-3">
              <div className="flex gap-2">
                <div className="h-3 w-3 rounded-full bg-red-500/80" />
                <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                <div className="h-3 w-3 rounded-full bg-green-500/80" />
              </div>
              <div className="ml-4 flex-1 rounded-lg bg-[#090909] px-4 py-1.5">
                <div className="text-xs text-[#9F9F9F]">opencampus.os/dashboard</div>
              </div>
            </div>

            {/* Dashboard placeholder */}
            <div className="mt-2 rounded-2xl bg-[#090909] p-8">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                {/* Stat cards */}
                <div className="rounded-2xl border border-white/5 bg-[#111111] p-6">
                  <div className="h-4 w-24 rounded-lg bg-white/10" />
                  <div className="mt-4 h-8 w-16 rounded-lg bg-white/20" />
                </div>
                <div className="rounded-2xl border border-white/5 bg-[#111111] p-6">
                  <div className="h-4 w-24 rounded-lg bg-white/10" />
                  <div className="mt-4 h-8 w-16 rounded-lg bg-white/20" />
                </div>
                <div className="rounded-2xl border border-white/5 bg-[#111111] p-6">
                  <div className="h-4 w-24 rounded-lg bg-white/10" />
                  <div className="mt-4 h-8 w-16 rounded-lg bg-white/20" />
                </div>
              </div>

              {/* Main content area */}
              <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="rounded-2xl border border-white/5 bg-[#111111] p-6">
                  <div className="h-4 w-32 rounded-lg bg-white/10" />
                  <div className="mt-4 space-y-3">
                    <div className="h-3 w-full rounded-lg bg-white/5" />
                    <div className="h-3 w-5/6 rounded-lg bg-white/5" />
                    <div className="h-3 w-4/6 rounded-lg bg-white/5" />
                  </div>
                </div>
                <div className="rounded-2xl border border-white/5 bg-[#111111] p-6">
                  <div className="h-4 w-32 rounded-lg bg-white/10" />
                  <div className="mt-4 space-y-3">
                    <div className="h-3 w-full rounded-lg bg-white/5" />
                    <div className="h-3 w-5/6 rounded-lg bg-white/5" />
                    <div className="h-3 w-4/6 rounded-lg bg-white/5" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
