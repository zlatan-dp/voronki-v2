"use client";

import styles from "./backBtn.module.css";

import { getCurrentTime } from "../../actions/getCurrentTime";

import { useRouter } from "next/navigation";
import { nextStep } from "../../../actions/steps-client.action";

export default function BackBtn() {
  const router = useRouter();

  const goToPreviosStep = async () => {
    await nextStep({
      step: 0,
      type: "info",
      answer: "back step",
      time: await getCurrentTime(),
    });
    router.back();
  };

  return (
    <div className={styles.backBtn} onClick={goToPreviosStep}>
      ← back
    </div>
  );
}
