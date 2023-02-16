import { NextFunction, Request, Response } from 'express';
import IMotorcycle from '../Interfaces/IMotorcycles';
import MotorcycleService from '../Services/Motorcycles.Service';

class MotorcycleController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: MotorcycleService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new MotorcycleService();
  }

  public async create() {
    const motorcycle: IMotorcycle = this.req.body;
    try {
      const newMotorcycle = await this.service.create(motorcycle);

      return this.res.status(201).json(newMotorcycle);
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
    const motorcycle: IMotorcycle = this.req.body;
    try {
      await this.service.updateById(id, motorcycle);

      return this.res.status(200).json({ id, ...motorcycle });
    } catch (error) {
      this.next(error);
    }
  }
}
export default MotorcycleController;
