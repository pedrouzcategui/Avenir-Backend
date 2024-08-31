import express, { Request, Response } from "express";
import { OperationController } from "../controllers/OperationController";

const router = express.Router();

router.get("/", OperationController.get);
router.get("/:id", OperationController.findById);

router.post("/", OperationController.create);

router.put("/:id", OperationController.update);

router.delete("/:id", OperationController.delete);

export default router;
