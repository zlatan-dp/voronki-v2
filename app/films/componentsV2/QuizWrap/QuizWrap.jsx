import styles from "./QuizWrap.module.css";

export default function QuizWrap({children}) {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>{children}</div>
        </div>
    )
}