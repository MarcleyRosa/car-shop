import ICar from '../Interfaces/ICar';

class Car {
  protected _id: string | undefined;
  protected _model: string;
  protected _year: number;
  protected _color: string; 
  protected _status: boolean;
  protected _buyValue: number;  
  protected _doorsQty: number | undefined;
  protected _seatsQty: number | undefined;

  constructor(car: ICar) {
    const { id, model, year, color, status, buyValue, doorsQty, seatsQty } = car;
    this._id = id || undefined;
    this._model = model;
    this._year = year;
    this._color = color;
    this._status = status || false;
    this._buyValue = buyValue;
    this._doorsQty = doorsQty;
    this._seatsQty = seatsQty;
  } 

  protected get id() {
    return this._id;
  }

  protected set model(model: string) {
    this._model = model;
  }

  protected get model() {
    return this._model;
  }

  protected set year(year: number) {
    this._year = year;
  }

  protected get year() {
    return this._year;
  }

  protected set color(color: string) {
    this._color = color;
  }

  protected get color() {
    return this._color;
  }

  protected set status(status: boolean) {
    this._status = status;
  }

  protected get status() {
    return this._status;
  }

  protected set buyValue(buyValue: number) {
    this._buyValue = buyValue;
  }

  protected get buyValue() {
    return this._buyValue;
  }

  // set doorsQty(doorsQty) {
  //   this._doorsQty = doorsQty;
  // }

  // get doorsQty() {
  //   return this._doorsQty;
  // } 

  // set seatsQty(seatsQty) {
  //   this._seatsQty = seatsQty;
  // }

  // get seatsQty() {
  //   return this._seatsQty;
  // }
}

export default Car;
