import { z } from 'zod';
import { createUserSchema, userReturn, userSchema } from '../schemas/user.schema';
import { Repository } from 'typeorm';

export type UserCreate = z.infer<typeof createUserSchema>;

export type UserReturn = z.infer<typeof userReturn>

export type EveryUser = UserReturn[]

export type UserAllInfo = z.infer<typeof userSchema>

export type UserRepo = Repository<User>