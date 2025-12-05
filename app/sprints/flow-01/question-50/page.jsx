"use client";

import styles from "./page.module.css";

import { useRouter } from "next/navigation";

import { useCurrentFlow } from "../../actions/getCurrentFlow";
import { nextStep } from "../../../actions/steps-client.action";
import { getCurrentTime } from "../../actions/getCurrentTime";

import { AnswersData } from "./AnswersData";
import QuestionWrap from "../../components/questionWrap/questionWrap";
import Container from "../../components/container/container";
import TextAnswerContainer from "../../components/TextAnswerContainer/TextAnswerContainer";
import ProgressBar from "../../components/progressBar/ProgressBar";

export default function question50() {
  const currentFlow = useCurrentFlow();
  const router = useRouter();

  const goToNextStep = async (answer) => {
    await nextStep({
      step: 50,
      type: "question",
      question: "Personal growth feels more achievable to me when…",
      answer: answer || "next",
      time: await getCurrentTime(),
    });

    router.push(`/sprints/${currentFlow}/question-60`);
  };

  return (
    <Container>
      <ProgressBar
        from={67}
        to={83}
        duration={500}
        currentStep={5}
        totalSteps={6}
      />
      <QuestionWrap>
        <p className={styles.questionText}>
          Personal growth feels more achievable to me when…
        </p>
        <ul className={styles.answerList}>
          {AnswersData.map(({ id, text }) => (
            <li key={id} onClick={() => goToNextStep(text)}>
              <TextAnswerContainer text={text} />
            </li>
          ))}
        </ul>
      </QuestionWrap>
    </Container>
  );
}
