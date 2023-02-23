import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleODM from '../Models/MotorcyclesODM';
import AbstractService from './Abstract.Service';

class MotorcyclesService extends AbstractService<IMotorcycle> {
  constructor() {
    super(new MotorcycleODM(), 'Motorcycle');
  }
}

export default MotorcyclesService;