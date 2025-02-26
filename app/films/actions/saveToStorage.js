'use client'

const STORAGE_KEY = "quizAnswersKiviFilms"; // Унікальний ключ для localStorage

// Функція отримання масиву з localStorage
export const getStoredAnswers = () => {
  if (typeof window === "undefined") return [[]]; // Перевіряємо, чи є доступ до window
  const storedData = localStorage.getItem(STORAGE_KEY);
  return storedData ? JSON.parse(storedData) : [[]];
};

export const getCurrentTime = async () => {
  const now = new Date();
  return now.toISOString().slice(0, 16).replace("T", " ");
}

// Функція збереження масиву в localStorage
export const saveAnswer = async (answer) => {
  try {
    if (!answer) return;
    const storedData = [...getStoredAnswers(), answer];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(storedData));
  } catch (error) {
    console.error("Error saving answer to localStorage:", error);
  }
};
