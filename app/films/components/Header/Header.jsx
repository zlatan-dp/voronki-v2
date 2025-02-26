import styles from "./Header.module.css"
import Image from "next/image"

export default function Header() {
    return (
        <div className={styles.container}>
            <div className={styles.logoWrap}>
                <Image src="/images/kivi-logo.svg"
                        alt="logo"
                        width={74}
                        height={24}/>
            </div>
        </div>
    )
}