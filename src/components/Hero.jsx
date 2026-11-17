import Reveal from "./Reveal";
import Typewriter from "./Typewriter";
import { heroChips, miniCards, profile } from "../data/portfolio";

const roles = ["Frontend Developer", "React Developer", "JavaScript Developer", "UI Enthusiast"];

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
            I'm {profile.name}, a BCA final-year student and frontend developer
            from {profile.location}. I build responsive, interactive web apps
            with HTML, CSS, JavaScript and React — all of them live on GitHub
            Pages. I'm looking for a frontend developer internship.
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
