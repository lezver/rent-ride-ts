import { ICar } from './car';

export interface IPropsListOfFavoriteCars {
  favoriteCars: ICar[];
  removeFavoriteCars: () => void;
  removeFavoriteCar: (id: number) => void;
  setIsRemoved: (bool: boolean) => void;
}
