"use client"

import { useRouter } from "next/navigation";
import { StepType } from "@/app/actions/actions.types";
import Image from "next/image";
import pagePic from '../../static/img/ani_cartoon_18.png'

import '../styles.steps.css'
import Link from "next/link";
import { stepsAction } from "@/app/actions/steps.action";

export default function StepOnePage() {

  const router = useRouter();

  const goToNextStep = async (e: React.MouseEvent<HTMLDivElement>) => {
    const storedSteps = localStorage.getItem("steps")
    let steps
    if (storedSteps) steps = JSON.parse(storedSteps);
    else steps = { data: [] }

    if (!(e.target instanceof HTMLElement)) return;

    if (e.target.classList.contains('question-button')) {
      const stepData = {
        step: 1,
        type: StepType.Question,
        question: "Сколько лет вашему ребенку",
        answer: e.target.innerText,
      }

      steps.data.push(stepData)
      localStorage.setItem("steps", JSON.stringify(steps))

      const sendDataToServer = await stepsAction(steps.data)

      if (!sendDataToServer) console.log('Step data not sent to DB')

      router.push("/step/2");
    }
  }

  return (
    <div className="step">
      <Image
        className={'step-one-img'}
        src={pagePic}
        alt="KIVI first step"
        priority={true}
      />
      <div className="step-one-spacer"></div>
      <h1>Ile lat ma Twoje dziecko?</h1>

      <div className="question-block" onClick={goToNextStep}>
        <div className="question-button">
          Do 5 lat
        </div>
        <div className="question-button">
          Od 6 do 8 lat
        </div>
        <div className="question-button">
          Od 9 do 12 lat
        </div>
      </div>

      <div className="license">
        wybierając odpowiedź, akceptujesz nasze &nbsp;
        <Link href={'https://kivismart.com/pl/terms-of-use'}>
          Warunki użytkowania
        </Link> oraz &nbsp;
        <Link href={'https://kivismart.com/pl/privacy-statement'}>
          Politykę prywatności
        </Link>
      </div>
      <div className="progress-bars">
        <div className="bar filled"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </div>
  )
}