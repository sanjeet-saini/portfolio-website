import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import CountUp from "./CountUp";
import { stats } from "../data/portfolio";

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <SectionHead tag="About Me" title="Professional profile with creative energy.">
          I am a BCA student with hands-on practice in frontend projects and a
          growing interest in backend development. I enjoy building attractive,
          responsive interfaces and am currently learning how servers, APIs and
          databases work using Node.js, Express.js and MongoDB. I have basic
          knowledge of these backend technologies and am still building
          practical experience.
        </SectionHead>

        <div className="stats-grid">
          {stats.map((stat, i) => (
            <Reveal className="stat" glow delay={i * 80} key={stat.text}>
              <h3>{stat.value != null ? <CountUp end={stat.value} suffix={stat.suffix} /> : stat.label}</h3>
              <p>{stat.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
