// point answers

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

// branch

export const setFlowBranch = (flow, branch) => {
  if (typeof window === "undefined") return;

  localStorage.setItem(`ChatMind:${flow}:branch`, branch);
};

export const getFlowBranch = (flow) => {
  if (typeof window === "undefined") return;

  return localStorage.getItem(`ChatMind:${flow}:branch`);
};

export const clearFlowBranch = (flow) => {
  if (typeof window === "undefined") return;

  localStorage.removeItem(`ChatMind:${flow}:branch`);
};
