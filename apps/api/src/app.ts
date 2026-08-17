import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

const app = express();

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Health Check
app.get("/health", (_req, res) => {
  res.status(200).json({
    status: "healthy",
    service: "ticketflow-api",
    timestamp: new Date().toISOString(),
  });
});

export default app;