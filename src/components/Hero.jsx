import Countdown from "./Countdown";

export default function Hero({ onWatchTeaser, onExploreSchedule }) {
  return (
    <>
      <div className="hero-content shell">
        <div className="hero-copy">
          <p className="eyebrow">
            Celebrating culture, tradition and the strength of tribal women
          </p>

          <h1>
            TRIBAL FAIR 2026
            <br />
            <span>Celebrating Culture, Empowering Women</span>
          </h1>

          {/* <p className="hero-lead">
            Experience the vibrant heritage of Lahaul and Spiti while
            celebrating the courage, creativity, leadership and achievements of
            tribal women who preserve our traditions and shape the future of the
            Himalayan valleys.
          </p> */}

          <div className="hero-actions">
            <button
              className="play-button"
              onClick={onWatchTeaser}
              aria-label="Watch Tribal Fair teaser"
            >
              <span>▶</span>
            </button>

            <button className="text-action" onClick={onWatchTeaser}>
              Watch the Teaser
            </button>

            <button className="outline-button" onClick={onExploreSchedule}>
              Explore Fair Events <span>→</span>
            </button>
          </div>

          <div className="event-facts">
            <span>
              <b aria-hidden="true">▣</b> 14–16 August 2026
            </span>

            <span>
              <b aria-hidden="true">⌖</b> Keylong, Lahaul &amp; Spiti
            </span>
          </div>
        </div>

        <Countdown />
      </div>
    </>
  );
}
