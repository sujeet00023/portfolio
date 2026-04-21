"use client";
import { useReveal } from "./useReveal";

const categories = [
  {
    title: "Frontend",
    icon: "🎨",
    color: "#6c63ff",
    skills: [
      { name: "React.js", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "TypeScript", level: 85 },
      { name: "JavaScript", level: 90 },
      { name: "Tailwind CSS", level: 88 },
      { name: "HTML5", level: 95 },
    ],
  },
  {
    title: "Backend",
    icon: "⚙️",
    color: "#ff6584",
    skills: [
      { name: "Node.js", level: 82 },
      { name: "Express.js", level: 80 },
      { name: "REST APIs", level: 85 },
      { name: "Python", level: 65 },
      { name: "Django", level: 60 },
      { name: "Java", level: 65 },
    ],
  },
  {
    title: "Databases & Cloud",
    icon: "🗄️",
    color: "#43e97b",
    skills: [
      { name: "MySQL", level: 80 },
      { name: "MongoDB", level: 55 },
      { name: "AWS S3", level: 50 },
      { name: "AWS Lambda", level: 45 },
      { name: "Git", level: 88 },
      { name: "VS Code", level: 95 },
    ],
  },
];

const techStack = [
  "React.js", "Next.js", "TypeScript", "JavaScript", "Node.js", "Express.js",
  "Tailwind CSS", "HTML5", "MySQL", "MongoDB", "Git", "AWS", "Python", "Django",
  "REST API", "Java", "ChatGPT", "Claude AI"
];

export default function Skills() {
  const ref = useReveal();

  return (
    <section id="skills" className="py-24 sm:py-32 border-t border-[#1e1e2e]" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <div className="reveal flex items-center gap-3 mb-6">
            <span className="font-mono text-accent text-sm">02.</span>
            <span className="text-text-muted text-sm uppercase tracking-widest">Skills & Technologies</span>
            <div className="flex-1 h-px bg-[#1e1e2e]" />
          </div>
          <h2 className="reveal delay-100 font-display text-4xl sm:text-5xl font-bold text-text">
            My <span className="text-accent">Tech Stack</span>
          </h2>
        </div>

        {/* Category cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {categories.map((cat, i) => (
            <div
              key={cat.title}
              className={`reveal delay-${(i + 1) * 100} card-hover bg-[#111118] border border-[#1e1e2e] rounded-2xl p-7`}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">{cat.icon}</span>
                <h3 className="font-display text-lg font-semibold text-text">{cat.title}</h3>
              </div>
              <div className="space-y-4">
                {cat.skills.map((s) => (
                  <div key={s.name}>
                    <div className="flex justify-between mb-1.5">
                      <span className="text-sm text-text-muted font-body">{s.name}</span>
                      <span className="text-xs font-mono" style={{ color: cat.color }}>{s.level}%</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-[#1e1e2e] overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-1000"
                        style={{
                          width: `${s.level}%`,
                          background: `linear-gradient(90deg, ${cat.color}88, ${cat.color})`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Pill cloud */}
        <div className="reveal delay-300">
          <p className="text-xs font-mono text-text-muted uppercase tracking-widest mb-6 text-center">
            All Technologies
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            {techStack.map((t) => (
              <span
                key={t}
                className="skill-pill px-4 py-2 rounded-full border border-[#1e1e2e] text-sm font-body text-text-muted hover:text-accent hover:border-accent cursor-default transition-all duration-300"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
