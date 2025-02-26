"use client"

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { saveAnswer, getCurrentTime } from "../../actions/saveToStorage";

import styles from "./page.module.css";
import classNames from "classnames";

import QuizWrap from "../../components/QuizWrap/QuizWrap";
import CloseBtn from "../../components/closeBtn/closeBtn";
import OrderInfo from "./OrderInfo/OrderInfo";
import TranspBtn from "../../components/transparentBtn/transparentBtn";
import WhiteBtn from "../../components/whiteBtn/whiteBtn";

export default function ChooseFilm() {
    const router = useRouter();
    
    const defaultFilms = [{ diagonal: 32, count: 1 }];

    // Спочатку `selectedFilms` порожній, щоб уникнути SSR-проблем
    const [selectedFilms, setSelectedFilms] = useState([]);
    const [isClient, setIsClient] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        setIsClient(true);
        const savedFilms = localStorage.getItem("selectedKiviProtectionFilms");
        if (savedFilms) {
            setSelectedFilms(JSON.parse(savedFilms));
        } else {
            localStorage.setItem("selectedKiviProtectionFilms", JSON.stringify(defaultFilms));
            setSelectedFilms(defaultFilms);
        }
    }, []);

    useEffect(() => {
        if (isClient) {
            localStorage.setItem("selectedKiviProtectionFilms", JSON.stringify(selectedFilms));
        }
    }, [selectedFilms, isClient]);

    const addNewFilm = () => {
        const availableDiagonals = [32, 43, 50, 55, 65].filter(d => 
            !selectedFilms.some(f => f.diagonal === d) // Знаходимо доступні
        );
    
        if (availableDiagonals.length === 0) {
            setErrorMessage("Alle verfügbaren Diagonalen wurden bereits hinzugefügt."); // Повідомлення німецькою
            return;
        }
    
        const newFilms = [...selectedFilms, { diagonal: availableDiagonals[0], count: 1 }];
        setSelectedFilms(newFilms);
        setErrorMessage(""); // При успішному додаванні прибираємо повідомлення
    };

    const updateFilm = (index, newValues) => {
        setSelectedFilms((prev) => {
            const { diagonal } = newValues;
    
            if (diagonal) {
                const existingIndex = prev.findIndex(f => f.diagonal === diagonal);
    
                if (existingIndex !== -1 && existingIndex !== index) {
                    // Якщо вже є така діагональ, збільшуємо count
                    return prev.map((film, i) =>
                        i === existingIndex ? { ...film, count: film.count + 1 } : film
                    ).filter((_, i) => i !== index); // Видаляємо поточний, бо він вже є
                }
            }
    
            return prev.map((film, i) => (i === index ? { ...film, ...newValues } : film));
        });
    };

    // Видаляє OrderInfo
    const removeFilm = (index) => {
        setSelectedFilms((prev) => prev.filter((_, i) => i !== index));
    };

    const goToNextStep = async () => {
        // console.log("Selected films:", selectedFilms);
        await saveAnswer(
            {
                step: 2,
                type: "question",
                question: "selection of films",
                answer: selectedFilms,
                time: await getCurrentTime(),
              }
        )
        router.push("/flow-02/order-info");
    };

    // Не рендеримо контент, поки не ініціалізовано клієнт
    if (!isClient) return null;

    return (
        <QuizWrap>
            <CloseBtn step = {2} href={"/flow-02/why-cancel"}/>
            <h2 className={styles.title}>Welche Folie<br/>benötigen Sie?</h2>
            <div className={styles.chooseWrap}>
                <p className={styles.chooseText}>Diagonale</p>
                <p className={styles.chooseText}>Anzahl</p>
            </div>
            <div className={styles.orderWrap}>
                {selectedFilms.map((film, index) => (
                    <OrderInfo
                        key={index}
                        index={index}
                        diagonal={film.diagonal}
                        count={film.count}
                        onUpdate={updateFilm}
                        onRemove={selectedFilms.length > 1 ? () => removeFilm(index) : null}
                        selectedFilms={selectedFilms} // передаємо масив у OrderInfo
                    />
                ))}
            </div>
            {errorMessage && <p className={styles.errorText}>{errorMessage}</p>}
            <p className={styles.orderText}>
                Sie haben {selectedFilms.length} {selectedFilms.length === 1 ? "Folie " : "Folien "} 
                für {selectedFilms.map(f => `${f.diagonal}” - ${f.count} Stk.`).join(", ")} 
                {selectedFilms.length === 1 ? " Diagonal" : " Diagonalen"} ausgewählt
            </p>
            <TranspBtn marginTop="20px" onClick={addNewFilm}>TV-DIAGONALE HINZUFÜGEN</TranspBtn>
            <WhiteBtn marginTop="20px" onClick={goToNextStep}>WEITER</WhiteBtn>
            <div className={styles.progressBars}>
                <div className={classNames(styles.bar, styles.filled)}></div>
                <div className={styles.bar}></div>
                <div className={styles.bar}></div>
                <div className={styles.bar}></div>
            </div>
        </QuizWrap>
    );
}
