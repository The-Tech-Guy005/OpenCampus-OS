"use client";

import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export default function AboutPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#090909]">
      {/* Background effects */}
      <div className="absolute inset-0 noise-texture">
        <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-[#FF8C42] rounded-full blur-[150px] opacity-[0.06]" />
        <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-[#FF8C42] rounded-full blur-[120px] opacity-[0.04]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#FF8C42] rounded-full blur-[100px] opacity-[0.03]" />
      </div>

      <Navbar />

      <section className="relative z-10 px-6 pt-32 pb-20 sm:px-8">
        <div className="mx-auto max-w-6xl">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-20"
          >
            <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl">
              About OpenCampus OS
            </h1>

            <p className="mt-6 text-lg text-[#9F9F9F] max-w-3xl mx-auto leading-8">
              OpenCampus OS is a modern student management platform designed to
              simplify campus life. From tracking attendance and assignments to
              managing notes and internships, everything is available in one
              unified dashboard.
            </p>
          </motion.div>

          {/* Mission & Vision */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ staggerChildren: 0.1 }}
            className="grid md:grid-cols-2 gap-8 mb-20"
          >
            <motion.div
              variants={itemVariants}
            >
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
                className="h-full rounded-[28px] border border-white/10 bg-[#111111] p-8 shadow-2xl hover:shadow-[0_0_60px_rgba(255,140,66,0.15)] transition-shadow duration-300"
              >
                <h2 className="text-2xl font-bold text-[#FF8C42] mb-4">
                  Our Mission
                </h2>

                <p className="text-[#9F9F9F] leading-8">
                  To build an all-in-one digital campus ecosystem that improves
                  productivity, collaboration, and academic management for every
                  student.
                </p>
              </motion.div>
            </motion.div>

            <motion.div
              variants={itemVariants}
            >
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
                className="h-full rounded-[28px] border border-white/10 bg-[#111111] p-8 shadow-2xl hover:shadow-[0_0_60px_rgba(255,140,66,0.15)] transition-shadow duration-300"
              >
                <h2 className="text-2xl font-bold text-[#FF8C42] mb-4">
                  Our Vision
                </h2>

                <p className="text-[#9F9F9F] leading-8">
                  We envision a smarter campus where students spend less time
                  managing information and more time learning, building, and
                  innovating.
                </p>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="rounded-[32px] border border-white/10 bg-[#111111] p-8 md:p-12 shadow-2xl glow-effect mb-20"
          >
            <h2 className="text-3xl font-bold text-white mb-8 sm:text-4xl">
              What OpenCampus OS Offers
            </h2>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              transition={{ staggerChildren: 0.1 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              <motion.div
                variants={itemVariants}
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-2xl border border-white/5 bg-[#090909] p-6 hover:border-white/10 transition-colors duration-300"
                >
                  <h3 className="font-semibold text-lg mb-2 text-white">
                    📚 Assignments
                  </h3>
                  <p className="text-[#9F9F9F]">
                    Manage deadlines and submissions effortlessly.
                  </p>
                </motion.div>
              </motion.div>

              <motion.div
                variants={itemVariants}
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-2xl border border-white/5 bg-[#090909] p-6 hover:border-white/10 transition-colors duration-300"
                >
                  <h3 className="font-semibold text-lg mb-2 text-white">
                    📅 Attendance
                  </h3>
                  <p className="text-[#9F9F9F]">
                    Track attendance with real-time statistics.
                  </p>
                </motion.div>
              </motion.div>

              <motion.div
                variants={itemVariants}
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-2xl border border-white/5 bg-[#090909] p-6 hover:border-white/10 transition-colors duration-300"
                >
                  <h3 className="font-semibold text-lg mb-2 text-white">
                    📝 Notes
                  </h3>
                  <p className="text-[#9F9F9F]">
                    Organize study materials in one place.
                  </p>
                </motion.div>
              </motion.div>

              <motion.div
                variants={itemVariants}
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-2xl border border-white/5 bg-[#090909] p-6 hover:border-white/10 transition-colors duration-300"
                >
                  <h3 className="font-semibold text-lg mb-2 text-white">
                    💼 Internships
                  </h3>
                  <p className="text-[#9F9F9F]">
                    Discover internship opportunities and placements.
                  </p>
                </motion.div>
              </motion.div>

              <motion.div
                variants={itemVariants}
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-2xl border border-white/5 bg-[#090909] p-6 hover:border-white/10 transition-colors duration-300"
                >
                  <h3 className="font-semibold text-lg mb-2 text-white">
                    🏆 Hackathons
                  </h3>
                  <p className="text-[#9F9F9F]">
                    Stay updated with competitions and events.
                  </p>
                </motion.div>
              </motion.div>

              <motion.div
                variants={itemVariants}
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-2xl border border-white/5 bg-[#090909] p-6 hover:border-white/10 transition-colors duration-300"
                >
                  <h3 className="font-semibold text-lg mb-2 text-white">
                    📊 Dashboard
                  </h3>
                  <p className="text-[#9F9F9F]">
                    Get a complete overview of your academic progress.
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>

        </div>
      </section>

      <Footer />
    </main>
  );
}