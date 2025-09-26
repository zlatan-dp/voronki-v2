"use client";

import styles from "./page.module.css";

import { useRouter } from "next/navigation";

import { useCurrentFlow } from "../../actions/getCurrentFlow";
import { nextStep } from "../../../actions/steps-client.action";
import { getCurrentTime } from "../../actions/getCurrentTime";

import SectionTitle from "../../components/sectionTitle/sectionTitle";
import BtnsGroup from "../../components/btnsGroup/btnsGroup";
import ProgressBar from "../../components/progressBar/ProgressBar";

export default function question60() {
  const currentFlow = useCurrentFlow();
  const router = useRouter();

  const goToNextStep = async (answer) => {
    await nextStep({
      step: 60,
      type: "question",
      question:
        "Do you use any planning techniques (like GTD, Pomodoro, or time blocking)?",
      answer: answer || "next",
      time: await getCurrentTime(),
    });

    router.push(`/intensives/${currentFlow}/question-70`);
  };

  return (
    <div className={styles.container}>
      <ProgressBar from={35} to={42} duration={500} />
      <div className={styles.questionWrap}>
        <SectionTitle>
          Do you use any planning techniques (like GTD, Pomodoro, or time
          blocking)?
        </SectionTitle>
        <BtnsGroup onClick={goToNextStep} />
      </div>
    </div>
  );
}
