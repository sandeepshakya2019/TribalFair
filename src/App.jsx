import { useEffect, useRef, useState } from "react";

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Schedule from "./components/Schedule";
import VisitorInfo from "./components/VisitorInfo";
import Footer from "./components/Footer";
import TeaserModal from "./components/TeaserModal";
import Events from "./components/Events";

import { Analytics } from "@vercel/analytics/react";

export default function App() {
  const [teaserOpen, setTeaserOpen] = useState(false);

  const cursorRef = useRef(null);

  const scrollToSection = (id) =>
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });

  /* ------------------------------
     Reveal Animation
  ------------------------------- */

  useEffect(() => {
    const sections = [
      ...document.querySelectorAll("main > section:not(.hero)"),
    ];

    sections.forEach((section) => section.classList.add("reveal-section"));

    if (!window.IntersectionObserver) {
      sections.forEach((section) => section.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(({ target, isIntersecting }) => {
          if (isIntersecting) {
            target.classList.add("is-visible");
            observer.unobserve(target);
          }
        });
      },
      {
        threshold: 0.14,
        rootMargin: "0px 0px -55px",
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  /* ------------------------------
     Gaming Cursor
  ------------------------------- */

  useEffect(() => {
    const supportsCursor = window.matchMedia(
      "(hover: hover) and (pointer: fine)",
    ).matches;

    if (!supportsCursor) return;

    const cursor = cursorRef.current;

    if (!cursor) return;

    let mouseX = 0;
    let mouseY = 0;

    let currentX = 0;
    let currentY = 0;

    let animationFrame;

    const speed = 0.22;

    const animate = () => {
      currentX += (mouseX - currentX) * speed;
      currentY += (mouseY - currentY) * speed;

      cursor.style.transform = `translate3d(${currentX}px, ${currentY}px,0)`;

      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    const handleMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      const interactive = e.target.closest(
        "a, button, input, textarea, select, [role='button'], .cursor-hover",
      );

      cursor.classList.toggle("is-active", !!interactive);
    };

    const handleDown = () => {
      cursor.classList.add("is-click");
    };

    const handleUp = () => {
      cursor.classList.remove("is-click");
    };

    const hideCursor = () => {
      cursor.classList.add("is-hidden");
    };

    const showCursor = () => {
      cursor.classList.remove("is-hidden");
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mousedown", handleDown);
    window.addEventListener("mouseup", handleUp);

    document.addEventListener("mouseleave", hideCursor);
    document.addEventListener("mouseenter", showCursor);

    return () => {
      cancelAnimationFrame(animationFrame);

      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mousedown", handleDown);
      window.removeEventListener("mouseup", handleUp);

      document.removeEventListener("mouseleave", hideCursor);
      document.removeEventListener("mouseenter", showCursor);
    };
  }, []);

  return (
    <main>
      {/* Gaming Cursor */}

      <div ref={cursorRef} className="game-cursor" aria-hidden="true">
        <div className="cursor-ring"></div>

        <div className="cursor-center"></div>

        <span className="corner tl"></span>
        <span className="corner tr"></span>
        <span className="corner bl"></span>
        <span className="corner br"></span>
      </div>

      <section className="hero" id="home">
        <div className="hero-image" />
        <div className="hero-shade" />

        <Header onNavigate={scrollToSection} />

        <Hero
          onWatchTeaser={() => setTeaserOpen(true)}
          onExploreSchedule={() => scrollToSection("schedule")}
        />
      </section>

      <About onDiscover={() => scrollToSection("schedule")} />

      <Schedule />

      <Events />

      <VisitorInfo />

      <Footer />

      <TeaserModal
        isOpen={teaserOpen}
        onClose={() => setTeaserOpen(false)}
        onViewProgramme={() => {
          setTeaserOpen(false);
          scrollToSection("schedule");
        }}
      />

      <Analytics />
    </main>
  );
}
