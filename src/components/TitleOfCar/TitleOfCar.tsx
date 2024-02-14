import { IPropsCar, IPropsOfMakeModelYear } from '../../types/aboutCars';
import './TitleOfCar.scss';

export const TitleOfCar: React.FC<IPropsOfMakeModelYear> = ({
  propsOfMakeModelYear,
}) => (
  <h3 className="title-of-car">
    {propsOfMakeModelYear.make}
    <span>{` ${propsOfMakeModelYear.model}`}</span>
    {`, ${propsOfMakeModelYear.year}`}
  </h3>
);
