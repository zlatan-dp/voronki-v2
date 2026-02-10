import { useEffect, useState } from "react";
import { getQuizAnswers } from "../../../../../actions/quizStorage";
import styles from "./TextResults.module.css";

import { useCurrentFlow } from "../../../../../actions/getCurrentFlow";
import SubmitBtn from "../../../../../components/submitBtn/SubmitBtn";
import { useRouter } from "next/navigation";

import { nextStep } from "../../../../../../actions/steps-client.action";
import { getCurrentTime } from "../../../../../actions/getCurrentTime";

export default function TextResults() {
  const [totalPoints, setTotalPoints] = useState(null);

  const currentFlow = useCurrentFlow();
  const router = useRouter();

  const goToNextStep = async () => {
    await nextStep({
      step: 17,
      type: "info",
      question: "Start today",
      answer: "Button click",
      time: await getCurrentTime(),
    });

    router.push(`/sprints/${currentFlow}/enter-email`);
  };

  useEffect(() => {
    const answers = getQuizAnswers(currentFlow);
    const sum = Object.values(answers).reduce((a, b) => a + b, 0);
    setTotalPoints(sum);
  }, []);

  if (totalPoints === null) return null;

  const resultText = (points) => {
    if (points < 16) {
      return (
        <>
          <p className={styles.subtitle}>
            🌿 “Good energy base — <br />
            time for quality recharge”
          </p>
          <div className={styles.textWrap}>
            <p className={styles.text}>Start these 3 habits TODAY:</p>
            <p className={styles.text}>
              • 15-min morning sunlight — open curtains immediately after waking
            </p>
            <p className={styles.text}>
              • 1 hydration reminder — keep water bottle visible all day
            </p>
            <p className={styles.text}>
              • 3 deep breaths before stressful moments
            </p>
            <p className={styles.text}>
              ChatMind shows exact timing, breathing techniques, and progress
              tracking
            </p>
          </div>
        </>
      );
    }
    if (points < 24) {
      return (
        <>
          <p className={styles.subtitle}>
            ⚠️ “Exhaustion signals appearing — time for recovery”
          </p>
          <div className={styles.textWrap}>
            <p className={styles.text}>Start these 3 habits TODAY:</p>
            <p className={styles.text}>
              • Power-down ritual — 30 min before bed: no screens, dim lights
            </p>
            <p className={styles.text}>
              • 2-min stretch breaks — every 90 min of work
            </p>
            <p className={styles.text}>
              • “3 wins” evening — write 3 good moments before sleep
            </p>
            <p className={styles.text}>
              ChatMind creates your personal daily schedule + shows exact timing
              techniques and progress tracking
            </p>
          </div>
        </>
      );
    }
    return (
      <>
        <p className={styles.subtitle}>
          🚨 “Chronic fatigue zone — needs systematic recovery”
        </p>
        <div className={styles.textWrap}>
          <p className={styles.text}>Start these 3 habits TODAY:</p>
          <p className={styles.text}>
            • “Energy audit” — track what drains vs gives energy for 3 days
          </p>
          <p className={styles.text}>
            • 15-min “brain dump” — write all worries each evening
          </p>
          <p className={styles.text}>
            • Micro-walks — 5 min every 2 hours (set phone alarms)
          </p>
          <p className={styles.text}>
            ChatMind builds your 7-day recovery protocol step-by-step
          </p>
        </div>
      </>
    );
  };

  return (
    <>
      {resultText(totalPoints)}
      <SubmitBtn onClick={goToNextStep} wide={"wide"}>
        <span className={styles.btnText}>Start today</span>
      </SubmitBtn>
    </>
  );
}
