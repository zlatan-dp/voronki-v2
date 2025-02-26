"use client"

import styles from './closeBtn.module.css'

import { getCurrentTime} from '../../actions/saveToStorage'

import {useRouter} from "next/navigation"
import {nextStep} from "../../../actions/steps-client.action";

export default function CloseBtn({step, href}) {

    const router = useRouter()

    const goToNextStep = async () => {
        await nextStep(
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