import { useEffect, useState } from 'react';
import { IAdvantage, IAdvantages } from '../../interface/advantages';
import './Advantages.scss';
import { RiCloseCircleLine } from 'react-icons/ri';
import { advantages } from '../../services/listOfAdvantages';

export const Advantages: React.FC<IAdvantages> = ({ isOpenList }) => {
  const [listOfAdvantages, setListOfAdvantages] = useState<IAdvantage[]>([]);

  useEffect(() => listOfAdvantages && setListOfAdvantages(advantages), []);

  return (
    <ol className="advantages">
      {listOfAdvantages?.map(({ title, text }, index) => (
        <li key={index}>
          <h2>{title}</h2>
          <p>{text}</p>
        </li>
      ))}
      <li>
        <button type="button">
          <RiCloseCircleLine size={30} onClick={isOpenList} />
        </button>
      </li>
    </ol>
  );
};
