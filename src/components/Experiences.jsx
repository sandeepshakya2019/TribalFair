import { eventPosters } from "../data/poster";

export default function Experiences() {
  return (
    <section className="events-section section shell" id="events">
      <div className="section-heading">
        <div>
          <p className="eyebrow dark">Culture, strength and celebration</p>
          <h2>Cultural &amp; Sports Events</h2>
        </div>

        <p>
          Explore the cultural programmes and sporting competitions taking place
          during the Tribal Fair.
        </p>
      </div>

      <div className="poster-grid">
        {eventPosters.map((event, index) => (
          <article
            className="poster-card"
            key={event.id}
            style={{ "--poster-index": index }}
          >
            <img
              className="event-poster"
              src={event.poster}
              alt={`${event.eventName} poster`}
              loading="lazy"
            />

            {event.registrationLink && (
              <a
                className="register-button"
                href={event.registrationLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Register for ${event.eventName}`}
              >
                Register Now <span aria-hidden="true">↗</span>
              </a>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
