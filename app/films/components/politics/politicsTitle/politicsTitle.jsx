"use client"

import styles from "./politicsTitle.module.css"

export default function PoliticsTitle({children}) {
    return (
        <h2 className={styles.title}>{children}</h2>
    )
}