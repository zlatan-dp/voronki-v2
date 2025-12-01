"use client";

import styles from "./page.module.css";

import { useRouter } from "next/navigation";
import { useState } from "react";

import { useCurrentFlow } from "../../actions/getCurrentFlow";
import { nextStep } from "../../../actions/steps-client.action";
import { getCurrentTime } from "../../actions/getCurrentTime";

import BenefitsList from "./BenefitsList/BenefitsList";
import FaqList from "./FaqList/FaqList";

import AppList from "./AppList/AppList";
import FeedbackList from "./FeedbackList/Feedback";

import CountdownTimer from "../../components/countdownTimer/CountdownTimer";
import Container from "../../components/container/container";

export default function personalizedGrowth() {
  const currentFlow = useCurrentFlow();
  const router = useRouter();

  const [timerActive, setTimerActive] = useState(true);

  const goToNextStep = async () => {
    await nextStep({
      step: 80,
      type: "info",
      question: "Personalized Growth",
      answer: "next",
      time: await getCurrentTime(),
    });

    router.push(`/intensives/${currentFlow}/choose-plan`);
  };

  const handleSubmit = async () => {
    if (!selectedPlans) return;
    await goToNextStep();
  };

  return (
    <Container>
      {timerActive && (
        <CountdownTimer
          initialSeconds={600}
          onExpire={() => setTimerActive(false)}
        />
      )}

      <BenefitsList />

      <FeedbackList />

      <FaqList />

      <AppList />
    </Container>
  );
}
