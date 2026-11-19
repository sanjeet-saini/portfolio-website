import { Fragment, useEffect, useRef } from "react";
import { canAnimate } from "./config";

// Section heading whose words slide up one by one when it scrolls into view (GSAP + ScrollTrigger).
export default function RevealHeading({ text }) {
  const ref = useRef(null);
  const words = text.split(" ");

  useEffect(() => {
    const el = ref.current;
    if (!el || !canAnimate()) return undefined;

    let ctx;
    let cancelled = false;
    Promise.all([import("gsap"), import("gsap/ScrollTrigger")]).then(([{ gsap }, { ScrollTrigger }]) => {
      if (cancelled) return;
      gsap.registerPlugin(ScrollTrigger);
      ctx = gsap.context(() => {
        gsap.from(el.querySelectorAll(".word-inner"), {
          yPercent: 110,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.07,
          scrollTrigger: { trigger: el, start: "top 88%", once: true },
        });
      }, el);
    });

    return () => {
      cancelled = true;
      ctx?.revert();
    };
  }, [text]);

  // The space goes between the word boxes, not inside them: a trailing space
  // inside an inline-block is dropped by the browser, which joined the words.
  return (
    <h2 ref={ref} aria-label={text}>
      {words.map((word, i) => (
        <Fragment key={`${word}-${i}`}>
          <span className="word" aria-hidden="true">
            <span className="word-inner">{word}</span>
          </span>
          {i < words.length - 1 && " "}
        </Fragment>
      ))}
    </h2>
  );
}
