"use client"

import styles from "./page.module.css";

import {useRouter} from "next/navigation"
import { useState } from "react";

import { saveAnswer, getCurrentTime } from "../../actions/saveToStorage";

import QuizWrap from "../../components/QuizWrap/QuizWrap"
import WhiteBtn from "../../components/whiteBtn/whiteBtn";
import TranspBtn from "../../components/transparentBtn/transparentBtn";

export default function WhyCanceled() {
    const router = useRouter()
    const [selectedOption, setSelectedOption] = useState("");
    const [customInput, setCustomInput] = useState("");
    const [error, setError] = useState("");

    const options = [
        "💰 Zu hoher Preis",
        "❌ Nicht interessiert",
        "🤔 Zweifel an der Qualität"
    ];

    const handleOptionChange = (option) => {
        setSelectedOption(option);
        setError(""); // Очищаємо помилку при зміні відповіді
        // setCustomInput(""); // Очистка кастомного вводу при виборі стандартного варіанту
    };

    const handleCustomInputChange = (e) => {
        setSelectedOption("custom");
        setCustomInput(e.target.value);
    };

    const handleSubmit = async () => {
        const finalAnswer = selectedOption === "custom" ? customInput : selectedOption;

        if (!finalAnswer) {
            setError("Bitte wählen Sie eine Antwort.");
            return;
        }

                // Перевірка мінімальної кількості символів для кастомної відповіді
        if (selectedOption === "custom" && customInput.length < 5) {
            setError("Mindestens 5 Zeichen erforderlich.");
            return;
        }

        // console.log("Selected reason:", finalAnswer);
        await saveAnswer(
            {
                step: 6,
                type: "question",
                question: "Why did you refuse to buy?",
                answer: finalAnswer,
                time: await getCurrentTime(),
              }
        )
        router.push("/flow-05/thanks");
    };

    const goToBuy = async () => {
        await saveAnswer(
            {
                step: 6,
                type: "info",
                question: "return to films",
                answer: 'next',
                time: await getCurrentTime(),
              }
        )
        router.push("/flow-05/choose-film");
    }

    return (
        <QuizWrap>
            <h2 className={styles.title}>Warum haben Sie sich gegen den Kauf entschieden?</h2>

            <div className={styles.optionsContainer}>
                {options.map((option, index) => (
                    <label key={index} className={styles.optionLabel}>
                        {option}
                        <input
                            type="radio"
                            name="cancelReason"
                            value={option}
                            checked={selectedOption === option}
                            onChange={() => handleOptionChange(option)}
                            className={styles.radioInput}
                        />
                        <span className={styles.customRadio}></span>
                    </label>
                ))}
                <label className={styles.optionLabel}>
                    <textarea
                        placeholder="oder ein anderer Grund"
                        value={customInput}
                        onChange={handleCustomInputChange}
                        className={styles.input}
                    />
                    <input
                        type="radio"
                        name="cancelReason"
                        checked={selectedOption === "custom"}
                        onChange={() => setSelectedOption("custom")}
                        className={styles.radioInput}
                    />
                    <span className={styles.customRadio}></span>
                </label>
                {error && <div className={styles.errorText}>{error}</div>} 
            </div>           

            <TranspBtn marginTop = "20px" onClick={handleSubmit}>ANTWORT SENDEN</TranspBtn>
            <WhiteBtn marginTop = "20px" onClick={goToBuy}>ZUM KAUF ZURÜCKKEHREN</WhiteBtn>
        </QuizWrap>
    )
}