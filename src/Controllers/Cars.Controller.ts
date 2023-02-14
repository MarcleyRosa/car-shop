import { NextFunction, Request, Response } from 'express';
import ICar from '../Interfaces/ICar';
import CarsService from '../Services/Cars.Service';

class CarsController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: CarsService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new CarsService();
  }

  public async create() {
    const car: ICar = this.req.body;
    try {
      const newCar = await this.service.create(car);

      return this.res.status(201).json({ id: newCar, ...car });
    } catch (error) {
      this.next(error);
    }
  }
}
export default CarsController;
