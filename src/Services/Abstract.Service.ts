// import Exception from '../Exceptions/Exception';
// import IVehicle from '../Interfaces/IVehicle';
// import AbstractODM from '../Models/AbstractODM';

// class AbstractService<T, V> {
//   private notFound: string;
//   private ODM;
//   private VehicleDomain: IVehicle;
//   constructor(ODM: AbstractODM<T>, VehicleDomain: IVehicle, notFound: string) {
//     this.ODM = new ODM();
//     this.notFound = notFound;
//     this.VehicleDomain = VehicleDomain;
//   }
//   private createCarDomain(newCar: T | null): V | null {
//     if (newCar) {
//       return new this.VehicleDomain(newCar);
//     }
//     return null;
//   }

//   public async create(car: T) {
//     const newCar = await this.ODM.create(car);

//     const newDomain = this.createCarDomain(newCar);

//     return newDomain;
//   }

//   public async findAll() {
//     const newCar = await this.ODM.findAll();

//     if (!newCar.length) throw new Exception(404, this.notFound);

//     const getDomain = newCar.map((vehicle: T) => this.createCarDomain(vehicle));

//     return getDomain;
//   }

//   public async findById(id: string) {
//     const newCar = await this.ODM.findById(id);

//     if (!newCar) throw new Exception(404, this.notFound);

//     const getDomain = this.createCarDomain(newCar);

//     return getDomain;
//   }

//   public async updateById(id: string, car: T) {
//     const newCar = await this.ODM.findById(id);

//     if (!newCar) throw new Exception(404, this.notFound);

//     const updateCar = await this.ODM.updateById(id, car);

//     return updateCar;
//   }
// }

// export default AbstractService;

// // import ICar from '../Interfaces/ICar';
// // import Car from '../Domains/Car';
// // import CarODM from '../Models/CarODM';
// // import AbstractService from './Abstract.Service';

// // class CarsService extends AbstractService<ICar, Car> {
// //   private carODM = new CarODM();
// //   constructor() {
// //     super(CarODM, Car as unknown as Car, 'Car not found');
// //   }
// // }

// // export default CarsService;
