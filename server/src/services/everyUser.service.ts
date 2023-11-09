import { EveryUser } from '../interfaces/user';
import { User } from '../entities';
import { userRepo } from '../repositories';
import { everyUserSchema } from '../schemas/user.schema';

export const everyUserService = async (): Promise<EveryUser> => {
  const users: User[] = await userRepo.find();

  return everyUserSchema.parse(users);
};
