"use client";

import styles from "./page.module.css";

import { useRouter } from "next/navigation";

import { useCurrentFlow } from "../../actions/getCurrentFlow";
import { nextStep } from "../../../actions/steps-client.action";
import { getCurrentTime } from "../../actions/getCurrentTime";

import SectionTitle from "../../components/sectionTitle/sectionTitle";
import BtnsGroup from "../../components/btnsGroup/btnsGroup";
import ProgressBar from "../../components/progressBar/ProgressBar";

export default function question80() {
  const currentFlow = useCurrentFlow();
  const router = useRouter();

  const goToNextStep = async (answer) => {
    await nextStep({
      step: 80,
      type: "question",
      question:
        "Do you review your week or month to see what worked and what didn’t?",
      answer: answer || "next",
      time: await getCurrentTime(),
    });

    router.push(`/intensives/${currentFlow}/question-90`);
  };

  return (
    <div className={styles.container}>
      <ProgressBar from={49} to={56} duration={500} />
      <div className={styles.questionWrap}>
        <SectionTitle>
          Do you review your week or month to see what worked and what didn’t?
        </SectionTitle>
        <BtnsGroup onClick={goToNextStep} />
      </div>
    </div>
  );
}
