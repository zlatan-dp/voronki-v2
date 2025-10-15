"use client";

import styles from "./page.module.css";
import Image from "next/image";

import { useRouter } from "next/navigation";

import { useCurrentFlow } from "../../actions/getCurrentFlow";
import { nextStep } from "../../../actions/steps-client.action";
import { getCurrentTime } from "../../actions/getCurrentTime";

import SectionTitle from "../../components/sectionTitle/sectionTitle";
import BigBtnsGroup from "../../components/bigBtnsGroup/bigBtnsGroup";
import ProgressBar from "../../components/progressBar/ProgressBar";

export default function question90() {
  const currentFlow = useCurrentFlow();
  const router = useRouter();

  const goToNextStep = async (answer) => {
    await nextStep({
      step: 90,
      type: "question",
      question:
        "Does this book seem interesting to you? (Atomic Habits An Easy & Proven Way to Build Good Habits & Break Bad Ones)",
      answer: answer || "next",
      time: await getCurrentTime(),
    });

    router.push(`/intensives/${currentFlow}/question-100`);
  };

  return (
    <div className={styles.container}>
      <ProgressBar from={56} to={63} duration={500} />
      <div className={styles.questionWrap}>
        <SectionTitle>Does this book seem interesting to you?</SectionTitle>
        <div className={styles.imgWrap}>
          <Image
            src="/images/intensives/books/Atomic_Habits.jpg"
            alt="book"
            width={1696}
            height={2560}
          />
        </div>
        <BigBtnsGroup onClick={goToNextStep} />
      </div>
    </div>
  );
}
