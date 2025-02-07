'use client'

import Image from "next/image";
import pagePic from "@/app/static/img/image KIVI Quiz KidsTV/6.png";
import '../styles.flow01.css'
import {ProblemType, StepType} from "@/app/actions/actions.types";
import {nextStep} from "@/app/actions/steps-client.action";
import {getCurrentTime} from "@/app/actions/steps.action";
import {useRouter} from "next/navigation";

export default function MotorikaPage() {
  const router = useRouter()

  const goToNextStep = async (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!(e.target instanceof HTMLElement)) return;

    await nextStep({
      step: 1,
      type: StepType.Info,
      question: "Oglądanie treści w ciemności",
      answer: 'next',
      time: await getCurrentTime(),
    })

    router.push("/landing");
  }

  return (
      <>
        <div className="step">

          <Image
              className={'step-img'}
              src={pagePic}
              alt="In the dark"
              priority={true}
          />
          <div className="bottom-fixed-box">
            <h1>Oglądanie treści w ciemności</h1>

            <div className="info-block" >
              Ekran w ciemności zwiększa obciążenie oczu z powodu kontrastu
              jasnego ekranu i ciemnego otoczenia. Częste korzystanie z gadżetów
              w takich warunkach powoduje bóle głowy i pogorszenie wzroku
              u 25-30% dzieci.
            </div>

            <div className="bottom-button">
              <button className="button" onClick={goToNextStep}>
                Rozwiązanie →
              </button>
            </div>
          </div>
        </div>
      </>
  )
}