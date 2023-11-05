import express from "express";
import { config } from "dotenv";
import { morgan } from "morgan";

config();

const app = express();

app.use(express.json());

// Remove morgan in production
app.use(morgan("dev"));

app.use("/api/v1");

export default app;
