"use client";

import styles from "./page.module.css";

import { useRouter } from "next/navigation";

import { useCurrentFlow } from "../../actions/getCurrentFlow";
import { nextStep } from "../../../actions/steps-client.action";
import { getCurrentTime } from "../../actions/getCurrentTime";

import { GoalData } from "./GoalData";
import SectionTitle from "../../components/sectionTitle/sectionTitle";
import SingleAnswerContainer from "../../components/singleAnswerContainer/SingleAnswerContainer";

export default function question130() {
  const currentFlow = useCurrentFlow();
  const router = useRouter();

  const goToNextStep = async (answer) => {
    await nextStep({
      step: 130,
      type: "info",
      question: "Choose your daily self-growth goal",
      answer: answer || "next",
      time: await getCurrentTime(),
    });

    router.push(`/intensives/${currentFlow}/learning-experience`);
  };

  return (
    <div className={styles.container}>
      <div className={styles.questionWrap}>
        <SectionTitle>Choose your daily self-growth goal</SectionTitle>
        <ul className={styles.answerList}>
          {GoalData.map(({ id, img, text, description }) => (
            <li key={id} onClick={() => goToNextStep(text)}>
              <SingleAnswerContainer
                img={img}
                text={text}
                description={description}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
