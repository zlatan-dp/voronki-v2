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

export default function question110() {
  const currentFlow = useCurrentFlow();
  const router = useRouter();

  const goToNextStep = async (answer) => {
    await nextStep({
      step: 110,
      type: "question",
      question:
        "Does this book seem interesting to you? (Getting Things Done: The Art of Stress-Free Productivity)",
      answer: answer || "next",
      time: await getCurrentTime(),
    });

    router.push(`/intensives/${currentFlow}/question-120`);
  };

  return (
    <div className={styles.container}>
      <ProgressBar from={70} to={77} duration={500} />
      <div className={styles.questionWrap}>
        <SectionTitle>Does this book seem interesting to you?</SectionTitle>
        <div className={styles.imgWrap}>
          <Image
            src="/images/intensives/books/getting-things-done.webp"
            alt="book"
            width={961}
            height={1569}
          />
        </div>
        <BigBtnsGroup onClick={goToNextStep} />
      </div>
    </div>
  );
}
