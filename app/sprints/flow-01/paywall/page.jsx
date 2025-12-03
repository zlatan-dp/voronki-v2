"use client";

import { useTimer } from "../../actions/useTimerContext";

import BenefitsList from "../components/BenefitsList/BenefitsList";
import FaqList from "../components/FaqList/FaqList";

import FeedbackList from "../components/FeedbackList/Feedback";

import Container from "../../components/container/container";
import SpecialOffer from "../components/specialOffer/specialOffer";
import PersonalizedGrowth from "../components/PersonalizedGrowth/PersonalizedGrowth";

export default function Paywall() {
  const { timerActive } = useTimer();

  return (
    <Container>
      <PersonalizedGrowth />
      <BenefitsList />
      {timerActive && <SpecialOffer page={"from paywall"} step={80} />}
      <FeedbackList />
      <FaqList />
      {timerActive && <SpecialOffer page={"from paywall"} step={80} />}
    </Container>
  );
}
