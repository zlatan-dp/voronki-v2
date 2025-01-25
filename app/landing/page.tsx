"use client"

// import {useRouter} from "next/navigation";
// import {ProblemType, StepType} from "@/app/actions/actions.types";
// import {stepsAction} from "@/app/actions/steps.action";
import Image from "next/image";
import pagePicOne from "@/app/static/img/landing/kidsTV_with_blob.png";

export default function StepFivePage () {

  // const router = useRouter();
  //
  // const goToNextStep = async (e: React.MouseEvent<HTMLDivElement>) => {
  //
  //   const storedSteps = localStorage.getItem("steps")
  //   let steps
  //   if (storedSteps) steps = JSON.parse(storedSteps);
  //   else steps = {data: []}
  //
  //   if (!(e.target instanceof HTMLElement)) return;
  //
  //   if (e.target.classList.contains('button')) {
  //     const stepData = {
  //       step: 5,
  //       type: StepType.Info,
  //       answer: 'next',
  //     }
  //
  //     steps.data.push(stepData)
  //     localStorage.setItem("steps", JSON.stringify(steps))
  //
  //     const sendDataToServer = await stepsAction(steps.data)
  //
  //     if (!sendDataToServer) console.log('Step data not sent to DB')
  //
  //     router.push("/checkout");
  //   }
  // }

  return (
      <div className="step">
        <Image
            className={'step-three-img'}
            src={pagePicOne}
            alt="KIVI third step"
            priority={true}
        />
        {/*<div className="step-three-spacer"></div>*/}
        {/*<h1>С какими из этих проблем вы сталкиваетесь?</h1>*/}

        {/*<div className="question-block" onClick={goToNextStep}>*/}
        {/*  <div className="question-button" data-problem-type={ProblemType.CloseToEyes}>*/}
        {/*    Ребенок держит устройство близко к глазам*/}
        {/*  </div>*/}
        {/*  <div className="question-button" data-problem-type={ProblemType.ArmsLock}>*/}
        {/*    Ребенок долго держит устройство в руках*/}
        {/*  </div>*/}
        {/*  <div className="question-button" data-problem-type={ProblemType.InTheDark}>*/}
        {/*    Ребенок смотрит на экран в темноте*/}
        {/*  </div>*/}
        {/*  <div className="question-button" data-problem-type={ProblemType.CrookedBack}>*/}
        {/*    Ребенок не держит осанку*/}
        {/*  </div>*/}
        {/*</div>*/}

        {/*<div className="progress-bars">*/}
        {/*  <div className="bar"></div>*/}
        {/*  <div className="bar"></div>*/}
        {/*  <div className="bar filled"></div>*/}
        {/*  <div className="bar"></div>*/}
        {/*  <div className="bar"></div>*/}
        {/*</div>*/}
      </div>
  )
}