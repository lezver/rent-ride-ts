import { ICarCharacteristics } from './aboutCars';

export interface IPropsListOfFavoriteCars {
  favoriteCars: ICarCharacteristics[];
  removeFavoriteCars: () => void;
  removeFavoriteCar: (id: number) => void;
  setIsRemoved: (bool: boolean) => void;
}
