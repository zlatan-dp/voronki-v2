"use client";

import styles from "./page.module.css";

import { useRouter } from "next/navigation";
import { useState } from "react";

import { useCurrentFlow } from "../../actions/getCurrentFlow";
import { nextStep } from "../../../actions/steps-client.action";
import { getCurrentTime } from "../../actions/getCurrentTime";

import BenefitsList from "../components/BenefitsList/BenefitsList";
import FaqList from "../components/FaqList/FaqList";

import FeedbackList from "../components/FeedbackList/Feedback";

import Container from "../../components/container/container";
import SpecialOffer from "../components/specialOffer/specialOffer";
import BookList from "../components/BookList/BookList";

export default function personalizedGrowth() {
  const currentFlow = useCurrentFlow();
  const router = useRouter();

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
      <BookList />
      <BenefitsList />
      <SpecialOffer />
      <FeedbackList />

      <FaqList />
    </Container>
  );
}
