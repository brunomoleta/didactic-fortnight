import "reflect-metadata";
import "express-async-errors";
import express, { Application, json } from "express";

import { handleError } from "./errors/ErrorHandler";
import { allRoutes } from './routes/index.routes';

const app: Application = express();

app.use(json());

app.use("/", allRoutes);

app.use(handleError);

export default app;