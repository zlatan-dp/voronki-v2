"use client";

import { useEffect } from "react";

import BenefitsList from "../components/BenefitsList/BenefitsList";
import FaqList from "../components/FaqList/FaqList";

import FeedbackList from "../components/FeedbackList/Feedback";

import Container from "../../components/container/container";

import ChoosePlanComponent from "../components/ChoosePlan/ChoosePlan";

import { useTimer } from "../../actions/useTimerContext";
import PlanInfo from "../components/PlanInfo/PlanInfo";

export default function Paywall() {
  const { startTimer } = useTimer();

  useEffect(() => {
    startTimer();
  }, []);

  return (
    <Container>
      <ChoosePlanComponent />
      <PlanInfo />
      <BenefitsList />
      <FeedbackList />
      <FaqList />
      <ChoosePlanComponent />
    </Container>
  );
}
