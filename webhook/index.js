
import "dotenv/config";
import express from "express";
import { exec } from "child_process";
import bodyParser from "body-parser";
import { isValidSignature } from "@sanity/webhook";

const app = express();

const PORT = Number(process.env.PORT || 3333);
const BUILD_CWD = process.env.BUILD_CWD || process.cwd();
const BUILD_CMD = process.env.BUILD_CMD || "yarn build";
const SKIP_SIGNATURE = String(process.env.SKIP_SIGNATURE || "false").toLowerCase() === "true";

// Keep raw body EXACTLY as received for signature verification.
app.post(
  "/sanity/webhook",
  bodyParser.raw({
    type: (req) => (req.headers["content-type"] || "").startsWith("application/json"),
    limit: "2mb",
  }),
  (req, res) => {
    const now = new Date().toISOString();
    const headers = { ...req.headers };

    if (headers.authorization) headers.authorization = "[redacted]";
    if (headers.cookie) headers.cookie = "[redacted]";
    if (headers["x-sanity-signature"]) headers["x-sanity-signature"] = "[present]";
    if (headers["sanity-webhook-signature"]) headers["sanity-webhook-signature"] = "[present]";

    console.log("incoming webhook at", now);
    console.log("method:", req.method);
    console.log("path:", req.originalUrl);
    console.log("content-type:", req.headers["content-type"]);
    console.log("headers:", headers);

    if (!Buffer.isBuffer(req.body)) {
      console.error("❌ Body is not a raw Buffer");
      console.error("typeof req.body:", typeof req.body);
      return res.status(400).send("Invalid body (not raw buffer)");
    }

    console.log("body length:", req.body.length);

    // preview a bit of body (avoid dumping huge payloads)
    const bodyPreview = req.body.toString("utf8", 0, Math.min(req.body.length, 500));
    console.log("body preview (first 500 chars):", bodyPreview);

    //Signature header detection 
    const signature =
      req.headers["x-sanity-signature"] ||
      req.headers["sanity-webhook-signature"];

    const secret = process.env.SANITY_WEBHOOK_SECRET;

    if (!secret && !SKIP_SIGNATURE) {
      console.error("❌ Missing SANITY_WEBHOOK_SECRET");
      return res.status(500).send("Server misconfigured (missing secret)");
    }

    if (!signature && !SKIP_SIGNATURE) {
      console.error("❌ Missing signature header (x-sanity-signature / sanity-webhook-signature)");
      return res.status(400).send("Missing signature header");
    }

    //Signature verification
    if (!SKIP_SIGNATURE) {
      const ok = isValidSignature(req.body, signature, secret);
      if (!ok) {
        console.error("❌ Invalid webhook signature");
        return res.status(401).send("Invalid signature");
      }
      console.log("✅ Signature verified");
    } else {
      console.log("⚠️ SKIP_SIGNATURE=true (signature verification bypassed)");
    }

    console.log(`Running build: "${BUILD_CMD}" in "${BUILD_CWD}"`);

    const isWindows = process.platform === "win32";
    const shell = isWindows ? "cmd.exe" : "/bin/bash";

    // On Windows, exec uses cmd by default; we still set it explicitly.
    const cmd = isWindows ? `${BUILD_CMD}` : `${BUILD_CMD}`;

    exec(
      cmd,
      {
        cwd: BUILD_CWD,
        shell,
      },
      (err, stdout, stderr) => {
        if (err) {
          console.error("❌ Build failed:", err.message);
          if (stderr) console.error("stderr:", stderr);
          return;
        }
        console.log("✅ Build finished.");
        if (stdout) console.log("stdout:", stdout);
        if (stderr) console.error("stderr:", stderr);
      }
    );

    return res.status(200).send("OK");
  }
);

// Health endpoint (useful to confirm proxy routing)
app.get("/health", (req, res) => res.status(200).send("ok"));

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
  console.log(`Webhook endpoint: http://localhost:${PORT}/sanity/webhook`);
});
