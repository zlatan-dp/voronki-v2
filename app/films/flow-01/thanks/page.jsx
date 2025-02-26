"use client"

import styles from "./page.module.css";

import {useRouter} from "next/navigation"

import { getCurrentTime } from "../../actions/saveToStorage";

import QuizWrap from "../../components/QuizWrap/QuizWrap"
import WhiteBtn from "../../components/whiteBtn/whiteBtn";
import {nextStep} from "../../../actions/steps-client.action";

export default function ThanksPage () {
    const router = useRouter()

    const goToNextStep = async () => {
        await nextStep(
            {
                step: 7,
                type: "info",
                question: "back to main",
                answer: 'next',
                time: await getCurrentTime(),
              }
        )
        router.push("/films/flow-01")     
    }

    return (
        <QuizWrap>
            <div className={styles.imageWrap}></div>
            <h2 className={styles.title}>Vielen Dank für Ihre Antwort!</h2>            
            <WhiteBtn marginTop="0px" onClick={goToNextStep}>ZURÜCK ZUR WEBSITE</WhiteBtn>
        </QuizWrap>
    )
}