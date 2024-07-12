import React from 'react';
import { Route, Link, useRouteMatch, Routes } from 'react-router-dom';
import Moon from './moon';
import Mars from './Mars';
import Europa from './europa';
import Titan from './titan';
import '../App.css';

const Destination = () => {
  let { path, url } = useRouteMatch();

  return (
    <div className='destination'>
      <div className='main-content'>
        <div className='content'>
          <h1 className='body-xs'>01 PICK YOUR DESTINATION</h1>
          <div className='destination-heading'>
            <nav>
              <ul>
                <li>
                  <Link to={`${url}/moon`}>01 MOON</Link>
                </li>
                <li>
                  <Link to={`${url}/mars`} >02 MARS</Link>
                </li>
                <li>
                  <Link to={`${url}/europa`}>03 EUROPA</Link>
                </li>
                <li>
                  <Link to={`${url}/titan`}>04 TITAN</Link>
                </li>
              </ul>
            </nav>
          </div>
          <Routes>
            <Route path="moon" element={<Moon />} />
            <Route path="mars" element={<Mars />} />
            <Route path="europa" element={<Europa />} />
            <Route path="titan" element={<Titan />} />
            <Route path="/" element={<Moon />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Destination;
