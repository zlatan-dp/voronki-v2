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

export default function question71() {
  const currentFlow = useCurrentFlow();
  const router = useRouter();

  const goToNextStep = async () => {
    await nextStep({
      step: 71,
      type: "info",
      answer: "The road to big goals",
      time: await getCurrentTime(),
    });

    router.push(`/intensives/${currentFlow}/question-80`);
  };

  return (
    <div className={styles.container}>
      <ProgressBar from={45} to={49} duration={500} />
      <div className={styles.pageWrap}>
        <div className={styles.infoWrap}>
          <div className={styles.muiImage}>
            <Image
              src="/images/intensives/q71/img1.png"
              alt="img"
              width={572}
              height={572}
              quality={100}
            />
          </div>
          <SectionTitle>
            The road to big goals is built from small steps —{" "}
          </SectionTitle>
          <p className="centeredText">
            and together, we’ll learn to keep moving forward, no matter what.
          </p>
        </div>
        <SubmitBtn onClick={goToNextStep}>Continue</SubmitBtn>
      </div>
    </div>
  );
}
