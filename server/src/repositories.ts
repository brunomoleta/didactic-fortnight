import { UserRepo } from './interfaces/user';
import { AppDataSource } from './data-source';
import User from './entities/users.entity';

export const userRepo: UserRepo = AppDataSource.getRepository(User)