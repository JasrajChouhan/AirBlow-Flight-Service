import { errorResponse } from "@/utils/api/ApiResponse";
import { NextFunction, Request, Response } from "express";
import { z } from "zod";

export const validateReq = (schema: z.Schema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      const parsedData = schema.parse(req.body);
      req.body = parsedData;
      next();
    } catch (error) {
      if (error instanceof z.ZodError) {
        const errorMessage = error.issues
          .map((issue) => `${issue.message} in field '${issue.path.join('.')}'`)
          .join(', ');
        res.json(errorResponse(errorMessage, 400));
        next(error);
      }
    }
  }
}