import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

function parseCorsOrigin() {
  const defaults =
    process.env.mode === "production" ? ["http://localhost:3000"] : ["http://localhost:3000", "http://localhost:3001"];

  const fromEnv = (process.env.CORS_ORIGIN ?? "")
    .split(",")
    .map((origin) => origin.trim())
    .filter(Boolean);

  return [...new Set([...fromEnv, ...defaults])];
}

const config = {
  port: Number(process.env.PORT) || 3001,
  nodeEnv: process.env.NODE_ENV ?? "development",
  corsOrigin: parseCorsOrigin(),
  dbFilePath: path.join(__dirname, "data/db.json"),
};

export default config;
