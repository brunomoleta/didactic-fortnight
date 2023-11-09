import {Router} from "express";
import {usersRouter} from "./users.route";
export const allRoutes: Router = Router();

allRoutes.use("/users", usersRouter)
