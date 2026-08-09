import { useEffect, useRef } from "react";
import { mainPoster } from "../data/mainPoser";

export default function WomenEmpowerment() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const cards = sectionRef.current?.querySelectorAll(
      ".women-featured-poster",
    );

    if (!cards?.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.16,
        rootMargin: "0px 0px -60px",
      },
    );

    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="women-empowerment-section section shell"
      id="women-empowerment"
    >
      <div className="women-background-orb women-orb-one" />
      <div className="women-background-orb women-orb-two" />

      <div className="women-section-heading">
        <div>
          <p className="eyebrow dark">Strength. Dignity. Leadership.</p>
          <h2>Women Empowerment</h2>
        </div>

        <p className="women-heading-description">
          Celebrating the courage, contribution and leadership of tribal
          women—the strength behind our heritage and the architects of our
          future.
        </p>
      </div>

      <div className="women-posters-list">
        {mainPoster.map((item, index) => (
          <article
            className={`women-featured-poster ${
              index % 2 !== 0 ? "women-poster-reverse" : ""
            }`}
            style={{ "--poster-delay": `${index * 140}ms` }}
            key={item.id}
          >
            <div className="women-poster-image-wrap">
              <img
                className="women-poster-image"
                src={item.poster}
                alt={`${item.title} — ${item.category}`}
                loading="lazy"
              />

              <div className="women-image-shine" />

              {/* <span className="women-theme-badge">{item.category}</span> */}

              <span className="women-poster-number">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>

            <div className="women-poster-content">
              <div>
                <p className="women-poster-label">Official Tribal Fair Theme</p>

                <h3>{item.title}</h3>
                <p>{item.description}</p>

                <blockquote className="women-power-quote">
                  “Empowered women do not only transform their own lives—they
                  strengthen generations.”
                </blockquote>
              </div>

              <a
                className="view-women-poster"
                href={item.poster}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View full poster: ${item.title}`}
              >
                View Full Poster
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
