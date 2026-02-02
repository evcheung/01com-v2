import "dotenv/config";
import express from "express";
import { exec } from "child_process";
import bodyParser from "body-parser";
import { isValidSignature } from "@sanity/webhook";

const app = express();

const PORT = Number(process.env.PORT || 3333);
const BUILD_CWD = process.env.BUILD_CWD || process.cwd();
const BUILD_CMD = process.env.BUILD_CMD || "yarn build";
const SKIP_SIGNATURE =
  String(process.env.SKIP_SIGNATURE || "false").toLowerCase() === "true";

app.post(
  "/sanity/webhook",
  bodyParser.raw({
    type: (req) =>
      (req.headers["content-type"] || "").startsWith("application/json"),
    limit: "2mb",
  }),
  (req, res) => {
    // --- signature header detection ---
    const signature =
      req.headers["x-sanity-signature"] || req.headers["sanity-webhook-signature"];

    const secret = process.env.SANITY_WEBHOOK_SECRET;

    if (!SKIP_SIGNATURE) {
      if (!secret) return res.status(500).send("Server misconfigured");
      if (!signature) return res.status(400).send("Missing signature header");
      if (!Buffer.isBuffer(req.body)) return res.status(400).send("Invalid body");

      const ok = isValidSignature(req.body, signature, secret);

      if (!ok) return res.status(401).send("Invalid signature");

      console.log("✅ Signature verified");
    } else {
      console.log("⚠️ SKIP_SIGNATURE=true (signature verification bypassed)");
    }

    console.log(`Running build: "${BUILD_CMD}" in "${BUILD_CWD}"`);

    const isWindows = process.platform === "win32";
    const shell = isWindows ? "cmd.exe" : "/bin/bash";
    const startedAt = Date.now();

    exec(
      BUILD_CMD,
      {
        cwd: BUILD_CWD,
        shell,
      },
      (err, stdout, stderr) => {
        const elapsedSec = ((Date.now() - startedAt) / 1000).toFixed(2);

        if (err) {
          console.error(`❌ Build FAILED after ${elapsedSec}s`);
          console.error("Error message:", err.message);
          return;
        }

        console.log(`✅ Build SUCCEEDED in ${elapsedSec}s`);

        if (stderr && stderr.trim().length > 0) {
          console.warn("⚠️ Build warnings (stderr):");
          console.warn(stderr.trim());
        }
      }
    );

    return res.status(200).send("OK");
  }
);

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
