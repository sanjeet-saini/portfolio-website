// Trial effects (branch: try-effects). Set any flag to false to switch that effect off.
export const EXPERIMENTS = {
  tilt: true, // 3D tilt on project cards
  headingReveal: true, // GSAP word-by-word reveal for section headings
  terminal: true, // Terminal-style "whoami" box in About
  marquee: true, // Scrolling tech stack strip under the hero
};

// Heavy motion is skipped on touch devices and for people who prefer reduced motion
export const canAnimate = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(hover: hover)").matches &&
  !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
