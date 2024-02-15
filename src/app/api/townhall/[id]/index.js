import { getHandler, postHandler } from "./route";

export default function handler(req, res) {
  if (req.method === "GET") {
    return getHandler(req, res);
  }

  if (req.method === "POST") {
    return postHandler(req, res);
  }

  // Handle other HTTP methods or unsupported methods
  res.status(405).end(); // Method Not Allowed
}
