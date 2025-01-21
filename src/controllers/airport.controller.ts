import { logger } from '@/config';
import { AirportService } from '@/services';
import { successResponse } from '@/utils/api/ApiResponse';
import { NextFunction, Request, Response } from 'express';

const createAirport = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name, code } = req.body; // get the data from the request
    const response = await AirportService.createAirport({ name, code });
    res.json(successResponse(response));
  } catch (error: any) {
    logger.error(error.message || 'Something went wrong in the createAirportController method of CityController');
    next(error);
  }
};

export const getAllAirports = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const response = await AirportService.getAllAirports();
    res.json(successResponse(response));
  } catch (error: any) {
    logger.error(error.message || 'Something went wrong in the getAllAirport method of CityController');
    next(error);
  }
};

export const getAirportById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const response = await AirportService.getAirportById(id);
    res.json(successResponse(response));
  } catch (error: any) {
    logger.error(error.message || 'Something went wrong in the getAirportById method of CityController');
    next(error);
  }
};

export const deleteAirportById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const response = await AirportService.deleteAirportById(id);
    res.json(successResponse(response));
  } catch (error: any) {
    logger.error(error.message || 'Something went wrong in the deleteAirportById method of CityController');
    next(error);
  }
};

export default {
  createAirport,
  getAirportById,
  getAllAirports,
  deleteAirportById,
};
