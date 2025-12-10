"use client";

import { createContext, useContext, useEffect, useState, useRef } from "react";

const TimerContext = createContext(null);

export function TimerProvider({ initialSeconds = 600, children }) {
  const [secondLeft, setSecondLeft] = useState(initialSeconds);
  const [timerActive, setTimerActive] = useState(false);
  const intervalRef = useRef(null);

  // Запуск таймера

  const startTimer = () => {
    if (!timerActive) {
      setTimerActive(true);
    }
  };

  // Зупинка таймера

  const stopTimer = () => {
    setTimerActive(false);
  };

  // Логіка інтервалу

  useEffect(() => {
    if (!timerActive) {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      return;
    }

    intervalRef.current = setInterval(() => {
      setSecondLeft((prev) => {
        if (prev <= 1) {
          setTimerActive(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(intervalRef.current);
  }, [timerActive]);

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     setSecondLeft((prev) => {
  //       if (prev < 1) {
  //         setTimerActive(false);
  //         clearInterval(intervalId);
  //         return 0;
  //       }

  //       return prev - 1;
  //     });
  //   }, 1000);

  //   return () => clearInterval(intervalId);
  // }, []);

  const minutes = Math.floor(secondLeft / 60);
  const seconds = secondLeft % 60;

  return (
    <TimerContext.Provider
      value={{
        secondLeft,
        minutes,
        seconds,
        timerActive,
        startTimer,
        stopTimer,
      }}
    >
      {children}
    </TimerContext.Provider>
  );
}

export function useTimer() {
  return useContext(TimerContext);
}
