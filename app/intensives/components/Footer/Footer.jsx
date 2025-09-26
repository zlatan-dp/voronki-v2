import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer>
      <div className={styles.container}>
        <div className={styles.privacyWrap}>
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.privacyLink}
          >
            Terms of use
          </a>
          <p className={styles.privacyDecor}>•</p>
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.privacyLink}
          >
            Privacy policy
          </a>
          <p className={styles.privacyDecor}>•</p>
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.privacyLink}
          >
            Subscription policy
          </a>
        </div>
      </div>
    </footer>
  );
}
