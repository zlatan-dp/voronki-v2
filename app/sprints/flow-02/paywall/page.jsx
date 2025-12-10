"use client";

import BenefitsList from "../components/BenefitsList/BenefitsList";
import FaqList from "../components/FaqList/FaqList";

import FeedbackList from "../components/FeedbackList/Feedback";

import Container from "../../components/container/container";
import SpecialOffer from "../components/specialOffer/specialOffer";
import PersonalizedGrowth from "../components/PersonalizedGrowth/PersonalizedGrowth";

export default function Paywall() {
  return (
    <Container>
      <PersonalizedGrowth />
      <BenefitsList />
      <SpecialOffer page={"from paywall"} step={80} />
      <FeedbackList />
      <FaqList />
      <SpecialOffer page={"from paywall"} step={80} />
    </Container>
  );
}
