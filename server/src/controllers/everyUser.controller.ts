import { Request, Response } from "express";
import { everyUserService } from '../services/everyUser.service';
import { EveryUser } from '../interfaces/user';
export const everyUserController = async (
  request: Request,
  response: Response,
): Promise<Response> => {
  const users: EveryUser = await everyUserService();

  return response.status(200).json(users);
};