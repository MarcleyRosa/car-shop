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

      return this.res.status(201).json(newCar);
    } catch (error) {
      this.next(error);
    }
  }

  public async findAll() {
    try {
      const findAllCars = await this.service.findAll();

      return this.res.status(200).json(findAllCars);
    } catch (error) {
      this.next(error);
    }
  }

  public async findById() {
    const { id } = this.req.params;
    try {
      const findCarsById = await this.service.findById(id);

      return this.res.status(200).json(findCarsById);
    } catch (error) {
      this.next(error);
    }
  }

  public async updateById() {
    const { id } = this.req.params;
    const car: ICar = this.req.body;
    try {
      await this.service.updateById(id, car);

      return this.res.status(200).json({ id, ...car });
    } catch (error) {
      this.next(error);
    }
  }
}
export default CarsController;
