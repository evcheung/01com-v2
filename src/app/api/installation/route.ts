const INSTALLATION_PATH = "/api/v1/installation";

type InstallationPayload = {
  email?: unknown;
  firstname?: unknown;
  lastname?: unknown;
  provisionid?: unknown;
  g_recaptcha_response?: unknown;
};

type ParsedUpstreamResponse = {
  data: unknown;
  isJson: boolean;
};

function normalizeString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return Boolean(value) && typeof value === "object" && !Array.isArray(value);
}

function getInstallationUrl() {
  const baseUrl = process.env.KEYSERVER_API_URL?.trim();

  if (!baseUrl) {
    return null;
  }

  return `${baseUrl.replace(/\/+$/, "")}${INSTALLATION_PATH}`;
}

async function parseUpstreamResponse(
  response: Response
): Promise<ParsedUpstreamResponse> {
  const text = await response.text();

  if (!text) {
    return { data: null, isJson: false };
  }

  try {
    return { data: JSON.parse(text), isJson: true };
  } catch {
    return { data: { message: text }, isJson: false };
  }
}

function getUpstreamMessage(data: unknown) {
  if (!isRecord(data)) {
    return null;
  }

  for (const key of ["message", "reason", "error", "detail"]) {
    const value = data[key];

    if (typeof value === "string" && value.trim()) {
      return value.trim();
    }
  }

  return null;
}

function hasExplicitFailure(data: unknown) {
  if (!isRecord(data)) {
    return false;
  }

  for (const key of ["status", "success", "ok"]) {
    const value = data[key];

    if (value === false) {
      return true;
    }

    if (
      typeof value === "string" &&
      ["false", "failed", "failure", "error", "bad request"].includes(
        value.trim().toLowerCase()
      )
    ) {
      return true;
    }
  }

  return false;
}

function getClientErrorStatus(upstreamStatus: number) {
  if (upstreamStatus >= 400 && upstreamStatus < 500) {
    return upstreamStatus;
  }

  return 502;
}

function getClientErrorMessage(upstreamStatus: number, data: unknown) {
  if (upstreamStatus >= 400 && upstreamStatus < 500) {
    return (
      getUpstreamMessage(data) ||
      "The installation details could not be accepted. Please check the form and try again."
    );
  }

  return "The installation email service is not available. Please try again later.";
}

export async function POST(request: Request) {
  const installationUrl = getInstallationUrl();

  if (!installationUrl) {
    return Response.json(
      {
        message:
          "The installation email service is not configured. Please try again later.",
      },
      { status: 500 }
    );
  }

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

  if (!gRecaptchaResponse) {
    return Response.json(
      { message: "Please complete verification before continuing." },
      { status: 400 }
    );
  }

  try {
    const upstreamResponse = await fetch(installationUrl, {
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

    const { data } = await parseUpstreamResponse(upstreamResponse);

    if (!upstreamResponse.ok || hasExplicitFailure(data)) {
      return Response.json(
        {
          message: getClientErrorMessage(upstreamResponse.status, data),
        },
        { status: getClientErrorStatus(upstreamResponse.status) }
      );
    }

    return Response.json({
      message: "Installation email sent.",
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
