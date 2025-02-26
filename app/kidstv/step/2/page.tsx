"use client"

import { useRouter } from "next/navigation";
import { stepsAction } from "@/app/actions/steps.action";
import { StepType } from "@/app/actions/actions.types";
import Image from "next/image";
import pagePic from '../../static/img/ani_in_tv.png'

import '../styles.steps.css'

export default function StepTwoPage() {

  const router = useRouter();

  const goToNextStep = async (e: React.MouseEvent<HTMLDivElement>) => {
    const storedSteps = localStorage.getItem("steps")
    let steps
    if (storedSteps) steps = JSON.parse(storedSteps);
    else steps = { data: [] }

    if (!(e.target instanceof HTMLElement)) return;

    if (e.target.classList.contains('question-button')) {
      const stepData = {
        step: 2,
        type: StepType.Question,
        question: "На чем ваш ребенок смотрит контент",
        answer: e.target.innerText,
      }

      steps.data.push(stepData)
      localStorage.setItem("steps", JSON.stringify(steps))

      const sendDataToServer = await stepsAction(steps.data)

      if (!sendDataToServer) console.log('Step data not sent to DB')

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
      <h1>Na jakim urządzeniu Twoje dziecko ogląda treści?</h1>

      <div className="question-block" onClick={goToNextStep}>
        <div className="question-button">
          Na rodzinnym tablecie
        </div>
        <div className="question-button">
          Na swoim tablecie
        </div>
        <div className="question-button">
          Na telefonie jednego z rodziców
        </div>
        <div className="question-button">
          Na swoim telefonie
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