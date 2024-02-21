import { Link } from 'react-router-dom';
import './ListOfFavoriteCars.scss';
import { MdDeleteOutline } from 'react-icons/md';
import { RxCrossCircled } from 'react-icons/rx';
import { IPropsListOfFavoriteCars } from '../../interface/favoriteCars';

export const ListOfFavoriteCars: React.FC<IPropsListOfFavoriteCars> = ({
  favoriteCars,
  removeFavoriteCars,
  removeFavoriteCar,
  setIsRemoved,
}) => {
  return (
    <ul className="list-of-favorite-cars">
      {favoriteCars.map(car => (
        <li key={car.id}>
          <Link
            to="info-about-favorite-car"
            state={car.id}
            onClick={() => setIsRemoved(true)}
          >
            {car.make}
            <span>{` ${car.model}`}</span>
            {` - ${car.rentalPrice}`}
          </Link>
          <button type="button" onClick={() => removeFavoriteCar(car.id)}>
            <RxCrossCircled size={30} />
          </button>
        </li>
      ))}
      {favoriteCars.length > 1 && (
        <li className="remove-all">
          <button type="button" onClick={removeFavoriteCars}>
            <MdDeleteOutline size={38} />
          </button>
        </li>
      )}
    </ul>
  );
};
