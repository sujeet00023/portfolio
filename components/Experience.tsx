"use client";
import { useReveal } from "./useReveal";

const experiences = [
  {
    role: "Web Developer",
    company: "Europass Immigration",
    type: "Remote",
    period: "June 2024 — Present",
    color: "#6c63ff",
    current: true,
    achievements: [
     "Built and deployed a full-stack CRM system to manage client workflows and automate internal operations",
     "Designed and implemented REST APIs using Node.js, improving data flow and system scalability",
     "Developed responsive, high-performance UI using React.js, TypeScript, and Tailwind CSS",
     "Implemented authentication and business logic to handle real-world user workflows",
     "Collaborated with cross-functional teams to deliver features and improve user experience",
     "Optimized application performance and fixed critical bugs to improve stability",

    ],
    tech: ["React.js", "Next.js", "TypeScript", "Node.js", "Tailwind CSS", "REST API"],
  },
  {
    role: "Functional Tester",
    company: "Asset Cues",
    type: "Remote",
    period: "Feb 2024 — May 2024",
    color: "#ff6584",
    current: false,
    achievements: [
      "Performed end-to-end manual testing for a Flutter-based mobile application",
      "Identified and reported critical bugs, improving application reliability",
      "Tested across multiple devices and scenarios to ensure consistent user experience",
      "Collaborated with developers to resolve issues and enhance performance",
    ],
    tech: ["Flutter", "Manual Testing", "Bug Reporting", "Mobile QA"],
  },
];

export default function Experience() {
  const ref = useReveal();

  return (
    <section id="experience" className="py-24 sm:py-32 border-t border-[#1e1e2e]" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <div className="reveal flex items-center gap-3 mb-6">
            <span className="font-mono text-accent text-sm">03.</span>
            <span className="text-text-muted text-sm uppercase tracking-widest">Work Experience</span>
            <div className="flex-1 h-px bg-[#1e1e2e]" />
          </div>
          <h2 className="reveal delay-100 font-display text-4xl sm:text-5xl font-bold text-text">
            Where I&apos;ve <span className="text-accent">Worked</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="hidden md:block absolute left-8 top-0 bottom-0 w-px bg-[#1e1e2e]" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <div key={exp.company} className={`reveal delay-${(i + 1) * 100} relative flex gap-8`}>
                {/* Timeline dot */}
                <div className="hidden md:flex flex-col items-center">
                  <div
                    className="w-4 h-4 rounded-full border-2 flex-shrink-0 mt-6"
                    style={{ borderColor: exp.color, background: exp.current ? exp.color : "#0a0a0f" }}
                  />
                  {exp.current && (
                    <div
                      className="w-2 h-2 rounded-full absolute mt-7 animate-ping opacity-60"
                      style={{ background: exp.color }}
                    />
                  )}
                </div>

                {/* Card */}
                <div className="flex-1 card-hover bg-[#111118] border border-[#1e1e2e] rounded-2xl p-7 hover:border-accent/30 transition-all">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                    <div>
                      <h3 className="font-display text-xl font-bold text-text mb-1">{exp.role}</h3>
                      <div className="flex items-center gap-2">
                        <span className="font-body text-sm" style={{ color: exp.color }}>{exp.company}</span>
                        <span className="text-text-muted">·</span>
                        <span className="text-text-muted text-xs font-mono">{exp.type}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 flex-shrink-0">
                      {exp.current && (
                        <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent-3/10 border border-accent-3/20 text-xs font-mono text-accent-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent-3 animate-pulse" />
                          Current
                        </span>
                      )}
                      <span className="text-xs font-mono text-text-muted bg-[#1e1e2e] px-3 py-1 rounded-full">
                        {exp.period}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-5">
                    {exp.achievements.map((a) => (
                      <li key={a} className="flex items-start gap-3 text-sm text-text-muted font-body">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: exp.color }} />
                        {a}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 rounded-lg text-xs font-mono border border-[#1e1e2e] text-text-muted hover:border-accent/40 hover:text-accent transition-colors"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
