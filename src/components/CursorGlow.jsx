import { useEffect, useRef } from "react";

// Soft cherry-red glow that follows the mouse.
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
