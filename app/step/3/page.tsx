"use client"

import {useRouter} from "next/navigation";
import {stepsAction} from "@/app/actions/steps.action";
import {StepType} from "@/app/actions/actions.enums";
import Image from "next/image";
import pagePic from '../../static/img/ani_cartoon_27.png'

import '../styles.steps.css'

export default function StepThreePage() {

  const router = useRouter();

  const goToNextStep = async (e: React.MouseEvent<HTMLDivElement>) => {
    if (!(e.target instanceof HTMLElement)) return;

    if (e.target.classList.contains('question-button')) {
      const stepData = {
        step: 3,
        type: StepType.Question,
        question: "С какими из этих проблем вы сталкиваетесь",
        answer: e.target.innerText,
      }
      await stepsAction(stepData)
      router.push("/step/4");
    }
  }

  return (
      <div className="step">
        <Image
            className={'step-three-img'}
            src={pagePic}
            alt="KIVI third step"
            priority={true}
        />
        <div className="step-three-spacer"></div>
        <h1>С какими из этих проблем вы сталкиваетесь?</h1>

        <div className="question-block" onClick={goToNextStep}>
          <div className="question-button">
            Ребенок держит устройство близко к глазам
          </div>
          <div className="question-button">
            Ребенок долго держит устройство в руках
          </div>
          <div className="question-button">
            Ребенок смотрит на экран в темноте
          </div>
          <div className="question-button">
            Ребенок не держит осанку
          </div>
        </div>

        <div className="progress-bars">
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar filled"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
  )
}