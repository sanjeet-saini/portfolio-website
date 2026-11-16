import Reveal from "./Reveal";
import Typewriter from "./Typewriter";
import { heroChips, miniCards, profile } from "../data/portfolio";

const roles = ["Frontend Developer", "React Developer", "UI Enthusiast", "Future Full Stack Dev"];

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero-grid">
        <Reveal className="hero-content">
          <h1>
            Building <span className="gradient-text">modern, animated</span>
            <br />
            and responsive web experiences.
          </h1>
          <p className="hero-role">
            I'm a <Typewriter words={roles} />
          </p>
          <p>
            I'm {profile.name}, a BCA student from {profile.location}, focused on
            frontend development and currently learning backend development. I
            build responsive, interactive user interfaces with HTML, CSS,
            JavaScript and React.js, while developing basic knowledge of
            Node.js, Express.js and MongoDB. My goal is to grow into a Full
            Stack Developer through consistent learning and practical projects.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              View Projects
            </a>
            <a href="#contact" className="btn btn-ghost">
              Contact Me
            </a>
          </div>

          <div className="hero-meta">
            {heroChips.map((chip) => (
              <div className="hero-chip" key={chip}>
                {chip}
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal className="hero-card" delay={120}>
          <div className="profile-ring">
            <div className="profile-core">
              <img src={profile.photo} alt={`${profile.name} profile photo`} />
              <div>
                <h2 className="card-title">{profile.role}</h2>
                <p className="card-subtitle">
                  Strong foundation in semantic HTML, modern CSS, DOM
                  manipulation, JavaScript logic building, responsive design and
                  React-based interfaces.
                </p>
              </div>
            </div>
          </div>
          <span className="eyebrow">Frontend Developer | BCA Final Semester</span>
          <div className="mini-grid">
            {miniCards.map((card) => {
              const Wrapper = card.href ? "a" : "div";
              const linkProps = card.href?.startsWith("http")
                ? { href: card.href, target: "_blank", rel: "noreferrer" }
                : card.href
                  ? { href: card.href }
                  : {};
              return (
                <Wrapper className="mini-card" key={card.title} {...linkProps}>
                  <span className="mini-icon" aria-hidden="true">
                    {card.icon}
                  </span>
                  <strong>{card.title}</strong>
                  <span>{card.value}</span>
                </Wrapper>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
