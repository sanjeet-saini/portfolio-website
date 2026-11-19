import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import { stats } from "../data/portfolio";
import { EXPERIMENTS } from "../experiments/config";
import TerminalAbout from "../experiments/TerminalAbout";

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <SectionHead tag="About Me" title="A developer who learns by building.">
          I'm a BCA student who enjoys turning ideas into clean, responsive
          interfaces and writing the JavaScript logic that makes them work —
          from a full-stack CRM and productivity dashboards to an image editor
          and a mood-based music player.
        </SectionHead>

        <div className="stats-grid">
          {stats.map((stat, i) => (
            <Reveal className="stat" delay={i * 80} key={stat.text}>
              <h3>{stat.label}</h3>
              <p>{stat.text}</p>
            </Reveal>
          ))}
        </div>

        {EXPERIMENTS.terminal && <TerminalAbout />}
      </div>
    </section>
  );
}
