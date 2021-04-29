import express, { Application } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import router from './routes';
import { notFound } from './middleware/not-found';

dotenv.config();
const PORT = process.env.PORT || 3000;

const app: Application = express();
app.use(cors());
app.use(express.json());
app.use('/api', router);
app.use('*', notFound);

app.listen(PORT, () => {console.log(`Server run on port: ${PORT}`)});
