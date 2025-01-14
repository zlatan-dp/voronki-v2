"use client"

import {useRouter} from "next/navigation";
import {stepsAction} from "@/app/actions/steps.action";
import {StepType} from "@/app/actions/actions.enums";
import Image from "next/image";
import pagePic from '../../static/img/ani_in_tv.png'

import '../styles.steps.css'

export default function StepTwoPage() {

  const router = useRouter();

  const goToNextStep = async (e: React.MouseEvent<HTMLDivElement>) => {
    if (!(e.target instanceof HTMLElement)) return;

    if (e.target.classList.contains('question-button')) {
      const stepData = {
        step: 2,
        type: StepType.Question,
        question: "На чем ваш ребенок смотрит контент",
        answer: e.target.innerText,
      }
      await stepsAction(stepData)
      router.push("/step/3");
    }
  }

  return (
      <div className="step">
        <Image
            className={'step-two-img'}
            src={pagePic}
            alt="KIVI second step"
            priority={true}
        />
        <div className="step-one-spacer"></div>
        <h1>На чем ваш ребенок смотрит контент?</h1>

        <div className="question-block" onClick={goToNextStep}>
          <div className="question-button">
            На семейном планшете
          </div>
          <div className="question-button">
            На своем планшете
          </div>
          <div className="question-button">
            На телефоне одного из родителей
          </div>
          <div className="question-button">
            На своем телефоне
          </div>
        </div>

        <div className="progress-bars">
          <div className="bar"></div>
          <div className="bar filled"></div>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
  )
}