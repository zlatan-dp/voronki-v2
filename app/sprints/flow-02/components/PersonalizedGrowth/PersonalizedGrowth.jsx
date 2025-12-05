import BlockWrap from "../../../components/blockWrap/blockWrap";
import SectionTitle from "../../../components/sectionTitle/sectionTitle";
import styles from "./PersonalizedGrowth.module.css";

import { useRouter } from "next/navigation";
import { useTimer } from "../../../actions/useTimerContext";

import SubmitBtn from "../../../components/submitBtn/SubmitBtn";

import { useCurrentFlow } from "../../../actions/getCurrentFlow";
import { nextStep } from "../../../../actions/steps-client.action";
import { getCurrentTime } from "../../../actions/getCurrentTime";

export default function PersonalizedGrowth() {
  const currentFlow = useCurrentFlow();
  const router = useRouter();

  const { minutes, seconds, timerActive } = useTimer();

  const goToNextStep = async () => {
    await nextStep({
      step: 80,
      type: "info",
      question: "Your Personalized Daily Support Starts Here",
      answer: "Start your $1 TRIAL",
      time: await getCurrentTime(),
    });

    router.push(`/sprints/${currentFlow}/error-page`);
  };

  return (
    <BlockWrap>
      <SectionTitle>Your Personalized Daily Support Starts Here</SectionTitle>
      <p className={styles.text}>
        Your answers showed where things feel a bit heavy or hard to manage —and
        that a little guidance could make your days easier.
      </p>
      <div className={styles.graphikWrap}>
        <div className={styles.onYourOwn}>
          <p className={styles.blockTitle}>On your own</p>
          <ul className={styles.graphikList}>
            <li className={styles.listText}>inconsistent</li>
            <li className={styles.listText}>overwhelming</li>
            <li className={styles.listText}>unclear</li>
          </ul>
        </div>
        <div className={styles.withChat}>
          <p className={styles.blockTitle}>With ChatMND</p>
          <ul className={styles.graphikList}>
            <li className={styles.listText}>clear</li>
            <li className={styles.listText}>simple</li>
            <li className={styles.listText}>guided</li>
            <li className={styles.listText}>supportive</li>
            <li className={styles.listText}>steady</li>
            <li className={styles.listText}>manageable</li>
            <li className={styles.listText}>structured</li>
          </ul>
        </div>
      </div>
      <p className={styles.boldText}>
        You don’t need to push harder — just let this support meet you where you
        are.
      </p>
      {timerActive && (
        <div className={styles.offerWrap}>
          <div className={styles.contentWrap}>
            <p className={styles.infoText}>7 min/day</p>
            <p className={styles.infoText}>1 month</p>
            <p className={styles.infoText}>$10</p>
            <SubmitBtn onClick={goToNextStep} color={"white"} wide={"wide"}>
              <span className={styles.btnSmallText}>Start your </span>
              <br /> <span className={styles.btnBigText}>1$ TRIAL</span>
            </SubmitBtn>
          </div>
          <div className={styles.timerWrap}>
            <p className={styles.headerText}>
              {String(minutes).padStart(2, "0")}:
              {String(seconds).padStart(2, "0")}
            </p>
          </div>
        </div>
      )}
    </BlockWrap>
  );
}
