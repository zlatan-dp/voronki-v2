import styles from "./HeroSection.module.css"
import Image from "next/image"

import Button from "../button/button"

export default function Hero({href}) {
    return (
        <div className={styles.container}>
            <div className={styles.heroInfo}></div>
            <div className={styles.imgWrap}>
                <Image src="/images/filmsV2/hero_text.svg"
                alt="logo"
                width={320}
                height={170}
                style={{ width: "100%", height: "auto" }}
                />
            </div>
            <Button href={href} dataBlock={'Hero section'}>Schutzfolie wählen</Button>
            <div className={styles.arrows}></div>
        </div>   
    )
}