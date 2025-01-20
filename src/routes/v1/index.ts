import express from 'express';
import airplaneRoutes from './airplane.routes';
import pingRoutes from './ping.routes';
import cityRoutes from './city.routes';

const router = express.Router();

router.use('/airplanes', airplaneRoutes);
router.use('/ping', pingRoutes);
router.use('/cities', cityRoutes);

export default router;
