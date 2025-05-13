import styles from "./Explanation.module.css";
import Button from "../button/button";

import Link from "next/link";
import Image from "next/image";

export default function Explanation({ href, flow }) {
  return (
    <div className={styles.container}>
      <Button href={href} dataBlock={"Feedback section"}>
        Jetzt kaufen
      </Button>
      <p className={styles.text}>
        *Vergleich basiert auf einer Expertenbewertung der potenziellen Kosten
        für einen Display-Austausch im Schadensfall. Tatsächliche Einsparungen
        können je nach Modell, Garantiebedingungen und weiteren Faktoren
        variieren.
      </p>
      <div className={styles.linksWrap}>
        <Link href={`/${flow}/privacy-statement`} className={styles.links}>
          Datenschutzerklärung
        </Link>
        <Link href={`/${flow}/cookie-files-policy`} className={styles.links}>
          Verwendung von Cookies
        </Link>
        <Link href={`/${flow}/terms-of-use`} className={styles.links}>
          Nutzungsbedingungen
        </Link>
      </div>
      <div className={styles.footerLogoWrap}>
        <div className={styles.imgWrap}>
          <Image
            src="/images/filmsV3/09_lapa.svg"
            alt="lapa"
            width={57}
            height={55}
          />
        </div>
        <p className={styles.logoText}>2025</p>
      </div>
    </div>
  );
}
