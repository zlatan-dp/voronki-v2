'use client'

import {useRouter, useSearchParams} from "next/navigation";
import {nextStep} from "@/app/actions/steps-client.action";
import {StepType} from "@/app/actions/actions.types";
import {getCurrentTime} from "@/app/actions/steps.action";
import {useEffect} from "react";

export default function PagesDispatcher() {

  const router = useRouter();
  const searchParams = useSearchParams()
  const utmContent = searchParams.get("utm_content") || ''
  const banner = searchParams.get("banner") || ''
  const campaign = searchParams.get("campaign") || ''

  useEffect(() => {
    const goToNextStep = async () => {
      await nextStep({
        step: 1,
        type: StepType.Proxy,
        question: "Разведение по флоу",
        answer: {
          utm_content: utmContent,
          banner: banner,
          campaign: campaign,
        },
        time: await getCurrentTime(),
      })
    }
    goToNextStep()
        .catch(error => console.log(error))


    switch (utmContent) {
      case 'blizko':
        router.push("/flow-01/blizko");
        break;
      case 'motorika':
        router.push("/flow-01/motorika");
        break;
      case 'osanka':
        router.push("/flow-01/osanka");
        break;
      case 'temnota':
        router.push("/flow-01/temnota");
        break;
      default:
        router.push("/step/1");
    }
  }, []);


  return (
        <></>
  );
}
