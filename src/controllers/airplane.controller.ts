import { logger } from '@/config';
import { AirplaneService } from '@/services';
import { errorResponse, successResponse } from '@/utils/api/ApiResponse';
import { NextFunction, Request, Response } from 'express';

const createAirplane = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { modelNumber, capacity } = req.body; // get the data from the request
    if (!modelNumber || !capacity) {
      res.json(errorResponse('Model number and capacity are required', 400));
    }
    const response = await AirplaneService.createAirplane({ modelNumber, capacity });
    res.json(successResponse(response));
  } catch (error: any) {
    logger.error(error.message || 'Something went wrong in the createAirplaneController method of AirplaneController');
    next(error);
  }
};

// Get All Airplanes
const getAllAirplanes = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const response = await AirplaneService.getAllAirplanes();
    res.json(successResponse(response));
  } catch (error: any) {
    logger.error(error.message || 'Something went wrong in the getAllAirplanes method of AirplaneController');
    next(error);
  }
};

// Get Airplane by id
const getAirplaneById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const response = await AirplaneService.getAirplaneById(id);
    res.json(successResponse(response));
  } catch (error: any) {
    logger.error(error.message || 'Something went wrong in the getAirplaneById method of AirplaneController');
    next(error);
  }
};

const deleteAirplaneById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    if (!id) {
      res.json(errorResponse('Id is required', 400));
    }
    const response = await AirplaneService.deleteAirplaneById(id);
    res.json(successResponse(response));
  } catch (error: any) {
    logger.error(error.message || 'Something went wrong in the deleteAirplaneById method of AirplaneController');
    next(error);
  }
};

export default { createAirplane, getAllAirplanes, getAirplaneById, deleteAirplaneById };
