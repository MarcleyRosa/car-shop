import { NextFunction, Request, Response } from 'express';
import ICar from '../Interfaces/ICar';
import CarsService from '../Services/Cars.Service';
import AbstractController from './Abstract.Controller';

class CarsController extends AbstractController<ICar> {
  constructor(req: Request, res: Response, next: NextFunction) {
    super(req, res, next, new CarsService());
  }
}
export default CarsController;
