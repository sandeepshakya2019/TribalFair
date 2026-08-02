"use client";

import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Schedule from "./components/Schedule";
import Experiences from "./components/Experiences";
import VisitorInfo from "./components/VisitorInfo";
import Footer from "./components/Footer";
import TeaserModal from "./components/TeaserModal";

export default function Home() {
  const [teaserOpen, setTeaserOpen] = useState(false);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main>
      <section className="hero" id="home">
        <div className="hero-image" />
        <div className="hero-shade" />
        <Header onNavigate={scrollToSection} />
        <Hero
          onWatchTeaser={() => setTeaserOpen(true)}
          onExploreSchedule={() => scrollToSection("schedule")}
        />
      </section>

      <About onDiscover={() => scrollToSection("experiences")} />
      <Schedule />
      <Experiences />
      <VisitorInfo />
      {/* <Footer /> */}

      <TeaserModal
        isOpen={teaserOpen}
        onClose={() => setTeaserOpen(false)}
        onViewProgramme={() => {
          setTeaserOpen(false);
          scrollToSection("schedule");
        }}
      />
    </main>
  );
}
