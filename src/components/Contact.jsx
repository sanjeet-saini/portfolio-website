import { useState } from "react";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import Chips from "./Chips";
import { profile, whyChips } from "../data/portfolio";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  return (
    <section id="contact">
      <div className="container">
        <SectionHead tag="Contact" title="Let’s build something great together.">
          I’m looking for a frontend internship or entry-level opportunity
          where I can contribute to real products, learn from experienced
          developers and grow professionally.
        </SectionHead>

        <div className="contact-grid">
          <Reveal as="article" className="contact-card large" glow>
            <h3>Why work with me?</h3>
            <p>
              I combine technical fundamentals with creative UI interest. I enjoy
              making interfaces look attractive, feel smooth, and work properly.
              I’m also committed to learning continuously and improving project
              quality.
            </p>
            <Chips items={whyChips} />
          </Reveal>

          <Reveal as="article" className="contact-card" glow delay={100}>
            <h3>Get in touch</h3>
            <div className="contact-list">
              <div className="contact-item">
                <small>Email</small>
                <div className="contact-row">
                  <a href={`mailto:${profile.email}`}>{profile.email}</a>
                  <button type="button" className="copy-btn" onClick={copyEmail}>
                    {copied ? "Copied ✓" : "Copy"}
                  </button>
                </div>
              </div>
              <div className="contact-item">
                <small>Phone</small>
                <a href={profile.phoneHref}>{profile.phone}</a>
              </div>
              <div className="contact-item">
                <small>LinkedIn</small>
                <a href={profile.linkedinUrl} target="_blank" rel="noreferrer">
                  {profile.linkedin}
                </a>
              </div>
              <div className="contact-item">
                <small>GitHub</small>
                <a href={profile.githubUrl} target="_blank" rel="noreferrer">
                  {profile.github}
                </a>
              </div>
              <div className="contact-item">
                <small>Location</small>
                <span>{profile.location}</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
