import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { slug = "" } = req.query;

  if (!slug || typeof slug !== "string") {
    return res.status(400).json({ message: "Missing slug" });
  }

  res.setPreviewData({});

  res.redirect(slug);
}