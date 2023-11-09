import { z } from "zod";

enum PlanOptions {
  Q = "starter",
  J = "business",
  K = "enterprise"
}

export const userSchema = z.object({
  id: z.number().positive().int(),
  name: z.string().max(64).min(3),
  email: z.string().email().max(64).min(9),
  phoneNumber: z.string().max(24),
  annual: z.boolean().default(true),
  plan: z.nativeEnum(PlanOptions).default(PlanOptions.J),
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