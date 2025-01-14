"use client"

import {useRouter} from "next/navigation";
import {stepsAction} from "@/app/actions/steps.action";
import {StepType} from "@/app/actions/actions.enums";
import Image from "next/image";
import pagePic from '../../static/img/ani_cartoon_22.png'

import '../styles.steps.css'
import CloseEyes from "@/app/step/4/CloseEyes";
import ArmsLock from "@/app/step/4/ArmsLock";

export default function StepFourPage() {

  const router = useRouter();

  const goToNextStep = async (e: React.MouseEvent<HTMLDivElement>) => {
    if (!(e.target instanceof HTMLElement)) return;

    if (e.target.classList.contains('button')) {
      const stepData = {
        step: 4,
        type: StepType.Info,
        answer: 'next',
      }
      await stepsAction(stepData)
      router.push("/step/5");
    }
  }

  return (
      <div className="step">

        {/*<CloseEyes/>*/}
        <ArmsLock/>

        <div className="step-button">
          <div className="button" onClick={goToNextStep}>
            Решение →
          </div>
        </div>

        <div className="progress-bars">
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar filled"></div>
          <div className="bar"></div>
        </div>
      </div>
  )
}