import { eventPosters } from "../data/poster";

export default function Events() {
  const categories = [...new Set(eventPosters.map((event) => event.category))];

  return (
    <section className="events-section section shell" id="events">
      <div className="section-heading">
        <div>
          <p className="eyebrow dark">Ready for the arena?</p>
          <h2>Featured Events</h2>
        </div>
      </div>

      <div className="event-categories">
        {categories.map((category) => {
          const categoryEvents = eventPosters.filter(
            (event) => event.category === category,
          );

          return (
            <div className="event-category-group" key={category}>
              {/* <div className="category-heading">
                <span className="category-line" />
                <h3>{category} Events</h3>
                <span className="category-count">
                  {categoryEvents.length} Events
                </span>
              </div> */}

              <div className="poster-grid">
                {categoryEvents.map((event) => (
                  <article className="poster-card" key={event.id}>
                    <div className="poster-image-wrap">
                      <img
                        className="event-poster-image"
                        src={event.poster}
                        alt={`${event.eventName} poster`}
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
                        aria-label={`View full ${event.eventName} poster`}
                      >
                        View
                        <span aria-hidden="true">↗</span>
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
