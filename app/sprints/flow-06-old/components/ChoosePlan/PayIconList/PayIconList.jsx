import styles from "./PayIconList.module.css";

import Image from "next/image";

export default function PayIconsList() {
  return (
    <ul className={styles.payIconList}>
      <li className={styles.payIconItem}>
        <Image
          src="/images/intensives/choose-plan/01-payPal.svg"
          alt="paypal"
          width={34}
          height={24}
          quality={100}
        />
      </li>
      <li className={styles.payIconItem}>
        <Image
          src="/images/intensives/choose-plan/02-applePay.svg"
          alt="applePay"
          width={34}
          height={24}
          quality={100}
        />
      </li>
      <li className={styles.payIconItem}>
        <Image
          src="/images/intensives/choose-plan/03-googlePay.svg"
          alt="googlePay"
          width={34}
          height={24}
          quality={100}
        />
      </li>
      <li className={styles.payIconItem}>
        <Image
          src="/images/intensives/choose-plan/04-visa.svg"
          alt="visa"
          width={34}
          height={24}
          quality={100}
        />
      </li>
      <li className={styles.payIconItem}>
        <Image
          src="/images/intensives/choose-plan/05-masterCard.svg"
          alt="masterCard"
          width={34}
          height={24}
          quality={100}
        />
      </li>
      <li className={styles.payIconItem}>
        <Image
          src="/images/intensives/choose-plan/06-maestro.svg"
          alt="maestro"
          width={34}
          height={24}
          quality={100}
        />
      </li>
      <li className={styles.payIconItem}>
        <Image
          src="/images/intensives/choose-plan/07-discover.svg"
          alt="discover"
          width={34}
          height={24}
          quality={100}
        />
      </li>
      <li className={styles.payIconItem}>
        <Image
          src="/images/intensives/choose-plan/08-amex.svg"
          alt="amex"
          width={34}
          height={24}
          quality={100}
        />
      </li>
    </ul>
  );
}
