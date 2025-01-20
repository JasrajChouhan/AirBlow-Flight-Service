import { AirplaneController } from '@/controllers';
import { validateReq } from '@/middlewares';
import { AirplaneSchema } from '@/schema/environment.schema';
import express from 'express';

const router = express.Router();
// POST :: api/v1/airplanes
router.post('/', validateReq(AirplaneSchema), AirplaneController.createAirplane);
// GET :: api/v1/airplanes
router.get('/', AirplaneController.getAllAirplanes);
// GET :: api/v1/airplanes/:id
router.get('/:id', AirplaneController.getAirplaneById);

router.delete('/:id', AirplaneController.deleteAirplaneById);

export default router;
