import db from "../db";
import { OperationModel } from "../models/OperationModel";

export class OperationController {
  public static async get() {
    const operations = await OperationModel.findAll();
    return operations;
  }

  public static async create() {
    const operation = await OperationModel.create({
      id: crypto.randomUUID(),
      date: new Date(),
      transferAccountId: crypto.randomUUID(),
      operationType: "income",
      amount: Math.random() * 100,
    });
    return operation;
  }

  public static find(id: string) {
    return { id };
  }
}
