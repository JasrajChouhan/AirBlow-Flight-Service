import { CRUDRepository } from '@/repositories/crud.repositories';
import { PrismaClient } from '@prisma/client';
export class AirplaneRepository<T extends keyof PrismaClient> extends CRUDRepository<'airplane'> {
  constructor(db: PrismaClient, model: T) {
    super(db, 'airplane'); // pass the model name
  }
}
