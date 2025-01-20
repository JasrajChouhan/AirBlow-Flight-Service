import { CityController } from '@/controllers';
import { validateReq } from '@/middlewares';
import { CitySchema } from '@/schema/environment.schema';
import express from 'express';

const router = express.Router();
// api/v1/city
router.post('/', validateReq(CitySchema), CityController.createCity);
router.get('/', CityController.getAllCities);
router.get('/:id', CityController.getCityById);
router.delete('/:id', CityController.deleteCityById);

export default router;
