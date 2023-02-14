import { Model, models, Schema, model } from 'mongoose';
import ICar from '../Interfaces/ICar';

class CarODM {
  private schema: Schema;
  private model: Model<ICar>;

  constructor() {
    this.schema = new Schema<ICar>({
      // id: { type: String, required: true },
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean, required: true },
      buyValue: { type: Number, required: true },
      doorsQty: { type: Number, required: true },
      seatsQty: { type: Number, required: true },
    });
    this.model = models.cars || model('cars', this.schema);
  }

  public async create(car: ICar): Promise<ICar> {
    return this.model.create({ ...car });
  }

  public async findAll() {
    return this.model.find(
      {},
      { _id: 1, model: 1, year: 1, color: 1, status: 1, buyValue: 1, doorsQty: 1, seatsQty: 1 },
    );
  }

  public async findById(id: string) {
    return this.model.findById(
      id,
      { _id: 1, model: 1, year: 1, color: 1, status: 1, buyValue: 1, doorsQty: 1, seatsQty: 1 },
    );
  }

  public async updateById(id: string, car: ICar) {
    return this.model.updateMany({ id }, { $set: { ...car } });
  }
}

export default CarODM;