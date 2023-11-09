import { Router } from "express";
import { validateBody } from "../middlewares/validateBody.middleware";
import { createUserSchema } from "../schemas/user.schema";
import { verifyUserEmail } from "../middlewares/users/verifyEmail.middleware";
import { createUserController } from "../controllers/createUser.controller";
import { everyUserController } from '../controllers/everyUser.controller';

export const usersRouter: Router = Router();

usersRouter.post(
  "/",
  verifyUserEmail,
  validateBody(createUserSchema),
  createUserController
);

usersRouter.get("/", everyUserController);
