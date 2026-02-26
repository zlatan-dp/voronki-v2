"use client";

import { useRouter } from "next/navigation";

import { useCurrentFlow } from "../../actions/getCurrentFlow";
import { nextStep } from "../../../actions/steps-client.action";
import { getCurrentTime } from "../../actions/getCurrentTime";

import Container from "../../components/container/container";
import InfoPage from "../components/InfoPage/InfoPage";
import { getFlowBranch } from "../../actions/quizStorage";

export default function question45() {
  const currentFlow = useCurrentFlow();
  const router = useRouter();

  const branch = getFlowBranch(currentFlow);

  const goToNextStep = async () => {
    await nextStep({
      step: 7,
      type: "info",
      question: "High-performers understand",
      answer: "next",
      time: await getCurrentTime(),
    });

    if (!branch) {
      router.push(`/sprints/${currentFlow}`);
      return;
    }

    router.push(`/sprints/${currentFlow}/${branch}/question-50`);
  };

  return (
    <Container>
      <InfoPage
        title={"High-performers understand"}
        image={"page45.png"}
        text={
          "🏆  Quality recovery isn't luck. ChatMind app shows patterns that medical checkups miss – because it's designed for real-world energy management."
        }
        next={goToNextStep}
      />
    </Container>
  );
}
