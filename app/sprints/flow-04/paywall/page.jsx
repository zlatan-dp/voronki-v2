"use client";

import { useEffect } from "react";

import BenefitsList from "../components/BenefitsList/BenefitsList";
import FaqList from "../components/FaqList/FaqList";

import FeedbackList from "../components/FeedbackList/Feedback";

import Container from "../../components/container/container";

import EnergySnapshot from "../components/EnergySnapshot/EnergySnapshot";
import ChoosePlanComponent from "../components/ChoosePlan/ChoosePlan";

import { useTimer } from "../../actions/useTimerContext";

export default function Paywall() {
  const { startTimer } = useTimer();

  useEffect(() => {
    startTimer();
  }, []);

  return (
    <Container>
      <EnergySnapshot />
      <ChoosePlanComponent />
      <BenefitsList />
      <FeedbackList />
      <FaqList />
      <ChoosePlanComponent />
    </Container>
  );
}
