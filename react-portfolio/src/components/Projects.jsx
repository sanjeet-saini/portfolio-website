import { useMemo, useState } from "react";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import { projects } from "../data/portfolio";

const filters = ["All", ...new Set(projects.map((p) => p.category))];

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const visible = useMemo(
    () => (filter === "All" ? projects : projects.filter((p) => p.category === filter)),
    [filter],
  );

  return (
    <section id="projects">
      <div className="container">
        <SectionHead tag="Featured Projects" title="Projects that show my practical skills.">
          These projects demonstrate my hands-on experience with UI creation,
          JavaScript logic, real-time updates, responsive design and
          browser-based interactivity.
        </SectionHead>

        <div className="project-filters" role="tablist" aria-label="Filter projects">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              role="tab"
              aria-selected={filter === f}
              className={`filter-btn ${filter === f ? "active" : ""}`}
              onClick={() => setFilter(f)}
            >
              {f}
              <span className="filter-count">
                {f === "All" ? projects.length : projects.filter((p) => p.category === f).length}
              </span>
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {visible.map((project, i) => (
            <Reveal as="article" className="project-card" glow delay={(i % 3) * 80} key={project.title}>
              <div className="project-image">
                <img src={project.image} alt={`${project.title} preview`} loading="lazy" />
              </div>
              <span className="project-tag">{project.category}</span>
              <h3>{project.title}</h3>
              <p>{project.text}</p>
              <ul>
                {project.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <a className="project-demo-btn" href={project.link} target="_blank" rel="noreferrer">
                View Live Project ↗
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
