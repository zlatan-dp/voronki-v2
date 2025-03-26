"use client"

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { getCurrentTime } from "../../actions/saveToStorage";
import { useCurrentFlow } from "../../actions/getCurrentFlow";

import { availableDiagonals } from "./diagonals";

import styles from "./page.module.css";
import classNames from "classnames";

import QuizWrap from "../../componentsV2/QuizWrap/QuizWrap";
import CloseBtn from "../../componentsV2/closeBtn/closeBtn";
import OrderInfo from "./OrderInfo/OrderInfo";
import TranspBtn from "../../componentsV2/transparentBtn/transparentBtn";
import WhiteBtn from "../../componentsV2/whiteBtn/whiteBtn";

import {nextStep} from "../../../actions/steps-client.action";

export default function ChooseFilm() {
    const router = useRouter();

    const currentFlow = useCurrentFlow()
    
    const defaultFilms = [{
        id: "32t",
        size: 32,
        type: "TV",
        label: '32" für TV',
        count: 1
    }];

    // Спочатку `selectedFilms` порожній, щоб уникнути SSR-проблем
    const [selectedFilms, setSelectedFilms] = useState([]);
    const [isClient, setIsClient] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        setIsClient(true);
        const savedFilms = localStorage.getItem("selectedProtectionFilmsKivi");
        if (savedFilms) {
            setSelectedFilms(JSON.parse(savedFilms));
        } else {
            localStorage.setItem("selectedProtectionFilmsKivi", JSON.stringify(defaultFilms));
            setSelectedFilms(defaultFilms);
        }
    }, []);

    useEffect(() => {
        if (isClient) {
            localStorage.setItem("selectedProtectionFilmsKivi", JSON.stringify(selectedFilms));
        }
    }, [selectedFilms, isClient]);

    const addNewFilm = () => {
        if (selectedFilms.length >= 3) {
            setErrorMessage("Sie können maximal 3 Diagonalen auswählen."); // Повідомлення німецькою
            return;
        }

        const filteredDiagonals = availableDiagonals.filter(d => 
            !selectedFilms.some(f => f.id === d.id) // Знаходимо доступні
        );
    
        if (filteredDiagonals.length === 0) {
            setErrorMessage("Alle verfügbaren Diagonalen wurden bereits hinzugefügt."); // Повідомлення німецькою
            return;
        }
    
        const newFilms = [...selectedFilms, { ...filteredDiagonals[0], count: 1 }];
        setSelectedFilms(newFilms);
        setErrorMessage(""); // При успішному додаванні прибираємо повідомлення
    };

    const updateFilm = (index, newValues) => {
        setSelectedFilms((prev) => {
            const updatedFilms = prev.map((film, i) =>
                i === index ? { ...film, ...newValues } : film
            );
    
            return updatedFilms;
        });
    };

    // Видаляє OrderInfo
    const removeFilm = (index) => {
        setSelectedFilms((prev) => prev.filter((_, i) => i !== index));
    };

    const goToNextStep = async () => {
        // console.log("Selected films:", selectedFilms);
        await nextStep(
            {
                step: 2,
                type: "question",
                question: "selection of films",
                answer: selectedFilms,
                time: await getCurrentTime(),
              }
        )
        router.push(`/films/${currentFlow}/order-info`);
    };

    // Не рендеримо контент, поки не ініціалізовано клієнт
    if (!isClient) return null;

    return (
        <QuizWrap>
            <CloseBtn step = {2} href={`/films/${currentFlow}/why-cancel`}/>
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
                        film={film}
                        onUpdate={updateFilm}
                        onRemove={selectedFilms.length > 1 ? () => removeFilm(index) : null}
                        selectedFilms={selectedFilms} // передаємо масив у OrderInfo
                    />
                ))}
            </div>
            {errorMessage && <p className={styles.errorText}>{errorMessage}</p>}
            <p className={styles.orderText}>
                Sie haben {selectedFilms.length} {selectedFilms.length === 1 ? "Folie " : "Folien "} 
                für {selectedFilms.map(f => `${f.size}” - ${f.count} Stk.`).join(", ")} 
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
