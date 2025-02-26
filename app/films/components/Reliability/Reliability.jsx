"use client";

import styles from "./Reliability.module.css"
import Image from "next/image"

import {ReliabilityData} from './ReliabilityData'
import SectionTitle from "../sectionTitle/sectionTitle"

export default function Realiability() {
    return(
        <div className={styles.container}>
            <SectionTitle align={'center'}>ZUVERLÄSSIGER<br/>SCHUTZ VOR:</SectionTitle>
            <ul style={{marginTop: "30px"}}>
                {ReliabilityData.map(({id, img, title, text }) => (
                        <li key={id} className={styles.realiabilityInfoItem}>
                            <div className={styles.infoWrap}>
                                <div className={styles.iconWrap}>
                                    <Image src={img}
                                        alt="logo" 
                                        width={54} 
                                        height={54}/>                                                                        
                                </div>
                                <div>
                                    <p className={styles.title}>{title}</p>
                                    <p className={styles.text}>{text}</p>
                                </div>
                            </div>
                        </li>
                    ))}
            </ul>
        </div>
    )
}