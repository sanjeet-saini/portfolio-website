import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import Chips from "./Chips";
import { skills } from "../data/portfolio";

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <SectionHead tag="Technical Skills" title="Tools and technologies I work with.">
          My skill set covers frontend design, JavaScript interactivity, React
          development, responsive layout building, version control and
          programming fundamentals.
        </SectionHead>

        <div className="skills-grid">
          {skills.map((skill, i) => (
            <Reveal as="article" className="skill-card" delay={(i % 3) * 80} key={skill.title}>
              <div className="skill-icon">{skill.icon}</div>
              <h3>{skill.title}</h3>
              <p>{skill.text}</p>
              <Chips items={skill.chips} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
