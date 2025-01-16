import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient({
  log: ['query'],
  errorFormat: 'pretty',
  errorFormatOptions: {
    code: true,
    message: true,
    stack: true,
  },
});

export default prisma;
