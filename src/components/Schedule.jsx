import { useState } from "react";
import { fairDays } from "../data/fairData";

export default function Schedule() {
  const [activeDay, setActiveDay] = useState(0);
  const selectedDay = fairDays[activeDay];

  if (!selectedDay) {
    return null;
  }

  const changeDay = (index) => {
    setActiveDay(index);
  };

  const handleTabKeyDown = (event, index) => {
    let nextIndex = index;

    if (event.key === "ArrowRight") {
      nextIndex = (index + 1) % fairDays.length;
    } else if (event.key === "ArrowLeft") {
      nextIndex = (index - 1 + fairDays.length) % fairDays.length;
    } else if (event.key === "Home") {
      nextIndex = 0;
    } else if (event.key === "End") {
      nextIndex = fairDays.length - 1;
    } else {
      return;
    }

    event.preventDefault();
    changeDay(nextIndex);

    document.getElementById(`day-tab-${nextIndex}`)?.focus();
  };

  return (
    <section className="schedule section" id="schedule">
      <div className="shell">
        <header className="schedule-heading">
          <div className="schedule-heading-copy">
            <p className="eyebrow">Three days in Keylong</p>
            <h2>Make Room for Wonder.</h2>
          </div>

          <div className="schedule-introduction">
            <p>Explore the complete Tribal Fair programme, day by day.</p>

            <div className="schedule-notice" role="note">
              <span className="schedule-notice-icon" aria-hidden="true">
                i
              </span>

              <p>
                Please check the individual event posters for complete venue,
                contact and participation details.
              </p>
            </div>
          </div>
        </header>

        <div
          className="day-tabs"
          role="tablist"
          aria-label="Tribal Fair programme days"
        >
          {fairDays.map((item, index) => {
            const isActive = index === activeDay;

            return (
              <button
                type="button"
                key={`${item.day}-${item.date}`}
                id={`day-tab-${index}`}
                className={`day-tab ${isActive ? "active" : ""}`}
                onClick={() => changeDay(index)}
                onKeyDown={(event) => handleTabKeyDown(event, index)}
                role="tab"
                aria-selected={isActive}
                aria-controls={`day-panel-${index}`}
                tabIndex={isActive ? 0 : -1}
              >
                <span>{item.day}</span>
                <strong>{item.date}</strong>

                <span className="day-tab-arrow" aria-hidden="true">
                  →
                </span>
              </button>
            );
          })}
        </div>

        <div
          key={activeDay}
          className="programme"
          id={`day-panel-${activeDay}`}
          role="tabpanel"
          aria-labelledby={`day-tab-${activeDay}`}
          tabIndex="0"
        >
          <div className="programme-title">
            <span>
              {selectedDay.day} · {selectedDay.date}
            </span>

            <h3>{selectedDay.title}</h3>

            <p>
              {selectedDay.events.length}{" "}
              {selectedDay.events.length === 1
                ? "scheduled event"
                : "scheduled events"}
            </p>
          </div>

          <div className="event-list">
            {selectedDay.events.map(([eventTime, name, venue], index) => (
              <article
                className="event-row"
                key={`${selectedDay.day}-${eventTime}-${name}-${index}`}
                style={{ "--event-index": index }}
              >
                <div className="event-time">
                  {/* <span>Time</span> */}
                  <time>{eventTime}</time>
                </div>

                <div className="event-details">
                  <h4>{name}</h4>

                  {venue && venue !== "-" && (
                    <p>
                      <span aria-hidden="true">⌖</span>
                      {venue}
                    </p>
                  )}
                </div>

                <span className="event-number" aria-hidden="true">
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
