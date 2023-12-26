import { Route, Routes } from 'react-router-dom';
import './App.scss';

import { Catalog, Favorites, Home } from '../../pages';
import { Layout } from '../';

export const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="catalog" element={<Catalog />} />
        <Route path="favorites" element={<Favorites />} />
        <Route path="*" element={<div>Not Found</div>} />
      </Route>
    </Routes>
  );
};
