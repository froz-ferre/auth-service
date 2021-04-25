import express, { Application, Request, Response } from 'express';
import postgresPool from './db/db-adapter';
import dotenv from 'dotenv';

dotenv.config();
const PORT = process.env.PORT || 3000;

const app: Application = express();

app.get('/', (req: Request, res: Response) => {
  res.send('Hello');
});

app.listen(PORT, () => {console.log(`Server run on port: ${PORT}`)});
