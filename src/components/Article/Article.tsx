import { getsCityAndCountry } from '../../healpers';
import { IPropsCar } from '../../types/aboutCars';
import { TitleOfCar } from '../TitleOfCar';

import './Article.scss';

export const Article: React.FC<IPropsCar> = ({ car }) => {
  const accessoriesToString = (accessories: string[]): string =>
    accessories?.map(i => i).join(' | ');

  const conditionsStringToSeparateValue = (str: string) =>
    str?.split('\n').map((item, index) =>
      index === 0 ? (
        <li key={index}>
          {`${item.slice(0, -2)} `}
          <span>{item.slice(-2)}</span>
        </li>
      ) : (
        <li key={index}>{item}</li>
      )
    );

  return (
    <article className="article">
      <img src={car?.img} alt={car?.model} />
      <TitleOfCar
        propsOfMakeModelYear={{
          model: car?.model,
          make: car?.make,
          year: car?.year,
        }}
      />
      <ul>
        <li>{`${getsCityAndCountry(car?.address)} | Year:${car?.year} | Type:${
          car?.type
        }`}</li>
        <li>{`Fuel Consumption: ${car?.fuelConsumption} | Engine Size: ${car?.engineSize}`}</li>
      </ul>
      <p>{car?.description}</p>

      <h4>Accessaries and Functionalities:</h4>
      <ul>
        <li>{accessoriesToString(car?.accessories)}</li>
        <li>{accessoriesToString(car?.functionalities)}</li>
      </ul>

      <h4>Rental Conditions:</h4>
      <ul className="rental-conditions">
        {conditionsStringToSeparateValue(car?.rentalConditions)}
        <li>
          Milage:
          <span>{` ${car?.mileage}`}</span>
        </li>
        <li>
          Price:
          <span>{` ${car?.rentalPrice}`}</span>
        </li>
      </ul>

      <a href="tel:+380730000000">Rental Car</a>
    </article>
  );
};
