import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../App.css'

const NavDestination = () => {
  return (
    <nav>
      <ul className='ul'>
        <li className='li'><NavLink to="/destination/moon">Moon</NavLink></li>
        <li className='li'><NavLink to="/destination/mars">Mars</NavLink></li>
        <li className='li'><NavLink to="/destination/europa">Europa</NavLink></li>
        <li className='li'><NavLink to="/destination/titan">Titan</NavLink></li>
      </ul>
    </nav>
  );
};

export default NavDestination;
