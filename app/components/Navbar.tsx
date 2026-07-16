"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const GITHUB_URL = "https://github.com/The-Tech-Guy005/OpenCampus-OS";

const NAV_LINKS = [
  { label: "Features", href: "/features" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "glass-effect shadow-lg shadow-black/20"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10 lg:px-16">
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="flex items-center gap-3 text-xl font-bold text-white transition-opacity hover:opacity-80"
          >
            <span aria-hidden className="text-2xl">🎓</span>
            <span>OpenCampus OS</span>
          </Link>

          <div className="hidden items-center gap-8 md:flex lg:gap-10">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-[#9F9F9F] transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-[#9F9F9F] transition-colors hover:text-white"
            >
              GitHub
            </a>
            <Link href="/dashboard">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="rounded-2xl bg-[#FF8C42] px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#ff9d5c]"
              >
                Get Started
              </motion.button>
            </Link>
          </div>

          <motion.button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
            whileTap={{ scale: 0.95 }}
            className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white backdrop-blur-sm transition-colors hover:bg-white/10 md:hidden"
          >
            <span className="relative block h-4 w-6">
              <motion.span
                animate={{
                  rotate: menuOpen ? 45 : 0,
                  translateY: menuOpen ? 8 : 0,
                }}
                transition={{ duration: 0.2 }}
                className="absolute left-0 top-0 h-0.5 w-6 bg-white"
              />
              <motion.span
                animate={{ opacity: menuOpen ? 0 : 1 }}
                transition={{ duration: 0.2 }}
                className="absolute left-0 top-1/2 h-0.5 w-6 -translate-y-1/2 bg-white"
              />
              <motion.span
                animate={{
                  rotate: menuOpen ? -45 : 0,
                  translateY: menuOpen ? -8 : 0,
                }}
                transition={{ duration: 0.2 }}
                className="absolute bottom-0 left-0 h-0.5 w-6 bg-white"
              />
            </span>
          </motion.button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="glass-effect md:hidden"
          >
            <div className="flex flex-col gap-2 px-6 py-6">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-2xl px-4 py-3 text-sm font-medium text-[#9F9F9F] transition-colors hover:bg-white/5 hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="rounded-2xl px-4 py-3 text-sm font-medium text-[#9F9F9F] transition-colors hover:bg-white/5 hover:text-white"
              >
                GitHub
              </a>
              <Link href="/dashboard" onClick={() => setMenuOpen(false)}>
                <motion.button
                  whileTap={{ scale: 0.98 }}
                  className="mt-2 w-full rounded-2xl bg-[#FF8C42] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#ff9d5c]"
                >
                  Get Started
                </motion.button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
