"use client";

import styles from "./page.module.css";

import { nextStep } from "../../../actions/steps-client.action";
import { getCurrentTime } from "../../actions/getCurrentTime";
import { useRouter } from "next/navigation";

import SectionTitle from "../../components/sectionTitle/sectionTitle";
import Container from "../../components/container/container";
import SubmitBtn from "../../components/submitBtn/SubmitBtn";

export default function payOk() {
  const router = useRouter();

  const goToNextStep = async () => {
    await nextStep({
      step: 21,
      type: "info",
      question: "Go to appstore",
      answer: "next",
      time: await getCurrentTime(),
    });

    router.push(
      "itms-apps://apps.apple.com/us/app/chatmind-brain-boost/id6756600826",
    );
  };

  return (
    <Container>
      <div className={styles.infoPageWrap}>
        <SectionTitle ta="center">You almost there!</SectionTitle>

        <div className={styles.infoTextWrap}>
          <p className={styles.infoTitle}>Step 1: Download the App</p>
          <p className={styles.infoText}>
            Head to the App Store and search for{" "}
            <span className={styles.accented}>“ChatMind - Brain Boost”</span>.
            <br />
            Tap Get or Install – it takes just a minute.
          </p>
        </div>

        <div className={styles.decorWrap}>
          <p className={styles.decorTitle}>Pro tip: </p>
          <p className={styles.decorText}>
            Enable notifications so you never miss your daily skill boost.
          </p>
        </div>

        <div className={styles.infoTextWrap}>
          <p className={styles.infoTitle}>Step 2: Sign In</p>
          <p className={styles.infoText}>
            Open the app and Sign In.
            <br />
            Use the exact same email you entered for payment – no new account
            needed.
            <br />
            Enter the code we sent to your email.
          </p>
        </div>

        <div className={styles.infoTextWrap}>
          <p className={styles.infoTitle}>Step 3: Get Started</p>
        </div>

        <p className={styles.infoText}>Ready? Tap Open ChatMind</p>
        <SubmitBtn wide={"wide"} onClick={goToNextStep}>
          Install ChatMind
        </SubmitBtn>

        <div className={styles.infoContactsWrap}>
          <p className={styles.infoContactsText}>Need help?</p>
          <p className={styles.infoContactsText}>
            Having trouble downloading, installing, or signing in?
          </p>
          <p className={styles.infoContactsText}>
            Just email our support team anytime at
          </p>
          <p className={styles.infoContactsText}>
            <span className={styles.accented}>support@mndchat.com</span>
          </p>
          <p className={styles.infoContactsText}>we’re here for you!</p>
        </div>
      </div>
    </Container>
  );
}
