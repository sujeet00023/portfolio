"use client";
import { useState } from "react";
import { useReveal } from "./useReveal";

const projects = [
  {
    title: "Custom CRM System",
    subtitle: "Europass Immigration",
    description:
      "A full-featured CRM built to manage client workflows at Europass Immigration. Includes authentication, REST APIs, automation features, and an intuitive dashboard for tracking client data and business processes.",
    tech: ["Next.js", "React.js", "TypeScript", "Node.js", "Tailwind CSS", "REST API"],
    color: "#6c63ff",
    emoji: "🏢",
    type: "Professional",
    featured: true,
  },
  {
    title: "Company Website",
    subtitle: "Europass Immigration",
    description:
      "Fully responsive web application with OTP-based authentication via SMS API (Fast2SMS), email automation system, and cross-device compatibility. Built with performance-first architecture.",
    tech: ["Next.js", "React.js", "TypeScript", "Tailwind CSS", "Node.js", "Fast2SMS API"],
    color: "#ff6584",
    emoji: "🌐",
    type: "Professional",
    featured: true,
  },
  {
    title: "Online Book Store",
    subtitle: "Academic Project",
    description:
      "Web platform for buying and selling second-hand books. Users can register, browse listings with details like title, author, condition and price, and manage their shopping cart seamlessly.",
    tech: ["Java", "JSP", "HTML", "CSS", "JavaScript", "MySQL"],
    color: "#43e97b",
    emoji: "📚",
    type: "Academic",
    featured: false,
  },
  {
    title: "Grocery Store E-Commerce",
    subtitle: "Academic Project",
    description:
      "Full-stack e-commerce platform with secure user authentication, profile management, delivery addresses, order history, real-time cart, payment gateway integration, and an admin dashboard.",
    tech: ["Java", "Servlet", "HTML", "CSS", "JavaScript", "MySQL"],
    color: "#ffd700",
    emoji: "🛒",
    type: "Academic",
    featured: false,
  },
  {
    title: "Hospital Management Portal",
    subtitle: "Academic Project",
    description:
      "Role-based web application for patients, doctors, and admins. Implements secure login, access control, billing module to generate invoices, record payments, and view transaction history.",
    tech: ["Django", "Python", "HTML", "CSS"],
    color: "#00d4ff",
    emoji: "🏥",
    type: "Academic",
    featured: false,
  },
];

export default function Projects() {
  const ref = useReveal();
  const [filter, setFilter] = useState<"All" | "Professional" | "Academic">("All");

  const filtered = projects.filter((p) => filter === "All" || p.type === filter);

  return (
    <section id="projects" className="py-24 sm:py-32 border-t border-[#1e1e2e]" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-12">
          <div className="reveal flex items-center gap-3 mb-6">
            <span className="font-mono text-accent text-sm">04.</span>
            <span className="text-text-muted text-sm uppercase tracking-widest">Portfolio</span>
            <div className="flex-1 h-px bg-[#1e1e2e]" />
          </div>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <h2 className="reveal delay-100 font-display text-4xl sm:text-5xl font-bold text-text">
              Things I&apos;ve <span className="text-accent">Built</span>
            </h2>
            {/* Filter tabs */}
            <div className="reveal delay-200 flex gap-2">
              {(["All", "Professional", "Academic"] as const).map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-4 py-2 rounded-xl text-sm font-body transition-all duration-300 ${
                    filter === f
                      ? "bg-accent text-white"
                      : "border border-[#1e1e2e] text-text-muted hover:border-accent/50 hover:text-accent"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Featured projects (large) */}
        <div className="grid lg:grid-cols-2 gap-6 mb-6">
          {filtered
            .filter((p) => p.featured)
            .map((project, i) => (
              <div
                key={project.title}
                className={`reveal delay-${(i + 1) * 100} card-hover group relative bg-[#111118] border border-[#1e1e2e] rounded-2xl p-8 overflow-hidden hover:border-[${project.color}]/30 transition-all`}
              >
                {/* Background glow */}
                <div
                  className="absolute top-0 right-0 w-40 h-40 rounded-full blur-3xl opacity-10 group-hover:opacity-20 transition-opacity"
                  style={{ background: project.color }}
                />

                <div className="relative">
                  <div className="flex items-start justify-between mb-5">
                    <div>
                      <span className="text-xs font-mono px-2 py-1 rounded-md bg-[#1e1e2e] text-text-muted mb-3 inline-block">
                        {project.type}
                      </span>
                      <div className="flex items-center gap-3">
                        <span className="text-3xl">{project.emoji}</span>
                        <div>
                          <h3 className="font-display text-xl font-bold text-text">{project.title}</h3>
                          <p className="text-sm font-mono" style={{ color: project.color }}>
                            {project.subtitle}
                          </p>
                        </div>
                      </div>
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-mono border border-[#1e1e2e] text-accent">
                      ★ Featured
                    </span>
                  </div>

                  <p className="text-text-muted font-body text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 rounded-lg text-xs font-mono border border-[#1e1e2e] text-text-muted"
                        style={{ borderColor: `${project.color}33` }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
        </div>

        {/* Other projects (compact) */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered
            .filter((p) => !p.featured)
            .map((project, i) => (
              <div
                key={project.title}
                className={`reveal delay-${(i + 1) * 100} card-hover group bg-[#111118] border border-[#1e1e2e] rounded-2xl p-6 overflow-hidden relative hover:border-accent/20 transition-all`}
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity rounded-2xl"
                  style={{ background: project.color }}
                />
                <div className="relative">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl">{project.emoji}</span>
                    <div>
                      <h3 className="font-display text-base font-bold text-text">{project.title}</h3>
                      <p className="text-xs font-mono" style={{ color: project.color }}>{project.subtitle}</p>
                    </div>
                  </div>
                  <p className="text-text-muted font-body text-xs leading-relaxed mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.slice(0, 4).map((t) => (
                      <span key={t} className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#1e1e2e] text-text-muted">
                        {t}
                      </span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#1e1e2e] text-text-muted">
                        +{project.tech.length - 4}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
