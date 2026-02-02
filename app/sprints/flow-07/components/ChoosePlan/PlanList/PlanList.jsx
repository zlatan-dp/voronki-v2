import styles from "./PlanList.module.css";

import Image from "next/image";

export default function PlanList({ plans = [] }) {
  return (
    <ul className={styles.planList}>
      {plans.map(({ id, img, title, description, info }) => {
        return (
          <li key={id}>
            <div className={styles.inputWrap}>
              <div className={styles.mainWrap}>
                <div className={styles.packageInfoWrap}>
                  <div className={styles.packageTitleWrap}>
                    <div className={styles.packageImg}>
                      <Image
                        src={img}
                        alt="logo"
                        width={34}
                        height={24}
                        quality={100}
                      />
                    </div>
                    <p className={styles.packageTitle}>{title}</p>
                  </div>
                  <p className={styles.packageDescription}>{description}</p>
                </div>
              </div>

              {info && (
                <ul className={styles.infoList}>
                  {info.map(({ id, textBold, text }) => {
                    return (
                      <li key={id} className={styles.infoItem}>
                        <p className={styles.infoText}>
                          <span style={{ fontWeight: 600 }}>{textBold}</span>{" "}
                          {text}
                        </p>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          </li>
        );
      })}
    </ul>
  );
}
