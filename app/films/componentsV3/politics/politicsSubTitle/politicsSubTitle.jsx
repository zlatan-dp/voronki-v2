"use client"

import styles from "./politicsSubTitle.module.css"

export default function PoliticsSubTitle({children}) {
    return (
        <h3 className={styles.subTitle}>{children}</h3>
    )
}