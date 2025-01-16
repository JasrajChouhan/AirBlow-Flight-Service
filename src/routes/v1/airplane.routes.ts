import { AirplaneController } from '@/controllers';
import express from 'express';

const router = express.Router();

router.post('/', AirplaneController.createAirplane);

export default router;
