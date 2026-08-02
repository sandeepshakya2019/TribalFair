"use client";

import { useEffect, useState } from "react";

function getRemainingTime(targetDate) {
  const difference = Math.max(0, new Date(targetDate).getTime() - Date.now());

  return {
    days: Math.floor(difference / 86400000),
    hours: Math.floor((difference / 3600000) % 24),
    min: Math.floor((difference / 60000) % 60),
    sec: Math.floor((difference / 1000) % 60),
  };
}

export default function useCountdown(targetDate) {
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    min: 0,
    sec: 0,
  });

  useEffect(() => {
    const initialTick = window.setTimeout(
      () => setTime(getRemainingTime(targetDate)),
      0,
    );
    const timer = window.setInterval(
      () => setTime(getRemainingTime(targetDate)),
      1000,
    );

    return () => {
      window.clearTimeout(initialTick);
      window.clearInterval(timer);
    };
  }, [targetDate]);

  return time;
}
