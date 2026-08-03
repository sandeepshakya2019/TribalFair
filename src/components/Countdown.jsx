"use client";

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

  return (
    <div
      className="countdown-card"
      role="timer"
      aria-label="Countdown to Tribal Fair 2026"
    >
      <p className="countdown-title">The fair begins in</p>

      <div className="countdown-grid">
        {UNITS.map(({ key, label }) => {
          const value = Number(time?.[key]) || 0;

          return (
            <div className="countdown-unit" key={key}>
              <div className="countdown-number-wrap">
                <strong key={`${key}-${value}`} className="countdown-number">
                  {String(value).padStart(2, "0")}
                </strong>
              </div>

              <span>{label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
