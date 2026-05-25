import cors from "cors";
import express from "express";
import morgan from "morgan";
import swaggerUi from "swagger-ui-express";

import config from "./envConfigs.js";
import { feedbacksRouter } from "./routes/api/index.js";

const app = express();

const loggerFormat = app.get("env" === "development" ? "dev" : "short");

app.use(morgan(loggerFormat));
app.use(
  cors({
    origin(origin, callback) {
      if (!origin || config.corsOrigins.includes(origin)) {
        callback(null, true);
        return;
      }
      callback(newError(`Cors: origin ${origin} is not allowed`));
    },
    credentials: true,
  })
);

app.use(express.json());

app.use(express.static("public"));

app.use("/api/feedbacks", feedbacksRouter);

export default app;
