export async function mndchatFetch(
  endpoint: string,
  options: RequestInit = {},
) {
  const backendUrl: string | undefined = process.env.PAY_BACKEND_URL;
  if (!backendUrl)
    return { ok: false, message: "Backend URL not configured", status: 500 };

  try {
    const res = await fetch(`${backendUrl}${endpoint}`, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: process.env.BEARER_TOKEN
          ? `Bearer ${process.env.BEARER_TOKEN}`
          : "",
        ...options.headers,
      },
    });

    let data = null;

    try {
      data = await res.json();
    } catch {
      data = null;
    }

    if (!res.ok) {
      const message = data?.message || data?.info?.message || "API error";
      return {
        ok: false,
        message,
        status: res.status,
      };
    }

    return { ok: true, data };
  } catch (err) {
    console.error("API fetch failed:", err);
    return {
      ok: false,
      message: "Network error / server not reachable",
      status: 503,
    };
  }
}
