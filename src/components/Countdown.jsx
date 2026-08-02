"use client";

import { FAIR_START } from "../data/fairData";
import useCountdown from "../hooks/useCountdown";

export default function Countdown() {
  const time = useCountdown(FAIR_START);

  return (
    <div className="countdown-card" aria-label="Countdown to the fair">
      <p>The fair begins in</p>
      <div className="countdown-grid">
        {Object.entries(time).map(([label, value]) => (
          <div key={label}>
            <strong>{String(value).padStart(2, "0")}</strong>
            <span>{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
