import Motorcycles from '../Domains/Motorcycle';
import Exception from '../Exceptions/Exception';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleODM from '../Models/MotorcyclesODM';

class MotorcyclesService {
  private notFound = 'Motorcycle not found';
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
    const motorcycleODM = new MotorcycleODM();

    const newCar = await motorcycleODM.findAll();

    if (!newCar.length) throw new Exception(404, this.notFound);

    const getDomain = newCar.map((e) => this.createMotorcycleDomain(e));

    return getDomain;
  }

  public async findById(id: string) {
    const motorcycleODM = new MotorcycleODM();

    const newCar = await motorcycleODM.findById(id);

    if (!newCar) throw new Exception(404, this.notFound);

    const getDomain = this.createMotorcycleDomain(newCar);

    return getDomain;
  }

  public async updateById(id: string, motorcycle: IMotorcycle) {
    const motorcycleODM = new MotorcycleODM();

    const updateMotorcycle = await motorcycleODM.updateById(id, motorcycle);
    
    if (!updateMotorcycle) throw new Exception(404, this.notFound);

    return updateMotorcycle;
  }
}

export default MotorcyclesService;