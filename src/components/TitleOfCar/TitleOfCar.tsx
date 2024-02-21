import { IPropsTitleOfCar } from '../../interface/titleOfCar';
import './TitleOfCar.scss';

export const TitleOfCar: React.FC<IPropsTitleOfCar> = ({ items }) => (
  <h3 className="title-of-car">
    {items.make}
    <span>{` ${items.model}`}</span>
    {`, ${items.year}`}
  </h3>
);
