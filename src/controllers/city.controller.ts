import { logger } from '@/config';
import { CityService } from '@/services';
import { successResponse } from '@/utils/api/ApiResponse';
import { NextFunction, Request, Response } from 'express';

const createCity = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { modelNumber, capacity } = req.body; // get the data from the request
    const response = await CityService.createCity({ modelNumber, capacity });
    res.json(successResponse(response));
  } catch (error: any) {
    logger.error(error.message || 'Something went wrong in the createCityController method of CityController');
    next(error);
  }
};

export const getAllCities = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const response = await CityService.getAllCities();
    res.json(successResponse(response));
  } catch (error: any) {
    logger.error(error.message || 'Something went wrong in the getAllCities method of CityController');
    next(error);
  }
};

export const getCityById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const response = await CityService.getCityById(id);
    res.json(successResponse(response));
  } catch (error: any) {
    logger.error(error.message || 'Something went wrong in the getCityById method of CityController');
    next(error);
  }
};

export const deleteCityById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const response = await CityService.deleteCityById(id);
    res.json(successResponse(response));
  } catch (error: any) {
    logger.error(error.message || 'Something went wrong in the deleteCityById method of CityController');
    next(error);
  }
};

export default {
  createCity,
  getAllCities,
  getCityById,
  deleteCityById,
};
