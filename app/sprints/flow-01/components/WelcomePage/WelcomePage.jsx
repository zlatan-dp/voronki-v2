"use client";

import styles from "./WelcomePage.module.css";

import { useRouter } from "next/navigation";

import SectionTitle from "../../../components/sectionTitle/sectionTitle";
import SubmitBtn from "../../../components/submitBtn/SubmitBtn";
import QuestionWrap from "../../../components/questionWrap/questionWrap";
import Container from "../../../components/container/container";

import { useCurrentFlow } from "../../../actions/getCurrentFlow";
import { nextStep } from "../../../../actions/steps-client.action";
import { getCurrentTime } from "../../../actions/getCurrentTime";

export default function WelcomePage({ question = "question-10" }) {
  const currentFlow = useCurrentFlow();
  const router = useRouter();

  const goToNextStep = async () => {
    await nextStep({
      step: 0,
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
        <SectionTitle>Welcome to ChatMind</SectionTitle>
        <p className={styles.welcomeText}>
          Our 5–7 day courses take just 7 minutes a day and are designed to help
          you reduce stress at your pace
        </p>
        <p className={styles.welcomeText}>
          Answer a few brief questions to receive a personalized set of courses
        </p>
        <SubmitBtn onClick={goToNextStep}>Start Quiz</SubmitBtn>
      </QuestionWrap>
    </Container>
  );
}
