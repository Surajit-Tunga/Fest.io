import React, { useEffect, useState } from 'react';

const CountdownTimer = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  function getTimeLeft() {
    const total = Date.parse(targetDate) - Date.now();
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));
    return { total, days, hours, minutes, seconds };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      const updated = getTimeLeft();
      if (updated.total <= 0) clearInterval(timer);
      setTimeLeft(updated);
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  const formatTime = (val) => String(val).padStart(2, '0');

  return (
    <div className="w-fit mx-auto">
      <div className="rounded-full border-2 border-orange-700  px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 text-white font-orbitron text-base sm:text-lg md:text-xl font-semibold shadow-md flex items-center gap-1 sm:gap-2">
        <span>{formatTime(timeLeft.days)}</span>
        <span className="text-orange-400 font-bold">:</span>
        <span>{formatTime(timeLeft.hours)}</span>
        <span className="text-orange-400 font-bold">:</span>
        <span>{formatTime(timeLeft.minutes)}</span>
        <span className="text-orange-400 font-bold">:</span>
        <span>{formatTime(timeLeft.seconds)}</span>
      </div>
    </div>
  );
};

export default CountdownTimer;
