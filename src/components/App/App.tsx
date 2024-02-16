import { Route, Routes } from 'react-router-dom';

import { Catalog, Favorites, Home, NotFound } from '../../pages';
import { InfoAboutFavoriteCar, Layout } from '../';

export const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="catalog" element={<Catalog />} />
        <Route path="favorites" element={<Favorites />}>
          <Route
            path="info-about-favorite-car"
            element={<InfoAboutFavoriteCar />}
          />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
