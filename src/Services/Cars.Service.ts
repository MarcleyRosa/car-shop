import ICar from '../Interfaces/ICar';
import Car from '../Domains/Car';
import CarODM from '../Models/CarODM';
import Exception from '../Exceptions/Exception';

class CarsService {
  private carNotFound = 'Car not found';
  private createCarDomain(newCar: ICar | null): Car | null {
    if (newCar) {
      return new Car(newCar);
    }
    return null;
  }

  public async create(car: ICar) {
    const carODM = new CarODM();

    const newCar = await carODM.create(car);

    const newDomain = this.createCarDomain(newCar);

    return newDomain;
  }

  public async findAll() {
    const carODM = new CarODM();

    const newCar = await carODM.findAll();

    if (!newCar.length) throw new Exception(404, this.carNotFound);

    const getDomain = newCar.map((e) => this.createCarDomain(e));

    return getDomain;
  }

  public async findById(id: string) {
    const carODM = new CarODM();

    const newCar = await carODM.findById(id);

    if (!newCar) throw new Exception(404, this.carNotFound);

    const getDomain = this.createCarDomain(newCar);

    return getDomain;
  }

  public async updateById(id: string, car: ICar) {
    const carODM = new CarODM();

    const updateCar = await carODM.updateById(id, car);
    
    if (!updateCar) throw new Exception(404, 'Car not found');

    return updateCar;
  }
}

export default CarsService;
