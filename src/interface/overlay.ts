import { ICar } from './car';

export interface IPropsOverlay {
  setIsOpen: (bool: boolean) => void;
  car: ICar;
}

export interface IEventKey {
  key: string;
}

export interface IEventTarget {
  target: Object;
  currentTarget: Object;
}
