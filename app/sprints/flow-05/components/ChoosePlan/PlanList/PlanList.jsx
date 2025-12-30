import styles from "./PlanList.module.css";

import { useTimer } from "../../../../actions/useTimerContext";

export default function PlanList({
  plans = [],
  selectedId,
  onSelect,
  theme = "light",
}) {
  const { minutes, seconds, timerActive } = useTimer();
  return (
    <ul className={`${styles.planList} ${theme === "dark" && styles.dark} `}>
      {plans.map(({ id, duration, days, totalPrice, currency }) => {
        if (id === 1 && !timerActive) return null;

        const isActive = selectedId === id;
        const perDay = (totalPrice / days).toFixed(2);
        return (
          <li key={id}>
            <div
              className={`${styles.inputWrap} ${isActive ? styles.active : ""}`}
              onClick={() => onSelect(id)}
            >
              <div className={styles.durationWrap}>
                <p className={styles.duration}>{duration}</p>
                <div className={styles.priceWithTimer}>
                  <p className={styles.totalPrice}>
                    {currency}
                    {totalPrice.toFixed(2)}
                  </p>
                  {timerActive && id === 1 && (
                    <span className={styles.specialTimer}>
                      {String(minutes).padStart(2, "0")}:
                      {String(seconds).padStart(2, "0")}
                    </span>
                  )}
                </div>
              </div>
              <div className={styles.priceDayWrap}>
                <div className={styles.priceDay}>
                  <p className={styles.currency}>{currency}</p>
                  <p className={styles.perDayPrice}>{perDay}</p>
                </div>
                <p className={styles.perDay}>per day</p>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
