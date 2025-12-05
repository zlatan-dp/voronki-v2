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
      question: "Which area do you want to strengthen at this moment?",
      answer: answer || "next",
      time: await getCurrentTime(),
    });

    router.push(`/sprints/${currentFlow}/question-50`);
  };

  return (
    <Container>
      <ProgressBar
        from={50}
        to={67}
        duration={500}
        currentStep={4}
        totalSteps={6}
      />
      <QuestionWrap>
        <p className={styles.questionText}>
          Which area do you want to strengthen at this moment?
        </p>
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
