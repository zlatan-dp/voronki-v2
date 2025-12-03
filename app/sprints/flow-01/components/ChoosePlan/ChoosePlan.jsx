import { useRouter } from "next/navigation";

import { useCurrentFlow } from "../../../actions/getCurrentFlow";
import { nextStep } from "../../../../actions/steps-client.action";
import { getCurrentTime } from "../../../actions/getCurrentTime";
import { usePlanSelection } from "../../../actions/planSelectionContext";

import BlockWrap from "../../../components/blockWrap/blockWrap";
import SectionTitle from "../../../components/sectionTitle/sectionTitle";
import PlanList from "./PlanList/PlanList";

import { PlanData } from "./planData";
import SubmitBtn from "../../../components/submitBtn/SubmitBtn";

export default function ChoosePlanComponent({ page, step }) {
  const currentFlow = useCurrentFlow();
  const router = useRouter();

  const { selectedPlanId, setSelectedPlanId } = usePlanSelection();

  const planPayload = (id) => {
    const plan = PlanData.find((p) => p.id === id);
    if (!plan) return null;

    return {
      duration: plan.duration,
    };
  };

  const goToNextStep = async (plan) => {
    await nextStep({
      step: step,
      type: "info",
      question: page,
      answer: plan || "next",
      time: await getCurrentTime(),
    });

    router.push(`/sprints/${currentFlow}/error-page`);
  };

  const handleSubmit = async () => {
    if (!selectedPlanId) return;

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
      <SubmitBtn
        disabled={!selectedPlanId}
        onClick={handleSubmit}
        wide={"wide"}
      >
        Continue
      </SubmitBtn>
    </BlockWrap>
  );
}
