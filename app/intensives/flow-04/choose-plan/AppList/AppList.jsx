import Stars from "../Stars/Stars";
import styles from "./AppList.module.css";

import Image from "next/image";

export default function AppList() {
  return (
    <div className={styles.appWrap}>
      <h3 className={styles.blockTitle}>People love the ChatMind app</h3>
      <p>
        Become a member of our global community of{" "}
        <span className={styles.accent}>400k+ people</span>
      </p>
      <div className={styles.appsWrap}>
        <div className={styles.appsItem}>
          <div className={styles.appType}>
            <div className={styles.raitingApple}>4.7</div>
            <div className={styles.logoWrap}>
              <Image
                src="/images/intensives/choose-plan/appStore.svg"
                alt="applePay"
                width={31}
                height={31}
                quality={100}
              />
            </div>
          </div>
          <Stars percent={92} />
          <p className={styles.raitingText}>109K ratings</p>
        </div>
        <div className={styles.appsItem}>
          <div className={styles.appType}>
            <div className={styles.raitingGoogle}>4.5</div>
            <div className={styles.logoWrap}>
              <Image
                src="/images/intensives/choose-plan/googlePlay.svg"
                alt="googlePay"
                width={31}
                height={31}
                quality={100}
              />
            </div>
          </div>
          <Stars percent={89} />
          <p className={styles.raitingText}>147K ratings</p>
        </div>
      </div>
    </div>
  );
}
