import { StepDataType } from "@/app/actions/actions.types";
import {
  getJWTToken,
  getSessionIdFromCookie,
  getTokenFromCookie,
  setSessionIdToCookie,
} from "@/app/services/authorization";

export const sendFunnelData = async (data: StepDataType[]) => {
  const sessionId = await getSessionIdFromCookie();
  if (!sessionId) {
    return await createFunnel(data);
  } else return await patchFunnel(sessionId, data);
};

export const createFunnel = async (data: StepDataType[]): Promise<number> => {
  const token = await getTokenFromCookie();
  if (!token) throw new Error("Unable to get token");

  const backendUrl: string | undefined = process.env.BACKEND_URL;
  if (!backendUrl) throw new Error("unable to get BACKEND_URL");

  const headers = {
    "Content-Type": "application/json",
    accept: "application/json",
    "X-AUTH-TOKEN": `Grossma ${token}`,
    // 'X-Client-Token': id,
  };

  const response = await fetch(`${backendUrl}/funnels`, {
    method: "POST",
    headers: headers,
    body: JSON.stringify({
      data: data,
    }),
  });

  if (response.status === 401) {
    console.log("Starting to get JWT token - funnel.service - 44");
    const newToken = await getJWTToken();
    if (!newToken) throw new Error("unable to get token from the server");
    await createFunnel(data);
  }
  if (!response.ok) {
    throw new Error(response.statusText);
  }

  const receivedSessionId = await response.json();

  if (!receivedSessionId.id)
    throw new Error("unable to get session id from step POST");

  await setSessionIdToCookie(receivedSessionId.id);

  console.log("=========", receivedSessionId.id);

  return receivedSessionId.id;
};

export const patchFunnel = async (
  sessionId: string,
  data: StepDataType[]
): Promise<string> => {
  console.log("starting patch");

  const token = await getTokenFromCookie();
  if (!token) throw new Error("Unable to get token");

  const backendUrl: string | undefined = process.env.BACKEND_URL;
  if (!backendUrl) throw new Error("unable to get BACKEND_URL");

  const headers = {
    "Content-Type": "application/merge-patch+json",
    accept: "application/json",
    "X-AUTH-TOKEN": `Grossma ${token}`,
    // 'X-Client-Token': id,
  };

  const response = await fetch(`${backendUrl}/funnels/${sessionId}`, {
    method: "PATCH",
    headers: headers,
    body: JSON.stringify({
      data: data,
    }),
  });

  if (response.status === 401) {
    console.log("Starting to get JWT token - funnel.service - 44");
    const newToken = await getJWTToken();
    if (!newToken) throw new Error("unable to get token from the server");
    await createFunnel(data);
  }
  if (!response.ok) {
    console.log(response.status);
    console.log(response.statusText);
    throw new Error(response.statusText);
  }

  const receivedSessionId = await response.json();

  if (!receivedSessionId.id)
    throw new Error("Unable to get session id from the steps PATCH");

  // if (receivedSessionId.id !== sessionId) await setSessionIdToCookie(receivedSessionId.id)

  console.log("++++++++", { receivedSessionId });

  return receivedSessionId.id;
};
