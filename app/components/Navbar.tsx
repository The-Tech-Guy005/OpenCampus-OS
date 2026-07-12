"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const GITHUB_URL = "https://github.com/The-Tech-Guy005/OpenCampus-OS";

const NAV_LINKS = [
  { label: "Features", href: "/features" },
  { label: "About", href: "/about" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-slate-900/70 shadow-lg shadow-black/20 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10 lg:px-16">
        <Link
          href="/"
          onClick={() => setMenuOpen(false)}
          className="flex items-center gap-2 text-lg font-bold text-white sm:text-xl"
        >
          <span aria-hidden>🎓</span>
          <span>OpenCampus OS</span>
        </Link>

        <div className="hidden items-center gap-6 md:flex lg:gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-200 transition hover:text-cyan-400"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-slate-200 transition hover:text-cyan-400"
          >
            GitHub
          </a>
          <Link href="/dashboard">
            <button className="rounded-lg bg-cyan-400 px-5 py-2 text-sm font-semibold text-slate-900 transition hover:scale-105 hover:bg-cyan-300">
              Get Started
            </button>
          </Link>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
          className="flex h-10 w-10 items-center justify-center rounded-md text-white md:hidden"
        >
          <span className="relative block h-4 w-6">
            <span
              className={`absolute left-0 top-0 h-0.5 w-6 bg-white transition-transform duration-200 ${
                menuOpen ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-1/2 h-0.5 w-6 -translate-y-1/2 bg-white transition-opacity duration-200 ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute bottom-0 left-0 h-0.5 w-6 bg-white transition-transform duration-200 ${
                menuOpen ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-white/10 bg-slate-900/95 backdrop-blur-md md:hidden">
          <div className="flex flex-col gap-1 px-6 py-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-md px-3 py-2 text-sm font-medium text-slate-200 transition hover:bg-white/5 hover:text-cyan-400"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="rounded-md px-3 py-2 text-sm font-medium text-slate-200 transition hover:bg-white/5 hover:text-cyan-400"
            >
              GitHub
            </a>
            <Link href="/dashboard" onClick={() => setMenuOpen(false)}>
              <button className="mt-2 w-full rounded-lg bg-cyan-400 px-5 py-2 text-sm font-semibold text-slate-900 transition hover:bg-cyan-300">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
