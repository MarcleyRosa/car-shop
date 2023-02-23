import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';
import AbstractService from './Abstract.Service';

class CarsService extends AbstractService<ICar> {
  constructor() {
    super(new CarODM(), 'Car');
  }
}

export default CarsService;
