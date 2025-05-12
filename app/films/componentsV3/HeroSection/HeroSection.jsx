import styles from "./HeroSection.module.css";
import Image from "next/image";

import Button from "../button/button";

export default function Hero({ href }) {
  return (
    <div className={styles.container}>
      <div className={styles.heroInfo}>
        <div className={styles.mainTextWrap}>
          <h2 className={styles.mainTitle}>Schutzfolie</h2>
          <h3 className={styles.mainText}>
            für Ihren Fernseher: klar, robust, unauffällig.
          </h3>
        </div>

        <p className={styles.text}>
          15 minuten — und der Bildschirm ist geschützt!
        </p>
        <div className={styles.btnsWrap}>
          <Button href={href} dataBlock={"Hero section"} variant="blue">
            <span className={styles.rabatText}>
              <span className={styles.rabatPercent}>−50%</span> RABAT
            </span>
          </Button>
          <Button href={href} dataBlock={"Hero section"}>
            Jetzt kaufen
          </Button>
        </div>
      </div>
    </div>
  );
}
