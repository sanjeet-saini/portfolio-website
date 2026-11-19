import { useEffect, useState } from "react";
import { useReveal } from "../hooks/useReveal";

const LINES = [
  { cmd: "whoami", out: "Sanjeet Saini — Frontend Developer" },
  { cmd: "cat skills.txt", out: "React · JavaScript · Node.js · Tailwind CSS · GSAP" },
  { cmd: "ls projects/", out: "clientflow-crm  devtracker  portfolio-builder  moodify  image-editor" },
  { cmd: "echo $STATUS", out: "Open for a frontend internship ✔" },
];

// Terminal window that types a few commands when it scrolls into view.
export default function TerminalAbout() {
  const [ref, visible] = useReveal(0.3);
  const [lineIndex, setLineIndex] = useState(0);
  const [typed, setTyped] = useState("");

  useEffect(() => {
    if (!visible || lineIndex >= LINES.length) return undefined;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setLineIndex(LINES.length);
      return undefined;
    }

    const cmd = LINES[lineIndex].cmd;
    if (typed.length < cmd.length) {
      const t = setTimeout(() => setTyped(cmd.slice(0, typed.length + 1)), 55);
      return () => clearTimeout(t);
    }
    // Finished typing this command: show its output, then move to the next one
    const t = setTimeout(() => {
      setLineIndex((i) => i + 1);
      setTyped("");
    }, 450);
    return () => clearTimeout(t);
  }, [visible, lineIndex, typed]);

  return (
    <div className="terminal" ref={ref}>
      <div className="terminal-bar" aria-hidden="true">
        <span />
        <span />
        <span />
        <p>sanjeet@portfolio: ~</p>
      </div>
      <div className="terminal-body" aria-label="About me in a terminal">
        {LINES.slice(0, lineIndex).map((line) => (
          <div key={line.cmd}>
            <p>
              <b>$</b> {line.cmd}
            </p>
            <p className="terminal-out">{line.out}</p>
          </div>
        ))}
        {lineIndex < LINES.length && (
          <p>
            <b>$</b> {typed}
            <i className="terminal-caret" />
          </p>
        )}
        {lineIndex >= LINES.length && (
          <p>
            <b>$</b> <i className="terminal-caret" />
          </p>
        )}
      </div>
    </div>
  );
}
