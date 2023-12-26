import { NavLink } from 'react-router-dom';
import './Nav.scss';

export const Nav: React.FC = () => {
  return (
    <nav className="nav container">
      <ul>
        <li>
          <NavLink to="/">
            Rent<span>Ride</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/catalog">Catalog</NavLink>
          <NavLink to="/favorites">Favorites</NavLink>
        </li>
      </ul>
    </nav>
  );
};
