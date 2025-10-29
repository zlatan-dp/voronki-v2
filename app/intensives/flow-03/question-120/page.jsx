"use client";

import styles from "./page.module.css";

import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";

import { useCurrentFlow } from "../../actions/getCurrentFlow";
import { nextStep } from "../../../actions/steps-client.action";
import { getCurrentTime } from "../../actions/getCurrentTime";

import { ReasonData } from "./ReasonData";
import SectionTitle from "../../components/sectionTitle/sectionTitle";
import SubmitBtn from "../../components/submitBtn/SubmitBtn";
import ProgressBar from "../../components/progressBar/ProgressBar";

export default function question120() {
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
        const found = ReasonData.find((c) => c.id === id);
        return found ? found.text : null;
      })
      .filter(Boolean);
  };

  const goToNextStep = async (answer) => {
    await nextStep({
      step: 120,
      type: "question",
      question: "Do you have a specific reason for self-growth?",
      answer: answer || "next",
      time: await getCurrentTime(),
    });

    router.push(`/intensives/${currentFlow}/question-130`);
  };

  const handleSubmit = async () => {
    if (selectedAnswers.length === 0) return;

    const payload = buildAnswerPayload(selectedAnswers);
    await goToNextStep(payload);
  };

  return (
    <div className={styles.container}>
      <ProgressBar from={77} to={87} duration={500} />
      <div className={styles.questionWrap}>
        <div className={styles.titleWrap}>
          <SectionTitle>
            Do you have a specific reason for self-growth?
          </SectionTitle>
        </div>
        <ul className={styles.answerList}>
          {ReasonData.map(({ id, img, text }) => {
            const isActive = selectedAnswers.includes(id);

            return (
              <li key={id} className={styles.answerItem}>
                <div
                  className={`${styles.inputWrap} ${
                    isActive ? styles.active : ""
                  }`}
                  onClick={() => toggleSelect(id)}
                >
                  <div className={styles.mainText}>
                    {img && <span className={styles.emoji}>{img}</span>}
                    <span className={styles.text}>{text}</span>
                  </div>
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
