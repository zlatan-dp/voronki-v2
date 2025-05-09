import { getJWTToken, getTokenFromCookie } from "@/app/services/authorization";

type EmailData = {
  project: string;
  to: string[];
  subject: string;
  html?: string;
  text?: string;
};

export const sendEmailData = async (data: EmailData): Promise<boolean> => {
  const token = await getTokenFromCookie();
  if (!token) {
    console.log("Unable to get token");
    return false;
  }

  const backendUrl: string | undefined = process.env.NEXT_PUBLIC_BACKEND_URL;
  if (!backendUrl) {
    console.log("unable to get BACKEND_URL");
    return false;
  }

  const headers = {
    "Content-Type": "application/json",
    accept: "application/json",
    "X-AUTH-TOKEN": `Grossma ${token}`,
    // 'X-Client-Token': id,
  };

  const response = await fetch(`${backendUrl}/send_email_to`, {
    method: "POST",
    headers: headers,
    body: JSON.stringify(data),
  });

  if (response.status === 401) {
    console.log("Starting to get JWT token - funnel.service - 44");
    const newToken = await getJWTToken();
    if (!newToken) {
      console.log("unable to get token from the server");
      return false;
    }
    await sendEmailData(data);
  }
  if (!response.ok) {
    console.log(response.statusText);
    return false;
  }

  const responseEmail = await response.json();

  if (!responseEmail.sended) {
    console.log("unable to get session id from step POST");
    return false;
  }
  // console.log("=========", responseEmail);

  return true;
};
