import styles from "./Discount.module.css";
import Button from "../button/button";
import CountdownTimerNew from "../timerV3/timerV3";

export default function DiscountSection({ href }) {
  return (
    <div className={styles.container}>
      <div className={styles.infoWrap}>
        <CountdownTimerNew />
        <div>
          <p className={styles.infoTitle}>Nur 10 Tage</p>
          <p className={styles.infoAccent}>50% Rabatt</p>
          <p className={styles.infoText}>
            Sichern Sie sich Ihr Angebot <br />
            bis zum 01.06!
          </p>
        </div>
        <Button href={href} dataBlock={"Discount section"} variant="red">
          Jetzt kaufen
        </Button>
      </div>
    </div>
  );
}
