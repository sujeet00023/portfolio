"use client";
import { useState, useEffect } from "react";
import { useReveal } from "./useReveal";

// SSR-safe: avoids hydration mismatch from dynamic classNames
function useMounted() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return mounted;
}

const projects = [
  {
    title: "CollabBoard",
    subtitle: "Real-Time Collaboration Tool",
    description:
      "Full-stack real-time Kanban board with live cursors, drag-and-drop card sync across all users, board chat with unread badges, JWT auth, and invite links. Built with WebSockets from scratch.",
    tech: ["Next.js", "Node.js", "Socket.io", "MongoDB", "TypeScript", "Tailwind CSS"],
    color: "#6c63ff",
    accentLight: "#e8e7ff",
    emoji: "🧩",
    type: "Personal",
    tier: "flagship",
    link: "https://collabrationboard.vercel.app",
    github: "https://github.com/sujeet00023/collabration-board",
  },
  {
    title: "HireTrack",
    subtitle: "Job Application Tracking System",
    description:
      "Applicant tracking platform with filtering, search, pagination, analytics dashboard for hiring insights, and automated email reminders via scheduled background jobs.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    color: "#ff6584",
    accentLight: "#ffe8ed",
    emoji: "📋",
    type: "Personal",
    tier: "flagship",
    link: "https://hiretrackio.vercel.app",
    github: "https://github.com/sujeet00023/HireTrack",
  },
  {
    title: "NexGen CRM",
    subtitle: "Multi-Tenant SaaS Platform",
    description:
      "Scalable multi-tenant CRM with full data isolation, four-tier RBAC (Owner, Admin, Member, Viewer), JWT + httpOnly cookie auth, and audit logging.",
    tech: ["Next.js", "TypeScript", "MongoDB", "Tailwind CSS"],
    color: "#00c2ff",
    accentLight: "#e0f7ff",
    emoji: "🚀",
    type: "Personal",
    tier: "featured",
    link: "https://next-gen-crm-nine.vercel.app",
    github: "https://github.com/sujeet00023/Next-gen-CRM",
  },
  {
    title: "Custom CRM",
    subtitle: "Europass Immigration",
    description:
      "Internal CRM managing client workflows, REST APIs, automation features, and dashboard for tracking client data — built and maintained in production.",
    tech: ["Next.js", "TypeScript", "Node.js", "Tailwind CSS"],
    color: "#43e97b",
    accentLight: "#e2fff0",
    emoji: "🏢",
    type: "Work",
    tier: "featured",
    link: "",
    github: "",
  },
  {
    title: "Company Website",
    subtitle: "Europass Immigration",
    description:
      "Responsive website with OTP-based SMS auth (Fast2SMS), email automation, and cross-device performance. Built with performance-first architecture.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Fast2SMS API"],
    color: "#f97316",
    accentLight: "#fff3e8",
    emoji: "🌐",
    type: "Work",
    tier: "small",
    link: "",
    github: "",
  },
  {
    title: "Online Book Store",
    subtitle: "Academic Project",
    description:
      "Platform for buying and selling second-hand books with user registration, listings, and cart management.",
    tech: ["Java", "JSP", "MySQL"],
    color: "#ffd700",
    accentLight: "#fffbe6",
    emoji: "📚",
    type: "Academic",
    tier: "small",
    link: "",
    github: "",
  },
  {
    title: "Grocery E-Commerce",
    subtitle: "Academic Project",
    description:
      "Full-stack e-commerce with auth, order history, real-time cart, payment gateway, and admin dashboard.",
    tech: ["Java", "Servlet", "MySQL"],
    color: "#a78bfa",
    accentLight: "#f3f0ff",
    emoji: "🛒",
    type: "Academic",
    tier: "small",
    link: "",
    github: "",
  },
  {
    title: "Hospital Portal",
    subtitle: "Academic Project",
    description:
      "Role-based portal for patients, doctors, and admins with billing, invoices, and access control.",
    tech: ["Django", "Python", "HTML/CSS"],
    color: "#00d4ff",
    accentLight: "#e0faff",
    emoji: "🏥",
    type: "Academic",
    tier: "small",
    link: "",
    github: "",
  },
];

const FILTERS = ["All", "Personal", "Work", "Academic"] as const;
type Filter = (typeof FILTERS)[number];

/* ─── SVG Icons ──────────────────────────────────────────── */
const IconExternal = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
    <polyline points="15 3 21 3 21 9"/>
    <line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
);

const IconGithub = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
  </svg>
);

/* ─── Flagship Card ──────────────────────────────────────── */
function FlagshipCard({ p, index }: { p: (typeof projects)[0]; index: number }) {
  return (
    <div
      className="reveal group relative rounded-2xl overflow-hidden"
      style={{ transitionDelay: `${(index + 1) * 100}ms` }}
    >
      {/* Outer border glow on hover */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ boxShadow: `0 0 0 1px ${p.color}50, 0 8px 40px ${p.color}18` }}
      />

      {/* Card body */}
      <div className="relative bg-[#0a0a12] border border-[#1c1c2c] rounded-2xl overflow-hidden h-full">

        {/* Top accent bar */}
        <div className="h-[3px] w-full" style={{ background: `linear-gradient(90deg, ${p.color}, ${p.color}40)` }} />

        {/* Mesh background blob */}
        <div
          className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-[0.06] group-hover:opacity-[0.10] transition-opacity duration-700"
          style={{ background: p.color, filter: "blur(60px)", transform: "translate(30%, -30%)" }}
        />

        <div className="relative p-7 flex flex-col gap-5 h-full">

          {/* Header row */}
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-4">
              {/* Icon box */}
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                style={{
                  background: `linear-gradient(135deg, ${p.color}22, ${p.color}0a)`,
                  border: `1px solid ${p.color}35`,
                  boxShadow: `0 4px 16px ${p.color}18`,
                }}
              >
                {p.emoji}
              </div>
              <div>
                <h3 className="font-display text-[1.2rem] font-bold text-text leading-tight tracking-tight">
                  {p.title}
                </h3>
                <p className="text-xs font-mono mt-1 opacity-90" style={{ color: p.color }}>
                  {p.subtitle}
                </p>
              </div>
            </div>

            {/* Flagship badge */}
            <div
              className="flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-mono font-semibold tracking-widest uppercase"
              style={{
                color: p.color,
                background: `${p.color}12`,
                border: `1px solid ${p.color}35`,
              }}
            >
              <span style={{ color: p.color }}>✦</span> Flagship
            </div>
          </div>

          {/* Divider */}
          <div className="h-px w-full" style={{ background: `linear-gradient(90deg, ${p.color}30, transparent)` }} />

          {/* Description */}
          <p className="text-[#8b8ba8] font-body text-[0.85rem] leading-[1.75] flex-1">
            {p.description}
          </p>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-2">
            {p.tech.map((t) => (
              <span
                key={t}
                className="px-3 py-1 rounded-lg text-[11px] font-mono text-[#7070a0] transition-colors duration-200 group-hover:text-[#9090c0]"
                style={{
                  background: "#12121e",
                  border: `1px solid ${p.color}20`,
                }}
              >
                {t}
              </span>
            ))}
          </div>

          {/* CTA links */}
          <div className="flex gap-3 pt-4 border-t border-[#15151f]">
            {p.link ? (
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all duration-200 hover:brightness-110 hover:-translate-y-0.5"
                style={{
                  background: `linear-gradient(135deg, ${p.color}28, ${p.color}10)`,
                  color: p.color,
                  border: `1px solid ${p.color}40`,
                  boxShadow: `0 2px 12px ${p.color}15`,
                }}
              >
                <IconExternal /> Live Demo
              </a>
            ) : (
              <span className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono text-[#3a3a55] border border-[#1e1e2e] cursor-default">
                🔒 Private / Work
              </span>
            )}
            {p.github && (
              <a
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl border border-[#242438] text-xs font-mono text-[#6666a0] hover:text-accent hover:border-accent/40 transition-all duration-200 hover:-translate-y-0.5"
              >
                <IconGithub /> Source
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Featured Card ──────────────────────────────────────── */
function FeaturedCard({ p, index }: { p: (typeof projects)[0]; index: number }) {
  return (
    <div
      className="reveal group relative rounded-2xl overflow-hidden"
      style={{ transitionDelay: `${(index + 3) * 100}ms` }}
    >
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ boxShadow: `0 0 0 1px ${p.color}40, 0 4px 24px ${p.color}12` }}
      />
      <div className="relative bg-[#0a0a12] border border-[#1c1c2c] rounded-2xl overflow-hidden h-full">
        <div className="h-[2px]" style={{ background: `linear-gradient(90deg, ${p.color}, transparent)` }} />
        <div
          className="absolute top-0 right-0 w-48 h-48 opacity-[0.05] group-hover:opacity-[0.09] transition-opacity duration-500"
          style={{ background: p.color, filter: "blur(48px)", transform: "translate(30%,-30%)" }}
        />

        <div className="relative p-6 flex flex-col gap-4 h-full">
          <div className="flex items-start justify-between gap-2">
            <div className="flex items-center gap-3">
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                style={{
                  background: `linear-gradient(135deg, ${p.color}20, ${p.color}08)`,
                  border: `1px solid ${p.color}30`,
                }}
              >
                {p.emoji}
              </div>
              <div>
                <h3 className="font-display text-base font-bold text-text leading-tight">{p.title}</h3>
                <p className="text-[11px] font-mono mt-0.5" style={{ color: p.color }}>{p.subtitle}</p>
              </div>
            </div>
            <span className="text-[9px] font-mono px-2.5 py-1 rounded-full border border-[#252538] text-[#4a4a70] uppercase tracking-wider flex-shrink-0 mt-0.5">
              {p.type}
            </span>
          </div>

          <p className="text-[#7e7e9e] font-body text-xs leading-relaxed flex-1">{p.description}</p>

          <div className="flex flex-wrap gap-1.5">
            {p.tech.map((t) => (
              <span
                key={t}
                className="px-2 py-0.5 rounded-md text-[10px] font-mono text-[#60608a]"
                style={{ background: "#111120", border: `1px solid ${p.color}18` }}
              >
                {t}
              </span>
            ))}
          </div>

          {(p.link || p.github) && (
            <div className="flex gap-2 pt-3 border-t border-[#13131e]">
              {p.link && (
                <a
                  href={p.link} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[11px] font-mono transition-all duration-200 hover:-translate-y-0.5"
                  style={{ background: `${p.color}14`, color: p.color, border: `1px solid ${p.color}30` }}
                >
                  <IconExternal /> Live
                </a>
              )}
              {p.github && (
                <a
                  href={p.github} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#222235] text-[11px] font-mono text-[#5a5a80] hover:text-accent transition-all"
                >
                  <IconGithub /> Code
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/* ─── Small Card ─────────────────────────────────────────── */
function SmallCard({ p, index }: { p: (typeof projects)[0]; index: number }) {
  return (
    <div
      className="reveal group relative rounded-xl overflow-hidden"
      style={{ transitionDelay: `${(index + 5) * 100}ms` }}
    >
      <div
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ boxShadow: `0 0 0 1px ${p.color}35, 0 4px 20px ${p.color}10` }}
      />
      <div className="relative bg-[#0a0a12] border border-[#1c1c2c] rounded-xl overflow-hidden h-full">
        {/* Left accent stripe */}
        <div
          className="absolute left-0 top-4 bottom-4 w-[2px] rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"
          style={{ background: `linear-gradient(180deg, ${p.color}, ${p.color}20)` }}
        />

        <div className="relative pl-5 pr-5 pt-5 pb-5 flex flex-col gap-3 h-full">
          <div className="flex items-center gap-3">
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center text-base flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
              style={{
                background: `${p.color}14`,
                border: `1px solid ${p.color}25`,
              }}
            >
              {p.emoji}
            </div>
            <div className="min-w-0">
              <h3 className="font-display text-[13px] font-bold text-text leading-tight truncate">{p.title}</h3>
              <p className="text-[10px] font-mono mt-0.5 truncate" style={{ color: p.color }}>{p.subtitle}</p>
            </div>
          </div>

          <p className="text-[#6a6a8e] font-body text-[11px] leading-relaxed flex-1 line-clamp-3">{p.description}</p>

          <div className="flex flex-wrap gap-1">
            {p.tech.slice(0, 3).map((t) => (
              <span
                key={t}
                className="px-1.5 py-0.5 rounded text-[9px] font-mono bg-[#10101c] text-[#55557a] border border-[#1e1e30]"
              >
                {t}
              </span>
            ))}
            {p.tech.length > 3 && (
              <span className="px-1.5 py-0.5 rounded text-[9px] font-mono bg-[#10101c] text-[#404060] border border-[#1e1e30]">
                +{p.tech.length - 3}
              </span>
            )}
          </div>

          {(p.link || p.github) && (
            <div className="flex gap-1.5">
              {p.link && (
                <a
                  href={p.link} target="_blank" rel="noopener noreferrer"
                  className="text-[10px] font-mono px-2.5 py-1 rounded-lg border transition-all duration-200 hover:-translate-y-0.5"
                  style={{ color: p.color, borderColor: `${p.color}30`, background: `${p.color}10` }}
                >
                  Live ↗
                </a>
              )}
              {p.github && (
                <a
                  href={p.github} target="_blank" rel="noopener noreferrer"
                  className="text-[10px] font-mono px-2.5 py-1 rounded-lg border border-[#22223a] text-[#50507a] hover:text-accent transition-all"
                >
                  Code
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/* ─── Main Export ────────────────────────────────────────── */
export default function Projects() {
  const [filter, setFilter] = useState<Filter>("All");
  const mounted = useMounted();
  const ref = useReveal(mounted ? filter : undefined);

  const filtered = projects.filter((p) => filter === "All" || p.type === filter);
  const flagship = filtered.filter((p) => p.tier === "flagship");
  const featured = filtered.filter((p) => p.tier === "featured");
  const small = filtered.filter((p) => p.tier === "small");

  return (
    <section
      id="projects"
      ref={ref}
      className="py-24 sm:py-32 border-t border-[#1a1a28]"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* ── Header ── */}
        <div className="mb-14">
          <div className="reveal flex items-center gap-3 mb-5">
            <span className="font-mono text-accent text-sm">04.</span>
            <span className="text-[#4a4a70] text-sm uppercase tracking-widest font-mono">Portfolio</span>
            <div className="flex-1 h-px bg-[#1e1e2e]" />
          </div>

          <div className="flex flex-wrap items-end justify-between gap-6">
            <h2 className="reveal delay-100 font-display text-4xl sm:text-5xl font-bold text-text">
              Things I&apos;ve <span className="text-accent">Built</span>
            </h2>

            {/* Filter pills */}
            <div className="reveal delay-200 flex gap-2 flex-wrap">
              {FILTERS.map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-4 py-1.5 rounded-full text-sm font-mono transition-all duration-200 ${
                    mounted && filter === f
                      ? "bg-accent text-white shadow-lg shadow-accent/25"
                      : "border border-[#252538] text-[#55558a] hover:border-accent/50 hover:text-accent"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ── Flagship: 2-col hero grid ── */}
        {flagship.length > 0 && (
          <div className="grid lg:grid-cols-2 gap-4 mb-4">
            {flagship.map((p, i) => (
              <FlagshipCard key={p.title + filter} p={p} index={i} />
            ))}
          </div>
        )}

        {/* ── Featured: 2-col medium grid ── */}
        {featured.length > 0 && (
          <div className="grid sm:grid-cols-2 gap-4 mb-4">
            {featured.map((p, i) => (
              <FeaturedCard key={p.title + filter} p={p} index={i} />
            ))}
          </div>
        )}

        {/* ── Small: 3-col compact grid ── */}
        {small.length > 0 && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {small.map((p, i) => (
              <SmallCard key={p.title + filter} p={p} index={i} />
            ))}
          </div>
        )}

        {/* Empty state */}
        {filtered.length === 0 && (
          <div className="text-center py-20 text-[#3a3a58] font-mono text-sm">
            No projects in this category yet.
          </div>
        )}

      </div>
    </section>
  );
}