import BlockWrap from "../../../components/blockWrap/blockWrap";
import SectionTitle from "../../../components/sectionTitle/sectionTitle";
import styles from "./EnergySnapshot.module.css";

import { useRouter } from "next/navigation";

import SubmitBtn from "../../../components/submitBtn/SubmitBtn";

import { useCurrentFlow } from "../../../actions/getCurrentFlow";
import { nextStep } from "../../../../actions/steps-client.action";
import { getCurrentTime } from "../../../actions/getCurrentTime";
import TextResults from "./TextResults/TextResults";

export default function EnergySnapshot() {
  const currentFlow = useCurrentFlow();
  const router = useRouter();

  const goToNextStep = async () => {
    await nextStep({
      step: 9,
      type: "info",
      question: "Get access to the",
      answer: "FREE mini-course",
      time: await getCurrentTime(),
    });

    router.push(`/sprints/${currentFlow}/enter-email`);
  };

  return (
    <BlockWrap>
      <SectionTitle ta={"center"}>Your Energy Snapshot</SectionTitle>
      <TextResults />
      <SubmitBtn onClick={goToNextStep} wide={"wide"}>
        <span className={styles.btnText}>Get access to the</span>
        <span className={styles.btnText}>FREE mini-course</span>
      </SubmitBtn>

      <p className={styles.infoSmallBoldText}>Thank you for taking the quiz!</p>
    </BlockWrap>
  );
}
