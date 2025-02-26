"use client"

import styles from "./page.module.css";

import {useRouter} from "next/navigation"

import { saveAnswer, getCurrentTime } from "../../actions/saveToStorage";

import QuizWrap from "../../components/QuizWrap/QuizWrap"
import WhiteBtn from "../../components/whiteBtn/whiteBtn";

export default function UpsPage () {
    const router = useRouter()

    const goToNextStep = async () => {
        await saveAnswer(
            {
                step: 5,
                type: "info",
                question: "ups, back to main",
                answer: 'next',
                time: await getCurrentTime(),
              }
        )
        router.push("/flow-02")     
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