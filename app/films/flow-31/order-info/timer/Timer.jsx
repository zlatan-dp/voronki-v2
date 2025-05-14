"use client";

import { useEffect, useState } from "react";
import { useCountdown } from "../../../hooks/useCountdown";
import classNames from "classnames";
import styles from "./Timer.module.css";

export default function CountdownTimer() {
  const { days, hours, minutes } = useCountdown("2025-05-31T23:59:00");
  const [showColon, setShowColon] = useState(true);
  const [hasMounted, setHasMounted] = useState(false); // Track if component has mounted

  useEffect(() => {
    setHasMounted(true);
    const interval = setInterval(() => {
      setShowColon((prev) => !prev);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Avoid rendering the component until it has mounted to prevent SSR mismatches
  if (!hasMounted) {
    return null;
  }

  return (
    <div className={styles.countdown}>
      <div className={styles.wrap}>
        <div className={styles.timeWrap}>
          {days.split("").map((digit, i) => (
            <span key={`d-${i}`} className={styles.digit}>
              {digit}
            </span>
          ))}
        </div>
        <p className={styles.timeText}>Tage</p>
      </div>

      <span className={styles.colon}>:</span>

      <div className={styles.wrap}>
        <div className={styles.timeWrap}>
          {hours.split("").map((digit, i) => (
            <span key={`h-${i}`} className={styles.digit}>
              {digit}
            </span>
          ))}
        </div>
        <p className={styles.timeText}>Stunden</p>
      </div>

      <span
        className={classNames(styles.colon, { [styles.hidden]: !showColon })}
      >
        :
      </span>

      <div className={styles.wrap}>
        <div className={styles.timeWrap}>
          {minutes.split("").map((digit, i) => (
            <span key={`m-${i}`} className={styles.digit}>
              {digit}
            </span>
          ))}
        </div>
        <p className={styles.timeText}>Minuten</p>
      </div>
    </div>
  );
}
