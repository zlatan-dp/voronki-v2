import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>

        <div className={styles.ctas}>
          <a href="/step/1">
            <button className={'center'}>Start</button>
          </a>
        </div>
      </main>
    </div>
  );
}
