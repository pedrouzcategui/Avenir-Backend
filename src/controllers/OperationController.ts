import { OperationModel } from "../models/OperationModel";
import OperationSchema from "../schemas/OperationSchema";

export class OperationController {
  public static async get() {
    const operations = await OperationModel.findAll();
    return operations;
  }

  public static async create(body: any) {
    try {
      if (!OperationSchema.parse(body)) {
        throw new Error("Operation Schema is Incorrect");
      }
      const operation = await OperationModel.create({
        id: crypto.randomUUID(),
        date: new Date(),
        description: body.description,
        transferAccountId: crypto.randomUUID(),
        type: body.type,
        amount: body.amount,
      });
      return operation;
    } catch (error) {
      console.log(error);
      return {
        error: true,
        message: error,
      };
    }
  }

  public static find(id: string) {
    return { id };
  }
}
