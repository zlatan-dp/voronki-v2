"use client";

import styles from "./page.module.css";

import { useRouter } from "next/navigation";

import { useCurrentFlow } from "../../actions/getCurrentFlow";
import { nextStep } from "../../../actions/steps-client.action";
import { getCurrentTime } from "../../actions/getCurrentTime";

import SectionTitle from "../../components/sectionTitle/sectionTitle";
import BtnsGroup from "../../components/btnsGroup/btnsGroup";
import ProgressBar from "../../components/progressBar/ProgressBar";

export default function question70() {
  const currentFlow = useCurrentFlow();
  const router = useRouter();

  const goToNextStep = async (answer) => {
    await nextStep({
      step: 70,
      type: "question",
      question: "Do you have long-term goals (a year or more)?",
      answer: answer || "next",
      time: await getCurrentTime(),
    });

    router.push(`/intensives/${currentFlow}/question-71`);
  };

  return (
    <div className={styles.container}>
      <ProgressBar from={42} to={45} duration={500} />
      <div className={styles.questionWrap}>
        <SectionTitle>
          Do you have long-term goals (a year or more)?
        </SectionTitle>
        <BtnsGroup onClick={goToNextStep} />
      </div>
    </div>
  );
}
