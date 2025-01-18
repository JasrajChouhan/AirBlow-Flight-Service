import { logger } from '@/config';
import { AirplaneService } from '@/services';
import { NextFunction, Request, Response } from 'express';

const createAirplane = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { modelNumber, capacity } = req.body; // get the data from the request
    if (!modelNumber || !capacity) {
      res.status(400).json({
        success: false,
        data: null,
        message: 'Model number and capacity are required',
        statusCode: 400,
      });
    }
    const response = await AirplaneService.createAirplane({ modelNumber, capacity });
    res.status(200).json({
      success: true,
      data: response,
      message: 'Airplane created successfully',
      statusCode: 200,
    });
  } catch (error: any) {
    logger.error(error.message || 'Something went wrong in the createAirplaneController method of AirplaneController');
    res.status(500).json({
      success: false,
      data: null,
      message: error.message || 'Something went wrong in the createAirplaneController method of AirplaneController',
      statusCode: 500,
    });
  }
};

// Get All Airplanes
const getAllAirplanes = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const response = await AirplaneService.getAllAirplanes();
    res.status(200).json({
      success: true,
      data: response,
      message: 'Airplanes fetched successfully',
      statusCode: 200,
    });
  } catch (error: any) {
    logger.error(error.message || 'Something went wrong in the getAllAirplanes method of AirplaneController');
    res.status(500).json({
      success: false,
      data: null,
      message: error.message || 'Something went wrong in the getAllAirplanes method of AirplaneController',
      statusCode: 500,
    });
  }
};

// Get Airplane by id
const getAirplaneById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const response = await AirplaneService.getAirplaneById(id);
    res.status(200).json({
      success: true,
      data: response,
      message: 'Airplane fetched successfully',
      statusCode: 200,
    });
  } catch (error: any) {
    logger.error(error.message || 'Something went wrong in the getAirplaneById method of AirplaneController');
    res.status(500).json({
      success: false,
      data: null,
      message: error.message || 'Something went wrong in the getAirplaneById method of AirplaneController',
      statusCode: 500,
    });
  }
};

export default { createAirplane, getAllAirplanes, getAirplaneById };
