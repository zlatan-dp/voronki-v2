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
      question: "Social and Physical Well-being",
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
            Social and <br />
            Physical Well-being
          </>
        }
        image={"page65.png"}
        text={
          "🏃‍♀️ We’ll create personalized micro-movement habits to gradually restore body tone — no exhausting workouts."
        }
        next={goToNextStep}
      />
    </Container>
  );
}
