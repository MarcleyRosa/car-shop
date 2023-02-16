import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import MotorcyclesService from '../../../src/Services/Motorcycles.Service';
import Motorcycles from '../../../src/Domains/Motorcycle';
import IMotorcycle from '../../../src/Interfaces/IMotorcycles';

const mockMotorcycle: IMotorcycle[] = [
  {
    id: '6348513f34c397abcad040b2',
    model: 'Honda Cb 400f Hornet',
    year: 2010,
    color: 'Black',
    status: true,
    buyValue: 17.000,
    category: 'Street',
    engineCapacity: 400,
  },
  {
    id: '6348513f34c397abcad040b3',
    model: 'Honda Cb 600f Hornet',
    year: 2005,
    color: 'Yellow',
    status: true,
    buyValue: 30.000,
    category: 'Street',
    engineCapacity: 600,
  },
];

describe('Motorcycle Service', function () {
  describe('Deveria cria motorcycle', function () {
    it('deveria criar novo motorcycle', async function () {
      const newMotorcycle: Motorcycles = new Motorcycles(mockMotorcycle[0]);

      sinon.stub(Model, 'create').resolves(newMotorcycle);

      const service = new MotorcyclesService();
      const result = await service.create(mockMotorcycle[0]);

      expect(result).to.be.deep.equal(newMotorcycle);

      sinon.restore();
    });

    it('deveria achar todos os carros', async function () {
      const newCar: Motorcycles[] = mockMotorcycle.map((e) => new Motorcycles(e));

      sinon.stub(Model, 'find').resolves(newCar);

      const service = new MotorcyclesService();
      const result = await service.findAll();

      expect(result).to.be.deep.equal(mockMotorcycle);
    });

    it('deveria achar um carro usando id', async function () {
      const newCar: Motorcycles = new Motorcycles(mockMotorcycle[1]);

      sinon.stub(Model, 'findById').resolves(newCar);

      const service = new MotorcyclesService();
      const result = await service.findById('6348513f34c397abcad040b2');

      expect(result).to.be.deep.equal(mockMotorcycle[1]);
    });
  });
});