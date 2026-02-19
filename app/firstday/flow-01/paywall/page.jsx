"use client";

import Container from "../../components/container/container";

import ChoosePlanComponent from "../components/ChoosePlan/ChoosePlan";
import PlanInfo from "../components/PlanInfo/PlanInfo";
import BenefitsList from "../components/BenefitsList/BenefitsList";
import FeedbackList from "../components/FeedbackList/Feedback";
import FaqList from "../components/FaqList/FaqList";

export default function Paywall() {
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
