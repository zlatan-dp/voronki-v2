"use client"

import styles from './closeBtn.module.css'

import { saveAnswer, getCurrentTime} from '../../actions/saveToStorage'

import {useRouter} from "next/navigation"

export default function CloseBtn({step, href}) {

    const router = useRouter()

    const goToNextStep = async () => {
        await saveAnswer(
            {
                step: step,
                type: "info",
                question: "exit from quiz",
                answer: 'exit',
                time: await getCurrentTime(),
              }
        )
        router.push(href)    
    }

    return (
        <div className={styles.closeBtn} onClick={goToNextStep}/>
    )
}