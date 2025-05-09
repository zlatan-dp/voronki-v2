import styles from "./EasyInstall.module.css"
import Image from "next/image"
import classNames from "classnames"

import SectionTitle from "../sectionTitle/sectionTitle"
import Button from "../button/button"

export default function EasyInstallSection ({href}) {
    return (
        <div className={styles.container}>
            <SectionTitle align={'center'}>Leicht und schnell anzubringen</SectionTitle>
            <div className={styles.contentWrap}>
                <div className={styles.elementWrap}>
                    <div className={styles.iconWrapFirst}>
                        <Image src="/images/filmsV2/easy_icon_1.svg"
                                        alt="icon"
                                        width={53}
                                        height={65}/>
                    </div>
                    <p className={classNames(styles.text, styles.textFirst)}>Montage in 15<br/>Minuten</p>
                </div>
                <div className={styles.elementWrap}>
                    <div className={styles.iconWrapSecond}>
                        <Image src="/images/filmsV2/easy_icon_2.svg"
                                        alt="icon"
                                        width={65}
                                        height={65}/>
                    </div>
                    <p className={classNames(styles.text, styles.textSecond)}>Alles Nötige<br/>in der Box</p>
                </div>
                <div className={styles.elementWrap}>
                    <div className={styles.iconWrapThird}>
                        <Image src="/images/filmsV2/easy_icon_3.svg"
                                        alt="icon"
                                        width={65}
                                        height={65}/>
                    </div>
                    <p className={classNames(styles.text, styles.textThird)}>Detaillierte<br/>Videoanleitung</p>
                </div>
            </div>
            <Button href={href} dataBlock={'Easy install section'}>JETZT SCHUTZ WÄHLEN</Button>
        </div>
    )
}

// {classNames(styles.bar, styles.filled)}