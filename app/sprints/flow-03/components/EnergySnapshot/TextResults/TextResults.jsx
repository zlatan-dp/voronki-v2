import { useEffect, useState } from "react";
import { getQuizAnswers } from "../../../../actions/quizStorage";
import styles from "./TextResults.module.css";

import { useCurrentFlow } from "../../../../actions/getCurrentFlow";

export default function TextResalts() {
  const [totalPoints, setTotalPoints] = useState(null);

  const currentFlow = useCurrentFlow();

  useEffect(() => {
    const answers = getQuizAnswers(currentFlow);
    const sum = Object.values(answers).reduce((a, b) => a + b, 0);
    setTotalPoints(sum);
  }, []);

  if (totalPoints === null) return null;

  const resultText = (points) => {
    if (points < 5) {
      return (
        <>
          <p className={styles.subtitle}>Low fatigue</p>
          <p className={styles.text}>
            Great news — your energy levels look generally balanced. Staying
            consistent with rest, movement, and stress care can help keep it
            that way.
          </p>
          <p className={styles.text}>
            Our free mini-course offers practical ways to overcome fatigue and
            boost your energy.
          </p>
        </>
      );
    }
    if (points < 9) {
      return (
        <>
          <p className={styles.subtitle}>Moderate fatigue</p>
          <p className={styles.text}>
            Your energy may feel inconsistent right now, especially on busy or
            stressful days.
          </p>
          <p className={styles.text}>
            Taking a closer look at your daily routine, sleep, and stress
            patterns can make a meaningful difference.
            <br /> Our free mini-course offers simple, practical steps to help
            you rebuild energy and stay consistent without overwhelm.
          </p>
        </>
      );
    }
    return (
      <>
        <p className={styles.subtitle}>High fatigue</p>
        <p className={styles.text}>You are experiencing high fatigue.</p>
        <p className={styles.boldText}>
          We strongly recommend consulting a healthcare professional to rule out
          underlying medical conditions.
        </p>
        <p className={styles.text}>
          In addition, our mini-course offers gentle, practical practices to
          support your recovery and daily energy.
        </p>
      </>
    );
  };

  return <>{resultText(totalPoints)}</>;
}
