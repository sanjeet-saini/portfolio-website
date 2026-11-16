import { useEffect, useState } from "react";
import { profile } from "../data/portfolio";

export default function Footer() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <footer className="footer">
        <div className="container">
          <p>
            © {new Date().getFullYear()} {profile.name} • Built with React
          </p>
        </div>
      </footer>
      <a href="#home" className={`back-to-top ${showTop ? "show" : ""}`} aria-label="Back to top">
        ↑
      </a>
    </>
  );
}
