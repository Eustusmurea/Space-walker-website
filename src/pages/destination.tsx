import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Moon from './moon';
import Mars from './Mars';
import Europa from './europa';
import Titan from './titan';
import '../App.css';
import NavDestination from '../components/ui/navdestination';

const Destination = () => {
  return (
    <div className='destination'>
      <div className='main-content'>
        <div className='content'>
          <h1 className='body-xs'>01 PICK YOUR DESTINATION</h1>
          <div className='destination-heading'>
            <div className='navdestination'>
              <NavDestination /> 
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
    </div>
  );
};

export default Destination;