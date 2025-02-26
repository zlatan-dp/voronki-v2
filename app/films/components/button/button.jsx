"use client"

import styles from "./button.module.css"

import {useRouter} from "next/navigation"

import { saveAnswer, getCurrentTime } from "../../actions/saveToStorage"

export default function Button ({ children, href }) {

    const router = useRouter()

    const goToNextStep = async () => {

        await saveAnswer(
            {
                step: 1,
                type: "info",
                question: "transition to a quiz",
                answer: 'next',
                time: await getCurrentTime(),
              }
        )
        
        router.push(href)
        }

    return (
        <div className={styles.btn} onClick={goToNextStep}>{children}</div>
    )
}

