'use client'

import {useRouter, useSearchParams} from "next/navigation";
import {nextStep} from "@/app/actions/steps-client.action";
import {StepType} from "@/app/actions/actions.types";
import {getCurrentTime} from "@/app/actions/steps.action";
import {Suspense, useEffect} from "react";

export default function Home() {

  const router = useRouter();
  const searchParams = useSearchParams()
  const utmContent = searchParams.get("utm_content") || ''
  const banner = searchParams.get("banner") || ''

  useEffect(() => {
    const goToNextStep = async () => {
      await nextStep({
        step: 1,
        type: StepType.Proxy,
        question: "Разведение по флоу",
        answer: {
          utm_content: utmContent,
          banner: banner,
        },
        time: await getCurrentTime(),
      })
    }
    goToNextStep()
        .catch(error => console.log(error))


    switch (utmContent) {
      case 'blizko-1':
        router.push("/flow-01/blizko");
        break;
      case 'blizko-2':
        router.push("/flow-01/blizko");
        break;
      case 'blizko-3':
        router.push("/flow-01/blizko");
        break;
      case 'blizko-4':
        router.push("/flow-01/blizko");
        break;
      case 'blizko-5':
        router.push("/flow-01/blizko");
        break;
      case 'motorika-1':
        router.push("/flow-01/motorika");
        break;
      case 'motorika-2':
        router.push("/flow-01/motorika");
        break;
      case 'motorika-3':
        router.push("/flow-01/motorika");
        break;
      case 'motorika-4':
        router.push("/flow-01/motorika");
        break;
      case 'motorika-5':
        router.push("/flow-01/motorika");
        break;
      case 'osanka-1':
        router.push("/flow-01/osanka");
        break;
      case 'osanka-2':
        router.push("/flow-01/osanka");
        break;
      case 'osanka-3':
        router.push("/flow-01/osanka");
        break;
      case 'osanka-4':
        router.push("/flow-01/osanka");
        break;
      case 'osanka-5':
        router.push("/flow-01/osanka");
        break;
      case 'temnota-1':
        router.push("/flow-01/temnota");
        break;
      case 'temnota-2':
        router.push("/flow-01/temnota");
        break;
      case 'temnota-3':
        router.push("/flow-01/temnota");
        break;
      case 'temnota-4':
        router.push("/flow-01/temnota");
        break;
      case 'temnota-5':
        router.push("/flow-01/temnota");
        break;
      default:
        router.push("/step/1");
    }
  }, []);


  return (
      <Suspense fallback={
        <div>Loading...</div>
      }>
        <div className="loader">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </Suspense>
  );
}
