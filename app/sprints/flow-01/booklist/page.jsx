"use client";

import { useTimer } from "../../actions/useTimerContext";

import BenefitsList from "../components/BenefitsList/BenefitsList";
import FaqList from "../components/FaqList/FaqList";

import FeedbackList from "../components/FeedbackList/Feedback";

import Container from "../../components/container/container";
import SpecialOffer from "../components/specialOffer/specialOffer";
import BookList from "../components/BookList/BookList";
import WyThisBooks from "../components/WyThisBooks/WyThisBooks";
import WhyWeMade from "../components/WhyWeMade/WhyWeMade";
import ChoosePlanComponent from "../components/ChoosePlan/ChoosePlan";

export default function Booklist() {
  const { timerActive } = useTimer();

  return (
    <Container>
      <BookList />
      <WyThisBooks />
      <WhyWeMade />
      <BenefitsList />
      <ChoosePlanComponent page={"choose plan from booklist"} step={90} />
      {timerActive && <SpecialOffer page={"from booklist"} step={90} />}
      <FeedbackList />
      <FaqList />
      <ChoosePlanComponent page={"choose plan from booklist"} step={90} />
      {timerActive && <SpecialOffer page={"from booklist"} step={90} />}
    </Container>
  );
}
