import ICar from '../Interfaces/ICar';
import Car from '../Domains/Car';
import CarODM from '../Models/CarODM';

class CarsService {
  private createCarDomain(newCar: ICar | null): Car | null {
    if (newCar) {
      return new Car(newCar);
    }
    return null;
  }

  public async create(car: ICar) {
    const carODM = new CarODM();

    const newCar = await carODM.create(car);

    // return this.createCarDomain(newCar);

    return newCar.id;
  }
}

export default CarsService;
