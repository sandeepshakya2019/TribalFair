import { eventPosters } from "../data/poster";

export default function Experiences() {
  return <section className="events-section section shell" id="events">
    <div className="section-heading"><div><p className="eyebrow dark">Ready for the arena?</p><h2>Featured Games</h2></div><p>Explore the cultural programmes, team tournaments and sporting competitions at Tribal Fair Games.</p></div>
    <div className="poster-grid">{eventPosters.map((event) => <article className="poster-card" key={event.id}>
      <img className="event-poster" src={event.poster} alt={`${event.eventName} poster`} loading="lazy" />
      {event.registrationLink && <a className="register-link" href={event.registrationLink} target="_blank" rel="noreferrer" aria-label={`Register for ${event.eventName}`}>Register now <span aria-hidden="true">→</span></a>}
    </article>)}</div>
  </section>;
}
