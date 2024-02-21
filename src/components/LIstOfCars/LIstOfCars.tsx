import { ICars } from '../../interface/cars';
import { Car } from '../Car';
import './LIstOfCars.scss';

export const LIstOfCars: React.FC<ICars> = ({ cars }) => {
  return (
    <ul className="list-of-cars">
      {cars.map(car => (
        <Car key={car.id} car={car} />
      ))}
    </ul>
  );
};
