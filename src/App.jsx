import CursorGlow from "./components/CursorGlow";
import Header from "./components/Header";
import ScrollProgress from "./components/ScrollProgress";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { EXPERIMENTS } from "./experiments/config";
import TiltCards from "./experiments/TiltCards";
import TechMarquee from "./experiments/TechMarquee";

export default function App() {
  return (
    <>
      <ScrollProgress />
      <CursorGlow />
      {EXPERIMENTS.tilt && <TiltCards />}
      <Header />
      <main>
        <Hero />
        {EXPERIMENTS.marquee && <TechMarquee />}
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
