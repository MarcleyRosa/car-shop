import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import Car from '../../../src/Domains/Car';
import ICar from '../../../src/Interfaces/ICar';
import CarsService from '../../../src/Services/Cars.Service';

const mockCar: ICar[] = [
  {
    id: '6348513f34c397abcad040b2',
    model: 'Marea',
    year: 2002,
    color: 'Black',
    status: true,
    buyValue: 15.990,
    doorsQty: 4,
    seatsQty: 5,
  },
  {
    id: '6348513f34c397abcad040b2',
    model: 'Marea',
    year: 2002,
    color: 'Black',
    status: true,
    buyValue: 15.990,
    doorsQty: 4,
    seatsQty: 5,
  },
];

describe('Deveria cria car', function () {
  it('deveria criar novo carro', async function () {
    const newCar: Car = new Car(mockCar[0]);

    sinon.stub(Model, 'create').resolves(newCar);

    const service = new CarsService();
    const result = await service.create(mockCar[0]);

    expect(result).to.be.deep.equal(newCar);

    sinon.restore();
  });

  it('deveria achar todos os carros', async function () {
    const newCar: Car[] = mockCar.map((e) => new Car(e));

    sinon.stub(Model, 'find').resolves(newCar);

    const service = new CarsService();
    const result = await service.findAll();

    expect(result).to.be.deep.equal(newCar);

    sinon.restore();
  });

  it('deveria achar um carro usando id', async function () {
    const newCar: Car = new Car(mockCar[1]);

    sinon.stub(Model, 'findById').resolves(newCar);

    const service = new CarsService();
    const result = await service.findById('6348513f34c397abcad040b2');

    expect(result).to.be.deep.equal(newCar);

    sinon.restore();
  });
});