import { useEffect, useState } from "react";
import { useReveal } from "../hooks/useReveal";

// Animates a number from 0 to `end` once it scrolls into view.
export default function CountUp({ end, duration = 1400, suffix = "" }) {
  const [ref, visible] = useReveal(0.5);
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!visible) return;
    let frame;
    const start = performance.now();
    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * end));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [visible, end, duration]);

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  );
}
