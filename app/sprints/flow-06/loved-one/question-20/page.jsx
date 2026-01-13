"use client";

import styles from "./page.module.css";

import { useRouter } from "next/navigation";

import { useCurrentFlow } from "../../../actions/getCurrentFlow";
import { nextStep } from "../../../../actions/steps-client.action";
import { getCurrentTime } from "../../../actions/getCurrentTime";
import { saveQuizAnswer } from "../../../actions/quizStorage";

import { AnswersData } from "./AnswersData";
import QuestionWrap from "../../../components/questionWrap/questionWrap";
import Container from "../../../components/container/container";
import TextAnswerContainer from "../../../components/TextAnswerContainer/TextAnswerContainer";
import ProgressBar from "../../../components/progressBar/ProgressBar";

export default function question20() {
  const currentFlow = useCurrentFlow();
  const router = useRouter();

  const goToNextStep = async (answer, points) => {
    saveQuizAnswer(currentFlow, "question2", points);

    await nextStep({
      step: 3,
      type: "question",
      question: "How easily do they gather their thoughts in the morning?",
      answer: answer || "next",
      time: await getCurrentTime(),
    });

    router.push(`/sprints/${currentFlow}/question-25`);
  };

  return (
    <Container>
      <ProgressBar
        from={10}
        to={20}
        duration={500}
        currentStep={2}
        totalSteps={10}
      />
      <QuestionWrap>
        <p className={styles.questionText}>
          How easily do they gather their thoughts in the morning?
        </p>
        <ul className={styles.answerList}>
          {AnswersData.map(({ id, text, points }) => (
            <li key={id} onClick={() => goToNextStep(text, points)}>
              <TextAnswerContainer text={text} />
            </li>
          ))}
        </ul>
      </QuestionWrap>
    </Container>
  );
}
