import styles from "./HeroSection.module.css"
import Image from "next/image"

import Button from "../button/button"

export default function Hero({href}) {
    return (
        <div className={styles.container}>
            <div className={styles.heroInfo}>
                <p className={styles.mainText}>günstiger</p>
                <p className={styles.infoText}>als ein Bildschirm-Austausch!</p>
            </div>
            <div className={styles.imgWrap}>
                <Image src="/images/hero_text.svg"
                alt="logo"
                width={320}
                height={170}
                style={{ width: "100%", height: "auto" }} />
            </div>
            <Button href={href}>Schutzfolie wählen</Button>
            <div className={styles.arrows}></div>
        </div>   
    )
}