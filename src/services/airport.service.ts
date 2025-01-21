import { logger } from '@/config';
import prisma from '@/config/prisma';
import { AirportRepository } from '@/repositories';

const airport = new AirportRepository(prisma, 'airport');

// create airport
export const createAirport = async (data: any) => {
  try {
    const respone = await airport.create(data);
    return respone;
  } catch (error: any) {
    logger.error(error.message || 'Something went wrong in the createAirport method of airportService');
    throw error;
  }
};

export const getAllAirports = async () => {
  try {
    const response = await airport.getAll();
    return response;
  } catch (error: any) {
    logger.error(error.message || 'Something went wrong in the getAllAirports method of airportService');
    throw error;
  }
};

export const getAirportById = async (id: string) => {
  try {
    const response = await airport.get({ id });
    return response;
  } catch (error: any) {
    logger.error(error.message || 'Something went wrong in the getAirportById method of airportService');
    throw error;
  }
};

export const deleteAirportById = async (id: string) => {
  try {
    const response = await airport.delete({ id });
    console.log(response);
    return response;
  } catch (error: any) {
    logger.error(error.message || 'Something went wrong in the deleteAirportById method of airportService');
    throw error;
  }
};

export default {
  createAirport,
  getAllAirports,
  deleteAirportById,
  getAirportById,
};
