"use client";

import styles from "./page.module.css";

import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";

import { useCurrentFlow } from "../../actions/getCurrentFlow";
import { nextStep } from "../../../actions/steps-client.action";
import { getCurrentTime } from "../../actions/getCurrentTime";

import { CategoryData } from "./CategoryData";
import SectionTitle from "../../components/sectionTitle/sectionTitle";
import SubmitBtn from "../../components/submitBtn/SubmitBtn";

export default function question30() {
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
        const found = CategoryData.find((c) => c.id === id);
        return found ? found.text : null;
      })
      .filter(Boolean);
  };

  const goToNextStep = async (answer) => {
    await nextStep({
      step: 30,
      type: "info",
      question: "Choose areas you’d like to elevate",
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
      <div className={styles.questionWrap}>
        <div className={styles.titleWrap}>
          <SectionTitle>Choose areas you’d like to elevate</SectionTitle>
          <p>The choice won’t limit your experience</p>
        </div>
        <ul className={styles.answerList}>
          {CategoryData.map(({ id, text }) => {
            const isActive = selectedAnswers.includes(id);

            return (
              <li key={id} className={styles.answerItem}>
                <div
                  className={`${styles.inputWrap} ${
                    isActive ? styles.active : ""
                  }`}
                  onClick={() => toggleSelect(id)}
                >
                  <span className={styles.text}>{text}</span>
                </div>
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
