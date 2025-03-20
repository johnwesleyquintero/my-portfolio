import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { asin } = req.body;

  if (!asin || typeof asin !== "string") {
    return res.status(400).json({ error: "Invalid ASIN format" });
  }

  // Mock audit results for development
  const mockResults = {
    asin,
    complianceStatus: "Compliant",
    issuesFound: [],
    optimizationSuggestions: [
      "Improve product title length",
      "Add more lifestyle images",
    ],
    lastUpdated: new Date().toISOString(),
  };

  return res.status(200).json(mockResults);
}
