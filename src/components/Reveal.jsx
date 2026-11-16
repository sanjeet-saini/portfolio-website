import { useReveal } from "../hooks/useReveal";

// Wraps any element with the scroll-reveal animation.
// `as` picks the tag, `glow` enables the mouse-follow card highlight.
export default function Reveal({ as: Tag = "div", className = "", glow = false, delay = 0, style, children, ...rest }) {
  const [ref, visible] = useReveal();

  const handleMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    card.style.setProperty("--x", `${e.clientX - rect.left}px`);
    card.style.setProperty("--y", `${e.clientY - rect.top}px`);
  };

  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? "visible" : ""} ${className}`.trim()}
      style={{ transitionDelay: visible ? `${delay}ms` : undefined, ...style }}
      onMouseMove={glow ? handleMove : undefined}
      {...rest}
    >
      {children}
    </Tag>
  );
}
