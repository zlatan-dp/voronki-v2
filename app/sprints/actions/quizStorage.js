const getQuizStorageKey = (flow) => `ChatMind:${flow}`;

export const getQuizAnswers = (flow) => {
  if (typeof window === "undefined") return {};

  const key = getQuizStorageKey(flow);
  const data = localStorage.getItem(key);

  return data ? JSON.parse(data) : {};
};

export const saveQuizAnswer = (flow, step, points) => {
  if (typeof window === "undefined") return;

  const key = getQuizStorageKey(flow);
  const currentAnswers = getQuizAnswers(flow);

  currentAnswers[step] = points;

  localStorage.setItem(key, JSON.stringify(currentAnswers));
};

export const clearQuizAnswers = (flow) => {
  if (typeof window === "undefined") return;

  localStorage.removeItem(getQuizStorageKey(flow));
};
