import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import { stats } from "../data/portfolio";

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <SectionHead tag="About Me" title="Professional profile with creative energy.">
          I am a BCA student who learns by building. I enjoy turning ideas into
          clean, responsive interfaces and writing the JavaScript logic that
          makes them work — from productivity dashboards to image and code
          editors that run entirely in the browser.
        </SectionHead>

        <div className="stats-grid">
          {stats.map((stat, i) => (
            <Reveal className="stat" glow delay={i * 80} key={stat.text}>
              <h3>{stat.label}</h3>
              <p>{stat.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
