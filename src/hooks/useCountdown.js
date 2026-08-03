"use client";

import { useEffect, useState } from "react";

const EMPTY_TIME = {
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
};

function calculateTimeLeft(targetDate) {
  const targetTime = new Date(targetDate).getTime();

  if (Number.isNaN(targetTime)) {
    console.error("Invalid countdown date:", targetDate);
    return EMPTY_TIME;
  }

  const difference = Math.max(0, targetTime - Date.now());

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
}

export default function useCountdown(targetDate) {
  const [time, setTime] = useState(() => calculateTimeLeft(targetDate));

  useEffect(() => {
    const updateCountdown = () => {
      setTime(calculateTimeLeft(targetDate));
    };

    updateCountdown();

    const intervalId = window.setInterval(updateCountdown, 1000);

    return () => window.clearInterval(intervalId);
  }, [targetDate]);

  return time;
}
