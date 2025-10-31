"use client";

import Link from "next/link";
import styles from "./Footer.module.css";

import { usePathname } from "next/navigation";

import { useCurrentFlow } from "../../actions/getCurrentFlow";

export default function Footer() {
  const currentFlow = useCurrentFlow();
  const pathname = usePathname();

  const normalizedPath = pathname?.replace(/\/+$/ || "");
  const normalizedRooot = `/intensives/${currentFlow}`.replace(/\/+$/, "");

  const isMainPage = normalizedPath === normalizedRooot;

  return (
    <footer>
      <div className={styles.container}>
        {isMainPage && (
          <div className={styles.privacyWrap}>
            <p className={styles.privacyLink}>By continuing you agree with</p>
            <Link
              href={`/intensives/${currentFlow}/cookie-policy`}
              className={styles.privacyLinkUnderline}
            >
              Cookie policy.
            </Link>
          </div>
        )}
        <div className={styles.privacyWrap}>
          <Link
            href={`/intensives/${currentFlow}/terms-of-use`}
            className={styles.privacyLink}
          >
            Terms of use
          </Link>
          <p className={styles.privacyDecor}>•</p>
          <Link
            href={`/intensives/${currentFlow}/privacy-policy`}
            className={styles.privacyLink}
          >
            Privacy policy
          </Link>
          <p className={styles.privacyDecor}>•</p>

          <Link
            href={`/intensives/${currentFlow}/subscription-terms`}
            className={styles.privacyLink}
          >
            Subscription policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
