"use client";

import BenefitsList from "../components/BenefitsList/BenefitsList";
import FaqList from "../components/FaqList/FaqList";

import FeedbackList from "../components/FeedbackList/Feedback";

import Container from "../../components/container/container";
import SpecialOffer from "../components/specialOffer/specialOffer";
import PersonalizedGrowth from "../components/PersonalizedGrowth/PersonalizedGrowth";

import { useTimer } from "../../actions/useTimerContext";
import { useEffect } from "react";

export default function Paywall() {
  const { startTimer } = useTimer();

  useEffect(() => {
    startTimer();
  }, []);

  return (
    <Container>
      <PersonalizedGrowth />
      <BenefitsList />
      <SpecialOffer page={"from paywall"} step={9} />
      <FeedbackList />
      <FaqList />
      <SpecialOffer page={"from paywall"} step={9} />
    </Container>
  );
}
