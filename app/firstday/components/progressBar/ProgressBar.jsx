import { useState, useEffect } from "react";
import styles from "./ProgressBar.module.css";

export default function ProgressBar({
  from = 0,
  to = 0,
  duration = 800,
  // currentStep = 1,
  // totalSteps = 1,
}) {
  const [progress, setProgress] = useState(from);
  const [animatedPercent, setAnimatedPercent] = useState(from);

  useEffect(() => {
    let start = null;
    let frame;

    const animate = (timestamp) => {
      if (!start) start = timestamp;

      const elapsed = timestamp - start;
      const value = Math.min(from + ((to - from) * elapsed) / duration, to);

      setProgress(Math.round(value));
      setAnimatedPercent(Math.round(value));

      if (elapsed < duration) {
        frame = requestAnimationFrame(animate);
      }
    };

    frame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frame);
  }, [from, to, duration]);

  return (
    <div className={styles.progressBarWrapper}>
      <div className={styles.progressText}>
        {/* <p className={styles.stepText}>
          Question {currentStep} of {totalSteps}
        </p> */}
        <p className={styles.stepText}>Day 1 progress</p>
        <p className={styles.percentText}>{animatedPercent}%</p>
      </div>
      <div className={styles.progressWrapper}>
        <div
          className={styles.progressFill}
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
