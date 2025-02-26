"use client"

import styles from "./page.module.css";

import {useRouter} from "next/navigation"
import { useState } from "react";

import { saveAnswer, getCurrentTime } from "../../actions/saveToStorage";

import classNames from "classnames";

import QuizWrap from "../../components/QuizWrap/QuizWrap"
import CloseBtn from "../../components/closeBtn/closeBtn"
import BackBtn from "../../components/backBtn/backBtn";
import WhiteBtn from "../../components/whiteBtn/whiteBtn";


export default function Information () {

    const router = useRouter()

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        let newErrors = {};
        const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

        if (!name.trim()) {
            newErrors.name = "Bitte geben Sie Ihren Namen ein";
        } else if (name.trim().length < 2) {
            newErrors.name = "Mindestens 2 Buchstaben erforderlich";
        } else if (!/^[A-Za-zÄÖÜäöüßА-Яа-яЁё\s-]+$/.test(name)) {
            newErrors.name = "Nur Buchstaben erlaubt";
        }

        if (!email.trim()) {
            newErrors.email = "Bitte geben Sie Ihre E-Mail-Adresse ein";
        } else if (!emailPattern.test(email)) {
            newErrors.email = "Ungültige E-Mail-Adresse";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const goToNextStep = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            await saveAnswer(
                {
                    step: 4,
                    type: "question",
                    question: "select name, email",
                    answer: {Name: name, Email: email},
                    time: await getCurrentTime(),
                  }
            )
            router.push("/flow-01/ups-page");
        }   
    }
    return (
                <QuizWrap>
                    <BackBtn step = {4} href={"/flow-01"}/>
                    <CloseBtn step = {4} href={"/flow-01/why-cancel"}/>
                    <h2 className={styles.title}>Ihre Daten</h2>
                    <div className={styles.imageWrap}></div>
                    <form className={styles.form}>
                        <div className={styles.inputGroup}>
                            <input
                                type="text"
                                placeholder="Name"
                                className={classNames(styles.input, { [styles.error]: errors.name })}
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                            {errors.name && <p className={styles.errorText}>{errors.name}</p>}
                        </div>

                        <div className={styles.inputGroup}>
                            <input
                                type="email"
                                placeholder="E-Mail"
                                className={classNames(styles.input, { [styles.error]: errors.email })}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            {errors.email && <p className={styles.errorText}>{errors.email}</p>}
                        </div>

                        <WhiteBtn marginTop="0px" onClick={goToNextStep}>BESTELLEN UND BEZAHLEN</WhiteBtn>
                    </form>
                   
                    <div className={styles.progressBars}>                    
                        <div className={styles.bar}></div>                        
                        <div className={styles.bar}></div>
                        <div className={classNames(styles.bar, styles.filled)}></div>
                        <div className={styles.bar}></div>
                    </div>
                </QuizWrap>
    )
}