import express from 'express';
import airplaneRoutes from './airplane.routes';
import pingRoutes from './ping.routes';

const router = express.Router();

router.use('/airplanes', airplaneRoutes);
router.use('/ping', pingRoutes);

export default router;
