"use client";

import { useRouter } from "next/navigation";

import { useCurrentFlow } from "../../actions/getCurrentFlow";
import { nextStep } from "../../../actions/steps-client.action";
import { getCurrentTime } from "../../actions/getCurrentTime";

import Container from "../../components/container/container";
import InfoPage from "../components/InfoPage/InfoPage";
import { getFlowBranch } from "../../actions/quizStorage";

export default function question25() {
  const currentFlow = useCurrentFlow();
  const router = useRouter();

  const branch = getFlowBranch(currentFlow);

  const goToNextStep = async () => {
    await nextStep({
      step: 4,
      type: "info",
      question: "Daily Energy",
      answer: "next",
      time: await getCurrentTime(),
    });

    if (!branch) {
      router.push(`/sprints/${currentFlow}`);
      return;
    }

    router.push(`/sprints/${currentFlow}/${branch}/question-30`);
  };

  return (
    <Container>
      <InfoPage
        title={"Daily Energy"}
        image={"page25.png"}
        text={
          "⚡ We analyze daily energy cycles to suggest when to plan rest and avoid “energy crashes.”"
        }
        next={goToNextStep}
      />
    </Container>
  );
}
