'use client'

import Image from "next/image";
import pagePic from "@/app/static/img/image KIVI Quiz KidsTV/4.png";
import '../styles.flow01.css'
import { StepType } from "@/app/actions/actions.types";
import { nextStep } from "@/app/actions/steps-client.action";
import { getCurrentTime } from "@/app/actions/steps.action";
import { useRouter } from "next/navigation";

export default function CloseEyes() {
  const router = useRouter()

  const goToNextStep = async (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!(e.target instanceof HTMLElement)) return;

    await nextStep({
      step: 2,
      type: StepType.Info,
      question: "Ekran jest zbyt blisko oczu",
      answer: 'next',
      time: await getCurrentTime(),
    })

    router.push("/landing");
  }

  return (
    <>
      <div className="step">

        <Image
          className={'blizko-img'}
          src={pagePic}
          alt="KIVI fourth step"
          priority={true}
        />
        <div className="bottom-fixed-box">
          <h1>Ekran jest zbyt blisko oczu</h1>

          <div className="info-block">
            Ekran, znajdujący się bliżej 30 cm od oczu dziecka,
            powoduje długotrwałe zmęczenie oczu z powodu ciągłego
            skupiania wzroku. Zwiększa to ryzyko rozwoju
            krótkowzroczności o 50-60%.
          </div>

        </div>
        <div className="bottom-button fixed">
          <button className="button" onClick={goToNextStep}>
            Rozwiązanie →
          </button>
        </div>
      </div>
    </>
  )
}