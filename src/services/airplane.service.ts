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

export const getAllAirplanes = async () => {
  try {
    const response = await airplane.getAll();
    return response;
  } catch (error: any) {
    logger.error(error.message || 'Something went wrong in the getAllAirplanes method of AirplaneService');
    throw error;
  }
};

export const getAirplaneById = async (id: string) => {
  try {
    const response = await airplane.get({ id });
    return response;
  } catch (error: any) {
    logger.error(error.message || 'Something went wrong in the getAirplaneById method of AirplaneService');
    throw error;
  }
};

// delete an airplane by using of id

export const deleteAirplaneById = async (id: string) => {
  console.log("id" , id);
  try {
    const response = await airplane.delete({ id });
    return response;
  } catch (error: any) {
    logger.error(error.message || 'Something went wrong in the deleteAirplaneById method of AirplaneService');
    throw error;
  }
};

export default { createAirplane, getAllAirplanes, getAirplaneById, deleteAirplaneById };
