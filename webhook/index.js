import "dotenv/config";
import express from "express";
import { exec } from "child_process";
import bodyParser from "body-parser";
import { isValidSignature } from "@sanity/webhook";

const app = express();

app.post(
  "/sanity/webhook",
  bodyParser.raw({
    type: (req) => (req.headers["content-type"] || "").startsWith("application/json"),
  }),
  (req, res) => {
    const signature = req.headers["x-sanity-signature"];
    const secret = process.env.SANITY_WEBHOOK_SECRET;

    // Normal debugging guardrails
    if (!secret) {
      console.error("❌ Missing SANITY_WEBHOOK_SECRET");
      return res.status(500).send("Server misconfigured");
    }
    if (!signature) {
      console.error("❌ Missing x-sanity-signature header");
      return res.status(400).send("Missing signature header");
    }
    if (!Buffer.isBuffer(req.body)) {
      console.error("❌ Body is not a raw Buffer");
      console.error("content-type:", req.headers["content-type"]);
      return res.status(400).send("Invalid body");
    }

    const ok = isValidSignature(req.body, signature, secret);

    if (!ok) {
      console.error("❌ Invalid webhook signature");
      console.error("content-type:", req.headers["content-type"]);
      console.error("body length:", req.body.length);
      return res.status(401).send("Invalid");
    }

    console.log("✅ Sanity webhook verified");

    exec(
      "yarn build",
      {
        cwd: "/Users/Sean/01com-v2/01com-v2",
        shell: "/bin/zsh",
      },
      (err, stdout, stderr) => {
        if (err) {
          console.error("Build failed:", err);
          if (stderr) console.error(stderr);
          return;
        }
        console.log("Build finished.");
        if (stdout) console.log(stdout);
        if (stderr) console.error(stderr);
      }
    );

    console.log("Payload:", req.body.toString("utf8"));
    return res.status(200).send("OK");
  }
);

app.listen(3333, () => {
  console.log("Listening on http://localhost:3333");
});
