import styles from "./PlanList.module.css";

import { useTimer } from "../../../../actions/useTimerContext";
import Image from "next/image";

export default function PlanList({ plans = [], selectedId, onSelect }) {
  const { minutes, seconds, timerActive } = useTimer();

  if (timerActive === null) return null;

  return (
    <ul className={styles.planList}>
      {plans.map(
        ({
          id,
          type,
          duration,
          durationInfo,
          days,
          totalPrice,
          currency,
          priceInfo,
          packageText,
          packages,
        }) => {
          if (type === "usual" && timerActive) return null;
          if (type === "special" && !timerActive) return null;

          const isActive = selectedId === id;
          const perDay = (totalPrice / days).toFixed(2);
          const [dollars, cents] = perDay.split(".");

          return (
            <li key={id}>
              <div
                className={`${styles.inputWrap} ${
                  isActive ? styles.active : ""
                }`}
                onClick={() => onSelect(id)}
              >
                <div className={styles.priceInfoWrap}>
                  <div className={styles.durationWrap}>
                    <p className={styles.duration}>{duration}</p>
                    {durationInfo && (
                      <p className={styles.durationInfo}>{durationInfo}</p>
                    )}
                    <div className={styles.priceWithTimer}>
                      <p className={styles.totalPrice}>
                        {currency}
                        {totalPrice.toFixed(2)}
                        <br />
                        {priceInfo && (
                          <span className={styles.priceInfo}>{priceInfo}</span>
                        )}
                      </p>
                      {timerActive && id === 1 && (
                        <span className={styles.specialTimer}>
                          {String(minutes).padStart(2, "0")}:
                          {String(seconds).padStart(2, "0")}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className={styles.priceDayWrapWithTimer}>
                    <div className={styles.priceDayWrap}>
                      <p className={styles.currency}>{currency}</p>
                      <p className={styles.price}>{dollars}</p>
                      <div className={styles.priceDay}>
                        <p className={styles.cents}>{cents}</p>
                        <p className={styles.perDay}>
                          per
                          <br />
                          day
                        </p>
                      </div>
                    </div>
                    {timerActive && id === 2 && (
                      <span className={styles.specialTimer}>
                        {String(minutes).padStart(2, "0")}:
                        {String(seconds).padStart(2, "0")}
                      </span>
                    )}
                  </div>
                </div>

                {packages && (
                  <div className={styles.packageWrap}>
                    {packageText && (
                      <p className={styles.packageText}>{packageText}</p>
                    )}
                    <ul className={styles.packageList}>
                      {packages.map(({ id, img, title, description }) => {
                        return (
                          <li key={id} className={styles.packageItem}>
                            <div className={styles.packageImg}>
                              <Image
                                src={img}
                                alt="logo"
                                width={34}
                                height={24}
                                quality={100}
                              />
                            </div>
                            <div className={styles.packageTextWrap}>
                              <p className={styles.packageTitle}>{title}</p>
                              <p className={styles.packageText}>
                                {description}
                              </p>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                )}
              </div>
            </li>
          );
        },
      )}
    </ul>
  );
}
