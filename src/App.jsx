import { useEffect, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Schedule from "./components/Schedule";
import Experiences from "./components/Experiences";
import VisitorInfo from "./components/VisitorInfo";
import Footer from "./components/Footer";
import TeaserModal from "./components/TeaserModal";

export default function App() {
  const [teaserOpen, setTeaserOpen] = useState(false);
  const scrollToSection = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  useEffect(() => {
    const sections = [...document.querySelectorAll("main > section:not(.hero)")];
    sections.forEach((section) => section.classList.add("reveal-section"));

    if (!window.IntersectionObserver) {
      sections.forEach((section) => section.classList.add("is-visible"));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => entries.forEach(({ target, isIntersecting }) => {
        if (isIntersecting) {
          target.classList.add("is-visible");
          observer.unobserve(target);
        }
      }),
      { threshold: 0.14, rootMargin: "0px 0px -55px" },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <main>
      <section className="hero" id="home">
        <div className="hero-image" />
        <div className="hero-shade" />
        <Header onNavigate={scrollToSection} />
        <Hero onWatchTeaser={() => setTeaserOpen(true)} onExploreSchedule={() => scrollToSection("schedule")} />
      </section>
      <About onDiscover={() => scrollToSection("schedule")} />
      <Schedule />
      <Experiences />
      <VisitorInfo />
      <Footer />
      <TeaserModal isOpen={teaserOpen} onClose={() => setTeaserOpen(false)} onViewProgramme={() => { setTeaserOpen(false); scrollToSection("schedule"); }} />
    </main>
  );
}
