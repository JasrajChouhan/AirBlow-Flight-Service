import { Prisma } from '@prisma/client';
import { ApiError } from '../api/ApiError';

export const PrismaErrorHandler = (error: any): never => {
  console.log(
    error instanceof Prisma.PrismaClientKnownRequestError
  )
  if (error instanceof Prisma.PrismaClientKnownRequestError) {
    switch (error.code) {
      case 'P2002': // Unique constraint violation
        throw new ApiError(400, `Unique constraint failed on the field(s): ${(error.meta?.target as string[])?.join(', ')}`);

      case 'P2025': // Record not found
        throw new ApiError(404, 'Record not found');

      case 'P2003': // Foreign key constraint violation
        throw new ApiError(400, 'Foreign key constraint violation');
      
      case '5500' : 
        throw new ApiError(400, 'not found delete key error');

      default:
        throw new ApiError(500, `Database error: ${error.message}`);
    }
  }

  // Validation errors
  if (error instanceof Prisma.PrismaClientValidationError) {
    throw new ApiError(400, `Validation error: ${error.message}`);
  }

  // Unknown errors
  throw new ApiError(500, 'An unexpected database error occurred');
};
