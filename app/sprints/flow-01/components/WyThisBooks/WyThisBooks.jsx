import BlockWrap from "../../../components/blockWrap/blockWrap";
import SectionTitle from "../../../components/sectionTitle/sectionTitle";

import styles from "./WyThisBooks.module.css";

import { BookData } from "../BookList/bookData";

import { useState, useEffect } from "react";

export default function WyThisBooks() {
  const [books, setBooks] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem("ChatMNDBookSet");

    const q40Answer = stored ? Number(stored) : null;

    if (q40Answer !== null) {
      const found = BookData.find((book) => book.id === q40Answer);
      setBooks(found);
    }
  }, []);

  return (
    <BlockWrap padding={"big"}>
      <SectionTitle>Why These 5 Books?</SectionTitle>
      <p className={styles.text}>
        These are the world’s most influential books on{" "}
        <span className={styles.bold}>{books?.category}</span> — proven,
        research-backed, and trusted by millions.
      </p>
      <p className={styles.text}>
        But <span className={styles.bold}>most people never finish them</span>,
        not because they don’t want to, but{" "}
        <span className={styles.bold}>because life is busy</span>.
      </p>
      <p className={styles.text}>
        A 300–400-page book often{" "}
        <span className={styles.bold}>takes months to complete</span>— and even
        longer to turn into real change.
      </p>
    </BlockWrap>
  );
}
