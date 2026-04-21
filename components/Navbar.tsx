"use client";
import { useEffect, useState } from "react";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0a0a0f]/80 backdrop-blur-xl border-b border-[#1e1e2e]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="font-display text-xl font-bold group flex items-center gap-2">
          <span className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center text-white text-sm font-bold">
            SK
          </span>
          <span className="text-text group-hover:text-accent transition-colors">
            Sujeet<span className="text-accent">.</span>
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-text-muted hover:text-accent transition-colors font-body relative group"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-accent group-hover:w-full transition-all duration-300" />
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="mailto:sujeetkhupase196@gmail.com"
          className="hidden md:flex items-center gap-2 px-5 py-2 rounded-full border border-accent text-accent text-sm font-body font-medium hover:bg-accent hover:text-white transition-all duration-300"
        >
          Hire Me
          <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <span className={`block w-6 h-0.5 bg-text transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-text transition-all duration-300 ${open ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-text transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          open ? "max-h-96 border-t border-[#1e1e2e]" : "max-h-0"
        } bg-[#0a0a0f]/95 backdrop-blur-xl`}
      >
        <ul className="px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-text-muted hover:text-accent transition-colors font-body text-sm"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="mailto:sujeetkhupase196@gmail.com"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-accent text-accent text-sm font-body font-medium hover:bg-accent hover:text-white transition-all duration-300"
            >
              Hire Me
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
