import { ICarCharacteristics } from './aboutCars';

export interface IPropsFilterItems {
  cars: ICarCharacteristics[];
  setFilteredCars: (filteredCars: ICarCharacteristics[]) => void;
  setIsSearch: (bool: boolean) => void;
  setPage: (num: number) => void;
}

export interface IElements extends HTMLFormControlsCollection {
  brand: HTMLSelectElement;
  price: HTMLSelectElement;
  from: HTMLInputElement;
  to: HTMLInputElement;
}

export interface IFormElements extends HTMLFormElement {
  readonly elements: IElements;
}
