"use client";

import styles from "./page.module.css";

import { useRouter } from "next/navigation";

import { PageData } from "./PageData";
import SingleAnswerContainer from "../../components/singleAnswerContainer/SingleAnswerContainer";
import SectionTitle from "../../components/sectionTitle/sectionTitle";

import { useCurrentFlow } from "../../actions/getCurrentFlow";
import { nextStep } from "../../../actions/steps-client.action";
import { getCurrentTime } from "../../actions/getCurrentTime";

export default function FirstPage() {
  const currentFlow = useCurrentFlow();
  const router = useRouter();

  const goToNextStep = async (id, answer) => {
    await nextStep({
      step: 1,
      type: "question",
      question: "Study program",
      answer: answer || "next",
      time: await getCurrentTime(),
    });

    if (id === 1) {
      router.push(`/intensives/${currentFlow}/question-02`);
    }

    if (id === 2) {
      router.push(`/intensives/${currentFlow}/question-08`);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.questionWrap}>
        <SectionTitle>What study program are you interested in?</SectionTitle>
        <ul className={styles.answerList}>
          {PageData.map(({ id, img, text }) => (
            <li key={id} onClick={() => goToNextStep(id, text)}>
              <SingleAnswerContainer img={img} text={text} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
