import Car from '../Domains/Car';
import Motorcycles from '../Domains/Motorcycle';
import ICar from '../Interfaces/ICar';
import IMotorcycle from '../Interfaces/IMotorcycle';
import IVehicle from '../Interfaces/IVehicle';

export default class CreateDomain {
  public Vehicle(vehicle: IVehicle, type: string): Car | Motorcycles | null {
    if (type === 'Car') {
      return new Car(vehicle as ICar);
    }

    if (type === 'Motorcycle') {
      return new Motorcycles(vehicle as IMotorcycle);
    }
    return null;
  }
}