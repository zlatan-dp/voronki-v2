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
        <h2 className={styles.welcomeTitle}>
          Find Your Level
          <br /> of Chronic Fatigue
        </h2>
        <p className={styles.welcomeText}>
          Take this short 6-question quiz to better understand your energy
          levels — or help a loved one do the same — and explore simple ways to
          feel more refreshed
        </p>
        <SubmitBtn onClick={goToNextStep}>Continue</SubmitBtn>
      </QuestionWrap>
    </Container>
  );
}
