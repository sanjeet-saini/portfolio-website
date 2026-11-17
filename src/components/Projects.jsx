import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import { projects } from "../data/portfolio";

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <SectionHead tag="Featured Projects" title="Projects that show my practical skills.">
          JavaScript applications I designed and built from scratch — each one
          is live, responsive and focused on real browser-based interactivity.
        </SectionHead>

        <div className="projects-grid">
          {projects.map((project, i) => (
            <Reveal as="article" className="project-card" glow delay={(i % 3) * 80} key={project.title}>
              <div className="project-image">
                <img src={project.image} alt={`${project.title} preview`} loading="lazy" />
              </div>
              <h3>{project.title}</h3>
              <ul className="project-stack" aria-label="Tech stack">
                {project.stack.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
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
