import { useEffect, useState } from "react";
import { getQuizAnswers } from "../../../../actions/quizStorage";
import styles from "./TextResults.module.css";

import { useCurrentFlow } from "../../../../actions/getCurrentFlow";
import SubmitBtn from "../../../../components/submitBtn/SubmitBtn";
import { useRouter } from "next/navigation";

import { nextStep } from "../../../../../actions/steps-client.action";
import { getCurrentTime } from "../../../../actions/getCurrentTime";

export default function TextResults() {
  const [totalPoints, setTotalPoints] = useState(null);

  const currentFlow = useCurrentFlow();
  const router = useRouter();

  const goToNextStep = async () => {
    await nextStep({
      step: 9,
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
    if (points < 5) {
      return (
        <>
          <p className={styles.subtitle}>Low fatigue</p>
          <p className={styles.text}>
            You’re in a great place — balanced and energized! Keep that momentum
            going with our 5-week mini-course program.
          </p>
          <p className={styles.text}>
            In just 10 minutes a day, you’ll build simple habits and daily
            rituals that help you stay balanced, recharge easily, and avoid
            burnout.
          </p>

          <SubmitBtn onClick={goToNextStep} wide={"wide"}>
            <span className={styles.btnText}>Start today</span>
          </SubmitBtn>

          <p className={styles.text}>
            and make lasting energy your everyday state!
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
            <br />
            Our 5-week program of short, practical mini-courses will help you
            quickly regain steady energy, build daily habits for balance, and
            protect yourself from chronic fatigue.
          </p>
          <SubmitBtn onClick={goToNextStep} wide={"wide"}>
            <span className={styles.btnText}>Start today</span>
          </SubmitBtn>
          <p className={styles.text}>
            Just 10 minutes a day can make a big difference - feel consistently
            energized again and make lasting energy your everyday state!
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
          In addition, our 5-week program of short, practical mini-courses
          offers gentle, practical practices to support your recovery and daily
          energy.
        </p>
        <SubmitBtn onClick={goToNextStep} wide={"wide"}>
          <span className={styles.btnText}>Start today</span>
        </SubmitBtn>
        <p className={styles.text}>
          Just 10 minutes a day can make a big difference - feel consistently
          energized again and make lasting energy your everyday state!
        </p>
      </>
    );
  };

  return <>{resultText(totalPoints)}</>;
}
