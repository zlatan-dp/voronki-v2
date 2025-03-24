import styles from './LandingWrap.module.css'

export default function LandingWrap({children}) {
    return(
        <div className={styles.wrapper}>{children}</div>
    )
}