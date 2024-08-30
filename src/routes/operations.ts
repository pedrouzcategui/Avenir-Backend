import express, { Request, Response } from "express";
import db from "../db";
import { OperationController } from "../controllers/OperationController";

const router = express.Router();

router.get("/", async (req: Request, res: Response) => {
  let operations = await OperationController.get();
  res.json(operations);
});

router.get("/:id", (req: Request, res: Response) => {
  const { id: operationID } = req.params;
  const isFound = OperationController.find(operationID);
  res.json(isFound);
});

router.post("/", async (req: Request, res: Response) => {
  // const { body } = req;
  const operation = await OperationController.create();
  res.json(operation);
});

router.put("/:id", (req: Request, res: Response) => {
  const { id: operationID } = req.params;
  res.json("Operation Updated");
});

router.delete("/:id", (req: Request, res: Response) => {
  const { id: operationID } = req.params;
  res.json("Operation Deleted");
});

export default router;
