"use client";

import { useEffect, useState } from "react";
import classNames from "classnames";
import styles from './Timer.module.css';

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState(0);
  const [showColon, setShowColon] = useState(true);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);

    let savedTargetTime = localStorage.getItem("kivi_countdown_target_time");

    if (savedTargetTime) {
      savedTargetTime = parseInt(savedTargetTime, 10);
    }

    const now = Date.now();
    const targetTime =
      savedTargetTime && savedTargetTime > now
        ? savedTargetTime
        : now + 10 * 24 * 60 * 60 * 1000; // 10 днів

    localStorage.setItem("kivi_countdown_target_time", targetTime);
    setTimeLeft(targetTime - now);

    const interval = setInterval(() => {
      setTimeLeft(Math.max(targetTime - Date.now(), 0));
      setShowColon((prev) => !prev);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!hasMounted) {
    return null; // Не рендеримо нічого до гідратації
  }

  const formatTime = (ms) => {
    const totalSeconds = Math.floor(ms / 1000);
    const days = Math.floor(totalSeconds / 86400);
    const hours = Math.floor((totalSeconds % 86400) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);

    return {
      days: String(days).padStart(2, "0"),
      hours: String(hours).padStart(2, "0"),
      minutes: String(minutes).padStart(2, "0"),
    };
  };

  const { days, hours, minutes } = formatTime(timeLeft);

  return (
    <div className={styles.countdown}>
      <div className={styles.wrap}>
        <div className={styles.timeWrap}>
          {days.split("").map((digit, i) => (
            <span key={`d-${i}`} className={styles.digit}>{digit}</span>
          ))}
        </div>
        <p className={styles.timeText}>Tage</p>
      </div>

      <span className={styles.colon}>:</span>

      <div className={styles.wrap}>
        <div className={styles.timeWrap}>
          {hours.split("").map((digit, i) => (
            <span key={`h-${i}`} className={styles.digit}>{digit}</span>
          ))}
        </div>
        <p className={styles.timeText}>Stunden</p>
      </div>

      <span className={classNames(styles.colon, { [styles.hidden]: !showColon })}>:</span>

      <div className={styles.wrap}>
        <div className={styles.timeWrap}>
          {minutes.split("").map((digit, i) => (
            <span key={`m-${i}`} className={styles.digit}>{digit}</span>
          ))}
        </div>
        <p className={styles.timeText}>Minuten</p>
      </div>
    </div>
  );
}



// "use client";

// import classNames from "classnames";

// import styles from './Timer.module.css'

// import { useEffect, useState } from "react";

// export default function CountdownTimer() {
//   const targetTime = Date.now() + 10 * 24 * 60 * 60 * 1000; // 10 діб
//   const [timeLeft, setTimeLeft] = useState(targetTime - Date.now());
//   const [showColon, setShowColon] = useState(true);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setTimeLeft(Math.max(targetTime - Date.now(), 0));
//       setShowColon((prev) => !prev);
//     }, 1000);

//     return () => clearInterval(interval);
//   }, []);

//   const formatTime = (ms) => {
//     const totalSeconds = Math.floor(ms / 1000);
//     const days = Math.floor(totalSeconds / 86400);
//     const hours = Math.floor((totalSeconds % 86400) / 3600);
//     const minutes = Math.floor((totalSeconds % 3600) / 60);

//     return {
//       days: String(days).padStart(2, "0"),
//       hours: String(hours).padStart(2, "0"),
//       minutes: String(minutes).padStart(2, "0"),
//     };
//   };

//   const { days, hours, minutes } = formatTime(timeLeft);

//   return (
//     <div className={styles.countdown}>
//             <div className={styles.wrap}>
//                 <div className={styles.timeWrap}>
//                     {days.split("").map((digit, i) => (
//                     <span key={`d-${i}`} className={styles.digit}>{digit}</span>
//                     ))}
//                     </div>
//                     <p className={styles.timeText}>Tage</p>
//             </div>

//         <span className={styles.colon}>:</span>

//         <div className={styles.wrap}>
//             <div className={styles.timeWrap}>
//                 {hours.split("").map((digit, i) => (
//                     <span key={`h-${i}`} className={styles.digit}>{digit}</span>
//                 ))}
//                 </div>
//                 <p className={styles.timeText}>Stunden</p>
//             </div>
//         <span className={classNames(styles.colon, { [styles.hidden]: !showColon })}>:</span>

//         <div className={styles.wrap}>
//             <div className={styles.timeWrap}>
//                 {minutes.split("").map((digit, i) => (
//                     <span key={`m-${i}`} className={styles.digit}>{digit}</span>
//                 ))}
//             </div>
//             <p className={styles.timeText}>Minuten</p>
//         </div>
//     </div>
//   );
// }
