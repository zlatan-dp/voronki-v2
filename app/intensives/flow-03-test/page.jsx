"use client";

import Image from "next/image";
import styles from "./page.module.css";

import SectionTitle from "../components/sectionTitle/sectionTitle";

import { quizData } from "./quizData";

import { nextStep } from "../../actions/steps-client.action";
import { getCurrentTime } from "../actions/getCurrentTime";

import { useState } from "react";
import { useSwipeable } from "react-swipeable";

export default function intensivesQuiz() {
  const [index, setIndex] = useState(0);
  const [swipeClass, setSwipeClass] = useState("");

  const goToNextStep = async (answer) => {
    const currentQuestion = quizData[index];

    await nextStep({
      step: currentQuestion.id,
      type: "question",
      question: currentQuestion.question,
      answer: answer || "next",
      time: await getCurrentTime(),
    });
  };

  const handleAnswer = async (direction) => {
    const currentQuestion = quizData[index];

    const answer =
      direction === "left"
        ? currentQuestion.answerLeft || "Skip"
        : currentQuestion.answerRight || "OK";

    console.log(`Question: ${currentQuestion.question}, Answer: ${answer}`);

    await goToNextStep(answer);

    setSwipeClass(direction === "left" ? styles.swipeLeft : styles.swipeRight);

    setTimeout(() => {
      const enterClass =
        direction === "left" ? styles.enterFromRight : styles.enterFromLeft;
      setIndex((i) => i + 1);
      setSwipeClass(enterClass);

      requestAnimationFrame(() => {
        setSwipeClass("");
      });
    }, 400);
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => handleAnswer("left"),
    onSwipedRight: () => handleAnswer("right"),
    // swipeDuration: 500,
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  if (index >= quizData.length) {
    return (
      <div className={styles.container}>
        <div className={styles.questionWrap}>
          <SectionTitle>🎉Thank you for completing the quiz!🎉</SectionTitle>
        </div>
      </div>
    );
  }

  return (
    <div key={index} {...handlers} className={styles.container}>
      <div className={`${styles.questionWrap} ${swipeClass}`}>
        <SectionTitle>{quizData[index].question}</SectionTitle>
        {quizData[index].description && (
          <p className={styles.description}>{quizData[index].description}</p>
        )}
        <div className={styles.imgWrap}>
          <Image src={quizData[index].img} alt="img" width={478} height={548} />
        </div>
        <p className={styles.swipe}>Swipe to reply</p>
        <div className={styles.answersBlock}>
          <div className={styles.answerLeft}>
            {quizData[index].answerLeft || "Skip"}
          </div>
          <div className={styles.decor}></div>
          <div className={styles.answerRight}>
            {quizData[index].answerRight || "OK"}
          </div>
        </div>
      </div>
    </div>
  );
}
