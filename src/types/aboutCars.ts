export interface ICarCharacteristics {
  accessories: string[];
  address: string;
  description: string;
  engineSize: string;
  fuelConsumption: string;
  functionalities: string[];
  id: number;
  img: string;
  make: string;
  mileage: number;
  model: string;
  rentalCompany: string;
  rentalConditions: string;
  rentalPrice: string;
  type: string;
  year: number;
}

export interface ICars {
  cars: ICarCharacteristics[];
}

export interface IPropsCar {
  car: ICarCharacteristics;
}

export interface IPropsBooleanAndCar {
  setIsOpen: Function;
  car: ICarCharacteristics;
}

export interface IPropsOfMakeModelYear {
  propsOfMakeModelYear: {
    make: string;
    model: string;
    year: number;
  };
}
