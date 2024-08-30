import { z } from "zod";

const OperationSchema = z.object({
  //   id: z.string(),
  //   date: z.date(),
  //   transferAccountId: z.string(),
  description: z.string(),
  type: z.enum(["income", "expense"]),
  amount: z.number(),
});

export default OperationSchema;
