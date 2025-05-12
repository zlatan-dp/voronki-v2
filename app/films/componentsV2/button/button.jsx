"use client";

import styles from "./button.module.css";

import { useRouter } from "next/navigation";

import { getCurrentTime } from "../../actions/saveToStorage";
import { nextStep } from "../../../actions/steps-client.action";

export default function Button({ children, href, dataBlock = "" }) {
  const router = useRouter();

  const goToNextStep = async (e) => {
    const header = e.currentTarget.dataset.block;

    await nextStep({
      step: 1,
      type: "info",
      question: "transition to a quiz",
      answer: header || "next",
      time: await getCurrentTime(),
    });

    router.push(href);
  };

  return (
    <div className={styles.btn} onClick={goToNextStep} data-block={dataBlock}>
      {children}
    </div>
  );
}
