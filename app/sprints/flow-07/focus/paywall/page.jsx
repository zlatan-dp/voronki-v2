"use client";

import { useEffect } from "react";

import BenefitsList from "../../components/BenefitsList/BenefitsList";
import FaqList from "../../components/FaqList/FaqList";

import FeedbackList from "../../components/FeedbackList/Feedback";

import Container from "../../../components/container/container";

import ChoosePlanComponent from "../../components/ChoosePlan/ChoosePlan";

import { useTimer } from "../../../actions/useTimerContext";
import PlanInfo from "../../components/PlanInfo/PlanInfo";
import { getFlowBranch } from "../../../actions/quizStorage";
import { useCurrentFlow } from "../../../actions/getCurrentFlow";

export default function Paywall() {
  const { startTimer } = useTimer();
  const currentFlow = useCurrentFlow();
  const branch = getFlowBranch(currentFlow);

  useEffect(() => {
    startTimer();
  }, []);

  return (
    <Container>
      <ChoosePlanComponent branch={branch} />
      <PlanInfo />
      <BenefitsList branch={branch} />
      <FeedbackList />
      <FaqList />
      <ChoosePlanComponent showTitle={false} branch={branch} />
    </Container>
  );
}
