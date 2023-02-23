import { NextFunction, Request, Response } from 'express';
import { UpdateQuery } from 'mongoose';
import AbstractService from '../Services/Abstract.Service';

class AbstractController<T> {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: AbstractService<T>;

  constructor(req: Request, res: Response, next: NextFunction, service: AbstractService<T>) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = service;
  }

  public async create() {
    const vehicle: T = this.req.body;
    try {
      const newVehicle = await this.service.create(vehicle);

      return this.res.status(201).json(newVehicle);
    } catch (error) {
      this.next(error);
    }
  }

  public async findAll() {
    try {
      const findAllVehicles = await this.service.findAll();

      return this.res.status(200).json(findAllVehicles);
    } catch (error) {
      this.next(error);
    }
  }

  public async findById() {
    const { id } = this.req.params;
    try {
      const findvehiclesById = await this.service.findById(id);

      return this.res.status(200).json(findvehiclesById);
    } catch (error) {
      this.next(error);
    }
  }

  public async updateById() {
    const { id } = this.req.params;
    const vehicle: UpdateQuery<T> = this.req.body;
    try {
      await this.service.updateById(id, vehicle);

      return this.res.status(200).json({ id, ...vehicle });
    } catch (error) {
      this.next(error);
    }
  }
}
export default AbstractController;
