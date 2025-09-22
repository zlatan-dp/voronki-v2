"use client";

import styles from "./page.module.css";

import { useRouter } from "next/navigation";

import { useCurrentFlow } from "../../actions/getCurrentFlow";
import { nextStep } from "../../../actions/steps-client.action";
import { getCurrentTime } from "../../actions/getCurrentTime";

import { FormatWorkData } from "./FormatWorkData";
import SectionTitle from "../../components/sectionTitle/sectionTitle";
import SingleAnswerContainer from "../../components/singleAnswerContainer/SingleAnswerContainer";

export default function question20() {
  const currentFlow = useCurrentFlow();
  const router = useRouter();

  const goToNextStep = async (answer) => {
    await nextStep({
      step: 10,
      type: "info",
      question: "Select your gender?",
      answer: answer || "next",
      time: await getCurrentTime(),
    });

    router.push(`/intensives/${currentFlow}/question-30`);
  };

  return (
    <div className={styles.container}>
      <div className={styles.questionWrap}>
        <SectionTitle>What is your current employment status?</SectionTitle>
        <ul className={styles.answerList}>
          {FormatWorkData.map(({ id, img, text, description }) => (
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
