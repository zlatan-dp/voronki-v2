"use client"

import styles from "./page.module.css";

import {useRouter} from "next/navigation"

import { saveAnswer, getCurrentTime } from "../../actions/saveToStorage";

import QuizWrap from "../../components/QuizWrap/QuizWrap"
import WhiteBtn from "../../components/whiteBtn/whiteBtn";

export default function ThanksPage () {
    const router = useRouter()

    const goToNextStep = async () => {
        await saveAnswer(
            {
                step: 7,
                type: "info",
                question: "back to main",
                answer: 'next',
                time: await getCurrentTime(),
              }
        )
        router.push("/flow-02")     
    }

    return (
        <QuizWrap>
            <div className={styles.imageWrap}></div>
            <h2 className={styles.title}>Vielen Dank für Ihre Antwort!</h2>            
            <WhiteBtn marginTop="0px" onClick={goToNextStep}>ZURÜCK ZUR WEBSITE</WhiteBtn>
        </QuizWrap>
    )
}