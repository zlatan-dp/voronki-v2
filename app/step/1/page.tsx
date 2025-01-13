"use client"

import {useRouter} from "next/navigation";
import {stepsAction} from "@/app/actions/steps.action";
import Image from "next/image";
import pagePic from '../../static/img/ani_cartoon_18.png'

import '../styles.steps.css'
import {useState} from "react";

export default function StepOnePage() {

  const router = useRouter();
  const [selectedValue, setSelectedValue] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(e.target.value);
  }

  const nextStep = () => {
    if (selectedValue !== null) {
      router.push("/step/2");
    }
  }

  return (
      <>
        <Image className={'step-one-img'} src={pagePic} alt="KIVI first step"/>
        <div className="step-one-spacer"></div>
        <h1>Какого возраста <br/> ваш ребенок</h1>
        <form className={'step-form'} action={stepsAction}>
          <label className={'step-label'}>
            <input type="radio" name="child-age" value="unter 5" onChange={handleChange}/>
            5 years old or younger
          </label>
          <label className={'step-label'}>
            <input type="radio" name="child-age" value="5-7" onChange={handleChange}/>
            From 5 to 7 years
          </label>
          <label className={'step-label'}>
            <input type="radio" name="child-age" value="7-10" onChange={handleChange}/>
            From 7 to 10 years
          </label>
          <input type="hidden" name="step" value="1"/>
          <button type={"submit"} onClick={nextStep}>Дальше →</button>
        </form>
        <div className="progress-bars">
          <div className="bar filled"></div>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </>
  )
}