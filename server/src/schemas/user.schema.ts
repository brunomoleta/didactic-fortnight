import { z } from "zod";

const AllowedValues = z.enum(["starter", "pro", "ultimate"]);
export const userSchema = z.object({
  id: z.number().positive().int(),
  name: z.string().max(64).min(3),
  email: z.string().email().max(64).min(9),
  phoneNumber: z.string().max(24),
  annual: z.boolean().default(true),
  plan: AllowedValues,
  company: z.string().max(64).min(2),
  createdAt: z.string(),
});

export const createUserSchema = userSchema.omit({
  id: true,
  createdAt: true,
});

export const userReturnSimple = createUserSchema.pick({
  name: true,
  company: true,
});

export const everyUserSchema = userReturnSimple.array();