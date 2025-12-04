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

export default function question20() {
  const currentFlow = useCurrentFlow();
  const router = useRouter();

  const goToNextStep = async (answer) => {
    await nextStep({
      step: 20,
      type: "question",
      question: "Do you find it hard to relax even when you have time?",
      answer: answer || "next",
      time: await getCurrentTime(),
    });

    router.push(`/sprints/${currentFlow}/question-30`);
  };

  return (
    <Container>
      <ProgressBar
        from={16}
        to={32}
        duration={500}
        currentStep={2}
        totalSteps={6}
      />
      <QuestionWrap>
        <p className={styles.questionText}>
          Do you find it hard to relax even when you have time?
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
