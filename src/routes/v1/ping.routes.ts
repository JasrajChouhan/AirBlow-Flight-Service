import { ping } from '@/controllers';
import express from 'express';

const router = express.Router();
router.get('/', ping);

export default router;
