import styles from "./FaqList.module.css";

import { FaqData } from "./FaqData";
import { useState } from "react";

export default function FaqList() {
  const [openIndex, setOpenIndex] = useState([]);
  const toggleFaq = (index) => {
    setOpenIndex((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <ul className={styles.faqList}>
      {FaqData.map(({ id, question, answer }) => (
        <li
          className={`${styles.faqItem} ${
            openIndex.includes(id) ? styles.open : ""
          }`}
          key={id}
        >
          <div className={styles.faqQuestionWrap} onClick={() => toggleFaq(id)}>
            <p className={styles.faqQuestion}>{question}</p>
            <span className={styles.faqIcon}>+</span>
          </div>
          <p className={styles.faqAnswer}>{answer}</p>
        </li>
      ))}
    </ul>
  );
}
