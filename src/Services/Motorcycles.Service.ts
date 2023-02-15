import Motorcycles from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycles';
import MotorcycleODM from '../Models/MotorcyclesODM';

class MotorcyclesService {
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
}

export default MotorcyclesService;