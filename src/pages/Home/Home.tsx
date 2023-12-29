import { useState } from 'react';
import { About } from '../../components';
import './Home.scss';
import { FaArrowTurnDown } from 'react-icons/fa6';
import { RiCloseCircleLine } from 'react-icons/ri';

export const Home: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const isOpenList = (): void =>
    setIsOpen(prevState => (prevState ? false : true));

  return (
    <section className="home container">
      <h1>Welcome to RentRide - Your Ultimate Car Rental Destination!</h1>
      <p>
        At RentRide, we understand that your journey is unique, and so should be
        your ride. Our platform is designed with one goal in mind: to provide
        you with a seamless and personalized car rental experience that goes
        beyond just getting you from point A to point B.
      </p>
      <button type="button" onClick={isOpenList}>
        Why RentRide?
        {isOpen ? (
          <RiCloseCircleLine size={30} />
        ) : (
          <FaArrowTurnDown size={30} />
        )}
      </button>
      {isOpen && <About isOpenList={isOpenList} />}
      <p>
        Embark on your journey with confidence, knowing that RentRide is here to
        elevate your travel experience. Discover the joy of driving the perfect
        car for your adventure – RentRide, where the road becomes yours.
      </p>
      <p>
        Your journey, your car, your way – RentRide, because every ride should
        be an experience.
      </p>
    </section>
  );
};
