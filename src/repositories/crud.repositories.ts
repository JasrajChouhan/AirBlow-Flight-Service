import { logger } from '@/config';
import { PrismaClient, Prisma } from '@prisma/client';

export class CRUDRepository<T extends keyof PrismaClient> {
  private db: PrismaClient;
  private model: T;

  constructor(db: PrismaClient, model: T) {
    this.db = db;
    this.model = model;
  }

  async create(data: PrismaClient[T]['create']['data']): Promise<any> {
    try {
      const response = await (this.db[this.model] as any).create({ data });
      return response;
    } catch (error: any) {
      logger.error(error.message || 'Something went wrong in the create method of CRUDRepository');
      throw error;
    }
  }

  async delete(where: PrismaClient[T]['delete']['where']): Promise<any> {
    try {
      const response = await (this.db[this.model] as any).delete({ where });
      return response;
    } catch (error: any) {
      logger.error(error.message || 'Something went wrong in the delete method of CRUDRepository');
      throw error;
    }
  }

  async get(where: PrismaClient[T]['findMany']['where']): Promise<any[]> {
    try {
      const response = await (this.db[this.model] as any).findMany({ where });
      return response;
    } catch (error: any) {
      logger.error(error.message || 'Something went wrong in the get method of CRUDRepository');
      throw error;
    }
  }

  async getAll(): Promise<any[]> {
    try {
      const response = await (this.db[this.model] as any).findMany();
      return response;
    } catch (error: any) {
      logger.error(error.message || 'Something went wrong in the getAll method of CRUDRepository');
      throw error;
    }
  }

  async update(where: PrismaClient[T]['update']['where'], data: PrismaClient[T]['update']['data']): Promise<any> {
    try {
      const response = await (this.db[this.model] as any).update({ where, data });
      return response;
    } catch (error: any) {
      logger.error(error.message || 'Something went wrong in the update method of CRUDRepository');
      throw error;
    }
  }
}
