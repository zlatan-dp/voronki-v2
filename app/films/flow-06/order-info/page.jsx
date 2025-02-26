"use client"

import styles from "./page.module.css";

import {useRouter} from "next/navigation"
import { useEffect, useState } from "react";

import { saveAnswer, getCurrentTime } from "../../actions/saveToStorage";

import classNames from "classnames";

import QuizWrap from "../../components/QuizWrap/QuizWrap"
import CloseBtn from "../../components/closeBtn/closeBtn"
import BackBtn from "../../components/backBtn/backBtn";
import CountdownTimer from "./timer/Timer";
import WhiteBtn from "../../components/whiteBtn/whiteBtn";


export default function OrderInformation() {
    const router = useRouter()
    const [selectedFilms, setSelectedFilms] = useState([]);
    const [isClient, setIsClient] = useState(false);

    const prices = {
        32: { full: 40, discount: 19 },
        43: { full: 60, discount: 29 },
        50: { full: 80, discount: 39 },
        55: { full: 90, discount: 45 },
        65: { full: 110, discount: 55 },
    };

    useEffect(() => {
        setIsClient(true);
        const savedFilms = localStorage.getItem("selectedKiviProtectionFilms");
        if (savedFilms) {
            setSelectedFilms(JSON.parse(savedFilms));
        }
    }, []);

    const calculateTotalPrice = () => {
        let totalFullPrice = 0;
        let totalDiscountPrice = 0;

        selectedFilms.forEach(({ diagonal, count }) => {
            if (prices[diagonal]) {
                totalFullPrice += prices[diagonal].full * count;
                totalDiscountPrice += prices[diagonal].discount * count;
            }
        });

        return { totalFullPrice, totalDiscountPrice };
    };

    if (!isClient) return null;

    const totalItems = selectedFilms.reduce((sum, film) => sum + film.count, 0);
    const orderText = selectedFilms.map(({ diagonal }, index) => (
        <div key={index} className={styles.inlineBlock}>
            KIVI Film {diagonal}″{index < selectedFilms.length - 1 && " + "}
        </div>
    ));
    const { totalFullPrice, totalDiscountPrice } = calculateTotalPrice();

    const goToNextStep = async () => {
        await saveAnswer(
            {
                step: 3,
                type: "info",
                question: "order info",
                answer: 'next',
                time: await getCurrentTime(),
              }
        )
        router.push("/flow-06/information")     
    }

    return (
        <QuizWrap>
            <BackBtn step = {3} href={"/flow-06"}/>
            <CloseBtn step = {3} href={"/flow-06/why-cancel"}/>
            <h2 className={styles.title}>Bis zum Ende der Aktion:</h2>
            <CountdownTimer />
            <div className={styles.infoSection}>                
                <span className={styles.count}>×{totalItems}</span>
                <span className={styles.order}>{orderText}</span>
                <div className={styles.totalWrap}>
                    <div className={styles.priceWrap}>
                        <span className={styles.priceText}>Preis</span>
                        <div>
                            <span className={styles.priceSum}>{totalFullPrice}</span>
                            <span className={styles.priceVal}>€</span>
                        </div>
                    </div>
                    <div className={styles.priceWithDiscountWrap}>
                    <span className={styles.priceTextDiscount}>Ihr Preis mit<br/> Rabatt</span>
                        <div>
                            <span className={styles.priceSumDiscount}>{totalDiscountPrice}</span>
                            <span className={styles.priceValDiscount}>€</span>
                        </div>
                    </div>
                </div>
            </div>
            <WhiteBtn marginTop = "20px" onClick={goToNextStep}>ZUM RABATTPREIS KAUFEN</WhiteBtn>
                <div className={styles.progressBars}>                    
                    <div className={styles.bar}></div>
                    <div className={classNames(styles.bar, styles.filled)}></div>
                    <div className={styles.bar}></div>
                    <div className={styles.bar}></div>
                </div>
        </QuizWrap>
    )
}
