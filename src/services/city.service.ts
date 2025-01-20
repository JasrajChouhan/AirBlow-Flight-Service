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

export const getAllCities = async () => {
  try {
    const response = await city.getAll();
    return response;
  } catch (error: any) {
    logger.error(error.message || 'Something went wrong in the getAllCities method of CityService');
    throw error;
  }
};

export const getCityById = async (id: string) => {
  try {
    const response = await city.get({ id });
    return response;
  } catch (error: any) {
    logger.error(error.message || 'Something went wrong in the getCityById method of CityService');
    throw error;
  }
};

export const deleteCityById = async (id: string) => {
  try {
    const response = await city.delete({ id });
    return response;
  } catch (error: any) {
    logger.error(error.message || 'Something went wrong in the deleteCityById method of CityService');
    throw error;
  }
};

export default {
  createCity,
  getAllCities,
  deleteCityById,
  getCityById,
};
