"use client";

import styles from "./Reliability.module.css"
import Image from "next/image"

import {ReliabilityData} from './ReliabilityData'
import SectionTitle from "../sectionTitle/sectionTitle"
import Button from "../button/button";


export default function Realiability({href}) {
    return(
        <div className={styles.container}>
            <SectionTitle align={'center'}>Die Folie schützt den Bildschirm vor</SectionTitle>
            <ul className={styles.list}>
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
            <Button href={href} dataBlock={'Realiability section'}>Schutzfolie wählen</Button>            
        </div>
    )
}