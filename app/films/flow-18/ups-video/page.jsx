"use client"

import styles from "./page.module.css";

import {useRouter} from "next/navigation"

import { getCurrentTime } from "../../actions/saveToStorage";
import { useCurrentFlow } from "../../actions/getCurrentFlow";

import QuizWrap from "../../componentsV2/QuizWrap/QuizWrap"
import WhiteBtn from "../../componentsV2/whiteBtn/whiteBtn";
import {nextStep} from "../../../actions/steps-client.action";

export default function UpsVideo () {
    const router = useRouter()
    const currentFlow = useCurrentFlow()

    const goToNextStep = async () => {
        await nextStep(
            {
                step: 1,
                type: "info",
                question: "ups, video",
                answer: 'back to main',
                time: await getCurrentTime(),
              }
        )
        router.push(`/films/${currentFlow}`)     
    }

    return (
        <QuizWrap>
            <h2 className={styles.title}>Ups,<br/>da ist etwas schiefgelaufen!</h2>
            <div className={styles.imageWrap}></div>
            <WhiteBtn marginTop="0px" onClick={goToNextStep}>ZURÜCK ZUR WEBSITE</WhiteBtn>
        </QuizWrap>
    )
}