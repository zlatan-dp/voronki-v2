"use client";

import styles from "./page.module.css";

import { useRouter } from "next/navigation";

import { useCurrentFlow } from "../../actions/getCurrentFlow";
import { nextStep } from "../../../actions/steps-client.action";
import { getCurrentTime } from "../../actions/getCurrentTime";
import { setFlowBranch } from "../../actions/quizStorage";

import { AnswersData } from "./AnswersData";
import QuestionWrap from "../../components/questionWrap/questionWrap";
import Container from "../../components/container/container";
import TextAnswerContainer from "../../components/TextAnswerContainer/TextAnswerContainer";
import ProgressBar from "../../components/progressBar/ProgressBar";

export default function question10() {
  const currentFlow = useCurrentFlow();
  const router = useRouter();

  const goToNextStep = async (text, branch) => {
    await nextStep({
      step: 2,
      type: "question",
      question: "What’s your main goal right now?",
      answer: [branch, text] || "next",
      time: await getCurrentTime(),
    });

    setFlowBranch(currentFlow, branch);

    router.push(`/sprints/${currentFlow}/question-20`);
  };

  return (
    <Container>
      <ProgressBar
        from={0}
        to={10}
        duration={500}
        currentStep={1}
        totalSteps={10}
      />
      <QuestionWrap>
        <p className={styles.questionText}>What’s your main goal right now?</p>
        <ul className={styles.answerList}>
          {AnswersData.map(({ id, text, branch }) => (
            <li key={id} onClick={() => goToNextStep(text, branch)}>
              <TextAnswerContainer text={text} />
            </li>
          ))}
        </ul>
      </QuestionWrap>
    </Container>
  );
}
