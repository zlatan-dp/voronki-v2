"use client";

import styles from "./page.module.css";

import { useRouter } from "next/navigation";

import { useCurrentFlow } from "../../actions/getCurrentFlow";
import { nextStep } from "../../../actions/steps-client.action";
import { getCurrentTime } from "../../actions/getCurrentTime";

import SectionTitle from "../../components/sectionTitle/sectionTitle";

export default function enterEmail() {
  const currentFlow = useCurrentFlow();
  const router = useRouter();

  const goToNextStep = async (plan) => {
    await nextStep({
      step: 160,
      type: "info",
      question: "Choose your plan",
      answer: plan || "next",
      time: await getCurrentTime(),
    });

    router.push(`/intensives/${currentFlow}/error-page`);
  };

  return (
    <div className={styles.container}>
      <div className={styles.questionWrap}>
        <div className={styles.titleWrap}>
          <SectionTitle>Choose your plan</SectionTitle>
        </div>
      </div>
    </div>
  );
}
