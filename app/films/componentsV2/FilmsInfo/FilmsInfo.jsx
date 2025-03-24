import styles from "./FilmsInfo.module.css"
import Image from "next/image"

import SectionTitle from "../sectionTitle/sectionTitle";
import Button from "../button/button";
import {FilmsData} from './FilmsInfoData'

export default function FilmsInfo({href}) {

    return (
        <div className={styles.container}>
            <SectionTitle align="center">Eigenschaften <br/>der Schutzfolie</SectionTitle>
            <ul className={styles.list}>
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
            <Button href={href} dataBlock={'Films Info section'}>Schutzfolie wählen</Button>
        </div>
    )
}