import express from 'express';
import airplaneRoutes from './airplane.routes';
import airportRoutes from './airport.routes';
import cityRoutes from './city.routes';
import pingRoutes from './ping.routes';

const router = express.Router();

router.use('/airplanes', airplaneRoutes);
router.use('/ping', pingRoutes);
router.use('/cities', cityRoutes);
router.use('/airports', airportRoutes);

export default router;
