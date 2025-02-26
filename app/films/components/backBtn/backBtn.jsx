"use client"

import styles from './backBtn.module.css'

import { getCurrentTime } from '../../actions/saveToStorage'

import {useRouter} from "next/navigation"
import {nextStep} from "../../../actions/steps-client.action";

export default function BackBtn({step, href}) {

    const router = useRouter()

    const goToPreviosStep = async () => {
        if (window.history.length > 1) {
          await nextStep({
            step: step,
            type: "info",
            question: "back step",
            answer: 'back',
            time: await getCurrentTime(),
          })
          router.back();
        } else {
          await nextStep(
            {
              step: 1,
              type: "info",
              question: "back to main page",
              answer: 'back',
              time: await getCurrentTime(),
            }
          )
          router.push(href);
        }
      };

    return (
        <div className={styles.closeBtn} onClick={goToPreviosStep}/>
    )
}