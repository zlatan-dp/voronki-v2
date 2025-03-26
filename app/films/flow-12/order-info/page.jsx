"use client";

import styles from "./page.module.css";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { getCurrentTime } from "../../actions/saveToStorage";
import { useCurrentFlow } from "../../actions/getCurrentFlow";

import classNames from "classnames";

import QuizWrap from "../../componentsV2/QuizWrap/QuizWrap";
import CloseBtn from "../../componentsV2/closeBtn/closeBtn";
import BackBtn from "../../componentsV2/backBtn/backBtn";
import CountdownTimer from "./timer/Timer";
import WhiteBtn from "../../componentsV2/whiteBtn/whiteBtn";
import { nextStep } from "../../../actions/steps-client.action";

export default function OrderInformation() {
  const currentFlow = useCurrentFlow();

  const router = useRouter();
  const [selectedFilms, setSelectedFilms] = useState([]);
  const [isClient, setIsClient] = useState(false);

  const prices = {
    "32t": { full: 34, discount: 17 },
    "43t": { full: 50, discount: 25 },
    "50t": { full: 70, discount: 35 },
    "55t": { full: 78, discount: 39 },
    "65t": { full: 90, discount: 45 },
    "24m": { full: 18, discount: 9 },
    "27m": { full: 28, discount: 14 },
    "32m": { full: 34, discount: 17 },
  };

  useEffect(() => {
    setIsClient(true);
    const savedFilms = localStorage.getItem("selectedProtectionFilmsKivi");
    if (savedFilms) {
      setSelectedFilms(JSON.parse(savedFilms));
    }
  }, []);

  const calculateTotalPrice = () => {
    let totalFullPrice = 0;
    let totalDiscountPrice = 0;
    // console.log(selectedFilms);

    selectedFilms.forEach(({ id, count }) => {
      if (prices[id]) {
        totalFullPrice += prices[id].full * count;
        totalDiscountPrice += prices[id].discount * count;
      }
    });

    return { totalFullPrice, totalDiscountPrice };
  };

  if (!isClient) return null;

  const totalItems = selectedFilms.reduce((sum, film) => sum + film.count, 0);
  const orderText = selectedFilms.map(({ label }, index) => (
    <div key={index} className={styles.inlineBlock}>
      KIVI Film {label}
      {index < selectedFilms.length - 1 && " + "}
    </div>
  ));
  const { totalFullPrice, totalDiscountPrice } = calculateTotalPrice();

  const goToNextStep = async () => {
    await nextStep({
      step: 3,
      type: "info",
      question: "order info",
      answer: "next",
      time: await getCurrentTime(),
    });
    router.push(`/films/${currentFlow}/information`);
  };

  return (
    <QuizWrap>
      <BackBtn step={3} href={`/films/${currentFlow}`} />
      <CloseBtn step={3} href={`/films/${currentFlow}/why-cancel`} />
      <h2 className={styles.title}>Bis zum Ende der Aktion:</h2>
      <CountdownTimer />
      <div className={styles.infoSection}>
        <div className={styles.count}>×{totalItems}</div>
        <div className={styles.order}>{orderText}</div>
        <div className={styles.totalWrap}>
          <div className={styles.priceWrap}>
            <span className={styles.priceText}>Preis</span>
            <div>
              <span className={styles.priceSum}>{totalFullPrice}</span>
              <span className={styles.priceVal}>€</span>
            </div>
          </div>
          <div className={styles.priceWithDiscountWrap}>
            <span className={styles.priceTextDiscount}>
              Ihr Preis mit
              <br /> Rabatt
            </span>
            <div>
              <span className={styles.priceSumDiscount}>
                {totalDiscountPrice}
              </span>
              <span className={styles.priceValDiscount}>€</span>
            </div>
          </div>
        </div>
      </div>
      <WhiteBtn marginTop="20px" onClick={goToNextStep}>
        ZUM RABATTPREIS KAUFEN
      </WhiteBtn>
      <div className={styles.progressBars}>
        <div className={styles.bar}></div>
        <div className={classNames(styles.bar, styles.filled)}></div>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
      </div>
    </QuizWrap>
  );
}
