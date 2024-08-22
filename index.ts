import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import operationsRouter from "./src/routes/operations";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use("/operations", operationsRouter);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
