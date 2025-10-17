"use client";

import styles from "./page.module.css";

import Image from "next/image";

import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";

import { useCurrentFlow } from "../../actions/getCurrentFlow";
import { nextStep } from "../../../actions/steps-client.action";
import { getCurrentTime } from "../../actions/getCurrentTime";

import { PersonData } from "./personData";
import SectionTitle from "../../components/sectionTitle/sectionTitle";
import SubmitBtn from "../../components/submitBtn/SubmitBtn";
import ProgressBar from "../../components/progressBar/ProgressBar";

export default function question35() {
  const currentFlow = useCurrentFlow();
  const router = useRouter();

  const [selectedAnswers, setSelectedAnswers] = useState([]);

  const toggleSelect = useCallback((id) => {
    setSelectedAnswers((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  }, []);

  const buildAnswerPayload = (selectedIds) => {
    return selectedIds
      .map((id) => {
        const found = PersonData.find((c) => c.id === id);
        return found ? found.text : null;
      })
      .filter(Boolean);
  };

  const goToNextStep = async (answer) => {
    await nextStep({
      step: 35,
      type: "question",
      question:
        "Whose life principles, success, and personality inspire you the most?",
      answer: answer || "next",
      time: await getCurrentTime(),
    });

    router.push(`/intensives/${currentFlow}/question-40`);
  };

  const handleSubmit = async () => {
    if (selectedAnswers.length === 0) return;

    const payload = buildAnswerPayload(selectedAnswers);
    await goToNextStep(payload);
  };

  return (
    <div className={styles.container}>
      <ProgressBar from={19} to={21} duration={500} />
      <div className={styles.questionWrap}>
        <div className={styles.titleWrap}>
          <SectionTitle>
            Whose life principles, success, and personality inspire you the
            most?
          </SectionTitle>
        </div>
        <ul className={styles.answerList}>
          {PersonData.map(({ id, text, img }) => {
            const isActive = selectedAnswers.includes(id);

            return (
              <li key={id} className={styles.answerItem}>
                <div
                  className={`${styles.inputWrap} ${
                    isActive ? styles.active : ""
                  }`}
                  onClick={() => toggleSelect(id)}
                >
                  <div className={styles.imageWrap}>
                    <Image
                      src={img}
                      alt="person"
                      width={200}
                      height={200}
                      quality={100}
                    />
                  </div>
                </div>
                <span className={styles.text}>{text}</span>
              </li>
            );
          })}
        </ul>
        <SubmitBtn
          disabled={selectedAnswers.length === 0}
          onClick={handleSubmit}
        >
          Continue
        </SubmitBtn>
      </div>
    </div>
  );
}
