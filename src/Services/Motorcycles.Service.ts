import Motorcycles from '../Domains/Motorcycle';
import Exception from '../Exceptions/Exception';
import IMotorcycle from '../Interfaces/IMotorcycles';
import MotorcycleODM from '../Models/MotorcyclesODM';

class MotorcyclesService {
  private carNotFound = 'Motorcycle not found';
  private createMotorcycleDomain(newMotorcycle: IMotorcycle | null): Motorcycles | null {
    if (newMotorcycle) {
      return new Motorcycles(newMotorcycle);
    }
    return null;
  }

  public async create(motorcycle: IMotorcycle) {
    const motorcycleODM = new MotorcycleODM();

    const newMotorcycle = await motorcycleODM.create(motorcycle);

    const newDomain = this.createMotorcycleDomain(newMotorcycle);

    return newDomain;
  }

  public async findAll() {
    const carODM = new MotorcycleODM();

    const newCar = await carODM.findAll();

    if (!newCar.length) throw new Exception(404, this.carNotFound);

    const getDomain = newCar.map((e) => this.createMotorcycleDomain(e));

    return getDomain;
  }

  public async findById(id: string) {
    const carODM = new MotorcycleODM();

    const newCar = await carODM.findById(id);

    if (!newCar) throw new Exception(404, this.carNotFound);

    const getDomain = this.createMotorcycleDomain(newCar);

    return getDomain;
  }
}

export default MotorcyclesService;