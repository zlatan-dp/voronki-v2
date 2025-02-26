"use client";

import { useState } from "react"
import styles from "./Faq.module.css"
import Image from "next/image"

import { FaqData } from "./FaqData"
import SectionTitle from "../sectionTitle/sectionTitle"

export default function Faq () {
    // const [openIndex, setOpenIndex] = useState(null);

    // const toggleFaq = (id) => {
    //     setOpenIndex(openIndex === id ? null : id)
    // }

    const [openIndex, setOpenIndex] = useState([]);

    const toggleFaq = (index) => {
      setOpenIndex((prev) =>
        prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
      );
    };

    return (
        <div className={styles.container}>
            <SectionTitle align={'left'}>FAQ</SectionTitle>
            <ul className={styles.faqList}>
                {FaqData.map(({id, question, answer}) => (
                    // <li key={id} className={`${styles.faqItem} ${openIndex === id ? styles.open : ""}`}>
                    <li key={id} className={`${styles.faqItem} ${openIndex.includes(id) ? styles.open : ""}`}>
                    <div className={styles.faqQuestionWrap} onClick={() => toggleFaq(id)}>
                        <p className={styles.faqQuestion}>{question}</p>
                        <div className={styles.faqQuestionIcon}>
                            <Image src='./images/faq-arrow.svg'
                                alt="logo" 
                                width={24} 
                                height={24}/>
                        </div>
                    </div>
                    <p className={styles.faqAnswer}>{answer}</p>
                </li>
                ))}
                
            </ul>
        </div>
    )
}