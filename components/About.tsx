"use client";
import { useReveal } from "./useReveal";

const facts = [
  { icon: "🏙️", label: "Location", value: "Pune, Maharashtra" },
  { icon: "💼", label: "Role", value: "Full Stack Developer" },
  { icon: "🎓", label: "Degree", value: "MCA — Trinity Academy Of Engineering" },
  { icon: "📧", label: "Email", value: "sujeetkhupase196@gmail.com" },
];

export default function About() {
  const ref = useReveal();

  return (
    <section id="about" className="py-24 sm:py-32" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — text */}
          <div>
            <div className="reveal flex items-center gap-3 mb-6">
              <span className="font-mono text-accent text-sm">01.</span>
              <span className="text-text-muted text-sm uppercase tracking-widest">About Me</span>
              <div className="flex-1 h-px bg-[#1e1e2e]" />
            </div>

            <h2 className="reveal delay-100 font-display text-4xl sm:text-5xl font-bold text-text mb-6">
              I build <span className="text-accent">scalable products</span> that solve real business problems.
            </h2>

            <p className="reveal delay-200 text-text-muted font-body text-base leading-relaxed mb-6">
             I’m a Full Stack Developer with 1.5+ years of experience building real-world, <span className="text-accent">production-grade applications</span> 
             I work across the stack using React, Next.js, Node.js, and TypeScript turning ideas into fast, reliable, and user-friendly products.
            </p>

            <p className="reveal delay-300 text-text-muted font-body text-base leading-relaxed mb-10">
             At Europass Immigration, I’ve developed a full-stack <span className="text-accent">CRM system</span>, automated business workflows, and built a company-facing platform with secure authentication and real-time features. 
             My focus is not just on writing code, but on building systems that are scalable, maintainable, and solve actual user problems.
            </p>
            
            <p className="reveal delay-300 text-text-muted font-body text-base leading-relaxed mb-10">
              I enjoy working at the intersection of clean UI and solid backend architecture — designing intuitive interfaces while ensuring the underlying systems are efficient and robust. 
              Currently, I’m exploring ways to build better SaaS products and improve performance in modern web applications.
          </p>
            <div className="reveal delay-400 flex flex-wrap gap-3">
              <a
                href="https://linkedin.com/in/sujeet-khupase-374a84163"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-[#1e1e2e] text-text-muted hover:border-accent hover:text-accent transition-all duration-300 text-sm font-body"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
                LinkedIn
              </a>
              <a
                href="https://github.com/sujeet00023"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-[#1e1e2e] text-text-muted hover:border-accent hover:text-accent transition-all duration-300 text-sm font-body"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                GitHub
              </a>
            </div>
          </div>

          {/* Right — facts card */}
          <div className="reveal delay-200">
            <div className="relative">
              {/* Decorative blob */}
              <div className="absolute -inset-4 rounded-3xl bg-accent/5 blur-xl" />

              <div className="relative bg-[#111118] border border-[#1e1e2e] rounded-2xl p-8">
                {/* Terminal header */}
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                  <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                  <span className="ml-3 text-xs font-mono text-text-muted">sujeet.info</span>
                </div>

                <div className="space-y-4">
                  {facts.map((f, i) => (
                    <div key={f.label} className="flex items-start gap-4 group">
                      <span className="text-2xl">{f.icon}</span>
                      <div>
                        <div className="text-xs font-mono text-text-muted uppercase tracking-widest mb-0.5">
                          {f.label}
                        </div>
                        <div className="font-body text-text text-sm group-hover:text-accent transition-colors">
                          {f.value}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Code snippet */}
                <div className="mt-8 p-4 rounded-xl bg-[#0a0a0f] border border-[#1e1e2e] font-mono text-xs leading-relaxed">
                  <span className="text-accent-2">const</span>{" "}
                  <span className="text-accent-3">sujeet</span>{" "}
                  <span className="text-text-muted">= {"{"}</span>
                  <br />
                  {"  "}<span className="text-text-muted">role:</span>{" "}
                  <span className="text-accent">&quot;Full Stack Dev&quot;</span>,
                  <br />
                  {"  "}<span className="text-text-muted">passion:</span>{" "}
                  <span className="text-accent">&quot;Building things&quot;</span>,
                  <br />
                  {"  "}<span className="text-text-muted">coffee:</span>{" "}
                  <span className="text-accent-3">true</span>,
                  <br />
                  <span className="text-text-muted">{"}"}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
