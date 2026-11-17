import { useEffect, useRef } from "react";

// Cards that get a spotlight following the mouse (see `.spotlight` styles in CSS)
const CARD_SELECTOR = ".stat, .skill-card, .project-card, .timeline-card, .strength-card, .contact-card";

// Soft cherry-red glow that follows the mouse, plus the card spotlight position.
// Hidden on touch screens and for people who prefer reduced motion (see CSS).
export default function CursorGlow() {
  const glowRef = useRef(null);

  useEffect(() => {
    const glow = glowRef.current;
    let frame = 0;

    const onMove = (e) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        glow.style.opacity = "1";
        glow.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;

        const card = e.target instanceof Element ? e.target.closest(CARD_SELECTOR) : null;
        if (card) {
          const rect = card.getBoundingClientRect();
          card.style.setProperty("--x", `${e.clientX - rect.left}px`);
          card.style.setProperty("--y", `${e.clientY - rect.top}px`);
        }
      });
    };
    const onLeave = () => {
      glow.style.opacity = "0";
    };

    window.addEventListener("mousemove", onMove);
    document.documentElement.addEventListener("mouseleave", onLeave);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("mousemove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return <div className="cursor-glow" ref={glowRef} aria-hidden="true" />;
}
