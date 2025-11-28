"use client";

export const getCurrentTime = async () => {
  const now = new Date();
  return now.toISOString().slice(0, 16).replace("T", " ");
};
