import { Model, models, Schema, model, UpdateQuery } from 'mongoose';

class AbstractODM<T> {
  private schema: Schema;
  private model: Model<T>;
  private nameCollection: string;
  
  constructor(schema: Schema, nameCollection: string) {
    this.schema = schema;
    this.nameCollection = nameCollection;
    this.model = models[this.nameCollection] || model(this.nameCollection, this.schema);
  }

  public async create(car: T): Promise<T> {
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

  public async updateById(id: string, car: UpdateQuery<T>) {
    return this.model.updateMany({ id }, { $set: { ...car } });
  }
}

export default AbstractODM;