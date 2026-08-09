import Countdown from "./Countdown";

export default function Hero({ onWatchTeaser, onExploreSchedule }) {
  return (
    <div className="hero-content shell">
      <div className="hero-copy">
        <p className="eyebrow">Lahaul &amp; Spiti’s cultural games festival</p>

        <h1>
          TRIBAL FAIR
          <span>Games. Culture. Glory.</span>
        </h1>

        <p className="hero-lead">
          Three days of high-altitude sport, community pride and Himalayan
          culture—where every contest has a story behind it.
        </p>

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
            Explore More <span>→</span>
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

      <div className="hero-visual">
        <div className="mascot-glow" aria-hidden="true" />

        <img
          className="hero-mascot"
          src="/images/Mascot.png"
          alt="Tribal Fair 2026 snow leopard mascot"
          loading="eager"
        />

        <Countdown />
      </div>
    </div>
  );
}
