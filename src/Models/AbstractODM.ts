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
    return this.model.find();
  }

  public async findById(id: string) {
    return this.model.findById(id);
  }

  public async updateById(id: string, car: UpdateQuery<T>) {
    return this.model.findByIdAndUpdate(id, { $set: { ...car } });
  }
}

export default AbstractODM;