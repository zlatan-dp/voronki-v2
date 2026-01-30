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
      question: "Personal coaching",
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
        title={"Personal coaching"}
        image={"page25.png"}
        text={
          "⚡️ ChatMind creates the exact pacing strategy a professional coach would – tailored just for you."
        }
        next={goToNextStep}
      />
    </Container>
  );
}
