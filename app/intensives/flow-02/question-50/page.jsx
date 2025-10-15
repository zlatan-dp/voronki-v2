"use client";

import styles from "./page.module.css";

import { useRouter } from "next/navigation";

import { useCurrentFlow } from "../../actions/getCurrentFlow";
import { nextStep } from "../../../actions/steps-client.action";
import { getCurrentTime } from "../../actions/getCurrentTime";

import SectionTitle from "../../components/sectionTitle/sectionTitle";
import BtnsGroup from "../../components/btnsGroup/btnsGroup";
import ProgressBar from "../../components/progressBar/ProgressBar";

export default function question50() {
  const currentFlow = useCurrentFlow();
  const router = useRouter();

  const goToNextStep = async (answer) => {
    await nextStep({
      step: 50,
      type: "question",
      question: "Do you stay productive when you’re under stress?",
      answer: answer || "next",
      time: await getCurrentTime(),
    });

    router.push(`/intensives/${currentFlow}/question-60`);
  };

  return (
    <div className={styles.container}>
      <ProgressBar from={28} to={35} duration={500} />
      <div className={styles.questionWrap}>
        <SectionTitle>
          Do you stay productive when you’re under stress?
        </SectionTitle>
        <BtnsGroup onClick={goToNextStep} />
      </div>
    </div>
  );
}
