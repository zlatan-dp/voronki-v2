'use client'

import Image from "next/image";
import pagePic from "@/app/static/img/image KIVI Quiz KidsTV/5.png";
import '../styles.flow01.css'
import {StepType} from "@/app/actions/actions.types";
import {nextStep} from "@/app/actions/steps-client.action";
import {getCurrentTime} from "@/app/actions/steps.action";
import {useRouter} from "next/navigation";

export default function MotorikaPage() {
  const router = useRouter()

  const goToNextStep = async (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!(e.target instanceof HTMLElement)) return;

    await nextStep({
      step: 2,
      type: StepType.Info,
      question: "Zwiększone obciążenie nadgarstków i rąk",
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
              alt="KIVI fourth step"
              priority={true}
          />
          <div className="bottom-fixed-box">
            <h1>Zwiększone obciążenie nadgarstków i rąk</h1>

            <div className="info-block" >
              Kiedy dziecko długo trzyma gadżet w rękach, dochodzi do przeciążenia
              mięśni dłoni i nadgarstków. Zwiększa to ryzyko wystąpienia zespołu
              cieśni nadgarstka (ucisk nerwu w okolicy nadgarstka) o 15%.
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