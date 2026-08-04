import { eventPosters } from "../data/poster";

export default function Events() {
  return (
    <section className="events-section section shell" id="events">
      <div className="section-heading">
        <div>
          <p className="eyebrow dark">Ready for the arena?</p>
          <h2>Featured Events</h2>
        </div>
      </div>

      <div className="poster-grid">
        {eventPosters.map((event) => (
          <article className="poster-card" key={event.id}>
            <div className="poster-image-wrap">
              <img
                className="event-poster-image"
                src={event.poster}
                alt={`${event.eventName} poster`}
                loading="lazy"
              />
            </div>

            <div className="poster-actions">
              <h3>{event.eventName}</h3>

              <a
                className="view-poster-link"
                href={event.poster}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View full ${event.eventName} poster`}
              >
                View
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
