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

export default { createAirplane };
