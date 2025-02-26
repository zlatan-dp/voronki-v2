"use client"

import { useRouter } from "next/navigation";
import { stepsAction } from "@/app/actions/steps.action";
import { ProblemType, StepType } from "@/app/actions/actions.types";
import Image from "next/image";
import pagePic from '../../static/img/ani_cartoon_27.png'

import '../styles.steps.css'

export default function StepThreePage() {

  const router = useRouter();

  const goToNextStep = async (e: React.MouseEvent<HTMLDivElement>) => {
    const storedSteps = localStorage.getItem("steps")
    let steps
    if (storedSteps) steps = JSON.parse(storedSteps);
    else steps = { data: [] }

    if (!(e.target instanceof HTMLElement)) return;

    if (e.target.classList.contains('question-button')) {
      const stepData = {
        step: 3,
        type: StepType.Question,
        question: "С какими из этих проблем вы сталкиваетесь",
        answer: e.target.innerText,
      }

      steps.data.push(stepData)
      localStorage.setItem("steps", JSON.stringify(steps))

      const sendDataToServer = await stepsAction(steps.data)

      if (!sendDataToServer) console.log('Step data not sent to DB')

      const problemType = e.target.dataset.problemType
      router.push(`/step/4?branch=${problemType}`);
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
      <h1>Z którymi z tych problemów się spotykasz?</h1>

      <div className="question-block" onClick={goToNextStep}>
        <div className="question-button" data-problem-type={ProblemType.CloseToEyes}>
          Dziecko trzyma urządzenie blisko oczu
        </div>
        <div className="question-button" data-problem-type={ProblemType.ArmsLock}>
          Dziecko długo trzyma urządzenie w rękach
        </div>
        <div className="question-button" data-problem-type={ProblemType.InTheDark}>
          Dziecko patrzy na ekran w ciemności
        </div>
        <div className="question-button" data-problem-type={ProblemType.CrookedBack}>
          Dziecko nie trzyma postawy
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