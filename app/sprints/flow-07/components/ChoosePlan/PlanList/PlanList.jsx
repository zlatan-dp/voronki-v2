import { useState } from "react";
import styles from "./PlanList.module.css";

import Image from "next/image";

export default function PlanList({ plans = [] }) {
  const [openPackage, setOpenPackage] = useState([]);
  const togglePackage = (index) => {
    setOpenPackage((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index],
    );
  };
  return (
    <ul className={styles.planList}>
      {plans.map(({ id, img, title, description, info }) => {
        return (
          <li key={id}>
            <div
              className={`${styles.inputWrap} ${openPackage.includes(id) ? styles.open : ""}`}
            >
              <div
                className={styles.mainWrap}
                onClick={() => togglePackage(id)}
              >
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
                <div className={styles.packageIconWrap}>
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={styles.packageIcon}
                  >
                    <rect
                      x="-0.6"
                      y="-0.6"
                      width="30.8"
                      height="30.8"
                      rx="15.4"
                      transform="matrix(0 -1 -1 0 30.8 30.8)"
                      stroke="#4a4cbd"
                      strokeWidth="1.2"
                    />
                    <path
                      d="M22.2217 14.2215L15.9995 20.4437L9.77724 14.2215"
                      stroke="#4a4cbd"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
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
