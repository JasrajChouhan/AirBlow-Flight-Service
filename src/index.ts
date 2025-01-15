import express, { Request, Response } from 'express';
import type { Express } from 'express';

const PORT = 3000;
const app: Express = express();


app.use(express.json());


app.get('/', (req: Request, res: Response) => {
  res.send(`<h1>Hello at home </h1>`);
});

app.listen(PORT, () => {
  console.log(`server listen at port ${PORT}`)
})