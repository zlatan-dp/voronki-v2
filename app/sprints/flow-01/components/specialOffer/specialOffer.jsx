import styles from "./specialOffer.module.css";

import { useTimer } from "../../../actions/useTimerContext";
import SubmitBtn from "../../../components/submitBtn/SubmitBtn";

export default function SpecialOffer() {
  const { minutes, seconds } = useTimer();

  return (
    <div className={styles.offerWrap}>
      <div className={styles.timerWrap}>
        <p className={styles.headerText}>🔥 SPECIAL OFFER</p>
        <p className={styles.headerText}>
          {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
        </p>
      </div>
      <div className={styles.contentWrap}>
        <p className={styles.dollarText}>$1</p>
        <p className={styles.infoText}>
          Get immediate access to any sprint: 7-day program, daily actions, real
          results.
        </p>
        <p className={styles.infoText}>
          After 7 days, your subscription renews at $9.98/month.
        </p>
        <p className={styles.infoText}>
          You can cancel anytime — no questions asked.
        </p>
        <SubmitBtn color={"white"} wide={"wide"}>
          Start your TRIAL now
        </SubmitBtn>
      </div>
    </div>
  );
}
