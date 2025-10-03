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
      case "blizko":
        router.push("/flow-01/blizko");
        break;
      case "motorika":
        router.push("/flow-01/motorika");
        break;
      case "osanka":
        router.push("/flow-01/osanka");
        break;
      case "temnota":
        router.push("/flow-01/temnota");
        break;
      case "films_b2b":
        if (banner === "barb2b") router.push(`/films/flow-05`);
        else router.push("/films/flow-07");
        break;
      case "films_pets":
        if (banner === "cat") router.push(`/films/flow-02`);
        else router.push(`/films/flow-08`);
        break;
      case "films_fans":
        router.push(
          `/films/flow-06?utm_content=${utmContent}&banner=${banner}&campaign=${campaign}`
        );
        break;
      case "films_game":
        router.push(
          `/films/flow-04?utm_content=${utmContent}&banner=${banner}&campaign=${campaign}`
        );
        break;
      case "films_kids":
        if (banner === "kidsface") router.push(`/films/flow-01`);
        else router.push(`/films/flow-09`);
        break;
      case "films_premium":
        router.push(
          `/films/flow-03?utm_content=${utmContent}&banner=${banner}&campaign=${campaign}`
        );
        break;
      case "modern_tv":
        router.push(
          `/films/flow-11?utm_content=${utmContent}&banner=${banner}&campaign=${campaign}`
        );
        break;
      case "gamers":
        router.push(
          `/films/flow-12?utm_content=${utmContent}&banner=${banner}&campaign=${campaign}`
        );
        break;
      case "business_tv":
        router.push(
          `/films/flow-13?utm_content=${utmContent}&banner=${banner}&campaign=${campaign}`
        );
        break;
      case "sport":
        router.push(
          `/films/flow-14?utm_content=${utmContent}&banner=${banner}&campaign=${campaign}`
        );
        break;
      case "family_kids":
        if (banner === "5")
          router.push(
            `/films/flow-15?utm_content=${utmContent}&banner=${banner}&campaign=${campaign}`
          );
        else
          router.push(
            `/films/flow-16?utm_content=${utmContent}&banner=${banner}&campaign=${campaign}`
          );
        break;
      case "pets":
        if (banner === "cats")
          router.push(
            `/films/flow-17?utm_content=${utmContent}&banner=${banner}&campaign=${campaign}`
          );
        else
          router.push(
            `/films/flow-18?utm_content=${utmContent}&banner=${banner}&campaign=${campaign}`
          );
        break;
      case "parents_men":
        router.push(
          `/films/flow-31?utm_content=${utmContent}&banner=${banner}&campaign=${campaign}`
        );
        break;
      case "parents_women":
        router.push(
          `/films/flow-31?utm_content=${utmContent}&banner=${banner}&campaign=${campaign}`
        );
        break;
      case "pets_men":
        router.push(
          `/films/flow-31?utm_content=${utmContent}&banner=${banner}&campaign=${campaign}`
        );
        break;
      case "pets_women":
        router.push(
          `/films/flow-31?utm_content=${utmContent}&banner=${banner}&campaign=${campaign}`
        );
        break;
      case "parents_all":
        router.push(
          `/films/flow-31?utm_content=${utmContent}&banner=${banner}&campaign=${campaign}`
        );
        break;
      case "pets_all":
        router.push(
          `/films/flow-31?utm_content=${utmContent}&banner=${banner}&campaign=${campaign}`
        );
        break;
      case "quiz-01":
        router.push(
          `/intensives/flow-01?utm_content=${utmContent}&banner=${banner}&campaign=${campaign}`
        );
        break;
      default:
        router.push(
          `/intensives/flow-01?utm_content=${utmContent}&banner=${banner}&campaign=${campaign}`
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
