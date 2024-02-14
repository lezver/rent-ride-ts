import { useEffect, useState } from 'react';
import { Article } from '../Article';

import { useLocation } from 'react-router-dom';
import { ICarCharacteristics } from '../../types/aboutCars';

export const InfoAboutFavoriteCar: React.FC = () => {
  const stub: ICarCharacteristics = {
    accessories: [],
    address: '',
    description: '',
    engineSize: '',
    fuelConsumption: '',
    functionalities: [],
    id: 0,
    img: '',
    make: '',
    mileage: 0,
    model: '',
    rentalCompany: '',
    rentalConditions: '',
    rentalPrice: '',
    type: '',
    year: 0,
  };
  const [foundCar, setFoundCar] = useState<ICarCharacteristics>(stub);
  const { state } = useLocation();

  useEffect(() => {
    const localCars = localStorage.getItem('addedToFavoriteCars');

    if (localCars) {
      JSON.parse(localCars).find(
        (car: ICarCharacteristics) => car.id === state && setFoundCar(car)
      );
    }
  }, [state]);

  return <>{<Article car={foundCar} />}</>;
};
