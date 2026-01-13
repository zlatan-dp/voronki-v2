"use client";

import { useRouter } from "next/navigation";

import { useCurrentFlow } from "../../actions/getCurrentFlow";
import { nextStep } from "../../../actions/steps-client.action";
import { getCurrentTime } from "../../actions/getCurrentTime";

import Container from "../../components/container/container";
import InfoPage from "../components/InfoPage/InfoPage";
import { getFlowBranch } from "../../actions/quizStorage";

export default function question85() {
  const currentFlow = useCurrentFlow();
  const router = useRouter();

  const branch = getFlowBranch(currentFlow);

  const goToNextStep = async () => {
    await nextStep({
      step: 13,
      type: "info",
      question: "Balance and Rest",
      answer: "next",
      time: await getCurrentTime(),
    });

    if (!branch) {
      router.push(`/sprints/${currentFlow}`);
      return;
    }

    router.push(`/sprints/${currentFlow}/${branch}/question-90`);
  };

  return (
    <Container>
      <InfoPage
        title={"Balance and Rest"}
        image={"page85.png"}
        text={
          "☀️ ChatMind will prepare personal “recovery rituals” to noticeably improve well-being in just 7 days."
        }
        next={goToNextStep}
      />
    </Container>
  );
}
