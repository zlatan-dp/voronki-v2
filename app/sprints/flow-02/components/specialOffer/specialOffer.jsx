import styles from "./specialOffer.module.css";

import { useRouter } from "next/navigation";

import { useCurrentFlow } from "../../../actions/getCurrentFlow";
import { nextStep } from "../../../../actions/steps-client.action";
import { getCurrentTime } from "../../../actions/getCurrentTime";

import { useTimer } from "../../../actions/useTimerContext";
import SubmitBtn from "../../../components/submitBtn/SubmitBtn";

export default function SpecialOffer({ page = "page", step = 99 }) {
  const { minutes, seconds } = useTimer();

  const currentFlow = useCurrentFlow();
  const router = useRouter();

  const goToNextStep = async () => {
    await nextStep({
      step: step,
      type: "info",
      question: page,
      answer: "Special Offer click",
      time: await getCurrentTime(),
    });

    router.push(`/sprints/${currentFlow}/error-page`);
  };

  return (
    <div className={styles.offerWrap}>
      <div className={styles.timerWrap}>
        <p className={styles.headerText}>🔥 SPECIAL OFFER</p>
        <p className={styles.headerText}>
          {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
        </p>
      </div>
      <div className={styles.contentWrap}>
        <h3 className={styles.title}>Try your personalized 7-day Sprint</h3>

        <p className={styles.dollarText}>$1</p>
        <p className={styles.infoText}>
          Get simple daily guidance, a clear plan, and small actions that help
          you feel more focused and grounded.
        </p>
        <p className={styles.infoText}>
          After 7 days, your subscription renews at $9.98/month.
        </p>
        <p className={styles.infoText}>
          You can cancel anytime — no questions asked.
        </p>
        <SubmitBtn onClick={goToNextStep} color={"white"} wide={"wide"}>
          Start your TRIAL now
        </SubmitBtn>
      </div>
    </div>
  );
}
