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
          <p className={styles.text}>
            You’re in a great place – balanced and energized.
            <br />
            Let’s help you keep it that way.
          </p>
          <p className={styles.text}>
            Our 5-week mini-course program takes just 10 minutes a day and helps
            you build simple habits and daily rituals to stay balanced, recharge
            easily, and protect your energy long term.
          </p>

          <SubmitBtn onClick={goToNextStep} wide={"wide"}>
            <span className={styles.btnText}>Start today</span>
          </SubmitBtn>

          <p className={styles.text}>and keep your energy consistently high.</p>
        </>
      );
    }
    if (points < 24) {
      return (
        <>
          <p className={styles.subtitle}>
            ⚠️ “Exhaustion signals appearing — time for recovery”
          </p>
          <p className={styles.text}>
            Your energy may feel inconsistent right now – especially on busy or
            stressful days.
            <br /> That’s often a sign your routine, sleep, or stress patterns
            need a small reset.
          </p>
          <p className={styles.text}>
            Our 5-week program of short, practical mini-courses helps you
            restore steady energy, build supportive daily habits, and reduce the
            risk of long-term fatigue – in just 10 minutes a day.
          </p>
          <SubmitBtn onClick={goToNextStep} wide={"wide"}>
            <span className={styles.btnText}>Start today</span>
          </SubmitBtn>
          <p className={styles.text}>
            Just 10 minutes a day can make a real difference – feel energized
            day after day.
          </p>
        </>
      );
    }
    return (
      <>
        <p className={styles.subtitle}>
          🚨 “Chronic fatigue zone — needs systematic recovery”
        </p>
        <p className={styles.text}>
          It sounds like you’re experiencing significant fatigue.
          <br />
          <span className={styles.boldText}>
            {" "}
            We recommend consulting a healthcare professional to rule out any
            underlying medical conditions.
          </span>
        </p>
        <p className={styles.text}>
          Alongside that, our 5-week program of short, gentle mini-courses can
          support your recovery with simple daily practices designed to help you
          restore energy and feel more stable day by day.
        </p>
        <SubmitBtn onClick={goToNextStep} wide={"wide"}>
          <span className={styles.btnText}>Start today</span>
        </SubmitBtn>
        <p className={styles.text}>
          Just 10 minutes a day can make a real difference – feel energized day
          after day.
        </p>
      </>
    );
  };

  return <>{resultText(totalPoints)}</>;
}
