import { logger } from '@/config';
import prisma from '@/config/prisma';
import { CityRepository } from '@/repositories';

const city = new CityRepository(prisma, 'city');

// create city
export const createCity = async (data: any) => {
  try {
    const respone = await city.create(data);
    return respone;
  } catch (error: any) {
    logger.error(error.message || 'Something went wrong in the createCity method of CityService');
    throw error;
  }
};

export default {
  createCity,
};
