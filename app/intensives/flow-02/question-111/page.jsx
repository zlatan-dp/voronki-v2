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
import { useEffect } from "react";

export default function question111() {
  const currentFlow = useCurrentFlow();
  const router = useRouter();

  useEffect(() => {
    document.body.style.backgroundColor = "rgb(189, 220, 245)";

    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

  const goToNextStep = async () => {
    await nextStep({
      step: 111,
      type: "info",
      answer: "Community",
      time: await getCurrentTime(),
    });

    router.push(`/intensives/${currentFlow}/question-120`);
  };

  return (
    <div className={styles.container}>
      <ProgressBar from={74} to={77} duration={500} />
      <div className={styles.pageWrap}>
        <div className={styles.infoWrap}>
          <div className={styles.muiImage}>
            <Image
              src="/images/intensives/q111/img.svg"
              alt="img"
              width={360}
              height={223}
            />
          </div>
          <div className={styles.decorText}>
            <p>🔹 5M+ users in your location</p>
          </div>
          <SectionTitle>Join over 50M people</SectionTitle>
          <p className={styles.text}>
            Become part of a growing worldwide community and achieve your goals
            with us
          </p>
        </div>
        <SubmitBtn onClick={goToNextStep}>Continue</SubmitBtn>
      </div>
    </div>
  );
}
