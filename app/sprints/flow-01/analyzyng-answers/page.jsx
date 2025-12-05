"use client";

import styles from "./page.module.css";

import { useRouter } from "next/navigation";

import { useCurrentFlow } from "../../actions/getCurrentFlow";
import { nextStep } from "../../../actions/steps-client.action";
import { getCurrentTime } from "../../actions/getCurrentTime";

import QuestionWrap from "../../components/questionWrap/questionWrap";
import Container from "../../components/container/container";
import ProgressCircle from "../../components/progressCircle/ProgressCircle";

export default function analyzyngAnswers() {
  const currentFlow = useCurrentFlow();
  const router = useRouter();

  const goToNextStep = async () => {
    await nextStep({
      step: 70,
      type: "info",
      answer: "Analyzyng Answers",
      time: await getCurrentTime(),
    });

    router.push(`/sprints/${currentFlow}/paywall`);
  };

  return (
    <Container>
      <QuestionWrap alignItems={"center"}>
        <ProgressCircle duration={4000} onComplete={goToNextStep} />
        <p className={styles.textAnalyzing}>Analyzing your answers…</p>
        <p className={styles.text}>Shaping your growth path…</p>
      </QuestionWrap>
    </Container>
  );
}
