import "dotenv/config"           
import express from "express"
import { exec } from "child_process"
import bodyParser from "body-parser"
import { isValidSignature } from "@sanity/webhook"
import { stderr } from "process"

const app = express()

app.use(
  bodyParser.raw({
    type: "application/json",
  })
)

app.post("/sanity/webhook", (req, res) => {
  const signature = req.headers["x-sanity-signature"]
  const secret = process.env.SANITY_WEBHOOK_SECRET   // now loaded correctly

  const isValid = isValidSignature(req.body, signature, secret)

  if (!isValid) {
    console.log("❌ Invalid webhook signature")
    return res.status(401).send("Invalid")
  }

  console.log("Sanity webhook verified")

  exec(
    "yarn build",
    {
      cwd: "/Users/seanhuang/Documents/01 Communique/01com-v2",
      shell: "/bin/zsh",
    },
    (err, stdout, stderr) => {
      if (err) {
        console.error("Build failed:", err)
        console.error(stderr)
        return
      }
      console.log("Build finished.")
      console.log(stdout)
    }
  )

  console.log("Payload:", req.body.toString())
  res.status(200).send("OK")
})

app.listen(3333, () => {
  console.log("Listening on http://localhost:3333")
})
