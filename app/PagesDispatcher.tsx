'use client'

import { useRouter, useSearchParams } from "next/navigation";
import { nextStep } from "@/app/actions/steps-client.action";
import { StepType } from "@/app/actions/actions.types";
import { getCurrentTime } from "@/app/actions/steps.action";
import { useState, useEffect } from "react";


export default function PagesDispatcher() {

  const router = useRouter();
  const searchParams = useSearchParams()
  const [pageEnter, setPageEnter] = useState<boolean>(false)


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
      .finally(() => setPageEnter(true))
  }, []);

  useEffect(() => {
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
      case 'films_b2b':
        router.push(`/films/flow-05?utm_content=${utmContent}&banner=${banner}&campaign=${campaign}`);
        break;
      case 'films_pets':
        router.push(`/films/flow-02?utm_content=${utmContent}&banner=${banner}&campaign=${campaign}`);
        break;
      case 'films_fans':
        router.push(`/films/flow-06?utm_content=${utmContent}&banner=${banner}&campaign=${campaign}`);
        break;
      case 'films_game':
        router.push(`/films/flow-04?utm_content=${utmContent}&banner=${banner}&campaign=${campaign}`);
        break;
      case 'films_kids':
        router.push(`/films/flow-01?utm_content=${utmContent}&banner=${banner}&campaign=${campaign}`);
        break;
      case 'films_premium':
        router.push(`/films/flow-03?utm_content=${utmContent}&banner=${banner}&campaign=${campaign}`);
        break;
      default:
        router.push(`/films/flow-01?utm_content=${utmContent}&banner=${banner}&campaign=${campaign}`);
    }
  }, [pageEnter])


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
