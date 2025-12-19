"use client";

import styles from "./page.module.css";

import { useRouter } from "next/navigation";

import { useCurrentFlow } from "../../actions/getCurrentFlow";
import { nextStep } from "../../../actions/steps-client.action";
import { getCurrentTime } from "../../actions/getCurrentTime";
import { saveQuizAnswer } from "../../actions/quizStorage";

import { AnswersData } from "./AnswersData";
import QuestionWrap from "../../components/questionWrap/questionWrap";
import Container from "../../components/container/container";
import TextAnswerContainer from "../../components/TextAnswerContainer/TextAnswerContainer";
import ProgressBar from "../../components/progressBar/ProgressBar";

export default function question40() {
  const currentFlow = useCurrentFlow();
  const router = useRouter();

  const goToNextStep = async (answer, points) => {
    saveQuizAnswer("question4", points);

    await nextStep({
      step: 5,
      type: "question",
      question: "Do you have trouble falling asleep or staying asleep? ",
      answer: answer || "next",
      time: await getCurrentTime(),
    });

    router.push(`/sprints/${currentFlow}/question-50`);
  };

  return (
    <Container>
      <ProgressBar
        from={50}
        to={66}
        duration={500}
        currentStep={4}
        totalSteps={6}
      />
      <QuestionWrap>
        <p className={styles.questionText}>
          Do you have trouble falling asleep or staying asleep? 
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
