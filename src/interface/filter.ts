import { ICar } from './car';

export interface IPropsFilterItems {
  cars: ICar[];
  setFilteredCars: (filteredCars: ICar[]) => void;
  setIsSearch: (bool: boolean) => void;
  setPage: (num: number) => void;
}

export interface IElements extends HTMLFormControlsCollection {
  brand: HTMLSelectElement;
  price: HTMLSelectElement;
  from: HTMLInputElement;
  to: HTMLInputElement;
  search: HTMLButtonElement;
  remove: HTMLButtonElement;
}

export interface IFormElements extends HTMLFormElement {
  elements: IElements;
}

export declare interface ICollection extends Element {
  newTypeOfShit: number;
}
