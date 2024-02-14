import { useEffect } from 'react';
import './NotFound.scss';
import { useNavigate } from 'react-router-dom';
import { FaCarCrash } from 'react-icons/fa';

export const NotFound: React.FC = () => {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate('/', { replace: true });
    }, 3000);
  }, []);
  return (
    <section className="not-found container">
      <h2>Sorry, this page could not be found ...</h2>
      <FaCarCrash size={150} />
    </section>
  );
};
