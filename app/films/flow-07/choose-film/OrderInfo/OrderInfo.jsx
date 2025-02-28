import { useState } from "react";

import styles from './OrderInfo.module.css'

export default function OrderInfo({ index, diagonal, count, onUpdate, onRemove, selectedFilms }) {
    const [showDropdown, setShowDropdown] = useState(false);
    // const availableDiagonals = [32, 43, 50, 55, 65];
    const availableDiagonals = [32, 43, 50, 55, 65].filter(d => 
        !selectedFilms.some(f => f.diagonal === d) // Приховуємо вибрані
    );

    return (
        <div className={styles.wrapper}>
            <div className={styles.diagonalWrap} onClick={() => setShowDropdown(!showDropdown)}>
                <span className={styles.diagonalText}>{diagonal}</span>
                <span className={styles.diagonalText}>"</span>
                <span className={styles.arrow}></span>
            </div>

            {/* Дропдаун для вибору діагоналі */}
            {showDropdown && availableDiagonals.length > 0 && (
                <div className={styles.dropdown}>
                    {availableDiagonals.map(size => (
                        <div
                            key={size}
                            className={styles.dropdownItem}
                            onClick={() => {
                                onUpdate(index, { diagonal: size });
                                setShowDropdown(false);
                            }}
                        >
                            {size}"
                        </div>
                    ))}
                </div>
            )}

            <div className={styles.xIcon}></div>

            {/* Вибір кількості */}
            <div className={styles.countWrap}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                onClick={() => count > 1 && onUpdate(index, { count: count - 1 })}
                style={{ opacity: count > 1 ? 1 : 0.25, cursor: count > 1 ? "pointer" : "default" }}>
                    <path d="M17.5 12L6.5 12" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                <span className={styles.countText}>{count}</span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.plus}
                onClick={() => onUpdate(index, { count: count + 1 })}>
                    <path d="M12 6.5V17.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M17.5 12L6.5 12" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
            </div>

            {/* Кнопка видалення (показується, якщо можна видалити) */}
            {onRemove && <div className={styles.delIcon} onClick={onRemove}></div>}
        </div>
    )
}