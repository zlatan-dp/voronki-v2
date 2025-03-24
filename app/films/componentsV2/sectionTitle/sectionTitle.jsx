import styles from "./sectionTitle.module.css"

export default function SectionTitle( {children, align} ) {
    return (
        <h2 className={styles.title} style={{ textAlign: align}}>{children}</h2>
    )
}