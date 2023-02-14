import express from 'express';
import CarsRouter from './Routers/Cars.Router';

const app = express();

app.use(express.json());

app.use('/cars', CarsRouter);

export default app;
