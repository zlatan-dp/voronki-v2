'use client'

import Image from "next/image";
import pagePic from "@/app/static/img/image KIVI Quiz KidsTV/7.png";
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
      question: "Zła postawa dziecka",
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
              alt="straight back"
              priority={true}
          />
          <div className="bottom-fixed-box">
            <h1>Zła postawa dziecka</h1>

            <div className="info-block" >
              Długotrwałe korzystanie z gadżetów w niewygodnej pozycji prowadzi
              do garbienia i deformacji kręgosłupa. Jest to szczególnie szkodliwe
              dla dzieci, u których przy regularnej niewłaściwej postawie rozwija
              się skolioza w 20-30% przypadków.
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