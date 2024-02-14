import { createPortal } from 'react-dom';
import './Overlay.scss';
import { useEffect } from 'react';
import { RxCrossCircled } from 'react-icons/rx';
import { IPropsBooleanAndCar } from '../../types/aboutCars';
import { IEventKey, IEventTarget } from '../../types/aboutOverlay';
import { Article } from '../Article';

export const Overlay: React.FC<IPropsBooleanAndCar> = ({ setIsOpen, car }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', closeOverlayWithEscape);

    return () => {
      document.removeEventListener('keydown', closeOverlayWithEscape);
    };
  }, []);

  const closeOverlayWithEscape = ({ key }: IEventKey): void => {
    if (key === 'Escape') {
      setIsOpen(false);
      document.body.style.overflow = 'visible';
    }
  };

  const closeOverlayWithButton = (): void => {
    setIsOpen(false);
    document.body.style.overflow = 'visible';
  };

  const closeOverlayWithMouse = ({
    target,
    currentTarget,
  }: IEventTarget): void => {
    if (target === currentTarget) {
      setIsOpen(false);
      document.body.style.overflow = 'visible';
    }
  };
  return createPortal(
    <div className="overlay" onClick={closeOverlayWithMouse}>
      <div>
        <button type="button" onClick={closeOverlayWithButton}>
          <RxCrossCircled size={30} />
        </button>
        <Article car={car} />
      </div>
    </div>,
    document.body
  );
};
