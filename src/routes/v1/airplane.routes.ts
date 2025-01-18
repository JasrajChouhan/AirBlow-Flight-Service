import { AirplaneController } from '@/controllers';
import express from 'express';

const router = express.Router();
// POST :: api/v1/airplanes
router.post('/', AirplaneController.createAirplane);
// GET :: api/v1/airplanes
router.get('/', AirplaneController.getAllAirplanes);
// GET :: api/v1/airplanes/:id
router.get('/:id', AirplaneController.getAirplaneById);

export default router;
