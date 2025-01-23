"use client"

import { useRouter, useSearchParams } from "next/navigation";
import { stepsAction } from "@/app/actions/steps.action";
import { ProblemType, StepType } from "@/app/actions/actions.types";

import '../styles.steps.css'
import ArmsLock from "@/app/step/4/ArmsLock";
import InTheDark from "./InTheDark";
import CrookedBack from "./CrookedBack";
import CloseToEyes from "@/app/step/4/CloseToEyes";


export default function StepFourDispatcher() {

  const router = useRouter();
  // const params = new URLSearchParams(window.location.search)
  // const branch = params.get('branch')

  // console.log(request)
  const searchParams = useSearchParams()
  const branch = searchParams.get('branch')
  console.log(branch)

  const goToNextStep = async (e: React.MouseEvent<HTMLDivElement>) => {
    const sessionId = localStorage.getItem("sessionId") || '';
    const storedSteps = localStorage.getItem("steps")
    let steps
    if (storedSteps) steps = JSON.parse(storedSteps);
    else steps = { data: [] }

    if (!(e.target instanceof HTMLElement)) return;

    if (e.target.classList.contains('button')) {
      const stepData = {
        step: 4,
        type: StepType.Info,
        answer: 'next',
      }

      steps.data.push(stepData)
      localStorage.setItem("steps", JSON.stringify(steps))

      const id = await stepsAction(sessionId, steps.data)
      if (id !== sessionId) localStorage.setItem("sessionId", id)

      router.push("/landing");
    }
  }

  return (
    <div className="step">

        {branch === ProblemType.CloseToEyes ?
          <CloseToEyes />
          : branch === ProblemType.ArmsLock ?
            <ArmsLock />
            : branch === ProblemType.InTheDark ?
              <InTheDark />
              : branch === ProblemType.CrookedBack ?
                <CrookedBack />
                : <CloseToEyes />
        }

        {/*<CloseToEyes/>*/}
        {/* <ArmsLock/> */}
        {/* <InTheDark/> */}
        {/*<CrookedBack/>*/}

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