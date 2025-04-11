"use server";

import { cookies } from "next/headers";
import { getDateTime } from "@/app/services/common";

export const getJWTToken = async (): Promise<string> => {
  console.log(getDateTime(), "-- starting getJWTToken");

  const backendUrl: string | undefined = process.env.BACKEND_URL;
  const login: string | undefined = process.env.BACKEND_LOGIN;
  const password: string | undefined = process.env.BACKEND_PASSWORD;

  if (!backendUrl) throw new Error("BACKEND_URL is required");
  if (!login) throw new Error("BACKEND_LOGIN is required");
  if (!password) throw new Error("BACKEND_PASSWORD is required");

  const response = await fetch(`${backendUrl}/login_check`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    // mode: 'cors',
    body: JSON.stringify({
      email: login,
      password: password,
    }),
  });

  if (!response.ok) {
    console.log("authentication failed -- authorization.ts - 26");
    console.log({ response });
    console.log("response text: ", await response.text());
    throw new Error(`${response.statusText}`);
  }

  const receivedData = await response.json();

  if (!receivedData?.token) throw new Error("unable to get JWT token");

  const cookieStore = await cookies();
  cookieStore.set("funnelTkn", receivedData.token, {
    httpOnly: true,
    secure: true,
    path: "/",
    maxAge: 60 * 60 * 24,
  });

  return receivedData.token;
};

export const getTokenFromCookie = async (): Promise<string> => {
  const cookieStore = await cookies();
  const token = cookieStore.get("funnelTkn")?.value;
  if (!token) {
    console.warn("there is no JWT token in cookie");
    const newToken = await getJWTToken();
    console.warn("new token: ", newToken);
    if (!newToken) throw new Error("Unable to get token from server");
    return newToken;
  }
  return token;
};

export const getSessionIdFromCookie = async (): Promise<string> => {
  const cookieStore = await cookies();
  const sessionId = cookieStore.get("sessionId")?.value;
  if (!sessionId) {
    console.warn(getDateTime());
    console.warn("There is no Session ID in cookie");
    return "";
  }
  return sessionId;
};

export const setSessionIdToCookie = async (
  sessionId: string
): Promise<void> => {
  const cookieStore = await cookies();
  cookieStore.set("sessionId", sessionId, {
    httpOnly: true,
    secure: true,
    path: "/",
    maxAge: 60 * 60 * 24,
  });
};

export const clearCookies = async (): Promise<void> => {
  const cookieStore = await cookies();
  cookieStore.delete("sessionId");
  console.log("clear cookies");
  const id = cookieStore.get("sessionId")?.value;
  console.log(id);
};
