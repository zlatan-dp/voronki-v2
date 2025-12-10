"use client";

import styles from "./WelcomePage.module.css";

import { useRouter } from "next/navigation";

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
        <h2 className={styles.welcomeTitle}>
          If you’re reading this, you likely know what it’s like when{" "}
          <span className={styles.accented}>life loses its spark</span>. And
          you’re ready to get it back
        </h2>
        <p className={styles.welcomeText}>
          Find out how to get back to a vibrant, meaningful life and try daily
          exercises tailored for those who want to find joy in every day.
        </p>
        <p className={styles.welcomeText}>
          Explore how to reconnect with a more vibrant, meaningful life – and
          try simple daily practices designed for people who want to bring back
          a sense of joy to their everyday moments.
        </p>
        <SubmitBtn onClick={goToNextStep}>Continue</SubmitBtn>
      </QuestionWrap>
    </Container>
  );
}
