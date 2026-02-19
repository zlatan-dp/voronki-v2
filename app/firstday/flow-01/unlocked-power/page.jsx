"use client";

import styles from "./page.module.css";

import { nextStep } from "../../../actions/steps-client.action";
import { getCurrentTime } from "../../actions/getCurrentTime";
import { useRouter } from "next/navigation";
import { useCurrentFlow } from "../../actions/getCurrentFlow";

import SectionTitle from "../../components/sectionTitle/sectionTitle";
import Container from "../../components/container/container";
import SubmitBtn from "../../components/submitBtn/SubmitBtn";

export default function unlockedPower() {
  const currentFlow = useCurrentFlow();
  const router = useRouter();

  const goToNextStep = async () => {
    await nextStep({
      step: 101,
      type: "info",
      question: "unlocked power",
      answer: "next",
      time: await getCurrentTime(),
    });

    router.push(`/firstday/${currentFlow}/paywall`);
  };

  return (
    <Container>
      <div className={styles.infoPageWrap}>
        <SectionTitle ta="center">
          You’ve Unlocked Your Power – Now Keep It
        </SectionTitle>

        <div className={styles.infoTextWrap}>
          <p className={styles.infoText}>Day 1 was beautiful!</p>
          <p className={styles.infoText}>
            Remote control + compass + brave steps + unshakable worth = your
            city-woman superpower.
          </p>
          <p className={styles.infoText}>
            Ready for Days 2-7? Daily 10-min lessons build unstoppable habits.
          </p>
          <p className={styles.infoText}>
            Thousands of women transformed overwhelm into control.
          </p>
        </div>

        <SubmitBtn wide={"wide"} mTop="auto" onClick={goToNextStep}>
          Unlock full journey
        </SubmitBtn>
      </div>
    </Container>
  );
}
