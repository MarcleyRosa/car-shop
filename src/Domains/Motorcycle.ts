import IMotorcycles from '../Interfaces/IMotorcycles';
import Vehicle from './Vehicle';

class Motorcycles extends Vehicle {
  private category: string;
  private engineCapacity: number | undefined;

  constructor(motorcycle: IMotorcycles) {
    super(motorcycle);
    const { category, engineCapacity } = motorcycle;
    this.category = category;
    this.engineCapacity = engineCapacity;
  }

  public setCategory(category: string) {
    this.category = category;
  }
  public getCategory() {
    return this.category;
  }
  public setEngineCapacity(engineCapacity: number) {
    this.engineCapacity = engineCapacity;
  }
  public getEngineCapacity() {
    return this.engineCapacity;
  }
}

export default Motorcycles;
