import { ChangeEvent, ChangeEventHandler, FormEvent } from 'react';
import './FIlter.scss';
import { FaSearch } from 'react-icons/fa';
import { ICarCharacteristics, ICars } from '../../types/aboutCars';

export const FIlter: React.FC<ICars> = ({ cars }) => {
  const heandlerSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(e);
  };

  const validatedValue = (e: ChangeEvent<HTMLInputElement>): void => {
    const maxLength: number = Math.max(
      ...cars.map(car => car.mileage)
    ).toString().length;
    if (Number(e.target.value) < 0) {
      e.target.value = '';
    } else if (e.target.value.length >= maxLength) {
      e.target.value = e.target.value.slice(0, 5);
    }
  };

  const uniqueBrands = (cars: ICarCharacteristics[]): string[] =>
    cars
      .map(car => car.make)
      .filter((make, index, arr) => arr.indexOf(make) === index)
      .sort();

  const uniquePrices = (cars: ICarCharacteristics[]): string[] =>
    cars
      .map(car => car.rentalPrice.slice(1))
      .filter((price, index, arr) => arr.indexOf(price) === index)
      .map(price => Number(price))
      .sort((a, b) => a - b)
      .map(price => '$ ' + price);

  return (
    <form className="filter" onSubmit={heandlerSubmit}>
      <fieldset>
        <legend>Car brand</legend>
        <select name="brand" id="brand">
          <option value="all">All</option>
          {uniqueBrands(cars).map((brand, index) => (
            <option key={index}>{brand}</option>
          ))}
        </select>
      </fieldset>

      <fieldset>
        <legend>Price / 1 hour</legend>
        <select name="price" id="price">
          <option value="all">All</option>
          {uniquePrices(cars).map((price, index) => (
            <option key={index}>{price}</option>
          ))}
        </select>
      </fieldset>

      <fieldset>
        <legend> Car mileage / km</legend>
        <input
          type="number"
          placeholder="From"
          name="from"
          onChange={validatedValue}
        />
        <input
          type="number"
          placeholder="To"
          name="to"
          onChange={validatedValue}
        />
      </fieldset>
      <button type="submit">
        <FaSearch size={38} />
      </button>
    </form>
  );
};
