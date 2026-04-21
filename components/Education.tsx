"use client";
import { useReveal } from "./useReveal";

const education = [
  {
    degree: "Masters in Computer Application",
    short: "MCA",
    school: "Trinity Academy of Engineering",
    location: "Pune, Maharashtra",
    period: "Aug 2022 — Apr 2024",
    color: "#6c63ff",
    emoji: "🎓",
  },
  {
    degree: "Bachelors in Computer Science",
    short: "BCS",
    school: "Sinhgad College of Science",
    location: "Pune, Maharashtra",
    period: "Aug 2018 — Apr 2021",
    color: "#ff6584",
    emoji: "📘",
  },
];

const certifications = [
  { name: "Python Programming", issuer: "IBM", color: "#6c63ff", emoji: "🐍" },
  { name: "Node.js Essentials", issuer: "IBM", color: "#ff6584", emoji: "🟢" },
  { name: "Master in Full-Stack Development", issuer: "ITVEDANT EDUCATION", color: "#43e97b", emoji: "🏆" },
];

export default function Education() {
  const ref = useReveal();

  return (
    <section id="education" className="py-24 sm:py-32 border-t border-[#1e1e2e]" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <div className="reveal flex items-center gap-3 mb-6">
            <span className="font-mono text-accent text-sm">05.</span>
            <span className="text-text-muted text-sm uppercase tracking-widest">Education & Certifications</span>
            <div className="flex-1 h-px bg-[#1e1e2e]" />
          </div>
          <h2 className="reveal delay-100 font-display text-4xl sm:text-5xl font-bold text-text">
            My <span className="text-accent">Academic</span> Journey
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <h3 className="reveal font-display text-xl font-semibold text-text mb-8">Education</h3>
            <div className="space-y-6">
              {education.map((ed, i) => (
                <div
                  key={ed.degree}
                  className={`reveal delay-${(i + 1) * 100} card-hover flex gap-5 p-6 bg-[#111118] border border-[#1e1e2e] rounded-2xl hover:border-accent/20 transition-all`}
                >
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                    style={{ background: `${ed.color}15`, border: `1px solid ${ed.color}30` }}
                  >
                    {ed.emoji}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span
                        className="font-mono text-xs px-2 py-0.5 rounded"
                        style={{ background: `${ed.color}15`, color: ed.color }}
                      >
                        {ed.short}
                      </span>
                    </div>
                    <h4 className="font-display text-base font-bold text-text mb-0.5">{ed.degree}</h4>
                    <p className="font-body text-sm text-text-muted mb-1">{ed.school}</p>
                    <div className="flex items-center gap-2 text-xs font-mono text-text-muted">
                      <span>📍 {ed.location}</span>
                      <span>·</span>
                      <span>{ed.period}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="reveal font-display text-xl font-semibold text-text mb-8">Certifications</h3>
            <div className="space-y-5">
              {certifications.map((cert, i) => (
                <div
                  key={cert.name}
                  className={`reveal delay-${(i + 1) * 100} card-hover flex items-center gap-5 p-6 bg-[#111118] border border-[#1e1e2e] rounded-2xl hover:border-accent/20 transition-all group`}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-xl flex-shrink-0 transition-transform group-hover:scale-110"
                    style={{ background: `${cert.color}15`, border: `1px solid ${cert.color}30` }}
                  >
                    {cert.emoji}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-body text-sm font-semibold text-text mb-0.5">{cert.name}</h4>
                    <p className="font-mono text-xs" style={{ color: cert.color }}>{cert.issuer}</p>
                  </div>
                  <div
                    className="w-2 h-2 rounded-full opacity-60"
                    style={{ background: cert.color }}
                  />
                </div>
              ))}

              {/* Achievement card */}
              <div className="reveal delay-400 p-6 bg-gradient-to-br from-accent/10 to-accent-2/5 border border-accent/20 rounded-2xl">
                <div className="text-3xl mb-3">🚀</div>
                <h4 className="font-display text-base font-bold text-text mb-2">Always Learning</h4>
                <p className="text-text-muted text-sm font-body leading-relaxed">
                  Continuously upskilling with IBM certifications and industry courses, staying ahead of
                  the rapidly evolving tech landscape.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
