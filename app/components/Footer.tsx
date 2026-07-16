"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MessageCircle, Users, ArrowUp, Mail, Code } from "lucide-react";
import { useState } from "react";

const GITHUB_URL = "https://github.com/The-Tech-Guy005/OpenCampus-OS";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Features", href: "/features" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/faq" },
];

const SOCIAL_LINKS = [
  { icon: Code, href: GITHUB_URL, label: "GitHub" },
  { icon: MessageCircle, href: "#", label: "Twitter" },
  { icon: Users, href: "#", label: "LinkedIn" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/10 bg-[#090909]">
      {/* Background effects */}
      <div className="absolute inset-0 noise-texture">
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-[#FF8C42] rounded-full blur-[150px] opacity-[0.04]" />
        <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-[#FF8C42] rounded-full blur-[120px] opacity-[0.03]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link
              href="/"
              className="flex items-center gap-3 text-xl font-bold text-white mb-4"
            >
              <span aria-hidden className="text-2xl">🎓</span>
              <span>OpenCampus OS</span>
            </Link>
            <p className="text-sm text-[#9F9F9F] leading-6 mb-6">
              The modern student management platform designed to simplify campus
              life and boost academic success.
            </p>
            <div className="flex gap-4">
              {SOCIAL_LINKS.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="h-10 w-10 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center text-[#9F9F9F] transition-colors hover:bg-white/10 hover:text-white"
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
              Navigation
            </h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#9F9F9F] transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
              Resources
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#9F9F9F] transition-colors hover:text-white"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-[#9F9F9F] transition-colors hover:text-white"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-[#9F9F9F] transition-colors hover:text-white"
                >
                  API Reference
                </a>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-sm text-[#9F9F9F] transition-colors hover:text-white"
                >
                  Help Center
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
              Stay Updated
            </h3>
            <p className="text-sm text-[#9F9F9F] mb-4">
              Subscribe to our newsletter for updates and tips.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-3">
              <div className="relative">
                <Mail
                  size={16}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-[#9F9F9F]"
                />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full rounded-xl border border-white/10 bg-[#111111] pl-10 pr-4 py-3 text-sm text-white placeholder-[#9F9F9F] focus:outline-none focus:border-[#FF8C42]/50 transition-colors"
                  required
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full rounded-xl bg-[#FF8C42] px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#ff9d5c]"
              >
                {subscribed ? "Subscribed!" : "Subscribe"}
              </motion.button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[#9F9F9F]">
            © {new Date().getFullYear()} OpenCampus OS. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-sm text-[#9F9F9F] transition-colors hover:text-white"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-sm text-[#9F9F9F] transition-colors hover:text-white"
            >
              Terms of Service
            </a>
          </div>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Back to top"
            className="h-10 w-10 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center text-[#9F9F9F] transition-colors hover:bg-white/10 hover:text-white"
          >
            <ArrowUp size={18} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
