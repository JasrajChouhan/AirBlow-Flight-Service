import { logger } from '@/config';
import { ApiError } from '@/utils/api/ApiError';
import { PrismaErrorHandler } from '@/utils/prisma/prisma-error-handler';
import { PrismaClient } from '@prisma/client';

export class CRUDRepository<T extends keyof PrismaClient> {
  private db: PrismaClient;
  private model: T;

  constructor(db: PrismaClient, model: T) {
    this.db = db;
    this.model = model;
  }

  async create(data: any): Promise<any> {
    try {
      const response = await (this.db[this.model] as any).create({ data });
      return response;
    } catch (error: any) {
      logger.error(error.message || 'Something went wrong in the create method of CRUDRepository');
      PrismaErrorHandler(error);
    }
  }

  async delete(where: any): Promise<any> {
    console.log(where, this.model)
    try {
      const response = await (this.db[this.model] as any).delete({
        where: {
          id: where.id
        }
      });
      return response;
    } catch (error: any) {
      logger.error(error.message || 'Something went wrong in the delete method of CRUDRepository');
      PrismaErrorHandler(error);
      throw error;
    }
  }

  async get(where: any): Promise<any[]> {
    try {
      const response = await (this.db[this.model] as any).findMany({ where });
      if (!response || response.length === 0) {
        throw new ApiError(404, "No records found matching the criteria.");
      }
      return response;
    } catch (error: any) {
      logger.error(error.message || 'Something went wrong in the get method of CRUDRepository');
      PrismaErrorHandler(error);
      throw error;
    }
  }

  async getAll(): Promise<any[]> {
    try {
      const response = await (this.db[this.model] as any).findMany();
      return response;
    } catch (error: any) {
      logger.error(error.message || 'Something went wrong in the getAll method of CRUDRepository');
      return PrismaErrorHandler(error);
    }
  }

  async update(where: any, data: any): Promise<any> {
    try {
      const response = await (this.db[this.model] as any).update({ where, data });
      return response;
    } catch (error: any) {
      logger.error(error.message || 'Something went wrong in the update method of CRUDRepository');
      return PrismaErrorHandler(error);
    }
  }
}
