"use client";
import { useCallback, useEffect, useState } from "react";

const Countdown: React.FC<{ targetDate: string }> = ({ targetDate }) => {
  const calculateTimeLeft = useCallback(() => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft: {
      [key: string]: number | string | undefined;
    } = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  }, [targetDate]);
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [calculateTimeLeft]);

  return (
    <div className="flex justify-center items-center">
      <div className="grid grid-cols-4 gap-4 py-4">
        <div className="flex flex-col items-center">
          <div className="text-4xl font-bold">{timeLeft.days}</div>
          <div className="text-sm uppercase">Dias</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-4xl font-bold">{timeLeft.hours}</div>
          <div className="text-sm uppercase">Horas</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-4xl font-bold">{timeLeft.minutes}</div>
          <div className="text-sm uppercase">Minutos</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-4xl font-bold">{timeLeft.seconds}</div>
          <div className="text-sm uppercase">Segundos</div>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
