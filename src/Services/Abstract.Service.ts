import { UpdateQuery } from 'mongoose';
import Exception from '../Exceptions/Exception';
import IVehicle from '../Interfaces/IVehicle';
import AbstractODM from '../Models/AbstractODM';
import CreateDomain from '../util/CreateDomain';

class AbstractService<T> {
  private type: string;
  private ODM;
  private createDomain = new CreateDomain();
  constructor(ODM: AbstractODM<T>, type: string) {
    this.ODM = ODM;
    this.type = type;
  }

  public async create(car: T) {
    const newVehicle = await this.ODM.create(car);

    const newDomain = this.createDomain.Vehicle(newVehicle as unknown as IVehicle, this.type);

    return newDomain;
  }

  public async findAll() {
    const newCar = await this.ODM.findAll();

    if (!newCar.length) throw new Exception(404, `${this.type} not found`);

    const getDomain = newCar
      .map((vehicle) => this.createDomain.Vehicle(vehicle as unknown as IVehicle, this.type));

    return getDomain;
  }

  public async findById(id: string) {
    const newCar = await this.ODM.findById(id);

    if (!newCar) throw new Exception(404, `${this.type} not found`);

    const getDomain = this.createDomain.Vehicle(newCar as unknown as IVehicle, this.type);

    return getDomain;
  }

  public async updateById(id: string, car: UpdateQuery<T>) {
    const updateCar = await this.ODM.updateById(id, car);
    
    if (!updateCar) throw new Exception(404, `${this.type} not found`);

    return updateCar;
  }
}

export default AbstractService;
