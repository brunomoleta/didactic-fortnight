import { Request, Response } from "express";
import { UserAllInfo } from "../interfaces/user";
import { createUserService } from "../services/createUser.service";

export const createUserController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const user: UserAllInfo = await createUserService(request.body);

  return response.status(201).json(user);
};