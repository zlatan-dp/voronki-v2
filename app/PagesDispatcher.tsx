"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { nextStep } from "@/app/actions/steps-client.action";
import { StepType } from "@/app/actions/actions.types";
import { getCurrentTime } from "@/app/actions/steps.action";
import { useState, useEffect } from "react";

export default function PagesDispatcher() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [pageEnter, setPageEnter] = useState<boolean>(false);

  const utmContent = searchParams.get("utm_content") || "";
  const banner = searchParams.get("banner") || "";
  const campaign = searchParams.get("campaign") || "";

  useEffect(() => {
    const goToNextStep = async () => {
      await nextStep({
        step: 0,
        type: StepType.Proxy,
        question: "Разведение по флоу",
        answer: {
          utm_content: utmContent,
          banner: banner,
          campaign: campaign,
        },
        time: await getCurrentTime(),
      });
    };
    goToNextStep()
      .catch((error) => console.log(error))
      .finally(() => setPageEnter(true));
  }, []);

  useEffect(() => {
    switch (utmContent) {
      case "quiz-01":
        router.push(
          `/intensives/flow-01?utm_content=${utmContent}&banner=${banner}&campaign=${campaign}`
        );
        break;
      case "quiz-02":
        router.push(
          `/intensives/flow-02?utm_content=${utmContent}&banner=${banner}&campaign=${campaign}`
        );
        break;
      case "quiz-03":
        router.push(
          `/intensives/flow-03?utm_content=${utmContent}&banner=${banner}&campaign=${campaign}`
        );
        break;
      default:
        router.push(
          `/intensives/flow-02?utm_content=${utmContent}&banner=${banner}&campaign=${campaign}`
        );
    }
  }, [pageEnter]);

  return (
    <>
      <div className="loader">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </>
  );
}
