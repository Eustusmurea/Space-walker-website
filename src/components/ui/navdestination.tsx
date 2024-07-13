import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../App.css';

const NavDestination = () => {
  return (
    <nav>
      <ul className='ul'>
        <li className='li'>
          <NavLink to="/destination/moon" className={({ isActive }) => isActive ? "active" : ""}>Moon</NavLink>
        </li>
        <li className='li'>
          <NavLink to="/destination/mars" className={({ isActive }) => isActive ? "active" : ""}>Mars</NavLink>
        </li>
        <li className='li'>
          <NavLink to="/destination/europa" className={({ isActive }) => isActive ? "active" : ""}>Europa</NavLink>
        </li>
        <li className='li'>
          <NavLink to="/destination/titan" className={({ isActive }) => isActive ? "active" : ""}>Titan</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavDestination;

