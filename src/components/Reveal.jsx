import { useState } from "react";
import { useReveal } from "../hooks/useReveal";

// Wraps any element with the scroll-reveal animation. `as` picks the tag and
// `delay` staggers cards. The delay is removed once the element has appeared,
// so hover effects respond instantly afterwards.
export default function Reveal({ as: Tag = "div", className = "", delay = 0, style, children, ...rest }) {
  const [ref, visible] = useReveal();
  const [settled, setSettled] = useState(false);

  const handleTransitionEnd = (e) => {
    if (e.target === e.currentTarget && e.propertyName === "opacity") setSettled(true);
  };

  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? "visible" : ""} ${className}`.trim()}
      style={{ transitionDelay: visible && !settled && delay ? `${delay}ms` : undefined, ...style }}
      onTransitionEnd={handleTransitionEnd}
      {...rest}
    >
      {children}
    </Tag>
  );
}
