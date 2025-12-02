import styles from "./PlanList.module.css";

export default function PlanList({
  plans = [],
  selectedId,
  onSelect,
  timerActive,
  theme = "light",
}) {
  return (
    <ul className={`${styles.planList} ${theme === "dark" && styles.dark} `}>
      {plans.map(
        ({ id, duration, days, totalPrice, currency, save, discountPrice }) => {
          const isActive = selectedId === id;
          const perDay = timerActive
            ? (discountPrice / days).toFixed(2)
            : (totalPrice / days).toFixed(2);
          return (
            <li key={id}>
              <div
                className={`${styles.inputWrap} ${
                  isActive ? styles.active : ""
                }`}
                onClick={() => onSelect(id)}
              >
                <div className={styles.durationWrap}>
                  <div className={styles.durationSave}>
                    <p className={styles.duration}>{duration}</p>
                    {timerActive && <span className={styles.save}>{save}</span>}
                  </div>
                  {timerActive ? (
                    <div className={styles.discountPriceWrap}>
                      <p className={styles.totalPriceLine}>
                        {currency}
                        {totalPrice}
                      </p>
                      <span className={styles.arrow}>➜</span>
                      <p className={styles.totalPrice}>
                        {currency}
                        {discountPrice}
                      </p>
                    </div>
                  ) : (
                    <p className={styles.totalPrice}>
                      {currency}
                      {totalPrice}
                    </p>
                  )}
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
        }
      )}
    </ul>
  );
}
