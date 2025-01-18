import { NextFunction, Request, Response } from 'express';
import { ApiError } from '../api/ApiError';
import { errorResponse } from '../api/ApiResponse';
export const errorHandler = (err: ApiError | Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof ApiError) {
    return res.status(err.statusCode).json(errorResponse(err.message, err.statusCode));
  }
  return res.status(500).json(errorResponse(err.message || 'Internal server error', 500));
};
