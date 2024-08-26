import db from "../db";
import { IOperation } from "../interfaces/Operation";

export default class OperationModel implements IOperation {
  public id: string;
  public date: Date;
  public transferAccountId: string;
  public operationType: "income" | "expense";
  public amount: number;

  constructor(operationData: IOperation) {
    this.id = crypto.randomUUID();
    this.date = new Date();
    this.transferAccountId = operationData.transferAccountId;
    this.operationType = operationData.operationType;
    this.amount = operationData.amount;
  }

  public find() {}

  public static create() {
    // Is the model responsible of executing the query?
    db.query("INSERT x IN x");
  }

  public update() {}

  public delete() {}
}
