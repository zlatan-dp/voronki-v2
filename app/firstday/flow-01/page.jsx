"use client";
import styles from "./page.module.css";

import { useState } from "react";
import { useRouter } from "next/navigation.js";

import { quizSteps } from "./FirstDayData.jsx";
import { nextStep } from "../../actions/steps-client.action";
import { getCurrentTime } from "../actions/getCurrentTime";
import { useCurrentFlow } from "../actions/getCurrentFlow";

import InfoPage from "../components/InfoPage/InfoPage";
import QuestionPage from "../components/QuestionPage/QuestionPage";
import TextAreaPage from "../components/TextAreaPage/TextAreaPage.jsx";
import Container from "../components/container/container.jsx";
import ProgressBar from "../components/progressBar/ProgressBar.jsx";

export default function firstDayLanding() {
  const currentFlow = useCurrentFlow();
  const router = useRouter();
  const [stepIndex, setStepIndex] = useState(0);
  const [lastAnswerId, setLastAnswerId] = useState(null);

  const quizStep = quizSteps[stepIndex];
  const totalSteps = quizSteps.length;
  const currentStepNumber = stepIndex + 1;
  const previousPercent = (stepIndex / totalSteps) * 100;
  const currentPercent = (currentStepNumber / totalSteps) * 100;

  // console.log("quizStep:", quizStep);
  // console.log("lastAnswerId:", lastAnswerId);

  const goToNextStep = async (answer = "next", id) => {
    const isLastStep = stepIndex === totalSteps - 1;

    if (quizStep.type === "question") {
      setLastAnswerId(id);
    }

    await nextStep({
      step: currentStepNumber,
      type: quizStep.type,
      question: quizStep.title || "",
      answer: answer,
      time: await getCurrentTime(),
    });

    if (isLastStep) {
      router.push(`/firstday/${currentFlow}/enter-email`);
      return;
    }

    setStepIndex((prev) => prev + 1);
  };

  const backStep = async () => {
    await nextStep({
      step: currentStepNumber,
      type: quizStep.type,
      answer: "back step",
      time: await getCurrentTime(),
    });
    setStepIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <Container>
      {stepIndex > 0 && (
        <div className={styles.backBtn} onClick={backStep}>
          ← back
        </div>
      )}
      <ProgressBar
        from={previousPercent}
        to={currentPercent}
        duration={500}
        // currentStep={currentStepNumber}
        // totalSteps={totalSteps}
      />
      {quizStep.type === "info" && (
        <InfoPage
          data={quizStep}
          next={goToNextStep}
          lastAnswerId={lastAnswerId}
        />
      )}
      {quizStep.type === "question" && (
        <QuestionPage data={quizStep} next={goToNextStep} />
      )}
      {quizStep.type === "textarea" && (
        <TextAreaPage data={quizStep} next={goToNextStep} />
      )}
    </Container>
  );
}
