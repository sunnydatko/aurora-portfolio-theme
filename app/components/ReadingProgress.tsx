"use client";

import { useEffect, useRef } from "react";

export default function ReadingProgress() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const bar = barRef.current;
    if (!bar) return;
    const update = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      const progress = total > 0 ? window.scrollY / total : 0;
      bar.style.transform = `scaleX(${progress})`;
    };
    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <div
      ref={barRef}
      aria-hidden
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        height: 2,
        width: "100%",
        transform: "scaleX(0)",
        transformOrigin: "left",
        background: "linear-gradient(to right, #6D28D9, #EC4899, #F9A8D4)",
        zIndex: 9999,
        pointerEvents: "none",
        willChange: "transform",
      }}
    />
  );
}
