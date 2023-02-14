import ICar from '../Interfaces/ICar';
import Car from '../Domains/Car';
import CarODM from '../Models/CarODM';
import Exception from '../Exceptions/Exception';

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

  public async findAll() {
    const carODM = new CarODM();

    const newCar = await carODM.findAll();

    if (!newCar.length) throw new Exception(404, 'Car not found');

    return newCar;
  }

  public async findById(id: string) {
    const carODM = new CarODM();

    const newCar = await carODM.findById(id);

    return newCar;
  }

  public async updateById(id: string, car: ICar) {
    const carODM = new CarODM();

    const newCar = await carODM.findById(id);

    if (!newCar) throw new Exception(404, 'Car not found');

    const updateCar = await carODM.updateById(id, car);

    return updateCar;
  }
}

export default CarsService;
