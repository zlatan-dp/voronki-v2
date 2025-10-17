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

export default function question11() {
  const currentFlow = useCurrentFlow();
  const router = useRouter();

  const goToNextStep = async () => {
    await nextStep({
      step: 11,
      type: "info",
      answer: "glad you are here!",
      time: await getCurrentTime(),
    });

    router.push(`/intensives/${currentFlow}/question-20`);
  };

  return (
    <div className={styles.container}>
      <ProgressBar from={7} to={11} duration={500} />
      <div className={styles.pageWrap}>
        <div className={styles.infoWrap}>
          <div className={styles.muiImage}>
            <Image
              src="/images/intensives/q11/img.png"
              alt="author"
              width={572}
              height={572}
              quality={100}
            />
          </div>
          <SectionTitle>Yay, glad you’re here!</SectionTitle>
          <p className="centeredText">
            We’re excited to guide your growth journey.Let’s start by exploring
            your personality — and build a plan that’s truly yours.
          </p>
        </div>
        <SubmitBtn onClick={goToNextStep}>Continue</SubmitBtn>
      </div>
    </div>
  );
}
