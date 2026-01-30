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

export default function question90() {
  const currentFlow = useCurrentFlow();
  const router = useRouter();

  const goToNextStep = async (text) => {
    await nextStep({
      step: 13,
      type: "question",
      question: "How much time do you usually spend on your phone each day?",
      answer: text || "next",
      time: await getCurrentTime(),
    });

    router.push(`/sprints/${currentFlow}/question-100`);
  };

  return (
    <Container>
      <ProgressBar
        from={80}
        to={90}
        duration={500}
        currentStep={9}
        totalSteps={10}
      />
      <QuestionWrap>
        <p className={styles.questionText}>
          How much time do you usually spend on your phone each day?
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
