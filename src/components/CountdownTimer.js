import React, { useEffect, useState } from 'react';

const CountdownTimer = ({ targetDate }) => {
  const calculateTimeRemaining = () => {
    const now = new Date().getTime();
    const distance = targetDate.getTime() - now;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    return { days, hours, minutes, seconds };
  };

  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="countdown">
      <h2>Countdown Timer</h2>
      <div>
        <div>Days: {timeRemaining.days}</div>
        <div>Hours: {timeRemaining.hours}</div>
        <div>Minutes: {timeRemaining.minutes}</div>
        <div>Seconds: {timeRemaining.seconds}</div>
      </div>
    </div>
  );
};

export default CountdownTimer;
