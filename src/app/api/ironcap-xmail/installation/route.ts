const DEFAULT_KEYSERVER_API_URL = "https://keyserver000101.01com.com";
const INSTALLATION_PATH = "/api/v1/installation";

type InstallationPayload = {
  email?: unknown;
  firstname?: unknown;
  lastname?: unknown;
  provisionid?: unknown;
  g_recaptcha_response?: unknown;
};

function normalizeString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function getInstallationUrl() {
  const baseUrl = (
    process.env.KEYSERVER_API_URL || DEFAULT_KEYSERVER_API_URL
  ).replace(/\/+$/, "");

  return `${baseUrl}${INSTALLATION_PATH}`;
}

async function parseUpstreamResponse(response: Response) {
  const text = await response.text();

  if (!text) {
    return null;
  }

  try {
    return JSON.parse(text);
  } catch {
    return { message: text };
  }
}

export async function POST(request: Request) {
  let payload: InstallationPayload;

  try {
    payload = await request.json();
  } catch {
    return Response.json(
      { message: "Please submit valid installation details." },
      { status: 400 }
    );
  }

  const email = normalizeString(payload.email);
  const firstname = normalizeString(payload.firstname);
  const lastname = normalizeString(payload.lastname);
  const provisionid = normalizeString(payload.provisionid);
  const gRecaptchaResponse = normalizeString(payload.g_recaptcha_response);

  if (!email || !firstname || !lastname) {
    return Response.json(
      { message: "Please complete email, first name, and last name." },
      { status: 400 }
    );
  }

  try {
    const upstreamResponse = await fetch(getInstallationUrl(), {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        firstname,
        lastname,
        provisionid,
        g_recaptcha_response: gRecaptchaResponse,
      }),
    });

    const data = await parseUpstreamResponse(upstreamResponse);

    if (!upstreamResponse.ok) {
      return Response.json(
        {
          message:
            data?.message ||
            "The installation email could not be sent. Please try again.",
        },
        { status: upstreamResponse.status }
      );
    }

    return Response.json({
      message: "Installation email sent.",
      data,
    });
  } catch {
    return Response.json(
      {
        message:
          "The installation email service is not available. Please try again later.",
      },
      { status: 502 }
    );
  }
}
