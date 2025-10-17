"use client";

import styles from "./page.module.css";

import Image from "next/image";

import { useRouter } from "next/navigation";

import { useCurrentFlow } from "../../actions/getCurrentFlow";
import { nextStep } from "../../../actions/steps-client.action";
import { getCurrentTime } from "../../actions/getCurrentTime";

import SectionTitle from "../../components/sectionTitle/sectionTitle";
import SubmitBtn from "../../components/submitBtn/SubmitBtn";

import ProgressBar from "../../components/progressBar/ProgressBar";

export default function question61() {
  const currentFlow = useCurrentFlow();
  const router = useRouter();

  const goToNextStep = async () => {
    await nextStep({
      step: 61,
      type: "info",
      answer: "Time is a resource",
      time: await getCurrentTime(),
    });

    router.push(`/intensives/${currentFlow}/question-70`);
  };

  return (
    <div className={styles.container}>
      <ProgressBar from={39} to={42} duration={500} />
      <div className={styles.pageWrap}>
        <div className={styles.infoWrap}>
          <div className={styles.muiImage}>
            <Image
              src="/images/intensives/q61/img1.png"
              alt="img"
              width={572}
              height={572}
              quality={100}
            />
          </div>
          <SectionTitle>Time is a resource — </SectionTitle>
          <p className="centeredText">
            and together, we’ll learn to keep moving forward, no matter what.
          </p>
        </div>
        <SubmitBtn onClick={goToNextStep}>Continue</SubmitBtn>
      </div>
    </div>
  );
}
