"use client";

import styles from "./WelcomePage.module.css";

import { useRouter } from "next/navigation";

import QuestionWrap from "../../../components/questionWrap/questionWrap";
import Container from "../../../components/container/container";

import { useCurrentFlow } from "../../../actions/getCurrentFlow";
import { nextStep } from "../../../../actions/steps-client.action";
import { getCurrentTime } from "../../../actions/getCurrentTime";
import TextAnswerContainer from "../../../components/TextAnswerContainer/TextAnswerContainer";
import { setFlowBranch } from "../../../actions/quizStorage";

export default function WelcomePage({ question = "question-10" }) {
  const currentFlow = useCurrentFlow();
  const router = useRouter();

  const goToNextStep = async (branch) => {
    await nextStep({
      step: 1,
      type: "info",
      question: "WelcomePage",
      answer: branch,
      time: await getCurrentTime(),
    });

    setFlowBranch(currentFlow, branch);

    router.push(`/sprints/${currentFlow}/${branch}/${question}`);
  };

  return (
    <Container>
      <QuestionWrap alignItems={"center"}>
        <div className={styles.welcomeTextWrap}>
          <p className={styles.welcomeTextHeader}>Hi 👋</p>
          <p className={styles.welcomeText}>
            Have you noticed you or your loved one lacking energy lately?
            <br /> Take this quick test — we’ll help you see if it might be
            chronic fatigue.
          </p>
          <p className={styles.welcomeText}>Who are you evaluating?</p>
        </div>
        <ul className={styles.answerList}>
          <li key={1} onClick={() => goToNextStep("myself")}>
            <TextAnswerContainer
              text={
                <>
                  <span style={{ fontWeight: "600" }}>Myself</span> <br />
                  (personal fatigue assessment)
                </>
              }
            />
          </li>
          <li key={2} onClick={() => goToNextStep("loved-one")}>
            <TextAnswerContainer
              text={
                <>
                  <span style={{ fontWeight: "600" }}>Loved one </span> <br />
                  (assessment of another person’s condition)
                </>
              }
            />
          </li>
        </ul>
      </QuestionWrap>
    </Container>
  );
}
