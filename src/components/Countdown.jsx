import { FAIR_START } from "../data/fairData";
import useCountdown from "../hooks/useCountdown";

const UNITS = [
  { key: "days", label: "Days" },
  { key: "hours", label: "Hours" },
  { key: "minutes", label: "Minutes" },
  { key: "seconds", label: "Seconds" },
];

export default function Countdown() {
  const time = useCountdown(FAIR_START);

  const hasEnded =
    time && UNITS.every(({ key }) => Number(time[key] ?? 0) === 0);

  return (
    <div
      className={`countdown-card ${hasEnded ? "countdown-ended" : ""}`}
      role="timer"
      aria-live="polite"
      aria-label={
        hasEnded
          ? "Tribal Fair 2026 has begun"
          : "Countdown to Tribal Fair 2026"
      }
    >
      {hasEnded ? (
        <div className="countdown-complete">
          <span className="countdown-celebration" aria-hidden="true">
            ✦
          </span>

          <p className="countdown-complete-label">The celebration has begun</p>

          <h3>Tribal Fair 2026 is Now Live!</h3>

          <p>
            Join us in Keylong for a celebration of culture, tradition and
            community.
          </p>
        </div>
      ) : (
        <>
          <p className="countdown-title">The fair begins in</p>

          <div className="countdown-grid">
            {UNITS.map(({ key, label }) => {
              const value = Number(time?.[key]) || 0;

              return (
                <div className="countdown-unit" key={key}>
                  <div className="countdown-number-wrap">
                    <strong
                      key={`${key}-${value}`}
                      className="countdown-number"
                    >
                      {String(value).padStart(2, "0")}
                    </strong>
                  </div>

                  <span>{label}</span>
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}
