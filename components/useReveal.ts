"use client";
import { useEffect, useRef } from "react";

export function useReveal(dep?: any) {
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

    const reveals = el.querySelectorAll(".reveal");

    reveals.forEach((r) => {
      r.classList.remove("visible"); // 🔥 RESET BEFORE OBSERVE
      observer.observe(r);
    });

    return () => observer.disconnect();
  }, [dep]); // 👈 IMPORTANT

  return ref;
}