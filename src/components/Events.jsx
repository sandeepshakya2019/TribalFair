import { eventPosters } from "../data/poster";

export default function Events() {
  const categories = [
    ...new Set(eventPosters.map((event) => event.category).filter(Boolean)),
  ];

  return (
    <section className="events-section section shell" id="events">
      <header className="events-header">
        <p className="eyebrow dark">Ready for the arena?</p>
        <h2>Featured Events</h2>

        <p className="events-note">
          <span className="events-note-icon" aria-hidden="true">
            i
          </span>

          <span style={{ color: "red" }}>
            Please check the individual event posters for complete details.
          </span>
        </p>
      </header>

      <div className="event-categories">
        {categories.map((category) => {
          const categoryEvents = eventPosters.filter(
            (event) => event.category === category,
          );

          return (
            <section
              className="event-category-group"
              key={category}
              aria-labelledby={`category-${category}`}
            >
              <div className="category-heading">
                <span className="category-line" aria-hidden="true" />

                <h3 id={`category-${category}`}>{category} Events</h3>

                <span className="category-count">
                  {categoryEvents.length}{" "}
                  {categoryEvents.length === 1 ? "Event" : "Events"}
                </span>
              </div>

              <div className="poster-grid">
                {categoryEvents.map((event, index) => (
                  <article
                    className="poster-card"
                    key={event.id}
                    style={{ "--card-index": index }}
                  >
                    <div className="poster-image-wrap">
                      <img
                        className="event-poster-image"
                        src={event.poster}
                        alt={`${event.eventName} event poster`}
                        draggable="false"
                        decoding="async"
                      />

                      <span className="poster-category">{event.category}</span>
                    </div>

                    <div className="poster-actions">
                      <div className="poster-information">
                        <h4>{event.eventName}</h4>
                      </div>

                      <a
                        className="view-poster-link"
                        href={event.poster}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View full poster for ${event.eventName}`}
                      >
                        <span>View Poster</span>
                        <span className="view-poster-arrow" aria-hidden="true">
                          ↗
                        </span>
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </section>
  );
}
