"use client";

import {
  LayoutDashboard,
  ClipboardList,
  CalendarCheck,
  BookOpen,
  Briefcase,
  Trophy,
  TrendingUp,
  Users,
  BarChart3,
  Activity,
  Zap,
  Clock,
  CheckCircle,
  ArrowUpRight,
  CreditCard,
  DollarSign,
  PieChart,
  LineChart,
  Bell,
  Settings,
  Search,
  Plus,
  ChevronRight,
} from "lucide-react";
import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const features = [
  {
    title: "Dashboard",
    description:
      "View your academic progress, attendance, assignments and important updates in one place.",
    icon: LayoutDashboard,
    color: "#FF8C42",
    metrics: [
      { label: "GPA", value: "3.8", trend: "+0.2" },
      { label: "Attendance", value: "92%", trend: "+5%" },
      { label: "Tasks", value: "12", trend: "-3" },
    ],
  },
  {
    title: "Assignments",
    description:
      "Track pending work, submission deadlines and completed assignments.",
    icon: ClipboardList,
    color: "#FF8C42",
    metrics: [
      { label: "Pending", value: "5", trend: "" },
      { label: "Completed", value: "24", trend: "+8" },
      { label: "Due Soon", value: "2", trend: "" },
    ],
  },
  {
    title: "Attendance",
    description:
      "Monitor subject-wise attendance with detailed statistics and progress.",
    icon: CalendarCheck,
    color: "#FF8C42",
    metrics: [
      { label: "Overall", value: "89%", trend: "+3%" },
      { label: "This Week", value: "95%", trend: "+2%" },
      { label: "Classes", value: "42", trend: "" },
    ],
  },
  {
    title: "Notes",
    description:
      "Store and organize lecture notes and study material for quick access.",
    icon: BookOpen,
    color: "#FF8C42",
    metrics: [
      { label: "Notes", value: "156", trend: "+12" },
      { label: "Subjects", value: "6", trend: "" },
      { label: "Shared", value: "23", trend: "+5" },
    ],
  },
  {
    title: "Internships",
    description:
      "Explore internship opportunities, placement drives and career updates.",
    icon: Briefcase,
    color: "#FF8C42",
    metrics: [
      { label: "Applied", value: "18", trend: "+4" },
      { label: "Interviews", value: "3", trend: "+1" },
      { label: "Offers", value: "1", trend: "" },
    ],
  },
  {
    title: "Hackathons",
    description:
      "Stay informed about coding competitions, workshops and campus events.",
    icon: Trophy,
    color: "#FF8C42",
    metrics: [
      { label: "Registered", value: "8", trend: "+2" },
      { label: "Completed", value: "5", trend: "+1" },
      { label: "Awards", value: "2", trend: "" },
    ],
  },
];

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

// Animated Counter Component
function AnimatedCounter({ value, duration = 2 }: { value: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
        setCount(Math.floor(progress * value));
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    }
  }, [isInView, value, duration]);

  return <span ref={ref}>{count}</span>;
}

// Scrolling Chart Component
function ScrollingChart() {
  const [data, setData] = useState<number[]>([]);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setData(prev => {
        const newData = [...prev, Math.random() * 50 + 30];
        if (newData.length > 20) newData.shift();
        return newData;
      });
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-end gap-1 h-24">
      {data.map((value, i) => (
        <motion.div
          key={i}
          initial={{ height: 0 }}
          animate={{ height: `${value}%` }}
          transition={{ duration: 0.3 }}
          className="flex-1 bg-[#FF8C42]/30 rounded-t"
        />
      ))}
    </div>
  );
}

export default function FeaturesPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#090909]">
      {/* Background effects */}
      <div className="absolute inset-0 noise-texture">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#FF8C42] rounded-full blur-[150px] opacity-[0.06]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#FF8C42] rounded-full blur-[120px] opacity-[0.04]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#FF8C42] rounded-full blur-[100px] opacity-[0.03]" />
      </div>

      <Navbar />

      <section className="relative z-10 px-6 pt-32 pb-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-20"
          >
            <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl">
              Features
            </h1>

            <p className="mt-6 text-lg text-[#9F9F9F] max-w-3xl mx-auto">
              Everything a student needs to manage academics efficiently,
              all in one modern platform.
            </p>
          </motion.div>

          {/* Feature Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ staggerChildren: 0.15 }}
            className="space-y-24"
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={feature.title}
                  variants={itemVariants}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className={`flex flex-col gap-8 lg:gap-16 ${
                    isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Content */}
                  <div className="flex-1 flex flex-col justify-center">
                    <motion.div
                      whileHover={{ x: isEven ? 5 : -5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 mb-6">
                        <Icon size={18} className="text-[#FF8C42]" />
                        <span className="text-sm text-[#9F9F9F]">Feature</span>
                      </div>

                      <h2 className="text-4xl font-bold text-white mb-4 sm:text-5xl">
                        {feature.title}
                      </h2>

                      <p className="text-lg text-[#9F9F9F] leading-8 mb-8">
                        {feature.description}
                      </p>

                      {/* Metrics */}
                      <div className="grid grid-cols-3 gap-4">
                        {feature.metrics.map((metric) => (
                          <div
                            key={metric.label}
                            className="rounded-2xl border border-white/10 bg-[#111111] p-4"
                          >
                            <div className="text-sm text-[#9F9F9F] mb-1">
                              {metric.label}
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-2xl font-bold text-white">
                                {metric.value}
                              </span>
                              {metric.trend && (
                                <span className="flex items-center text-xs text-green-400">
                                  <ArrowUpRight size={12} />
                                  {metric.trend}
                                </span>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  </div>

                  {/* Mock Dashboard */}
                  <div className="flex-1">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                      className="relative rounded-[28px] border border-white/10 bg-[#111111] p-3 shadow-2xl shadow-black/50 hover:shadow-[0_0_60px_rgba(255,140,66,0.15)] transition-shadow duration-300"
                    >
                      {/* Browser window header */}
                      <div className="flex items-center gap-2 rounded-2xl bg-[#151515] px-4 py-3 mb-3">
                        <div className="flex gap-2">
                          <div className="h-3 w-3 rounded-full bg-red-500/80" />
                          <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                          <div className="h-3 w-3 rounded-full bg-green-500/80" />
                        </div>
                        <div className="ml-4 flex-1 rounded-lg bg-[#090909] px-4 py-1.5">
                          <div className="text-xs text-[#9F9F9F]">
                            opencampus.os/{feature.title.toLowerCase()}
                          </div>
                        </div>
                      </div>

                      {/* Dashboard content */}
                      <div className="rounded-2xl bg-[#090909] p-6 space-y-4">
                        {/* Top stats */}
                        <div className="grid grid-cols-3 gap-3">
                          {feature.metrics.map((metric, i) => (
                            <div
                              key={i}
                              className="rounded-xl border border-white/5 bg-[#111111] p-4"
                            >
                              <div className="h-2 w-16 rounded-lg bg-white/10 mb-3" />
                              <div className="h-6 w-10 rounded-lg bg-white/20" />
                            </div>
                          ))}
                        </div>

                        {/* Main content */}
                        <div className="grid grid-cols-2 gap-3">
                          <div className="rounded-xl border border-white/5 bg-[#111111] p-4">
                            <div className="h-2 w-20 rounded-lg bg-white/10 mb-3" />
                            <div className="space-y-2">
                              <div className="h-2 w-full rounded-lg bg-white/5" />
                              <div className="h-2 w-4/5 rounded-lg bg-white/5" />
                              <div className="h-2 w-3/5 rounded-lg bg-white/5" />
                            </div>
                          </div>
                          <div className="rounded-xl border border-white/5 bg-[#111111] p-4">
                            <div className="h-2 w-20 rounded-lg bg-white/10 mb-3" />
                            <div className="space-y-2">
                              <div className="h-2 w-full rounded-lg bg-white/5" />
                              <div className="h-2 w-4/5 rounded-lg bg-white/5" />
                              <div className="h-2 w-3/5 rounded-lg bg-white/5" />
                            </div>
                          </div>
                        </div>

                        {/* Bottom section */}
                        <div className="rounded-xl border border-white/5 bg-[#111111] p-4">
                          <div className="flex items-center gap-2 mb-3">
                            <div className="h-2 w-24 rounded-lg bg-white/10" />
                          </div>
                          <div className="flex gap-2">
                            <div className="h-8 w-8 rounded-lg bg-[#FF8C42]/20" />
                            <div className="h-8 w-8 rounded-lg bg-white/5" />
                            <div className="h-8 w-8 rounded-lg bg-white/5" />
                          </div>
                        </div>
                      </div>

                      {/* Floating UI cards */}
                      <motion.div
                        animate={{
                          y: [0, -10, 0],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className="absolute -top-4 -right-4 rounded-2xl border border-white/10 bg-[#111111] p-4 shadow-xl"
                      >
                        <div className="flex items-center gap-2">
                          <div className="h-8 w-8 rounded-lg bg-[#FF8C42]/20 flex items-center justify-center">
                            <TrendingUp size={16} className="text-[#FF8C42]" />
                          </div>
                          <div>
                            <div className="text-xs text-[#9F9F9F]">Growth</div>
                            <div className="text-sm font-bold text-white">+24%</div>
                          </div>
                        </div>
                      </motion.div>

                      <motion.div
                        animate={{
                          y: [0, 10, 0],
                        }}
                        transition={{
                          duration: 5,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className="absolute -bottom-4 -left-4 rounded-2xl border border-white/10 bg-[#111111] p-4 shadow-xl"
                      >
                        <div className="flex items-center gap-2">
                          <div className="h-8 w-8 rounded-lg bg-green-500/20 flex items-center justify-center">
                            <CheckCircle size={16} className="text-green-400" />
                          </div>
                          <div>
                            <div className="text-xs text-[#9F9F9F]">Status</div>
                            <div className="text-sm font-bold text-white">Active</div>
                          </div>
                        </div>
                      </motion.div>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Product Showcase Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mt-32"
          >
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl">
                Product Showcase
              </h2>
              <p className="mt-6 text-lg text-[#9F9F9F] max-w-3xl mx-auto">
                Experience the power of OpenCampus OS with our premium dashboard
              </p>
            </div>

            {/* Interactive Dashboard Window */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative rounded-[32px] border border-white/10 bg-[#111111] p-2 shadow-2xl shadow-black/50 hover:shadow-[0_0_80px_rgba(255,140,66,0.2)] transition-shadow duration-500"
            >
              {/* Browser window header */}
              <div className="flex items-center gap-2 rounded-2xl bg-[#151515] px-4 py-3 mb-2">
                <div className="flex gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-500/80" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                  <div className="h-3 w-3 rounded-full bg-green-500/80" />
                </div>
                <div className="ml-4 flex-1 rounded-lg bg-[#090909] px-4 py-1.5">
                  <div className="text-xs text-[#9F9F9F]">opencampus.os/dashboard</div>
                </div>
                <div className="flex gap-2">
                  <div className="h-8 w-8 rounded-lg bg-white/5 flex items-center justify-center">
                    <Bell size={16} className="text-[#9F9F9F]" />
                  </div>
                  <div className="h-8 w-8 rounded-lg bg-white/5 flex items-center justify-center">
                    <Settings size={16} className="text-[#9F9F9F]" />
                  </div>
                </div>
              </div>

              {/* Dashboard Content */}
              <div className="flex h-[700px] rounded-2xl bg-[#090909] overflow-hidden">
                {/* Sidebar */}
                <div className="w-64 border-r border-white/5 bg-[#111111] p-4">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="h-10 w-10 rounded-xl bg-[#FF8C42]/20 flex items-center justify-center">
                      <LayoutDashboard size={20} className="text-[#FF8C42]" />
                    </div>
                    <span className="font-bold text-white">OpenCampus</span>
                  </div>

                  <nav className="space-y-2">
                    {[
                      { icon: LayoutDashboard, label: "Dashboard", active: true },
                      { icon: ClipboardList, label: "Assignments", active: false },
                      { icon: CalendarCheck, label: "Attendance", active: false },
                      { icon: BookOpen, label: "Notes", active: false },
                      { icon: Briefcase, label: "Internships", active: false },
                      { icon: Trophy, label: "Hackathons", active: false },
                    ].map((item, i) => (
                      <motion.div
                        key={i}
                        whileHover={{ x: 5 }}
                        className={`flex items-center gap-3 rounded-xl px-4 py-3 cursor-pointer transition-colors ${
                          item.active
                            ? "bg-[#FF8C42]/10 text-[#FF8C42]"
                            : "text-[#9F9F9F] hover:bg-white/5"
                        }`}
                      >
                        <item.icon size={18} />
                        <span className="text-sm font-medium">{item.label}</span>
                      </motion.div>
                    ))}
                  </nav>

                  {/* User Profile */}
                  <div className="absolute bottom-8 left-8 right-8">
                    <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-[#151515] p-3">
                      <div className="h-10 w-10 rounded-full bg-[#FF8C42]/20 flex items-center justify-center">
                        <span className="text-sm font-bold text-[#FF8C42]">HS</span>
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-medium text-white">Hriday Sharma</div>
                        <div className="text-xs text-[#9F9F9F]">Student</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Main Content */}
                <div className="flex-1 p-6 overflow-y-auto">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-white">Dashboard</h3>
                      <p className="text-sm text-[#9F9F9F]">Welcome back, Hriday!</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#9F9F9F]" />
                        <input
                          type="text"
                          placeholder="Search..."
                          className="h-10 w-64 rounded-xl border border-white/10 bg-[#111111] pl-10 pr-4 text-sm text-white placeholder-[#9F9F9F] focus:outline-none focus:border-[#FF8C42]/50"
                        />
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 rounded-xl bg-[#FF8C42] px-4 py-2 text-sm font-medium text-white"
                      >
                        <Plus size={16} />
                        New
                      </motion.button>
                    </div>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-4 gap-4 mb-6">
                    {[
                      { label: "Total Students", value: 2847, icon: Users, color: "text-blue-400", trend: "+12%" },
                      { label: "Active Courses", value: 156, icon: BookOpen, color: "text-green-400", trend: "+8%" },
                      { label: "Assignments", value: 892, icon: ClipboardList, color: "text-purple-400", trend: "+23%" },
                      { label: "Attendance Rate", value: 94, icon: CalendarCheck, color: "text-[#FF8C42]", trend: "+5%" },
                    ].map((stat, i) => (
                      <motion.div
                        key={i}
                        whileHover={{ y: -5 }}
                        className="rounded-2xl border border-white/10 bg-[#111111] p-5 hover:border-white/20 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,140,66,0.1)]"
                      >
                        <div className="flex items-center justify-between mb-3">
                          <div className={`h-10 w-10 rounded-xl bg-white/5 flex items-center justify-center ${stat.color}`}>
                            <stat.icon size={20} />
                          </div>
                          <span className="flex items-center text-xs text-green-400">
                            <ArrowUpRight size={12} />
                            {stat.trend}
                          </span>
                        </div>
                        <div className="text-3xl font-bold text-white mb-1">
                          <AnimatedCounter value={stat.value} />
                        </div>
                        <div className="text-sm text-[#9F9F9F]">{stat.label}</div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Charts Section */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {/* Main Chart */}
                    <motion.div
                      whileHover={{ y: -3 }}
                      className="col-span-2 rounded-2xl border border-white/10 bg-[#111111] p-5 hover:border-white/20 transition-all duration-300"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="font-semibold text-white">Activity Overview</h4>
                        <div className="flex gap-2">
                          <span className="px-3 py-1 rounded-lg bg-[#FF8C42]/10 text-xs text-[#FF8C42]">Weekly</span>
                          <span className="px-3 py-1 rounded-lg bg-white/5 text-xs text-[#9F9F9F]">Monthly</span>
                        </div>
                      </div>
                      <ScrollingChart />
                      <div className="flex justify-between mt-4 text-xs text-[#9F9F9F]">
                        <span>Mon</span>
                        <span>Tue</span>
                        <span>Wed</span>
                        <span>Thu</span>
                        <span>Fri</span>
                        <span>Sat</span>
                        <span>Sun</span>
                      </div>
                    </motion.div>

                    {/* Pie Chart */}
                    <motion.div
                      whileHover={{ y: -3 }}
                      className="rounded-2xl border border-white/10 bg-[#111111] p-5 hover:border-white/20 transition-all duration-300"
                    >
                      <h4 className="font-semibold text-white mb-4">Course Distribution</h4>
                      <div className="relative h-40 flex items-center justify-center">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-center">
                            <div className="text-2xl font-bold text-white">6</div>
                            <div className="text-xs text-[#9F9F9F]">Courses</div>
                          </div>
                        </div>
                        <svg viewBox="0 0 100 100" className="w-32 h-32 transform -rotate-90">
                          <circle cx="50" cy="50" r="40" fill="none" stroke="rgba(255,140,66,0.2)" strokeWidth="12" />
                          <circle cx="50" cy="50" r="40" fill="none" stroke="#FF8C42" strokeWidth="12" strokeDasharray="150 251" strokeLinecap="round" />
                          <circle cx="50" cy="50" r="40" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="12" strokeDasharray="60 251" strokeDashoffset="-150" strokeLinecap="round" />
                          <circle cx="50" cy="50" r="40" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="12" strokeDasharray="41 251" strokeDashoffset="-210" strokeLinecap="round" />
                        </svg>
                      </div>
                      <div className="space-y-2 mt-4">
                        <div className="flex items-center justify-between text-xs">
                          <div className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-[#FF8C42]" />
                            <span className="text-[#9F9F9F]">CS</span>
                          </div>
                          <span className="text-white">60%</span>
                        </div>
                        <div className="flex items-center justify-between text-xs">
                          <div className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-white/20" />
                            <span className="text-[#9F9F9F]">Math</span>
                          </div>
                          <span className="text-white">24%</span>
                        </div>
                        <div className="flex items-center justify-between text-xs">
                          <div className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-white/10" />
                            <span className="text-[#9F9F9F]">Other</span>
                          </div>
                          <span className="text-white">16%</span>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Bottom Section */}
                  <div className="grid grid-cols-2 gap-4">
                    {/* Recent Activity */}
                    <motion.div
                      whileHover={{ y: -3 }}
                      className="rounded-2xl border border-white/10 bg-[#111111] p-5 hover:border-white/20 transition-all duration-300"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="font-semibold text-white">Recent Activity</h4>
                        <ChevronRight size={16} className="text-[#9F9F9F]" />
                      </div>
                      <div className="space-y-3">
                        {[
                          { action: "Assignment submitted", time: "2 min ago", icon: CheckCircle, color: "text-green-400" },
                          { action: "Attendance marked", time: "15 min ago", icon: CalendarCheck, color: "text-blue-400" },
                          { action: "New note added", time: "1 hour ago", icon: BookOpen, color: "text-purple-400" },
                          { action: "Hackathon registered", time: "3 hours ago", icon: Trophy, color: "text-[#FF8C42]" },
                        ].map((activity, i) => (
                          <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-[#090909]">
                            <div className={`h-8 w-8 rounded-lg bg-white/5 flex items-center justify-center ${activity.color}`}>
                              <activity.icon size={16} />
                            </div>
                            <div className="flex-1">
                              <div className="text-sm text-white">{activity.action}</div>
                              <div className="text-xs text-[#9F9F9F]">{activity.time}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>

                    {/* Payment Widget */}
                    <motion.div
                      whileHover={{ y: -3 }}
                      className="rounded-2xl border border-white/10 bg-[#111111] p-5 hover:border-white/20 transition-all duration-300"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="font-semibold text-white">Payment Status</h4>
                        <CreditCard size={18} className="text-[#9F9F9F]" />
                      </div>
                      <div className="rounded-xl bg-gradient-to-br from-[#FF8C42]/20 to-[#FF8C42]/5 p-4 mb-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm text-[#9F9F9F]">Semester Fees</span>
                          <span className="text-xs px-2 py-1 rounded-full bg-green-500/20 text-green-400">Paid</span>
                        </div>
                        <div className="text-2xl font-bold text-white mb-1">₹45,000</div>
                        <div className="text-xs text-[#9F9F9F]">Paid on Jan 15, 2024</div>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between p-3 rounded-xl bg-[#090909]">
                          <div className="flex items-center gap-3">
                            <div className="h-8 w-8 rounded-lg bg-blue-500/20 flex items-center justify-center">
                              <DollarSign size={16} className="text-blue-400" />
                            </div>
                            <div>
                              <div className="text-sm text-white">Library Fine</div>
                              <div className="text-xs text-[#9F9F9F]">Due: Jan 20</div>
                            </div>
                          </div>
                          <div className="text-sm font-medium text-white">₹150</div>
                        </div>
                        <div className="flex items-center justify-between p-3 rounded-xl bg-[#090909]">
                          <div className="flex items-center gap-3">
                            <div className="h-8 w-8 rounded-lg bg-purple-500/20 flex items-center justify-center">
                              <Trophy size={16} className="text-purple-400" />
                            </div>
                            <div>
                              <div className="text-sm text-white">Hackathon Fee</div>
                              <div className="text-xs text-[#9F9F9F]">Due: Jan 25</div>
                            </div>
                          </div>
                          <div className="text-sm font-medium text-white">₹500</div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Bottom Banner */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mt-32 rounded-[32px] border border-white/10 bg-[#111111] p-10 text-center shadow-2xl glow-effect"
          >
            <h2 className="text-3xl font-bold text-white mb-4 sm:text-4xl">
              One Platform. Complete Campus Experience.
            </h2>

            <p className="text-lg text-[#9F9F9F] max-w-3xl mx-auto">
              OpenCampus OS brings together academics, attendance,
              assignments, notes, internships and events into one seamless
              student portal.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}