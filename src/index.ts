import type { Express } from 'express';
import express, { Request, Response } from 'express';
import { getEnv, logger } from '@/config';

import apiRoutes from '@/routes/index';

const PORT = getEnv('PORT', 3000);
console.log(PORT);
const app: Express = express();

app.use(express.json());

app.use('/api', apiRoutes);

app.listen(PORT, () => {
  console.log(`server listen at port ${PORT}`);
});
