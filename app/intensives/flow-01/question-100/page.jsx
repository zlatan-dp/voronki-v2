"use client";

import styles from "./page.module.css";
import Image from "next/image";

import { useRouter } from "next/navigation";

import { useCurrentFlow } from "../../actions/getCurrentFlow";
import { nextStep } from "../../../actions/steps-client.action";
import { getCurrentTime } from "../../actions/getCurrentTime";

import SectionTitle from "../../components/sectionTitle/sectionTitle";
import BigBtnsGroup from "../../components/bigBtnsGroup/bigBtnsGroup";

export default function question100() {
  const currentFlow = useCurrentFlow();
  const router = useRouter();

  const goToNextStep = async (answer) => {
    await nextStep({
      step: 100,
      type: "info",
      question:
        "Does this book seem interesting to you? (Deep Work: Rules for Focused Success in a Distracted World)",
      answer: answer || "next",
      time: await getCurrentTime(),
    });

    router.push(`/intensives/${currentFlow}/question-110`);
  };

  return (
    <div className={styles.container}>
      <div className={styles.questionWrap}>
        <SectionTitle>Does this book seem interesting to you?</SectionTitle>
        <div className={styles.imgWrap}>
          <Image
            src="/images/intensives/books/Deep_work.jpg"
            alt="book"
            width={954}
            height={1500}
          />
        </div>
        <BigBtnsGroup onClick={goToNextStep} />
      </div>
    </div>
  );
}
