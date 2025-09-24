"use client";

import { useEffect, useState, useRef, useMemo } from "react";
import styles from "./SequentialProgressList.module.css"; // або шлях до твого модуля
import SubmitBtn from "../submitBtn/SubmitBtn";

/**
 * Props:
 * - items: [{ id, text, target }]        // target 0..100
 * - duration: number (ms)                // як довго заповнюється одна смужка
 * - staggerDelay: number (ms)            // затримка між стартом смуг
 * - onContinue: function(payload)        // викликається при Continue
 * - requireAll: boolean (default true)   // чи кнопка активується коли всі =100
 */

export default function SequentialProgressList({
  items = [],
  duration = 900,
  staggerDelay = 300,
  onContinue,
  requireAll = true,
}) {
  // локальний стан прогресу для кожної смуги
  const [progresses, setProgresses] = useState(() =>
    items.map((it) => ({ id: it.id, current: 0, target: it.target ?? 100 }))
  );

  const rafRef = useRef(null);
  const startTimesRef = useRef([]);

  // чи всі смуги завершені (>=100)
  const allCompleted = useMemo(
    () => progresses.every((p) => Math.round(p.current) >= 100),
    [progresses]
  );

  useEffect(() => {
    // встановлюємо індивідуальний старт для кожної смуги: now + idx*staggerDelay
    const now = performance.now();
    startTimesRef.current = items.map((_, idx) => now + idx * staggerDelay);

    const animate = (nowTs) => {
      setProgresses((prev) =>
        prev.map((p, idx) => {
          const startAt = startTimesRef.current[idx];
          const elapsed = nowTs - startAt; // може бути <0 до старту
          const t = Math.max(0, Math.min(1, elapsed / duration)); // 0..1
          // easing: easeOutCubic
          const eased = 1 - Math.pow(1 - t, 3);
          const value = Math.min(p.target, Math.round(p.target * eased));
          return { ...p, current: value };
        })
      );

      // вирішуємо, чи продовжувати RAF:
      // продовжуємо, якщо хоча б одна смуга ще не досягла своєї цілі або ще не почалась
      const unfinished = startTimesRef.current.some((startAt, idx) => {
        const nowProgress = progresses[idx] ? progresses[idx].current : 0;
        const target = items[idx] ? items[idx].target ?? 100 : 100;
        if (nowTs < startAt) return true; // ще не стартувала
        if (Math.round(nowProgress) < target) return true; // ще не досягла target
        return false;
      });

      if (unfinished) {
        rafRef.current = requestAnimationFrame(animate);
      } else {
        // фіналізація: гарантуємо, що поточні значення = target
        setProgresses((prev) =>
          prev.map((p, idx) => ({
            ...p,
            current: items[idx] ? items[idx].target ?? 100 : 100,
          }))
        );
        if (rafRef.current) {
          cancelAnimationFrame(rafRef.current);
          rafRef.current = null;
        }
      }
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items, duration, staggerDelay]);

  const handleContinue = async () => {
    await onContinue();
  };

  return (
    <div className={styles.progressWrap}>
      <ul className={styles.progressList}>
        {items.map((it) => {
          const p = progresses.find((x) => x.id === it.id) || {
            current: 0,
            target: it.target ?? 100,
          };
          const percent = Math.round(p.current);
          const finished = percent >= 100;
          const reachedTarget = percent >= (it.target ?? 100);

          return (
            <li key={it.id} className={styles.progressItem}>
              <div className={styles.row}>
                <div className={styles.title}>{it.text}</div>
                <div className={styles.meta}>
                  {finished ? (
                    <span className={styles.check}>✔</span>
                  ) : (
                    <span className={styles.percent}>{percent}%</span>
                  )}
                </div>
              </div>

              <div className={styles.barWrap} aria-hidden>
                <div
                  className={`${styles.bar} ${
                    reachedTarget ? styles.barActive : ""
                  }`}
                  style={{ width: `${percent}%` }}
                />
              </div>
            </li>
          );
        })}
      </ul>

      <div className={styles.controls}>
        <SubmitBtn
          onClick={handleContinue}
          disabled={requireAll ? !allCompleted : false}
        >
          Continue
        </SubmitBtn>
      </div>
    </div>
  );
}
