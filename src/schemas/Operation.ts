import { z } from "zod";

export const CreateOperationDTO = z.object({
  transferAccountId: z.string(),
  description: z.string(),
  type: z.enum(["income", "expense"]),
  amount: z.number(),
});

export const UpdateOperationDTO = z.object({
  date: z.string(), // TODO: Needs to accept string!
  transferAccountId: z.string(),
  description: z.string(),
  type: z.enum(["income", "expense"]),
  amount: z.number(),
});
