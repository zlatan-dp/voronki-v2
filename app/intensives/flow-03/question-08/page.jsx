"use client";
// href={`/intensives/${currentFlow}/question-10`}

import styles from "./page.module.css";
import Image from "next/image";

import { useRouter } from "next/navigation";

import { AgeData } from "./QuestionAgeData";
import SectionTitle from "../../components/sectionTitle/sectionTitle";
import ProgressBar from "../../components/progressBar/ProgressBar";

import { useCurrentFlow } from "../../actions/getCurrentFlow";
import { nextStep } from "../../../actions/steps-client.action";
import { getCurrentTime } from "../../actions/getCurrentTime";

export default function question08() {
  const currentFlow = useCurrentFlow();
  const router = useRouter();

  const goToNextStep = async (answer) => {
    await nextStep({
      step: 8,
      type: "question",
      question: "what is your age?",
      answer: answer || "next",
      time: await getCurrentTime(),
    });

    router.push(`/intensives/${currentFlow}/question-09`);
  };

  return (
    <div className={styles.container}>
      <ProgressBar from={0} to={2} duration={500} />
      <div className={styles.questionWrap}>
        <SectionTitle>
          Become the most interesting person in the room
        </SectionTitle>
        <p className={styles.quizText}>3-minute quiz</p>
        <ul className={styles.ageList}>
          {AgeData.map(({ id, img, text }) => (
            <li
              key={id}
              className={styles.ageItem}
              onClick={() => goToNextStep(text)}
            >
              <div className={styles.imgWrap}>
                <Image src={img} alt="logo" width={478} height={548} />
              </div>
              <div className={styles.textWrap}>
                <p className={styles.textAge}>{text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
