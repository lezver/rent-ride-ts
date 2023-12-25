import { NavLink, Outlet, Route, Routes } from 'react-router-dom';
import './App.css';
import { Suspense } from 'react';

const App: React.FC = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
            </ul>
            <Suspense>
              <Outlet />
            </Suspense>
          </>
        }
      >
        <Route index element={<section>Home</section>} />
        <Route path="about" element={<div>About</div>} />
        <Route path="*" element={<div>Not Found</div>} />
      </Route>
    </Routes>
  );
};

export default App;
