import { aboutButton } from '../../types/aboutButton';
import './About.scss';
import { RiCloseCircleLine } from 'react-icons/ri';

export const About: React.FC<aboutButton> = ({ isOpenList }) => {
  return (
    <ol className="about">
      <li>
        <h2>Unmatched Variety:</h2>
        <p>
          Choose from an extensive fleet of vehicles to match your style and
          needs. Whether you're looking for a sleek sedan, a spacious SUV, or a
          fuel-efficient compact car, RentRide has the perfect wheels for every
          occasion.
        </p>
      </li>
      <li>
        <h2>Easy Booking Process:</h2>
        <p>
          Our user-friendly interface ensures a hassle-free booking process.
          With just a few clicks, you can reserve the car of your choice,
          allowing you to focus on what matters most – your upcoming adventure.
        </p>
      </li>
      <li>
        <h2>Transparent Pricing:</h2>
        <p>
          Say goodbye to hidden fees and unexpected charges. At RentRide, we
          believe in transparent pricing, providing you with a clear
          understanding of the costs associated with your rental. No surprises,
          just straightforward and fair rates.
        </p>
      </li>
      <li>
        <h2>Convenience at Your Fingertips:</h2>
        <p>
          Access RentRide from the comfort of your home or on the go. Our
          website is optimized for both desktop and mobile devices, giving you
          the flexibility to book your ride anytime, anywhere.
        </p>
      </li>
      <li>
        <h2>Customer-Centric Support:</h2>
        <p>
          Have questions or need assistance? Our dedicated customer support team
          is ready to help. We value your satisfaction and are committed to
          ensuring that your RentRide experience is nothing short of
          exceptional.
        </p>
      </li>
      <li>
        <button type="button">
          <RiCloseCircleLine size={30} onClick={isOpenList} />
        </button>
      </li>
    </ol>
  );
};
