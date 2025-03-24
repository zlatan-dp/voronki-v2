"use client"

import { useState } from "react";

import styles from './OrderInfo.module.css'
import { availableDiagonals } from "../diagonals";

export default function OrderInfo({ index, film, onUpdate, onRemove, selectedFilms }) {
    const {id, size, type, label, count} = film
    const [showDropdown, setShowDropdown] = useState(false);
    const filteredDiagonals = availableDiagonals.filter(d => 
        !selectedFilms.some(f => f.id === d.id) // Приховуємо вибрані
    );

    return (
        <div className={styles.wrapper}>
            <div className={styles.diagonalWrap} onClick={() => setShowDropdown(!showDropdown)}>
                <div className={styles.textWrap}>
                <span className={styles.diagonalText}>{size}</span>
                <span className={styles.diagonalText}>"</span>
                <span className={styles.diagonalType}>{type}</span>
                </div>
                <span className={styles.arrow}></span>
            </div>

            {/* Дропдаун для вибору діагоналі */}
            {showDropdown && filteredDiagonals.length > 0 && (
                <div className={styles.dropdown}>
                    {filteredDiagonals.map(d => (
                        <div
                            key={d.id}
                            className={styles.dropdownItem}
                            onClick={() => {
                                onUpdate(index, { id: d.id, size: d.size, type: d.type, label: d.label });
                                setShowDropdown(false);
                            }}
                        >
                            {d.label}
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
                onClick={() => count < 33 && onUpdate(index, { count: count + 1 })}>
                    <path d="M12 6.5V17.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M17.5 12L6.5 12" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
            </div>

            {/* Кнопка видалення (показується, якщо можна видалити) */}
            {onRemove && <div className={styles.delIcon} onClick={onRemove}></div>}
        </div>
    )
}


