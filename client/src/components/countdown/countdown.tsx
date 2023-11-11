import React from 'react';

function Countdown() {
  const targetDate = new Date('May 24, 2024 00:00:00').getTime();
  const [timeRemaining, setTimeRemaining] = React.useState(
    calculateTimeRemaining(),
  );

  const noTimeLeft = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  };

  function calculateTimeRemaining() {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference === 0) {
      return noTimeLeft;
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  }

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <p>
      {timeRemaining.days} days, {timeRemaining.hours} hours,{' '}
      {timeRemaining.minutes} minutes, {timeRemaining.seconds} seconds
    </p>
  );
}

export default Countdown;
