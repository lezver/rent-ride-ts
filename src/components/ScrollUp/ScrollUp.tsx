import { createPortal } from 'react-dom';
import { FaArrowAltCircleUp } from 'react-icons/fa';
import './ScrollUp.scss';

export const ScrollUp: React.FC = () =>
  createPortal(
    <a href="#scroll-up" className="scroll-up">
      <FaArrowAltCircleUp size={45} />
    </a>,
    document.body
  );
