"use client";

import { createContext, useContext, useEffect, useState } from "react";

const TimerContext = createContext(null);

export function TimerProvider({ initialSeconds = 600, children }) {
  const [secondLeft, setSecondLeft] = useState(initialSeconds);
  const [timerActive, setTimerActive] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSecondLeft((prev) => {
        if (prev < 1) {
          setTimerActive(false);
          clearInterval(intervalId);
          return 0;
        }

        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const minutes = Math.floor(secondLeft / 60);
  const seconds = secondLeft % 60;

  return (
    <TimerContext.Provider
      value={{ secondLeft, minutes, seconds, timerActive }}
    >
      {children}
    </TimerContext.Provider>
  );
}

export function useTimer() {
  return useContext(TimerContext);
}
