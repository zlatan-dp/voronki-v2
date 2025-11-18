"use client";

import styles from "./page.module.css";

import { useRouter } from "next/navigation";

import { useCurrentFlow } from "../../actions/getCurrentFlow";
import { nextStep } from "../../../actions/steps-client.action";
import { getCurrentTime } from "../../actions/getCurrentTime";

import { GenderData } from "./GenderData";
import SectionTitle from "../../components/sectionTitle/sectionTitle";
import SingleAnswerContainer from "../../components/singleAnswerContainer/SingleAnswerContainer";
import ProgressBar from "../../components/progressBar/ProgressBar";

export default function question10() {
  const currentFlow = useCurrentFlow();
  const router = useRouter();

  const goToNextStep = async (answer) => {
    await nextStep({
      step: 10,
      type: "question",
      question: "Select your gender?",
      answer: answer || "next",
      time: await getCurrentTime(),
    });

    router.push(`/intensives/${currentFlow}/question-11`);
  };

  return (
    <div className={styles.container}>
      <ProgressBar from={4} to={7} duration={500} />
      <div className={styles.questionWrap}>
        <SectionTitle>Select your gender</SectionTitle>
        <ul className={styles.answerList}>
          {GenderData.map(({ id, img, text, description }) => (
            <li key={id} onClick={() => goToNextStep(text)}>
              <SingleAnswerContainer
                img={img}
                text={text}
                description={description}
                quality={100}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
