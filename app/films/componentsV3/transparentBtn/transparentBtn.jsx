import styles from "./transparentBtn.module.css"

export default function TranspBtn ({ children, marginTop, onClick }) {
    return (
        <div className={styles.btn} style={ { marginTop: marginTop} } onClick={onClick}>{children}</div>
    )
}
