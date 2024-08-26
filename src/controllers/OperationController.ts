import Operation from "../models/OperationModel";
import { IOperation } from "../interfaces/Operation";

export class OperationController {
  public static create(operationFields: IOperation) {
    let operation = new Operation(operationFields);
    // Insert in the DB
    // Return operation
    JSON.stringify(operation);
  }

  public static find(id: string) {
    return { id };
  }
}
