import { CRUDRepository } from '@/repositories/crud.repositories';
import { PrismaClient } from '@prisma/client';
export class CityRepository<T extends keyof PrismaClient> extends CRUDRepository<'city'> {
  constructor(db: PrismaClient, model: T) {
    super(db, 'city'); // pass the model name
  }
}
