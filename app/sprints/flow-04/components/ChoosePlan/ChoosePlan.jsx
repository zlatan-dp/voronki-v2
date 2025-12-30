import styles from "./ChoosePlan.module.css";

import { useRouter } from "next/navigation";

import { useCurrentFlow } from "../../../actions/getCurrentFlow";
import { nextStep } from "../../../../actions/steps-client.action";
import { getCurrentTime } from "../../../actions/getCurrentTime";
import { usePlanSelection } from "../../../actions/planSelectionContext";

import { useTimer } from "../../../actions/useTimerContext";

import BlockWrap from "../../../components/blockWrap/blockWrap";
import SectionTitle from "../../../components/sectionTitle/sectionTitle";
import PlanList from "./PlanList/PlanList";

import { PlanData } from "./planData";
import SubmitBtn from "../../../components/submitBtn/SubmitBtn";

export default function ChoosePlanComponent() {
  const currentFlow = useCurrentFlow();
  const router = useRouter();

  const { timerActive } = useTimer();

  const { selectedPlanId, setSelectedPlanId } = usePlanSelection();

  const btnActive =
    Boolean(selectedPlanId) && !(selectedPlanId === 1 && !timerActive);

  const planPayload = (id) => {
    const plan = PlanData.find((p) => p.id === id);
    if (!plan) return null;

    return {
      duration: plan.duration,
    };
  };

  const goToNextStep = async (plan) => {
    await nextStep({
      step: 9,
      type: "info",
      question: "choose your plan",
      answer: plan || "next",
      time: await getCurrentTime(),
    });

    router.push(`/sprints/${currentFlow}/error-page`);
  };

  const handleSubmit = async () => {
    if (!selectedPlanId) return;

    // await fbq('track', 'AddToCart');

    const payload = planPayload(selectedPlanId);
    await goToNextStep(payload);
  };

  return (
    <BlockWrap>
      <SectionTitle>Choose your plan</SectionTitle>
      <PlanList
        plans={PlanData}
        selectedId={selectedPlanId}
        onSelect={setSelectedPlanId}
      />
      <SubmitBtn disabled={!btnActive} onClick={handleSubmit} wide={"wide"}>
        Continue
      </SubmitBtn>
      <p className={styles.infoSmallBoldText}>
        You can cancel your
        <br /> subscription at any time
      </p>
    </BlockWrap>
  );
}
