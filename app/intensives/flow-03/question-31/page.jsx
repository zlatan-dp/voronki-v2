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

export default function question31() {
  const currentFlow = useCurrentFlow();
  const router = useRouter();

  const goToNextStep = async () => {
    await nextStep({
      step: 31,
      type: "info",
      answer: "15 min learn",
      time: await getCurrentTime(),
    });

    router.push(`/intensives/${currentFlow}/question-35`);
  };

  return (
    <div className={styles.container}>
      <ProgressBar from={17} to={19} duration={500} />
      <div className={styles.pageWrap}>
        <div className={styles.infoWrap}>
          <div className={styles.muiImage}>
            <Image
              src="/images/intensives/q31/img.png"
              alt="author"
              width={360}
              height={223}
              quality={100}
            />
          </div>
          <SectionTitle>Big ideas. Small steps. Real growth.</SectionTitle>
          <p className="centeredText">
            Learn and improve your life skills in just 15 minutes a day,and make
            every minute count by putting your knowledge to work.
          </p>
        </div>
        <SubmitBtn onClick={goToNextStep}>Continue</SubmitBtn>
      </div>
    </div>
  );
}
