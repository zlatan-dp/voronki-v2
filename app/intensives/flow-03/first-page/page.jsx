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
    localStorage.setItem("ChatMNDhowYouWantToLearn", id);

    await nextStep({
      step: 1,
      type: "question",
      question: "Choose how you want to learn:",
      answer: answer || "next",
      time: await getCurrentTime(),
    });

    router.push(`/intensives/${currentFlow}/question-02`);
  };

  return (
    <div className={styles.container}>
      <div className={styles.questionWrap}>
        <SectionTitle>Choose how you want to learn:</SectionTitle>
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
