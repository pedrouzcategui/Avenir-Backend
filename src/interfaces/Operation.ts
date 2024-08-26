export interface IOperation {
  id: string;
  date: Date;
  transferAccountId: string;
  operationType: "income" | "expense";
  amount: number;
}
