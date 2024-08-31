import { Request, Response } from "express";
import { OperationModel } from "../models/OperationModel";
import { CreateOperationDTO, UpdateOperationDTO } from "../schemas/Operation";

export class OperationController {
  public static async get(_: Request, res: Response) {
    try {
      const operations = await OperationModel.findAll();
      res.json(operations);
    } catch (error) {
      // TODO
    }
  }

  public static async create(req: Request, res: Response) {
    try {
      const { body } = req;

      const payload = CreateOperationDTO.parse(body);

      const operation = await OperationModel.create(payload);

      res.json(operation);
    } catch (error) {
      res
        .json({
          error,
        })
        .status(400);
    }
  }

  public static async findById(req: Request, res: Response) {
    try {
      const { id: operationID } = req.params;
      const operation = await OperationModel.findByPk(operationID);
      if (operation === null) throw new Error("Operation not found");
      res.json(operation);
    } catch (error) {
      res
        .json({
          error,
        })
        .status(400);
    }
  }

  public static async update(req: Request, res: Response) {
    try {
      const {
        params: { id: operationID },
        body,
      } = req;

      const operation = await OperationModel.findByPk(operationID);
      if (operation === null) throw new Error("Operation not found");

      const payload = UpdateOperationDTO.parse(body);

      const editedOperation = await operation.update(payload);

      res.json(editedOperation).status(204);
    } catch (error) {
      res
        .json({
          error,
        })
        .status(400);
    }
  }

  public static async delete(req: Request, res: Response) {
    try {
      const {
        params: { id: operationID },
      } = req;

      const operation = await OperationModel.findByPk(operationID);
      if (operation === null) throw new Error("Operation not found");

      await operation.destroy();

      res.json({
        ok: true,
        message: "Operation Destroyed",
      });
    } catch (error) {
      res
        .json({
          error,
        })
        .status(400);
    }
  }
}
