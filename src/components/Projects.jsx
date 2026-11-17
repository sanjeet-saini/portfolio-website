import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import { aiProjects, profile, projects } from "../data/portfolio";

function ProjectCard({ project, delay }) {
  return (
    <Reveal as="article" className={`project-card${project.featured ? " featured" : ""}`} delay={delay}>
      <div className="project-image">
        {project.featured && <span className="featured-badge">★ Featured</span>}
        {project.aiAssisted && (
          <span className="ai-badge" title="Built with AI tools under my direction">
            🤖 AI-assisted
          </span>
        )}
        {project.image ? (
          <img src={project.image} alt={`${project.title} preview`} loading="lazy" />
        ) : (
          <div className="project-placeholder" aria-hidden="true">
            <span>{project.title.split(/[\s–-]+/)[0]}</span>
          </div>
        )}
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
      <div className="project-actions">
        <a className="project-demo-btn" href={project.link} target="_blank" rel="noreferrer">
          View Live ↗
        </a>
        {project.code && (
          <a className="project-code-btn" href={project.code} target="_blank" rel="noreferrer">
            Code ↗
          </a>
        )}
      </div>
    </Reveal>
  );
}

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <SectionHead tag="Featured Projects" title="Projects that show my practical skills.">
          Web applications I designed and built myself — from a full-stack CRM
          to React dashboards and plain JavaScript apps. Each one is live and
          responsive.
        </SectionHead>

        <div className="projects-grid">
          {projects.map((project, i) => (
            <ProjectCard project={project} delay={(i % 3) * 80} key={project.title} />
          ))}
        </div>

        <Reveal className="sub-head">
          <span className="section-tag">AI-Assisted Experiments</span>
          <h3>Creative builds made with AI tools.</h3>
          <p>
            I planned the idea and design, prepared the assets and guided AI
            tools with prompts to build these motion-heavy pages.
          </p>
        </Reveal>

        <div className="projects-grid ai-grid">
          {aiProjects.map((project, i) => (
            <ProjectCard project={project} delay={i * 80} key={project.title} />
          ))}
        </div>

        <Reveal className="more-projects">
          <a href={`${profile.githubUrl}?tab=repositories`} target="_blank" rel="noreferrer">
            More projects on GitHub →
          </a>
        </Reveal>
      </div>
    </section>
  );
}
