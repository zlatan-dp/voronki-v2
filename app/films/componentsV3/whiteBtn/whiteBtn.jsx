import styles from "./whiteBtn.module.css"

export default function WhiteBtn ({ children, marginTop, onClick }) {
    return (
        <div className={styles.btn} style={ { marginTop: marginTop}} onClick={onClick}>{children}</div>
    )
}