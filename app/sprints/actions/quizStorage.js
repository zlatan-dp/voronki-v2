const STORAGE_KEY = "ChatMind:sprint03";

export const getQuizAnswers = () => {
  if (typeof window === "undefined") return {};

  const data = localStorage.getItem(STORAGE_KEY);

  return data ? JSON.parse(data) : {};
};

export const saveQuizAnswer = (step, points) => {
  if (typeof window === "undefined") return;

  const currentAnswers = getQuizAnswers();

  currentAnswers[step] = points;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(currentAnswers));
};

export const clearQuizAnswers = () => {
  if (typeof window === "undefined") return;

  localStorage.removeItem(STORAGE_KEY);
};
