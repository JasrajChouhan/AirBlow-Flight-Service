import { logger } from '@/config';
import prisma from '@/config/prisma';
import { AirplaneRepository } from '@/repositories';

const airplane = new AirplaneRepository(prisma, 'airplane');

export const createAirplane = async (data: any) => {
  try {
    const respone = await airplane.create(data);
    return respone;
  } catch (error: any) {
    logger.error(error.message || 'Something went wrong in the createAirplane method of AirplaneService');
    throw error;
  }
};

export default { createAirplane };
