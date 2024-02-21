import './FIlter.scss';
import { FaSearch, FaSyncAlt } from 'react-icons/fa';
import { ICar } from '../../interface/car';
import { IFormElements, IPropsFilterItems } from '../../interface/filter';
import { useEffect, useRef, useState } from 'react';

export const FIlter: React.FC<IPropsFilterItems> = ({
  cars,
  setFilteredCars,
  setIsSearch,
  setPage,
}) => {
  const refOfFilter = useRef<IFormElements>(null);

  const [isRemove, setIsRemove] = useState<boolean>(false);

  useEffect(() => {
    setFilteredCars(cars);

    if (refOfFilter.current) {
      const remove = refOfFilter.current.elements.remove;
      const search = refOfFilter.current.elements.search;

      remove.disabled = true;
      search.disabled = true;
    }
  }, []);

  const removeBtn = (): void => setIsRemove(true);

  const listenerOfItems = (e: React.ChangeEvent<IFormElements>): void => {
    const brand = e.currentTarget.elements.brand;
    const price = e.currentTarget.elements.price;
    const from = e.currentTarget.elements.from;
    const to = e.currentTarget.elements.to;

    const search = e.currentTarget.elements.search;
    const remove = e.currentTarget.elements.remove;

    search.disabled = true;
    remove.disabled = true;

    if (
      brand.value === 'All' &&
      price.value === 'All' &&
      from.value === '' &&
      to.value === ''
    ) {
      search.disabled = true;
      remove.disabled = true;
    } else {
      search.disabled = false;
      remove.disabled = false;
    }
  };

  const heandlerSubmit = (e: React.FormEvent<IFormElements>): void => {
    e.preventDefault();

    setIsSearch(true);

    const brand = e.currentTarget.elements.brand;
    const price = e.currentTarget.elements.price;
    const from = e.currentTarget.elements.from;
    const to = e.currentTarget.elements.to;

    const search = e.currentTarget.elements.search;
    const remove = e.currentTarget.elements.remove;

    if (isRemove) {
      brand.value = 'All';
      price.value = 'All';
      from.value = '';
      to.value = '';

      setIsRemove(false);

      setPage(8);
      setFilteredCars(cars);
      setTimeout(() => setIsSearch(false), 300);

      remove.disabled = true;
    } else {
      const filteredCars: ICar[] = cars
        .filter(car => (brand.value !== 'All' ? brand.value === car.make : car))
        .filter(car =>
          price.value !== 'All'
            ? price.value.split(' ').join('') === car.rentalPrice
            : car
        )
        .filter(car =>
          from.value !== '' ? Number(from.value) <= car.mileage : car
        )
        .filter(car =>
          to.value !== '' ? Number(to.value) >= car.mileage : car
        );
      setPage(8);
      setFilteredCars(filteredCars);
      setTimeout(() => setIsSearch(false), 300);

      search.disabled = true;
    }
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

  const uniqueBrands = (cars: ICar[]): string[] =>
    cars
      .map(car => car.make)
      .filter((make, index, arr) => arr.indexOf(make) === index)
      .sort();

  const uniquePrices = (cars: ICar[]): string[] =>
    cars
      .map(car => car.rentalPrice.slice(1))
      .filter((price, index, arr) => arr.indexOf(price) === index)
      .map(price => Number(price))
      .sort((a, b) => a - b)
      .map(price => '$ ' + price);

  return (
    <form
      id="filter"
      className="filter"
      onSubmit={heandlerSubmit}
      onChange={listenerOfItems}
      ref={refOfFilter}
    >
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
      <button type="submit" name="search">
        <FaSearch size={30} />
      </button>
      <button type="submit" name="remove" onClick={removeBtn}>
        <FaSyncAlt size={30} />
      </button>
    </form>
  );
};
