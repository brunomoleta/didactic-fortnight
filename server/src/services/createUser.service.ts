import { UserAllInfo, UserCreate } from "../interfaces/user";
import { User } from "../entities";
import { userRepo } from "../repositories";
import { userSchema } from "../schemas/user.schema";

export const createUserService = async (
  data: UserCreate
): Promise<UserAllInfo> => {
  const user: User = userRepo.create(data);

  await userRepo.save(user);

  return userSchema.parse(user);
};
