"use client";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[#1e1e2e] py-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <a href="#" className="font-display text-lg font-bold flex items-center gap-2 group">
            <span className="w-7 h-7 rounded-lg bg-accent flex items-center justify-center text-white text-xs font-bold">
              SK
            </span>
            <span className="text-text group-hover:text-accent transition-colors">
              Sujeet<span className="text-accent">.</span>
            </span>
          </a>

          {/* Center */}
          <p className="text-xs font-mono text-text-muted text-center">
            © {year} Sujeet Khupase · Built with{" "}
            <span className="text-accent">Next.js</span> &{" "}
            <span className="text-accent-2">Tailwind CSS</span>
          </p>

          {/* Socials */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/sujeet00023"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted hover:text-accent transition-colors"
              aria-label="GitHub"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
            <a
              href="https://linkedin.com/in/sujeet-khupase-374a84163"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted hover:text-accent transition-colors"
              aria-label="LinkedIn"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            <a
              href="mailto:sujeetkhupase196@gmail.com"
              className="text-text-muted hover:text-accent-2 transition-colors"
              aria-label="Email"
            >
              <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Bottom line */}
        <div className="mt-6 pt-6 border-t border-[#1e1e2e] flex flex-wrap justify-center gap-6">
          {["#about", "#skills", "#experience", "#projects", "#education", "#contact"].map((href) => (
            <a
              key={href}
              href={href}
              className="text-xs font-mono text-text-muted hover:text-accent transition-colors capitalize"
            >
              {href.replace("#", "")}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
