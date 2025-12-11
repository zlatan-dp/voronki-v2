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

  const { minutes, seconds } = useTimer();

  const goToNextStep = async () => {
    await nextStep({
      step: 9,
      type: "info",
      question: "Your personal plan is ready",
      answer: "Start your 3-day $1 TRIAL",
      time: await getCurrentTime(),
    });

    router.push(`/sprints/${currentFlow}/error-page`);
  };

  return (
    <BlockWrap>
      <SectionTitle>Your personal plan is ready</SectionTitle>
      <p className={styles.text}>
        Let us know you how to reclaim the spark in your life. Just 10 minutes
        daily. We’ll teach you easy routines, step by step, for a healthier mind
        and richer emotions.
      </p>
      {/* <div className={styles.graphikWrap}>
        <div className={styles.onYourOwn}>
          <p className={styles.blockTitle}>On your own</p>
          <ul className={styles.graphikList}>
            <li className={styles.listText}>inconsistent</li>
            <li className={styles.listText}>overwhelming</li>
            <li className={styles.listText}>unclear</li>
          </ul>
        </div>
        <div className={styles.withChat}>
          <p className={styles.blockTitle}>With ChatMind</p>
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
      </div> */}

      <div className={styles.offerWrap}>
        <div className={styles.contentWrap}>
          <p className={styles.infoText}>
            You
            <br />
            don’t need <br />
            to push harder —<br />
            just let this support
            <br /> meet you where you are
          </p>
          <SubmitBtn onClick={goToNextStep} color={"white"} wide={"wide"}>
            <span className={styles.btnSmallText}>Start your 3-day</span>
            <br /> <span className={styles.btnBigText}>1$ TRIAL</span>
          </SubmitBtn>
        </div>
        <div className={styles.timerWrap}>
          <svg
            width="20"
            height="22"
            viewBox="0 0 22 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21.2231 5.29594L18.7041 2.77688C18.3379 2.41073 17.7443 2.41073 17.3783 2.77688C17.0122 3.14302 17.0121 3.73659 17.3783 4.10269L17.9749 4.69931L16.7513 5.92284C15.1586 4.59412 13.222 3.792 11.1563 3.6053V1.875H12C12.5178 1.875 12.9375 1.45528 12.9375 0.9375C12.9375 0.419719 12.5178 0 12 0H8.4375C7.91972 0 7.5 0.419719 7.5 0.9375C7.5 1.45528 7.91972 1.875 8.4375 1.875H9.28125V3.6053C4.13794 4.07011 0 8.38912 0 13.7812C0 19.4288 4.57036 24 10.2188 24C15.8663 24 20.4375 19.4296 20.4375 13.7812C20.4375 11.3667 19.6052 9.08034 18.0772 7.24866L19.3007 6.02512L19.8973 6.62175C20.2634 6.98784 20.857 6.98789 21.2231 6.62175C21.5892 6.25566 21.5892 5.66208 21.2231 5.29594ZM10.2188 22.125C5.61802 22.125 1.875 18.382 1.875 13.7812C1.875 9.18052 5.61802 5.4375 10.2188 5.4375C14.8195 5.4375 18.5625 9.18052 18.5625 13.7812C18.5625 18.382 14.8195 22.125 10.2188 22.125ZM15.0901 13.7812C15.0901 14.299 14.6704 14.7188 14.1526 14.7188H10.2188C9.70102 14.7188 9.2813 14.299 9.2813 13.7812V8.26523C9.2813 7.74745 9.70102 7.32773 10.2188 7.32773C10.7366 7.32773 11.1563 7.74745 11.1563 8.26523V12.8438H14.1526C14.6704 12.8438 15.0901 13.2635 15.0901 13.7812Z"
              fill="white"
            />
          </svg>
          <p className={styles.headerText}>
            {String(minutes).padStart(2, "0")}:
            {String(seconds).padStart(2, "0")}
          </p>
        </div>
      </div>

      <p className={styles.infoSmallText}>
        Your subscription will automatically renew at full price of $9,97 at the
        end of the trial period until you cancel in your account.
      </p>
      <p className={styles.infoSmallBoldText}>
        You can cancel your
        <br /> subscription at any time
      </p>
    </BlockWrap>
  );
}
