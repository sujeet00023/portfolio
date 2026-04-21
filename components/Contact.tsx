"use client";
import { useState } from "react";
import { useReveal } from "./useReveal";

export default function Contact() {
  const ref = useReveal();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    // Mailto fallback (works without backend)
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:sujeetkhupase196@gmail.com?subject=${subject}&body=${body}`;
    setTimeout(() => setStatus("sent"), 1500);
  };

  const contacts = [
    {
      label: "Email",
      value: "sujeetkhupase196@gmail.com",
      href: "mailto:sujeetkhupase196@gmail.com",
      icon: (
        <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      label: "Phone",
      value: "+91 7820906954",
      href: "tel:+917820906954",
      icon: (
        <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
    },
    {
      label: "LinkedIn",
      value: "sujeet-khupase-374a84163",
      href: "https://linkedin.com/in/sujeet-khupase-374a84163",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      ),
    },
    {
      label: "GitHub",
      value: "github.com/sujeet00023",
      href: "https://github.com/sujeet00023",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="contact" className="py-24 sm:py-32 border-t border-[#1e1e2e]" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="reveal flex items-center justify-center gap-3 mb-6">
            <div className="flex-1 h-px bg-[#1e1e2e]" />
            <span className="font-mono text-accent text-sm">06.</span>
            <span className="text-text-muted text-sm uppercase tracking-widest">Get In Touch</span>
            <div className="flex-1 h-px bg-[#1e1e2e]" />
          </div>
          <h2 className="reveal delay-100 font-display text-4xl sm:text-5xl font-bold text-text mb-4">
            Let&apos;s <span className="text-accent">Work Together</span>
          </h2>
          <p className="reveal delay-200 text-text-muted font-body text-base max-w-xl mx-auto">
            I&apos;m currently open to new opportunities. Whether you have a project, a job offer, or just want to say hi — my inbox is open!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact links */}
          <div className="reveal delay-100">
            <div className="space-y-4 mb-10">
              {contacts.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-5 bg-[#111118] border border-[#1e1e2e] rounded-xl hover:border-accent/40 hover:bg-accent/5 transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#1e1e2e] flex items-center justify-center text-text-muted group-hover:text-accent group-hover:bg-accent/10 transition-all">
                    {c.icon}
                  </div>
                  <div>
                    <div className="text-xs font-mono text-text-muted uppercase tracking-widest mb-0.5">{c.label}</div>
                    <div className="text-sm font-body text-text group-hover:text-accent transition-colors">{c.value}</div>
                  </div>
                  <svg className="ml-auto w-4 h-4 text-text-muted group-hover:text-accent group-hover:translate-x-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              ))}
            </div>

            {/* Location */}
            <div className="p-5 bg-[#111118] border border-[#1e1e2e] rounded-xl">
              <div className="flex items-center gap-3">
                <span className="text-2xl">📍</span>
                <div>
                  <div className="text-xs font-mono text-text-muted uppercase tracking-widest mb-0.5">Location</div>
                  <div className="text-sm font-body text-text">Pune, Maharashtra, India</div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="reveal delay-200">
            <div className="bg-[#111118] border border-[#1e1e2e] rounded-2xl p-8">
              <h3 className="font-display text-lg font-bold text-text mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-xs font-mono text-text-muted uppercase tracking-widest mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="John Doe"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-[#0a0a0f] border border-[#1e1e2e] rounded-xl px-4 py-3 text-sm font-body text-text placeholder:text-text-muted focus:outline-none focus:border-accent transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-text-muted uppercase tracking-widest mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="john@example.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-[#0a0a0f] border border-[#1e1e2e] rounded-xl px-4 py-3 text-sm font-body text-text placeholder:text-text-muted focus:outline-none focus:border-accent transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-text-muted uppercase tracking-widest mb-2">
                    Message
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Tell me about your project..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-[#0a0a0f] border border-[#1e1e2e] rounded-xl px-4 py-3 text-sm font-body text-text placeholder:text-text-muted focus:outline-none focus:border-accent transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === "sending" || status === "sent"}
                  className="w-full py-3.5 rounded-xl bg-accent text-white font-body font-semibold text-sm hover:bg-accent/90 disabled:opacity-60 transition-all flex items-center justify-center gap-2"
                >
                  {status === "idle" && (
                    <>
                      Send Message
                      <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </>
                  )}
                  {status === "sending" && "Opening mail client..."}
                  {status === "sent" && "✓ Message prepared!"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
