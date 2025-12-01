"use client";

import styles from "./ProgressCircle.module.css";

import { useState, useEffect } from "react";

export default function ProgressCircle({ duration = 3000, onComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let startTime = null;
    let frame;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;

      const elapsed = timestamp - startTime;
      const percent = Math.min((elapsed / duration) * 100, 100);

      setProgress(percent);

      if (percent < 100) {
        frame = requestAnimationFrame(animate);
      } else {
        if (typeof onComplete === "function") onComplete();
      }
    };

    frame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frame);
  }, [duration, onComplete]);

  return (
    <div className={styles.circleWrap}>
      <svg className={styles.svgWrap} viewBox="0 0 36 36">
        <path
          d="M18 2.5
             a 15.5 15.5 0 1 1 0 31
             a 15.5 15.5 0 1 1 0 -31"
          fill="none"
          className={styles.track}
        />

        <path
          d="M18 2.5
             a 15.5 15.5 0 1 1 0 31
             a 15.5 15.5 0 1 1 0 -31"
          className={styles.progress}
          fill="none"
          strokeDasharray="100"
          strokeDashoffset={100 - progress}
        />
      </svg>
      <div className={styles.percentText}>{Math.round(progress)}%</div>
    </div>
  );
}
