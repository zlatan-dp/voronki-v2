"use client";

import styles from "./WelcomePage.module.css";

import { useRouter } from "next/navigation";

import QuestionWrap from "../../../components/questionWrap/questionWrap";
import Container from "../../../components/container/container";
import SubmitBtn from "../../../components/submitBtn/SubmitBtn";

import { useCurrentFlow } from "../../../actions/getCurrentFlow";
import { nextStep } from "../../../../actions/steps-client.action";
import { getCurrentTime } from "../../../actions/getCurrentTime";

export default function WelcomePage({ question = "question-10" }) {
  const currentFlow = useCurrentFlow();
  const router = useRouter();

  const goToNextStep = async () => {
    await nextStep({
      step: 1,
      type: "info",
      question: "WelcomePage",
      answer: "start quiz",
      time: await getCurrentTime(),
    });

    router.push(`/sprints/${currentFlow}/${question}`);
  };

  return (
    <Container>
      <QuestionWrap alignItems={"center"}>
        <p className={styles.welcomeTextHeader}>
          What’s
          <br />
          the №1 upgrade you want in the next 30 days?
        </p>
        <p className={styles.welcomeText}>
          Take a quick quiz to build your personalized 30-day mind & body plan —
          with a premium subscription bundle to 3–4 apps tailored to your goal.
        </p>
        <SubmitBtn onClick={goToNextStep}>Start Quiz</SubmitBtn>
      </QuestionWrap>
    </Container>
  );
}
