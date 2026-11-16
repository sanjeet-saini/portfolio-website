import Reveal from "./Reveal";

export default function SectionHead({ tag, title, children }) {
  return (
    <Reveal className="section-head">
      <div>
        <span className="section-tag">{tag}</span>
        <h2>{title}</h2>
      </div>
      <p>{children}</p>
    </Reveal>
  );
}
