import express from 'express';
import middlewareError from './Middleware/MiddlewareError';
import CarsRouter from './Routers/Cars.Router';
import MotorcyclesRouter from './Routers/Motorcycle.Router';

const app = express();

app.use(express.json());

app.use('/cars', CarsRouter);

app.use('/motorcycles', MotorcyclesRouter);

app.use(middlewareError);

export default app;
