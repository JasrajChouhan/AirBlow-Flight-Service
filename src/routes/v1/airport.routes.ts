import { AirportController } from '@/controllers';
import { validateReq } from '@/middlewares';
import { AirportSchema } from '@/schema/environment.schema';
import express from 'express';

const router = express.Router();
// api/v1/airport
router.post('/', validateReq(AirportSchema), AirportController.createAirport);
router.get('/', AirportController.getAllAirports);
router.get('/:id', AirportController.getAirportById);
router.delete('/:id', AirportController.deleteAirportById);

export default router;
