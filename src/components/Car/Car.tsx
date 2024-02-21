import { ICar, IPropsCar } from '../../interface/car';
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md';
import './Car.scss';
import { useEffect, useState } from 'react';
import { Overlay } from '../Overlay';
import { TitleOfCar } from '../TitleOfCar';
import { getsCityAndCountry } from '../../healpers';

export const Car: React.FC<IPropsCar> = ({ car }) => {
  useEffect(() => {
    const localCars = localStorage.getItem('addedToFavoriteCars');

    if (localCars)
      JSON.parse(localCars).find(({ id }: ICar) =>
        id === car.id ? setIsFavorite(true) : ''
      );
  }, [car]);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  const isFavoriteCar = (): void => {
    const localCars = localStorage.getItem('addedToFavoriteCars');

    const localCarsToArray = localCars ? JSON.parse(localCars) : [];

    const checkCarInArr = localCarsToArray.find(
      ({ id }: ICar) => id === car.id
    );

    if (checkCarInArr) {
      const removeCarInLocalCars = localCarsToArray.filter(
        ({ id }: ICar) => id !== car.id
      );

      localStorage.setItem(
        'addedToFavoriteCars',
        JSON.stringify(removeCarInLocalCars)
      );
      setIsFavorite(false);
    } else {
      localCarsToArray.push(car);

      localStorage.setItem(
        'addedToFavoriteCars',
        JSON.stringify(localCarsToArray)
      );

      setIsFavorite(true);
    }
  };

  const getsFirstFunction = (str: string[]): string => str.slice(0, 1)[0];

  return (
    <li className="car">
      <div className="car__img-box">
        <img src={car.img} alt={car.make} />

        <button onClick={isFavoriteCar} type="button">
          {isFavorite ? (
            <MdFavorite size={38} />
          ) : (
            <MdFavoriteBorder size={38} />
          )}
        </button>
      </div>

      <div className="car__title-name-and-price">
        <TitleOfCar
          items={{
            model: car.model,
            make: car.make,
            year: car.year,
          }}
        />
        <span>{car.rentalPrice}</span>
      </div>

      <p>{`${getsCityAndCountry(car.address)} | ${car.rentalCompany}`}</p>
      <p>{`${car.type} | ${car.mileage} | ${getsFirstFunction(
        car.functionalities
      )}`}</p>

      <button type="button" onClick={() => setIsOpen(true)}>
        Learn more
      </button>
      {isOpen && <Overlay setIsOpen={setIsOpen} car={car} />}
    </li>
  );
};
