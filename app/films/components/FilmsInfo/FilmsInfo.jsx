import styles from "./FilmsInfo.module.css"
import Image from "next/image"

import {FilmsData} from './FilmsInfoData'

export default function FilmsInfo() {

    return (
        <div className={styles.container}>
            <ul>
                {FilmsData.map(({id, img, title, subTitle, text }) => (
                    <li key={id} className={styles.filmsInfoItem}>
                        <div className={styles.infoWrap}>
                            <div className={styles.iconWrap}>
                                <Image src={img}
                                    alt="logo" 
                                    width={96} 
                                    height={96}/>
                                                                      
                            </div>
                            <div>
                                <p className={styles.title}>{title}</p>
                                <p className={styles.subTitle}>{subTitle}</p>
                                <p className={styles.text}>{text}</p>
                            </div>
                        </div>
                    </li>
                ))}                
            </ul>
        </div>
    )
}