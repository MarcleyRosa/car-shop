import { NextFunction, Request, Response } from 'express';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleService from '../Services/Motorcycles.Service';
import AbstractController from './Abstract.Controller';

class MotorcycleController extends AbstractController<IMotorcycle> {
  constructor(req: Request, res: Response, next: NextFunction) {
    super(req, res, next, new MotorcycleService());
  }
}
export default MotorcycleController;
