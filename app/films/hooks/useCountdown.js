import { useEffect, useState } from "react";

// export function useCountdown(
//   daysToCount = 10,
//   storageKey = "kivi_countdown_target_time"
// ) {
//   const [timeLeft, setTimeLeft] = useState(0);

//   useEffect(() => {
//     let savedTargetTime = localStorage.getItem(storageKey);

//     if (savedTargetTime) {
//       savedTargetTime = parseInt(savedTargetTime, 10);
//     }

//     const now = Date.now();
//     const targetTime =
//       savedTargetTime && savedTargetTime > now
//         ? savedTargetTime
//         : now + daysToCount * 24 * 60 * 60 * 1000;

//     localStorage.setItem(storageKey, targetTime);
//     setTimeLeft(targetTime - now);

//     const interval = setInterval(() => {
//       setTimeLeft(Math.max(targetTime - Date.now(), 0));
//     }, 1000);

//     return () => clearInterval(interval);
//   }, [daysToCount, storageKey]);

//   const totalSeconds = Math.floor(timeLeft / 1000);
//   const days = String(Math.floor(totalSeconds / 86400)).padStart(2, "0");
//   const hours = String(Math.floor((totalSeconds % 86400) / 3600)).padStart(
//     2,
//     "0"
//   );
//   const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(
//     2,
//     "0"
//   );

//   return { days, hours, minutes };
// }

export function useCountdown(targetDateString = "2025-05-31T23:59:00") {
  const [timeLeft, setTimeLeft] = useState(0);

  useEffect(() => {
    const targetTime = new Date(targetDateString).getTime();

    const updateTime = () => {
      const now = Date.now();
      const remaining = Math.max(targetTime - now, 0);
      setTimeLeft(remaining);
    };

    updateTime(); // перший запуск одразу

    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, [targetDateString]);

  const totalSeconds = Math.floor(timeLeft / 1000);
  const days = String(Math.floor(totalSeconds / 86400)).padStart(2, "0");
  const hours = String(Math.floor((totalSeconds % 86400) / 3600)).padStart(
    2,
    "0"
  );
  const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(
    2,
    "0"
  );

  return { days, hours, minutes };
}
