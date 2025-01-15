import type { Express } from 'express';
import express, { Request, Response } from 'express';
import { getEnv } from './config/getEnv';

const PORT = getEnv('PORT', 3000);
console.log(PORT)
const app: Express = express();


app.use(express.json());


app.get('/', (req: Request, res: Response) => {
  res.send(`<h1>Hello at home </h1>`);
});

app.listen(PORT, () => {
  console.log(`server listen at port ${PORT}`)
})