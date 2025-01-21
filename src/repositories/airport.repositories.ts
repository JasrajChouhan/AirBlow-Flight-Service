import { CRUDRepository } from '@/repositories/crud.repositories';
import { PrismaClient } from '@prisma/client';
export class AirportRepository<T extends keyof PrismaClient> extends CRUDRepository<'airport'> {
  constructor(db: PrismaClient, model: T) {
    super(db, 'airport'); // pass the model name
  }
}
