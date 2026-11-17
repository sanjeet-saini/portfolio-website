import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import { strengths, timeline } from "../data/portfolio";

export default function Education() {
  return (
    <section id="education">
      <div className="container">
        <SectionHead tag="Education & Strengths" title="Academic background and personal strengths.">
          My educational path and strengths support my growth as a developer who
          learns quickly, writes structured code and values good user
          experience.
        </SectionHead>

        <div className="timeline-grid">
          {timeline.map((item, i) => (
            <Reveal as="article" className="timeline-card" delay={(i % 2) * 80} key={item.title}>
              <span className="timeline-meta">{item.meta}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <ul>
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        <div className="strength-grid" style={{ marginTop: 18 }}>
          {strengths.map((s, i) => (
            <Reveal as="article" className="strength-card" delay={i * 80} key={s.title}>
              <div className="strength-icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
