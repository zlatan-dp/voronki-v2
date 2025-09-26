import { useState, useEffect } from "react";
import styles from "./ProgressBar.module.css";

export default function ProgressBar({ from = 0, to = 0, duration = 800 }) {
  const [progress, setProgress] = useState(from);

  useEffect(() => {
    let start = null;
    let animationFrame;

    const animate = (timestamp) => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      const progressValue = Math.min(
        from + ((to - from) * elapsed) / duration,
        to
      );
      setProgress(Math.round(progressValue));

      if (elapsed < duration) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [from, to, duration]);

  return (
    <div className={styles.progressWrapper}>
      <div className={styles.progressFill} style={{ width: `${progress}%` }} />
      {/* <span className={styles.progressLabel}>{progress}%</span> */}
    </div>
  );
}
