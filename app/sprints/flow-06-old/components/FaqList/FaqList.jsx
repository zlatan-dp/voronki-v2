import styles from "./FaqList.module.css";

import { FaqData } from "./FaqData";
import { useState } from "react";

import BlockWrap from "../../../components/blockWrap/blockWrap";
import SectionTitle from "../../../components/sectionTitle/sectionTitle";

export default function FaqList() {
  const [openIndex, setOpenIndex] = useState([]);
  const toggleFaq = (index) => {
    setOpenIndex((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <BlockWrap>
      <SectionTitle>FAQ</SectionTitle>
      <ul className={styles.faqList}>
        {FaqData.map(({ id, question, answer }) => (
          <li
            className={`${styles.faqItem} ${
              openIndex.includes(id) ? styles.open : ""
            }`}
            key={id}
          >
            <div
              className={styles.faqQuestionWrap}
              onClick={() => toggleFaq(id)}
            >
              <p className={styles.faqQuestion}>{question}</p>
              <div className={styles.faqIconWrap}>
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={styles.faqIcon}
                >
                  <rect
                    x="-0.6"
                    y="-0.6"
                    width="30.8"
                    height="30.8"
                    rx="15.4"
                    transform="matrix(0 -1 -1 0 30.8 30.8)"
                    stroke="#364153"
                    strokeWidth="1.2"
                  />
                  <path
                    d="M22.2217 14.2215L15.9995 20.4437L9.77724 14.2215"
                    stroke="#364153"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>
            <p className={styles.faqAnswer}>{answer}</p>
          </li>
        ))}
      </ul>
    </BlockWrap>
  );
}
