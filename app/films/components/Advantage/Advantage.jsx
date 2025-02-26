import styles from "./Advantage.module.css"
import SectionTitle from "../sectionTitle/sectionTitle"
import Button from "../button/button"

export default function AdvantageSection ({title, bgImage, href}) {
    return (
        <div className={styles.container} style={{backgroundImage: `url(${bgImage})`}}>
            <SectionTitle align={'left'}>{title}</SectionTitle>
            <Button href={href}>SCHÜTZE DEINEN TV!</Button>
        </div>
    )
}