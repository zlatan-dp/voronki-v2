"use client";

import { useRouter } from "next/navigation";

import { useCurrentFlow } from "../../actions/getCurrentFlow";
import { nextStep } from "../../../actions/steps-client.action";
import { getCurrentTime } from "../../actions/getCurrentTime";

import Container from "../../components/container/container";
import InfoPage from "../components/InfoPage/InfoPage";

export default function question85() {
  const currentFlow = useCurrentFlow();
  const router = useRouter();

  const goToNextStep = async () => {
    await nextStep({
      step: 12,
      type: "info",
      question: "High-performers understand",
      answer: "next",
      time: await getCurrentTime(),
    });

    router.push(`/sprints/${currentFlow}/question-90`);
  };

  return (
    <Container>
      <InfoPage
        title={"High-performers understand"}
        image={"page85.png"}
        text={
          <>
            🏆 Quality recovery isn't luck.
            <br />
            ChatMind app tracks patterns in your daily life that are easy to
            miss – because it's designed for real-world energy management.
          </>
        }
        next={goToNextStep}
      />
    </Container>
  );
}
