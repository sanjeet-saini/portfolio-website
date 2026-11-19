import { useEffect } from "react";
import { canAnimate } from "./config";

const MAX_TILT = 7; // degrees

// Tilts project cards in 3D towards the mouse. Renders nothing; it only sets
// --rx/--ry on the card under the pointer (used in experiments.css).
export default function TiltCards() {
  useEffect(() => {
    if (!canAnimate()) return undefined;
    document.body.classList.add("tilt-on");

    let active = null;
    const reset = (card) => {
      card.style.setProperty("--rx", "0deg");
      card.style.setProperty("--ry", "0deg");
    };

    const onMove = (e) => {
      const card = e.target instanceof Element ? e.target.closest(".project-card") : null;
      if (active && active !== card) reset(active);
      active = card;
      if (!card) return;
      const rect = card.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width - 0.5;
      const py = (e.clientY - rect.top) / rect.height - 0.5;
      card.style.setProperty("--ry", `${(px * MAX_TILT * 2).toFixed(2)}deg`);
      card.style.setProperty("--rx", `${(-py * MAX_TILT * 2).toFixed(2)}deg`);
    };

    window.addEventListener("mousemove", onMove);
    return () => {
      window.removeEventListener("mousemove", onMove);
      document.body.classList.remove("tilt-on");
      if (active) reset(active);
    };
  }, []);

  return null;
}
