import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer>
      <div className={styles.container}>
        <div className={styles.privacyWrap}>
          <Link
            href={"/intensives/flow-01/terms-of-use"}
            className={styles.privacyLink}
          >
            Terms of use
          </Link>
          <p className={styles.privacyDecor}>•</p>
          <Link
            href={"/intensives/flow-01/privacy-policy"}
            className={styles.privacyLink}
          >
            Privacy policy
          </Link>
          <p className={styles.privacyDecor}>•</p>

          <Link
            href={"/intensives/flow-01/subscription-terms"}
            className={styles.privacyLink}
          >
            Subscription policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
