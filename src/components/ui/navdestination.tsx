import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../App.css';

const NavDestination = () => {
  return (
    <nav className='space-x-6 text-gray-400 mb-8'>
      <NavLink to="/destination/moon" className={({ isActive }) => isActive ? "active" : ""}>Moon</NavLink>
      <NavLink to="/destination/mars" className={({ isActive }) => isActive ? "active" : ""}>Mars</NavLink>
      <NavLink to="/destination/europa" className={({ isActive }) => isActive ? "active" : ""}>Europa</NavLink>
      <NavLink to="/destination/titan" className={({ isActive }) => isActive ? "active" : ""}>Titan</NavLink>
    </nav>
  );
};

export default NavDestination;

