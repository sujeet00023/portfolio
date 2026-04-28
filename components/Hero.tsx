"use client";
import { useEffect, useRef, useState } from "react";

const roles = ["Full Stack Developer", "React.js Expert", "Node.js Developer", "TypeScript Enthusiast"];

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Typewriter
  useEffect(() => {
    const current = roles[roleIdx];
    let i = typing ? displayed.length : displayed.length;
    let timeout: NodeJS.Timeout;

    if (typing) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
      } else {
        timeout = setTimeout(() => setTyping(false), 1800);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
      } else {
        setRoleIdx((prev) => (prev + 1) % roles.length);
        setTyping(true);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, typing, roleIdx]);

  // Particle canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: {
      x: number; y: number; vx: number; vy: number;
      size: number; opacity: number; color: string;
    }[] = [];

    const colors = ["#6c63ff", "#ff6584", "#43e97b"];
    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.5 + 0.1,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    let animId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.opacity;
        ctx.fill();
        ctx.globalAlpha = 1;
      });

      // Draw lines between close particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(108,99,255,${0.08 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animId = requestAnimationFrame(animate);
    };
    animate();

    const onResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-accent/10 blur-[120px] animate-pulse pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-accent-2/8 blur-[100px] animate-pulse pointer-events-none" style={{ animationDelay: "1s" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 flex flex-col items-center text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/30 bg-accent/5 mb-8 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-accent-3 animate-pulse" />
          <span className="text-xs font-mono text-text-muted tracking-widest uppercase">
            Available for work
          </span>
        </div>

        {/* Main heading */}
        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95] mb-6">
         <span className="block text-text">Hi, I’m</span>
<span className="block shimmer-text mt-2">Sujeet Khupase</span>
<span className="block text-text text-2xl sm:text-3xl mt-2">
  I build scalable web applications
</span>
        </h1>

        {/* Typewriter */}
        <div className="flex items-center gap-2 mb-8 h-10">
          <span className="text-text-muted font-body text-lg sm:text-xl">I build</span>
          <span className="font-display text-lg sm:text-xl font-semibold text-accent min-w-[280px] text-left">
            {displayed}
            <span className="inline-block w-0.5 h-5 bg-accent ml-0.5 animate-pulse" />
          </span>
        </div>

        {/* Description */}
        <p className="max-w-2xl text-text-muted font-body text-base sm:text-lg leading-relaxed mb-12">
          Full Stack Developer with 1.5+ years crafting scalable web apps using{" "}
          <span className="text-accent font-medium">React.js</span>,{" "}
          <span className="text-accent-2 font-medium">Node.js</span>, and{" "}
          <span className="text-accent-3 font-medium">TypeScript</span>.
          Building end-to-end systems that actually solve real problems.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <a
            href="#projects"
            className="btn-glow relative px-8 py-3.5 rounded-xl bg-accent text-white font-body font-semibold text-sm hover:bg-accent/90 transition-colors"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3.5 rounded-xl border border-[#1e1e2e] text-text font-body font-semibold text-sm hover:border-accent hover:text-accent transition-all duration-300"
          >
            Get In Touch
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 sm:gap-16">
          {[
            { num: "1.5+", label: "Years Exp." },
            { num: "5+", label: "Projects" },
            { num: "1+", label: "CRM Systems Built" },
            { num: "10+", label: "Technologies" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-display text-3xl sm:text-4xl font-bold text-accent mb-1">{s.num}</div>
              <div className="text-xs text-text-muted font-mono uppercase tracking-widest">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-xs text-text-muted font-mono">scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-accent to-transparent" />
        </div>
      </div>
    </section>
  );
}
