import { NextFunction, Request, Response } from "express";
import { z } from "zod";

import { AppError } from "./AppError.errors";

export const handleError = (
  err: Error,
  request: Request,
  response: Response,
  next: NextFunction
) => {
  if (err instanceof z.ZodError) {
    return response.status(400).json({ message: err.flatten().fieldErrors });
  }

  if (!(err instanceof AppError)) {
    console.error(err);
    return response.status(500).json({
      message: "Internal Server Error.",
    });
  }

  return response.status(err.statusCode).json({ message: err.message });
};