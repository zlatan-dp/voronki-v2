"use client";

import { useRouter } from "next/navigation";

import { useCurrentFlow } from "../../actions/getCurrentFlow";
import { nextStep } from "../../../actions/steps-client.action";
import { getCurrentTime } from "../../actions/getCurrentTime";

import Container from "../../components/container/container";
import InfoPage from "../components/InfoPage/InfoPage";
import { getFlowBranch } from "../../actions/quizStorage";

export default function question65() {
  const currentFlow = useCurrentFlow();
  const router = useRouter();

  const branch = getFlowBranch(currentFlow);

  const goToNextStep = async () => {
    await nextStep({
      step: 10,
      type: "info",
      question: "The sleep-energy connection",
      answer: "next",
      time: await getCurrentTime(),
    });

    if (!branch) {
      router.push(`/sprints/${currentFlow}`);
      return;
    }

    router.push(`/sprints/${currentFlow}/${branch}/question-70`);
  };

  return (
    <Container>
      <InfoPage
        title={
          <>
            The sleep-energy
            <br />
            connection
          </>
        }
        image={"page65.png"}
        text={
          <>
            😴 Better sleep isn't just hours — it's quality.
            <br />
            ChatMind guides you through light timing, rhythm optimization, and
            movement that help you actually wake refreshed.
          </>
        }
        next={goToNextStep}
      />
    </Container>
  );
}
