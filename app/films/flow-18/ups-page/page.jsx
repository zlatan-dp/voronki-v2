"use client"

import styles from "./page.module.css";

import {useRouter} from "next/navigation"

import { getCurrentTime } from "../../actions/saveToStorage";
import { useCurrentFlow } from "../../actions/getCurrentFlow";

import QuizWrap from "../../componentsV2/QuizWrap/QuizWrap"
import WhiteBtn from "../../componentsV2/whiteBtn/whiteBtn";
import {nextStep} from "../../../actions/steps-client.action";

export default function UpsPage () {
    const router = useRouter()
    const currentFlow = useCurrentFlow()

    const goToNextStep = async () => {
        await nextStep(
            {
                step: 5,
                type: "info",
                question: "ups, back to main",
                answer: 'next',
                time: await getCurrentTime(),
              }
        )
        router.push(`/films/${currentFlow}`)     
    }

    return (
        <QuizWrap>
            <h2 className={styles.title}>Ups!<br/>Alle Folien sind ausverkauft!</h2>
            <div className={styles.imageWrap}></div>
            <p className={styles.text}>Keine Sorge! Wir benachrichtigen Sie, sobald das Produkt wieder verfügbar ist.</p>
            <WhiteBtn marginTop="0px" onClick={goToNextStep}>ZURÜCK ZUR WEBSITE</WhiteBtn>
        </QuizWrap>
    )
}