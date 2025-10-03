"use client";

import styles from "./page.module.css";

import { useRouter } from "next/navigation";

import { useCurrentFlow } from "../../actions/getCurrentFlow";
import { nextStep } from "../../../actions/steps-client.action";
import { getCurrentTime } from "../../actions/getCurrentTime";

import SectionTitle from "../../components/sectionTitle/sectionTitle";
import SequentialProgressList from "../../components/sequentialProgressList/SequentialProgressList";

const data = [
  { id: 1, text: "Goals", target: 100 },
  { id: 2, text: "Growth areas", target: 100 },
  { id: 3, text: "Content", target: 100 },
  { id: 4, text: "Prioritizing challenges", target: 100 },
];

export default function learningExperience() {
  const currentFlow = useCurrentFlow();
  const router = useRouter();

  const goToNextStep = async () => {
    await nextStep({
      step: 140,
      type: "info",
      answer: "learning experience",
      time: await getCurrentTime(),
    });

    router.push(`/intensives/${currentFlow}/choose-plan`);
  };

  return (
    <div className={styles.container}>
      <div className={styles.questionWrap}>
        <SectionTitle>
          Your <span className={styles.accent}>learning experience</span> is up
          and running!
        </SectionTitle>
        <SequentialProgressList
          items={data}
          duration={1800}
          staggerDelay={1800}
          requireAll={true} // кнопка активна коли всі 100%
          onContinue={goToNextStep}
        />
      </div>
    </div>
  );
}
