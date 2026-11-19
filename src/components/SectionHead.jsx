import Reveal from "./Reveal";
import { EXPERIMENTS } from "../experiments/config";
import RevealHeading from "../experiments/RevealHeading";

export default function SectionHead({ tag, title, children }) {
  return (
    <Reveal className="section-head">
      <div>
        <span className="section-tag">{tag}</span>
        {EXPERIMENTS.headingReveal ? <RevealHeading text={title} /> : <h2>{title}</h2>}
      </div>
      <p>{children}</p>
    </Reveal>
  );
}
