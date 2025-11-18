import styles from "./BenefitsList.module.css";

import { BenefitsData } from "./BenefitsData";

export default function BenefitsList() {
  return (
    <div className={styles.benefitsWrap}>
      <h3 className={styles.blockTitle}>What you get with ChatMND</h3>
      <ul className={styles.benefitsList}>
        {BenefitsData.map(({ id, text }) => (
          <li className={styles.benefitsItem} key={id}>
            {text}
          </li>
        ))}
      </ul>
    </div>
  );
}
