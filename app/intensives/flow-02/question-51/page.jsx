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

export default function question51() {
  const currentFlow = useCurrentFlow();
  const router = useRouter();

  const goToNextStep = async () => {
    await nextStep({
      step: 51,
      type: "info",
      answer: "Staying calm under pressure",
      time: await getCurrentTime(),
    });

    router.push(`/intensives/${currentFlow}/question-60`);
  };

  return (
    <div className={styles.container}>
      <ProgressBar from={31} to={35} duration={500} />
      <div className={styles.pageWrap}>
        <div className={styles.infoWrap}>
          <div className={styles.muiImage}>
            <Image
              src="/images/intensives/q51/img1.png"
              alt="img"
              width={572}
              height={572}
              quality={100}
            />
          </div>
          <SectionTitle>Staying calm under pressure</SectionTitle>
          <p className="centeredText">
            is the path to success — and we’ll walk that path together.
          </p>
        </div>
        <SubmitBtn onClick={goToNextStep}>Continue</SubmitBtn>
      </div>
    </div>
  );
}
