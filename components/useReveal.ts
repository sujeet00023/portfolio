"use client";
import { useEffect, useRef } from "react";

export function useReveal() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe element and all .reveal children
    const reveals = el.querySelectorAll(".reveal");
    reveals.forEach((r) => observer.observe(r));
    if (el.classList.contains("reveal")) observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return ref;
}
