import { NextFunction, Request, Response } from "express";

import User from "../../entities/users.entity";
import { AppError } from "../../errors/AppError.errors";
import { userRepo } from "../../repositories";

export const verifyUserEmail = async (
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> => {
  const { email } = request.body;

  const userEmail: User | null = await userRepo.findOneBy({ email });

  const errorMessage: string = `Email already exists`;
  if (userEmail) {
    throw new AppError(errorMessage, 409);
  }

  return next();
};