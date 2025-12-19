"use client";

import BenefitsList from "../components/BenefitsList/BenefitsList";
import FaqList from "../components/FaqList/FaqList";

import FeedbackList from "../components/FeedbackList/Feedback";

import Container from "../../components/container/container";

import EnergySnapshot from "../components/EnergySnapshot/EnergySnapshot";

export default function Paywall() {
  return (
    <Container>
      <EnergySnapshot />
      <BenefitsList />
      <FeedbackList />
      <FaqList />
    </Container>
  );
}
