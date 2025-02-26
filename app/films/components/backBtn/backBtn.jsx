"use client"

import styles from './backBtn.module.css'

import { saveAnswer, getCurrentTime } from '../../actions/saveToStorage'

import {useRouter} from "next/navigation"

export default function BackBtn({step, href}) {

    const router = useRouter()

    const goToPreviosStep = async () => {
        if (window.history.length > 1) {
          await saveAnswer({
            step: step,
            type: "info",
            question: "back step",
            answer: 'back',
            time: await getCurrentTime(),
          })
          router.back();
        } else {
          await saveAnswer(
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