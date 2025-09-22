import styles from "./Header.module.css";
// import Image from "next/image";

export default function Header() {
  return (
    <div className={styles.container}>
      <p className={styles.logoText}>Page Header</p>
    </div>
  );
}
