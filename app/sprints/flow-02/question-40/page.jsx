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

export default function question40() {
  const currentFlow = useCurrentFlow();
  const router = useRouter();

  const goToNextStep = async (id, answer) => {
    localStorage.setItem("ChatMNDBookSet", id);

    await nextStep({
      step: 40,
      type: "question",
      question: "What energizes you most?",
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
        <p className={styles.questionText}>What energizes you most?</p>
        <ul className={styles.answerList}>
          {AnswersData.map(({ id, text }) => (
            <li key={id} onClick={() => goToNextStep(id, text)}>
              <TextAnswerContainer text={text} />
            </li>
          ))}
        </ul>
      </QuestionWrap>
    </Container>
  );
}
