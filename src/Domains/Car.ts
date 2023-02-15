import ICar from '../Interfaces/ICar';
import Vehicle from './Vehicle';

class Car extends Vehicle {
  private doorsQty: number | undefined;
  private seatsQty: number | undefined;

  constructor(car: ICar) {
    super(car);
    const { doorsQty, seatsQty } = car;
    this.doorsQty = doorsQty;
    this.seatsQty = seatsQty;
  }

  public setDoorsQty(doorsQty: number) {
    this.doorsQty = doorsQty;
  }
  public getDoorsQty() {
    return this.doorsQty;
  }
  public setSeatsQty(seatsQty: number) {
    this.seatsQty = seatsQty;
  }
  public getSeatsQty() {
    return this.seatsQty;
  }
}

export default Car;
