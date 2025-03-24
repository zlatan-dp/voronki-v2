import styles from "./Discount.module.css"
import Button from "../button/button"

export default function DiscountSection ({ href }) {
    return (
        <div className={styles.container}>
        <div className={styles.infoWrap}>
            <p className={styles.infoTitle}>Nur 10 Tage</p>
            <p className={styles.infoAccent}>50% Rabatt</p>
            <p className={styles.infoText}>Sichern Sie sich Ihr Angebot <br/>
            bis zum 01.04!</p>
            </div>         
            <Button href={href} dataBlock={'Discount section'}>Schutzfolie wählen</Button>
        </div>
    )
}