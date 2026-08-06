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
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);

  const cursorRef = useRef(null);

  /* ------------------------------
     Game-style boot sequence
  ------------------------------- */

  useEffect(() => {
    const minimumLoadTime = 2600;
    const startedAt = performance.now();
    let frameId;
    let finishTimer;
    let hideTimer;
    let hasFinished = false;

    const finishLoading = () => {
      if (hasFinished) return;
      hasFinished = true;
      cancelAnimationFrame(frameId);

      const elapsed = performance.now() - startedAt;
      const remaining = Math.max(0, minimumLoadTime - elapsed);

      finishTimer = window.setTimeout(() => {
        setLoadingProgress(100);
        hideTimer = window.setTimeout(() => setIsLoading(false), 340);
      }, remaining);
    };

    const updateProgress = () => {
      if (hasFinished) return;
      const elapsed = performance.now() - startedAt;
      // Hold just below completion until the page assets are ready.
      setLoadingProgress(Math.min(92, Math.round((elapsed / minimumLoadTime) * 92)));
      frameId = requestAnimationFrame(updateProgress);
    };

    updateProgress();

    if (document.readyState === "complete") {
      finishLoading();
    } else {
      window.addEventListener("load", finishLoading, { once: true });
    }

    return () => {
      cancelAnimationFrame(frameId);
      window.clearTimeout(finishTimer);
      window.clearTimeout(hideTimer);
      window.removeEventListener("load", finishLoading);
    };
  }, []);

  const scrollToSection = (id) =>
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });

  /* ------------------------------
     Reveal Animation
  ------------------------------- */

  useEffect(() => {
    const headings = document.querySelectorAll(
      ".section-heading h2, .intro h2, .visit h2",
    );

    headings.forEach((heading) => {
      if (heading.dataset.typeReady) return;

      const label = heading.textContent.trim();
      heading.dataset.typeReady = "true";
      heading.classList.add("typing-heading");
      heading.setAttribute("aria-label", label);
      heading.replaceChildren(
        ...[...label].map((character, index) => {
          const letter = document.createElement("span");
          letter.className = "typing-char";
          letter.style.setProperty("--char-index", index);
          letter.setAttribute("aria-hidden", "true");
          letter.textContent = character === " " ? "\u00a0" : character;
          return letter;
        }),
      );
    });

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
    <main className={isLoading ? "site-loading" : "site-ready"}>
      {isLoading && (
        <div className="game-loader" role="status" aria-live="polite">
          <div className="game-loader__panel">
            <p className="game-loader__eyebrow">Tribal Fair 2026</p>
            <h1>Preparing the arena</h1>
            <div className="game-loader__track" aria-hidden="true">
              <span style={{ width: `${loadingProgress}%` }} />
            </div>
            <div className="game-loader__meta">
              <span>Loading festival experience</span>
              <b>{loadingProgress}%</b>
            </div>
          </div>
        </div>
      )}

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
