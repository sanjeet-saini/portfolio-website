const TECH = [
  "React",
  "JavaScript",
  "HTML5",
  "CSS3",
  "Tailwind CSS",
  "GSAP",
  "Node.js",
  "Express",
  "SQLite",
  "Chart.js",
  "Vite",
  "Git",
  "GitHub",
  "Bootstrap",
];

// Endless strip of tech names. The list is rendered twice so the CSS loop is seamless.
export default function TechMarquee() {
  return (
    <div className="marquee" aria-label="Technologies I use">
      <div className="marquee-track">
        {[...TECH, ...TECH].map((name, i) => (
          <span className="marquee-item" key={`${name}-${i}`} aria-hidden={i >= TECH.length}>
            {name}
          </span>
        ))}
      </div>
    </div>
  );
}
