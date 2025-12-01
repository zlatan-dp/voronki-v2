"use client";

import { useEffect, useState } from "react";
import styles from "./CountdownTimer.module.css";

export default function CountdownTimer({ initialSeconds = 600, onExpire }) {
  const [secondsLeft, setSecondsLeft] = useState(initialSeconds);

  // Запускаємо інтервал один раз
  useEffect(() => {
    const intervalId = setInterval(() => {
      setSecondsLeft((prev) => Math.max(prev - 1, 0));
    }, 1000);

    return () => clearInterval(intervalId); // очищаємо при розмонтуванні
  }, []);

  // Коли таймер дійшов до нуля — викликаємо onExpire
  useEffect(() => {
    if (secondsLeft === 0 && onExpire) {
      onExpire();
    }
  }, [secondsLeft, onExpire]);

  const minutes = Math.floor(secondsLeft / 60);
  const seconds = secondsLeft % 60;
  const label = `${minutes}:${String(seconds).padStart(2, 0)}`;

  return (
    <div className={styles.bar}>
      <span className={styles.text}>
        60% discount reserved for:{" "}
        <strong className={styles.time}>{label}</strong>
      </span>
    </div>
  );
}
