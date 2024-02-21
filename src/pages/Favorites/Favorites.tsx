import { Suspense, useEffect, useState } from 'react';
import './Favorites.scss';
import { ICar } from '../../interface/car';
import { Outlet } from 'react-router-dom';
import { ListOfFavoriteCars } from '../../components';
import { TbCarOff } from 'react-icons/tb';

export const Favorites: React.FC = () => {
  const [favoriteCars, setFavoriteCars] = useState<ICar[]>([]);
  const [isRemoved, setIsRemoved] = useState<boolean>(true);

  useEffect(() => {
    const favoriteCars = localStorage.getItem('addedToFavoriteCars');

    if (favoriteCars) setFavoriteCars(JSON.parse(favoriteCars));
  }, []);

  const removeFavoriteCars = (): void => {
    setFavoriteCars([]);

    localStorage.setItem('addedToFavoriteCars', JSON.stringify([]));
  };

  const removeFavoriteCar = (id: number): void => {
    setIsRemoved(false);
    const newListFavoriteCars = favoriteCars.filter(car => car.id !== id);

    setFavoriteCars(newListFavoriteCars);

    localStorage.setItem(
      'addedToFavoriteCars',
      JSON.stringify(newListFavoriteCars)
    );
  };

  return (
    <section className="favorites container">
      <h2 className="hidden-title">Favorites</h2>
      {favoriteCars.length ? (
        <>
          <ListOfFavoriteCars
            favoriteCars={favoriteCars}
            removeFavoriteCars={removeFavoriteCars}
            removeFavoriteCar={removeFavoriteCar}
            setIsRemoved={setIsRemoved}
          />

          {isRemoved && (
            <Suspense>
              <Outlet />
            </Suspense>
          )}
        </>
      ) : (
        <h3>
          You haven't added any car
          <TbCarOff size={150} />
        </h3>
      )}
    </section>
  );
};
