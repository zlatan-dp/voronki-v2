"use client"

import styles from "./politicsText.module.css"

export default function PoliticsText({children}) {
    return (
        <p className={styles.text}>{children}</p>
    )
}