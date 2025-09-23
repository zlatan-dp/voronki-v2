"use client";

import styles from "./page.module.css";

import { useRouter } from "next/navigation";

import { useCurrentFlow } from "../../actions/getCurrentFlow";
import { nextStep } from "../../../actions/steps-client.action";
import { getCurrentTime } from "../../actions/getCurrentTime";

import SectionTitle from "../../components/sectionTitle/sectionTitle";

export default function question20() {
  const currentFlow = useCurrentFlow();
  const router = useRouter();

  const goToNextStep = async (answer) => {
    await nextStep({
      step: 20,
      type: "info",
      question: "Do you tend to start things and not finish them?",
      answer: answer || "next",
      time: await getCurrentTime(),
    });

    router.push(`/intensives/${currentFlow}/question-30`);
  };

  return (
    <div className={styles.container}>
      <div className={styles.questionWrap}>
        <SectionTitle>
          Do you tend to start things and not finish them?
        </SectionTitle>
      </div>
    </div>
  );
}
