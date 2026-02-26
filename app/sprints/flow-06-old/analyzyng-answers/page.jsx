"use client";

import styles from "./page.module.css";

import { useRouter } from "next/navigation";

import { useCurrentFlow } from "../../actions/getCurrentFlow";
import { nextStep } from "../../../actions/steps-client.action";
import { getCurrentTime } from "../../actions/getCurrentTime";

import QuestionWrap from "../../components/questionWrap/questionWrap";
import Container from "../../components/container/container";
import ProgressCircle from "../../components/progressCircle/ProgressCircle";

import { getFlowBranch } from "../../actions/quizStorage";

export default function analyzyngAnswers() {
  const currentFlow = useCurrentFlow();
  const router = useRouter();

  const branch = getFlowBranch(currentFlow);

  const goToNextStep = async () => {
    await nextStep({
      step: 16,
      type: "info",
      answer: "Analyzyng Answers",
      time: await getCurrentTime(),
    });

    if (!branch) {
      router.push(`/sprints/${currentFlow}`);
      return;
    }
    router.push(`/sprints/${currentFlow}/${branch}/energy-snapshot`);
  };

  return (
    <Container>
      <QuestionWrap alignItems={"center"}>
        <ProgressCircle duration={4000} onComplete={goToNextStep} />
        <p className={styles.textAnalyzing}>Analyzing your answers…</p>
        {/* <p className={styles.text}>Creating your recovery path…</p> */}
      </QuestionWrap>
    </Container>
  );
}
