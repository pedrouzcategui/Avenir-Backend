import express, { Request, Response } from "express";
import db from "../db";

const router = express.Router();

router.get("/", async (req: Request, res: Response) => {
  let result = await db.query("SELECT NOW()");
  res.json(result);
});

router.get("/:id", (req: Request, res: Response) => {
  const { id: operationID } = req.params;
  res.send(operationID);
});

router.post("/", (req: Request, res: Response) => {
  res.send("Operation");
});

router.put("/", (req: Request, res: Response) => {
  res.send("Operation");
});

router.delete("/", (req: Request, res: Response) => {
  res.send("Operation");
});

export default router;
