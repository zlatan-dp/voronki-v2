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
    document.body.style.backgroundColor = "#B8D8F7";

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
              src="/images/intensives/q111/img.png"
              alt="img"
              width={836}
              height={557}
              quality={100}
            />
          </div>
          <div className={styles.decorText}>
            <p className="centeredText">
              🔹 Over two million people in your area are learning right now.
            </p>
          </div>
          <SectionTitle>Join more than 50M people</SectionTitle>
          <p className={styles.text}>
            worldwide who are growing through microlearning.
          </p>
        </div>
        <SubmitBtn onClick={goToNextStep}>Continue</SubmitBtn>
      </div>
    </div>
  );
}
