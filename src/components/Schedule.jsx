import { useState } from "react";
import { fairDays } from "../data/fairData";

export default function Schedule() {
  const [activeDay, setActiveDay] = useState(0);
  const selectedDay = fairDays[activeDay];
  return (
    <section className="schedule section" id="schedule">
      <div className="shell">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Three days in Keylong</p>
            <h2>Make room for wonder.</h2>
          </div>
          <p>
            Explore the programme day by day. Final timings and venues will be
            shared closer to the fair.
            <br />
            <b style={{ color: "red" }}>
              Please Check the Individual Poster for More Details like Venue and
              Contact
            </b>
          </p>
        </div>
        <div className="day-tabs" role="tablist" aria-label="Fair days">
          {fairDays.map((item, index) => (
            <button
              key={item.day}
              id={`day-tab-${index}`}
              className={index === activeDay ? "active" : ""}
              onClick={() => setActiveDay(index)}
              role="tab"
              aria-selected={index === activeDay}
              aria-controls="fair-programme"
            >
              <span>{item.day}</span>
              <b>{item.date}</b>
            </button>
          ))}
        </div>
        <div
          className="programme"
          id="fair-programme"
          role="tabpanel"
          aria-labelledby={`day-tab-${activeDay}`}
        >
          <div className="programme-title">
            <span>
              {selectedDay.day} · {selectedDay.date}
            </span>
            <h3>{selectedDay.title}</h3>
          </div>
          <div className="event-list">
            {selectedDay.events.map(([eventTime, name, venue], index) => (
              <article className="event-row" key={`${selectedDay.day}-${name}`}>
                <time>{eventTime}</time>
                <div>
                  <h4>{name}</h4>
                  <p>⌖ {venue}</p>
                </div>
                <span className="event-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
