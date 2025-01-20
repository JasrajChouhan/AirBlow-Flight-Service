import { CityController } from '@/controllers';
import { validateReq } from '@/middlewares';
import { CitySchema } from '@/schema/environment.schema';
import express from 'express';

const router = express.Router();
// POST :: api/v1/city
router.post('/', validateReq(CitySchema), CityController.createCity);

export default router;
