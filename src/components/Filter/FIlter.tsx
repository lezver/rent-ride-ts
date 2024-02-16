import './FIlter.scss';
import { FaSearch } from 'react-icons/fa';
import { ICarCharacteristics } from '../../types/aboutCars';
import { IFormElements, IPropsFilterItems } from '../../types/aboutFilter';
import { useEffect } from 'react';

export const FIlter: React.FC<IPropsFilterItems> = ({
  cars,
  setFilteredCars,
  setIsSearch,
  setPage,
}) => {
  useEffect(() => setFilteredCars(cars), []);

  const heandlerSubmit = (e: React.FormEvent<IFormElements>): void => {
    e.preventDefault();

    setIsSearch(true);

    const brand: string = e.currentTarget.elements.brand.value;
    const price: string = e.currentTarget.elements.price.value;
    const from: string = e.currentTarget.elements.from.value;
    const to: string = e.currentTarget.elements.to.value;

    const filteredCars: ICarCharacteristics[] = cars
      .filter(car => (brand !== 'All' ? brand === car.make : car))
      .filter(car =>
        price !== 'All' ? price.split(' ').join('') === car.rentalPrice : car
      )
      .filter(car => (from !== '' ? Number(from) <= car.mileage : car))
      .filter(car => (to !== '' ? Number(to) >= car.mileage : car));

    setPage(8);
    setTimeout(() => {
      setFilteredCars(filteredCars);
      setIsSearch(false);
    }, 300);
  };

  const validatedValue = (e: React.ChangeEvent<HTMLInputElement>): void => {
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
          <option value="All">All</option>
          {uniqueBrands(cars).map((brand, index) => (
            <option key={index} value={brand}>
              {brand}
            </option>
          ))}
        </select>
      </fieldset>

      <fieldset>
        <legend>Price / 1 hour</legend>
        <select name="price" id="price">
          <option value="All">All</option>
          {uniquePrices(cars).map((price, index) => (
            <option key={index} value={price}>
              {price}
            </option>
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
        <FaSearch size={30} />
      </button>
    </form>
  );
};
