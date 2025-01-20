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

export default {
  createCity,
};
